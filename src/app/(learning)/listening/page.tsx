"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, CheckCircle2, Headphones, Volume2 } from "lucide-react";

import { listeningData, type ListeningExercise } from "@/lib/listeningData";

const listeningExercises = listeningData;

export default function ListeningPage() {
  const [activeEx, setActiveEx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [answered, setAnswered] = useState<number | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const ex = listeningExercises[activeEx];

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!("speechSynthesis" in window)) {
      alert("Browser Anda tidak mendukung fitur suara (Speech Synthesis).");
      return;
    }

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(ex.script);
      utterance.lang = "ja-JP";
      utterance.rate = 0.9; // Sedikit lebih lambat agar mudah didengar
      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);
      
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setPlaying(true);
    }
  };

  const changeExercise = (index: number) => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setActiveEx(index);
    setAnswered(null);
    setShowScript(false);
    setPlaying(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#3B82F6] flex items-center justify-center">
            <Headphones size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Latihan Mendengarkan</h1>
            <p className="text-[#6B7280] text-sm">聴解 — Latih kemampuan mendengar bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Exercise List */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {listeningExercises.map((e, i) => (
          <button
            key={e.id}
            onClick={() => changeExercise(i)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              activeEx === i ? "bg-[#3B82F6] text-white border-[#3B82F6]" : "bg-white border-[#E7E5E4] text-[#6B7280]"
            }`}
          >
            {e.title}
          </button>
        ))}
      </div>

      {/* Player Card */}
      <div className="bg-white rounded-3xl border border-[#E7E5E4] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-bold text-[#1F2937]">{ex.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 bg-[#DBEAFE] text-[#3B82F6] text-xs font-bold rounded-full">{ex.level}</span>
              <span className="text-xs text-[#6B7280]">{ex.duration}</span>
            </div>
          </div>
          <Volume2 size={24} className="text-[#3B82F6]" />
        </div>

        {/* Waveform Visual */}
        <div className="flex items-center gap-1 mb-5 justify-center h-12">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-[#3B82F6]"
              animate={playing ? { height: [8, Math.random() * 28 + 8, 8] } : { height: 8 }}
              transition={playing ? { duration: 0.3, repeat: Infinity, delay: i * 0.05 } : {}}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center shadow-lg"
          >
            {playing ? <Pause size={22} className="text-white" /> : <Play size={22} className="text-white ml-0.5" />}
          </motion.button>
        </div>
      </div>

      {/* Script Toggle */}
      <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-[#1F2937]">Transkrip</h3>
          <button
            onClick={() => setShowScript(!showScript)}
            className="text-sm font-semibold text-[#3B82F6] hover:underline"
          >
            {showScript ? "Sembunyikan" : "Tampilkan"}
          </button>
        </div>
        {showScript && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
            <p className="font-jp text-lg text-[#1F2937] mb-2">{ex.script}</p>
            <p className="text-[#6B7280] text-sm italic">{ex.translation}</p>
          </motion.div>
        )}
      </div>

      {/* Questions */}
      <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
        <h3 className="font-bold text-[#1F2937] mb-4">Pertanyaan Pemahaman</h3>
        {ex.questions.map((q, qi) => (
          <div key={qi}>
            <p className="font-semibold text-[#1F2937] mb-3">{q.q}</p>
            <div className="grid grid-cols-2 gap-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => setAnswered(oi)}
                  disabled={answered !== null}
                  className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                    answered === null ? "border-[#E7E5E4] hover:border-[#3B82F6]" :
                    oi === q.correct ? "border-[#22C55E] bg-[#DCFCE7] text-[#22C55E]" :
                    oi === answered && oi !== q.correct ? "border-[#EF4444] bg-[#FEE2E2] text-[#EF4444]" :
                    "border-[#E7E5E4] opacity-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {answered !== null && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-3 text-sm font-medium ${answered === q.correct ? "text-[#22C55E]" : "text-[#EF4444]"}`}
              >
                {answered === q.correct ? "✓ Benar!" : `✗ Salah. Jawaban: ${q.options[q.correct]}`}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
