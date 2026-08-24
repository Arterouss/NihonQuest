"use client";

import { motion } from "framer-motion";
import { Trophy, Lock } from "lucide-react";

const achievements = [
  { id: "hiragana-master", name: "Hiragana Master", nameJp: "ひらがなマスター", desc: "Selesaikan semua hiragana dasar", icon: "あ", color: "#D95F76", bg: "#FCE7EC", unlocked: true, xp: 50 },
  { id: "katakana-master", name: "Katakana Master", nameJp: "カタカナマスター", desc: "Selesaikan semua katakana dasar", icon: "ア", color: "#4F46E5", bg: "#EEF2FF", unlocked: false, xp: 50 },
  { id: "first-kanji", name: "Kanji Pertama", nameJp: "初めての漢字", desc: "Pelajari kanji pertamamu", icon: "漢", color: "#8B5CF6", bg: "#EDE9FE", unlocked: true, xp: 20 },
  { id: "vocab-100", name: "100 Kosakata", nameJp: "100語", desc: "Pelajari 100 kosakata", icon: "📚", color: "#22C55E", bg: "#DCFCE7", unlocked: false, xp: 100 },
  { id: "streak-7", name: "Streak 7 Hari", nameJp: "7日連続", desc: "Belajar 7 hari berturut-turut", icon: "🔥", color: "#F97316", bg: "#FED7AA", unlocked: true, xp: 75 },
  { id: "streak-30", name: "Streak 30 Hari", nameJp: "30日連続", desc: "Belajar 30 hari berturut-turut", icon: "🔥", color: "#EF4444", bg: "#FEE2E2", unlocked: false, xp: 300 },
  { id: "n5-complete", name: "N5 Selesai", nameJp: "N5完了", desc: "Selesaikan semua materi N5", icon: "🎯", color: "#22C55E", bg: "#DCFCE7", unlocked: false, xp: 500 },
  { id: "first-quiz", name: "Kuis Pertama", nameJp: "初めてのクイズ", desc: "Selesaikan kuis pertamamu", icon: "🧠", color: "#3B82F6", bg: "#DBEAFE", unlocked: true, xp: 10 },
  { id: "flashcard-100", name: "100 Flashcard", nameJp: "100フラッシュカード", desc: "Review 100 flashcard", icon: "🃏", color: "#EC4899", bg: "#FCE7F3", unlocked: false, xp: 150 },
  { id: "grammar-master", name: "Grammar Master", nameJp: "文法マスター", desc: "Pelajari semua tata bahasa N5", icon: "文", color: "#F59E0B", bg: "#FEF9C3", unlocked: false, xp: 200 },
  { id: "daily-7", name: "7 Daily Challenge", nameJp: "7日間チャレンジ", desc: "Selesaikan 7 tantangan harian", icon: "📅", color: "#8B5CF6", bg: "#EDE9FE", unlocked: false, xp: 100 },
  { id: "level-5", name: "Level 5", nameJp: "レベル5", desc: "Capai Level 5", icon: "⭐", color: "#F2B84B", bg: "#FEF9C3", unlocked: true, xp: 0 },
];

export default function AchievementsPage() {
  const unlocked = achievements.filter((a) => a.unlocked);
  const locked = achievements.filter((a) => !a.unlocked);

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
            <span className="font-bold text-[#D95F76]">{unlocked.length} / {achievements.length}</span>
          </div>
          <div className="w-full bg-[#FCE7EC] rounded-full h-3">
            <motion.div
              className="h-3 rounded-full sakura-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${(unlocked.length / achievements.length) * 100}%` }}
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
