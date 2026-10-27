"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, BookOpen, Brain, Target, Trophy, Flame,
  Volume2, Check, X, RotateCcw, ChevronRight,
  ChevronLeft, Search, Bookmark, BookmarkCheck, Play,
  CheckCircle2, AlertCircle, Layers, ArrowRight,
  Calendar, Zap, AlignJustify, FileText, Sliders,
  MessageCircle, Send, RefreshCw, User, Bot, HelpCircle
} from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { useAchievementStore } from "@/store/useAchievementStore";

// ==========================================
// 1. DATA TYPES & VALIDATED DATASETS
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
  tokens: string[];
}

export interface SRSItem {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  level: string;
  interval: number;
  easeFactor: number;
  repetitions: number;
  nextReviewDate: string;
  status: "new" | "learning" | "review" | "mastered";
}

// Interactive Chat Message Type
export interface ChatMessage {
  id: string;
  sender: "sensei" | "user";
  type: "text" | "question" | "feedback";
  text?: string;
  word?: DojoVocab;
  isCorrect?: boolean;
  explanation?: string;
  options?: string[];
  timestamp?: string;
}

// ------------------------------------------
// Master Vocabulary Dataset (N5 - N3)
// ------------------------------------------
const masterVocab: DojoVocab[] = [
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
  // N4
  { id: "v16", word: "経験", reading: "けいけん", romaji: "keiken", meaning: "pengalaman", level: "N4", partOfSpeech: "Kata Benda / Suru", exampleJp: "日本での留学は良い経験です。", exampleId: "Kuliah di Jepang adalah pengalaman berharga." },
  { id: "v17", word: "生活", reading: "せいかつ", romaji: "seikatsu", meaning: "kehidupan sehari-hari", level: "N4", partOfSpeech: "Kata Benda / Suru", exampleJp: "東京の生活に慣れました。", exampleId: "Saya sudah terbiasa dengan kehidupan di Tokyo." },
  { id: "v18", word: "準備", reading: "じゅんび", romaji: "junbi", meaning: "persiapan", level: "N4", partOfSpeech: "Kata Benda / Suru", exampleJp: "旅行の準備をします。", exampleId: "Saya mempersiapkan untuk perjalanan." },
  { id: "v19", word: "集める", reading: "あつめる", romaji: "atsumeru", meaning: "mengumpulkan", level: "N4", partOfSpeech: "Kata Kerja (Ichidan)", exampleJp: "好きなアニメグッズを集める。", exampleId: "Mengumpulkan merchandise anime favorit." },
  { id: "v20", word: "残る", reading: "のこる", romaji: "nokoru", meaning: "tersisa / tertinggal", level: "N4", partOfSpeech: "Kata Kerja (Godan)", exampleJp: "まだ時間が少し残っています。", exampleId: "Masih tersisa sedikit waktu." },
  // N3
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
    example: "日曜日には友達と映画を見ます。"
  },
  {
    id: "k2", character: "本", meaning: "buku, asal mula", onyomi: ["ホン"], kunyomi: ["もと"],
    strokeCount: 5, radical: "木 (pohon)", level: "N5",
    compounds: [
      { word: "本屋", reading: "ほんや", meaning: "Toko buku" },
      { word: "本当", reading: "ほんとう", meaning: "Sungguh / Benar" }
    ],
    example: "日本の歴史についての本を読んでいます。"
  },
  {
    id: "k3", character: "学", meaning: "belajar, sekolah", onyomi: ["ガク"], kunyomi: ["まな・ぶ"],
    strokeCount: 8, radical: "子 (anak)", level: "N5",
    compounds: [
      { word: "学生", reading: "がくせい", meaning: "Pelajar / Mahasiswa" },
      { word: "学校", reading: "がっこう", meaning: "Sekolah" },
      { word: "大学", reading: "だいがく", meaning: "Universitas" }
    ],
    example: "日本語を一生懸命学びたいです。"
  },
  {
    id: "k4", character: "生", meaning: "hidup, lahir, mentah", onyomi: ["セイ", "ショウ"], kunyomi: ["い・きる", "う・まれる", "なま"],
    strokeCount: 5, radical: "生 (hidup)", level: "N5",
    compounds: [
      { word: "先生", reading: "せんせい", meaning: "Guru" },
      { word: "生活", reading: "せいかつ", meaning: "Kehidupan" }
    ],
    example: "先生、質問があります。"
  },
  {
    id: "k5", character: "道", meaning: "jalan, ajaran (way)", onyomi: ["ドウ", "トウ"], kunyomi: ["みち"],
    strokeCount: 12, radical: "辶 (berjalan)", level: "N4",
    compounds: [
      { word: "道場", reading: "どうじょう", meaning: "Tempat latihan / Dojo" },
      { word: "柔道", reading: "じゅうどう", meaning: "Judo" },
      { word: "書道", reading: "しょどう", meaning: "Kaligrafi Jepang" }
    ],
    example: "この道をまっすぐ行くと駅があります。"
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
  },
  {
    id: "s2",
    sentence: "休みの日は家で映画を見たり、本を読んだりします。",
    furigana: "やすみ の ひ は いえ で えいが を みたり、ほん を よんだり します。",
    meaning: "Pada hari libur, di rumah saya menonton film dan membaca buku.",
    level: "N4",
    tokens: ["休みの日は", "家で", "映画を見たり、", "本を読んだりします"],
  }
];

// Confused Kana Pairs
const confusedKanaPairs = [
  { p1: "さ", p2: "ち", romaji1: "sa", romaji2: "chi", hint: "Perhatikan lengkungan 'さ' menghadap ke kanan bawah, sedangkan 'ち' menghadap ke kiri melengkung." },
  { p1: "シ", p2: "ツ", romaji1: "shi", romaji2: "tsu", hint: "Katakana 'シ' (shi) goresannya dari bawah ke atas, 'ツ' (tsu) dari atas ke bawah." },
  { p1: "ソ", p2: "ン", romaji1: "so", romaji2: "n", hint: "Katakana 'ソ' (so) goresan miring lebih vertikal, 'ン' (n) lebih horizontal." },
  { p1: "れ", p2: "わ", romaji1: "re", romaji2: "wa", hint: "'れ' ujung kanannya meliuk keluar, 'わ' melengkung bulat ke dalam." }
];

// Speech Helper
function speakJa(text: string, rate: number = 0.9) {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = rate;
    window.speechSynthesis.speak(u);
  }
}

// SM-2 Spaced Repetition Formula
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

export default function DojoPage() {
  type DojoTab =
    | "dashboard"
    | "chat" // Interactive Renshuu Chat Flow
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

  // Global stores
  const { addXP, streak } = useProgressStore();
  const { unlockAchievement } = useAchievementStore();

  // Local storage states
  const [srsItems, setSrsItems] = useState<SRSItem[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ==========================================
  // CHAT DOJO INTERACTIVE STATE
  // ==========================================
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatIndex, setChatIndex] = useState(0);
  const [isSenseiTyping, setIsSenseiTyping] = useState(false);
  const [chatSelectedOption, setChatSelectedOption] = useState<string | null>(null);
  const [chatLastAnswerWrong, setChatLastAnswerWrong] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Filtered vocabulary for chat and vocab tab
  const filteredVocab = useMemo(() => {
    if (levelFilter === "all") return masterVocab;
    return masterVocab.filter(v => v.level === levelFilter);
  }, [levelFilter]);

  const currentChatWord = filteredVocab[chatIndex % filteredVocab.length];

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isSenseiTyping]);

  // Generate 4 randomized options for current chat word
  const currentChatOptions = useMemo(() => {
    if (!currentChatWord) return [];
    const pool = masterVocab.filter(v => v.id !== currentChatWord.id).map(v => v.meaning);
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...shuffledPool, currentChatWord.meaning].sort(() => 0.5 - Math.random());
  }, [currentChatWord]);

  // Initialize Chat conversation
  const initChat = useCallback(() => {
    if (!currentChatWord) return;
    const initialMsgs: ChatMessage[] = [
      {
        id: "msg-welcome",
        sender: "sensei",
        type: "text",
        text: "Konnichiwa! Selamat datang di sesi latihan interaktif Dojo Chat! 🥋 Coba tebak kata-kata berikut ya.",
        timestamp: "Baru saja",
      },
      {
        id: "msg-q-0",
        sender: "sensei",
        type: "question",
        text: "Coba tebak, apa arti dari kata berikut ini?",
        word: currentChatWord,
        options: currentChatOptions,
        timestamp: "Baru saja",
      },
    ];
    setChatMessages(initialMsgs);
    setChatSelectedOption(null);
    setChatLastAnswerWrong(false);
  }, [currentChatWord, currentChatOptions]);

  // Trigger init on first load or tab switch
  useEffect(() => {
    if (activeTab === "chat" && chatMessages.length === 0) {
      initChat();
    }
  }, [activeTab, chatMessages.length, initChat]);

  // Handle User Chat Answer
  const handleChatAnswer = (option: string) => {
    if (chatSelectedOption !== null || !currentChatWord) return;
    setChatSelectedOption(option);

    // 1. User message bubble
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      type: "text",
      text: option,
      timestamp: "Baru saja",
    };
    setChatMessages(prev => [...prev, userMsg]);
    setIsSenseiTyping(true);

    const isCorrect = option === currentChatWord.meaning;

    // 2. Sensei responses after typing delay
    setTimeout(() => {
      setIsSenseiTyping(false);

      if (isCorrect) {
        setChatLastAnswerWrong(false);
        // Play audio of the word
        speakJa(currentChatWord.word, audioSpeed);
        // Add XP and unlock achievement
        addXP(10, "Dojo Chat");
        unlockAchievement("vocab-100");

        const feedbackMsg: ChatMessage = {
          id: `feedback-${Date.now()}`,
          sender: "sensei",
          type: "feedback",
          isCorrect: true,
          text: "✅ Benar sekali! 素晴らしい！ (+10 XP)",
          explanation: `${currentChatWord.word} (${currentChatWord.reading}) artinya "${currentChatWord.meaning}".\nContoh: ${currentChatWord.exampleJp} (${currentChatWord.exampleId})`,
          timestamp: "Baru saja",
        };
        setChatMessages(prev => [...prev, feedbackMsg]);

        // Auto advance to next question after 1.5 seconds!
        setTimeout(() => {
          setIsSenseiTyping(true);
          setTimeout(() => {
            setIsSenseiTyping(false);
            const nextIdx = (chatIndex + 1) % filteredVocab.length;
            setChatIndex(nextIdx);
            const nextWord = filteredVocab[nextIdx];

            // Next options
            const pool = masterVocab.filter(v => v.id !== nextWord.id).map(v => v.meaning);
            const nextOptions = [...pool.sort(() => 0.5 - Math.random()).slice(0, 3), nextWord.meaning].sort(() => 0.5 - Math.random());

            const nextQMsg: ChatMessage = {
              id: `msg-q-${nextIdx}-${Date.now()}`,
              sender: "sensei",
              type: "question",
              text: "Hebat! Lanjut ke kata materi berikutnya:",
              word: nextWord,
              options: nextOptions,
              timestamp: "Baru saja",
            };
            setChatMessages(prev => [...prev, nextQMsg]);
            setChatSelectedOption(null);
          }, 700);
        }, 1200);

      } else {
        // WRONG ANSWER
        setChatLastAnswerWrong(true);
        const feedbackMsg: ChatMessage = {
          id: `feedback-${Date.now()}`,
          sender: "sensei",
          type: "feedback",
          isCorrect: false,
          text: "❌ Kurang tepat! Jangan menyerah ya.",
          explanation: `Jawaban yang benar adalah "${currentChatWord.meaning}".\n${currentChatWord.word} (${currentChatWord.reading}) = ${currentChatWord.meaning}.\nContoh: ${currentChatWord.exampleJp} (${currentChatWord.exampleId})`,
          timestamp: "Baru saja",
        };
        setChatMessages(prev => [...prev, feedbackMsg]);
      }
    }, 700);
  };

  // Skip or advance after wrong answer
  const advanceChatNext = () => {
    setIsSenseiTyping(true);
    setChatLastAnswerWrong(false);
    setTimeout(() => {
      setIsSenseiTyping(false);
      const nextIdx = (chatIndex + 1) % filteredVocab.length;
      setChatIndex(nextIdx);
      const nextWord = filteredVocab[nextIdx];
      const pool = masterVocab.filter(v => v.id !== nextWord.id).map(v => v.meaning);
      const nextOptions = [...pool.sort(() => 0.5 - Math.random()).slice(0, 3), nextWord.meaning].sort(() => 0.5 - Math.random());

      const nextQMsg: ChatMessage = {
        id: `msg-q-${nextIdx}-${Date.now()}`,
        sender: "sensei",
        type: "question",
        text: "Tidak apa-apa, mari coba kata yang ini:",
        word: nextWord,
        options: nextOptions,
        timestamp: "Baru saja",
      };
      setChatMessages(prev => [...prev, nextQMsg]);
      setChatSelectedOption(null);
    }, 500);
  };

  const retryCurrentChatWord = () => {
    setChatSelectedOption(null);
    setChatLastAnswerWrong(false);
  };

  // Initial Load & SRS Setup
  useEffect(() => {
    const savedSrs = localStorage.getItem("dojo_srs_items");
    if (savedSrs) {
      try {
        setSrsItems(JSON.parse(savedSrs));
      } catch {}
    } else {
      const initial = masterVocab.slice(0, 8).map((w, idx) => ({
        id: w.id,
        word: w.word,
        reading: w.reading,
        meaning: w.meaning,
        level: w.level,
        interval: idx % 2 === 0 ? 0 : 1,
        easeFactor: 2.5,
        repetitions: 0,
        nextReviewDate: new Date().toISOString(),
        status: "new" as const,
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

  const dueItems = useMemo(() => {
    const now = new Date();
    return srsItems.filter(item => new Date(item.nextReviewDate) <= now);
  }, [srsItems]);

  const completedCount = useMemo(() => srsItems.filter(i => i.status === "mastered").length, [srsItems]);

  // ------------------------------------------
  // VOCAB STATE
  // ------------------------------------------
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabMode, setVocabMode] = useState<"learn" | "quiz_jp_id" | "quiz_audio">("learn");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentVocab = filteredVocab[vocabIndex % filteredVocab.length];

  const vocabOptions = useMemo(() => {
    if (!currentVocab) return [];
    const pool = masterVocab.filter(v => v.id !== currentVocab.id).map(v => v.meaning);
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...shuffledPool, currentVocab.meaning].sort(() => 0.5 - Math.random());
  }, [currentVocab]);

  const handleVocabAnswer = (chosen: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(chosen);
    const isCorrect = chosen === currentVocab.meaning;
    if (isCorrect) {
      addXP(10, "Dojo");
      unlockAchievement("vocab-100");
    }
  };

  const nextVocab = () => {
    setSelectedOption(null);
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
    const updated = srsItems.map(item => (item.id === currentSrs.id ? { ...item, ...res } : item));
    saveSRS(updated);

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
  // SENTENCE ORDERING STATE
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
  // LISTENING STATE
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

  const tabs: { id: DojoTab; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Dashboard", icon: <Calendar size={15} /> },
    { id: "chat", label: "💬 Chat Dojo", icon: <MessageCircle size={15} /> },
    { id: "paths", label: "Jalur Belajar", icon: <Layers size={15} /> },
    { id: "kana", label: "Kana Hub", icon: <span className="font-jp font-bold text-xs">あ</span> },
    { id: "vocab", label: "Kosakata", icon: <BookOpen size={15} /> },
    { id: "kanji", label: "Kanji Dojo", icon: <span className="font-jp font-bold text-xs">漢</span> },
    { id: "grammar", label: "Tata Bahasa", icon: <AlignJustify size={15} /> },
    { id: "reading", label: "Kalimat & Membaca", icon: <FileText size={15} /> },
    { id: "listening", label: "Listening", icon: <Volume2 size={15} /> },
    { id: "srs", label: `SRS Review (${dueItems.length})`, icon: <RotateCcw size={15} /> },
    { id: "dictionary", label: "Kamus Kilat", icon: <Search size={15} /> },
    { id: "jlpt", label: "Simulasi JLPT", icon: <Target size={15} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* ==========================================
          HEADER: CONSISTENT WITH NIHONQUEST STYLE
          ========================================== */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D95F76] flex items-center justify-center shadow-xs">
              <span className="text-xl font-jp text-white font-bold">道</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-[#1F2937]">Dojo (道場)</h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FCE7EC] text-[#D95F76] font-semibold">
                  Renshuu Hub
                </span>
              </div>
              <p className="text-[#6B7280] text-sm">修練 (Shuren) — Pusat latihan interaktif kosakata, kanji, tata bahasa, dan SRS</p>
            </div>
          </div>

          {/* Clean Stats Badges */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E7E5E4] text-xs font-semibold text-[#1F2937] shadow-2xs">
              <Flame size={14} className="text-[#D95F76]" />
              <span>{streak || 0} Streak</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E7E5E4] text-xs font-semibold text-[#1F2937] shadow-2xs">
              <RotateCcw size={14} className="text-[#3B82F6]" />
              <span>{dueItems.length} Due</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E7E5E4] text-xs font-semibold text-[#1F2937] shadow-2xs">
              <Trophy size={14} className="text-[#F59E0B]" />
              <span>{completedCount} Mastered</span>
            </div>
          </div>
        </div>

        {/* Filter and Audio Row */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-[#E7E5E4]">
          {/* Level Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-[#6B7280]">Level:</span>
            {(["all", "N5", "N4", "N3"] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevelFilter(lvl);
                  setChatIndex(0);
                  setChatMessages([]);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  levelFilter === lvl
                    ? "bg-[#D95F76] text-white shadow-2xs"
                    : "bg-white text-[#6B7280] border border-[#E7E5E4] hover:bg-[#FFF9F7] hover:text-[#1F2937]"
                }`}
              >
                {lvl === "all" ? "Semua" : lvl}
              </button>
            ))}
          </div>

          {/* Audio Speed */}
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <Sliders size={13} className="text-[#D95F76]" />
            <span>Kecepatan Audio:</span>
            {[0.75, 0.9, 1.0, 1.25].map(spd => (
              <button
                key={spd}
                onClick={() => setAudioSpeed(spd)}
                className={`px-2 py-0.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  audioSpeed === spd
                    ? "bg-[#FCE7EC] text-[#D95F76] font-bold border border-[#D95F76]/30"
                    : "text-[#6B7280] hover:text-[#1F2937]"
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-3 no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#D95F76] text-white shadow-xs"
                  : "bg-white text-[#6B7280] border border-[#E7E5E4] hover:bg-[#FFF9F7] hover:text-[#1F2937]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ==========================================
          TAB CONTENTS
          ========================================== */}
      <AnimatePresence mode="wait">
        {/* TAB: DASHBOARD */}
        {activeTab === "dashboard" && (
          <motion.div
            key="tab-dashboard"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-6"
          >
            {/* 3 Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D95F76] bg-[#FCE7EC] px-2.5 py-0.5 rounded-full">
                      Target Harian
                    </span>
                    <Calendar size={16} className="text-[#6B7280]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937] mt-1">15 Menit Latihan</h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Latihan rutin setiap hari membantu penguatan memori jangka panjang secara optimal.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-xs">
                  <span className="text-[#6B7280]">Kemajuan Hari Ini:</span>
                  <span className="font-bold text-[#22C55E]">8 / 15 Selesai</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] bg-[#DBEAFE] px-2.5 py-0.5 rounded-full">
                      Antrean SRS SM-2
                    </span>
                    <RotateCcw size={16} className="text-[#6B7280]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937] mt-1">{dueItems.length} Kartu Siap Review</h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Kosakata yang dijadwalkan untuk diulang hari ini agar tidak terlupakan.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("srs")}
                  className="mt-4 w-full py-2 px-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  Mulai Review SRS <ArrowRight size={13} />
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D95F76] bg-[#FCE7EC] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles size={11} /> Mode Renshuu
                    </span>
                    <MessageCircle size={16} className="text-[#6B7280]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937] mt-1">Chat Latihan Sensei</h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Latihan tebak kosakata gaya chat interaktif dengan Sensei otomatis.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("chat")}
                  className="mt-4 w-full py-2 px-3 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  Mulai Chat Dojo <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Mastery Summary */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#1F2937] flex items-center gap-2">
                  <BarChartIcon /> Ringkasan Penguasaan Materi Dojo
                </span>
                <span className="text-xs text-[#6B7280] font-medium">Status Akumulasi</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Kosakata N5", count: "15 / 15", pct: 100, color: "bg-[#22C55E]" },
                  { label: "Kosakata N4", count: "5 / 10", pct: 50, color: "bg-[#3B82F6]" },
                  { label: "Kanji Dasar", count: "5 / 20", pct: 25, color: "bg-[#8B5CF6]" },
                  { label: "Tata Bahasa N5", count: "4 / 8", pct: 50, color: "bg-[#F59E0B]" },
                ].map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#E7E5E4]">
                    <div className="flex justify-between text-xs font-medium text-[#6B7280] mb-2">
                      <span>{stat.label}</span>
                      <span className="text-[#1F2937] font-bold">{stat.count}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E7E5E4] overflow-hidden">
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

        {/* TAB: CHAT DOJO INTERAKTIF (FITUR SEPERTI RENSHUU APP) */}
        {activeTab === "chat" && (
          <motion.div
            key="tab-chat"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] shadow-xs overflow-hidden flex flex-col">
              {/* Chat Header */}
              <div className="px-5 py-3.5 bg-white border-b border-[#E7E5E4] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-[#D95F76] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                      🥋
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1F2937]">Sensei Dojo (修練先生)</h3>
                    <p className="text-[11px] text-[#22C55E] font-medium flex items-center gap-1">
                      <span>●</span> Online &bull; Siap Latihan Interaktif
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FCE7EC] text-[#D95F76] font-semibold">
                    {levelFilter === "all" ? "Semua Level" : levelFilter}
                  </span>
                  <button
                    onClick={() => {
                      setChatIndex(0);
                      initChat();
                    }}
                    title="Ulangi dari awal"
                    className="p-1.5 rounded-lg border border-[#E7E5E4] text-[#6B7280] hover:text-[#D95F76] hover:bg-[#FFF9F7] transition-all"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>

              {/* Message Thread Area */}
              <div className="p-4 sm:p-5 space-y-4 min-h-[380px] max-h-[480px] overflow-y-auto bg-[#F9FAFB]/70">
                {chatMessages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    {/* SENSEI BUBBLE */}
                    {msg.sender === "sensei" && (
                      <div className="max-w-[85%] sm:max-w-[78%]">
                        <div className="flex items-end gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#D95F76] text-white flex items-center justify-center text-xs flex-shrink-0 shadow-2xs">
                            🥋
                          </div>
                          <div className="bg-white border border-[#E7E5E4] p-3.5 rounded-2xl rounded-bl-xs shadow-2xs text-[#1F2937] text-xs space-y-2">
                            {msg.text && <p className="font-medium text-xs text-[#374151]">{msg.text}</p>}

                            {/* Question Card inside Chat */}
                            {msg.type === "question" && msg.word && (
                              <div className="mt-2 p-3.5 rounded-xl bg-[#FFF9F7] border border-[#FCE7EC] text-center">
                                <div className="text-[11px] font-mono text-[#D95F76] font-semibold">
                                  {msg.word.reading} ({msg.word.romaji})
                                </div>
                                <div className="text-3xl font-jp font-extrabold text-[#1F2937] my-1">
                                  {msg.word.word}
                                </div>
                                <div className="flex items-center justify-center gap-1.5 mt-2">
                                  <button
                                    onClick={() => speakJa(msg.word!.word, audioSpeed)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#FCE7EC] text-[#D95F76] text-[11px] font-semibold hover:bg-[#FCE7EC] transition-all cursor-pointer"
                                  >
                                    <Volume2 size={13} /> Dengarkan
                                  </button>
                                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#DCFCE7] text-[#22C55E] font-bold">
                                    {msg.word.level}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Feedback Result inside Chat */}
                            {msg.type === "feedback" && (
                              <div
                                className={`p-3 rounded-xl border mt-1.5 ${
                                  msg.isCorrect
                                    ? "bg-[#DCFCE7]/70 border-[#22C55E]/50 text-[#15803D]"
                                    : "bg-[#FEE2E2]/70 border-[#EF4444]/50 text-[#B91C1C]"
                                }`}
                              >
                                <p className="font-bold text-xs">{msg.text}</p>
                                {msg.explanation && (
                                  <p className="text-[11px] mt-1 text-[#374151] whitespace-pre-line leading-relaxed">
                                    {msg.explanation}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* USER BUBBLE */}
                    {msg.sender === "user" && (
                      <div className="max-w-[75%]">
                        <div className="bg-[#D95F76] text-white px-4 py-2.5 rounded-2xl rounded-br-xs shadow-2xs text-xs font-semibold">
                          {msg.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* SENSEI TYPING ANIMATION */}
                {isSenseiTyping && (
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#D95F76] text-white flex items-center justify-center text-xs flex-shrink-0">
                      🥋
                    </div>
                    <div className="bg-white border border-[#E7E5E4] px-4 py-3 rounded-2xl rounded-bl-xs shadow-2xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D95F76] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D95F76] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D95F76] animate-bounce [animation-delay:0.4s]" />
                      <span className="text-[10px] text-[#6B7280] ml-1 font-medium">Sensei sedang mengetik...</span>
                    </div>
                  </div>
                )}

                <div ref={chatBottomRef} />
              </div>

              {/* Chat Input & Response Area */}
              <div className="p-4 bg-white border-t border-[#E7E5E4]">
                {chatLastAnswerWrong ? (
                  /* If Wrong, provide Retry or Next */
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={retryCurrentChatWord}
                      className="flex-1 py-2.5 px-4 rounded-xl border border-[#E7E5E4] bg-white hover:bg-[#FFF9F7] text-xs font-semibold text-[#1F2937] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <RotateCcw size={14} className="text-[#6B7280]" /> Coba Tebak Lagi
                    </button>
                    <button
                      onClick={advanceChatNext}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      Lanjut ke Kata Berikutnya <ChevronRight size={14} />
                    </button>
                  </div>
                ) : (
                  /* 4 Quick Reply Chips */
                  <div>
                    <div className="text-[11px] font-semibold text-[#6B7280] mb-2 flex items-center justify-between">
                      <span>Pilih jawabanmu untuk Sensei:</span>
                      <span className="text-[10px] text-[#9CA3AF]">Ketuk untuk mengirim</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentChatOptions.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleChatAnswer(opt)}
                          disabled={chatSelectedOption !== null || isSenseiTyping}
                          className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                            chatSelectedOption === opt
                              ? "bg-[#FCE7EC] border-[#D95F76] text-[#D95F76] font-bold"
                              : "bg-white hover:bg-[#FFF9F7] border-[#E7E5E4] text-[#1F2937] hover:border-[#D95F76]"
                          } disabled:opacity-50 disabled:cursor-not-allowed shadow-2xs`}
                        >
                          <span className="truncate">{opt}</span>
                          <span className="text-[10px] text-[#9CA3AF] ml-1">➔</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB: JALUR BELAJAR */}
        {activeTab === "paths" && (
          <motion.div
            key="tab-paths"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs">
              <h3 className="text-base font-bold text-[#1F2937] mb-1">Kurikulum Terstruktur (Jalur Belajar)</h3>
              <p className="text-xs text-[#6B7280] mb-4">
                Ikuti tahapan belajar dari aksara dasar hingga level lanjutan JLPT.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  { level: "Hiragana & Katakana", desc: "46 huruf dasar + variasi dakuten & yoon.", status: "Selesai", unlocked: true, tab: "kana" },
                  { level: "JLPT N5 (Pemula)", desc: "100 Kanji, 800 Kosakata dasar, tata bahasa dasar.", status: "Sedang Berjalan", unlocked: true, tab: "chat" },
                  { level: "JLPT N4 (Dasar Atas)", desc: "300 Kanji, 1.500 Kosakata, percakapan sehari-hari.", status: "Tersedia", unlocked: true, tab: "chat" },
                  { level: "JLPT N3 (Menengah)", desc: "650 Kanji, 3.750 Kosakata, artikel & percakapan alami.", status: "Tersedia", unlocked: true, tab: "chat" },
                  { level: "JLPT N2 (Menengah Atas)", desc: "1.000 Kanji, 6.000 Kosakata, bacaan formal.", status: "Segera Hadir", unlocked: false, tab: "jlpt" },
                  { level: "JLPT N1 (Mahir)", desc: "2.000+ Kanji, 10.000 Kosakata, literatur & profesional.", status: "Segera Hadir", unlocked: false, tab: "jlpt" },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      p.unlocked
                        ? "bg-white border-[#E7E5E4] hover:border-[#D95F76] shadow-2xs"
                        : "bg-[#F9FAFB] border-[#E7E5E4]/60 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-[#1F2937]">{p.level}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          p.status === "Selesai"
                            ? "bg-[#DCFCE7] text-[#22C55E]"
                            : p.status === "Sedang Berjalan"
                            ? "bg-[#DBEAFE] text-[#3B82F6]"
                            : "bg-[#F3F4F6] text-[#6B7280]"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mb-3">{p.desc}</p>
                    {p.unlocked && (
                      <button
                        onClick={() => setActiveTab(p.tab as DojoTab)}
                        className="text-xs font-semibold text-[#D95F76] hover:underline flex items-center gap-1"
                      >
                        Buka Latihan <ChevronRight size={13} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB: KANA HUB */}
        {activeTab === "kana" && (
          <motion.div
            key="tab-kana"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1F2937]">Review Karakter yang Sering Tertukar</h3>
                  <p className="text-xs text-[#6B7280]">
                    Bandingkan huruf mirip agar tidak salah membaca saat latihan cepat.
                  </p>
                </div>
                <span className="text-xs bg-[#FEF9C3] text-[#F59E0B] px-2.5 py-1 rounded-full font-semibold">
                  Karakter Sensitif
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {confusedKanaPairs.map((pair, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FFF9F7] border border-[#FCE7EC]">
                    <div className="flex items-center justify-around py-2.5 bg-white rounded-xl border border-[#E7E5E4] mb-2.5 shadow-2xs">
                      <div className="text-center">
                        <button
                          onClick={() => speakJa(pair.p1, audioSpeed)}
                          className="text-3xl font-jp font-bold text-[#1F2937] hover:text-[#D95F76] transition-colors"
                        >
                          {pair.p1}
                        </button>
                        <div className="text-xs font-mono text-[#6B7280]">{pair.romaji1}</div>
                      </div>
                      <span className="text-xs font-bold text-[#E7E5E4]">VS</span>
                      <div className="text-center">
                        <button
                          onClick={() => speakJa(pair.p2, audioSpeed)}
                          className="text-3xl font-jp font-bold text-[#1F2937] hover:text-[#D95F76] transition-colors"
                        >
                          {pair.p2}
                        </button>
                        <div className="text-xs font-mono text-[#6B7280]">{pair.romaji2}</div>
                      </div>
                    </div>
                    <p className="text-xs text-[#1F2937] leading-relaxed">
                      💡 <span className="font-semibold text-[#D95F76]">Tips:</span> {pair.hint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB: VOCABULARY DRILL */}
        {activeTab === "vocab" && (
          <motion.div
            key="tab-vocab"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            {/* Mode switch */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-[#E7E5E4]">
              <div className="flex items-center gap-1.5">
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
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      vocabMode === m.id
                        ? "bg-[#D95F76] text-white shadow-2xs"
                        : "bg-white text-[#6B7280] border border-[#E7E5E4] hover:bg-[#FFF9F7]"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#6B7280] font-mono">
                {vocabIndex + 1} / {filteredVocab.length}
              </div>
            </div>

            {/* Drill Card */}
            {currentVocab && (
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-2xs text-center max-w-xl mx-auto relative">
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <button
                    onClick={() => toggleBookmark(currentVocab.id)}
                    className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#F59E0B] hover:bg-[#FEF9C3] transition-all"
                  >
                    {bookmarks.includes(currentVocab.id) ? (
                      <BookmarkCheck size={18} className="text-[#F59E0B]" />
                    ) : (
                      <Bookmark size={18} />
                    )}
                  </button>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#DCFCE7] font-bold text-[#22C55E]">
                    {currentVocab.level}
                  </span>
                </div>

                {/* Card Body */}
                <div className="my-4">
                  {vocabMode === "quiz_audio" ? (
                    <div className="py-6">
                      <button
                        onClick={() => speakJa(currentVocab.word, audioSpeed)}
                        className="w-16 h-16 rounded-2xl bg-[#D95F76] text-white mx-auto flex items-center justify-center hover:bg-[#c44f65] transition-all shadow-xs cursor-pointer"
                      >
                        <Volume2 size={28} />
                      </button>
                      <p className="text-xs text-[#6B7280] mt-3">Klik tombol untuk mendengarkan lafal</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-xs font-mono text-[#D95F76] font-semibold">
                        {currentVocab.reading} ({currentVocab.romaji})
                      </div>
                      <h2 className="text-4xl font-extrabold font-jp text-[#1F2937] mt-1 mb-2">
                        {currentVocab.word}
                      </h2>
                      <button
                        onClick={() => speakJa(currentVocab.word, audioSpeed)}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#FFF9F7] border border-[#FCE7EC] text-[#D95F76] text-xs font-semibold hover:bg-[#FCE7EC] transition-all"
                      >
                        <Volume2 size={13} /> Dengar
                      </button>
                    </>
                  )}
                </div>

                {/* Learn Mode Detail */}
                {vocabMode === "learn" && (
                  <div className="mt-5 pt-4 border-t border-[#E7E5E4] text-left">
                    <div className="text-center mb-4">
                      <div className="text-xl font-bold text-[#22C55E]">{currentVocab.meaning}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{currentVocab.partOfSpeech}</div>
                    </div>

                    <div className="bg-[#F9FAFB] p-3.5 rounded-xl border border-[#E7E5E4]">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
                        Contoh Kalimat
                      </div>
                      <div className="text-sm font-jp font-semibold text-[#1F2937] flex items-center justify-between">
                        <span>{currentVocab.exampleJp}</span>
                        <button onClick={() => speakJa(currentVocab.exampleJp, audioSpeed)} className="text-[#6B7280] hover:text-[#D95F76]">
                          <Volume2 size={15} />
                        </button>
                      </div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{currentVocab.exampleId}</div>
                    </div>
                  </div>
                )}

                {/* Quiz Mode Options */}
                {(vocabMode === "quiz_jp_id" || vocabMode === "quiz_audio") && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
                    {vocabOptions.map((opt, i) => {
                      const isChosen = selectedOption === opt;
                      const isCorrect = opt === currentVocab.meaning;

                      let btnStyle = "bg-white hover:bg-[#FFF9F7] border-[#E7E5E4] text-[#1F2937]";
                      if (selectedOption !== null) {
                        if (isCorrect) btnStyle = "bg-[#DCFCE7] border-[#22C55E] text-[#22C55E] font-bold";
                        else if (isChosen) btnStyle = "bg-[#FEE2E2] border-[#EF4444] text-[#EF4444]";
                        else btnStyle = "bg-[#F9FAFB] border-[#E7E5E4] text-[#6B7280] opacity-50";
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleVocabAnswer(opt)}
                          disabled={selectedOption !== null}
                          className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {selectedOption !== null && isCorrect && <Check size={14} />}
                          {selectedOption !== null && isChosen && !isCorrect && <X size={14} />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-[#E7E5E4] flex items-center justify-between">
                  <button
                    onClick={() => setVocabIndex(prev => (prev - 1 + filteredVocab.length) % filteredVocab.length)}
                    className="text-xs font-semibold text-[#6B7280] hover:text-[#1F2937] flex items-center gap-1"
                  >
                    <ChevronLeft size={15} /> Sebelumnya
                  </button>
                  <button
                    onClick={nextVocab}
                    className="px-4 py-2 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-semibold transition-all flex items-center gap-1 shadow-2xs"
                  >
                    Selanjutnya <ChevronRight size={14} />
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {masterKanji.map(k => (
                <div
                  key={k.id}
                  className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#8B5CF6]">
                        {k.level} • {k.strokeCount} Goresan
                      </span>
                      <span className="text-xs text-[#6B7280]">Radikal: {k.radical}</span>
                    </div>

                    <div className="text-center py-3 bg-[#F9FAFB] rounded-xl border border-[#E7E5E4] mb-3">
                      <button
                        onClick={() => speakJa(k.character, audioSpeed)}
                        className="text-5xl font-jp font-bold text-[#1F2937] hover:text-[#D95F76] transition-colors"
                      >
                        {k.character}
                      </button>
                      <div className="text-sm font-bold text-[#1F2937] mt-1.5">{k.meaning}</div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#6B7280]">On&apos;yomi:</span>
                        <span className="font-jp font-bold text-[#8B5CF6]">{k.onyomi.join("、 ")}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#6B7280]">Kun&apos;yomi:</span>
                        <span className="font-jp font-bold text-[#3B82F6]">{k.kunyomi.join("、 ")}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#E7E5E4]">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">
                        Kosakata Gabungan
                      </div>
                      <div className="space-y-1">
                        {k.compounds.map((c, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs bg-[#F9FAFB] p-1.5 rounded-lg">
                            <span className="font-jp font-bold text-[#1F2937]">{c.word} ({c.reading})</span>
                            <span className="text-[#6B7280]">{c.meaning}</span>
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
                    className="mt-4 w-full py-1.5 rounded-xl bg-white border border-[#E7E5E4] hover:bg-[#FFF9F7] text-[#1F2937] hover:text-[#D95F76] text-xs font-semibold transition-all text-center"
                  >
                    Tandai Selesai (+10 XP)
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: TATA BAHASA */}
        {activeTab === "grammar" && (
          <motion.div
            key="tab-grammar"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {masterGrammar.map(g => (
                <div
                  key={g.id}
                  className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FEF9C3] text-[#F59E0B]">
                      {g.level}
                    </span>
                    <span className="text-xs text-[#6B7280]">Pola Kalimat</span>
                  </div>

                  <h3 className="text-base font-bold font-jp text-[#1F2937]">{g.pattern}</h3>
                  <div className="text-xs font-semibold text-[#22C55E] mb-2">{g.meaning}</div>

                  <div className="bg-[#F9FAFB] p-2.5 rounded-xl border border-[#E7E5E4] text-xs mb-2.5 font-mono text-[#1F2937]">
                    {g.formation}
                  </div>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-3">{g.explanation}</p>

                  <div className="space-y-1.5 pt-2.5 border-t border-[#E7E5E4]">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Contoh Penggunaan</div>
                    {g.examples.map((ex, i) => (
                      <div key={i} className="text-xs bg-[#F9FAFB] p-2 rounded-lg">
                        <div className="font-jp font-bold text-[#1F2937] flex items-center justify-between">
                          <span>{ex.jp}</span>
                          <button onClick={() => speakJa(ex.jp, audioSpeed)} className="text-[#6B7280] hover:text-[#D95F76]">
                            <Volume2 size={13} />
                          </button>
                        </div>
                        <div className="text-[#6B7280] mt-0.5">{ex.id}</div>
                      </div>
                    ))}
                  </div>

                  {g.commonMistakes && (
                    <div className="mt-2.5 p-2 rounded-lg bg-[#FEE2E2] text-[11px] text-[#EF4444]">
                      ⚠️ <span className="font-semibold">Perhatian:</span> {g.commonMistakes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: KALIMAT & MEMBACA */}
        {activeTab === "reading" && (
          <motion.div
            key="tab-reading"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-2xs max-w-xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#DBEAFE] text-[#3B82F6]">
                  Latihan Susun Urutan Kata (Word Ordering)
                </span>
                <span className="text-xs font-mono text-[#6B7280]">{currentSentence.level}</span>
              </div>

              <div className="text-center py-3">
                <div className="text-xs text-[#6B7280] mb-0.5">Terjemahkan ke Bahasa Jepang:</div>
                <h3 className="text-lg font-bold text-[#1F2937]">{currentSentence.meaning}</h3>
              </div>

              {/* Assembled Area */}
              <div className="min-h-14 p-3 rounded-xl bg-[#F9FAFB] border-2 border-dashed border-[#E7E5E4] flex flex-wrap items-center gap-1.5 mb-3">
                {userTokens.length === 0 ? (
                  <span className="text-xs text-[#6B7280] italic mx-auto">Ketuk kata di bawah untuk menyusun kalimat</span>
                ) : (
                  userTokens.map((tok, i) => (
                    <button
                      key={i}
                      onClick={() => removeToken(tok)}
                      className="px-2.5 py-1 rounded-lg bg-[#D95F76] text-white font-jp font-bold text-xs shadow-2xs hover:bg-[#c44f65]"
                    >
                      {tok} ×
                    </button>
                  ))
                )}
              </div>

              {/* Tokens */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mb-5">
                {availableTokens.map((tok, i) => (
                  <button
                    key={i}
                    onClick={() => addToken(tok)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-[#E7E5E4] hover:border-[#D95F76] font-jp font-bold text-xs text-[#1F2937] hover:text-[#D95F76] shadow-2xs transition-all"
                  >
                    {tok}
                  </button>
                ))}
              </div>

              {sentenceResult !== null && (
                <div
                  className={`p-3 rounded-xl mb-4 text-xs flex items-center gap-2 ${
                    sentenceResult
                      ? "bg-[#DCFCE7] text-[#22C55E] border border-[#22C55E]"
                      : "bg-[#FEE2E2] text-[#EF4444] border border-[#EF4444]"
                  }`}
                >
                  {sentenceResult ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
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
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F9FAFB] flex items-center gap-1"
                >
                  <RotateCcw size={13} /> Reset
                </button>
                <button
                  onClick={checkSentence}
                  className="px-5 py-2 rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-white text-xs font-semibold shadow-2xs flex items-center gap-1"
                >
                  Periksa <Check size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB: LISTENING ARENA */}
        {activeTab === "listening" && (
          <motion.div
            key="tab-listening"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-2xs max-w-xl mx-auto text-center">
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#DBEAFE] text-[#3B82F6]">
                Latihan Pemahaman Suara (Listening Dictation)
              </span>

              <div className="my-6">
                <button
                  onClick={() => speakJa(currentVocab.exampleJp, audioSpeed)}
                  className="w-18 h-18 rounded-2xl bg-[#D95F76] hover:bg-[#c44f65] text-white mx-auto flex items-center justify-center shadow-xs transition-all cursor-pointer"
                >
                  <Volume2 size={32} />
                </button>
                <p className="text-xs text-[#6B7280] mt-2">Dengarkan audio pada kecepatan {audioSpeed}x</p>
              </div>

              <div className="bg-[#F9FAFB] p-3.5 rounded-xl border border-[#E7E5E4] text-left mb-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#1F2937]">Transkrip Audio:</span>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-xs text-[#D95F76] font-semibold hover:underline"
                  >
                    {showTranscript ? "Sembunyikan" : "Tampilkan Transkrip"}
                  </button>
                </div>
                {showTranscript && (
                  <div className="pt-2 border-t border-[#E7E5E4]">
                    <div className="font-jp text-base font-bold text-[#1F2937]">{currentVocab.exampleJp}</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">{currentVocab.exampleId}</div>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  addXP(15, "Dojo");
                  nextVocab();
                }}
                className="w-full py-2.5 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-semibold shadow-2xs"
              >
                Lanjut ke Audio Berikutnya (+15 XP)
              </button>
            </div>
          </motion.div>
        )}

        {/* TAB: SRS REVIEW (SM-2) */}
        {activeTab === "srs" && (
          <motion.div
            key="tab-srs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            {dueItems.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-10 shadow-2xs text-center max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937]">Semua Review Hari Ini Selesai!</h3>
                <p className="text-xs text-[#6B7280] mt-1 mb-5">
                  Antrean Spaced Repetition (SM-2) Anda telah bersih. Kartu akan dijadwalkan ulang sesuai interval memori Anda.
                </p>
                <button
                  onClick={() => setActiveTab("chat")}
                  className="px-5 py-2 rounded-xl bg-[#D95F76] text-white text-xs font-semibold shadow-2xs"
                >
                  Mulai Latihan Chat Dojo
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-2xs text-center max-w-lg mx-auto">
                <div className="flex items-center justify-between text-xs text-[#6B7280] mb-3 font-mono">
                  <span>Kartu {srsIndex + 1} dari {dueItems.length}</span>
                  <span>Interval: {currentSrs?.interval} hari</span>
                </div>

                <div className="py-4">
                  <div className="text-xs font-mono text-[#D95F76] font-semibold">{currentSrs?.reading}</div>
                  <h2 className="text-4xl font-extrabold font-jp text-[#1F2937] mt-1 mb-2">
                    {currentSrs?.word}
                  </h2>
                  <button
                    onClick={() => speakJa(currentSrs.word, audioSpeed)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#FFF9F7] border border-[#FCE7EC] text-[#D95F76] text-xs font-semibold cursor-pointer"
                  >
                    <Volume2 size={13} /> Lafal
                  </button>
                </div>

                {!srsShowAnswer ? (
                  <button
                    onClick={() => setSrsShowAnswer(true)}
                    className="mt-4 w-full py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold shadow-2xs"
                  >
                    Tampilkan Jawaban
                  </button>
                ) : (
                  <div className="mt-4 pt-4 border-t border-[#E7E5E4]">
                    <div className="text-xl font-bold text-[#22C55E] mb-5">{currentSrs?.meaning}</div>

                    {/* Standard 4 Rating Buttons */}
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        onClick={() => handleSRSRate(0)}
                        className="py-2.5 px-2 rounded-xl bg-[#FEE2E2] hover:bg-rose-100 border border-[#FCA5A5] text-[#EF4444] text-xs font-bold transition-all"
                      >
                        Lupa (0)
                        <div className="text-[10px] font-normal text-[#EF4444] mt-0.5">Besok</div>
                      </button>
                      <button
                        onClick={() => handleSRSRate(3)}
                        className="py-2.5 px-2 rounded-xl bg-[#FED7AA] hover:bg-orange-100 border border-[#FDBA74] text-[#F97316] text-xs font-bold transition-all"
                      >
                        Sulit (3)
                        <div className="text-[10px] font-normal text-[#F97316] mt-0.5">+1-2 hr</div>
                      </button>
                      <button
                        onClick={() => handleSRSRate(4)}
                        className="py-2.5 px-2 rounded-xl bg-[#DBEAFE] hover:bg-blue-100 border border-[#93C5FD] text-[#3B82F6] text-xs font-bold transition-all"
                      >
                        Baik (4)
                        <div className="text-[10px] font-normal text-[#3B82F6] mt-0.5">+4-6 hr</div>
                      </button>
                      <button
                        onClick={() => handleSRSRate(5)}
                        className="py-2.5 px-2 rounded-xl bg-[#DCFCE7] hover:bg-green-100 border border-[#86EFAC] text-[#22C55E] text-xs font-bold transition-all"
                      >
                        Mudah (5)
                        <div className="text-[10px] font-normal text-[#22C55E] mt-0.5">+10+ hr</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* TAB: KAMUS KILAT */}
        {activeTab === "dictionary" && (
          <motion.div
            key="tab-dictionary"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs">
              <div className="relative mb-4">
                <Search className="absolute left-3.5 top-3 text-[#6B7280]" size={16} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Cari Kanji, Kana, Romaji, atau arti bahasa Indonesia..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E7E5E4] focus:outline-hidden focus:border-[#D95F76] text-xs text-[#1F2937]"
                />
              </div>

              <div className="space-y-2">
                {dictionaryResults.map(item => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-[#E7E5E4] bg-white hover:bg-[#FFF9F7] flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => speakJa(item.word, audioSpeed)}
                        className="w-9 h-9 rounded-xl bg-[#F9FAFB] border border-[#E7E5E4] flex items-center justify-center text-[#6B7280] hover:text-[#D95F76]"
                      >
                        <Volume2 size={16} />
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold font-jp text-[#1F2937]">{item.word}</span>
                          <span className="text-xs text-[#6B7280] font-mono">【{item.reading}】</span>
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#DCFCE7] font-bold text-[#22C55E]">
                            {item.level}
                          </span>
                        </div>
                        <div className="text-xs text-[#22C55E] font-medium mt-0.5">{item.meaning}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className="p-1.5 text-[#6B7280] hover:text-[#F59E0B]"
                    >
                      {bookmarks.includes(item.id) ? (
                        <BookmarkCheck size={17} className="text-[#F59E0B]" />
                      ) : (
                        <Bookmark size={17} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB: JLPT */}
        {activeTab === "jlpt" && (
          <motion.div
            key="tab-jlpt"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-2xs">
              <h3 className="text-base font-bold text-[#1F2937] mb-1">Simulasi Ujian JLPT (N5 - N3)</h3>
              <p className="text-xs text-[#6B7280] mb-4">
                Uji kemampuan menyeluruh mencakup Kosakata (Goi), Kanji (Moji), dan Tata Bahasa (Bunpou).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { level: "JLPT N5", time: "25 Menit", questions: 20, status: "Tersedia" },
                  { level: "JLPT N4", time: "30 Menit", questions: 25, status: "Tersedia" },
                  { level: "JLPT N3", time: "35 Menit", questions: 30, status: "Tersedia" },
                ].map((sim, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#E7E5E4] flex flex-col justify-between shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-base text-[#1F2937]">{sim.level}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#22C55E]">
                          {sim.status}
                        </span>
                      </div>
                      <div className="text-xs text-[#6B7280] space-y-1 mb-4">
                        <div>⏱️ Durasi: {sim.time}</div>
                        <div>📝 Soal: {sim.questions} butir</div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab("chat");
                        setLevelFilter(sim.level.split(" ")[1] as any);
                      }}
                      className="w-full py-2 rounded-xl bg-[#D95F76] hover:bg-[#c44f65] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-2xs"
                    >
                      Mulai Simulasi Chat <Play size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BarChartIcon() {
  return (
    <span className="w-5 h-5 rounded-lg bg-[#FCE7EC] text-[#D95F76] flex items-center justify-center font-bold text-xs">
      📊
    </span>
  );
}
