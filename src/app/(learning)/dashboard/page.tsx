import { auth } from "@/../auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const userId = session.user.id;

  // Fetch user data
  const [streak, userProgress, recentSessions] = await Promise.all([
    prisma.learningStreak.findUnique({ where: { userId } }),
    prisma.userProgress.findMany({ where: { userId }, take: 20, orderBy: { lastStudied: "desc" } }),
    prisma.studySession.findMany({ where: { userId }, take: 7, orderBy: { createdAt: "desc" } }),
  ]);

  const completedCount = userProgress.filter((p) => p.completed).length;
  const totalXP = streak?.totalXp ?? 0;
  const currentStreak = streak?.currentStreak ?? 0;
  const level = streak?.level ?? 1;

  const userData = {
    name: session.user.name || "Pelajar",
    xp: totalXP,
    level,
    streak: currentStreak,
    completedItems: completedCount,
    studySessions: recentSessions.length,
  };

  return <DashboardClient userData={userData} />;
}
