"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Flame, Zap, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";

const tasks = [
  { id: 1, label: "5 Kanji Baru", xp: 20, icon: "漢", color: "#8B5CF6", bg: "#EDE9FE", href: "/kanji", done: false },
  { id: 2, label: "10 Kosakata", xp: 30, icon: "語", color: "#22C55E", bg: "#DCFCE7", href: "/vocabulary", done: false },
  { id: 3, label: "5 Tata Bahasa", xp: 25, icon: "文", color: "#F59E0B", bg: "#FEF9C3", href: "/grammar", done: false },
  { id: 4, label: "5 Soal Kuis", xp: 25, icon: "❓", color: "#3B82F6", bg: "#DBEAFE", href: "/quiz", done: false },
];

export default function DailyChallengePage() {
  const [tasksDone, setTasksDone] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const totalXP = tasks.reduce((sum, t) => sum + t.xp, 0);
  const earnedXP = tasksDone.reduce((sum, id) => sum + (tasks.find((t) => t.id === id)?.xp || 0), 0);
  const progress = (tasksDone.length / tasks.length) * 100;

  const handleComplete = (id: number) => {
    if (tasksDone.includes(id)) return;
    const newDone = [...tasksDone, id];
    setTasksDone(newDone);
    if (newDone.length === tasks.length) {
      setTimeout(() => setFinished(true), 500);
    }
  };

  if (finished) {
    return (
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-8 text-center shadow-xl"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-[#1F2937] mb-2">Tantangan Selesai!</h2>
          <p className="text-[#6B7280] mb-6">Luar biasa! Kamu telah menyelesaikan tantangan harian hari ini.</p>
          <div className="bg-[#FEF9C3] rounded-2xl p-5 mb-6">
            <div className="text-4xl font-bold text-[#F59E0B] mb-1">+{totalXP} XP</div>
            <div className="text-sm text-[#F59E0B] font-medium">XP yang kamu dapatkan hari ini!</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-[#DCFCE7] rounded-xl p-3 text-center">
              <Flame size={24} className="text-[#D95F76] mx-auto mb-1" />
              <div className="font-bold text-[#1F2937]">+1 Hari</div>
              <div className="text-xs text-[#6B7280]">Streak</div>
            </div>
            <div className="bg-[#EDE9FE] rounded-xl p-3 text-center">
              <Trophy size={24} className="text-[#8B5CF6] mx-auto mb-1" />
              <div className="font-bold text-[#1F2937]">Progress</div>
              <div className="text-xs text-[#6B7280]">N5 Achievement</div>
            </div>
          </div>
          <Link href="/dashboard" className="block w-full py-3 rounded-xl bg-[#D95F76] text-white font-semibold text-center hover:bg-[#B83D58] transition-colors">
            Kembali ke Dashboard
          </Link>
          <p className="text-sm text-[#6B7280] mt-4">Kembali besok untuk tantangan baru! 🌸</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F97316] flex items-center justify-center">
            <Flame size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Tantangan Harian</h1>
            <p className="text-[#6B7280] text-sm">Selesaikan semua tugas untuk mendapatkan bonus XP</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-[#1F2937]">Progress Hari Ini</span>
            <div className="flex items-center gap-1.5">
              <Zap size={14} style={{ color: "#F59E0B" }} />
              <span className="text-sm font-bold text-[#F59E0B]">{earnedXP} / {totalXP} XP</span>
            </div>
          </div>
          <div className="w-full bg-[#FEF9C3] rounded-full h-3">
            <motion.div
              className="h-3 rounded-full bg-[#F59E0B]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <p className="text-xs text-[#6B7280] mt-2">
            {tasksDone.length} dari {tasks.length} tugas selesai
          </p>
        </div>
      </motion.div>

      {/* Today's Date */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-[#D95F76]">🗓️</span>
        <span className="text-sm font-semibold text-[#1F2937]">
          {new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </span>
        <span className="ml-2 px-3 py-1 bg-[#DCFCE7] text-[#22C55E] text-xs font-bold rounded-full">
          🔥 Streak 7 Hari
        </span>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task, i) => {
          const done = tasksDone.includes(task.id);
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-2xl border-2 p-5 transition-all ${done ? "border-[#22C55E] bg-[#DCFCE7]" : "border-[#E7E5E4]"}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-jp font-bold flex-shrink-0"
                  style={{ backgroundColor: done ? "#22C55E" : task.bg, color: done ? "white" : task.color }}
                >
                  {done ? <CheckCircle2 size={24} /> : task.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold ${done ? "text-[#22C55E] line-through" : "text-[#1F2937]"}`}>
                    {task.label}
                  </h3>
                  <span className="text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                    +{task.xp} XP
                  </span>
                </div>
                {!done ? (
                  <div className="flex flex-col gap-1.5">
                    {/* Link to the relevant page */}
                    <Link
                      href={task.href}
                      className="px-4 py-2 rounded-xl text-white text-sm font-bold flex items-center gap-1 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: task.color }}
                    >
                      Mulai <ChevronRight size={14} />
                    </Link>
                    {/* After visiting, mark as done */}
                    <button
                      onClick={() => handleComplete(task.id)}
                      className="px-4 py-1.5 rounded-xl text-xs font-medium border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#DCFCE7] transition-colors"
                    >
                      ✓ Selesai
                    </button>
                  </div>
                ) : (
                  <CheckCircle2 size={24} className="text-[#22C55E]" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Reward Preview */}
      <div className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-2xl p-5 text-white">
        <h3 className="font-bold mb-2">🎁 Hadiah Hari Ini</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total XP", value: `+${totalXP}` },
            { label: "Streak Bonus", value: "+20 XP" },
            { label: "Badge Progress", value: "7/7 Hari" },
          ].map((r) => (
            <div key={r.label} className="text-center">
              <div className="text-xl font-bold">{r.value}</div>
              <div className="text-xs text-white/80">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
