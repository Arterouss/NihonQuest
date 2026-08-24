"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Volume2, Filter, ChevronDown } from "lucide-react";

const vocabData = [
  { jp: "食べる", reading: "たべる", romaji: "taberu", meaning: "makan", pos: "Kata Kerja", jlpt: "N5", category: "makanan", ex: "ご飯を食べる。" },
  { jp: "飲む", reading: "のむ", romaji: "nomu", meaning: "minum", pos: "Kata Kerja", jlpt: "N5", category: "makanan", ex: "水を飲む。" },
  { jp: "行く", reading: "いく", romaji: "iku", meaning: "pergi", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "学校へ行く。" },
  { jp: "来る", reading: "くる", romaji: "kuru", meaning: "datang", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "友達が来る。" },
  { jp: "見る", reading: "みる", romaji: "miru", meaning: "melihat / menonton", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "映画を見る。" },
  { jp: "聞く", reading: "きく", romaji: "kiku", meaning: "mendengar / bertanya", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "音楽を聞く。" },
  { jp: "書く", reading: "かく", romaji: "kaku", meaning: "menulis", pos: "Kata Kerja", jlpt: "N5", category: "sekolah", ex: "手紙を書く。" },
  { jp: "読む", reading: "よむ", romaji: "yomu", meaning: "membaca", pos: "Kata Kerja", jlpt: "N5", category: "sekolah", ex: "本を読む。" },
  { jp: "話す", reading: "はなす", romaji: "hanasu", meaning: "berbicara", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "日本語を話す。" },
  { jp: "買う", reading: "かう", romaji: "kau", meaning: "membeli", pos: "Kata Kerja", jlpt: "N5", category: "belanja", ex: "本を買う。" },
  { jp: "大きい", reading: "おおきい", romaji: "ookii", meaning: "besar", pos: "Kata Sifat", jlpt: "N5", category: "sifat", ex: "大きい犬。" },
  { jp: "小さい", reading: "ちいさい", romaji: "chiisai", meaning: "kecil", pos: "Kata Sifat", jlpt: "N5", category: "sifat", ex: "小さい猫。" },
  { jp: "新しい", reading: "あたらしい", romaji: "atarashii", meaning: "baru", pos: "Kata Sifat", jlpt: "N5", category: "sifat", ex: "新しい車。" },
  { jp: "古い", reading: "ふるい", romaji: "furui", meaning: "tua / lama", pos: "Kata Sifat", jlpt: "N5", category: "sifat", ex: "古い本。" },
  { jp: "高い", reading: "たかい", romaji: "takai", meaning: "mahal / tinggi", pos: "Kata Sifat", jlpt: "N5", category: "sifat", ex: "高いビル。" },
  { jp: "安い", reading: "やすい", romaji: "yasui", meaning: "murah", pos: "Kata Sifat", jlpt: "N5", category: "belanja", ex: "安い服。" },
  { jp: "学校", reading: "がっこう", romaji: "gakkou", meaning: "sekolah", pos: "Kata Benda", jlpt: "N5", category: "sekolah", ex: "学校に行く。" },
  { jp: "先生", reading: "せんせい", romaji: "sensei", meaning: "guru", pos: "Kata Benda", jlpt: "N5", category: "sekolah", ex: "先生に聞く。" },
  { jp: "友達", reading: "ともだち", romaji: "tomodachi", meaning: "teman", pos: "Kata Benda", jlpt: "N5", category: "keluarga", ex: "友達と遊ぶ。" },
  { jp: "家族", reading: "かぞく", romaji: "kazoku", meaning: "keluarga", pos: "Kata Benda", jlpt: "N5", category: "keluarga", ex: "家族と暮らす。" },
];

const categories = ["Semua", "sehari-hari", "makanan", "sekolah", "keluarga", "belanja", "sifat"];
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

  const filtered = vocabData.filter((v) => {
    const matchSearch = v.jp.includes(search) || v.reading.includes(search) || v.meaning.toLowerCase().includes(search.toLowerCase()) || v.romaji.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Semua" || v.category === activeCategory;
    const matchJlpt = activeJLPT === "Semua" || v.jlpt === activeJLPT;
    return matchSearch && matchCat && matchJlpt;
  });

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
      </motion.div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Cari kosakata (Jepang, romaji, atau arti)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
              onClick={() => setActiveJLPT(level)}
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
            onClick={() => setActiveCategory(cat)}
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
        {filtered.map((vocab) => (
          <motion.button
            key={vocab.jp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setSelectedVocab(vocab)}
            className="text-left bg-white rounded-2xl border border-[#E7E5E4] p-4 hover:border-[#22C55E] hover:shadow-md transition-all"
          >
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
              <span className="text-xs text-[#6B7280] bg-[#FFF9F7] px-2 py-0.5 rounded-lg">{vocab.pos}</span>
              <span className="text-xs text-[#6B7280] italic">{vocab.romaji}</span>
            </div>
          </motion.button>
        ))}
      </div>

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
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
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

                <div className="bg-[#EEF2FF] rounded-xl p-4">
                  <p className="text-xs font-bold text-[#6B7280] mb-1">CONTOH KALIMAT</p>
                  <p className="font-jp text-[#1F2937] font-bold">{selectedVocab.ex}</p>
                </div>

                <button className="w-full py-2.5 bg-[#22C55E] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
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
