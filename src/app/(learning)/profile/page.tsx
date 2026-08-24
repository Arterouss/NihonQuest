"use client";

import { motion } from "framer-motion";
import { User, Zap, Flame, Trophy, Target, BookOpen, Calendar, Edit2, Camera } from "lucide-react";
import Link from "next/link";

const userStats = {
  name: "Budi Santoso",
  email: "budi@email.com",
  jlptTarget: "N3",
  level: 5,
  xp: 1240,
  streak: 7,
  joinDate: "Januari 2024",
  totalStudyDays: 32,
  itemsLearned: 96,
  quizAccuracy: 78,
};

const achievements = [
  { icon: "あ", name: "Hiragana Master", color: "#D95F76" },
  { icon: "🔥", name: "7 Hari Streak", color: "#F97316" },
  { icon: "🧠", name: "Kuis Pertama", color: "#3B82F6" },
  { icon: "⭐", name: "Level 5", color: "#F2B84B" },
];

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-[#E7E5E4] overflow-hidden shadow-sm"
      >
        {/* Banner */}
        <div className="h-32 sakura-gradient relative">
          <div className="absolute inset-0 seigaiha-pattern opacity-20" />
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
              <User size={40} className="text-[#6B7280]" />
            </div>
          </div>
          <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-all">
            <Camera size={16} />
          </button>
        </div>

        <div className="pt-14 pb-6 px-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">{userStats.name}</h1>
              <p className="text-[#6B7280] text-sm">{userStats.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-[#EEF2FF] text-[#4F46E5] text-sm font-bold rounded-full">
                  Level {userStats.level}
                </span>
                <span className="px-3 py-1 bg-[#FCE7EC] text-[#D95F76] text-sm font-bold rounded-full">
                  Target: {userStats.jlptTarget}
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#E7E5E4] rounded-xl text-sm font-medium text-[#6B7280] hover:border-[#D95F76] hover:text-[#D95F76] transition-all">
              <Edit2 size={14} /> Edit Profil
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "XP Total", value: userStats.xp.toLocaleString(), icon: <Zap size={16} />, color: "#4F46E5" },
              { label: "Streak", value: `${userStats.streak}d`, icon: <Flame size={16} />, color: "#D95F76" },
              { label: "Item Belajar", value: userStats.itemsLearned, icon: <BookOpen size={16} />, color: "#22C55E" },
              { label: "Akurasi", value: `${userStats.quizAccuracy}%`, icon: <Target size={16} />, color: "#F59E0B" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-[#FFF9F7] rounded-2xl p-3">
                <div className="flex justify-center mb-1" style={{ color: s.color }}>{s.icon}</div>
                <div className="font-bold text-[#1F2937]">{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* XP Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <h2 className="font-bold text-[#1F2937] mb-4">Level & XP</h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#4F46E5] flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{userStats.level}</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-[#1F2937]">Level {userStats.level}</span>
              <span className="text-[#4F46E5] font-bold">{userStats.xp} / {userStats.level * 300} XP</span>
            </div>
            <div className="w-full bg-[#EEF2FF] rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-[#4F46E5]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((userStats.xp / (userStats.level * 300)) * 100, 100)}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-[#6B7280] mt-1.5">
              {userStats.level * 300 - userStats.xp} XP lagi untuk Level {userStats.level + 1}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Recent Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[#1F2937]">Pencapaian Terbaru</h2>
          <Link href="/achievements" className="text-xs font-semibold text-[#D95F76]">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {achievements.map((a) => (
            <div key={a.name} className="flex flex-col items-center gap-2 text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: a.color + "20" }}
              >
                {a.icon}
              </div>
              <span className="text-xs text-[#6B7280] leading-tight">{a.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Learning Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <h2 className="font-bold text-[#1F2937] mb-4">Informasi Belajar</h2>
        <div className="space-y-3">
          {[
            { label: "Bergabung sejak", value: userStats.joinDate, icon: <Calendar size={16} /> },
            { label: "Target JLPT", value: userStats.jlptTarget, icon: <Target size={16} /> },
            { label: "Hari Belajar", value: `${userStats.totalStudyDays} hari`, icon: <BookOpen size={16} /> },
            { label: "Akurasi Kuis", value: `${userStats.quizAccuracy}%`, icon: <Trophy size={16} /> },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#F3F4F6] last:border-0">
              <div className="flex items-center gap-2 text-[#6B7280]">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              <span className="font-semibold text-[#1F2937] text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
