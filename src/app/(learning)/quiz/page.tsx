"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Shuffle, BookOpen, Languages, PenTool } from "lucide-react";
import { kanjiData } from "@/lib/kanjiData";
import { vocabularyData } from "@/lib/vocabularyData";
import { grammarData } from "@/lib/grammarData";

type QuizType = "vocab" | "kanji" | "grammar" | "mixed";
type Level = "all" | "N5" | "N4" | "N3" | "N2" | "N1";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWrongOptions(pool: string[], correct: string, count = 3): string[] {
  const others = pool.filter(p => p !== correct);
  return shuffle(others).slice(0, count);
}

function buildQuizQuestions(type: QuizType, level: Level, count = 15): Question[] {
  const questions: Question[] = [];

  if (type === "vocab" || type === "mixed") {
    const filtered = level === "all" ? vocabularyData : vocabularyData.filter(v => v.level === level);
    const pool = shuffle(filtered).slice(0, type === "mixed" ? Math.ceil(count / 3) : count);
    const allMeanings = vocabularyData.map(v => v.meaning);

    for (const v of pool) {
      const wrongOpts = getWrongOptions(allMeanings, v.meaning);
      const opts = shuffle([v.meaning, ...wrongOpts]);
      questions.push({
        question: `Apa arti dari ${v.word} (${v.reading})?`,
        options: opts,
        correct: opts.indexOf(v.meaning),
        explanation: `${v.word} (${v.reading}) = "${v.meaning}". Romaji: ${v.romaji}.`,
      });
    }
  }

  if (type === "kanji" || type === "mixed") {
    const filtered = level === "all" ? kanjiData : kanjiData.filter(k => k.level === level);
    const pool = shuffle(filtered).slice(0, type === "mixed" ? Math.ceil(count / 3) : count);
    const allMeanings = kanjiData.map(k => k.meaning);

    for (const k of pool) {
      const wrongOpts = getWrongOptions(allMeanings, k.meaning);
      const opts = shuffle([k.meaning, ...wrongOpts]);
      questions.push({
        question: `Apa arti kanji ${k.character}?`,
        options: opts,
        correct: opts.indexOf(k.meaning),
        explanation: `${k.character} berarti "${k.meaning}". Onyomi: ${k.onyomi || "-"}, Kunyomi: ${k.kunyomi || "-"}.`,
      });
    }
  }

  if (type === "grammar" || type === "mixed") {
    const filtered = level === "all" ? grammarData : grammarData.filter(g => g.level === level);
    const pool = shuffle(filtered).slice(0, type === "mixed" ? Math.ceil(count / 3) : count);
    const allMeanings = grammarData.map(g => g.meaning);

    for (const g of pool) {
      const wrongOpts = getWrongOptions(allMeanings, g.meaning);
      const opts = shuffle([g.meaning, ...wrongOpts]);
      questions.push({
        question: `Pola tata bahasa 「${g.pattern}」 berarti apa?`,
        options: opts,
        correct: opts.indexOf(g.meaning),
        explanation: `${g.pattern} = "${g.meaning}". Contoh: ${g.example?.jp || "-"}`,
      });
    }
  }

  return shuffle(questions).slice(0, count);
}

const QUIZ_TYPES: { key: QuizType; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
  { key: "vocab",   label: "Kosakata",    icon: <Languages size={16} />, color: "#D95F76", desc: "Tebak arti kata" },
  { key: "kanji",   label: "Kanji",       icon: <PenTool size={16} />,   color: "#8B5CF6", desc: "Tebak arti kanji" },
  { key: "grammar", label: "Tata Bahasa", icon: <BookOpen size={16} />,  color: "#F97316", desc: "Tebak fungsi pola" },
  { key: "mixed",   label: "Campuran",    icon: <Shuffle size={16} />,   color: "#0EA5E9", desc: "Mix semua kategori" },
];

const LEVELS: Level[] = ["all", "N5", "N4", "N3", "N2", "N1"];

export default function QuizPage() {
  const [quizType, setQuizType] = useState<QuizType>("vocab");
  const [level, setLevel] = useState<Level>("N5");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const activeColor = QUIZ_TYPES.find(t => t.key === quizType)?.color || "#D95F76";

  const startQuiz = () => {
    const qs = buildQuizQuestions(quizType, level);
    setQuestions(qs);
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
    setStarted(true);
  };

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === questions[currentQ].correct;
    if (correct) setScore(s => s + 1);
    setAnswers(prev => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  // === Setup Screen ===
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-[#1F2937] mb-1">Kuis</h1>
          <p className="text-[#6B7280] text-sm">Pilih kategori dan level untuk mulai kuis 15 soal acak.</p>
        </motion.div>

        {/* Quiz Type */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <p className="text-sm font-bold text-[#1F2937] mb-3">📝 Kategori Soal</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {QUIZ_TYPES.map(t => (
              <button
                key={t.key}
                onClick={() => setQuizType(t.key)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all"
                style={{
                  borderColor: quizType === t.key ? t.color : "#E7E5E4",
                  backgroundColor: quizType === t.key ? t.color + "15" : "white",
                  color: quizType === t.key ? t.color : "#6B7280",
                }}
              >
                {t.icon}
                <span className="text-xs font-bold">{t.label}</span>
                <span className="text-xs text-center opacity-70">{t.desc}</span>
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
                  borderColor: level === lv ? activeColor : "#E7E5E4",
                  backgroundColor: level === lv ? activeColor : "white",
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
          onClick={startQuiz}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
          style={{ background: `linear-gradient(135deg, ${activeColor}, ${activeColor}cc)` }}
        >
          <Shuffle size={20} /> Mulai Kuis (15 Soal Acak)
        </motion.button>
      </div>
    );
  }

  // === Finished Screen ===
  if (finished) {
    const accuracy = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-8 text-center shadow-xl"
        >
          <div className="text-6xl mb-4">{accuracy >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-2xl font-bold text-[#1F2937] mb-2">{accuracy >= 70 ? "Luar Biasa!" : "Terus Berlatih!"}</h2>
          <p className="text-[#6B7280] mb-6">Kamu telah menyelesaikan kuis ini.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Benar",   value: score,                     icon: "✅", color: "#22C55E" },
              { label: "Salah",   value: questions.length - score,  icon: "❌", color: "#EF4444" },
              { label: "Akurasi", value: `${accuracy}%`,            icon: "🎯", color: "#4F46E5" },
            ].map(s => (
              <div key={s.label} className="bg-[#FFF9F7] rounded-2xl p-3">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-bold text-lg" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-1.5 mb-6 text-left">
            {answers.map((correct, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-xl" style={{ backgroundColor: correct ? "#DCFCE7" : "#FEE2E2" }}>
                {correct ? <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" /> : <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />}
                <span className="text-xs text-[#1F2937]">{questions[i].question}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button onClick={() => setStarted(false)} className="flex-1 py-3 rounded-xl border-2 border-[#E7E5E4] text-[#6B7280] font-bold">
              Ganti Soal
            </button>
            <button onClick={startQuiz} className="flex-1 py-3 rounded-xl text-white font-bold flex items-center justify-center gap-2" style={{ backgroundColor: activeColor }}>
              <RotateCcw size={16} /> Ulang
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // === Quiz Screen ===
  const q = questions[currentQ];
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kuis</h1>
            <p className="text-[#6B7280] text-sm">Pertanyaan {currentQ + 1} dari {questions.length}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#DCFCE7] rounded-full">
            <CheckCircle2 size={14} className="text-green-500" />
            <span className="text-sm font-bold text-green-600">{score} Benar</span>
          </div>
        </div>
        <div className="w-full bg-[#E7E5E4] rounded-full h-2">
          <motion.div className="h-2 rounded-full" animate={{ width: `${(currentQ / questions.length) * 100}%` }} transition={{ duration: 0.3 }} style={{ backgroundColor: activeColor }} />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm"
        >
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: activeColor }}>Pilihan Ganda</p>
          <h2 className="text-xl font-bold text-[#1F2937] mb-6 leading-relaxed font-jp">{q.question}</h2>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let borderColor = "#E7E5E4";
              let bgColor = "white";
              let textColor = "#1F2937";
              let opacity = "1";
              if (answered) {
                if (idx === q.correct) { borderColor = "#22C55E"; bgColor = "#DCFCE7"; textColor = "#22C55E"; }
                else if (idx === selected && idx !== q.correct) { borderColor = "#EF4444"; bgColor = "#FEE2E2"; textColor = "#EF4444"; }
                else { opacity = "0.5"; }
              }
              return (
                <motion.button
                  key={idx}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  whileTap={!answered ? { scale: 0.99 } : {}}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left font-medium transition-all"
                  style={{ borderColor, backgroundColor: bgColor, color: textColor, opacity }}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{
                      backgroundColor: answered && idx === q.correct ? "#22C55E" : answered && idx === selected && idx !== q.correct ? "#EF4444" : "#F3F4F6",
                      color: answered && (idx === q.correct || (idx === selected && idx !== q.correct)) ? "white" : "#6B7280",
                    }}
                  >
                    {answered && idx === q.correct ? "✓" : answered && idx === selected && idx !== q.correct ? "✗" : ["A","B","C","D"][idx]}
                  </span>
                  <span className="font-jp">{option}</span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 p-4 bg-[#EEF2FF] rounded-2xl border border-[#4F46E5]/20">
                <p className="text-xs font-bold text-[#4F46E5] mb-1">💡 Penjelasan</p>
                <p className="text-sm text-[#1F2937] leading-relaxed">{q.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-lg"
          style={{ background: `linear-gradient(135deg, ${activeColor}, ${activeColor}cc)` }}
        >
          {currentQ < questions.length - 1 ? <><ChevronRight size={18} /> Pertanyaan Berikutnya</> : <><CheckCircle2 size={18} /> Lihat Hasil</>}
        </motion.button>
      )}
    </div>
  );
}
