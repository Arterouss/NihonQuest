"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, BookOpen, Target, Clock, Zap, CheckCircle2, Flame } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie, Cell } from "recharts";

const weeklyData = [
  { day: "Sen", xp: 120, items: 8 },
  { day: "Sel", xp: 200, items: 15 },
  { day: "Rab", xp: 80, items: 5 },
  { day: "Kam", xp: 250, items: 18 },
  { day: "Jum", xp: 180, items: 12 },
  { day: "Sab", xp: 300, items: 22 },
  { day: "Min", xp: 240, items: 16 },
];

const radarData = [
  { subject: "Hiragana", A: 90 },
  { subject: "Katakana", A: 75 },
  { subject: "Kanji", A: 45 },
  { subject: "Kosakata", A: 60 },
  { subject: "Tata Bahasa", A: 55 },
  { subject: "Listening", A: 40 },
  { subject: "Reading", A: 50 },
];

const jlptProgress = [
  { name: "Selesai", value: 32, color: "#D95F76" },
  { name: "Tersisa", value: 68, color: "#FCE7EC" },
];

export default function ProgressPage() {
  const totalXP = 1240;
  const weekXP = weeklyData.reduce((sum, d) => sum + d.xp, 0);

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
          { label: "Hari Streak", value: 7, icon: <Flame size={18} />, color: "#D95F76", bg: "#FCE7EC" },
          { label: "Item Selesai", value: 96, icon: <CheckCircle2 size={18} />, color: "#F59E0B", bg: "#FEF9C3" },
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
              <div className="text-3xl font-bold text-[#D95F76]">32%</div>
              <div className="text-xs text-[#6B7280]">Selesai</div>
            </div>
            <div className="w-full mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Pelajaran</span>
                <span className="font-bold text-[#1F2937]">32 / 100</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Kanji</span>
                <span className="font-bold text-[#1F2937]">24 / 80</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#6B7280]">Kosakata</span>
                <span className="font-bold text-[#1F2937]">156 / 800</span>
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

      {/* Weak Areas */}
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
            {[
              { label: "Listening", score: "40%" },
              { label: "Kanji N5", score: "45%" },
              { label: "Reading", score: "50%" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center p-2.5 bg-[#FEE2E2] rounded-xl">
                <span className="text-sm font-medium text-[#EF4444]">{item.label}</span>
                <span className="text-sm font-bold text-[#EF4444]">{item.score}</span>
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
            {[
              { label: "Hiragana", score: "90%" },
              { label: "Katakana", score: "75%" },
              { label: "Kosakata Dasar", score: "60%" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center p-2.5 bg-[#DCFCE7] rounded-xl">
                <span className="text-sm font-medium text-[#22C55E]">{item.label}</span>
                <span className="text-sm font-bold text-[#22C55E]">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
