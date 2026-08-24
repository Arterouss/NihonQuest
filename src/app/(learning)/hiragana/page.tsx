"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronRight, ChevronLeft, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const hiraganaData = {
  basic: [
    { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" },
    { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
    { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" },
    { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" },
    { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" }, { char: "す", romaji: "su" },
    { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" },
    { char: "た", romaji: "ta" }, { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" },
    { char: "て", romaji: "te" }, { char: "と", romaji: "to" },
    { char: "な", romaji: "na" }, { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" },
    { char: "ね", romaji: "ne" }, { char: "の", romaji: "no" },
    { char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" },
    { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
    { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" },
    { char: "め", romaji: "me" }, { char: "も", romaji: "mo" },
    { char: "や", romaji: "ya" }, { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" },
    { char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" },
    { char: "れ", romaji: "re" }, { char: "ろ", romaji: "ro" },
    { char: "わ", romaji: "wa" }, { char: "を", romaji: "wo" }, { char: "ん", romaji: "n" },
  ],
  dakuten: [
    { char: "が", romaji: "ga" }, { char: "ぎ", romaji: "gi" }, { char: "ぐ", romaji: "gu" },
    { char: "げ", romaji: "ge" }, { char: "ご", romaji: "go" },
    { char: "ざ", romaji: "za" }, { char: "じ", romaji: "ji" }, { char: "ず", romaji: "zu" },
    { char: "ぜ", romaji: "ze" }, { char: "ぞ", romaji: "zo" },
    { char: "だ", romaji: "da" }, { char: "ぢ", romaji: "ji" }, { char: "づ", romaji: "zu" },
    { char: "で", romaji: "de" }, { char: "ど", romaji: "do" },
    { char: "ば", romaji: "ba" }, { char: "び", romaji: "bi" }, { char: "ぶ", romaji: "bu" },
    { char: "べ", romaji: "be" }, { char: "ぼ", romaji: "bo" },
    { char: "ぱ", romaji: "pa" }, { char: "ぴ", romaji: "pi" }, { char: "ぷ", romaji: "pu" },
    { char: "ぺ", romaji: "pe" }, { char: "ぽ", romaji: "po" },
  ],
  combinations: [
    { char: "きゃ", romaji: "kya" }, { char: "きゅ", romaji: "kyu" }, { char: "きょ", romaji: "kyo" },
    { char: "しゃ", romaji: "sha" }, { char: "しゅ", romaji: "shu" }, { char: "しょ", romaji: "sho" },
    { char: "ちゃ", romaji: "cha" }, { char: "ちゅ", romaji: "chu" }, { char: "ちょ", romaji: "cho" },
    { char: "にゃ", romaji: "nya" }, { char: "にゅ", romaji: "nyu" }, { char: "にょ", romaji: "nyo" },
    { char: "ひゃ", romaji: "hya" }, { char: "ひゅ", romaji: "hyu" }, { char: "ひょ", romaji: "hyo" },
    { char: "みゃ", romaji: "mya" }, { char: "みゅ", romaji: "myu" }, { char: "みょ", romaji: "myo" },
    { char: "りゃ", romaji: "rya" }, { char: "りゅ", romaji: "ryu" }, { char: "りょ", romaji: "ryo" },
  ],
};

type Category = keyof typeof hiraganaData;

function KanaCard({ char, romaji, onClick }: { char: string; romaji: string; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="kana-card flex flex-col items-center justify-center p-4 gap-2 aspect-square"
    >
      <span className="text-3xl font-jp font-bold text-[#1F2937]">{char}</span>
      <span className="text-xs font-medium text-[#D95F76]">{romaji}</span>
    </motion.button>
  );
}

function CharModal({ char, romaji, onClose }: { char: string; romaji: string; onClose: () => void }) {
  const examples: Record<string, { word: string; reading: string; meaning: string }[]> = {
    "あ": [{ word: "あさ", reading: "asa", meaning: "pagi" }, { word: "あたま", reading: "atama", meaning: "kepala" }],
    "か": [{ word: "かさ", reading: "kasa", meaning: "payung" }, { word: "かぜ", reading: "kaze", meaning: "angin" }],
    "さ": [{ word: "さかな", reading: "sakana", meaning: "ikan" }, { word: "さくら", reading: "sakura", meaning: "bunga sakura" }],
  };
  const ex = examples[char] || [{ word: char + "...", reading: romaji + "...", meaning: "contoh kata" }];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-7xl font-jp font-bold text-[#1F2937]">{char}</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-[#FFF9F7] text-[#6B7280]">
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-2 bg-[#FCE7EC] text-[#D95F76] rounded-xl font-bold">{romaji}</span>
          <button className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-all">
            <Volume2 size={18} />
          </button>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#6B7280] uppercase tracking-wider mb-3">Contoh Kata</h4>
          <div className="space-y-2">
            {ex.map((e) => (
              <div key={e.word} className="flex items-center justify-between p-3 bg-[#FFF9F7] rounded-xl">
                <div>
                  <span className="font-jp font-bold text-[#1F2937]">{e.word}</span>
                  <span className="text-xs text-[#6B7280] ml-2">{e.reading}</span>
                </div>
                <span className="text-sm text-[#6B7280]">{e.meaning}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            href="/flashcards"
            className="flex-1 py-2.5 bg-[#D95F76] text-white rounded-xl text-sm font-semibold text-center hover:bg-[#B83D58] transition-colors"
          >
            Latihan Flashcard
          </Link>
          <Link
            href="/quiz"
            className="flex-1 py-2.5 border-2 border-[#D95F76] text-[#D95F76] rounded-xl text-sm font-semibold text-center hover:bg-[#FCE7EC] transition-colors"
          >
            Mulai Kuis
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HiraganaPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("basic");
  const [selectedChar, setSelectedChar] = useState<{ char: string; romaji: string } | null>(null);

  const categories: { key: Category; label: string; count: number }[] = [
    { key: "basic", label: "Dasar", count: hiraganaData.basic.length },
    { key: "dakuten", label: "Dakuten/Handakuten", count: hiraganaData.dakuten.length },
    { key: "combinations", label: "Kombinasi", count: hiraganaData.combinations.length },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl sakura-gradient flex items-center justify-center">
            <span className="text-3xl font-jp text-white font-bold">あ</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Hiragana</h1>
            <p className="text-[#6B7280] text-sm">ひらがな — Alfabet dasar bahasa Jepang</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-[#1F2937]">Progres Hiragana</span>
            <span className="text-sm font-bold text-[#D95F76]">0 / 46</span>
          </div>
          <div className="w-full bg-[#FCE7EC] rounded-full h-2.5">
            <div className="h-2.5 rounded-full sakura-gradient" style={{ width: "0%" }} />
          </div>
          <div className="flex gap-3 mt-4">
            <Link href="/quiz?type=hiragana" className="px-4 py-2 text-sm font-semibold bg-[#D95F76] text-white rounded-xl hover:bg-[#B83D58] transition-colors">
              Mulai Kuis
            </Link>
            <Link href="/flashcards?type=hiragana" className="px-4 py-2 text-sm font-semibold border border-[#D95F76] text-[#D95F76] rounded-xl hover:bg-[#FCE7EC] transition-colors">
              Latihan Flashcard
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === cat.key
                ? "sakura-gradient text-white shadow-sm"
                : "bg-white border border-[#E7E5E4] text-[#6B7280] hover:border-[#D95F76] hover:text-[#D95F76]"
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Characters Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-2"
      >
        {hiraganaData[activeCategory].map((item) => (
          <KanaCard
            key={item.char}
            char={item.char}
            romaji={item.romaji}
            onClick={() => setSelectedChar(item)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedChar && (
          <CharModal
            char={selectedChar.char}
            romaji={selectedChar.romaji}
            onClose={() => setSelectedChar(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
