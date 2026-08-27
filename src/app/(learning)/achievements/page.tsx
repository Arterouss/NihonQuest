"use client";

import { motion } from "framer-motion";
import { Trophy, Lock } from "lucide-react";
import { useAchievementStore, ACHIEVEMENTS_LIST } from "@/store/useAchievementStore";

export default function AchievementsPage() {
  const { unlockedIds } = useAchievementStore();
  
  const unlocked = ACHIEVEMENTS_LIST.filter((a) => unlockedIds.includes(a.id));
  const locked = ACHIEVEMENTS_LIST.filter((a) => !unlockedIds.includes(a.id));

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F2B84B] flex items-center justify-center">
            <Trophy size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Pencapaian</h1>
            <p className="text-[#6B7280] text-sm">Kumpulkan semua achievement!</p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-[#1F2937]">Progress Pencapaian</span>
            <span className="font-bold text-[#D95F76]">{unlocked.length} / {ACHIEVEMENTS_LIST.length}</span>
          </div>
          <div className="w-full bg-[#FCE7EC] rounded-full h-3">
            <motion.div
              className="h-3 rounded-full sakura-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${(unlocked.length / ACHIEVEMENTS_LIST.length) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Unlocked */}
      <div>
        <h2 className="font-bold text-[#1F2937] mb-4 flex items-center gap-2">
          <span className="text-[#F2B84B]">🏆</span>
          Terbuka ({unlocked.length})
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {unlocked.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border-2 p-5 hover:shadow-md transition-all"
              style={{ borderColor: achievement.color + "30" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-jp font-bold flex-shrink-0"
                  style={{ backgroundColor: achievement.bg }}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1F2937] text-sm">{achievement.name}</h3>
                  <p className="text-xs font-jp text-[#D95F76] mb-1">{achievement.nameJp}</p>
                  <p className="text-xs text-[#6B7280]">{achievement.desc}</p>
                  {achievement.xp > 0 && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold rounded-full">
                      +{achievement.xp} XP
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locked */}
      <div>
        <h2 className="font-bold text-[#1F2937] mb-4 flex items-center gap-2">
          <Lock size={16} className="text-[#6B7280]" />
          Terkunci ({locked.length})
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locked.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-5 opacity-60"
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-[#F3F4F6] grayscale">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#6B7280] text-sm">{achievement.name}</h3>
                  <p className="text-xs text-[#6B7280]">{achievement.desc}</p>
                  {achievement.xp > 0 && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-[#F3F4F6] text-[#6B7280] text-xs font-bold rounded-full">
                      +{achievement.xp} XP
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
