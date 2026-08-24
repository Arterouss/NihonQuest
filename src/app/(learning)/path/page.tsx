"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Map, ChevronRight, Lock, CheckCircle2, BookOpen } from "lucide-react";

const pathNodes = [
  { id: 1, label: "Hiragana Dasar", icon: "あ", href: "/hiragana", status: "completed", color: "#22C55E", bg: "#DCFCE7" },
  { id: 2, label: "Katakana Dasar", icon: "ア", href: "/katakana", status: "completed", color: "#22C55E", bg: "#DCFCE7" },
  { id: 3, label: "Kosakata N5", icon: "語", href: "/vocabulary", status: "active", color: "#D95F76", bg: "#FCE7EC" },
  { id: 4, label: "Tata Bahasa N5", icon: "文", href: "/grammar", status: "active", color: "#D95F76", bg: "#FCE7EC" },
  { id: 5, label: "Kanji N5", icon: "漢", href: "/kanji", status: "locked", color: "#6B7280", bg: "#F3F4F6" },
  { id: 6, label: "Ujian N5", icon: "🎯", href: "/jlpt/n5", status: "locked", color: "#6B7280", bg: "#F3F4F6" },
  { id: 7, label: "Kosakata N4", icon: "語", href: "/vocabulary?jlpt=N4", status: "locked", color: "#6B7280", bg: "#F3F4F6" },
  { id: 8, label: "Tata Bahasa N4", icon: "文", href: "/grammar?jlpt=N4", status: "locked", color: "#6B7280", bg: "#F3F4F6" },
  { id: 9, label: "Kanji N4", icon: "漢", href: "/kanji?jlpt=N4", status: "locked", color: "#6B7280", bg: "#F3F4F6" },
  { id: 10, label: "Ujian N4", icon: "🎯", href: "/jlpt/n4", status: "locked", color: "#6B7280", bg: "#F3F4F6" },
];

export default function PathPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl sakura-gradient flex items-center justify-center">
            <Map size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Jalur Belajar</h1>
            <p className="text-[#6B7280] text-sm">Ikuti jalur terstruktur dari N5 hingga N1</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-[#1F2937]">Progress Keseluruhan</span>
            <span className="font-bold text-[#D95F76]">2 / 10</span>
          </div>
          <div className="w-full bg-[#FCE7EC] rounded-full h-2.5">
            <div className="h-2.5 rounded-full sakura-gradient" style={{ width: "20%" }} />
          </div>
        </div>
      </motion.div>

      {/* Path Nodes */}
      <div className="relative">
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#E7E5E4]" />

        <div className="space-y-4">
          {pathNodes.map((node, i) => {
            const isLocked = node.status === "locked";
            const isCompleted = node.status === "completed";
            const isActive = node.status === "active";

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={isLocked ? "#" : node.href}
                  className={`flex items-center gap-4 pl-4 pr-5 py-4 bg-white rounded-2xl border-2 transition-all ${
                    isLocked
                      ? "border-[#E7E5E4] opacity-60 cursor-not-allowed"
                      : isCompleted
                      ? "border-[#22C55E]"
                      : "border-[#D95F76] shadow-md"
                  }`}
                >
                  {/* Node circle */}
                  <div
                    className="relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2"
                    style={{
                      backgroundColor: node.bg,
                      borderColor: node.color,
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={16} style={{ color: node.color }} />
                    ) : isLocked ? (
                      <Lock size={12} style={{ color: node.color }} />
                    ) : (
                      <div
                        className="w-3 h-3 rounded-full animate-pulse-soft"
                        style={{ backgroundColor: node.color }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-jp font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: node.bg, color: node.color }}
                  >
                    {node.icon}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="font-bold text-sm"
                      style={{ color: isLocked ? "#6B7280" : "#1F2937" }}
                    >
                      {node.label}
                    </h3>
                    <p className="text-xs" style={{ color: node.color }}>
                      {isCompleted ? "✓ Selesai" : isActive ? "Sedang dipelajari" : "🔒 Terkunci"}
                    </p>
                  </div>

                  {!isLocked && (
                    <ChevronRight size={16} style={{ color: node.color }} />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
