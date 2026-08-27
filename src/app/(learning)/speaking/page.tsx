"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2, RefreshCw, CheckCircle, ChevronRight, ChevronLeft, Headphones } from "lucide-react";

const speakingWords = [
  { jp: "おはようございます", reading: "Ohayou gozaimasu", meaning: "Selamat Pagi (Formal)", level: "N5" },
  { jp: "ありがとうございます", reading: "Arigatou gozaimasu", meaning: "Terima Kasih (Formal)", level: "N5" },
  { jp: "すみません", reading: "Sumimasen", meaning: "Permisi / Maaf", level: "N5" },
  { jp: "よろしくお願いします", reading: "Yoroshiku onegaishimasu", meaning: "Mohon bantuannya", level: "N5" },
  { jp: "どこですか？", reading: "Doko desu ka?", meaning: "Di mana?", level: "N5" },
  { jp: "いくらですか？", reading: "Ikura desu ka?", meaning: "Berapa harganya?", level: "N5" },
  { jp: "電車はどこですか？", reading: "Densha wa doko desu ka?", meaning: "Di mana keretanya?", level: "N4" },
  { jp: "今何時ですか？", reading: "Ima nanji desu ka?", meaning: "Sekarang jam berapa?", level: "N5" },
  { jp: "日本語が話せます", reading: "Nihongo ga hanasemasu", meaning: "Saya bisa berbicara bahasa Jepang", level: "N4" },
  { jp: "もう一度言ってください", reading: "Mou ichido itte kudasai", meaning: "Tolong ucapkan sekali lagi", level: "N5" },
];

export default function SpeakingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [result, setResult] = useState<"correct" | "close" | "wrong" | null>(null);
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef<any>(null);
  const word = speakingWords[currentIndex];

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setSupported(false);
    }
  }, []);

  const speak = useCallback(() => {
    const utterance = new SpeechSynthesisUtterance(word.jp);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [word.jp]);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognitionRef.current = recognition;
    recognition.onresult = (e: any) => {
      const heard = e.results[0][0].transcript;
      setTranscript(heard);
      // Simple comparison logic
      const target = word.jp.replace(/[。、！？]/g, "");
      const heardClean = heard.replace(/[。、！？\s]/g, "");
      if (heardClean === target.replace(/\s/g, "")) {
        setResult("correct");
      } else if (heardClean.length >= target.length * 0.6) {
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
  }, [word.jp]);

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % speakingWords.length);
    setTranscript("");
    setResult(null);
  };
  const prev = () => {
    setCurrentIndex((i) => (i - 1 + speakingWords.length) % speakingWords.length);
    setTranscript("");
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg">
            <Mic size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Latihan Berbicara</h1>
            <p className="text-[#6B7280] text-sm">スピーキング練習 — Ucapkan dan dengarkan</p>
          </div>
        </div>
      </motion.div>

      {!supported && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <p className="text-sm text-amber-800">Browser Anda tidak mendukung Speech Recognition. Gunakan <strong>Google Chrome</strong> untuk menggunakan fitur mikrofon.</p>
        </div>
      )}

      {/* Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl border border-[#E7E5E4] shadow-sm overflow-hidden"
      >
        {/* Progress */}
        <div className="h-1.5 bg-[#F3F4F6]">
          <div
            className="h-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / speakingWords.length) * 100}%` }}
          />
        </div>

        <div className="p-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEE2E2] text-rose-600 rounded-full text-xs font-bold">
            {currentIndex + 1} / {speakingWords.length} • {word.level}
          </div>

          <div>
            <p className="font-jp text-5xl font-bold text-[#1F2937] mb-3">{word.jp}</p>
            <p className="text-lg text-[#6B7280] italic">{word.reading}</p>
            <p className="text-sm text-[#9CA3AF] mt-1">{word.meaning}</p>
          </div>

          {/* Listen Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={speak}
            disabled={isSpeaking}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#374151] rounded-full font-semibold text-sm transition-all disabled:opacity-50"
          >
            <Volume2 size={18} className={isSpeaking ? "animate-pulse text-rose-500" : ""} />
            {isSpeaking ? "Sedang berbicara..." : "Dengarkan Contoh"}
          </motion.button>

          {/* Mic Button */}
          <div className="flex flex-col items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isListening ? stopListening : startListening}
              disabled={!supported}
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isListening
                  ? "bg-rose-500 shadow-rose-200"
                  : "bg-gradient-to-br from-rose-400 to-pink-600 shadow-pink-200 hover:shadow-pink-300"
              }`}
            >
              {isListening ? (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                  <MicOff size={28} className="text-white" />
                </motion.div>
              ) : (
                <Mic size={28} className="text-white" />
              )}
            </motion.button>
            <p className="text-sm text-[#6B7280]">
              {isListening ? "🔴 Sedang merekam... (klik untuk berhenti)" : "Klik untuk mulai berbicara"}
            </p>
          </div>

          {/* Result */}
          <AnimatePresence>
            {transcript && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-2xl p-5 border-2 ${
                  result === "correct" ? "bg-green-50 border-green-200" :
                  result === "close" ? "bg-amber-50 border-amber-200" :
                  "bg-red-50 border-red-200"
                }`}
              >
                <p className="text-xs text-[#6B7280] mb-2 font-semibold">Yang sistem dengar:</p>
                <p className="font-jp text-2xl font-bold text-[#1F2937]">{transcript}</p>
                <div className="mt-3 flex items-center gap-2">
                  {result === "correct" && <><CheckCircle className="text-green-500" size={18} /><span className="text-green-700 font-bold text-sm">Sempurna! 素晴らしい！</span></>}
                  {result === "close" && <><span className="text-2xl">👍</span><span className="text-amber-700 font-bold text-sm">Hampir! Coba lagi ya!</span></>}
                  {result === "wrong" && <><span className="text-2xl">💪</span><span className="text-red-700 font-bold text-sm">Belum tepat. Dengarkan contoh lagi!</span></>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <motion.button whileHover={{ scale: 1.02 }} onClick={prev} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E7E5E4] rounded-xl font-semibold text-sm text-[#374151] hover:bg-[#F9FAFB]">
          <ChevronLeft size={16} /> Sebelumnya
        </motion.button>
        <motion.button whileHover={{ scale: 1.02 }} onClick={next} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-400 to-pink-600 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg">
          Selanjutnya <ChevronRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}
