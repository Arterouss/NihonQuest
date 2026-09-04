"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { kanjiData, kanjiCountByLevel, type KanjiEntry } from "@/lib/kanjiData";
import { useProgressStore } from "@/store/useProgressStore";

const jlptLevels = ["N5", "N4", "N3", "N2", "N1"];

const jlptColors: Record<string, { bg: string; text: string; border: string }> = {
  N5: { bg: "#DCFCE7", text: "#22C55E", border: "#22C55E" },
  N4: { bg: "#DBEAFE", text: "#3B82F6", border: "#3B82F6" },
  N3: { bg: "#FEF9C3", text: "#F59E0B", border: "#F59E0B" },
  N2: { bg: "#FED7AA", text: "#F97316", border: "#F97316" },
  N1: { bg: "#FEE2E2", text: "#EF4444", border: "#EF4444" },
};

export default function KanjiPage() {
  const [activeLevel, setActiveLevel] = useState("N5");
  const [search, setSearch] = useState("");
  const [selectedKanji, setSelectedKanji] = useState<KanjiEntry | null>(null);
  const store = useProgressStore();

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 50;

  const levelData = kanjiData.filter((k) => k.jlpt === activeLevel);
  const filtered = search
    ? levelData.filter(
        (k) =>
          k.char.includes(search) ||
          k.meaning.toLowerCase().includes(search.toLowerCase()) ||
          k.onyomi.some((r) => r.includes(search)) ||
          k.kunyomi.some((r) => r.includes(search))
      )
    : levelData;

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedKanji = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const c = jlptColors[activeLevel];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6] flex items-center justify-center">
            <span className="text-2xl font-jp text-white font-bold">漢</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kanji</h1>
            <p className="text-[#6B7280] text-sm">漢字 — Aksara Tionghoa dalam bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Level Tabs */}
      <div className="flex gap-2 flex-wrap">
        {jlptLevels.map((level) => {
          const col = jlptColors[level];
          const inApp = kanjiData.filter((k) => k.jlpt === level).length;
          const total = kanjiCountByLevel[level];
          return (
            <button
              key={level}
              onClick={() => { setActiveLevel(level); setSearch(""); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border flex flex-col items-center gap-0.5 ${
                activeLevel === level ? "text-white border-transparent" : "border-[#E7E5E4] text-[#6B7280]"
              }`}
              style={activeLevel === level ? { backgroundColor: col.text } : {}}
            >
              <span>{level}</span>
              <span className={`text-[10px] font-normal ${activeLevel === level ? "text-white/80" : "text-[#9CA3AF]"}`}>
                {inApp}/{total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Cari kanji, arti, onyomi, atau kunyomi..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-white focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: `Total Standar ${activeLevel}`, value: (kanjiCountByLevel[activeLevel] ?? 0).toLocaleString(), color: c.text },
          { label: "Tersedia di App", value: filtered.length.toString(), color: "#4F46E5" },
          { label: "Dikuasai", value: store.masteredKanji.filter(k => filtered.some(f => f.char === k)).length.toString(), color: "#D95F76" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#E7E5E4] p-4 text-center">
            <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-[#6B7280] font-medium mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#6B7280]">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-medium">Kanji tidak ditemukan</p>
          <p className="text-sm mt-1 opacity-70">
            {kanjiData.filter((k) => k.jlpt === activeLevel).length === 0
              ? `Data kanji ${activeLevel} akan segera ditambahkan!`
              : "Coba kata kunci lain"}
          </p>
        </div>
      )}

      {/* Kanji Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
        {paginatedKanji.map((kanji) => {
          const isMastered = store.masteredKanji.includes(kanji.char);
          return (
            <motion.button
              key={kanji.char + kanji.jlpt}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedKanji(kanji)}
              className={`flex flex-col items-center justify-center p-4 gap-1.5 bg-white rounded-2xl border hover:shadow-md transition-all aspect-square relative ${
                isMastered
                  ? "border-[#22C55E] ring-2 ring-[#22C55E] bg-[#F0FDF4]"
                  : "border-[#E7E5E4] hover:border-[#8B5CF6]"
              }`}
            >
              {isMastered && (
                <div className="absolute top-1.5 right-1.5">
                  <CheckCircle2 size={12} className="text-[#22C55E]" />
                </div>
              )}
              <span className="text-3xl font-jp font-bold text-[#1F2937]">{kanji.char}</span>
              <span className="text-[10px] text-[#6B7280] text-center leading-tight line-clamp-2">{kanji.meaning}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
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

      {/* Kanji Detail Modal */}
      <AnimatePresence>
        {selectedKanji && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedKanji(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-8xl font-jp font-bold text-[#1F2937] block leading-none">{selectedKanji.char}</span>
                  <p className="text-[#6B7280] mt-2 font-medium">{selectedKanji.meaning}</p>
                </div>
                <button onClick={() => setSelectedKanji(null)} className="p-2 rounded-xl hover:bg-[#FFF9F7] text-[#6B7280]">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FFF9F7] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] font-medium mb-1">音読み (Onyomi)</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedKanji.onyomi.length > 0
                        ? selectedKanji.onyomi.map((r) => (
                            <span key={r} className="font-jp text-[#1F2937] font-bold text-sm">{r}</span>
                          ))
                        : <span className="text-[#6B7280] text-xs">—</span>}
                    </div>
                  </div>
                  <div className="bg-[#FFF9F7] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] font-medium mb-1">訓読み (Kunyomi)</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedKanji.kunyomi.length > 0
                        ? selectedKanji.kunyomi.map((r) => (
                            <span key={r} className="font-jp text-[#1F2937] font-bold text-sm">{r}</span>
                          ))
                        : <span className="text-[#6B7280] text-xs">—</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#6B7280]">Jumlah coretan:</span>
                  <span className="font-bold text-[#1F2937]">{selectedKanji.strokes} coretan</span>
                  <span
                    className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: jlptColors[selectedKanji.jlpt].bg, color: jlptColors[selectedKanji.jlpt].text }}
                  >
                    {selectedKanji.jlpt}
                  </span>
                </div>

                {/* Mastery Toggle */}
                <button
                  onClick={() => store.toggleMastered("kanji", selectedKanji.char)}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    store.masteredKanji.includes(selectedKanji.char)
                      ? "bg-[#22C55E] text-white hover:bg-[#16A34A]"
                      : "bg-[#F0FDF4] text-[#22C55E] border-2 border-[#22C55E] hover:bg-[#DCFCE7]"
                  }`}
                >
                  <CheckCircle2 size={16} />
                  {store.masteredKanji.includes(selectedKanji.char) ? "Sudah Dikuasai ✓" : "Tandai Dikuasai"}
                </button>

                <div className="flex gap-2 mt-3">
                  <Link href="/flashcards?type=kanji" className="flex-1 py-2.5 bg-[#8B5CF6] text-white rounded-xl text-sm font-semibold text-center hover:bg-[#7C3AED] transition-colors">
                    Flashcard
                  </Link>
                  <Link href="/quiz?type=kanji" className="flex-1 py-2.5 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-xl text-sm font-semibold text-center hover:bg-[#EDE9FE] transition-colors">
                    Kuis
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
