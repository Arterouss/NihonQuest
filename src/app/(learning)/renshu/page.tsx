"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, ChevronRight, RotateCcw, Volume2, Check,
  X, Sparkles, Target, Trophy, Flame, ChevronLeft, Eye
} from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { useAchievementStore } from "@/store/useAchievementStore";

// -------------------------
// Renshu Vocabulary Data
// -------------------------
const renshuWords = [
  // N5 - Everyday basics
  { id: 1, word: "食べる", reading: "たべる", romaji: "taberu", meaning: "makan", example: "私は毎日ご飯を食べます。", exampleMeaning: "Saya makan nasi setiap hari.", level: "N5", category: "動詞" },
  { id: 2, word: "飲む", reading: "のむ", romaji: "nomu", meaning: "minum", example: "水を飲みたい。", exampleMeaning: "Saya ingin minum air.", level: "N5", category: "動詞" },
  { id: 3, word: "行く", reading: "いく", romaji: "iku", meaning: "pergi", example: "学校へ行きます。", exampleMeaning: "Saya pergi ke sekolah.", level: "N5", category: "動詞" },
  { id: 4, word: "来る", reading: "くる", romaji: "kuru", meaning: "datang", example: "友達が来ます。", exampleMeaning: "Teman saya datang.", level: "N5", category: "動詞" },
  { id: 5, word: "見る", reading: "みる", romaji: "miru", meaning: "melihat / menonton", example: "映画を見ます。", exampleMeaning: "Saya menonton film.", level: "N5", category: "動詞" },
  { id: 6, word: "聞く", reading: "きく", romaji: "kiku", meaning: "mendengar / bertanya", example: "音楽を聞きます。", exampleMeaning: "Saya mendengarkan musik.", level: "N5", category: "動詞" },
  { id: 7, word: "話す", reading: "はなす", romaji: "hanasu", meaning: "berbicara", example: "日本語を話します。", exampleMeaning: "Saya berbicara bahasa Jepang.", level: "N5", category: "動詞" },
  { id: 8, word: "読む", reading: "よむ", romaji: "yomu", meaning: "membaca", example: "本を読みます。", exampleMeaning: "Saya membaca buku.", level: "N5", category: "動詞" },
  { id: 9, word: "書く", reading: "かく", romaji: "kaku", meaning: "menulis", example: "手紙を書きます。", exampleMeaning: "Saya menulis surat.", level: "N5", category: "動詞" },
  { id: 10, word: "大きい", reading: "おおきい", romaji: "ookii", meaning: "besar", example: "あの犬は大きいです。", exampleMeaning: "Anjing itu besar.", level: "N5", category: "形容詞" },
  { id: 11, word: "小さい", reading: "ちいさい", romaji: "chiisai", meaning: "kecil", example: "この猫は小さいです。", exampleMeaning: "Kucing ini kecil.", level: "N5", category: "形容詞" },
  { id: 12, word: "新しい", reading: "あたらしい", romaji: "atarashii", meaning: "baru", example: "新しい本を買いました。", exampleMeaning: "Saya membeli buku baru.", level: "N5", category: "形容詞" },
  { id: 13, word: "古い", reading: "ふるい", romaji: "furui", meaning: "lama / tua", example: "古いお寺です。", exampleMeaning: "Ini kuil yang tua.", level: "N5", category: "形容詞" },
  { id: 14, word: "学校", reading: "がっこう", romaji: "gakkou", meaning: "sekolah", example: "学校は近いです。", exampleMeaning: "Sekolah itu dekat.", level: "N5", category: "名詞" },
  { id: 15, word: "電車", reading: "でんしゃ", romaji: "densha", meaning: "kereta listrik", example: "電車で行きます。", exampleMeaning: "Saya pergi naik kereta.", level: "N5", category: "名詞" },
  { id: 16, word: "友達", reading: "ともだち", romaji: "tomodachi", meaning: "teman", example: "友達と遊びます。", exampleMeaning: "Saya bermain bersama teman.", level: "N5", category: "名詞" },
  { id: 17, word: "仕事", reading: "しごと", romaji: "shigoto", meaning: "pekerjaan", example: "仕事は楽しいです。", exampleMeaning: "Pekerjaan itu menyenangkan.", level: "N5", category: "名詞" },
  { id: 18, word: "天気", reading: "てんき", romaji: "tenki", meaning: "cuaca", example: "今日の天気はいいです。", exampleMeaning: "Cuaca hari ini bagus.", level: "N5", category: "名詞" },
  // N4
  { id: 19, word: "経験", reading: "けいけん", romaji: "keiken", meaning: "pengalaman", example: "日本での経験が好きです。", exampleMeaning: "Saya suka pengalaman di Jepang.", level: "N4", category: "名詞" },
  { id: 20, word: "生活", reading: "せいかつ", romaji: "seikatsu", meaning: "kehidupan / penghidupan", example: "日本での生活はどうですか？", exampleMeaning: "Bagaimana kehidupanmu di Jepang?", level: "N4", category: "名詞" },
  { id: 21, word: "準備", reading: "じゅんび", romaji: "junbi", meaning: "persiapan", example: "準備ができました。", exampleMeaning: "Persiapan sudah siap.", level: "N4", category: "名詞" },
  { id: 22, word: "集める", reading: "あつめる", romaji: "atsumeru", meaning: "mengumpulkan", example: "切手を集めています。", exampleMeaning: "Saya sedang mengumpulkan perangko.", level: "N4", category: "動詞" },
  { id: 23, word: "残る", reading: "のこる", romaji: "nokoru", meaning: "tersisa / tinggal", example: "食べ物が残っています。", exampleMeaning: "Ada makanan yang tersisa.", level: "N4", category: "動詞" },
  // N3
  { id: 24, word: "影響", reading: "えいきょう", romaji: "eikyou", meaning: "pengaruh / dampak", example: "環境への影響が大きい。", exampleMeaning: "Dampaknya terhadap lingkungan sangat besar.", level: "N3", category: "名詞" },
  { id: 25, word: "判断", reading: "はんだん", romaji: "handan", meaning: "penilaian / keputusan", example: "自分で判断してください。", exampleMeaning: "Tolong putuskan sendiri.", level: "N3", category: "名詞" },
];

type LevelFilter = "all" | "N5" | "N4" | "N3";
type Mode = "setup" | "learn" | "quiz" | "result";

function speak(text: string) {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildOptions(correct: string, pool: string[]): string[] {
  const others = shuffle(pool.filter(p => p !== correct)).slice(0, 3);
  return shuffle([correct, ...others]);
}

export default function RenshuPage() {
  const [mode, setMode] = useState<Mode>("setup");
  const [level, setLevel] = useState<LevelFilter>("N5");
  const [deck, setDeck] = useState(renshuWords);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, boolean>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const { addXP } = useProgressStore();
  const { unlockAchievement } = useAchievementStore();

  const allMeanings = renshuWords.map(w => w.meaning);

  const start = (m: "learn" | "quiz") => {
    const filtered = level === "all" ? renshuWords : renshuWords.filter(w => w.level === level);
    setDeck(shuffle(filtered));
    setIndex(0);
    setShowAnswer(false);
    setScore(0);
    setQuizAnswers({});
    setSelectedOption(null);
    setStreak(0);
    setMode(m);
  };

  const word = deck[index];
  const isLast = index === deck.length - 1;
  const accuracy = deck.length > 0 ? Math.round((score / deck.length) * 100) : 0;

  // ---- Learn Mode Actions ----
  const handleKnow = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > bestStreak) setBestStreak(newStreak);
    addXP(3, "Kosakata");
    if (isLast) { setMode("result"); return; }
    setIndex(i => i + 1);
    setShowAnswer(false);
  };

  const handleDontKnow = () => {
    setStreak(0);
    if (isLast) { setMode("result"); return; }
    setIndex(i => i + 1);
    setShowAnswer(false);
  };

  // ---- Quiz Mode Actions ----
  const handleQuizAnswer = (opt: string) => {
    if (selectedOption !== null) return;
    const correct = opt === word.meaning;
    setSelectedOption(opt);
    setQuizAnswers(prev => ({ ...prev, [index]: correct }));
    if (correct) {
      setScore(s => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
      addXP(5, "Kosakata");
    } else {
      setStreak(0);
    }
    setTimeout(() => {
      if (isLast) { setMode("result"); return; }
      setIndex(i => i + 1);
      setSelectedOption(null);
    }, 800);
  };

  // On result, unlock achievement
  useEffect(() => {
    if (mode === "result") {
      unlockAchievement("vocab-100");
    }
  }, [mode, unlockAchievement]);

  const categoryColor: Record<string, string> = {
    "動詞": "#3B82F6",
    "名詞": "#8B5CF6",
    "形容詞": "#10B981",
    "形容動詞": "#F97316",
  };

  // ---- SETUP SCREEN ----
  if (mode === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl">練</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">Renshu — 練習</h1>
              <p className="text-[#6B7280] text-sm">Latihan kosakata bergaya flashcard interaktif</p>
            </div>
          </div>
        </motion.div>

        {/* Level selector */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-sm">
          <p className="text-sm font-bold text-[#1F2937] mb-3">🎯 Pilih Level</p>
          <div className="flex gap-2 flex-wrap">
            {(["all", "N5", "N4", "N3"] as LevelFilter[]).map(lv => (
              <button
                key={lv}
                onClick={() => setLevel(lv)}
                className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 transition-all"
                style={{
                  borderColor: level === lv ? "#8B5CF6" : "#E7E5E4",
                  backgroundColor: level === lv ? "#8B5CF6" : "white",
                  color: level === lv ? "white" : "#6B7280",
                }}
              >
                {lv === "all" ? "Semua" : lv}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#9CA3AF] mt-3">
            {level === "all" ? renshuWords.length : renshuWords.filter(w => w.level === level).length} kata tersedia
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-4">
            <Eye size={20} className="text-violet-600 mb-2" />
            <h3 className="font-bold text-[#1F2937] text-sm mb-1">Mode Belajar</h3>
            <p className="text-xs text-[#6B7280]">Lihat kata, arti, dan contoh kalimat. Evaluasi dirimu sendiri.</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <Target size={20} className="text-blue-600 mb-2" />
            <h3 className="font-bold text-[#1F2937] text-sm mb-1">Mode Kuis</h3>
            <p className="text-xs text-[#6B7280]">Pilih arti yang benar dari 4 pilihan. Kumpulkan XP!</p>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => start("learn")}
            className="flex-1 py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
          >
            <Eye size={18} /> Mulai Belajar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => start("quiz")}
            className="flex-1 py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg"
            style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}
          >
            <Target size={18} /> Mulai Kuis
          </motion.button>
        </div>
      </div>
    );
  }

  // ---- RESULT SCREEN ----
  if (mode === "result") {
    return (
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-8 text-center shadow-xl"
        >
          <div className="text-5xl mb-3">{accuracy >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-2xl font-bold text-[#1F2937] mb-1">Sesi Selesai!</h2>
          <p className="text-[#6B7280] text-sm mb-6">Kamu sudah menyelesaikan sesi Renshu.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Kata", value: deck.length, icon: "📖" },
              { label: "Streak", value: bestStreak, icon: "🔥" },
              { label: "Akurasi", value: `${accuracy}%`, icon: "🎯" },
            ].map(s => (
              <div key={s.label} className="bg-[#F9FAFB] rounded-2xl p-3">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="font-bold text-[#1F2937]">{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button onClick={() => setMode("setup")} className="flex-1 py-3 rounded-xl border-2 border-[#E7E5E4] text-[#6B7280] font-bold text-sm">
              Kembali
            </button>
            <button onClick={() => start("quiz")} className="flex-1 py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}>
              <RotateCcw size={14} /> Ulangi
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ---- LEARN / QUIZ MAIN SCREEN ----
  const options = buildOptions(word.meaning, allMeanings);

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <button onClick={() => setMode("setup")} className="flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#1F2937] font-semibold">
          <ChevronLeft size={16} /> Kembali
        </button>
        <div className="flex items-center gap-3">
          {streak >= 2 && (
            <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
              <Flame size={12} /> {streak}x Streak!
            </span>
          )}
          <span className="text-xs text-[#9CA3AF] font-semibold">{index + 1} / {deck.length}</span>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: mode === "learn" ? "#EDE9FE" : "#DBEAFE", color: mode === "learn" ? "#7C3AED" : "#1D4ED8" }}>
          {mode === "learn" ? "Belajar" : "Kuis"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-[#F3F4F6] rounded-full h-2">
        <motion.div
          className="h-2 rounded-full"
          style={{ background: mode === "learn" ? "linear-gradient(90deg,#8B5CF6,#6D28D9)" : "linear-gradient(90deg,#3B82F6,#1D4ED8)" }}
          animate={{ width: `${((index + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] shadow-sm overflow-hidden"
        >
          {/* Category badge + level */}
          <div className="flex items-center justify-between px-6 pt-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: (categoryColor[word.category] || "#9CA3AF") + "20", color: categoryColor[word.category] || "#9CA3AF" }}>
              {word.category}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280]">{word.level}</span>
          </div>

          {/* Main word */}
          <div className="px-6 py-6 text-center">
            <p className="font-jp text-6xl font-bold text-[#1F2937] mb-2">{word.word}</p>
            <p className="text-lg text-[#6B7280] font-medium">{word.reading}</p>
            <p className="text-sm text-[#9CA3AF]">{word.romaji}</p>
            <button
              onClick={() => speak(word.word)}
              className="mt-3 mx-auto flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-blue-800 font-semibold"
            >
              <Volume2 size={13} /> Dengar
            </button>
          </div>

          {/* Learn mode: reveal button */}
          {mode === "learn" && !showAnswer && (
            <div className="px-6 pb-6">
              <button
                onClick={() => setShowAnswer(true)}
                className="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
              >
                <Eye size={16} /> Lihat Jawaban
              </button>
            </div>
          )}

          {/* Learn mode: answer revealed */}
          {mode === "learn" && showAnswer && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#F3F4F6]">
              <div className="px-6 py-4">
                <p className="text-center text-xl font-bold text-[#1F2937] mb-1">{word.meaning}</p>
                <div className="mt-3 bg-[#F9FAFB] rounded-2xl p-4">
                  <p className="font-jp text-sm text-[#1F2937] mb-1 font-semibold">{word.example}</p>
                  <p className="text-xs text-[#6B7280]">{word.exampleMeaning}</p>
                </div>
              </div>
              <div className="px-6 pb-6 flex gap-3">
                <button
                  onClick={handleDontKnow}
                  className="flex-1 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border-2 border-red-100 text-red-500 bg-red-50 hover:bg-red-100 transition-all"
                >
                  <X size={16} /> Belum Tahu
                </button>
                <button
                  onClick={handleKnow}
                  className="flex-1 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border-2 border-green-100 text-green-600 bg-green-50 hover:bg-green-100 transition-all"
                >
                  <Check size={16} /> Sudah Tahu (+3 XP)
                </button>
              </div>
            </motion.div>
          )}

          {/* Quiz mode: options */}
          {mode === "quiz" && (
            <div className="px-6 pb-6 space-y-2.5">
              {options.map((opt, i) => {
                let bg = "bg-white border-[#E7E5E4] text-[#1F2937]";
                if (selectedOption !== null) {
                  if (opt === word.meaning) bg = "bg-green-50 border-green-400 text-green-700";
                  else if (opt === selectedOption) bg = "bg-red-50 border-red-400 text-red-700";
                  else bg = "bg-white border-[#E7E5E4] text-[#9CA3AF]";
                }
                return (
                  <motion.button
                    key={i}
                    whileHover={selectedOption === null ? { scale: 1.01 } : {}}
                    whileTap={selectedOption === null ? { scale: 0.99 } : {}}
                    onClick={() => handleQuizAnswer(opt)}
                    disabled={selectedOption !== null}
                    className={`w-full py-3 px-4 rounded-2xl border-2 font-semibold text-sm text-left transition-all ${bg}`}
                  >
                    {opt}
                  </motion.button>
                );
              })}

              {/* Show example after answering */}
              {selectedOption !== null && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 bg-[#F9FAFB] rounded-2xl p-4">
                  <p className="font-jp text-sm text-[#1F2937] mb-1 font-semibold">{word.example}</p>
                  <p className="text-xs text-[#6B7280]">{word.exampleMeaning}</p>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Score tracker */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-[#6B7280]">XP dari sesi ini: <strong className="text-violet-600">+{score * (mode === "quiz" ? 5 : 3)} XP</strong></span>
        <span className="text-xs text-[#6B7280]">Benar: <strong className="text-green-600">{score}</strong> / {index + (selectedOption !== null ? 1 : 0)}</span>
      </div>
    </div>
  );
}
