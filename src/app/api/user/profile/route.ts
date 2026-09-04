import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
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
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get streak data
    const streak = await prisma.learningStreak.findUnique({
      where: { userId },
    });

    // Get total study days (distinct days with study sessions)
    const sessions = await prisma.studySession.findMany({
      where: { userId },
      select: { createdAt: true },
    });
    const studyDays = new Set(
      sessions.map(s => s.createdAt.toISOString().split("T")[0])
    );

    // Get quiz accuracy
    const quizAttempts = await prisma.quizAttempt.findMany({
      where: { userId },
      select: { correct: true },
    });
    const totalQuizzes = quizAttempts.length;
    const correctQuizzes = quizAttempts.filter(a => a.correct).length;
    const quizAccuracy = totalQuizzes > 0 ? Math.round((correctQuizzes / totalQuizzes) * 100) : 0;

    // Get mastered items count
    const masteredItems = await prisma.userProgress.count({
      where: { userId, completed: true },
    });

    return NextResponse.json({
      success: true,
      data: {
        name: user.name || "Pelajar",
        email: user.email,
        image: user.image,
        jlptTarget: user.jlptTarget || "N5",
        joinDate: user.createdAt.toISOString(),
        totalXp: streak?.totalXp || 0,
        level: streak?.level || 1,
        streak: streak?.currentStreak || 0,
        totalStudyDays: studyDays.size,
        totalSessions: sessions.length,
        quizAccuracy,
        masteredItems,
      },
    });
  } catch (error) {
    console.error("Profile GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, jlptTarget } = body;

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...(name !== undefined && { name }),
        ...(jlptTarget !== undefined && { jlptTarget }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        jlptTarget: true,
      },
    });

    return NextResponse.json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("Profile PUT Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
