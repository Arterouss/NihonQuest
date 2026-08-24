"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2 } from "lucide-react";
import Link from "next/link";

const katakanaData = {
  basic: [
    { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" },
    { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" },
    { char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" },
    { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" },
    { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" }, { char: "ス", romaji: "su" },
    { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" },
    { char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" },
    { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" },
    { char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" },
    { char: "ネ", romaji: "ne" }, { char: "ノ", romaji: "no" },
    { char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" },
    { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
    { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" },
    { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" },
    { char: "ヤ", romaji: "ya" }, { char: "ユ", romaji: "yu" }, { char: "ヨ", romaji: "yo" },
    { char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" },
    { char: "レ", romaji: "re" }, { char: "ロ", romaji: "ro" },
    { char: "ワ", romaji: "wa" }, { char: "ヲ", romaji: "wo" }, { char: "ン", romaji: "n" },
  ],
  dakuten: [
    { char: "ガ", romaji: "ga" }, { char: "ギ", romaji: "gi" }, { char: "グ", romaji: "gu" },
    { char: "ゲ", romaji: "ge" }, { char: "ゴ", romaji: "go" },
    { char: "ザ", romaji: "za" }, { char: "ジ", romaji: "ji" }, { char: "ズ", romaji: "zu" },
    { char: "ゼ", romaji: "ze" }, { char: "ゾ", romaji: "zo" },
    { char: "ダ", romaji: "da" }, { char: "ヂ", romaji: "ji" }, { char: "ヅ", romaji: "zu" },
    { char: "デ", romaji: "de" }, { char: "ド", romaji: "do" },
    { char: "バ", romaji: "ba" }, { char: "ビ", romaji: "bi" }, { char: "ブ", romaji: "bu" },
    { char: "ベ", romaji: "be" }, { char: "ボ", romaji: "bo" },
    { char: "パ", romaji: "pa" }, { char: "ピ", romaji: "pi" }, { char: "プ", romaji: "pu" },
    { char: "ペ", romaji: "pe" }, { char: "ポ", romaji: "po" },
  ],
  foreign: [
    { char: "ファ", romaji: "fa" }, { char: "フィ", romaji: "fi" }, { char: "フェ", romaji: "fe" },
    { char: "フォ", romaji: "fo" }, { char: "ウィ", romaji: "wi" }, { char: "ウェ", romaji: "we" },
    { char: "ウォ", romaji: "wo" }, { char: "ヴァ", romaji: "va" }, { char: "ヴィ", romaji: "vi" },
    { char: "ヴ", romaji: "vu" }, { char: "ヴェ", romaji: "ve" }, { char: "ヴォ", romaji: "vo" },
    { char: "ティ", romaji: "ti" }, { char: "ディ", romaji: "di" }, { char: "トゥ", romaji: "tu" },
    { char: "ドゥ", romaji: "du" }, { char: "チェ", romaji: "che" }, { char: "ジェ", romaji: "je" },
  ],
};

type Category = keyof typeof katakanaData;

export default function KatakanaPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("basic");
  const [selectedChar, setSelectedChar] = useState<{ char: string; romaji: string } | null>(null);

  const categories = [
    { key: "basic" as Category, label: "Dasar", count: katakanaData.basic.length },
    { key: "dakuten" as Category, label: "Dakuten/Handakuten", count: katakanaData.dakuten.length },
    { key: "foreign" as Category, label: "Kata Asing", count: katakanaData.foreign.length },
  ];

  const foreignExamples: Record<string, string> = {
    "ア": "アイスクリーム (ice cream)",
    "コ": "コーヒー (coffee)",
    "テ": "テレビ (television)",
    "パ": "パン (bread/pain)",
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4F46E5] flex items-center justify-center">
            <span className="text-3xl font-jp text-white font-bold">ア</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Katakana</h1>
            <p className="text-[#6B7280] text-sm">カタカナ — Untuk kata serapan & nama asing</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-[#1F2937]">Progres Katakana</span>
            <span className="text-sm font-bold text-[#4F46E5]">0 / 46</span>
          </div>
          <div className="w-full bg-[#EEF2FF] rounded-full h-2.5">
            <div className="h-2.5 rounded-full bg-[#4F46E5]" style={{ width: "0%" }} />
          </div>
          <div className="flex gap-3 mt-4">
            <Link href="/quiz?type=katakana" className="px-4 py-2 text-sm font-semibold bg-[#4F46E5] text-white rounded-xl hover:bg-[#3730A3] transition-colors">
              Mulai Kuis
            </Link>
            <Link href="/flashcards?type=katakana" className="px-4 py-2 text-sm font-semibold border border-[#4F46E5] text-[#4F46E5] rounded-xl hover:bg-[#EEF2FF] transition-colors">
              Flashcard
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Info Banner */}
      <div className="bg-[#EEF2FF] rounded-2xl p-4 border border-[#4F46E5]/20">
        <p className="text-sm text-[#4F46E5] font-medium">
          💡 Katakana digunakan untuk kata-kata serapan dari bahasa asing, seperti{" "}
          <span className="font-jp font-bold">コーヒー</span> (kōhī = coffee),{" "}
          <span className="font-jp font-bold">テレビ</span> (terebi = television).
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === cat.key
                ? "bg-[#4F46E5] text-white shadow-sm"
                : "bg-white border border-[#E7E5E4] text-[#6B7280] hover:border-[#4F46E5] hover:text-[#4F46E5]"
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
        {katakanaData[activeCategory].map((item) => (
          <motion.button
            key={item.char}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedChar(item)}
            className="flex flex-col items-center justify-center p-4 gap-2 aspect-square bg-white rounded-2xl border border-[#E7E5E4] hover:border-[#4F46E5] hover:shadow-md transition-all"
          >
            <span className="text-3xl font-jp font-bold text-[#1F2937]">{item.char}</span>
            <span className="text-xs font-medium text-[#4F46E5]">{item.romaji}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedChar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedChar(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-7xl font-jp font-bold text-[#1F2937]">{selectedChar.char}</span>
                <button onClick={() => setSelectedChar(null)} className="p-2 rounded-xl hover:bg-[#FFF9F7] text-[#6B7280]">
                  <X size={20} />
                </button>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-[#EEF2FF] text-[#4F46E5] rounded-xl font-bold">{selectedChar.romaji}</span>
                <button 
                  onClick={() => {
                    if ("speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                      const utterance = new SpeechSynthesisUtterance(selectedChar.char);
                      utterance.lang = "ja-JP";
                      window.speechSynthesis.speak(utterance);
                    } else {
                      alert("Browser Anda tidak mendukung fitur suara.");
                    }
                  }}
                  className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5]"
                >
                  <Volume2 size={18} />
                </button>
              </div>
              <p className="text-sm text-[#6B7280]">
                {foreignExamples[selectedChar.char] || "Karakter katakana untuk " + selectedChar.romaji}
              </p>
              <div className="mt-6 flex gap-2">
                <Link href="/flashcards?type=katakana" className="flex-1 py-2.5 bg-[#4F46E5] text-white rounded-xl text-sm font-semibold text-center">
                  Flashcard
                </Link>
                <Link href="/quiz?type=katakana" className="flex-1 py-2.5 border-2 border-[#4F46E5] text-[#4F46E5] rounded-xl text-sm font-semibold text-center">
                  Kuis
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
