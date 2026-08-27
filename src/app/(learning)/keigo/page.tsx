"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, Globe } from "lucide-react";
import { keigoCategories, keigoExpressions, budayaItems, type KeigoCategory } from "@/lib/keigoData";

function CategoryCard({ cat }: { cat: KeigoCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-all"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{cat.icon}</span>
          <div>
            <h3 className="font-bold text-[#1F2937] text-lg">{cat.title}</h3>
            <p className="text-sm font-semibold" style={{ color: cat.color }}>{cat.subtitle}</p>
          </div>
        </div>
        {open ? <ChevronUp size={20} className="text-[#9CA3AF] flex-shrink-0" /> : <ChevronDown size={20} className="text-[#9CA3AF] flex-shrink-0" />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-5 pb-5 space-y-4"
        >
          <p className="text-sm text-[#6B7280] bg-gray-50 rounded-xl p-3">{cat.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#F3F4F6]">
                  <th className="text-left py-2 pr-3 text-xs font-bold text-[#9CA3AF] uppercase">Kasual</th>
                  <th className="text-left py-2 pr-3 text-xs font-bold text-[#3B82F6] uppercase">Teineigo</th>
                  {cat.id === "sonkeigo" && <th className="text-left py-2 pr-3 text-xs font-bold uppercase" style={{ color: cat.color }}>Sonkeigo</th>}
                  {cat.id === "kenjogo" && <th className="text-left py-2 pr-3 text-xs font-bold uppercase" style={{ color: cat.color }}>Kenjōgo</th>}
                  <th className="text-left py-2 text-xs font-bold text-[#9CA3AF] uppercase">Arti</th>
                </tr>
              </thead>
              <tbody>
                {cat.entries.map((entry, i) => (
                  <tr key={i} className="border-b border-[#F9FAFB] hover:bg-gray-50">
                    <td className="py-2.5 pr-3">
                      <p className="font-jp font-bold text-[#1F2937]">{entry.casual}</p>
                      <p className="text-[10px] text-[#9CA3AF] italic">{entry.casualReading}</p>
                    </td>
                    <td className="py-2.5 pr-3">
                      <p className="font-jp font-semibold text-[#3B82F6]">{entry.teineigo}</p>
                      <p className="text-[10px] text-[#9CA3AF] italic">{entry.teineigoReading}</p>
                    </td>
                    {cat.id === "sonkeigo" && (
                      <td className="py-2.5 pr-3">
                        <p className="font-jp font-semibold" style={{ color: cat.color }}>{entry.sonkeigo}</p>
                        <p className="text-[10px] text-[#9CA3AF] italic">{entry.sonkeigoReading}</p>
                      </td>
                    )}
                    {cat.id === "kenjogo" && (
                      <td className="py-2.5 pr-3">
                        <p className="font-jp font-semibold" style={{ color: cat.color }}>{entry.kenjogo}</p>
                        <p className="text-[10px] text-[#9CA3AF] italic">{entry.kenjogoReading}</p>
                      </td>
                    )}
                    <td className="py-2.5 text-xs text-[#6B7280]">{entry.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function KeigoPage() {
  const [activeTab, setActiveTab] = useState<"keigo" | "budaya">("keigo");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
            <span className="text-2xl">🎎</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Keigo & Budaya Jepang</h1>
            <p className="text-[#6B7280] text-sm">敬語 — Bahasa hormat dan etika kehidupan Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Tab switcher */}
      <div className="flex gap-1 bg-[#F3F4F6] p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("keigo")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "keigo" ? "bg-white shadow-sm text-[#1F2937]" : "text-[#6B7280]"
          }`}
        >
          <BookOpen size={15} /> Keigo (敬語)
        </button>
        <button
          onClick={() => setActiveTab("budaya")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "budaya" ? "bg-white shadow-sm text-[#1F2937]" : "text-[#6B7280]"
          }`}
        >
          <Globe size={15} /> Budaya (文化)
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "keigo" ? (
          <motion.div key="keigo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            {/* Overview */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "丁寧語", sub: "Teineigo", desc: "Sopan standar", color: "#3B82F6", bg: "#EFF6FF" },
                { label: "尊敬語", sub: "Sonkeigo", desc: "Menghormati orang lain", color: "#8B5CF6", bg: "#F5F3FF" },
                { label: "謙譲語", sub: "Kenjōgo", desc: "Merendahkan diri", color: "#10B981", bg: "#ECFDF5" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-4 text-center" style={{ backgroundColor: item.bg }}>
                  <p className="font-jp text-xl font-bold" style={{ color: item.color }}>{item.label}</p>
                  <p className="text-xs font-bold mt-1" style={{ color: item.color }}>{item.sub}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Categories */}
            {keigoCategories.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}

            {/* Common expressions */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-sm">
              <h3 className="font-bold text-[#1F2937] mb-4">📝 Ungkapan Keigo yang Sering Dipakai</h3>
              <div className="space-y-3">
                {keigoExpressions.map((expr, i) => (
                  <div key={i} className="border border-[#F3F4F6] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#9CA3AF] uppercase">{expr.situation}</span>
                    </div>
                    <p className="font-jp font-bold text-[#1F2937] text-lg">{expr.expression}</p>
                    <p className="text-xs text-[#6B7280] mt-1">{expr.meaning}</p>
                    <p className="font-jp text-xs text-[#9CA3AF] mt-1 italic">{expr.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="budaya" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5">
              <h2 className="font-bold text-[#1F2937] mb-1">🏯 Memahami Budaya Jepang</h2>
              <p className="text-sm text-[#6B7280]">Mempelajari bahasa tanpa memahami budayanya ibarat memegang peta tanpa tahu arah utara. Berikut adalah hal-hal penting tentang etika dan kebiasaan masyarakat Jepang.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {budayaItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-[#E7E5E4] p-5 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#1F2937] text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
