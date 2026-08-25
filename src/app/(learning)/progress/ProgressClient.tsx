"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, BookOpen, Target, Clock, Zap, CheckCircle2, Flame } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";
import { useProgressStore } from "@/store/useProgressStore";

export default function ProgressClient() {
  const store = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    store.syncFromDB();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalXP = store.xp;

  // 1. Compute Weekly Data (Last 7 Days)
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const weeklyData = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dayStr = days[d.getDay()];
    const dateStr = d.toISOString().split("T")[0];
    return {
      day: dayStr,
      xp: store.weeklyXp[dateStr] || 0,
    };
  });
  const weekXP = weeklyData.reduce((sum, d) => sum + d.xp, 0);

  // 2. Compute Radar Data (Skill Stats)
  // Base maximums for a nice radar chart shape, scaled out of 100
  const maxItems = {
    Hiragana: 46,
    Katakana: 46,
    Kanji: 80,
    Kosakata: 800,
    "Tata Bahasa": 80,
    Listening: 20,
    Reading: 20
  };
  const radarData = Object.keys(store.skillStats).map(subject => {
    const stat = store.skillStats[subject];
    // Calculate percentage based on max expected items or just based on accuracy.
    // If they haven't done any, default to 10 so the radar isn't empty, or 0.
    // Let's use completion percentage: (correct / maxItems) * 100
    const max = maxItems[subject as keyof typeof maxItems] || 100;
    const percentage = Math.min(Math.floor((stat.correct / max) * 100), 100);
    return {
      subject,
      A: percentage
    };
  });

  // 3. Compute JLPT Progress
  const totalN5Max = 80 + 800 + 80;
  const totalN5Done = store.jlptN5Progress.kanji + store.jlptN5Progress.vocab + store.jlptN5Progress.grammar;
  const jlptPercentage = Math.min(Math.floor((totalN5Done / totalN5Max) * 100), 100);

  const jlptProgress = [
    { name: "Selesai", value: jlptPercentage, color: "#D95F76" },
    { name: "Tersisa", value: 100 - jlptPercentage, color: "#FCE7EC" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-[#4F46E5] flex items-center justify-center">
            <BarChart2 size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kemajuan Belajar</h1>
            <p className="text-[#6B7280] text-sm">Pantau perkembangan belajarmu</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total XP", value: totalXP.toLocaleString(), icon: <Zap size={18} />, color: "#4F46E5", bg: "#EEF2FF" },
          { label: "XP Minggu Ini", value: weekXP, icon: <TrendingUp size={18} />, color: "#22C55E", bg: "#DCFCE7" },
          { label: "Hari Streak", value: store.streak, icon: <Flame size={18} />, color: "#D95F76", bg: "#FCE7EC" },
          { label: "Item Selesai", value: store.completedItems, icon: <CheckCircle2 size={18} />, color: "#F59E0B", bg: "#FEF9C3" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: s.bg, color: s.color }}
            >
              {s.icon}
            </div>
            <div className="text-2xl font-bold text-[#1F2937]">{s.value}</div>
            <div className="text-xs text-[#6B7280] font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* XP Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-2xl border border-[#E7E5E4] p-6"
        >
          <h2 className="font-bold text-[#1F2937] mb-4">XP Minggu Ini</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D95F76" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#D95F76" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} />
              <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
              <Tooltip
                contentStyle={{ borderRadius: "12px", border: "1px solid #E7E5E4", fontSize: "12px" }}
              />
              <Area
                type="monotone"
                dataKey="xp"
                stroke="#D95F76"
                strokeWidth={2}
                fill="url(#xpGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* JLPT Progress Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
        >
          <h2 className="font-bold text-[#1F2937] mb-4">Progress JLPT N5</h2>
          <div className="flex flex-col items-center">
            <PieChart width={140} height={140}>
              <Pie
                data={jlptProgress}
                cx={65}
                cy={65}
                innerRadius={45}
                outerRadius={65}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {jlptProgress.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="text-center -mt-4">
              <div className="text-3xl font-bold text-[#D95F76]">{jlptPercentage}%</div>
              <div className="text-xs text-[#6B7280]">Selesai</div>
            </div>
            <div className="w-full mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Item Selesai</span>
                <span className="font-bold text-[#1F2937]">{totalN5Done} / {totalN5Max}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Kanji</span>
                <span className="font-bold text-[#1F2937]">{store.jlptN5Progress.kanji} / 80</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Kosakata</span>
                <span className="font-bold text-[#1F2937]">{store.jlptN5Progress.vocab} / 800</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Tata Bahasa</span>
                <span className="font-bold text-[#1F2937]">{store.jlptN5Progress.grammar} / 80</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skill Radar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <h2 className="font-bold text-[#1F2937] mb-6">Kemampuan per Area</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#E7E5E4" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <Radar name="Kemampuan" dataKey="A" stroke="#D95F76" fill="#D95F76" fillOpacity={0.25} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {radarData.map((d) => (
              <div key={d.subject}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#1F2937]">{d.subject}</span>
                  <span className="font-bold text-[#D95F76]">{d.A}%</span>
                </div>
                <div className="w-full bg-[#FCE7EC] rounded-full h-2">
                  <div
                    className="h-2 rounded-full sakura-gradient"
                    style={{ width: `${d.A}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Weak & Strong Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="grid sm:grid-cols-2 gap-4"
      >
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <h3 className="font-bold text-[#1F2937] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#FEE2E2] flex items-center justify-center text-[#EF4444] text-xs">↓</span>
            Area Lemah
          </h3>
          <div className="space-y-2">
            {radarData.sort((a, b) => a.A - b.A).slice(0, 3).map((item) => (
              <div key={item.subject} className="flex justify-between items-center p-2.5 bg-[#FEE2E2] rounded-xl">
                <span className="text-sm font-medium text-[#EF4444]">{item.subject}</span>
                <span className="text-sm font-bold text-[#EF4444]">{item.A}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-5">
          <h3 className="font-bold text-[#1F2937] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#22C55E] text-xs">↑</span>
            Area Kuat
          </h3>
          <div className="space-y-2">
            {radarData.sort((a, b) => b.A - a.A).slice(0, 3).map((item) => (
              <div key={item.subject} className="flex justify-between items-center p-2.5 bg-[#DCFCE7] rounded-xl">
                <span className="text-sm font-medium text-[#22C55E]">{item.subject}</span>
                <span className="text-sm font-bold text-[#22C55E]">{item.A}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
