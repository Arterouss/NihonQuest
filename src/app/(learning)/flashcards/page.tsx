"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Zap, Shuffle, BookOpen, Languages, PenTool } from "lucide-react";
import { kanjiData } from "@/lib/kanjiData";
import { vocabularyData } from "@/lib/vocabularyData";
import { grammarData } from "@/lib/grammarData";
import { useProgressStore } from "@/store/useProgressStore";
import { useAchievementStore } from "@/store/useAchievementStore";

type Rating = "again" | "hard" | "good" | "easy";
type DeckType = "vocab" | "kanji" | "grammar";
type Level = "all" | "N5" | "N4" | "N3" | "N2" | "N1";

interface FlashCard {
  front: string;
  back: string;
  meaning: string;
  romaji: string;
  type: DeckType;
}

const ratingConfig: Record<Rating, { label: string; color: string; bg: string; xp: number }> = {
  again: { label: "Lagi", color: "#EF4444", bg: "#FEE2E2", xp: 0 },
  hard:  { label: "Sulit", color: "#F97316", bg: "#FED7AA", xp: 1 },
  good:  { label: "Baik",  color: "#3B82F6", bg: "#DBEAFE", xp: 2 },
  easy:  { label: "Mudah", color: "#22C55E", bg: "#DCFCE7", xp: 3 },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(type: DeckType, level: Level, count = 20): FlashCard[] {
  if (type === "vocab") {
    // vocab level is a number: 5, 4, 3, 2, 1
    const levelNum = level === "all" ? null : parseInt(level.replace("N", ""));
    const filtered = levelNum === null ? vocabularyData : vocabularyData.filter(v => v.level === levelNum);
    return shuffle(filtered).slice(0, count).map(v => ({
      front: v.word,
      back: v.reading,
      meaning: v.meaning,
      romaji: "",
      type: "vocab" as DeckType,
    }));
  }
  if (type === "kanji") {
    // kanji uses field 'jlpt' and 'char'
    const filtered = level === "all" ? kanjiData : kanjiData.filter(k => k.jlpt === level);
    return shuffle(filtered).slice(0, count).map(k => ({
      front: k.char,
      back: [k.onyomi?.[0], k.kunyomi?.[0]].filter(Boolean).join(" / ") || "-",
      meaning: k.meaning,
      romaji: "",
      type: "kanji" as DeckType,
    }));
  }
  // grammar: uses field 'jlpt' and 'examples'
  const filtered = level === "all" ? grammarData : grammarData.filter(g => g.jlpt === level);
  return shuffle(filtered).slice(0, count).map(g => ({
    front: g.pattern,
    back: g.meaning,
    meaning: g.explanation?.slice(0, 80) + "..." || "",
    romaji: g.examples?.[0]?.jp || "",
    type: "grammar" as DeckType,
  }));
}

const DECK_TYPES: { key: DeckType; label: string; icon: React.ReactNode; color: string }[] = [
  { key: "vocab",   label: "Kosakata", icon: <Languages size={16} />, color: "#D95F76" },
  { key: "kanji",   label: "Kanji",    icon: <PenTool size={16} />,   color: "#8B5CF6" },
  { key: "grammar", label: "Tata Bahasa", icon: <BookOpen size={16} />, color: "#F97316" },
];

const LEVELS: Level[] = ["all", "N5", "N4", "N3", "N2", "N1"];

export default function FlashcardsPage() {
  const [deckType, setDeckType] = useState<DeckType>("vocab");
  const [level, setLevel] = useState<Level>("N5");
  const [deck, setDeck] = useState<FlashCard[]>(() => buildDeck("vocab", "N5"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState<Record<number, Rating>>({});
  const [sessionXP, setSessionXP] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const totalCards = deck.length;
  const current = deck[currentIndex];
  const progress = (Object.keys(completed).length / totalCards) * 100;

  const startSession = () => {
    const newDeck = buildDeck(deckType, level);
    if (newDeck.length === 0) {
      alert("Tidak ada kartu untuk level dan jenis ini. Coba pilihan lain!");
      return;
    }
    setDeck(newDeck);
    setCurrentIndex(0);
    setFlipped(false);
    setCompleted({});
    setSessionXP(0);
    setFinished(false);
    setStarted(true);
  };

  const handleRating = (rating: Rating) => {
    const xpGained = ratingConfig[rating].xp;
    setCompleted(prev => ({ ...prev, [currentIndex]: rating }));
    setSessionXP(prev => prev + xpGained);
    
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      setFinished(true);
      // Trigger global XP update
      const store = useProgressStore.getState();
      
      let category = "";
      if (deckType === "kanji") category = "Kanji";
      else if (deckType === "vocab") category = "Kosakata";
      else if (deckType === "grammar") category = "Tata Bahasa";
      
      const isN5 = level === "N5";

      store.addXP(sessionXP + xpGained, category, isN5);
      store.incrementSessions();

      const { unlockAchievement } = useAchievementStore.getState();
      unlockAchievement("flashcard-100"); // As a milestone
    }
  };

  const deckColor = DECK_TYPES.find(d => d.key === deckType)?.color || "#D95F76";

  // === Setup Screen ===
  if (!started) {
    return (
      <div className="max-w-lg mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-[#1F2937] mb-1">Flashcard</h1>
          <p className="text-[#6B7280] text-sm">Pilih jenis kartu dan level untuk memulai sesi belajar.</p>
        </motion.div>

        {/* Deck Type */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <p className="text-sm font-bold text-[#1F2937] mb-3">📚 Jenis Kartu</p>
          <div className="grid grid-cols-3 gap-2">
            {DECK_TYPES.map(d => (
              <button
                key={d.key}
                onClick={() => setDeckType(d.key)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all"
                style={{
                  borderColor: deckType === d.key ? d.color : "#E7E5E4",
                  backgroundColor: deckType === d.key ? d.color + "15" : "white",
                  color: deckType === d.key ? d.color : "#6B7280",
                }}
              >
                {d.icon}
                <span className="text-xs font-bold">{d.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Level */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <p className="text-sm font-bold text-[#1F2937] mb-3">🎯 Level JLPT</p>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map(lv => (
              <button
                key={lv}
                onClick={() => setLevel(lv)}
                className="px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all"
                style={{
                  borderColor: level === lv ? deckColor : "#E7E5E4",
                  backgroundColor: level === lv ? deckColor : "white",
                  color: level === lv ? "white" : "#6B7280",
                }}
              >
                {lv === "all" ? "Semua" : lv}
              </button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={startSession}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
          style={{ background: `linear-gradient(135deg, ${deckColor}, ${deckColor}cc)` }}
        >
          <Shuffle size={20} /> Mulai Sesi (20 Kartu Acak)
        </motion.button>
      </div>
    );
  }

  // === Finished Screen ===
  if (finished) {
    const goodCount = Object.values(completed).filter(r => r === "good" || r === "easy").length;
    const accuracy = Math.round((goodCount / totalCards) * 100);
    return (
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-8 text-center shadow-xl"
        >
          <div className="text-6xl mb-4">{accuracy >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-2xl font-bold text-[#1F2937] mb-2">Sesi Selesai!</h2>
          <p className="text-[#6B7280] mb-6">Kamu telah menyelesaikan semua flashcard sesi ini.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Kartu", value: totalCards, icon: "🃏" },
              { label: "XP Dapat", value: sessionXP, icon: "⚡" },
              { label: "Akurasi", value: `${accuracy}%`, icon: "🎯" },
            ].map(s => (
              <div key={s.label} className="bg-[#FFF9F7] rounded-2xl p-3">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-bold text-[#1F2937] text-lg">{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            {(Object.entries(ratingConfig) as [Rating, typeof ratingConfig[Rating]][]).map(([rating, config]) => {
              const count = Object.values(completed).filter(r => r === rating).length;
              return (
                <div key={rating} className="flex items-center justify-between">
                  <span className="text-sm font-semibold w-14" style={{ color: config.color }}>{config.label}</span>
                  <div className="flex-1 mx-3 bg-[#F3F4F6] rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: `${(count / totalCards) * 100}%`, backgroundColor: config.color }} />
                  </div>
                  <span className="text-sm font-bold text-[#1F2937] w-4">{count}</span>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2">
            <button onClick={() => { setStarted(false); }} className="flex-1 py-3 rounded-xl border-2 border-[#E7E5E4] text-[#6B7280] font-bold">
              Ganti Deck
            </button>
            <button onClick={startSession} className="flex-1 py-3 rounded-xl text-white font-bold flex items-center justify-center gap-2" style={{ backgroundColor: deckColor }}>
              <RotateCcw size={16} /> Ulangi
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // === Card Session ===
  // Guard: if current card is undefined, reset
  if (!current) {
    setFinished(true);
    return null;
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
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
        <div className="w-full bg-[#FCE7EC] rounded-full h-2">
          <motion.div className="h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} style={{ backgroundColor: deckColor }} />
        </div>
      </motion.div>

      {/* Flashcard */}
      <div style={{ height: "280px", perspective: "1000px" }}>
        <motion.div
          className="w-full h-full relative cursor-pointer"
          onClick={() => setFlipped(!flipped)}
          style={{ transformStyle: "preserve-3d", transition: "transform 0.6s" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-white rounded-3xl border-2 flex flex-col items-center justify-center p-8 shadow-lg"
            style={{ backfaceVisibility: "hidden", borderColor: deckColor + "40" }}
          >
            <span className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: deckColor }}>
              {current.type === "kanji" ? "KANJI" : current.type === "grammar" ? "TATA BAHASA" : "KOSAKATA"}
            </span>
            <span className="text-5xl font-jp font-bold text-[#1F2937] mb-4 text-center leading-tight">{current.front}</span>
            <p className="text-[#6B7280] text-sm">Ketuk untuk mengungkap</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: `linear-gradient(135deg, ${deckColor}, ${deckColor}bb)` }}
          >
            <p className="text-white/70 text-sm mb-2">Bacaan:</p>
            <span className="text-3xl font-jp font-bold text-white mb-2 text-center">{current.back}</span>
            <span className="text-white/90 text-lg font-semibold mb-1 text-center">{current.meaning}</span>
            {current.romaji && <span className="text-white/60 text-sm italic text-center">{current.romaji}</span>}
          </div>
        </motion.div>
      </div>

      {/* Rating Buttons */}
      <AnimatePresence>
        {flipped && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
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
        <p className="text-center text-sm text-[#6B7280]">Klik kartu untuk mengungkap jawaban</p>
      )}
    </div>
  );
}
