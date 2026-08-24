"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { grammarData, type GrammarEntry } from "@/lib/grammarData";

const jlptColors: Record<string, { bg: string; text: string }> = {
  N5: { bg: "#DCFCE7", text: "#22C55E" },
  N4: { bg: "#DBEAFE", text: "#3B82F6" },
  N3: { bg: "#FEF9C3", text: "#F59E0B" },
  N2: { bg: "#FED7AA", text: "#F97316" },
  N1: { bg: "#FEE2E2", text: "#EF4444" },
};

function GrammarCard({ grammar }: { grammar: GrammarEntry }) {
  const [expanded, setExpanded] = useState(false);
  const c = jlptColors[grammar.jlpt];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FFF9F7] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#FCE7EC] text-[#D95F76] font-jp font-bold text-xl px-3 py-2 rounded-xl">
            {grammar.pattern}
          </div>
          <div>
            <h3 className="font-bold text-[#1F2937]">{grammar.meaning}</h3>
            <p className="text-xs text-[#6B7280] mt-0.5">{grammar.formation}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="text-xs font-bold px-2 py-1 rounded-full hidden sm:block"
            style={{ backgroundColor: c.bg, color: c.text }}
          >
            {grammar.jlpt}
          </span>
          {expanded ? <ChevronUp size={16} className="text-[#6B7280]" /> : <ChevronDown size={16} className="text-[#6B7280]" />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-[#E7E5E4] pt-4">
              <p className="text-[#6B7280] text-sm leading-relaxed">{grammar.explanation}</p>

              <div>
                <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">Contoh Kalimat</h4>
                <div className="space-y-2">
                  {grammar.examples.map((ex, i) => (
                    <div key={i} className="bg-[#FFF9F7] rounded-xl p-3">
                      <p className="font-jp font-bold text-[#1F2937]">{ex.jp}</p>
                      <p className="text-xs text-[#6B7280] mt-0.5 italic">{ex.reading}</p>
                      <p className="text-sm text-[#6B7280] mt-0.5">{ex.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-xs font-bold text-amber-700 mb-1">⚠️ Kesalahan Umum</p>
                <p className="text-xs text-amber-700 leading-relaxed">{grammar.mistakes}</p>
              </div>

              <div className="flex gap-2">
                <Link href="/quiz?type=grammar" className="flex-1 py-2 bg-[#D95F76] text-white rounded-xl text-sm font-semibold text-center">
                  Latihan Kuis
                </Link>
                <Link href="/flashcards?type=grammar" className="flex-1 py-2 border border-[#D95F76] text-[#D95F76] rounded-xl text-sm font-semibold text-center">
                  Flashcard
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState("N5");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  const levelData = grammarData.filter(g => g.jlpt === activeLevel);
  const totalPages = Math.ceil(levelData.length / ITEMS_PER_PAGE);
  const paginatedGrammar = levelData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] flex items-center justify-center">
            <span className="text-xl font-jp text-white font-bold">文</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Tata Bahasa</h1>
            <p className="text-[#6B7280] text-sm">文法 — Pola kalimat & tata bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Level Tabs */}
      <div className="flex gap-2 flex-wrap">
        {["N5", "N4", "N3", "N2", "N1"].map((level) => {
          const c = jlptColors[level];
          return (
            <button
              key={level}
              onClick={() => { setActiveLevel(level); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border`}
              style={
                activeLevel === level
                  ? { backgroundColor: c.text, color: "white", borderColor: c.text }
                  : { borderColor: "#E7E5E4", color: "#6B7280" }
              }
            >
              {level}
              <span className="ml-1 text-xs opacity-70">
                ({grammarData.filter(g => g.jlpt === level).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Grammar List */}
      <div className="space-y-3">
        {levelData.length === 0 ? (
          <div className="text-center py-12 text-[#6B7280]">
            <div className="text-4xl mb-3">📚</div>
            <p className="font-medium">Materi {activeLevel} akan segera hadir!</p>
          </div>
        ) : (
          paginatedGrammar.map((g) => (
            <GrammarCard key={g.pattern} grammar={g} />
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8 pb-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl border border-[#E7E5E4] bg-white text-[#1F2937] font-semibold disabled:opacity-50 hover:bg-gray-50 transition-all text-sm"
          >
            Sebelumnya
          </button>
          <span className="text-sm font-medium text-[#6B7280]">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl border border-[#E7E5E4] bg-white text-[#1F2937] font-semibold disabled:opacity-50 hover:bg-gray-50 transition-all text-sm"
          >
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
}
