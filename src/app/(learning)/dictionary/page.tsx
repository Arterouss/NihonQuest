"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Volume2, BookOpen } from "lucide-react";
import { vocabularyData } from "@/lib/vocabularyData";

export default function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof vocabularyData>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    const q = query.toLowerCase().trim();
    
    // Batasi hasil pencarian agar tidak terlalu berat (maksimal 50)
    const filtered = vocabularyData.filter(
      (e) =>
        e.word.includes(q) ||
        e.reading.includes(q) ||
        e.meaning.toLowerCase().includes(q)
    ).slice(0, 50);
    
    setResults(filtered);
    setSearched(true);
  };

  const playAudio = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-[#1F2937] flex items-center justify-center">
            <BookOpen size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kamus</h1>
            <p className="text-[#6B7280] text-sm">辞書 — Cari dari 8.000+ kosakata Jepang-Indonesia</p>
          </div>
        </div>
      </motion.div>

      {/* Search Box */}
      <div className="bg-white rounded-3xl border border-[#E7E5E4] p-6 shadow-sm">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Cari kanji, hiragana, atau arti bahasa Indonesianya..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#E7E5E4] bg-[#FFF9F7] focus:border-[#D95F76] focus:ring-2 focus:ring-[#D95F76]/20 text-[#1F2937] text-sm transition-all"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-6 py-3.5 rounded-2xl sakura-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow"
          >
            Cari
          </button>
        </div>

        <div className="flex gap-2 mt-3 flex-wrap">
          {["食べる", "大きい", "sekolah", "teman", "air"].map((w) => (
            <button
              key={w}
              onClick={() => { setQuery(w); }}
              className="px-3 py-1.5 bg-[#FFF9F7] border border-[#E7E5E4] rounded-xl text-sm font-jp hover:border-[#D95F76] hover:text-[#D95F76] transition-all"
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {searched && (
        <div>
          <p className="text-sm text-[#6B7280] mb-4">
            {results.length > 0
              ? `${results.length > 49 ? 'Menampilkan 50' : results.length} hasil untuk "${query}"`
              : `Tidak ada hasil untuk "${query}"`}
          </p>
          <div className="space-y-4">
            {results.map((entry, idx) => (
              <motion.div
                key={`${entry.word}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-[#E7E5E4] p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-4xl font-jp font-bold text-[#1F2937]">{entry.word}</span>
                    <span className="ml-3 text-lg font-jp text-[#D95F76]">{entry.reading}</span>
                  </div>
                  <button 
                    onClick={() => playAudio(entry.word)}
                    className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-all"
                    title="Dengarkan Pengucapan"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#FCE7F3] text-[#D95F76] rounded-full text-xs font-bold">
                    JLPT N{entry.level}
                  </span>
                  {entry.type && (
                    <span className="px-3 py-1 bg-[#FFF9F7] border border-[#E7E5E4] rounded-full text-xs font-medium text-[#6B7280]">
                      {entry.type}
                    </span>
                  )}
                </div>

                <p className="text-[#1F2937] font-semibold text-lg">{entry.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {!searched && (
        <div className="text-center py-12 text-[#6B7280]">
          <div className="text-6xl mb-4 font-jp">辞書</div>
          <p className="font-medium">Masukkan kata untuk mencari di kamus</p>
          <p className="text-sm mt-1">Dukung pencarian dalam Jepang (Kanji/Kana) atau Indonesia</p>
        </div>
      )}
    </div>
  );
}
