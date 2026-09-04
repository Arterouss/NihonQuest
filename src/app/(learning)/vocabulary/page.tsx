"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Volume2, CheckCircle2 } from "lucide-react";

import { vocabularyData } from "@/lib/vocabularyData";
import { getExampleSentence } from "@/lib/exampleSentences";
import { useProgressStore } from "@/store/useProgressStore";

const vocabData = vocabularyData.map(v => ({
  jp: v.word,
  reading: v.reading,
  romaji: "", // Tidak ada di dataset baru
  meaning: v.meaning,
  pos: v.type || "Vocabulary",
  jlpt: `N${v.level}`,
  category: "Semua", // Dataset baru belum punya kategori spesifik
}));

const categories = ["Semua"];

const jlptLevels = ["Semua", "N5", "N4", "N3", "N2", "N1"];

const jlptColors: Record<string, { bg: string; text: string }> = {
  N5: { bg: "#DCFCE7", text: "#22C55E" },
  N4: { bg: "#DBEAFE", text: "#3B82F6" },
  N3: { bg: "#FEF9C3", text: "#F59E0B" },
  N2: { bg: "#FED7AA", text: "#F97316" },
  N1: { bg: "#FEE2E2", text: "#EF4444" },
};

export default function VocabularyPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeJLPT, setActiveJLPT] = useState("Semua");
  const [selectedVocab, setSelectedVocab] = useState<typeof vocabData[0] | null>(null);
  const store = useProgressStore();

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 50;

  const filtered = vocabData.filter((v) => {
    const matchSearch = v.jp.includes(search) || v.reading.includes(search) || v.meaning.toLowerCase().includes(search.toLowerCase()) || v.romaji.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Semua" || v.category === activeCategory;
    const matchJlpt = activeJLPT === "Semua" || v.jlpt === activeJLPT;
    return matchSearch && matchCat && matchJlpt;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedVocab = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const masteredCount = store.masteredVocab.length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#22C55E] flex items-center justify-center">
            <span className="text-xl font-jp text-white font-bold">語</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kosakata</h1>
            <p className="text-[#6B7280] text-sm">語彙 — Perbendaharaan kata bahasa Jepang</p>
          </div>
        </div>

        {/* Mastery Progress */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-[#1F2937]">Kosakata Dikuasai</span>
            <span className="text-sm font-bold text-[#22C55E]">{masteredCount} kata</span>
          </div>
          <div className="w-full bg-[#DCFCE7] rounded-full h-2.5">
            <motion.div
              className="h-2.5 rounded-full bg-[#22C55E]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((masteredCount / 100) * 100, 100)}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-[#6B7280] mt-1.5">
            {masteredCount >= 100
              ? "🎉 Pencapaian '100 Kosakata' tercapai!"
              : `${100 - masteredCount} kata lagi untuk pencapaian '100 Kosakata'`}
          </p>
        </div>
      </motion.div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Cari kosakata (Jepang, romaji, atau arti)..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-white focus:border-[#22C55E] transition-all text-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-[#6B7280] self-center mr-1">JLPT:</span>
          {jlptLevels.map((level) => (
            <button
              key={level}
              onClick={() => { setActiveJLPT(level); setCurrentPage(1); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeJLPT === level ? "bg-[#22C55E] text-white" : "bg-white border border-[#E7E5E4] text-[#6B7280]"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        <span className="text-xs font-bold text-[#6B7280] self-center mr-1">Kategori:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
              activeCategory === cat ? "bg-[#22C55E] text-white" : "bg-white border border-[#E7E5E4] text-[#6B7280]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-[#6B7280]">
        Menampilkan <span className="font-bold text-[#1F2937]">{filtered.length}</span> kosakata
      </p>

      {/* Vocab Cards */}
      <div className="grid sm:grid-cols-2 gap-3">
        {paginatedVocab.map((vocab, idx) => {
          const isMastered = store.masteredVocab.includes(vocab.jp);
          return (
            <motion.button
              key={vocab.jp + vocab.jlpt + idx}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedVocab(vocab)}
              className={`text-left bg-white rounded-2xl border p-4 hover:shadow-md transition-all relative ${
                isMastered
                  ? "border-[#22C55E] ring-1 ring-[#22C55E]/30 bg-[#F0FDF4]"
                  : "border-[#E7E5E4] hover:border-[#22C55E]"
              }`}
            >
              {isMastered && (
                <div className="absolute top-3 right-3">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                </div>
              )}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-2xl font-jp font-bold text-[#1F2937]">{vocab.jp}</span>
                  <span className="ml-2 text-sm text-[#D95F76] font-jp">{vocab.reading}</span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: jlptColors[vocab.jlpt]?.bg, color: jlptColors[vocab.jlpt]?.text }}
                >
                  {vocab.jlpt}
                </span>
              </div>
              <p className="font-semibold text-[#1F2937] text-sm mb-1">{vocab.meaning}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6B7280] bg-[#FFF9F7] px-2 py-0.5 rounded-lg line-clamp-1">{vocab.pos}</span>
              </div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedVocab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVocab(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-5xl font-jp font-bold text-[#1F2937]">{selectedVocab.jp}</span>
                  <p className="text-[#D95F76] font-jp text-xl mt-1">{selectedVocab.reading}</p>
                </div>
                <button onClick={() => setSelectedVocab(null)} className="p-2 rounded-xl hover:bg-[#FFF9F7] text-[#6B7280]">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-[#DCFCE7] text-[#22C55E] rounded-full text-sm font-bold">{selectedVocab.jlpt}</span>
                  <span className="px-3 py-1 bg-[#FFF9F7] text-[#6B7280] rounded-full text-sm">{selectedVocab.pos}</span>
                  <span className="px-3 py-1 bg-[#FFF9F7] text-[#6B7280] rounded-full text-sm capitalize">{selectedVocab.category}</span>
                </div>

                <div className="bg-[#FFF9F7] rounded-xl p-4">
                  <p className="text-xs font-bold text-[#6B7280] mb-1">ARTI</p>
                  <p className="text-[#1F2937] font-semibold text-lg">{selectedVocab.meaning}</p>
                  <p className="text-[#6B7280] text-sm">{selectedVocab.romaji}</p>
                </div>

                {/* Example Sentences */}
                <div className="bg-[#EEF2FF] rounded-xl p-4">
                  <p className="text-xs font-bold text-[#6B7280] mb-2">CONTOH KALIMAT</p>
                  {getExampleSentence(selectedVocab.jp, selectedVocab.reading, selectedVocab.meaning).map((ex, i) => (
                    <div key={i} className="space-y-1.5">
                      <p className="font-jp text-[#1F2937] font-bold text-base leading-relaxed">{ex.ja}</p>
                      <p className="text-[#4F46E5] text-sm italic">{ex.reading}</p>
                      <p className="text-[#6B7280] text-sm">{ex.id}</p>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      if ("speechSynthesis" in window) {
                        window.speechSynthesis.cancel();
                        const sentences = getExampleSentence(selectedVocab.jp, selectedVocab.reading, selectedVocab.meaning);
                        const utterance = new SpeechSynthesisUtterance(sentences[0].ja);
                        utterance.lang = "ja-JP";
                        window.speechSynthesis.speak(utterance);
                      }
                    }}
                    className="mt-3 flex items-center gap-1.5 text-xs text-[#4F46E5] font-semibold hover:underline"
                  >
                    <Volume2 size={14} /> Dengarkan kalimat
                  </button>
                </div>

                {/* Mastery Toggle */}
                <button
                  onClick={() => store.toggleMastered("vocab", selectedVocab.jp)}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    store.masteredVocab.includes(selectedVocab.jp)
                      ? "bg-[#22C55E] text-white hover:bg-[#16A34A]"
                      : "bg-[#F0FDF4] text-[#22C55E] border-2 border-[#22C55E] hover:bg-[#DCFCE7]"
                  }`}
                >
                  <CheckCircle2 size={16} />
                  {store.masteredVocab.includes(selectedVocab.jp) ? "Sudah Dikuasai ✓" : "Tandai Dikuasai"}
                </button>

                <button 
                  onClick={() => {
                    if ("speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                      const utterance = new SpeechSynthesisUtterance(selectedVocab.jp);
                      utterance.lang = "ja-JP";
                      window.speechSynthesis.speak(utterance);
                    } else {
                      alert("Browser Anda tidak mendukung fitur suara (Speech Synthesis).");
                    }
                  }}
                  className="w-full py-2.5 bg-[#22C55E] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#16A34A] transition-colors"
                >
                  <Volume2 size={16} /> Dengarkan Pengucapan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
