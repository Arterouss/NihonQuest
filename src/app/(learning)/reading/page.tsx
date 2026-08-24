"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, X } from "lucide-react";
import { readingData, type ReadingPassage } from "@/lib/readingData";
import { useProgressStore } from "@/store/useProgressStore";

const readings = readingData;

export default function ReadingPage() {
  const [activeReading, setActiveReading] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const reading = readings[activeReading];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EC4899] flex items-center justify-center">
            <BookOpen size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Latihan Membaca</h1>
            <p className="text-[#6B7280] text-sm">読解 — Latih kemampuan membaca bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Reading Selector */}
      <div className="flex gap-3">
        {readings.map((r, i) => (
          <button
            key={r.id}
            onClick={() => { setActiveReading(i); setAnswers({}); setShowTranslation(false); }}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              activeReading === i ? "bg-[#EC4899] text-white border-[#EC4899]" : "bg-white border-[#E7E5E4] text-[#6B7280]"
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      {/* Reading Passage */}
      <div className="bg-white rounded-3xl border border-[#E7E5E4] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold font-jp text-[#1F2937]">{reading.title}</h2>
            <p className="text-[#6B7280] text-sm">{reading.titleMeaning}</p>
          </div>
          <span className="px-3 py-1 bg-[#FCE7F3] text-[#EC4899] text-sm font-bold rounded-full">{reading.level}</span>
        </div>

        <div className="bg-[#FFF9F7] rounded-2xl p-5 mb-4">
          <p className="font-jp text-lg text-[#1F2937] leading-loose">{reading.text}</p>
        </div>

        {showTranslation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-[#EEF2FF] rounded-xl p-4 mb-4"
          >
            <p className="text-xs font-bold text-[#4F46E5] mb-2">TERJEMAHAN</p>
            <p className="text-[#1F2937] text-sm leading-relaxed">{reading.translation}</p>
          </motion.div>
        )}

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="text-sm font-semibold text-[#EC4899] hover:underline"
        >
          {showTranslation ? "Sembunyikan Terjemahan" : "Tampilkan Terjemahan"}
        </button>
      </div>

      {/* Vocabulary */}
      <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
        <h3 className="font-bold text-[#1F2937] mb-3">Kosakata dalam Teks</h3>
        <div className="grid grid-cols-2 gap-2">
          {reading.vocab.map((v) => (
            <div key={v.word} className="flex items-center justify-between p-3 bg-[#FFF9F7] rounded-xl">
              <span className="font-jp font-bold text-[#1F2937]">{v.word}</span>
              <span className="text-sm text-[#6B7280]">{v.meaning}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
        <h3 className="font-bold text-[#1F2937] mb-4">Pertanyaan Pemahaman</h3>
        <div className="space-y-6">
          {reading.questions.map((q, qi) => (
            <div key={qi}>
              <p className="font-semibold text-[#1F2937] mb-3">{q.q}</p>
              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, oi) => {
                  const answered = answers[`${qi}`] !== undefined;
                  const isSelected = answers[`${qi}`] === oi;
                  const isCorrect = oi === q.correct;
                  return (
                    <button
                      key={oi}
                      onClick={() => {
                        if (!answered) {
                          setAnswers({ ...answers, [`${qi}`]: oi });
                          if (isCorrect) {
                            const store = useProgressStore.getState();
                            store.addXP(20);
                            store.incrementSessions();
                          }
                        }
                      }}
                      disabled={answered}
                      className={`p-3 rounded-xl text-sm font-medium border-2 transition-all text-left ${
                        !answered ? "border-[#E7E5E4] hover:border-[#EC4899]" :
                        isCorrect ? "border-[#22C55E] bg-[#DCFCE7] text-[#22C55E]" :
                        isSelected && !isCorrect ? "border-[#EF4444] bg-[#FEE2E2] text-[#EF4444]" :
                        "border-[#E7E5E4] opacity-50"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {answers[`${qi}`] !== undefined && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-2 text-sm font-medium ${answers[`${qi}`] === q.correct ? "text-[#22C55E]" : "text-[#EF4444]"}`}
                >
                  {answers[`${qi}`] === q.correct ? "✓ Benar!" : `✗ Jawaban: ${q.options[q.correct]}`}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
