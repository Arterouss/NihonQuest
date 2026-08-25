import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { xpAmount, category, isN5 } = body;

    const userId = session.user.id;

    // Ambil atau buat LearningStreak
    let streak = await prisma.learningStreak.findUnique({
      where: { userId },
    });

    if (!streak) {
      streak = await prisma.learningStreak.create({
        data: {
          userId,
          totalXp: xpAmount || 0,
          level: Math.max(1, Math.floor((xpAmount || 0) / 100) + 1),
        },
      });
    } else {
      const newTotalXp = streak.totalXp + (xpAmount || 0);
      const newLevel = Math.max(1, Math.floor(newTotalXp / 100) + 1);

      streak = await prisma.learningStreak.update({
        where: { userId },
        data: {
          totalXp: newTotalXp,
          level: newLevel,
          lastStudyDate: new Date(),
        },
      });
    }

    // Catat Study Session (untuk statistik mingguan dan kategori)
    if (category) {
      await prisma.studySession.create({
        data: {
          userId,
          type: category,
          duration: 60, // Dummy 1 menit
          xpEarned: xpAmount || 0,
          itemsStudied: 1,
        },
      });
    }

    // Jika ini modul N5, catat UserProgress
    if (isN5) {
      // Kita asumsikan kategori ini adalah modul yang diselesaikan
      await prisma.userProgress.upsert({
        where: {
          userId_contentType_contentId: {
            userId,
            contentType: "jlpt-path",
            contentId: category,
          },
        },
        create: {
          userId,
          contentType: "jlpt-path",
          contentId: category,
          completed: true,
          attempts: 1,
        },
        update: {
          completed: true,
          attempts: { increment: 1 },
        },
      });
    }

    return NextResponse.json({ success: true, streak });
  } catch (error) {
    console.error("Progress API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
