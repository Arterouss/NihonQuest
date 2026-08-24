"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Volume2, Filter, ChevronDown } from "lucide-react";

const vocabData = [
  // ── N5 ──────────────────────────────────────────────────────────────
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
  { jp: "寝る", reading: "ねる", romaji: "neru", meaning: "tidur", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "早く寝る。" },
  { jp: "起きる", reading: "おきる", romaji: "okiru", meaning: "bangun tidur", pos: "Kata Kerja", jlpt: "N5", category: "sehari-hari", ex: "七時に起きる。" },
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
  { jp: "今日", reading: "きょう", romaji: "kyou", meaning: "hari ini", pos: "Kata Benda", jlpt: "N5", category: "waktu", ex: "今日は晴れです。" },
  { jp: "明日", reading: "あした", romaji: "ashita", meaning: "besok", pos: "Kata Benda", jlpt: "N5", category: "waktu", ex: "明日来てください。" },
  { jp: "昨日", reading: "きのう", romaji: "kinou", meaning: "kemarin", pos: "Kata Benda", jlpt: "N5", category: "waktu", ex: "昨日は忙しかった。" },
  { jp: "電車", reading: "でんしゃ", romaji: "densha", meaning: "kereta listrik", pos: "Kata Benda", jlpt: "N5", category: "transportasi", ex: "電車で行く。" },
  { jp: "駅", reading: "えき", romaji: "eki", meaning: "stasiun", pos: "Kata Benda", jlpt: "N5", category: "transportasi", ex: "駅まで歩く。" },
  { jp: "お金", reading: "おかね", romaji: "okane", meaning: "uang", pos: "Kata Benda", jlpt: "N5", category: "belanja", ex: "お金がない。" },
  { jp: "仕事", reading: "しごと", romaji: "shigoto", meaning: "pekerjaan", pos: "Kata Benda", jlpt: "N5", category: "pekerjaan", ex: "仕事が好きです。" },
  { jp: "映画", reading: "えいが", romaji: "eiga", meaning: "film bioskop", pos: "Kata Benda", jlpt: "N5", category: "hiburan", ex: "映画を見る。" },

  // ── N4 ──────────────────────────────────────────────────────────────
  { jp: "運動", reading: "うんどう", romaji: "undou", meaning: "olahraga / gerak badan", pos: "Kata Benda", jlpt: "N4", category: "sehari-hari", ex: "毎日運動する。" },
  { jp: "経験", reading: "けいけん", romaji: "keiken", meaning: "pengalaman", pos: "Kata Benda", jlpt: "N4", category: "sehari-hari", ex: "いい経験になった。" },
  { jp: "留学", reading: "りゅうがく", romaji: "ryuugaku", meaning: "studi di luar negeri", pos: "Kata Benda", jlpt: "N4", category: "sekolah", ex: "日本へ留学する。" },
  { jp: "生活", reading: "せいかつ", romaji: "seikatsu", meaning: "kehidupan / penghidupan", pos: "Kata Benda", jlpt: "N4", category: "sehari-hari", ex: "日本での生活。" },
  { jp: "趣味", reading: "しゅみ", romaji: "shumi", meaning: "hobi", pos: "Kata Benda", jlpt: "N4", category: "hiburan", ex: "趣味は何ですか？" },
  { jp: "旅行", reading: "りょこう", romaji: "ryokou", meaning: "perjalanan wisata", pos: "Kata Benda", jlpt: "N4", category: "transportasi", ex: "旅行が好きです。" },
  { jp: "準備", reading: "じゅんび", romaji: "junbi", meaning: "persiapan", pos: "Kata Benda", jlpt: "N4", category: "sehari-hari", ex: "準備ができた。" },
  { jp: "連絡", reading: "れんらく", romaji: "renraku", meaning: "kontak / menghubungi", pos: "Kata Benda", jlpt: "N4", category: "komunikasi", ex: "後で連絡する。" },
  { jp: "説明", reading: "せつめい", romaji: "setsumei", meaning: "penjelasan", pos: "Kata Benda", jlpt: "N4", category: "komunikasi", ex: "説明してください。" },
  { jp: "注意", reading: "ちゅうい", romaji: "chuui", meaning: "perhatian / peringatan", pos: "Kata Benda", jlpt: "N4", category: "sehari-hari", ex: "注意してください。" },
  { jp: "質問", reading: "しつもん", romaji: "shitsumon", meaning: "pertanyaan", pos: "Kata Benda", jlpt: "N4", category: "sekolah", ex: "質問があります。" },
  { jp: "答え", reading: "こたえ", romaji: "kotae", meaning: "jawaban", pos: "Kata Benda", jlpt: "N4", category: "sekolah", ex: "答えを書く。" },
  { jp: "練習", reading: "れんしゅう", romaji: "renshuu", meaning: "latihan / praktek", pos: "Kata Benda", jlpt: "N4", category: "sekolah", ex: "毎日練習する。" },
  { jp: "変わる", reading: "かわる", romaji: "kawaru", meaning: "berubah", pos: "Kata Kerja", jlpt: "N4", category: "sehari-hari", ex: "天気が変わった。" },
  { jp: "集める", reading: "あつめる", romaji: "atsumeru", meaning: "mengumpulkan", pos: "Kata Kerja", jlpt: "N4", category: "sehari-hari", ex: "情報を集める。" },
  { jp: "選ぶ", reading: "えらぶ", romaji: "erabu", meaning: "memilih", pos: "Kata Kerja", jlpt: "N4", category: "sehari-hari", ex: "好きなものを選ぶ。" },
  { jp: "決める", reading: "きめる", romaji: "kimeru", meaning: "memutuskan", pos: "Kata Kerja", jlpt: "N4", category: "sehari-hari", ex: "場所を決める。" },
  { jp: "続ける", reading: "つづける", romaji: "tsuzukeru", meaning: "melanjutkan", pos: "Kata Kerja", jlpt: "N4", category: "sehari-hari", ex: "勉強を続ける。" },
  { jp: "便利", reading: "べんり", romaji: "benri", meaning: "praktis / berguna", pos: "Kata Sifat-な", jlpt: "N4", category: "sifat", ex: "とても便利です。" },
  { jp: "丁寧", reading: "ていねい", romaji: "teinei", meaning: "sopan / teliti", pos: "Kata Sifat-な", jlpt: "N4", category: "sifat", ex: "丁寧に話す。" },
  { jp: "複雑", reading: "ふくざつ", romaji: "fukuzatsu", meaning: "rumit / kompleks", pos: "Kata Sifat-な", jlpt: "N4", category: "sifat", ex: "複雑な問題。" },
  { jp: "大切", reading: "たいせつ", romaji: "taisetsu", meaning: "penting / berharga", pos: "Kata Sifat-な", jlpt: "N4", category: "sifat", ex: "大切なこと。" },
  { jp: "難しい", reading: "むずかしい", romaji: "muzukashii", meaning: "sulit / susah", pos: "Kata Sifat", jlpt: "N4", category: "sifat", ex: "難しい問題。" },
  { jp: "嬉しい", reading: "うれしい", romaji: "ureshii", meaning: "senang / gembira", pos: "Kata Sifat", jlpt: "N4", category: "perasaan", ex: "うれしい気持ち。" },
  { jp: "悲しい", reading: "かなしい", romaji: "kanashii", meaning: "sedih", pos: "Kata Sifat", jlpt: "N4", category: "perasaan", ex: "悲しいニュース。" },
  { jp: "怖い", reading: "こわい", romaji: "kowai", meaning: "takut / menakutkan", pos: "Kata Sifat", jlpt: "N4", category: "perasaan", ex: "怖い夢を見た。" },

  // ── N3 ──────────────────────────────────────────────────────────────
  { jp: "影響", reading: "えいきょう", romaji: "eikyou", meaning: "pengaruh / dampak", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "大きな影響を与えた。" },
  { jp: "状況", reading: "じょうきょう", romaji: "joukyou", meaning: "situasi / kondisi", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "状況を説明する。" },
  { jp: "結果", reading: "けっか", romaji: "kekka", meaning: "hasil", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "いい結果が出た。" },
  { jp: "原因", reading: "げんいん", romaji: "genin", meaning: "penyebab / sebab", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "原因を調べる。" },
  { jp: "解決", reading: "かいけつ", romaji: "kaiketsu", meaning: "penyelesaian / solusi", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "問題を解決する。" },
  { jp: "意見", reading: "いけん", romaji: "iken", meaning: "pendapat / opini", pos: "Kata Benda", jlpt: "N3", category: "komunikasi", ex: "意見を言う。" },
  { jp: "目的", reading: "もくてき", romaji: "mokuteki", meaning: "tujuan / sasaran", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "目的を持つ。" },
  { jp: "機会", reading: "きかい", romaji: "kikai", meaning: "kesempatan / peluang", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "いい機会です。" },
  { jp: "努力", reading: "どりょく", romaji: "doryoku", meaning: "usaha keras / kerja keras", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "努力を続ける。" },
  { jp: "成功", reading: "せいこう", romaji: "seikou", meaning: "sukses / berhasil", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "成功を祈る。" },
  { jp: "失敗", reading: "しっぱい", romaji: "shippai", meaning: "gagal / kegagalan", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "失敗から学ぶ。" },
  { jp: "関係", reading: "かんけい", romaji: "kankei", meaning: "hubungan / keterkaitan", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "関係を築く。" },
  { jp: "比べる", reading: "くらべる", romaji: "kuraberu", meaning: "membandingkan", pos: "Kata Kerja", jlpt: "N3", category: "sehari-hari", ex: "二つを比べる。" },
  { jp: "認める", reading: "みとめる", romaji: "mitomeru", meaning: "mengakui / menyetujui", pos: "Kata Kerja", jlpt: "N3", category: "sehari-hari", ex: "事実を認める。" },
  { jp: "困る", reading: "こまる", romaji: "komaru", meaning: "kesulitan / kebingungan", pos: "Kata Kerja", jlpt: "N3", category: "perasaan", ex: "困った時に助ける。" },
  { jp: "確認", reading: "かくにん", romaji: "kakunin", meaning: "konfirmasi / memastikan", pos: "Kata Benda", jlpt: "N3", category: "sehari-hari", ex: "内容を確認する。" },
  { jp: "可能", reading: "かのう", romaji: "kanou", meaning: "mungkin / bisa", pos: "Kata Sifat-な", jlpt: "N3", category: "sifat", ex: "可能なことを探す。" },
  { jp: "重要", reading: "じゅうよう", romaji: "juuyou", meaning: "penting / krusial", pos: "Kata Sifat-な", jlpt: "N3", category: "sifat", ex: "重要な会議。" },
  { jp: "自由", reading: "じゆう", romaji: "jiyuu", meaning: "bebas / kebebasan", pos: "Kata Sifat-な", jlpt: "N3", category: "sifat", ex: "自由な時間。" },
  { jp: "正直", reading: "しょうじき", romaji: "shoujiki", meaning: "jujur / terus terang", pos: "Kata Sifat-な", jlpt: "N3", category: "sifat", ex: "正直に言う。" },
];

const categories = ["Semua", "sehari-hari", "makanan", "sekolah", "keluarga", "belanja", "sifat", "perasaan", "komunikasi", "waktu", "transportasi", "hiburan", "pekerjaan"];

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
