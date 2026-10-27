"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, BookOpen, Brain, Target, Trophy, Flame,
  Volume2, VolumeX, Check, X, RotateCcw, ChevronRight,
  ChevronLeft, Search, Bookmark, BookmarkCheck, Play,
  FastForward, Shuffle, Award, CheckCircle2, AlertCircle,
  HelpCircle, Layers, ArrowRight, Star, RefreshCw, BarChart3,
  Calendar, Clock, ShieldCheck, Zap, Sliders
} from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { useAchievementStore } from "@/store/useAchievementStore";

// ==========================================
// 1. COMPREHENSIVE DATASETS (Validated Japanese)
// ==========================================

export interface DojoVocab {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: "N5" | "N4" | "N3";
  partOfSpeech: string;
  exampleJp: string;
  exampleId: string;
  audio?: string;
}

export interface DojoKanji {
  id: string;
  character: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokeCount: number;
  radical: string;
  level: "N5" | "N4" | "N3";
  compounds: { word: string; reading: string; meaning: string }[];
  example: string;
}

export interface DojoGrammar {
  id: string;
  pattern: string;
  meaning: string;
  formation: string;
  explanation: string;
  level: "N5" | "N4" | "N3";
  examples: { jp: string; id: string }[];
  commonMistakes?: string;
}

export interface DojoSentence {
  id: string;
  sentence: string;
  furigana: string;
  meaning: string;
  level: "N5" | "N4";
  tokens: string[]; // for word ordering exercises
  comprehensionQuestion: {
    question: string;
    options: string[];
    correct: string;
  };
}

// Spaced Repetition Item
export interface SRSItem {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  level: string;
  interval: number; // in days
  easeFactor: number; // SM-2 ease factor (default 2.5)
  repetitions: number;
  nextReviewDate: string; // ISO string
  status: "new" | "learning" | "review" | "mastered";
}

// ------------------------------------------
// Master Vocabulary Dataset (N5 - N3)
// ------------------------------------------
const masterVocab: DojoVocab[] = [
  // N5 Essentials
  { id: "v1", word: "食べる", reading: "たべる", romaji: "taberu", meaning: "makan", level: "N5", partOfSpeech: "Kata Kerja (Ichidan)", exampleJp: "毎朝パンを食べます。", exampleId: "Saya makan roti setiap pagi." },
  { id: "v2", word: "飲む", reading: "のむ", romaji: "nomu", meaning: "minum", level: "N5", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "冷たい水を飲みました。", exampleId: "Saya minum air dingin." },
  { id: "v3", word: "行く", reading: "いく", romaji: "iku", meaning: "pergi", level: "N5", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "明日東京へ行きます。", exampleId: "Besok saya pergi ke Tokyo." },
  { id: "v4", word: "来る", reading: "くる", romaji: "kuru", meaning: "datang", level: "N5", partOfSpeech: "Kata Kerja (Fukisoku)", exampleJp: "友達がうちに遊びに来た。", exampleId: "Teman saya datang bermain ke rumah." },
  { id: "v5", word: "見る", reading: "みる", romaji: "miru", meaning: "melihat / menonton", level: "N5", partOfSpeech: "Kata Kerja (Ichidan)", exampleJp: "アニメをよく見ます。", exampleId: "Saya sering menonton anime." },
  { id: "v6", word: "聞く", reading: "きく", romaji: "kiku", meaning: "mendengar / bertanya", level: "N5", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "日本の音楽を聞きます。", exampleId: "Saya mendengarkan musik Jepang." },
  { id: "v7", word: "話す", reading: "はなす", romaji: "hanasu", meaning: "berbicara", level: "N5", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "日本語で話しましょう。", exampleId: "Mari berbicara dalam bahasa Jepang." },
  { id: "v8", word: "読む", reading: "よむ", romaji: "yomu", meaning: "membaca", level: "N5", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "図書館で本を読みます。", exampleId: "Saya membaca buku di perpustakaan." },
  { id: "v9", word: "書く", reading: "かく", romaji: "kaku", meaning: "menulis", level: "N5", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "漢字をきれいに書きます。", exampleId: "Saya menulis kanji dengan rapi." },
  { id: "v10", word: "大きい", reading: "おおきい", romaji: "ookii", meaning: "besar", level: "N5", partOfSpeech: "Kata Sifat -i", exampleJp: "富士山はとても大きいです。", exampleId: "Gunung Fuji sangat besar." },
  { id: "v11", word: "小さい", reading: "ちいさい", romaji: "chiisai", meaning: "kecil", level: "N5", partOfSpeech: "Kata Sifat -i", exampleJp: "この鞄は小さくて軽いです。", exampleId: "Tas ini kecil dan ringan." },
  { id: "v12", word: "新しい", reading: "あたらしい", romaji: "atarashii", meaning: "baru", level: "N5", partOfSpeech: "Kata Sifat -i", exampleJp: "新しい靴を買いました。", exampleId: "Saya membeli sepatu baru." },
  { id: "v13", word: "学校", reading: "がっこう", romaji: "gakkou", meaning: "sekolah", level: "N5", partOfSpeech: "Kata Benda", exampleJp: "学校まで歩いて行きます。", exampleId: "Saya berjalan kaki ke sekolah." },
  { id: "v14", word: "先生", reading: "せんせい", romaji: "sensei", meaning: "guru / dokter", level: "N5", partOfSpeech: "Kata Benda", exampleJp: "先生に質問をしました。", exampleId: "Saya bertanya kepada guru." },
  { id: "v15", word: "時間", reading: "じかん", romaji: "jikan", meaning: "waktu / jam", level: "N5", partOfSpeech: "Kata Benda", exampleJp: "今は時間がありません。", exampleId: "Sekarang saya tidak punya waktu." },
  // N4 Vocabulary
  { id: "v16", word: "経験", reading: "けいけん", romaji: "keiken", meaning: "pengalaman", level: "N4", partOfSpeech: "Kata Benda / Suru", exampleJp: "日本での留学は良い経験です。", exampleId: "Kuliah di Jepang adalah pengalaman berharga." },
  { id: "v17", word: "生活", reading: "せいかつ", romaji: "seikatsu", meaning: "kehidupan sehari-hari", level: "N4", partOfSpeech: "Kata Benda / Suru", exampleJp: "東京の生活に慣れました。", exampleId: "Saya sudah terbiasa dengan kehidupan di Tokyo." },
  { id: "v18", word: "準備", reading: "じゅんび", romaji: "junbi", meaning: "persiapan", level: "N4", partOfSpeech: "Kata Benda / Suru", exampleJp: "旅行の準備をします。", exampleId: "Saya mempersiapkan untuk perjalanan." },
  { id: "v19", word: "集める", reading: "あつめる", romaji: "atsumeru", meaning: "mengumpulkan", level: "N4", partOfSpeech: "Kata Kerja (Ichidan)", exampleJp: "好きなアニメグッズを集める。", exampleId: "Mengumpulkan merchandise anime favorit." },
  { id: "v20", word: "残る", reading: "のこる", romaji: "nokoru", meaning: "tersisa / tertinggal", level: "N4", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "まだ時間が少し残っています。", exampleId: "Masih tersisa sedikit waktu." },
  // N3 Vocabulary
  { id: "v21", word: "影響", reading: "えいきょう", romaji: "eikyou", meaning: "pengaruh / dampak", level: "N3", partOfSpeech: "Kata Benda / Suru", exampleJp: "天候の影響で電車が遅れた。", exampleId: "Kereta terlambat karena pengaruh cuaca buruk." },
  { id: "v22", word: "判断", reading: "はんだん", romaji: "handan", meaning: "penilaian / pertimbangan", level: "N3", partOfSpeech: "Kata Benda / Suru", exampleJp: "冷静に状況を判断する。", exampleId: "Menilai situasi dengan kepala dingin." },
  { id: "v23", word: "環境", reading: "かんきょう", romaji: "kankyou", meaning: "lingkungan", level: "N3", partOfSpeech: "Kata Benda", exampleJp: "自然環境を守ることが大切だ。", exampleId: "Penting untuk menjaga lingkungan alam." },
];

// ------------------------------------------
// Master Kanji Dataset
// ------------------------------------------
const masterKanji: DojoKanji[] = [
  {
    id: "k1", character: "日", meaning: "hari, matahari", onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "-び", "-か"],
    strokeCount: 4, radical: "日 (matahari)", level: "N5",
    compounds: [
      { word: "日本", reading: "にほん", meaning: "Jepang" },
      { word: "今日", reading: "きょう", meaning: "Hari ini" },
      { word: "毎日", reading: "まいにち", meaning: "Setiap hari" }
    ],
    example: "日曜日には友達と映画を見ます。(Pada hari Minggu saya nonton film bersama teman.)"
  },
  {
    id: "k2", character: "本", meaning: "buku, asal mula", onyomi: ["ホン"], kunyomi: ["もと"],
    strokeCount: 5, radical: "木 (pohon)", level: "N5",
    compounds: [
      { word: "本屋", reading: "ほんや", meaning: "Toko buku" },
      { word: "本当", reading: "ほんとう", meaning: "Sungguh / Benar" }
    ],
    example: "日本の歴史についての本を読んでいます。(Saya sedang membaca buku tentang sejarah Jepang.)"
  },
  {
    id: "k3", character: "学", meaning: "belajar, sekolah", onyomi: ["ガク"], kunyomi: ["まな・ぶ"],
    strokeCount: 8, radical: "子 (anak)", level: "N5",
    compounds: [
      { word: "学生", reading: "がくせい", meaning: "Pelajar / Mahasiswa" },
      { word: "学校", reading: "がっこう", meaning: "Sekolah" },
      { word: "大学", reading: "だいがく", meaning: "Universitas" }
    ],
    example: "日本語を一生懸命学びたいです。(Saya ingin belajar bahasa Jepang dengan sungguh-sungguh.)"
  },
  {
    id: "k4", character: "生", meaning: "hidup, lahir, mentah", onyomi: ["セイ", "ショウ"], kunyomi: ["い・きる", "う・まれる", "なま"],
    strokeCount: 5, radical: "生 (hidup)", level: "N5",
    compounds: [
      { word: "先生", reading: "せんせい", meaning: "Guru" },
      { word: "生活", reading: "せいかつ", meaning: "Kehidupan" }
    ],
    example: "先生、質問があります。(Sensei, saya punya pertanyaan.)"
  },
  {
    id: "k5", character: "道", meaning: "jalan, ajaran (way)", onyomi: ["ドウ", "トウ"], kunyomi: ["みち"],
    strokeCount: 12, radical: "辶 (berjalan)", level: "N4",
    compounds: [
      { word: "道場", reading: "どうじょう", meaning: "Tempat latihan / Dojo" },
      { word: "柔道", reading: "じゅうどう", meaning: "Judo" },
      { word: "書道", reading: "しょどう", meaning: "Kaligrafi Jepang" }
    ],
    example: "この道をまっすぐ行くと駅があります。(Jalan lurus terus di jalan ini, stasiun ada di sana.)"
  },
];

// ------------------------------------------
// Master Grammar Dataset
// ------------------------------------------
const masterGrammar: DojoGrammar[] = [
  {
    id: "g1",
    pattern: "〜は〜です (~ wa ~ desu)",
    meaning: "A adalah B (Kalimat Nominal Dasar)",
    formation: "[Kata Benda A] + は + [Kata Benda B] + です",
    explanation: "Partikel 'は' (dibaca 'wa') menandai topik pembicaraan. 'です' (desu) adalah kopula sopan bentuk positif.",
    level: "N5",
    examples: [
      { jp: "私は学生です。", id: "Saya adalah seorang pelajar." },
      { jp: "彼は日本人です。", id: "Dia adalah orang Jepang." }
    ],
    commonMistakes: "Jangan membaca 'は' sebagai 'ha' ketika berfungsi sebagai partikel topik; lafalkan sebagai 'wa'."
  },
  {
    id: "g2",
    pattern: "〜を〜ます (~ o ~ masu)",
    meaning: "Melakukan aksi terhadap objek",
    formation: "[Kata Benda] + を + [Kata Kerja bentuk-ます]",
    explanation: "Partikel 'を' (dibaca 'o') menandai objek langsung yang menerima tindakan kata kerja.",
    level: "N5",
    examples: [
      { jp: "りんごを食べます。", id: "Saya makan apel." },
      { jp: "日本語を勉強します。", id: "Saya belajar bahasa Jepang." }
    ],
    commonMistakes: "Jangan gunakan 'を' dengan kata kerja intransitif seperti 行く (pergi) atau 来る (datang)."
  },
  {
    id: "g3",
    pattern: "〜てもいいです (~ te mo ii desu)",
    meaning: "Boleh / Diizinkan melakukan...",
    formation: "[Kata Kerja bentuk-て] + もいいです",
    explanation: "Digunakan untuk menyatakan izin atau meminta persetujuan apakah boleh melakukan sesuatu.",
    level: "N4",
    examples: [
      { jp: "写真を撮ってもいいですか？", id: "Bolehkah saya mengambil foto?" },
      { jp: "ここで座ってもいいです。", id: "Boleh duduk di sini." }
    ],
    commonMistakes: "Pastikan kata kerja diubah ke bentuk て (Te-form) terlebih dahulu dengan benar."
  },
  {
    id: "g4",
    pattern: "〜なければなりません (~ nakereba narimasen)",
    meaning: "Harus / Wajib melakukan...",
    formation: "[Kata Kerja bentuk-ない tanpa い] + ければなりません",
    explanation: "Menyatakan kewajiban mutlak atau keharusan dalam situasi formal/sopan.",
    level: "N4",
    examples: [
      { jp: "薬を飲まなければなりません。", id: "Saya harus minum obat." },
      { jp: "明日早く起きなければなりません。", id: "Besok saya harus bangun pagi." }
    ]
  }
];

// ------------------------------------------
// Master Reading & Sentences
// ------------------------------------------
const masterSentences: DojoSentence[] = [
  {
    id: "s1",
    sentence: "私は毎日日本語を勉強します。",
    furigana: "わたし は まいにち にほんご を べんきょう します。",
    meaning: "Saya belajar bahasa Jepang setiap hari.",
    level: "N5",
    tokens: ["私は", "毎日", "日本語を", "勉強します"],
    comprehensionQuestion: {
      question: "Kapan subjek belajar bahasa Jepang?",
      options: ["Setiap hari (毎日)", "Setiap minggu (毎週)", "Kemarin (昨日)", "Besok (明日)"],
      correct: "Setiap hari (毎日)"
    }
  },
  {
    id: "s2",
    sentence: "休みの日は家で映画を見たり、本を読んだりします。",
    furigana: "やすみ の ひ は いえ で えいが を みたり、ほん を よんだり します。",
    meaning: "Pada hari libur, di rumah saya menonton film dan membaca buku.",
    level: "N4",
    tokens: ["休みの日は", "家で", "映画を見たり、", "本を読んだりします"],
    comprehensionQuestion: {
      question: "Apa saja aktivitas yang dilakukan pada hari libur?",
      options: ["Nonton film dan baca buku", "Bekerja dan belanja", "Olahraga di taman", "Tidur seharian"],
      correct: "Nonton film dan baca buku"
    }
  }
];

// Confused Kana Pairs for Kana Training
const confusedKanaPairs = [
  { p1: "さ", p2: "ち", romaji1: "sa", romaji2: "chi", hint: "Perhatikan lengkungan 'さ' menghadap ke kanan bawah, sedangkan 'ち' menghadap ke kiri melengkung." },
  { p1: "シ", p2: "ツ", romaji1: "shi", romaji2: "tsu", hint: "Katakana 'シ' (shi) goresannya dari bawah ke atas, 'ツ' (tsu) dari atas ke bawah." },
  { p1: "ソ", p2: "ン", romaji1: "so", romaji2: "n", hint: "Katakana 'ソ' (so) goresan miring lebih vertikal, 'ン' (n) lebih horizontal." },
  { p1: "れ", p2: "わ", romaji1: "re", romaji2: "wa", hint: "'れ' ujung kanannya meliuk keluar, 'わ' melengkung bulat ke dalam." }
];

// Helper: Web Speech Audio
function speakJa(text: string, rate: number = 0.9) {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = rate;
    window.speechSynthesis.speak(u);
  }
}

// ------------------------------------------
// SM-2 Spaced Repetition Algorithm
// ------------------------------------------
function calculateSM2(
  rating: 0 | 3 | 4 | 5,
  prevRepetitions: number,
  prevEase: number,
  prevInterval: number
) {
  let repetitions = prevRepetitions;
  let easeFactor = prevEase;
  let interval = prevInterval;

  if (rating >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  // SM-2 ease factor formula
  easeFactor = easeFactor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return {
    repetitions,
    easeFactor,
    interval,
    nextReviewDate: nextDate.toISOString(),
    status: (repetitions >= 5 ? "mastered" : repetitions > 0 ? "review" : "learning") as SRSItem["status"],
  };
}

// ==========================================
// MAIN DOJO COMPONENT
// ==========================================
export default function DojoPage() {
  // Navigation Tabs inside Dojo
  type DojoTab =
    | "dashboard"
    | "paths"
    | "kana"
    | "vocab"
    | "kanji"
    | "grammar"
    | "reading"
    | "listening"
    | "srs"
    | "dictionary"
    | "jlpt";

  const [activeTab, setActiveTab] = useState<DojoTab>("dashboard");
  const [levelFilter, setLevelFilter] = useState<"all" | "N5" | "N4" | "N3">("all");
  const [audioSpeed, setAudioSpeed] = useState<number>(0.9);

  // Gamification stores
  const { addXP, streak } = useProgressStore();
  const { unlockAchievement } = useAchievementStore();

  // Local Storage State for SRS Items and Bookmarks
  const [srsItems, setSrsItems] = useState<SRSItem[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Initial Load & SRS Setup
  useEffect(() => {
    const savedSrs = localStorage.getItem("dojo_srs_items");
    if (savedSrs) {
      try {
        setSrsItems(JSON.parse(savedSrs));
      } catch {
        // fallback
      }
    } else {
      // Seed initial SRS queue with 8 items
      const initial = masterVocab.slice(0, 8).map((w, idx) => ({
        id: w.id,
        word: w.word,
        reading: w.reading,
        meaning: w.meaning,
        level: w.level,
        interval: idx % 2 === 0 ? 0 : 1, // some due today
        easeFactor: 2.5,
        repetitions: 0,
        nextReviewDate: new Date().toISOString(),
        status: "new" as const
      }));
      setSrsItems(initial);
      localStorage.setItem("dojo_srs_items", JSON.stringify(initial));
    }

    const savedBm = localStorage.getItem("dojo_bookmarks");
    if (savedBm) {
      try { setBookmarks(JSON.parse(savedBm)); } catch {}
    }
  }, []);

  const saveSRS = useCallback((items: SRSItem[]) => {
    setSrsItems(items);
    localStorage.setItem("dojo_srs_items", JSON.stringify(items));
  }, []);

  const toggleBookmark = (id: string) => {
    const next = bookmarks.includes(id) ? bookmarks.filter(b => b !== id) : [...bookmarks, id];
    setBookmarks(next);
    localStorage.setItem("dojo_bookmarks", JSON.stringify(next));
  };

  // Due SRS Items
  const dueItems = useMemo(() => {
    const now = new Date();
    return srsItems.filter(item => new Date(item.nextReviewDate) <= now);
  }, [srsItems]);

  // Tab 1: Dashboard Stats
  const completedCount = useMemo(() => srsItems.filter(i => i.status === "mastered").length, [srsItems]);

  // ------------------------------------------
  // VOCAB DRILL STATE
  // ------------------------------------------
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabMode, setVocabMode] = useState<"learn" | "quiz_jp_id" | "quiz_audio">("learn");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<boolean | null>(null);

  const filteredVocab = useMemo(() => {
    if (levelFilter === "all") return masterVocab;
    return masterVocab.filter(v => v.level === levelFilter);
  }, [levelFilter]);

  const currentVocab = filteredVocab[vocabIndex % filteredVocab.length];

  const vocabOptions = useMemo(() => {
    if (!currentVocab) return [];
    const pool = masterVocab.filter(v => v.id !== currentVocab.id).map(v => v.meaning);
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...shuffledPool, currentVocab.meaning].sort(() => 0.5 - Math.random());
  }, [currentVocab]);

  // Handle Vocab Answer
  const handleVocabAnswer = (chosen: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(chosen);
    const isCorrect = chosen === currentVocab.meaning;
    setQuizFeedback(isCorrect);

    if (isCorrect) {
      addXP(10, "Dojo");
      unlockAchievement("vocab-100");
    }
  };

  const nextVocab = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setQuizFeedback(null);
    setVocabIndex(prev => (prev + 1) % filteredVocab.length);
  };

  // ------------------------------------------
  // SRS SESSION STATE
  // ------------------------------------------
  const [srsIndex, setSrsIndex] = useState(0);
  const [srsShowAnswer, setSrsShowAnswer] = useState(false);
  const currentSrs = dueItems[srsIndex];

  const handleSRSRate = (rating: 0 | 3 | 4 | 5) => {
    if (!currentSrs) return;
    const res = calculateSM2(rating, currentSrs.repetitions, currentSrs.easeFactor, currentSrs.interval);
    const updated = srsItems.map(item => {
      if (item.id === currentSrs.id) {
        return {
          ...item,
          ...res,
        };
      }
      return item;
    });
    saveSRS(updated);

    // Reward XP
    if (rating >= 3) {
      addXP(15, "Dojo");
      unlockAchievement("flashcard-100");
    }

    setSrsShowAnswer(false);
    if (srsIndex >= dueItems.length - 1) {
      setSrsIndex(0);
    }
  };

  // ------------------------------------------
  // READING & SENTENCE ORDERING STATE
  // ------------------------------------------
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const currentSentence = masterSentences[sentenceIndex % masterSentences.length];
  const [userTokens, setUserTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);
  const [sentenceResult, setSentenceResult] = useState<boolean | null>(null);

  useEffect(() => {
    if (currentSentence) {
      setAvailableTokens([...currentSentence.tokens].sort(() => 0.5 - Math.random()));
      setUserTokens([]);
      setSentenceResult(null);
    }
  }, [currentSentence]);

  const addToken = (tok: string) => {
    setUserTokens(prev => [...prev, tok]);
    setAvailableTokens(prev => {
      const idx = prev.indexOf(tok);
      if (idx > -1) {
        const copy = [...prev];
        copy.splice(idx, 1);
        return copy;
      }
      return prev;
    });
  };

  const removeToken = (tok: string) => {
    setAvailableTokens(prev => [...prev, tok]);
    setUserTokens(prev => {
      const idx = prev.indexOf(tok);
      if (idx > -1) {
        const copy = [...prev];
        copy.splice(idx, 1);
        return copy;
      }
      return prev;
    });
  };

  const checkSentence = () => {
    const assembled = userTokens.join("");
    const target = currentSentence.tokens.join("");
    const isOk = assembled === target;
    setSentenceResult(isOk);
    if (isOk) {
      addXP(20, "Dojo");
    }
  };

  // ------------------------------------------
  // LISTENING ARENA STATE
  // ------------------------------------------
  const [showTranscript, setShowTranscript] = useState(false);

  // ------------------------------------------
  // DICTIONARY SEARCH
  // ------------------------------------------
  const dictionaryResults = useMemo(() => {
    if (!searchQuery.trim()) return masterVocab.slice(0, 10);
    const q = searchQuery.toLowerCase().trim();
    return masterVocab.filter(
      v =>
        v.word.includes(q) ||
        v.reading.includes(q) ||
        v.romaji.toLowerCase().includes(q) ||
        v.meaning.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#FFF9F7] text-[#1F2937] p-4 lg:p-8">
      {/* ==========================================
          HEADER: DOJO (道場) BRANDING & QUICK STATS
          ========================================== */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#312E81] rounded-3xl p-6 lg:p-8 text-white shadow-xl relative overflow-hidden border border-slate-700/50">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D95F76]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-20 text-[180px] font-jp font-black text-white/5 select-none pointer-events-none leading-none">
            道場
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D95F76] text-white flex items-center gap-1 shadow-sm">
                  <Sparkles size={13} /> Renshuu-Inspired Training Dojo
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                  修練
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight font-jp flex items-center gap-3">
                <span>修練道場</span>
                <span className="text-2xl font-light text-slate-300 font-sans">
                  — Kotoba Dojo
                </span>
              </h1>
              <p className="text-slate-300 text-sm mt-1 max-w-xl">
                Pusat latihan bahasa Jepang komprehensif: Kosakata, Kanji, Tata Bahasa, SRS Spaced Repetition, Latihan Mendengar, dan Uji JLPT.
              </p>
            </div>

            {/* Quick Status Bar */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="text-center px-3 border-r border-white/10">
                <div className="flex items-center justify-center gap-1 text-orange-400 font-bold text-lg">
                  <Flame size={18} /> {streak || 0}
                </div>
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Streak</div>
              </div>
              <div className="text-center px-3 border-r border-white/10">
                <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg">
                  <Zap size={18} /> {dueItems.length}
                </div>
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">SRS Due</div>
              </div>
              <div className="text-center px-3">
                <div className="flex items-center justify-center gap-1 text-yellow-400 font-bold text-lg">
                  <Trophy size={18} /> {completedCount}
                </div>
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Mastered</div>
              </div>
            </div>
          </div>

          {/* Audio Speed Controller */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Sliders size={14} className="text-[#D95F76]" />
              <span>Kecepatan Audio:</span>
              {[0.75, 0.9, 1.0, 1.25].map(spd => (
                <button
                  key={spd}
                  onClick={() => setAudioSpeed(spd)}
                  className={`px-2 py-0.5 rounded-md font-mono transition-all ${
                    audioSpeed === spd
                      ? "bg-[#D95F76] text-white font-bold"
                      : "bg-white/5 hover:bg-white/15 text-slate-300"
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>

            {/* JLPT Level Filter */}
            <div className="flex items-center gap-1.5">
              <span>Filter JLPT:</span>
              {(["all", "N5", "N4", "N3"] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-2.5 py-0.5 rounded-lg font-semibold transition-all ${
                    levelFilter === lvl
                      ? "bg-white text-slate-900 shadow"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                >
                  {lvl.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
            TAB NAVIGATION BAR
            ========================================== */}
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar mt-4">
          {[
            { id: "dashboard", label: "Dashboard", icon: <BarChart3 size={16} /> },
            { id: "paths", label: "Jalur Belajar", icon: <Layers size={16} /> },
            { id: "kana", label: "Kana Hub", icon: <span className="font-jp font-bold text-xs">あ</span> },
            { id: "vocab", label: "Kosakata (Kotoba)", icon: <BookOpen size={16} /> },
            { id: "kanji", label: "Kanji Dojo", icon: <span className="font-jp font-bold text-xs">漢</span> },
            { id: "grammar", label: "Tata Bahasa", icon: <Brain size={16} /> },
            { id: "reading", label: "Kalimat & Membaca", icon: <BookOpen size={16} /> },
            { id: "listening", label: "Listening", icon: <Volume2 size={16} /> },
            { id: "srs", label: `SRS Review (${dueItems.length})`, icon: <RotateCcw size={16} /> },
            { id: "dictionary", label: "Kamus Kilat", icon: <Search size={16} /> },
            { id: "jlpt", label: "Simulasi JLPT", icon: <Target size={16} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as DojoTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                activeTab === tab.id
                  ? "bg-[#D95F76] text-white shadow-md scale-102"
                  : "bg-white hover:bg-[#FCE7EC]/50 text-slate-700 border border-slate-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==========================================
          TAB CONTENT AREAS
          ========================================== */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {/* TAB: DASHBOARD */}
          {activeTab === "dashboard" && (
            <motion.div
              key="tab-dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Target & Shortcut Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D95F76] bg-[#FCE7EC] px-2.5 py-1 rounded-full">
                        Target Harian
                      </span>
                      <Calendar size={18} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">15 Menit Latihan</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Konsistensi harian 10–15 menit melatih memori jangka panjang (SRS) lebih efektif daripada 2 jam sekali seminggu.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Kemajuan Hari Ini:</span>
                    <span className="font-bold text-emerald-600">8 / 15 Kosakata</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                        Antrean SRS SM-2
                      </span>
                      <RotateCcw size={18} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{dueItems.length} Kartu Siap Review</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Kata-kata yang mendekati ambang lupa hari ini. Review sekarang untuk mengunci memori permanen.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("srs")}
                    className="mt-5 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    Mulai Review SRS <ArrowRight size={14} />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                        Lanjut Belajar
                      </span>
                      <Play size={18} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Kosakata N5 Inti</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Lanjutkan latihan kata kerja dan kata sifat yang paling sering muncul di percakapan dan ujian.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("vocab")}
                    className="mt-5 w-full py-2.5 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    Buka Kosakata <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Learning Progress Grid */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart3 size={20} className="text-[#D95F76]" />
                  Ringkasan Penguasaan Materi Dojo
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Kosakata N5", count: "15 / 15", pct: 100, color: "bg-emerald-500" },
                    { label: "Kosakata N4", count: "5 / 10", pct: 50, color: "bg-blue-500" },
                    { label: "Kanji Dasar", count: "5 / 20", pct: 25, color: "bg-purple-500" },
                    { label: "Tata Bahasa N5", count: "4 / 8", pct: 50, color: "bg-orange-500" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
                        <span>{stat.label}</span>
                        <span className="text-slate-800 font-bold">{stat.count}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className={`h-full ${stat.color} rounded-full transition-all duration-500`}
                          style={{ width: `${stat.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: JALUR BELAJAR (LEARNING PATHS) */}
          {activeTab === "paths" && (
            <motion.div
              key="tab-paths"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Kurikulum Terstruktur (Jalur Belajar)</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Ikuti alur belajar dari huruf dasar Hiragana hingga level lanjutan JLPT N1 dengan target terukur.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { level: "Hiragana & Katakana", desc: "46 huruf dasar + variasi dakuten & yoon.", status: "Selesai", unlocked: true, tab: "kana" },
                    { level: "JLPT N5 (Pemula)", desc: "100 Kanji, 800 Kosakata dasar, tata bahasa dasar.", status: "Sedang Berjalan", unlocked: true, tab: "vocab" },
                    { level: "JLPT N4 (Dasar Atas)", desc: "300 Kanji, 1.500 Kosakata, percakapan sehari-hari.", status: "Tersedia", unlocked: true, tab: "vocab" },
                    { level: "JLPT N3 (Menengah)", desc: "650 Kanji, 3.750 Kosakata, artikel & percakapan alami.", status: "Tersedia", unlocked: true, tab: "vocab" },
                    { level: "JLPT N2 (Menengah Atas)", desc: "1.000 Kanji, 6.000 Kosakata, artikel berita & formal.", status: "Segera Hadir", unlocked: false, tab: "jlpt" },
                    { level: "JLPT N1 (Mahir)", desc: "2.000+ Kanji, 10.000 Kosakata, literatur & bisnis.", status: "Segera Hadir", unlocked: false, tab: "jlpt" },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border transition-all ${
                        p.unlocked
                          ? "bg-white border-slate-200 hover:border-[#D95F76] shadow-sm hover:shadow"
                          : "bg-slate-50 border-slate-200/50 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-800">{p.level}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            p.status === "Selesai"
                              ? "bg-emerald-100 text-emerald-700"
                              : p.status === "Sedang Berjalan"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-4">{p.desc}</p>
                      {p.unlocked && (
                        <button
                          onClick={() => setActiveTab(p.tab as DojoTab)}
                          className="text-xs font-bold text-[#D95F76] hover:underline flex items-center gap-1"
                        >
                          Buka Materi <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: KANA HUB (HIRAGANA & KATAKANA REVIEW) */}
          {activeTab === "kana" && (
            <motion.div
              key="tab-kana"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Review Huruf yang Sering Tertukar</h3>
                    <p className="text-xs text-slate-500">
                      Bandingkan karakter yang mirip bentuknya agar tidak salah baca saat membaca cepat.
                    </p>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold">
                    Karakter Sensitif
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {confusedKanaPairs.map((pair, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                      <div className="flex items-center justify-around py-3 bg-white rounded-xl shadow-xs mb-3">
                        <div className="text-center">
                          <button
                            onClick={() => speakJa(pair.p1, audioSpeed)}
                            className="text-4xl font-jp font-bold text-slate-800 hover:text-[#D95F76] transition-colors"
                          >
                            {pair.p1}
                          </button>
                          <div className="text-xs font-mono text-slate-400 mt-1">{pair.romaji1}</div>
                        </div>
                        <span className="text-sm font-bold text-slate-400">VS</span>
                        <div className="text-center">
                          <button
                            onClick={() => speakJa(pair.p2, audioSpeed)}
                            className="text-4xl font-jp font-bold text-slate-800 hover:text-[#D95F76] transition-colors"
                          >
                            {pair.p2}
                          </button>
                          <div className="text-xs font-mono text-slate-400 mt-1">{pair.romaji2}</div>
                        </div>
                      </div>
                      <p className="text-xs text-amber-900/80 leading-relaxed">
                        💡 <span className="font-semibold">Tips:</span> {pair.hint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: VOCABULARY DRILL (KOTOBA DOJO) */}
          {activeTab === "vocab" && (
            <motion.div
              key="tab-vocab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">Mode Latihan:</span>
                  {[
                    { id: "learn", label: "Kartu Pelajari" },
                    { id: "quiz_jp_id", label: "Kuis Pilihan Ganda" },
                    { id: "quiz_audio", label: "Tebak Suara" },
                  ].map(m => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setVocabMode(m.id as any);
                        setSelectedOption(null);
                        setQuizFeedback(null);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        vocabMode === m.id
                          ? "bg-[#D95F76] text-white shadow-xs"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-slate-500 font-mono">
                  {vocabIndex + 1} / {filteredVocab.length}
                </div>
              </div>

              {/* Vocab Drill Card */}
              {currentVocab && (
                <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm text-center max-w-2xl mx-auto relative overflow-hidden">
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => toggleBookmark(currentVocab.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all"
                    >
                      {bookmarks.includes(currentVocab.id) ? (
                        <BookmarkCheck size={20} className="text-amber-500" />
                      ) : (
                        <Bookmark size={20} />
                      )}
                    </button>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 font-bold text-slate-600">
                      {currentVocab.level}
                    </span>
                  </div>

                  {/* Character & Audio */}
                  <div className="mt-4 mb-2">
                    {vocabMode === "quiz_audio" ? (
                      <div className="py-8">
                        <button
                          onClick={() => speakJa(currentVocab.word, audioSpeed)}
                          className="w-20 h-20 rounded-full bg-[#D95F76] text-white mx-auto flex items-center justify-center hover:scale-105 transition-transform shadow-lg cursor-pointer"
                        >
                          <Volume2 size={36} />
                        </button>
                        <p className="text-xs text-slate-400 mt-3">Klik tombol untuk mendengarkan lafal</p>
                      </div>
                    ) : (
                      <>
                        <div className="text-xs font-mono text-[#D95F76] font-semibold tracking-wider">
                          {currentVocab.reading} ({currentVocab.romaji})
                        </div>
                        <h2 className="text-5xl font-extrabold font-jp text-slate-900 mt-2 mb-3">
                          {currentVocab.word}
                        </h2>
                        <button
                          onClick={() => speakJa(currentVocab.word, audioSpeed)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#FCE7EC] text-slate-700 hover:text-[#D95F76] text-xs font-semibold transition-all cursor-pointer"
                        >
                          <Volume2 size={14} /> Dengar Lafal
                        </button>
                      </>
                    )}
                  </div>

                  {/* Learn Mode Detail */}
                  {vocabMode === "learn" && (
                    <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                      <div className="mb-4 text-center">
                        <div className="text-2xl font-bold text-emerald-600">{currentVocab.meaning}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{currentVocab.partOfSpeech}</div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Contoh Kalimat
                        </div>
                        <div className="text-sm font-jp font-semibold text-slate-800 flex items-center justify-between">
                          <span>{currentVocab.exampleJp}</span>
                          <button
                            onClick={() => speakJa(currentVocab.exampleJp, audioSpeed)}
                            className="text-slate-400 hover:text-[#D95F76]"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">{currentVocab.exampleId}</div>
                      </div>
                    </div>
                  )}

                  {/* Multiple Choice Options */}
                  {(vocabMode === "quiz_jp_id" || vocabMode === "quiz_audio") && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                      {vocabOptions.map((opt, i) => {
                        const isChosen = selectedOption === opt;
                        const isCorrect = opt === currentVocab.meaning;

                        let btnStyle = "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800";
                        if (selectedOption !== null) {
                          if (isCorrect) btnStyle = "bg-emerald-500 border-emerald-500 text-white font-bold";
                          else if (isChosen) btnStyle = "bg-rose-500 border-rose-500 text-white";
                          else btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                        }

                        return (
                          <button
                            key={i}
                            onClick={() => handleVocabAnswer(opt)}
                            disabled={selectedOption !== null}
                            className={`p-3.5 rounded-2xl border text-sm text-left transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {selectedOption !== null && isCorrect && <Check size={16} />}
                            {selectedOption !== null && isChosen && !isCorrect && <X size={16} />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Next Navigation */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setVocabIndex(prev => (prev - 1 + filteredVocab.length) % filteredVocab.length)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                    >
                      <ChevronLeft size={16} /> Sebelumnya
                    </button>
                    <button
                      onClick={nextVocab}
                      className="px-5 py-2 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                    >
                      Selanjutnya <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB: KANJI DOJO */}
          {activeTab === "kanji" && (
            <motion.div
              key="tab-kanji"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {masterKanji.map(k => (
                  <div
                    key={k.id}
                    className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                          {k.level} • {k.strokeCount} Goresan
                        </span>
                        <span className="text-xs text-slate-400 font-mono">Radikal: {k.radical}</span>
                      </div>

                      <div className="text-center py-4 bg-slate-50 rounded-2xl mb-4">
                        <button
                          onClick={() => speakJa(k.character, audioSpeed)}
                          className="text-6xl font-jp font-bold text-slate-900 hover:text-[#D95F76] transition-colors"
                        >
                          {k.character}
                        </button>
                        <div className="text-base font-bold text-slate-700 mt-2">{k.meaning}</div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-400 font-semibold">On&apos;yomi:</span>
                          <span className="font-jp font-bold text-purple-700">{k.onyomi.join("、 ")}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-400 font-semibold">Kun&apos;yomi:</span>
                          <span className="font-jp font-bold text-indigo-700">{kunyomiJoin(k.kunyomi)}</span>
                        </div>
                      </div>

                      {/* Compound Words */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Kosakata Gabungan
                        </div>
                        <div className="space-y-1.5">
                          {k.compounds.map((c, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded-xl">
                              <span className="font-jp font-bold text-slate-800">{c.word} ({c.reading})</span>
                              <span className="text-slate-500">{c.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addXP(10, "Dojo");
                        unlockAchievement("first-kanji");
                      }}
                      className="mt-5 w-full py-2 rounded-xl bg-slate-100 hover:bg-[#FCE7EC] text-slate-700 hover:text-[#D95F76] text-xs font-bold transition-all text-center"
                    >
                      Tandai Sudah Dipelajari (+10 XP)
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: TATA BAHASA (GRAMMAR) */}
          {activeTab === "grammar" && (
            <motion.div
              key="tab-grammar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {masterGrammar.map(g => (
                  <div
                    key={g.id}
                    className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        {g.level}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Pola Kalimat</span>
                    </div>

                    <h3 className="text-xl font-bold font-jp text-slate-900 mb-1">{g.pattern}</h3>
                    <div className="text-sm font-semibold text-emerald-600 mb-3">{g.meaning}</div>

                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs mb-3 font-mono text-slate-700">
                      {g.formation}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{g.explanation}</p>

                    {/* Example Sentences */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Contoh Penggunaan</div>
                      {g.examples.map((ex, i) => (
                        <div key={i} className="text-xs bg-slate-50 p-2.5 rounded-xl">
                          <div className="font-jp font-bold text-slate-800 flex items-center justify-between">
                            <span>{ex.jp}</span>
                            <button onClick={() => speakJa(ex.jp, audioSpeed)} className="text-slate-400 hover:text-[#D95F76]">
                              <Volume2 size={14} />
                            </button>
                          </div>
                          <div className="text-slate-500 mt-0.5">{ex.id}</div>
                        </div>
                      ))}
                    </div>

                    {g.commonMistakes && (
                      <div className="mt-3 p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-[11px] text-rose-700">
                        ⚠️ <span className="font-semibold">Perhatian:</span> {g.commonMistakes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: KALIMAT & MEMBACA (SENTENCE ORDERING & READING) */}
          {activeTab === "reading" && (
            <motion.div
              key="tab-reading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-200/80 shadow-sm max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    Latihan Susun Urutan Kata (Word Ordering)
                  </span>
                  <span className="text-xs font-mono text-slate-400">{currentSentence.level}</span>
                </div>

                <div className="text-center py-4">
                  <div className="text-sm font-semibold text-slate-500 mb-1">Terjemahkan ke Bahasa Jepang:</div>
                  <h3 className="text-xl font-bold text-slate-900">{currentSentence.meaning}</h3>
                </div>

                {/* Assembled Tokens Area */}
                <div className="min-h-16 p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-wrap items-center gap-2 mb-4">
                  {userTokens.length === 0 ? (
                    <span className="text-xs text-slate-400 italic mx-auto">Ketuk kata di bawah untuk menyusun kalimat</span>
                  ) : (
                    userTokens.map((tok, i) => (
                      <button
                        key={i}
                        onClick={() => removeToken(tok)}
                        className="px-3 py-1.5 rounded-xl bg-[#D95F76] text-white font-jp font-bold text-sm shadow-xs hover:bg-[#c44f65] transition-all"
                      >
                        {tok} ×
                      </button>
                    ))
                  )}
                </div>

                {/* Available Word Tokens */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  {availableTokens.map((tok, i) => (
                    <button
                      key={i}
                      onClick={() => addToken(tok)}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:border-[#D95F76] font-jp font-bold text-sm text-slate-800 hover:text-[#D95F76] shadow-xs transition-all"
                    >
                      {tok}
                    </button>
                  ))}
                </div>

                {/* Result Notification */}
                {sentenceResult !== null && (
                  <div
                    className={`p-4 rounded-2xl mb-4 text-xs flex items-center gap-2 ${
                      sentenceResult
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {sentenceResult ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <div>
                      <div className="font-bold">{sentenceResult ? "Benar Sekali! (+20 XP)" : "Belum Tepat, Coba Lagi!"}</div>
                      <div className="font-jp mt-0.5">{currentSentence.furigana}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setAvailableTokens([...currentSentence.tokens].sort(() => 0.5 - Math.random()));
                      setUserTokens([]);
                      setSentenceResult(null);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all flex items-center gap-1"
                  >
                    <RotateCcw size={14} /> Reset
                  </button>
                  <button
                    onClick={checkSentence}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                  >
                    Periksa Jawaban <Check size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: LISTENING ARENA */}
          {activeTab === "listening" && (
            <motion.div
              key="tab-listening"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm max-w-2xl mx-auto text-center">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                  Latihan Pemahaman Suara (Listening Dictation)
                </span>

                <div className="my-8">
                  <button
                    onClick={() => speakJa(currentVocab.exampleJp, audioSpeed)}
                    className="w-24 h-24 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white mx-auto flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  >
                    <Volume2 size={40} />
                  </button>
                  <p className="text-xs text-slate-400 mt-3">Dengarkan audio pada kecepatan {audioSpeed}x</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700">Transkrip Audio:</span>
                    <button
                      onClick={() => setShowTranscript(!showTranscript)}
                      className="text-xs text-indigo-600 font-semibold hover:underline"
                    >
                      {showTranscript ? "Sembunyikan" : "Tampilkan Transkrip"}
                    </button>
                  </div>
                  {showTranscript && (
                    <div className="pt-2 border-t border-slate-200">
                      <div className="font-jp text-lg font-bold text-slate-900">{currentVocab.exampleJp}</div>
                      <div className="text-xs text-slate-500 mt-1">{currentVocab.exampleId}</div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    addXP(15, "Dojo");
                    nextVocab();
                  }}
                  className="w-full py-3 rounded-2xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-bold transition-all shadow-sm"
                >
                  Lanjut ke Audio Berikutnya (+15 XP)
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB: SPACED REPETITION (SRS REVIEW) */}
          {activeTab === "srs" && (
            <motion.div
              key="tab-srs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {dueItems.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-slate-200/80 shadow-sm text-center max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Semua Review Hari Ini Selesai!</h3>
                  <p className="text-xs text-slate-500 mt-2 mb-6">
                    Hebat! Jadwal Spaced Repetition (SM-2) Anda bersih. Kartu baru akan dijadwalkan ulang sesuai interval memori Anda.
                  </p>
                  <button
                    onClick={() => setActiveTab("vocab")}
                    className="px-6 py-2.5 rounded-xl bg-[#D95F76] text-white text-xs font-bold shadow-sm"
                  >
                    Pelajari Kosakata Baru
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm text-center max-w-xl mx-auto">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-mono">
                    <span>Kartu {srsIndex + 1} dari {dueItems.length}</span>
                    <span>Interval: {currentSrs?.interval} hari</span>
                  </div>

                  <div className="py-6">
                    <div className="text-xs font-mono text-[#D95F76] font-semibold">{currentSrs?.reading}</div>
                    <h2 className="text-5xl font-extrabold font-jp text-slate-900 mt-2 mb-3">
                      {currentSrs?.word}
                    </h2>
                    <button
                      onClick={() => speakJa(currentSrs.word, audioSpeed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-[#FCE7EC] text-slate-700 text-xs font-semibold cursor-pointer"
                    >
                      <Volume2 size={14} /> Lafal
                    </button>
                  </div>

                  {!srsShowAnswer ? (
                    <button
                      onClick={() => setSrsShowAnswer(true)}
                      className="mt-6 w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      Tampilkan Jawaban
                    </button>
                  ) : (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <div className="text-2xl font-bold text-emerald-600 mb-6">{currentSrs?.meaning}</div>

                      {/* 4 SM-2 Buttons */}
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          onClick={() => handleSRSRate(0)}
                          className="py-3 px-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold transition-all"
                        >
                          Lupa (0)
                          <div className="text-[10px] font-normal text-rose-500 mt-0.5">Besok</div>
                        </button>
                        <button
                          onClick={() => handleSRSRate(3)}
                          className="py-3 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold transition-all"
                        >
                          Sulit (3)
                          <div className="text-[10px] font-normal text-amber-500 mt-0.5">+1-2 hr</div>
                        </button>
                        <button
                          onClick={() => handleSRSRate(4)}
                          className="py-3 px-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition-all"
                        >
                          Bagus (4)
                          <div className="text-[10px] font-normal text-blue-500 mt-0.5">+4-6 hr</div>
                        </button>
                        <button
                          onClick={() => handleSRSRate(5)}
                          className="py-3 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold transition-all"
                        >
                          Mudah (5)
                          <div className="text-[10px] font-normal text-emerald-500 mt-0.5">+10+ hr</div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* TAB: KAMUS KILAT (INTEGRATED DICTIONARY) */}
          {activeTab === "dictionary" && (
            <motion.div
              key="tab-dictionary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Cari Kanji, Kana, Romaji, atau arti bahasa Indonesia..."
                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#D95F76] text-sm text-slate-800"
                  />
                </div>

                <div className="space-y-3">
                  {dictionaryResults.map(item => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => speakJa(item.word, audioSpeed)}
                          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#D95F76]"
                        >
                          <Volume2 size={18} />
                        </button>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold font-jp text-slate-900">{item.word}</span>
                            <span className="text-xs text-slate-400 font-mono">【{item.reading}】</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 font-bold text-slate-600">
                              {item.level}
                            </span>
                          </div>
                          <div className="text-xs text-emerald-700 font-semibold mt-0.5">{item.meaning}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className="p-2 text-slate-400 hover:text-amber-500"
                      >
                        {bookmarks.includes(item.id) ? (
                          <BookmarkCheck size={18} className="text-amber-500" />
                        ) : (
                          <Bookmark size={18} />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: JLPT PRACTICE */}
          {activeTab === "jlpt" && (
            <motion.div
              key="tab-jlpt"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-1">Simulasi Ujian JLPT (N5 - N3)</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Uji kemampuan menyeluruh mencakup Kosakata (Goi), Kanji (Moji), dan Tata Bahasa (Bunpou).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { level: "JLPT N5", time: "25 Menit", questions: 20, status: "Tersedia" },
                    { level: "JLPT N4", time: "30 Menit", questions: 25, status: "Tersedia" },
                    { level: "JLPT N3", time: "35 Menit", questions: 30, status: "Tersedia" },
                  ].map((sim, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-extrabold text-lg text-slate-800">{sim.level}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                            {sim.status}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 space-y-1 mb-4">
                          <div>⏱️ Durasi: {sim.time}</div>
                          <div>📝 Jumlah Soal: {sim.questions} butir</div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveTab("vocab");
                          setLevelFilter(sim.level.split(" ")[1] as any);
                        }}
                        className="w-full py-2.5 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        Mulai Simulasi <Play size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Helper formatting function
function kunyomiJoin(arr: string[]) {
  return arr.length > 0 ? arr.join("、 ") : "-";
}
