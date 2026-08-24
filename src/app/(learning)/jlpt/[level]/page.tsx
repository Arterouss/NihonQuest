"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, BookOpen, Layers, FileText, Headphones, ArrowLeft, ChevronRight, Lock } from "lucide-react";

const levelData: Record<string, {
  level: string; label: string; color: string; bg: string;
  vocab: string; kanji: string; grammar: string; desc: string; unlocked: boolean;
}> = {
  n5: { level: "N5", label: "Pemula", color: "#22C55E", bg: "#DCFCE7", vocab: "800", kanji: "100", grammar: "80", desc: "Dapat memahami bahasa Jepang dasar yang digunakan dalam kehidupan sehari-hari. Level awal untuk mulai belajar bahasa Jepang secara formal.", unlocked: true },
  n4: { level: "N4", label: "Dasar", color: "#3B82F6", bg: "#DBEAFE", vocab: "1500", kanji: "300", grammar: "150", desc: "Dapat memahami bahasa Jepang tingkat dasar. Mampu membaca teks sederhana dan memahami percakapan sehari-hari.", unlocked: true },
  n3: { level: "N3", label: "Menengah", color: "#F59E0B", bg: "#FEF9C3", vocab: "3000", kanji: "650", grammar: "200", desc: "Di antara N4 dan N2. Dapat memahami bahasa Jepang sehari-hari dalam berbagai konteks.", unlocked: true },
  n2: { level: "N2", label: "Atas-Menengah", color: "#F97316", bg: "#FED7AA", vocab: "6000", kanji: "1000", grammar: "300", desc: "Dapat memahami bahasa Jepang dalam berbagai situasi termasuk berita dan artikel surat kabar.", unlocked: true },
  n1: { level: "N1", label: "Mahir", color: "#EF4444", bg: "#FEE2E2", vocab: "10000", kanji: "2000", grammar: "500", desc: "Dapat memahami bahasa Jepang dalam segala situasi termasuk teks kompleks dan percakapan cepat.", unlocked: true },
};

export default function JLPTLevelPage() {
  const params = useParams();
  const levelParam = (params.level as string)?.toLowerCase();
  const data = levelData[levelParam];

  if (!data) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-[#1F2937] mb-2">Level Tidak Ditemukan</h1>
        <p className="text-[#6B7280] mb-6">Level JLPT yang kamu cari tidak tersedia.</p>
        <Link href="/jlpt" className="px-6 py-3 rounded-xl bg-[#D95F76] text-white font-semibold hover:bg-[#B83D58] transition-colors">
          Kembali ke JLPT
        </Link>
      </div>
    );
  }

  const sections = [
    { label: "Kosakata", icon: <BookOpen size={18} />, href: `/vocabulary?jlpt=${data.level}`, desc: `${data.vocab}+ kata penting`, available: true },
    { label: "Kanji", icon: <span className="font-jp font-bold text-lg">漢</span>, href: `/kanji?jlpt=${data.level}`, desc: `${data.kanji}+ kanji`, available: true },
    { label: "Tata Bahasa", icon: <Layers size={18} />, href: `/grammar?jlpt=${data.level}`, desc: `${data.grammar}+ pola kalimat`, available: true },
    { label: "Membaca", icon: <FileText size={18} />, href: `/reading?jlpt=${data.level}`, desc: "Teks & pertanyaan", available: true },
    { label: "Mendengarkan", icon: <Headphones size={18} />, href: `/listening?jlpt=${data.level}`, desc: "Audio latihan", available: true },
    { label: "Ujian Simulasi", icon: <Target size={18} />, href: `/quiz?jlpt=${data.level}`, desc: "Simulasi ujian JLPT", available: true },
  ];

  const allLevels = ["n5", "n4", "n3", "n2", "n1"];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <Link href="/jlpt" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#D95F76] transition-colors text-sm font-medium">
        <ArrowLeft size={16} /> Kembali ke JLPT
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-white rounded-3xl border border-[#E7E5E4] p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: data.bg, color: data.color }}>
              {data.level}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold text-[#1F2937]">JLPT {data.level}</h1>
                <span className="px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: data.bg, color: data.color }}>
                  {data.label}
                </span>
              </div>
              <p className="text-[#6B7280]">{data.desc}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: "Kosakata", value: `${data.vocab}+` },
              { label: "Kanji", value: `${data.kanji}+` },
              { label: "Tata Bahasa", value: `${data.grammar}+` },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-2xl" style={{ backgroundColor: data.bg }}>
                <div className="text-2xl font-bold" style={{ color: data.color }}>{s.value}</div>
                <div className="text-xs font-medium text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Level Navigation */}
      <div className="flex gap-2 flex-wrap">
        {allLevels.map((lv) => {
          const d = levelData[lv];
          const isActive = lv === levelParam;
          return (
            <Link
              key={lv}
              href={`/jlpt/${lv}`}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${isActive ? "text-white border-transparent" : "border-[#E7E5E4] text-[#6B7280]"}`}
              style={isActive ? { backgroundColor: d.color } : {}}
            >
              {d.level}
            </Link>
          );
        })}
      </div>

      {/* Sections */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h2 className="text-lg font-bold text-[#1F2937] mb-4">Materi Pembelajaran</h2>
        <div className="space-y-3">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={section.available ? section.href : "#"}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all group ${section.available
                ? "border-[#E7E5E4] hover:border-[#D95F76] hover:bg-[#FFF9F7] cursor-pointer"
                : "border-[#E7E5E4] bg-[#F9F9F9] opacity-60 cursor-not-allowed"
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: data.bg, color: data.color }}
              >
                {section.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#1F2937]">{section.label}</h3>
                <p className="text-sm text-[#6B7280]">{section.desc}</p>
              </div>
              {section.available ? (
                <ChevronRight size={18} className="text-[#6B7280] group-hover:text-[#D95F76] group-hover:translate-x-1 transition-all" />
              ) : (
                <Lock size={16} className="text-[#6B7280]" />
              )}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Start Button */}
      <Link
        href={`/vocabulary?jlpt=${data.level}`}
        className="block w-full py-4 rounded-2xl text-white text-center font-bold text-lg shadow-md hover:opacity-90 transition-opacity"
        style={{ backgroundColor: data.color }}
      >
        Mulai Belajar {data.level} →
      </Link>
    </div>
  );
}
