"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Zap } from "lucide-react";

const questions = [
  {
    type: "multiple_choice",
    question: "Apa arti dari 食べる (たべる)?",
    options: ["Minum", "Makan", "Pergi", "Membaca"],
    correct: 1,
    explanation: "食べる (taberu) berarti 'makan'. Contoh: ご飯を食べる (makan nasi).",
  },
  {
    type: "multiple_choice",
    question: "Bagaimana cara membaca 学校?",
    options: ["がっこう", "がくえん", "こうこう", "せんこう"],
    correct: 0,
    explanation: "学校 dibaca 'gakkou' dan berarti 'sekolah'.",
  },
  {
    type: "multiple_choice",
    question: "Apa arti kanji 山?",
    options: ["Laut", "Sungai", "Gunung", "Danau"],
    correct: 2,
    explanation: "山 (yama/san) berarti 'gunung'. Contoh: 富士山 (Fujisan = Gunung Fuji).",
  },
  {
    type: "multiple_choice",
    question: "Terjemahkan: 'Saya adalah pelajar.'",
    options: ["私は先生です。", "私は学生です。", "私は医者です。", "私は会社員です。"],
    correct: 1,
    explanation: "学生 (gakusei) berarti 'pelajar'. 先生=guru, 医者=dokter, 会社員=karyawan.",
  },
  {
    type: "multiple_choice",
    question: "Kata apa yang digunakan untuk menyatakan 'ingin melakukan sesuatu'?",
    options: ["〜ます", "〜です", "〜たい", "〜ません"],
    correct: 2,
    explanation: "〜たい adalah pola untuk menyatakan keinginan. Contoh: 行きたい (ingin pergi).",
  },
  {
    type: "multiple_choice",
    question: "Apa bunyi hiragana あ?",
    options: ["i", "u", "a", "e"],
    correct: 2,
    explanation: "あ dibaca 'a'. Ini adalah karakter hiragana pertama dalam alfabet Jepang.",
  },
];

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === q.correct;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, correct]);
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

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

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
          <h2 className="text-2xl font-bold text-[#1F2937] mb-2">
            {accuracy >= 70 ? "Luar Biasa!" : "Terus Berlatih!"}
          </h2>
          <p className="text-[#6B7280] mb-6">Kamu telah menyelesaikan kuis ini.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Benar", value: score, icon: "✅", color: "#22C55E" },
              { label: "Salah", value: questions.length - score, icon: "❌", color: "#EF4444" },
              { label: "Akurasi", value: `${accuracy}%`, icon: "🎯", color: "#4F46E5" },
            ].map((s) => (
              <div key={s.label} className="bg-[#FFF9F7] rounded-2xl p-3">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-bold text-lg" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Answer Review */}
          <div className="space-y-1.5 mb-6">
            {answers.map((correct, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-xl"
                style={{ backgroundColor: correct ? "#DCFCE7" : "#FEE2E2" }}
              >
                {correct ? (
                  <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle size={14} className="text-red-500 flex-shrink-0" />
                )}
                <span className="text-xs text-[#1F2937] text-left truncate">
                  {questions[i].question}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleRestart}
            className="w-full py-3 rounded-xl sakura-gradient text-white font-bold flex items-center justify-center gap-2"
          >
            <RotateCcw size={16} /> Coba Lagi
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
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

        {/* Progress */}
        <div className="w-full bg-[#E7E5E4] rounded-full h-2">
          <motion.div
            className="h-2 rounded-full sakura-gradient"
            animate={{ width: `${((currentQ) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm"
        >
          <p className="text-sm font-bold text-[#D95F76] uppercase tracking-wider mb-4">
            {q.type === "multiple_choice" ? "Pilihan Ganda" : "Isi Kolom"}
          </p>
          <h2 className="text-xl font-bold text-[#1F2937] mb-6 leading-relaxed">{q.question}</h2>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let style = "border-[#E7E5E4] bg-white text-[#1F2937]";
              if (answered) {
                if (idx === q.correct) style = "border-[#22C55E] bg-[#DCFCE7] text-[#22C55E]";
                else if (idx === selected && idx !== q.correct) style = "border-[#EF4444] bg-[#FEE2E2] text-[#EF4444]";
                else style = "border-[#E7E5E4] bg-[#F3F4F6] text-[#6B7280] opacity-60";
              }

              return (
                <motion.button
                  key={idx}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  whileTap={!answered ? { scale: 0.99 } : {}}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left font-medium transition-all ${style}`}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{
                      backgroundColor:
                        answered && idx === q.correct ? "#22C55E" :
                        answered && idx === selected && idx !== q.correct ? "#EF4444" :
                        "#F3F4F6",
                      color:
                        answered && (idx === q.correct || (idx === selected && idx !== q.correct))
                          ? "white" : "#6B7280",
                    }}
                  >
                    {answered && idx === q.correct ? "✓" :
                     answered && idx === selected && idx !== q.correct ? "✗" :
                     ["A", "B", "C", "D"][idx]}
                  </span>
                  <span className="font-jp">{option}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 bg-[#EEF2FF] rounded-2xl border border-[#4F46E5]/20"
              >
                <p className="text-xs font-bold text-[#4F46E5] mb-1">💡 Penjelasan</p>
                <p className="text-sm text-[#1F2937] leading-relaxed">{q.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Next Button */}
      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full py-4 rounded-2xl sakura-gradient text-white font-bold flex items-center justify-center gap-2 shadow-lg"
        >
          {currentQ < questions.length - 1 ? (
            <><ChevronRight size={18} /> Pertanyaan Berikutnya</>
          ) : (
            <><CheckCircle2 size={18} /> Lihat Hasil</>
          )}
        </motion.button>
      )}
    </div>
  );
}
