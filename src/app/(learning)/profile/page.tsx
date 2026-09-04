import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import ProfileClient from "./ProfileClient";

export const metadata = {
  title: "Profil | NihonQuest",
};

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  // Fetch initial profile data from our API on the server
  // Because it's a server component we can either use fetch with absolute URL 
  // or fetch directly from the database to avoid network request
  // Let's use fetch with absolute URL for simplicity, using headers for cookie/auth forwarding
  // Actually, since we are in a server component, it's safer to query DB or just let Client fetch?
  // But wait, Server Components can't do relative fetches without base URL.
  // We can just query the DB directly here.

  const { prisma } = await import("@/lib/prisma");
  
  const userId = session.user.id;
  const user = await prisma.user.findUnique({
    where: { id: userId! },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      jlptTarget: true,
      createdAt: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const streak = await prisma.learningStreak.findUnique({
    where: { userId: userId! },
  });

  const sessions = await prisma.studySession.findMany({
    where: { userId: userId! },
    select: { createdAt: true },
  });

  const studyDays = new Set(
    sessions.map(s => s.createdAt.toISOString().split("T")[0])
  );

  const quizAttempts = await prisma.quizAttempt.findMany({
    where: { userId: userId! },
    select: { correct: true },
  });

  const totalQuizzes = quizAttempts.length;
  const correctQuizzes = quizAttempts.filter(a => a.correct).length;
  const quizAccuracy = totalQuizzes > 0 ? Math.round((correctQuizzes / totalQuizzes) * 100) : 0;

  const masteredItems = await prisma.userProgress.count({
    where: { userId: userId!, completed: true },
  });

  const initialData = {
    name: user.name || "Pelajar",
    email: user.email || "",
    jlptTarget: user.jlptTarget || "N5",
    joinDate: user.createdAt.toISOString(),
    totalXp: streak?.totalXp || 0,
    level: streak?.level || 1,
    streak: streak?.currentStreak || 0,
    totalStudyDays: studyDays.size,
    totalSessions: sessions.length,
    quizAccuracy,
    masteredItems,
  };

  return <ProfileClient initialData={initialData} />;
}
