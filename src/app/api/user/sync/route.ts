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

    // Fetch streak and total XP
    const streak = await prisma.learningStreak.findUnique({
      where: { userId },
    });

    // Fetch completed paths
    const progress = await prisma.userProgress.findMany({
      where: { userId, contentType: "jlpt-path", completed: true },
    });
    const completedPaths = progress.map(p => p.contentId);

    // Fetch study sessions for weekly stats and skills
    const sessions = await prisma.studySession.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    // Calculate Weekly XP (Last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const weeklySessions = sessions.filter(s => new Date(s.createdAt) >= sevenDaysAgo);
    
    // Group weekly XP by day of week
    const weeklyXp = [0, 0, 0, 0, 0, 0, 0];
    weeklySessions.forEach(s => {
      const dayIndex = new Date(s.createdAt).getDay();
      // Adjust to Monday=0, Sunday=6 to match frontend if needed, but let's just use getDay (0=Sun, 1=Mon)
      const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Mon=0 ... Sun=6
      if (adjustedIndex >= 0 && adjustedIndex <= 6) {
        weeklyXp[adjustedIndex] += s.xpEarned;
      }
    });

    // Calculate Skill Stats
    let vocabXP = 0;
    let kanjiXP = 0;
    let grammarXP = 0;

    sessions.forEach(s => {
      if (s.type === "Kosakata") vocabXP += s.xpEarned;
      if (s.type === "Kanji") kanjiXP += s.xpEarned;
      if (s.type === "Tata Bahasa") grammarXP += s.xpEarned;
    });

    const totalStatsXP = vocabXP + kanjiXP + grammarXP || 1; // avoid div by 0

    const skillStats = {
      vocabulary: Math.min(100, Math.round((vocabXP / totalStatsXP) * 100) + 10),
      grammar: Math.min(100, Math.round((grammarXP / totalStatsXP) * 100) + 5),
      kanji: Math.min(100, Math.round((kanjiXP / totalStatsXP) * 100)),
      listening: 0, // Mock for now
      reading: 0, // Mock for now
    };

    return NextResponse.json({
      success: true,
      data: {
        totalXp: streak?.totalXp || 0,
        level: streak?.level || 1,
        completedPaths,
        weeklyXp,
        skillStats,
      }
    });
  } catch (error) {
    console.error("Sync API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
