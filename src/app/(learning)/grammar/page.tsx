"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, CheckCircle2, AlignJustify } from "lucide-react";

import { grammarData } from "@/lib/grammarData";
import { useProgressStore } from "@/store/useProgressStore";

const categories = ["Semua", "Particle", "Verb Conjugation", "Adjective", "Expression", "Noun"];
const jlptLevels = ["Semua", "N5"]; // Expandable later

export default function GrammarPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeJLPT, setActiveJLPT] = useState("N5"); // Default N5 for now
  const [selectedGrammar, setSelectedGrammar] = useState<typeof grammarData[0] | null>(null);
  
  const store = useProgressStore();

  const filtered = grammarData.filter((g) => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase()) || g.meaning.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Semua" || g.category === activeCategory;
    const matchJlpt = activeJLPT === "Semua" || g.level === activeJLPT;
    return matchSearch && matchCat && matchJlpt;
  });

  const masteredCount = store.masteredGrammar.length;
  const totalCount = grammarData.length;
  const progressPercent = Math.min((masteredCount / totalCount) * 100, 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0EA5E9] flex items-center justify-center">
            <AlignJustify size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Tata Bahasa</h1>
            <p className="text-[#6B7280] text-sm">文法 (Bunpou) — Pola kalimat bahasa Jepang</p>
          </div>
        </div>

        {/* Mastery Progress */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-[#1F2937]">Pola Kalimat Dikuasai</span>
            <span className="text-sm font-bold text-[#0EA5E9]">{masteredCount} / {totalCount}</span>
          </div>
          <div className="w-full bg-[#E0F2FE] rounded-full h-2.5">
            <motion.div
              className="h-2.5 rounded-full bg-[#0EA5E9]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          {masteredCount >= totalCount && totalCount > 0 && (
            <p className="text-xs text-[#22C55E] font-semibold mt-2">🎉 Selamat! Semua tata bahasa telah dikuasai!</p>
          )}
        </div>
      </motion.div>

      {/* Search & Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Cari tata bahasa atau arti..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-white focus:border-[#0EA5E9] transition-all text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="text-xs font-bold text-[#6B7280] self-center mr-1">Kategori:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                activeCategory === cat ? "bg-[#0EA5E9] text-white" : "bg-white border border-[#E7E5E4] text-[#6B7280]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grammar Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((g) => {
          const isMastered = store.masteredGrammar.includes(g.id);
          return (
            <motion.button
              key={g.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedGrammar(g)}
              className={`flex flex-col text-left bg-white p-5 rounded-2xl border transition-all relative ${
                isMastered
                  ? "border-[#22C55E] ring-1 ring-[#22C55E]/30 bg-[#F0FDF4]"
                  : "border-[#E7E5E4] hover:border-[#0EA5E9]"
              }`}
            >
              {isMastered && (
                <div className="absolute top-4 right-4">
                  <CheckCircle2 size={18} className="text-[#22C55E]" />
                </div>
              )}
              <span className="px-2 py-0.5 bg-[#E0F2FE] text-[#0EA5E9] text-[10px] font-bold rounded-md self-start mb-2 uppercase">
                {g.category}
              </span>
              <h3 className="text-xl font-bold font-jp text-[#1F2937] mb-1">{g.title}</h3>
              <p className="text-sm font-semibold text-[#6B7280] mb-3">{g.meaning}</p>
              
              <div className="mt-auto pt-3 border-t border-gray-100 w-full">
                <p className="text-xs text-gray-400 font-mono line-clamp-1">{g.structure}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#6B7280]">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-medium">Tata bahasa tidak ditemukan.</p>
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedGrammar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGrammar(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="px-2 py-1 bg-[#E0F2FE] text-[#0EA5E9] text-xs font-bold rounded-lg mb-3 inline-block uppercase">
                    {selectedGrammar.category} • {selectedGrammar.level}
                  </span>
                  <h2 className="text-3xl font-jp font-bold text-[#1F2937]">{selectedGrammar.title}</h2>
                  <p className="text-lg font-semibold text-[#6B7280] mt-1">{selectedGrammar.meaning}</p>
                </div>
                <button onClick={() => setSelectedGrammar(null)} className="p-2 rounded-xl hover:bg-gray-100 text-[#6B7280] shrink-0">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Structure Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h4 className="text-xs font-bold text-gray-500 mb-2">RUMUS / STRUKTUR</h4>
                  <code className="text-sm font-semibold text-[#1F2937] bg-white px-3 py-1.5 rounded-lg border border-gray-200 block w-max max-w-full overflow-x-auto">
                    {selectedGrammar.structure}
                  </code>
                </div>

                {/* Explanation */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">PENJELASAN</h4>
                  <p className="text-sm text-[#1F2937] leading-relaxed">
                    {selectedGrammar.explanation}
                  </p>
                </div>

                {/* Examples */}
                <div className="bg-[#E0F2FE]/50 rounded-xl p-4 border border-[#0EA5E9]/10">
                  <h4 className="text-xs font-bold text-[#0EA5E9] mb-3">CONTOH KALIMAT</h4>
                  <div className="space-y-4">
                    {selectedGrammar.examples.map((ex, i) => (
                      <div key={i} className="space-y-1">
                        <p className="font-jp text-lg font-bold text-[#1F2937]">{ex.ja}</p>
                        <p className="text-sm text-[#0EA5E9] italic">{ex.reading}</p>
                        <p className="text-sm text-[#6B7280]">{ex.id}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mastery Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => store.toggleMastered("grammar", selectedGrammar.id)}
                    className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      store.masteredGrammar.includes(selectedGrammar.id)
                        ? "bg-[#22C55E] text-white hover:bg-[#16A34A]"
                        : "bg-[#F0FDF4] text-[#22C55E] border-2 border-[#22C55E] hover:bg-[#DCFCE7]"
                    }`}
                  >
                    <CheckCircle2 size={18} />
                    {store.masteredGrammar.includes(selectedGrammar.id) ? "Sudah Dikuasai ✓" : "Tandai Dikuasai"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
