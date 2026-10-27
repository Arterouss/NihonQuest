"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Eraser, PenLine, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useAchievementStore } from "@/store/useAchievementStore";

const writingChars = [
  { char: "日", reading: "にち / ひ (Nichi / Hi)", meaning: "Hari / Matahari", strokes: 4, hint: "Kotak persegi panjang dengan garis di tengah" },
  { char: "月", reading: "げつ / つき (Getsu / Tsuki)", meaning: "Bulan / Satelit", strokes: 4, hint: "Huruf U dengan dua garis horizontal di dalam" },
  { char: "山", reading: "さん / やま (San / Yama)", meaning: "Gunung", strokes: 3, hint: "Tiga garis vertikal, tengah paling tinggi" },
  { char: "川", reading: "かわ / せん (Kawa / Sen)", meaning: "Sungai", strokes: 3, hint: "Tiga garis vertikal melengkung, tengah lebih panjang" },
  { char: "木", reading: "もく / き (Moku / Ki)", meaning: "Pohon / Kayu", strokes: 4, hint: "Salib dengan dua cabang di bawah" },
  { char: "火", reading: "か / ひ (Ka / Hi)", meaning: "Api", strokes: 4, hint: "Titik di atas, seperti nyala api" },
  { char: "水", reading: "すい / みず (Sui / Mizu)", meaning: "Air", strokes: 4, hint: "Garis tengah dengan cabang di kiri dan kanan" },
  { char: "土", reading: "ど / つち (Do / Tsuchi)", meaning: "Tanah", strokes: 3, hint: "Plus (+) dengan garis bawah lebih panjang" },
  { char: "人", reading: "じん / ひと (Jin / Hito)", meaning: "Orang / Manusia", strokes: 2, hint: "Dua garis seperti orang yang berjalan" },
  { char: "口", reading: "こう / くち (Kou / Kuchi)", meaning: "Mulut", strokes: 3, hint: "Persegi sederhana" },
  { char: "手", reading: "しゅ / て (Shu / Te)", meaning: "Tangan", strokes: 4, hint: "Tiga garis horizontal dengan vertikal dan cabang" },
  { char: "目", reading: "もく / め (Moku / Me)", meaning: "Mata", strokes: 5, hint: "Persegi panjang dengan dua garis horizontal di dalam" },
];

export default function WritingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const char = writingChars[currentIndex];

  const getCanvasPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const pos = getCanvasPos(e);
    lastPos.current = pos;
    setIsDrawing(true);
    setHasDrawn(true);
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;
    const pos = getCanvasPos(e);
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    lastPos.current = pos;
  };

  const { unlockAchievement } = useAchievementStore();

  const stopDraw = () => {
    if (isDrawing && hasDrawn) {
      unlockAchievement("seniman-kanji");
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      setHasDrawn(false);
    }
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % writingChars.length);
    clearCanvas();
    setShowHint(false);
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + writingChars.length) % writingChars.length);
    clearCanvas();
    setShowHint(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <PenLine size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Latihan Menulis</h1>
            <p className="text-[#6B7280] text-sm">書き方練習 — Tulis kanji di kanvas</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {/* Target character info */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl border border-[#E7E5E4] p-4 flex items-center gap-6 shadow-sm"
        >
          <div className="flex-shrink-0 text-center">
            <p className="font-jp text-8xl font-bold text-[#1F2937] leading-none">{char.char}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#9CA3AF] font-semibold mb-1">HURUF TARGET</p>
            <p className="text-base font-semibold text-[#374151]">{char.reading}</p>
            <p className="text-sm text-[#6B7280]">{char.meaning}</p>
            <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-[#F3F4F6] rounded-full">
              <PenLine size={12} className="text-indigo-500" />
              <span className="text-xs font-bold text-[#374151]">{char.strokes} coretan</span>
            </div>
            <div className="mt-2">
              <button onClick={() => setShowHint(!showHint)} className="flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700 font-semibold">
                <Info size={12} /> {showHint ? "Sembunyikan" : "Tampilkan Petunjuk"}
              </button>
              {showHint && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 p-2 bg-indigo-50 rounded-xl">
                  <p className="text-xs text-indigo-700">{char.hint}</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Canvas area — full width, tall */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg relative"
          style={{ background: "#111827", minHeight: "480px" }}
        >
          <p className="absolute top-4 left-0 right-0 text-center text-xs text-gray-400 font-semibold z-10 tracking-widest uppercase">Tulis di sini</p>

          {/* Grid guide lines */}
          <div className="absolute inset-0 pointer-events-none z-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "25% 25%"
          }} />
          {/* Center crosshair */}
          <div className="absolute inset-0 pointer-events-none z-0" style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.25) 1px, transparent 1px)",
            backgroundSize: "100% 100%",
            backgroundPosition: "50% 50%"
          }} />
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="w-full touch-none cursor-crosshair relative z-10"
            style={{ display: "block" }}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={stopDraw}
            onMouseLeave={stopDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={stopDraw}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <motion.button whileHover={{ scale: 1.02 }} onClick={clearCanvas} disabled={!hasDrawn}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E7E5E4] rounded-xl font-semibold text-sm text-[#6B7280] hover:bg-red-50 hover:border-red-200 hover:text-red-500 disabled:opacity-40 transition-all">
            <Eraser size={16} /> Hapus
          </motion.button>
        </div>

        {/* Progress */}
        <p className="text-sm text-[#9CA3AF] font-medium">{currentIndex + 1} / {writingChars.length}</p>

        <div className="flex gap-2">
          <motion.button whileHover={{ scale: 1.02 }} onClick={prev}
            className="flex items-center gap-1 px-4 py-2.5 bg-white border border-[#E7E5E4] rounded-xl font-semibold text-sm text-[#374151]">
            <ChevronLeft size={16} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.02 }} onClick={next}
            className="flex items-center gap-1 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-sm shadow-md">
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
        <p className="text-xs font-bold text-indigo-700 mb-1">💡 Tips Menulis Kanji</p>
        <p className="text-xs text-indigo-600">Secara umum, tulis dari <strong>kiri ke kanan</strong> dan dari <strong>atas ke bawah</strong>. Garis horizontal ditulis sebelum garis vertikal yang memotongnya.</p>
      </div>
    </div>
  );
}
