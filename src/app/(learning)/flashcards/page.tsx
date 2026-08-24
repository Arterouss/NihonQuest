"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, ChevronRight, ChevronLeft, Check, X, Zap } from "lucide-react";

const flashcardDecks = [
  { front: "食べる", back: "たべる", meaning: "makan", type: "vocab", romaji: "taberu" },
  { front: "飲む", back: "のむ", meaning: "minum", type: "vocab", romaji: "nomu" },
  { front: "行く", back: "いく", meaning: "pergi", type: "vocab", romaji: "iku" },
  { front: "大きい", back: "おおきい", meaning: "besar", type: "vocab", romaji: "ookii" },
  { front: "日", back: "にち / ひ", meaning: "hari / matahari", type: "kanji", romaji: "nichi / hi" },
  { front: "山", back: "さん / やま", meaning: "gunung", type: "kanji", romaji: "san / yama" },
  { front: "水", back: "すい / みず", meaning: "air", type: "kanji", romaji: "sui / mizu" },
  { front: "〜です", back: "Bentuk sopan", meaning: "adalah", type: "grammar", romaji: "desu" },
  { front: "〜ます", back: "Kata kerja sopan", meaning: "melakukan (sopan)", type: "grammar", romaji: "masu" },
  { front: "友達", back: "ともだち", meaning: "teman", type: "vocab", romaji: "tomodachi" },
];

type Rating = "again" | "hard" | "good" | "easy";

const ratingConfig: Record<Rating, { label: string; color: string; bg: string; xp: number }> = {
  again: { label: "Lagi", color: "#EF4444", bg: "#FEE2E2", xp: 0 },
  hard: { label: "Sulit", color: "#F97316", bg: "#FED7AA", xp: 1 },
  good: { label: "Baik", color: "#3B82F6", bg: "#DBEAFE", xp: 2 },
  easy: { label: "Mudah", color: "#22C55E", bg: "#DCFCE7", xp: 3 },
};

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState<Record<number, Rating>>({});
  const [sessionXP, setSessionXP] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = flashcardDecks[currentIndex];
  const totalCards = flashcardDecks.length;
  const progress = (Object.keys(completed).length / totalCards) * 100;

  const handleRating = (rating: Rating) => {
    setCompleted((prev) => ({ ...prev, [currentIndex]: rating }));
    setSessionXP((prev) => prev + ratingConfig[rating].xp);

    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setCompleted({});
    setSessionXP(0);
    setFinished(false);
  };

  if (finished) {
    const goodCount = Object.values(completed).filter((r) => r === "good" || r === "easy").length;
    const accuracy = Math.round((goodCount / totalCards) * 100);

    return (
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-8 text-center shadow-xl"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-[#1F2937] mb-2">Sesi Selesai!</h2>
          <p className="text-[#6B7280] mb-6">Kamu telah menyelesaikan semua flashcard sesi ini.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Kartu", value: totalCards, icon: "🃏" },
              { label: "XP Dapat", value: sessionXP, icon: "⚡" },
              { label: "Akurasi", value: `${accuracy}%`, icon: "🎯" },
            ].map((s) => (
              <div key={s.label} className="bg-[#FFF9F7] rounded-2xl p-3">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-bold text-[#1F2937] text-lg">{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            {(Object.entries(ratingConfig) as [Rating, typeof ratingConfig[Rating]][]).map(([rating, config]) => {
              const count = Object.values(completed).filter((r) => r === rating).length;
              return (
                <div key={rating} className="flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: config.color }}>{config.label}</span>
                  <div className="flex-1 mx-3 bg-[#F3F4F6] rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${(count / totalCards) * 100}%`, backgroundColor: config.color }}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#1F2937]">{count}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRestart}
            className="w-full py-3 rounded-xl sakura-gradient text-white font-bold flex items-center justify-center gap-2"
          >
            <RotateCcw size={16} /> Mulai Lagi
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Flashcard</h1>
            <p className="text-[#6B7280] text-sm">Kartu {currentIndex + 1} dari {totalCards}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EEF2FF] rounded-full">
            <Zap size={14} style={{ color: "#4F46E5" }} />
            <span className="text-sm font-bold text-[#4F46E5]">{sessionXP} XP</span>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-[#FCE7EC] rounded-full h-2">
          <motion.div
            className="h-2 rounded-full sakura-gradient"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Flashcard */}
      <div className="flashcard-container" style={{ height: "280px" }}>
        <motion.div
          className="w-full h-full relative cursor-pointer"
          onClick={() => setFlipped(!flipped)}
          style={{ transformStyle: "preserve-3d", transition: "transform 0.6s" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-white rounded-3xl border-2 border-[#E7E5E4] flex flex-col items-center justify-center p-8 shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-xs font-bold text-[#D95F76] uppercase tracking-wider mb-4">
              {current.type === "kanji" ? "KANJI" : current.type === "grammar" ? "TATA BAHASA" : "KOSAKATA"}
            </span>
            <span className="text-6xl font-jp font-bold text-[#1F2937] mb-4">{current.front}</span>
            <p className="text-[#6B7280] text-sm">Ketuk untuk mengungkap</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#D95F76] to-[#B83D58] rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-white/70 text-sm mb-2">Baca:</p>
            <span className="text-4xl font-jp font-bold text-white mb-2">{current.back}</span>
            <span className="text-white/80 text-lg font-semibold mb-1">{current.meaning}</span>
            <span className="text-white/60 text-sm italic">{current.romaji}</span>
          </div>
        </motion.div>
      </div>

      {/* Rating Buttons (shown when flipped) */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p className="text-center text-sm font-semibold text-[#6B7280] mb-3">Seberapa mudah kartu ini?</p>
            <div className="grid grid-cols-4 gap-2">
              {(Object.entries(ratingConfig) as [Rating, typeof ratingConfig[Rating]][]).map(([rating, config]) => (
                <motion.button
                  key={rating}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRating(rating)}
                  className="py-3 rounded-2xl flex flex-col items-center gap-1 border-2 transition-all"
                  style={{ backgroundColor: config.bg, borderColor: config.color }}
                >
                  <span className="font-bold text-sm" style={{ color: config.color }}>{config.label}</span>
                  <span className="text-xs" style={{ color: config.color }}>+{config.xp} XP</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!flipped && (
        <p className="text-center text-sm text-[#6B7280]">
          Klik kartu untuk mengungkap jawaban
        </p>
      )}
    </div>
  );
}
