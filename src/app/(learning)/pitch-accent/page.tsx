"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Volume2 } from "lucide-react";
import { pitchWords, pitchPatterns, type PitchWord } from "@/lib/pitchAccentData";

function PitchVisual({ word }: { word: PitchWord }) {
  return (
    <div className="flex items-end gap-1 justify-center my-4">
      {word.morae.map((mora, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-jp font-bold text-lg transition-all ${
            word.highMorae[i]
              ? "bg-[#D95F76] text-white shadow-md shadow-pink-200 -translate-y-3"
              : "bg-[#F3F4F6] text-[#374151]"
          }`}>
            {mora}
          </div>
          <span className="text-[10px] text-[#9CA3AF] font-semibold">
            {word.highMorae[i] ? "↑" : "↓"}
          </span>
        </div>
      ))}
    </div>
  );
}

function speak(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

export default function PitchAccentPage() {
  const [activePattern, setActivePattern] = useState<string>("all");
  const [selectedWord, setSelectedWord] = useState<PitchWord | null>(null);

  const filtered = activePattern === "all"
    ? pitchWords
    : pitchWords.filter((w) => w.pattern === activePattern);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg">
            <Music size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Pitch Accent</h1>
            <p className="text-[#6B7280] text-sm">アクセント — Intonasi nada bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Intro */}
      <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 rounded-2xl p-5">
        <h2 className="font-bold text-[#1F2937] mb-2">Apa itu Pitch Accent? 🎵</h2>
        <p className="text-sm text-[#6B7280] leading-relaxed">
          Bahasa Jepang menggunakan sistem nada tinggi-rendah (<strong>pitch accent</strong>) untuk membedakan kata.
          Kata <strong className="font-jp">橋 (はし)</strong> berarti "jembatan" jika nada turun di kata ke-2,
          tapi <strong className="font-jp">箸 (はし)</strong> berarti "sumpit" jika nada naik! Belajar pitch accent akan membuat
          ucapan Anda terdengar jauh lebih alami oleh orang Jepang.
        </p>
      </div>

      {/* Pattern Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {pitchPatterns.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePattern(activePattern === p.id ? "all" : p.id)}
            className={`p-3 rounded-xl border-2 text-left transition-all ${
              activePattern === p.id
                ? "border-current shadow-md"
                : "border-transparent hover:border-gray-200"
            }`}
            style={{
              backgroundColor: activePattern === p.id ? p.bgColor : "#F9FAFB",
              color: activePattern === p.id ? p.color : "#374151",
            }}
          >
            <p className="text-xs font-bold">{p.name}</p>
            <p className="text-[10px] opacity-70 mt-1 leading-tight">{p.description.slice(0, 40)}...</p>
          </button>
        ))}
      </div>

      {/* Word Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((word, i) => {
          const pattern = pitchPatterns.find((p) => p.id === word.pattern)!;
          return (
            <motion.div
              key={word.word + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-5 hover:shadow-md transition-all cursor-pointer group"
              onClick={() => setSelectedWord(selectedWord?.word === word.word ? null : word)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <p className="font-jp text-3xl font-bold text-[#1F2937]">{word.word}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); speak(word.word); }}
                    className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-gray-200 transition-all"
                  >
                    <Volume2 size={14} className="text-[#6B7280]" />
                  </button>
                </div>
                <span
                  className="px-2 py-1 rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: pattern.bgColor, color: pattern.color }}
                >
                  {word.patternLabel}
                </span>
              </div>

              <PitchVisual word={word} />

              <div className="mt-3 space-y-1">
                <p className="text-xs text-[#6B7280] italic">{word.reading}</p>
                <p className="text-xs font-semibold text-[#374151]">{word.meaning}</p>
              </div>

              {selectedWord?.word === word.word && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 pt-3 border-t border-[#F3F4F6]"
                >
                  <p className="text-xs text-[#6B7280] font-semibold mb-1">Contoh Kalimat:</p>
                  <p className="text-xs text-[#374151] font-jp">{word.example}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#9CA3AF]">
          <Music size={40} className="mx-auto mb-3 opacity-30" />
          <p>Tidak ada kata untuk pola ini</p>
        </div>
      )}
    </div>
  );
}
