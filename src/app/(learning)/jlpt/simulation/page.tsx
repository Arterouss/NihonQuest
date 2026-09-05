"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, CheckCircle2, XCircle, AlertCircle, Trophy, ArrowRight, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useProgressStore } from "@/store/useProgressStore";

// Mock simulation questions (mix of vocab, kanji, grammar)
// In a real app, this could be randomized from the actual database
const SIMULATION_QUESTIONS = [
  { type: "kanji", question: "Apa arti dari kanji '水'?", options: ["Api", "Air", "Pohon", "Emas"], answer: "Air" },
  { type: "vocab", question: "Bahasa Jepangnya 'Buku' adalah...", options: ["ほん (Hon)", "ペン (Pen)", "つくえ (Tsukue)", "かばん (Kaban)"], answer: "ほん (Hon)" },
  { type: "grammar", question: "わたし ___ 学生です。 (Partikel apa yang tepat?)", options: ["が", "を", "は", "に"], answer: "は" },
  { type: "kanji", question: "Cara baca kanji '山' adalah...", options: ["Kawa", "Yama", "Sora", "Umi"], answer: "Yama" },
  { type: "vocab", question: "Apa arti dari 'たべる (Taberu)'?", options: ["Minum", "Tidur", "Makan", "Berjalan"], answer: "Makan" },
  { type: "grammar", question: "りんご ___ たべます。", options: ["を", "が", "に", "へ"], answer: "を" },
  { type: "vocab", question: "Cara baca 'ありがとう' adalah...", options: ["Konnichiwa", "Arigatou", "Sayounara", "Sumimasen"], answer: "Arigatou" },
  { type: "kanji", question: "Kanji untuk 'Satu' adalah...", options: ["二", "三", "一", "四"], answer: "一" },
  { type: "grammar", question: "きのう、映画を ___。", options: ["みます", "みました", "みない", "みません"], answer: "みました" },
  { type: "vocab", question: "Bahasa Jepangnya 'Kucing' adalah...", options: ["いぬ", "ねこ", "とり", "さかな"], answer: "ねこ" },
];

export default function BossFightPage() {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 menit
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const store = useProgressStore();

  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !finished) {
      handleFinish();
    }
  }, [started, finished, timeLeft]);

  const handleFinish = () => {
    setFinished(true);
    const finalScore = score + (selectedAnswer === SIMULATION_QUESTIONS[currentIdx]?.answer ? 1 : 0);
    const percentage = Math.round((finalScore / SIMULATION_QUESTIONS.length) * 100);
    
    if (percentage >= 60) {
      // Menang! Trigger confetti dan tambah XP besar
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
      try {
        const audio = new Audio('/sounds/success.mp3');
        audio.play().catch(() => {});
      } catch(e) {}
      store.addXP(1000, "JLPT N5", true);
    }
  };

  const handleAnswer = (opt: string) => {
    if (isChecking) return;
    setSelectedAnswer(opt);
    setIsChecking(true);

    const isCorrect = opt === SIMULATION_QUESTIONS[currentIdx].answer;
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      if (currentIdx < SIMULATION_QUESTIONS.length - 1) {
        setCurrentIdx(i => i + 1);
        setSelectedAnswer(null);
        setIsChecking(false);
      } else {
        handleFinish();
      }
    }, 1500); // 1.5 detik delay untuk melihat jawaban
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto h-[80vh] flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
          <ShieldAlert size={48} className="text-red-500" />
        </div>
        <div>
          <h1 className="text-4xl font-black text-[#1F2937] mb-2 uppercase tracking-tight">BOSS FIGHT: JLPT N5</h1>
          <p className="text-[#6B7280] text-lg max-w-md mx-auto">
            Ujian akhir untuk membuktikan kelayakanmu. Kamu punya <span className="font-bold text-red-500">15 Menit</span> untuk menjawab 10 soal campuran.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-left w-full max-w-sm">
          <h3 className="font-bold text-red-700 flex items-center gap-2 mb-2"><AlertCircle size={18}/> Syarat Kelulusan</h3>
          <ul className="text-sm text-red-600 list-disc list-inside space-y-1">
            <li>Minimal skor 60% (6 benar)</li>
            <li>Waktu maksimal 15 Menit</li>
            <li>Tanpa petunjuk atau kunci jawaban</li>
          </ul>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-4 bg-red-500 text-white font-black text-lg rounded-2xl shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 transition-all"
        >
          MULAI UJIAN SEKARANG
        </button>
      </div>
    );
  }

  if (finished) {
    const finalScore = score + (selectedAnswer === SIMULATION_QUESTIONS[currentIdx]?.answer && currentIdx === SIMULATION_QUESTIONS.length - 1 ? 1 : 0);
    const percentage = Math.round((finalScore / SIMULATION_QUESTIONS.length) * 100);
    const isPassed = percentage >= 60;

    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto py-12">
        <div className="bg-white rounded-3xl border border-[#E7E5E4] p-8 text-center shadow-xl">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isPassed ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
            {isPassed ? <Trophy size={48} /> : <XCircle size={48} />}
          </div>
          <h2 className="text-3xl font-black text-[#1F2937] mb-2">
            {isPassed ? "MISI SELESAI!" : "MISI GAGAL"}
          </h2>
          <p className="text-[#6B7280] mb-8">
            {isPassed ? "Kamu telah berhasil menaklukkan ujian JLPT N5." : "Skormu belum cukup untuk lulus. Teruslah berlatih!"}
          </p>
          
          <div className="flex justify-center gap-8 mb-8">
            <div>
              <p className="text-sm font-bold text-[#6B7280] uppercase tracking-wide">SKOR AKHIR</p>
              <p className={`text-5xl font-black ${isPassed ? 'text-green-500' : 'text-red-500'}`}>{percentage}%</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#6B7280] uppercase tracking-wide">BENAR</p>
              <p className="text-5xl font-black text-[#1F2937]">{finalScore} <span className="text-2xl text-gray-400">/ 10</span></p>
            </div>
          </div>

          {isPassed && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-xl font-bold mb-8 flex items-center justify-center gap-2">
              <Zap size={20} /> +1000 XP INSTAN!
            </div>
          )}

          <div className="flex gap-4">
            <Link href="/dashboard" className="flex-1 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Kembali ke Base
            </Link>
            {!isPassed && (
              <button onClick={() => window.location.reload()} className="flex-1 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors">
                Coba Lagi
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const q = SIMULATION_QUESTIONS[currentIdx];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-[#E7E5E4] shadow-sm">
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-red-100 text-red-600 font-bold rounded-lg text-sm">
            Soal {currentIdx + 1} / {SIMULATION_QUESTIONS.length}
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{q.type}</span>
        </div>
        <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-[#1F2937]'}`}>
          <Timer size={20} /> {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="bg-red-500 h-2 transition-all duration-300" style={{ width: `${((currentIdx) / SIMULATION_QUESTIONS.length) * 100}%` }} />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-8 rounded-3xl border border-[#E7E5E4] shadow-sm min-h-[400px] flex flex-col"
        >
          <h2 className="text-2xl md:text-3xl font-jp font-bold text-[#1F2937] leading-relaxed mb-8 flex-1">
            {q.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
            {q.options.map((opt) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === q.answer;
              
              let btnClass = "bg-white border-[#E7E5E4] text-[#1F2937] hover:border-gray-400";
              
              if (isChecking) {
                if (isCorrect) {
                  btnClass = "bg-green-50 border-green-500 text-green-700 ring-2 ring-green-500/20";
                } else if (isSelected && !isCorrect) {
                  btnClass = "bg-red-50 border-red-500 text-red-700 ring-2 ring-red-500/20";
                } else {
                  btnClass = "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
                }
              } else if (isSelected) {
                btnClass = "bg-gray-100 border-gray-400 text-[#1F2937]";
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  disabled={isChecking}
                  className={`p-4 rounded-xl border-2 text-left font-semibold text-lg font-jp transition-all flex justify-between items-center ${btnClass}`}
                >
                  {opt}
                  {isChecking && isCorrect && <CheckCircle2 size={20} className="text-green-500" />}
                  {isChecking && isSelected && !isCorrect && <XCircle size={20} className="text-red-500" />}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
