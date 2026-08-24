"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, BookOpen, Layers, FileText, Headphones, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

const jlptLevels = [
  {
    level: "N5",
    label: "Pemula",
    color: "#22C55E",
    bg: "#DCFCE7",
    border: "#22C55E",
    vocab: "800",
    kanji: "100",
    grammar: "80",
    desc: "Dapat memahami bahasa Jepang dasar yang digunakan dalam kehidupan sehari-hari.",
    sections: ["Kosakata", "Kanji", "Tata Bahasa", "Membaca", "Mendengarkan"],
    locked: false,
  },
  {
    level: "N4",
    label: "Dasar",
    color: "#3B82F6",
    bg: "#DBEAFE",
    border: "#3B82F6",
    vocab: "1500",
    kanji: "300",
    grammar: "150",
    desc: "Dapat memahami bahasa Jepang tingkat dasar.",
    sections: ["Kosakata", "Kanji", "Tata Bahasa", "Membaca", "Mendengarkan"],
    locked: true,
  },
  {
    level: "N3",
    label: "Menengah",
    color: "#F59E0B",
    bg: "#FEF9C3",
    border: "#F59E0B",
    vocab: "3000",
    kanji: "650",
    grammar: "200",
    desc: "Di antara N4 dan N2, dapat memahami bahasa Jepang sehari-hari.",
    sections: ["Kosakata", "Kanji", "Tata Bahasa", "Membaca", "Mendengarkan"],
    locked: true,
  },
  {
    level: "N2",
    label: "Atas-Menengah",
    color: "#F97316",
    bg: "#FED7AA",
    border: "#F97316",
    vocab: "6000",
    kanji: "1000",
    grammar: "300",
    desc: "Dapat memahami bahasa Jepang dalam berbagai situasi.",
    sections: ["Kosakata", "Kanji", "Tata Bahasa", "Membaca", "Mendengarkan"],
    locked: true,
  },
  {
    level: "N1",
    label: "Mahir",
    color: "#EF4444",
    bg: "#FEE2E2",
    border: "#EF4444",
    vocab: "10000",
    kanji: "2000",
    grammar: "500",
    desc: "Dapat memahami bahasa Jepang dalam segala situasi termasuk teks kompleks.",
    sections: ["Kosakata", "Kanji", "Tata Bahasa", "Membaca", "Mendengarkan"],
    locked: true,
  },
];

export default function JLPTPage() {
  const [selectedLevel, setSelectedLevel] = useState("N5");
  const selected = jlptLevels.find((l) => l.level === selectedLevel)!;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#D95F76] flex items-center justify-center">
            <Target size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Persiapan JLPT</h1>
            <p className="text-[#6B7280] text-sm">Latihan lengkap untuk JLPT N5 hingga N1</p>
          </div>
        </div>
      </motion.div>

      {/* Level Selector */}
      <div className="grid grid-cols-5 gap-3">
        {jlptLevels.map((lv) => (
          <button
            key={lv.level}
            onClick={() => !lv.locked && setSelectedLevel(lv.level)}
            className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
              selectedLevel === lv.level ? "shadow-md" : "border-[#E7E5E4] bg-white opacity-70"
            } ${lv.locked ? "cursor-not-allowed" : "cursor-pointer"}`}
            style={selectedLevel === lv.level ? { borderColor: lv.color, backgroundColor: lv.bg } : {}}
          >
            {lv.locked && (
              <div className="absolute top-2 right-2 w-5 h-5 bg-[#6B7280] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔒</span>
              </div>
            )}
            <span className="text-2xl font-bold" style={{ color: selectedLevel === lv.level ? lv.color : "#6B7280" }}>
              {lv.level}
            </span>
            <span className="text-xs font-medium text-center" style={{ color: selectedLevel === lv.level ? lv.color : "#6B7280" }}>
              {lv.label}
            </span>
          </button>
        ))}
      </div>

      {/* Level Detail */}
      <motion.div
        key={selectedLevel}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white rounded-3xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-4xl font-bold"
                  style={{ color: selected.color }}
                >
                  {selected.level}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ backgroundColor: selected.bg, color: selected.color }}
                >
                  {selected.label}
                </span>
              </div>
              <p className="text-[#6B7280] max-w-md">{selected.desc}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Kosakata", value: `${selected.vocab}+` },
              { label: "Kanji", value: `${selected.kanji}+` },
              { label: "Tata Bahasa", value: `${selected.grammar}+` },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center p-4 rounded-2xl"
                style={{ backgroundColor: selected.bg }}
              >
                <div className="text-2xl font-bold" style={{ color: selected.color }}>{s.value}</div>
                <div className="text-xs font-medium text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-3">
            {[
              { label: "Kosakata", icon: <BookOpen size={18} />, href: `/vocabulary?jlpt=${selected.level}`, desc: `${selected.vocab}+ kata` },
              { label: "Kanji", icon: <span className="font-jp font-bold">漢</span>, href: `/kanji?jlpt=${selected.level}`, desc: `${selected.kanji}+ kanji` },
              { label: "Tata Bahasa", icon: <Layers size={18} />, href: `/grammar?jlpt=${selected.level}`, desc: `${selected.grammar}+ pola` },
              { label: "Membaca", icon: <FileText size={18} />, href: `/reading?jlpt=${selected.level}`, desc: "Teks & pertanyaan" },
              { label: "Mendengarkan", icon: <Headphones size={18} />, href: `/listening?jlpt=${selected.level}`, desc: "Audio latihan" },
              { label: "Ujian Latihan", icon: <Target size={18} />, href: `/jlpt/${selected.level.toLowerCase()}/mock`, desc: "Simulasi ujian JLPT" },
            ].map((section) => (
              <Link
                key={section.label}
                href={section.href}
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#E7E5E4] hover:border-[#D95F76] hover:bg-[#FFF9F7] transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: selected.bg, color: selected.color }}
                >
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1F2937] text-sm">{section.label}</h3>
                  <p className="text-xs text-[#6B7280]">{section.desc}</p>
                </div>
                <ChevronRight size={16} className="text-[#6B7280] group-hover:text-[#D95F76] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
