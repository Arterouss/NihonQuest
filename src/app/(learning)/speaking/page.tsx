"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, MicOff, Volume2, RefreshCw, CheckCircle,
  ChevronRight, ChevronLeft, Sparkles, Trophy, Award,
  Flame, CheckCircle2, AlertCircle, HelpCircle
} from "lucide-react";
import { useAchievementStore } from "@/store/useAchievementStore";
import { useProgressStore } from "@/store/useProgressStore";

export interface SpeakingPhrase {
  id: string;
  jp: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  category: string;
}

const speakingData: SpeakingPhrase[] = [
  // ==========================================
  // JLPT N5 — Salam & Percakapan Dasar
  // ==========================================
  { id: "s-n5-1", jp: "おはようございます", reading: "お茶ようございます", romaji: "Ohayou gozaimasu", meaning: "Selamat Pagi (Sopan/Formal)", level: "N5", category: "Salam" },
  { id: "s-n5-2", jp: "こんにちは", reading: "こんにちは", romaji: "Konnichiwa", meaning: "Halo / Selamat Siang", level: "N5", category: "Salam" },
  { id: "s-n5-3", jp: "こんばんは", reading: "こんばんは", romaji: "Konbanwa", meaning: "Selamat Malam", level: "N5", category: "Salam" },
  { id: "s-n5-4", jp: "ありがとうございます", reading: "ありがとうございます", romaji: "Arigatou gozaimasu", meaning: "Terima Kasih Banyak (Formal)", level: "N5", category: "Kesopanan" },
  { id: "s-n5-5", jp: "すみません", reading: "すみません", romaji: "Sumimasen", meaning: "Permisi / Maaf", level: "N5", category: "Kesopanan" },
  { id: "s-n5-6", jp: "よろしくお願いします", reading: "よろしくおねがいします", romaji: "Yoroshiku onegaishimasu", meaning: "Mohon bantuannya / Senang bekerja sama", level: "N5", category: "Kesopanan" },
  { id: "s-n5-7", jp: "いただきます", reading: "いただきます", romaji: "Itadakimasu", meaning: "Selamat makan (Ucapan sebelum makan)", level: "N5", category: "Budaya" },
  { id: "s-n5-8", jp: "ごちそうさまでした", reading: "ごちそうさまでした", romaji: "Gochisousama deshita", meaning: "Terima kasih atas hidangannya (Setelah makan)", level: "N5", category: "Budaya" },
  { id: "s-n5-9", jp: "おやすみなさい", reading: "おやすみなさい", romaji: "Oyasuminasai", meaning: "Selamat beristirahat / tidur", level: "N5", category: "Salam" },
  { id: "s-n5-10", jp: "トイレはどこですか？", reading: "といれ は どこ です か", romaji: "Toire wa doko desu ka?", meaning: "Di mana toiletnya?", level: "N5", category: "Pertanyaan" },
  { id: "s-n5-11", jp: "いくらですか？", reading: "いくら です か", romaji: "Ikura desu ka?", meaning: "Berapa harganya?", level: "N5", category: "Belanja" },
  { id: "s-n5-12", jp: "これをください", reading: "これ を ください", romaji: "Kore o kudasai", meaning: "Tolong berikan yang ini", level: "N5", category: "Belanja" },
  { id: "s-n5-13", jp: "今何時ですか？", reading: "いま なんじ です か", romaji: "Ima nanji desu ka?", meaning: "Sekarang jam berapa?", level: "N5", category: "Pertanyaan" },
  { id: "s-n5-14", jp: "もう一度言ってください", reading: "もう いちど いって ください", romaji: "Mou ichido itte kudasai", meaning: "Tolong katakan sekali lagi", level: "N5", category: "Permintaan" },
  { id: "s-n5-15", jp: "わかりました", reading: "わかりました", romaji: "Wakarimashita", meaning: "Saya mengerti / paham", level: "N5", category: "Respons" },
  { id: "s-n5-16", jp: "わかりません", reading: "わかりません", romaji: "Wakarimasen", meaning: "Saya tidak mengerti", level: "N5", category: "Respons" },
  { id: "s-n5-17", jp: "はじめまして", reading: "はじめまして", romaji: "Hajimemashite", meaning: "Senang berkenalan dengan Anda", level: "N5", category: "Perkenalan" },
  { id: "s-n5-18", jp: "元気ですか？", reading: "げんき です か", romaji: "Genki desu ka?", meaning: "Apakah Anda sehat / Apa kabar?", level: "N5", category: "Salam" },

  // ==========================================
  // JLPT N4 — Perjalanan, Kegiatan & Belanja
  // ==========================================
  { id: "s-n4-1", jp: "電車はどこですか？", reading: "でんしゃ は どこ です か", romaji: "Densha wa doko desu ka?", meaning: "Di mana stasiun keretanya?", level: "N4", category: "Transportasi" },
  { id: "s-n4-2", jp: "日本語が少し話せます", reading: "にほんご が すこし はなせます", romaji: "Nihongo ga sukoshi hanasemasu", meaning: "Saya bisa berbicara sedikit bahasa Jepang", level: "N4", category: "Kemampuan" },
  { id: "s-n4-3", jp: "写真を撮ってもいいですか？", reading: "しゃしん を とっても いい です か", romaji: "Shashin o totte mo ii desu ka?", meaning: "Bolehkah saya mengambil foto?", level: "N4", category: "Izin" },
  { id: "s-n4-4", jp: "メニューを見せてください", reading: "めにゅー を みせて ください", romaji: "Menyuu o misete kudasai", meaning: "Tolong perlihatkan buku menunya", level: "N4", category: "Restoran" },
  { id: "s-n4-5", jp: "おすすめは何ですか？", reading: "おすすめ は なん です か", romaji: "Osusume wa nan desu ka?", meaning: "Menu apa yang direkomendasikan?", level: "N4", category: "Restoran" },
  { id: "s-n4-6", jp: "お会計をお願いします", reading: "おかいけい を おねがいします", romaji: "Okaikei o onegaishimasu", meaning: "Minta nota / tagihannya tolong", level: "N4", category: "Restoran" },
  { id: "s-n4-7", jp: "日本へ行ったことがあります", reading: "にほん え いった こと が あります", romaji: "Nihon e itta koto ga arimasu", meaning: "Saya pernah pergi ke Jepang", level: "N4", category: "Pengalaman" },
  { id: "s-n4-8", jp: "ゆっくり話してください", reading: "ゆっくり はなして ください", romaji: "Yukkuri hanashite kudasai", meaning: "Tolong bicara lebih pelan", level: "N4", category: "Permintaan" },
  { id: "s-n4-9", jp: "手伝いましょうか？", reading: "てつだいましょう か", romaji: "Tetsudaimashou ka?", meaning: "Bolehkah saya bantu?", level: "N4", category: "Tawaran" },
  { id: "s-n4-10", jp: "気をつけて帰ってください", reading: "き を つけて かえって ください", romaji: "Ki o tsukete kaette kudasai", meaning: "Hati-hati di jalan pulang ya", level: "N4", category: "Perpisahan" },
  { id: "s-n4-11", jp: "お疲れ様でした", reading: "おつかれさまでした", romaji: "Otsukaresama deshita", meaning: "Terima kasih atas kerja kerasnya hari ini", level: "N4", category: "Tempat Kerja" },
  { id: "s-n4-12", jp: "頭が痛いので病院へ行きます", reading: "あたま が いたい ので びょういん え いきます", romaji: "Atama ga itai node byouin e ikimasu", meaning: "Karena kepala saya sakit, saya pergi ke dokter", level: "N4", category: "Kesehatan" },

  // ==========================================
  // JLPT N3 — Pendapat & Hubungan Kerja
  // ==========================================
  { id: "s-n3-1", jp: "どう思いますか？", reading: "どう おもいます か", romaji: "Dou omoimasu ka?", meaning: "Bagaimana menurut pendapat Anda?", level: "N3", category: "Diskusi" },
  { id: "s-n3-2", jp: "確かにその通りですね", reading: "たしかに その とおり です ね", romaji: "Tashika ni sono toori desu ne", meaning: "Memang benar persis seperti itu", level: "N3", category: "Persetujuan" },
  { id: "s-n3-3", jp: "申し訳ございません", reading: "もうしわけ ございません", romaji: "Moushiwake gozaimasen", meaning: "Saya mohon maaf yang sebesar-besarnya (Formal)", level: "N3", category: "Permintaan Maaf" },
  { id: "s-n3-4", jp: "間に合わないかもしれません", reading: "まにあわない かもしれません", romaji: "Maniawanai kamoshiremasen", meaning: "Mungkin saja saya tidak akan sempat", level: "N3", category: "Situasi" },
  { id: "s-n3-5", jp: "自分で確認してみます", reading: "じぶん で かくにん してみます", romaji: "Jibun de kakunin shitemimasu", meaning: "Saya akan coba periksa sendiri", level: "N3", category: "Tindakan" },
  { id: "s-n3-6", jp: "予定を変更してもよろしいですか？", reading: "よてい を へんこう しても よろしい です か", romaji: "Yotei o henkou shitemo yoroshii desu ka?", meaning: "Apakah diperbolehkan jika saya mengubah jadwal?", level: "N3", category: "Jadwal" },
  { id: "s-n3-7", jp: "おっしゃる意味がよく分かります", reading: "おっしゃる いみ が よく わかります", romaji: "Ossharu imi ga yoku wakarimasu", meaning: "Saya sangat memahami maksud yang Anda sampaikan", level: "N3", category: "Komunikasi" },
  { id: "s-n3-8", jp: "締め切りに間に合わせます", reading: "しめきり に まにあわせます", romaji: "Shimekiri ni maniawasemasu", meaning: "Saya akan selesaikan tepat sebelum tenggat waktu", level: "N3", category: "Komitmen" },
  { id: "s-n3-9", jp: "念のため確認させてください", reading: "ねん の ため かくにん させて ください", romaji: "Nen no tame kakunin sasete kudasai", meaning: "Izinkan saya mengonfirmasi ulang untuk memastikan", level: "N3", category: "Bisnis" },
  { id: "s-n3-10", jp: "ご協力ありがとうございます", reading: "ごきょうりょく あいがとう ございます", romaji: "Gokyouryoku arigatou gozaimasu", meaning: "Terima kasih banyak atas kerja sama Anda", level: "N3", category: "Apresiasi" },

  // ==========================================
  // JLPT N2 — Bahasa Bisnis & Nuansa Halus
  // ==========================================
  { id: "s-n2-1", jp: "ご検討のほどよろしくお願いいたします", reading: "ごけんとう の ほど よろしく おねがい いたします", romaji: "Gokentou no hodo yoroshiku onegai itashimasu", meaning: "Mohon untuk dapat dipertimbangkan dengan baik", level: "N2", category: "Email / Bisnis" },
  { id: "s-n2-2", jp: "恐れ入りますが、もう少々お待ちいただけますか", reading: "おそれいります が、もう しょうしょう おまち いただけます か", romaji: "Osoreirimasu ga, mou shoushou omachi itadakemasu ka", meaning: "Mohon maaf yang sebesar-besarnya, sudikah Anda menunggu sebentar lagi?", level: "N2", category: "Layanan Pelanggan" },
  { id: "s-n2-3", jp: "お忙しいところ大変恐縮です", reading: "おいそがしい ところ たいへん きょうしゅく です", romaji: "Oisogashii tokoro taihen kyoushuku desu", meaning: "Mohon maaf telah merepotkan di tengah kesibukan Anda", level: "N2", category: "Etika Bisnis" },
  { id: "s-n2-4", jp: "今後の課題として前向きに検討します", reading: "こんご の かだい として まえむき に けんとう します", romaji: "Kongo no kadai toshite maemuki ni kentou shimasu", meaning: "Kami akan mempertimbangkannya secara positif untuk agenda mendatang", level: "N2", category: "Negosiasi" },
  { id: "s-n2-5", jp: "詳細につきましては後ほどご案内いたします", reading: "しょうさい に つきまして は のちほど ごあんない いたします", romaji: "Shousai ni tsukimashite wa nochihodo goannai itashimasu", meaning: "Mengenai rincian detailnya akan segera kami kabari nanti", level: "N2", category: "Informasi" },
  { id: "s-n2-6", jp: "ご期待に添えるよう尽力いたします", reading: "ごきたい に そえる よう じんりょく いたします", romaji: "Gokitai ni soeru you jinryoku itashimasu", meaning: "Kami akan mengerahkan segenap tenaga agar memenuhi harapan Anda", level: "N2", category: "Dedikasi" },
  { id: "s-n2-7", jp: "心より感謝申し上げます", reading: "こころ より かんしゃ もうしあげます", romaji: "Kokoro yori kansha moushiagemasu", meaning: "Dari lubuk hati yang terdalam kami haturkan terima kasih", level: "N2", category: "Ucapan Formal" },
  { id: "s-n2-8", jp: "諸事情により計画を変更せざるを得ません", reading: "しょじじょう に より けいかく を へんこう せざる を えません", romaji: "Shojijou ni yori keikaku o henkou sezaru o emasen", meaning: "Karena berbagai pertimbangan situasi, kami terpaksa mengubah rencana", level: "N2", category: "Keadaan Mendesak" },

  // ==========================================
  // JLPT N1 — Keigo Tingkat Tinggi & Diplomasi
  // ==========================================
  { id: "s-n1-1", jp: "平素は格別のご高配を賜り厚く御礼申し上げます", reading: "へいそ は かくべつ の ごこうはい を たまわり あつく おんれい もうしあげます", romaji: "Heiso wa kakubetsu no gokouhai o tamawari atsuku onrei moushiagemasu", meaning: "Kami mengucapkan terima kasih mendalam atas perhatian dan kemitraan istimewa yang senantiasa terjalin", level: "N1", category: "Surat Resmi" },
  { id: "s-n1-2", jp: "誠に遺憾ながらご意向に沿いかねます", reading: "まことに いかん ながら ごいこう に そいかねます", romaji: "Makoto ni ikan nagara goikou ni soikanemasu", meaning: "Dengan sangat menyesal kami sampaikan bahwa kami tidak dapat memenuhi keinginan Anda", level: "N1", category: "Penolakan Halus" },
  { id: "s-n1-3", jp: "何卒ご容赦いただけますようお願い申し上げます", reading: "なにとぞ ごようしゃ いただけます よう おねがい もうしあげます", romaji: "Nanitozo goyousha itadakemasu you onegai moushiagemasu", meaning: "Kami memohon dengan sangat agar Anda berkenan memaklumi dan memaafkan hal ini", level: "N1", category: "Permohonan Maaf" },
  { id: "s-n1-4", jp: "万全を期して取り組んでまいる所存でございます", reading: "ばんぜん を きして とりくんで まいる しょぞん で ございます", romaji: "Banzen o kishite torikunde mairu shozon de gozaimasu", meaning: "Kami bertekad sungguh-sungguh untuk menangani tugas ini secara sempurna tanpa celah", level: "N1", category: "Tekad Profesional" },
  { id: "s-n1-5", jp: "忌憚のないご意見を賜りたく存じます", reading: "きたん の ない ごいけん を たまわりたく ぞんじます", romaji: "Kitan no nai goiken o tamawaritaku zonjimasu", meaning: "Kami sangat mengharapkan masukan dan pandangan Anda yang jujur tanpa rasa sungkan", level: "N1", category: "Konsultasi" },
  { id: "s-n1-6", jp: "重ね重ねご迷惑をおかけしましたことをお詫び申し上げます", reading: "かさねがさね ごめいわく を おかけ しました こと を おわび もうしあげます", romaji: "Kasanegasane gomeiwaku o okake shimashita koto o owabi moushiagemasu", meaning: "Kami memohon maaf setulus-tulusnya atas rangkaian kerepotan yang telah kami timbulkan", level: "N1", category: "Permintaan Maaf Resmi" },
  { id: "s-n1-7", jp: "ご不明な点があれば何なりとお申し付けください", reading: "ごふめい な てん が あれば なんなり と おもうしつけ ください", romaji: "Gofumei na ten ga areba nannari to omoushitsuke kudasai", meaning: "Jika ada hal yang kurang jelas, mohon jangan ragu untuk menyampaikan apa pun kepada kami", level: "N1", category: "Layanan Tertinggi" },
];

export default function SpeakingPage() {
  const [activeLevel, setActiveLevel] = useState<"Semua" | "N5" | "N4" | "N3" | "N2" | "N1">("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [result, setResult] = useState<"correct" | "close" | "wrong" | null>(null);
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  const { unlockAchievement } = useAchievementStore();
  const { addXP } = useProgressStore();

  // Filter phrases based on level
  const filteredPhrases = useMemo(() => {
    if (activeLevel === "Semua") return speakingData;
    return speakingData.filter(p => p.level === activeLevel);
  }, [activeLevel]);

  // Current phrase
  const word = filteredPhrases[currentIndex % filteredPhrases.length] || speakingData[0];

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setSupported(false);
    }
  }, []);

  // Reset index when changing level filter
  const changeLevel = (lvl: "Semua" | "N5" | "N4" | "N3" | "N2" | "N1") => {
    setActiveLevel(lvl);
    setCurrentIndex(0);
    setTranscript("");
    setResult(null);
  };

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word.jp);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [word.jp]);

  const startListening = useCallback(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Browser Anda tidak mendukung fitur rekam suara (Speech Recognition). Gunakan Google Chrome.");
      return;
    }
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onresult = (e: any) => {
      const heard = e.results[0][0].transcript;
      setTranscript(heard);

      // Clean punctuation
      const targetKanji = word.jp.replace(/[。、！？\s]/g, "");
      const targetKana = word.reading.replace(/[。、！？\s]/g, "");
      const heardClean = heard.replace(/[。、！？\s]/g, "");

      // Compare against target kanji OR kana
      const isExactMatch = heardClean === targetKanji || heardClean === targetKana;
      const similarityLength = Math.max(heardClean.length, targetKanji.length);
      
      let commonCharCount = 0;
      for (const char of heardClean) {
        if (targetKanji.includes(char) || targetKana.includes(char)) {
          commonCharCount++;
        }
      }
      const matchRatio = similarityLength > 0 ? commonCharCount / similarityLength : 0;

      if (isExactMatch || matchRatio >= 0.7) {
        setResult("correct");
        addXP(15, "Latihan Bicara");
        unlockAchievement("suara-emas");
      } else if (matchRatio >= 0.4) {
        setResult("close");
      } else {
        setResult("wrong");
      }
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
    setIsListening(true);
    setTranscript("");
    setResult(null);
  }, [word.jp, word.reading, addXP, unlockAchievement]);

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const next = () => {
    setCurrentIndex(i => (i + 1) % filteredPhrases.length);
    setTranscript("");
    setResult(null);
  };

  const prev = () => {
    setCurrentIndex(i => (i - 1 + filteredPhrases.length) % filteredPhrases.length);
    setTranscript("");
    setResult(null);
  };

  const levels: ("Semua" | "N5" | "N4" | "N3" | "N2" | "N1")[] = ["Semua", "N5", "N4", "N3", "N2", "N1"];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-[#D95F76] flex items-center justify-center shadow-xs">
            <Mic size={22} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-[#1F2937]">Latihan Berbicara</h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FCE7EC] text-[#D95F76] font-semibold">
                N5 — N1
              </span>
            </div>
            <p className="text-[#6B7280] text-sm">スピーキング練習 — Latih pelafalan frasa percakapan, bisnis, dan keigo resmi</p>
          </div>
        </div>

        {/* Level Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mt-4 no-scrollbar">
          {levels.map(lvl => {
            const count = lvl === "Semua" ? speakingData.length : speakingData.filter(p => p.level === lvl).length;
            const isActive = activeLevel === lvl;
            return (
              <button
                key={lvl}
                onClick={() => changeLevel(lvl)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#D95F76] text-white shadow-2xs"
                    : "bg-white text-[#6B7280] border border-[#E7E5E4] hover:bg-[#FFF9F7] hover:text-[#1F2937]"
                }`}
              >
                <span>{lvl}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#6B7280]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {!supported && (
        <div className="bg-[#FEF9C3] border border-[#FDE047] rounded-2xl p-4 flex items-center gap-3 text-xs text-[#854D0E]">
          <span className="text-xl">⚠️</span>
          <p>Browser Anda tidak mendukung Speech Recognition secara penuh. Disarankan menggunakan <strong>Google Chrome</strong> untuk hasil rekaman yang optimal.</p>
        </div>
      )}

      {/* Main Speaking Practice Card */}
      <motion.div
        key={`${activeLevel}-${currentIndex}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] shadow-xs overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="h-1 bg-[#F3F4F6]">
          <div
            className="h-full bg-[#D95F76] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredPhrases.length) * 100}%` }}
          />
        </div>

        <div className="p-6 sm:p-8 text-center space-y-5">
          {/* Badge Level & Category */}
          <div className="flex items-center justify-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FCE7EC] text-[#D95F76]">
              {word.level}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#6B7280]">
              {word.category}
            </span>
            <span className="text-xs text-[#9CA3AF] font-mono">
              {currentIndex + 1} / {filteredPhrases.length}
            </span>
          </div>

          {/* Japanese Phrase */}
          <div className="space-y-1">
            <p className="font-jp text-3xl sm:text-4xl font-bold text-[#1F2937] leading-relaxed">
              {word.jp}
            </p>
            <p className="text-sm font-jp text-[#6B7280]">
              {word.reading}
            </p>
            <p className="text-xs font-mono text-[#D95F76] font-medium">
              {word.romaji}
            </p>
            <p className="text-sm font-medium text-[#4B5563] pt-1">
              &ldquo;{word.meaning}&rdquo;
            </p>
          </div>

          {/* Listen Button */}
          <button
            onClick={speak}
            disabled={isSpeaking}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FFF9F7] border border-[#FCE7EC] text-[#D95F76] hover:bg-[#FCE7EC] text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-2xs"
          >
            <Volume2 size={16} className={isSpeaking ? "animate-pulse text-[#D95F76]" : ""} />
            {isSpeaking ? "Sedang berbicara..." : "Dengarkan Contoh Lafal"}
          </button>

          {/* Mic Button */}
          <div className="flex flex-col items-center gap-2.5 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isListening ? stopListening : startListening}
              disabled={!supported}
              className={`w-18 h-18 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
                isListening
                  ? "bg-[#EF4444] shadow-rose-200"
                  : "bg-[#D95F76] hover:bg-[#c44f65] shadow-pink-200"
              }`}
            >
              {isListening ? (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                  <MicOff size={26} className="text-white" />
                </motion.div>
              ) : (
                <Mic size={26} className="text-white" />
              )}
            </motion.button>
            <p className="text-xs text-[#6B7280]">
              {isListening ? "🔴 Sedang merekam suara Anda... (klik untuk selesai)" : "Ketuk mikrofon lalu ucapkan kalimat di atas"}
            </p>
          </div>

          {/* Result Feedback Box */}
          <AnimatePresence>
            {transcript && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-xl p-4 border text-left max-w-lg mx-auto ${
                  result === "correct"
                    ? "bg-[#DCFCE7] border-[#22C55E]"
                    : result === "close"
                    ? "bg-[#FEF9C3] border-[#F59E0B]"
                    : "bg-[#FEE2E2] border-[#EF4444]"
                }`}
              >
                <p className="text-[11px] font-semibold text-[#6B7280] mb-1">Yang terdeteksi dari mikrofon:</p>
                <p className="font-jp text-lg font-bold text-[#1F2937]">{transcript}</p>
                <div className="mt-2.5 flex items-center gap-2">
                  {result === "correct" && (
                    <>
                      <CheckCircle2 className="text-[#22C55E]" size={16} />
                      <span className="text-[#15803D] font-bold text-xs">Sempurna! 素晴らしい！ (+15 XP)</span>
                    </>
                  )}
                  {result === "close" && (
                    <>
                      <span className="text-base">👍</span>
                      <span className="text-[#A16207] font-bold text-xs">Hampir tepat! Perhatikan intonasi dan coba sekali lagi.</span>
                    </>
                  )}
                  {result === "wrong" && (
                    <>
                      <span className="text-base">💪</span>
                      <span className="text-[#B91C1C] font-bold text-xs">Belum sesuai. Dengarkan contoh lafalnya lagi!</span>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center">
        <button
          onClick={prev}
          className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E7E5E4] rounded-xl font-semibold text-xs text-[#374151] hover:bg-[#FFF9F7] transition-all shadow-2xs"
        >
          <ChevronLeft size={15} /> Sebelumnya
        </button>
        <button
          onClick={next}
          className="flex items-center gap-1.5 px-5 py-2 bg-[#D95F76] hover:bg-[#c44f65] text-white rounded-xl font-semibold text-xs transition-all shadow-xs"
        >
          Selanjutnya <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
