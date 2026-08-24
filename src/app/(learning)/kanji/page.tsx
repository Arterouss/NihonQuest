"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, ChevronRight, Search, Filter } from "lucide-react";
import Link from "next/link";

const n5Kanji = [
  { char: "一", meaning: "satu", onyomi: ["いち", "いつ"], kunyomi: ["ひと"], strokes: 1, jlpt: "N5" },
  { char: "二", meaning: "dua", onyomi: ["に"], kunyomi: ["ふた"], strokes: 2, jlpt: "N5" },
  { char: "三", meaning: "tiga", onyomi: ["さん"], kunyomi: ["み", "みつ"], strokes: 3, jlpt: "N5" },
  { char: "四", meaning: "empat", onyomi: ["し"], kunyomi: ["よ", "よん"], strokes: 5, jlpt: "N5" },
  { char: "五", meaning: "lima", onyomi: ["ご"], kunyomi: ["いつ"], strokes: 4, jlpt: "N5" },
  { char: "六", meaning: "enam", onyomi: ["ろく"], kunyomi: ["む", "むつ"], strokes: 4, jlpt: "N5" },
  { char: "七", meaning: "tujuh", onyomi: ["しち"], kunyomi: ["なな"], strokes: 2, jlpt: "N5" },
  { char: "八", meaning: "delapan", onyomi: ["はち"], kunyomi: ["や", "やつ"], strokes: 2, jlpt: "N5" },
  { char: "九", meaning: "sembilan", onyomi: ["きゅう", "く"], kunyomi: ["ここの"], strokes: 2, jlpt: "N5" },
  { char: "十", meaning: "sepuluh", onyomi: ["じゅう"], kunyomi: ["とお"], strokes: 2, jlpt: "N5" },
  { char: "百", meaning: "seratus", onyomi: ["ひゃく"], kunyomi: [], strokes: 6, jlpt: "N5" },
  { char: "千", meaning: "seribu", onyomi: ["せん"], kunyomi: ["ち"], strokes: 3, jlpt: "N5" },
  { char: "万", meaning: "sepuluh ribu", onyomi: ["まん", "ばん"], kunyomi: [], strokes: 3, jlpt: "N5" },
  { char: "円", meaning: "yen / bulat", onyomi: ["えん"], kunyomi: ["まる"], strokes: 4, jlpt: "N5" },
  { char: "年", meaning: "tahun", onyomi: ["ねん"], kunyomi: ["とし"], strokes: 6, jlpt: "N5" },
  { char: "月", meaning: "bulan / rembulan", onyomi: ["げつ", "がつ"], kunyomi: ["つき"], strokes: 4, jlpt: "N5" },
  { char: "日", meaning: "hari / matahari", onyomi: ["にち", "じつ"], kunyomi: ["ひ", "か"], strokes: 4, jlpt: "N5" },
  { char: "時", meaning: "waktu / jam", onyomi: ["じ"], kunyomi: ["とき"], strokes: 10, jlpt: "N5" },
  { char: "分", meaning: "menit / bagian", onyomi: ["ふん", "ぶん"], kunyomi: ["わ"], strokes: 4, jlpt: "N5" },
  { char: "半", meaning: "setengah", onyomi: ["はん"], kunyomi: ["なか"], strokes: 5, jlpt: "N5" },
  { char: "人", meaning: "orang", onyomi: ["じん", "にん"], kunyomi: ["ひと"], strokes: 2, jlpt: "N5" },
  { char: "山", meaning: "gunung", onyomi: ["さん"], kunyomi: ["やま"], strokes: 3, jlpt: "N5" },
  { char: "川", meaning: "sungai", onyomi: ["せん"], kunyomi: ["かわ"], strokes: 3, jlpt: "N5" },
  { char: "田", meaning: "sawah", onyomi: ["でん"], kunyomi: ["た"], strokes: 5, jlpt: "N5" },
  { char: "木", meaning: "pohon / kayu", onyomi: ["もく", "ぼく"], kunyomi: ["き"], strokes: 4, jlpt: "N5" },
  { char: "火", meaning: "api", onyomi: ["か"], kunyomi: ["ひ"], strokes: 4, jlpt: "N5" },
  { char: "水", meaning: "air", onyomi: ["すい"], kunyomi: ["みず"], strokes: 4, jlpt: "N5" },
  { char: "金", meaning: "emas / uang", onyomi: ["きん"], kunyomi: ["かね"], strokes: 8, jlpt: "N5" },
  { char: "土", meaning: "tanah", onyomi: ["ど", "と"], kunyomi: ["つち"], strokes: 3, jlpt: "N5" },
  { char: "大", meaning: "besar", onyomi: ["だい", "たい"], kunyomi: ["おお"], strokes: 3, jlpt: "N5" },
  { char: "小", meaning: "kecil", onyomi: ["しょう"], kunyomi: ["ちい", "こ", "お"], strokes: 3, jlpt: "N5" },
  { char: "中", meaning: "tengah / dalam", onyomi: ["ちゅう"], kunyomi: ["なか"], strokes: 4, jlpt: "N5" },
  { char: "上", meaning: "atas", onyomi: ["じょう", "しょう"], kunyomi: ["うえ", "のぼ"], strokes: 3, jlpt: "N5" },
  { char: "下", meaning: "bawah", onyomi: ["か", "げ"], kunyomi: ["した", "くだ"], strokes: 3, jlpt: "N5" },
  { char: "左", meaning: "kiri", onyomi: ["さ"], kunyomi: ["ひだり"], strokes: 5, jlpt: "N5" },
  { char: "右", meaning: "kanan", onyomi: ["う", "ゆう"], kunyomi: ["みぎ"], strokes: 5, jlpt: "N5" },
  { char: "国", meaning: "negara", onyomi: ["こく"], kunyomi: ["くに"], strokes: 8, jlpt: "N5" },
  { char: "語", meaning: "bahasa", onyomi: ["ご"], kunyomi: ["かた"], strokes: 14, jlpt: "N5" },
  { char: "学", meaning: "belajar", onyomi: ["がく"], kunyomi: ["まな"], strokes: 8, jlpt: "N5" },
  { char: "校", meaning: "sekolah", onyomi: ["こう"], kunyomi: [], strokes: 10, jlpt: "N5" },
];

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
  const [selectedKanji, setSelectedKanji] = useState<typeof n5Kanji[0] | null>(null);

  const filtered = n5Kanji.filter(
    (k) => k.char.includes(search) || k.meaning.toLowerCase().includes(search.toLowerCase())
  );

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
          const c = jlptColors[level];
          return (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                activeLevel === level
                  ? `text-white border-transparent`
                  : `border-[#E7E5E4] text-[#6B7280]`
              }`}
              style={activeLevel === level ? { backgroundColor: c.text, borderColor: c.border } : {}}
            >
              {level}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Cari kanji atau arti..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-white focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Kanji N5", value: "80", color: "#22C55E" },
          { label: "Dipelajari", value: "0", color: "#4F46E5" },
          { label: "Dikuasai", value: "0", color: "#D95F76" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#E7E5E4] p-4 text-center">
            <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-[#6B7280] font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Kanji Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
        {filtered.map((kanji) => {
          const c = jlptColors[kanji.jlpt];
          return (
            <motion.button
              key={kanji.char}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedKanji(kanji)}
              className="flex flex-col items-center justify-center p-4 gap-1.5 bg-white rounded-2xl border border-[#E7E5E4] hover:border-[#8B5CF6] hover:shadow-md transition-all aspect-square"
            >
              <span className="text-3xl font-jp font-bold text-[#1F2937]">{kanji.char}</span>
              <span className="text-[10px] text-[#6B7280] text-center leading-tight">{kanji.meaning}</span>
            </motion.button>
          );
        })}
      </div>

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
                      {selectedKanji.onyomi.map((r) => (
                        <span key={r} className="font-jp text-[#1F2937] font-bold text-sm">{r}</span>
                      ))}
                      {selectedKanji.onyomi.length === 0 && <span className="text-[#6B7280] text-xs">—</span>}
                    </div>
                  </div>
                  <div className="bg-[#FFF9F7] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] font-medium mb-1">訓読み (Kunyomi)</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedKanji.kunyomi.map((r) => (
                        <span key={r} className="font-jp text-[#1F2937] font-bold text-sm">{r}</span>
                      ))}
                      {selectedKanji.kunyomi.length === 0 && <span className="text-[#6B7280] text-xs">—</span>}
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

                <div className="flex gap-2 mt-4">
                  <Link
                    href="/flashcards?type=kanji"
                    className="flex-1 py-2.5 bg-[#8B5CF6] text-white rounded-xl text-sm font-semibold text-center"
                  >
                    Flashcard
                  </Link>
                  <Link
                    href="/quiz?type=kanji"
                    className="flex-1 py-2.5 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-xl text-sm font-semibold text-center"
                  >
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
