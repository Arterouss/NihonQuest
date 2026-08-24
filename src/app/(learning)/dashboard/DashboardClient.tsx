"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Flame, Zap, BookOpen, Target, Trophy, ArrowRight,
  CheckCircle2, Clock, Star, Calendar, TrendingUp,
  ChevronRight, Brain, Layers,
} from "lucide-react";

interface DashboardClientProps {
  userData: {
    name: string;
    xp: number;
    level: number;
    streak: number;
    completedItems: number;
    studySessions: number;
  };
}

const quickActions = [
  { href: "/hiragana", label: "Hiragana", icon: "あ", color: "#D95F76", bg: "#FCE7EC" },
  { href: "/katakana", label: "Katakana", icon: "ア", color: "#4F46E5", bg: "#EEF2FF" },
  { href: "/kanji", label: "Kanji", icon: "漢", color: "#8B5CF6", bg: "#EDE9FE" },
  { href: "/vocabulary", label: "Kosakata", icon: "語", color: "#22C55E", bg: "#DCFCE7" },
  { href: "/grammar", label: "Tata Bahasa", icon: "文", color: "#F59E0B", bg: "#FEF9C3" },
  { href: "/flashcards", label: "Flashcard", icon: "🃏", color: "#3B82F6", bg: "#DBEAFE" },
  { href: "/quiz", label: "Kuis", icon: "❓", color: "#EC4899", bg: "#FCE7F3" },
  { href: "/jlpt", label: "JLPT", icon: "🎯", color: "#F97316", bg: "#FED7AA" },
];

const dailyChallengeItems = [
  { label: "5 Kanji Baru", xp: "+20 XP", done: false },
  { label: "10 Kosakata", xp: "+30 XP", done: false },
  { label: "5 Tata Bahasa", xp: "+25 XP", done: false },
  { label: "5 Soal Latihan", xp: "+25 XP", done: false },
];

const recommendedLessons = [
  { href: "/hiragana", title: "Dasar Hiragana", level: "N5", type: "Hiragana", icon: "あ", color: "#D95F76" },
  { href: "/vocabulary", title: "Kosakata Sehari-hari", level: "N5", type: "Kosakata", icon: "語", color: "#22C55E" },
  { href: "/grammar", title: "Pola Kalimat Dasar", level: "N5", type: "Tata Bahasa", icon: "文", color: "#F59E0B" },
];

export default function DashboardClient({ userData }: DashboardClientProps) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "おはようございます" : hour < 17 ? "こんにちは" : "こんばんは";
  const greetingId = hour < 12 ? "Selamat Pagi" : hour < 17 ? "Selamat Siang" : "Selamat Malam";

  const xpForCurrentLevel = Math.floor((userData.level - 1) * 300);
  const xpForNextLevel = userData.level * 300;
  const xpProgress = Math.min(((userData.xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100, 100);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E4] overflow-hidden"
      >
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FCE7EC] to-transparent rounded-r-3xl" />
        <div className="relative">
          <p className="text-[#D95F76] font-jp text-lg mb-1">{greeting}！</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-4">
            {greetingId}, {userData.name}! 👋
          </h1>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Streak", value: `${userData.streak} hari`, icon: <Flame size={16} />, color: "#D95F76" },
              { label: "Total XP", value: userData.xp.toLocaleString(), icon: <Zap size={16} />, color: "#4F46E5" },
              { label: "Level", value: `Level ${userData.level}`, icon: <Star size={16} />, color: "#F2B84B" },
              { label: "Selesai", value: `${userData.completedItems} item`, icon: <CheckCircle2 size={16} />, color: "#22C55E" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span style={{ color: stat.color }}>{stat.icon}</span>
                <span className="text-[#6B7280] text-sm">{stat.label}:</span>
                <span className="font-bold text-[#1F2937] text-sm">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#1F2937] text-lg">Lanjutkan Belajar</h2>
              <Link href="/path" className="text-sm text-[#D95F76] hover:underline flex items-center gap-1 font-medium">
                Lihat Semua <ChevronRight size={14} />
              </Link>
            </div>

            {/* JLPT Progress */}
            <div className="bg-[#FFF9F7] rounded-2xl p-5 border border-[#FCE7EC] mb-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-[#1F2937]">JLPT N5</h3>
                  <p className="text-sm text-[#6B7280]">Sedang Dipelajari</p>
                </div>
                <span className="text-2xl font-bold text-[#D95F76]">32%</span>
              </div>
              <div className="w-full bg-[#FCE7EC] rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full sakura-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: "32%" }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-[#6B7280]">
                <span>0%</span>
                <span>32 / 100 pelajaran</span>
                <span>100%</span>
              </div>
              <Link
                href="/jlpt/n5"
                className="mt-4 w-full py-2.5 rounded-xl bg-[#D95F76] text-white text-sm font-semibold hover:bg-[#B83D58] transition-colors flex items-center justify-center gap-2"
              >
                Lanjutkan N5 <ArrowRight size={14} />
              </Link>
            </div>

            {/* XP Level Progress */}
            <div className="bg-[#EEF2FF] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1F2937]">Level {userData.level}</span>
                    <span className="text-sm font-semibold text-[#4F46E5]">
                      {userData.xp} / {xpForNextLevel} XP
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2 mt-2">
                    <motion.div
                      className="h-2 rounded-full bg-[#4F46E5]"
                      initial={{ width: 0 }}
                      animate={{ width: `${xpProgress}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#4F46E5] font-medium">
                {xpForNextLevel - userData.xp} XP lagi untuk Level {userData.level + 1}
              </p>
            </div>
          </motion.div>

          {/* Recommended Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
          >
            <h2 className="font-bold text-[#1F2937] text-lg mb-5">Pelajaran yang Disarankan</h2>
            <div className="space-y-3">
              {recommendedLessons.map((lesson, i) => (
                <Link
                  key={lesson.title}
                  href={lesson.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E7E5E4] hover:border-[#D95F76] hover:bg-[#FFF9F7] transition-all group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-jp font-bold flex-shrink-0"
                    style={{ backgroundColor: lesson.color + "20", color: lesson.color }}
                  >
                    {lesson.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1F2937] text-sm">{lesson.title}</h3>
                    <p className="text-xs text-[#6B7280]">
                      {lesson.type} · {lesson.level}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-[#6B7280] group-hover:text-[#D95F76] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Access Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
          >
            <h2 className="font-bold text-[#1F2937] text-lg mb-5">Akses Cepat</h2>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-md transition-all group"
                  style={{ backgroundColor: action.bg }}
                >
                  <span className="text-xl font-jp font-bold group-hover:scale-110 transition-transform" style={{ color: action.color }}>
                    {action.icon}
                  </span>
                  <span className="text-xs font-medium text-center leading-tight" style={{ color: action.color }}>
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
          >
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">🔥</div>
              <h3 className="text-3xl font-bold text-[#1F2937]">{userData.streak}</h3>
              <p className="text-[#6B7280] text-sm font-medium">Hari Streak</p>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor: i < Math.min(userData.streak, 7) ? "#D95F76" : "#FCE7EC",
                  }}
                >
                  {i < Math.min(userData.streak, 7) && (
                    <CheckCircle2 size={12} className="text-white" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-[#6B7280] mt-2">
              {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].join("  ")}
            </p>
          </motion.div>

          {/* Daily Challenge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#1F2937]">Tantangan Hari Ini</h3>
              <span className="text-xs font-bold px-2 py-1 bg-[#FEF9C3] text-[#F59E0B] rounded-full">
                +100 XP
              </span>
            </div>
            <div className="space-y-2.5">
              {dailyChallengeItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FFF9F7] border border-[#E7E5E4]"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={16}
                      style={{ color: item.done ? "#22C55E" : "#E7E5E4" }}
                    />
                    <span className={`text-xs font-medium ${item.done ? "line-through text-[#6B7280]" : "text-[#1F2937]"}`}>
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#4F46E5]">{item.xp}</span>
                </div>
              ))}
            </div>
            <Link
              href="/daily-challenge"
              className="mt-4 w-full py-2.5 rounded-xl border-2 border-[#D95F76] text-[#D95F76] text-sm font-semibold hover:bg-[#FCE7EC] transition-colors flex items-center justify-center gap-2"
            >
              Mulai Tantangan <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
          >
            <h3 className="font-bold text-[#1F2937] mb-4">Statistik Minggu Ini</h3>
            <div className="space-y-3">
              {[
                { label: "Item Dipelajari", value: "24", icon: <BookOpen size={14} />, color: "#D95F76" },
                { label: "Sesi Belajar", value: `${userData.studySessions}`, icon: <Clock size={14} />, color: "#4F46E5" },
                { label: "Akurasi Kuis", value: "78%", icon: <Target size={14} />, color: "#22C55E" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span style={{ color: stat.color }}>{stat.icon}</span>
                    <span className="text-sm text-[#6B7280]">{stat.label}</span>
                  </div>
                  <span className="font-bold text-[#1F2937] text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
            <Link
              href="/progress"
              className="mt-4 text-xs font-semibold text-[#D95F76] flex items-center gap-1 hover:gap-2 transition-all"
            >
              Lihat Statistik Lengkap <ChevronRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
