"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen, Zap, Trophy, ChevronRight, Menu, X,
  Play, Brain, Flame, Target, CheckCircle2,
  ArrowRight, Layers, Sparkles, Headphones,
  BarChart2, Calendar, TrendingUp,
} from "lucide-react";

// ── Sakura Petal Component ──────────────────────────────────────────
function SakuraPetal({ delay = 0, x = 50 }: { delay?: number; x?: number }) {
  // Use a pseudo-random deterministic delay based on x to satisfy React purity rules
  const pseudoRandomDelay = (x % 5) + 1;
  return (
    <motion.div
      className="absolute text-2xl select-none pointer-events-none"
      style={{ left: `${x}%`, top: "-30px" }}
      initial={{ y: -30, opacity: 1, rotate: 0 }}
      animate={{ y: "110vh", opacity: [1, 1, 0], rotate: 360 }}
      transition={{ duration: 8, delay, ease: "linear", repeat: Infinity, repeatDelay: pseudoRandomDelay }}
    >
      🌸
    </motion.div>
  );
}

// ── Navigation ───────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#features", label: "Fitur" },
    { href: "#path", label: "Jalur Belajar" },
    { href: "#jlpt", label: "JLPT" },
    { href: "#how", label: "Cara Kerja" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl sakura-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm font-jp">日</span>
            </div>
            <span className="font-bold text-xl text-[#1F2937]">
              Nihon<span style={{ color: "#D95F76" }}>Quest</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#6B7280] hover:text-[#D95F76] transition-colors font-medium text-sm"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-[#6B7280] hover:text-[#D95F76] font-medium text-sm transition-colors"
            >
              Dashboard (Offline)
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-xl text-white text-sm font-semibold sakura-gradient hover:opacity-90 transition-opacity shadow-sm"
            >
              Mulai Belajar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#6B7280]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E7E5E4] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[#6B7280] hover:text-[#D95F76] font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <hr className="border-[#E7E5E4]" />
              <Link href="/dashboard" className="text-[#6B7280] font-medium py-2">
                Dashboard (Offline)
              </Link>
              <Link
                href="/dashboard"
                className="px-4 py-3 rounded-xl text-white font-semibold sakura-gradient text-center"
              >
                Mulai Belajar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────
function HeroSection() {
  const floatingCards = [
    { char: "あ", romaji: "a", color: "#FCE7EC", border: "#D95F76" },
    { char: "ア", romaji: "a", color: "#EEF2FF", border: "#4F46E5" },
    { char: "愛", romaji: "ai", color: "#FEF9C3", border: "#F2B84B" },
    { char: "日", romaji: "ni", color: "#DCFCE7", border: "#22C55E" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 seigaiha-pattern opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(217,95,118,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Sakura petals */}
      {[10, 25, 40, 60, 75, 90].map((x, i) => (
        <SakuraPetal key={i} delay={i * 1.5} x={x} />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FCE7EC] rounded-full mb-6">
              <Sparkles size={14} style={{ color: "#D95F76" }} />
              <span className="text-xs font-semibold" style={{ color: "#D95F76" }}>
                Platform Belajar Bahasa Jepang #1
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight mb-6">
              Belajar Bahasa Jepang,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D95F76, #B83D58)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Satu Langkah
              </span>{" "}
              di Satu Waktu.
            </h1>

            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed max-w-lg">
              Kuasai Hiragana, Katakana, Kanji, Kosakata, Tata Bahasa, dan persiapkan diri untuk
              JLPT melalui pengalaman belajar yang interaktif dan menyenangkan.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold sakura-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Play size={16} />
                Mulai Belajar
              </Link>
              <a
                href="#explore"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-[#E7E5E4] text-[#1F2937] hover:border-[#D95F76] hover:text-[#D95F76] transition-all"
              >
                Jelajahi Pelajaran
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { label: "Karakter Kana", value: "200+" },
                { label: "Kanji JLPT", value: "2000+" },
                { label: "Level JLPT", value: "N5—N1" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#D95F76]">{stat.value}</div>
                  <div className="text-xs text-[#6B7280] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Dashboard Preview Card */}
            <div className="relative mx-auto max-w-md">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E7E5E4]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-[#6B7280] font-medium font-jp">おかえりなさい！</p>
                    <h3 className="font-bold text-[#1F2937]">Selamat Kembali</h3>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-[#FCE7EC] rounded-full">
                    <Flame size={14} style={{ color: "#D95F76" }} />
                    <span className="text-sm font-bold text-[#D95F76]">7 hari</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="bg-[#FFF9F7] rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#1F2937]">JLPT N5</span>
                    <span className="text-sm font-bold text-[#D95F76]">68%</span>
                  </div>
                  <div className="w-full bg-[#FCE7EC] rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full sakura-gradient"
                      initial={{ width: 0 }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Character cards */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {floatingCards.map((c) => (
                    <div
                      key={c.char}
                      className="flex flex-col items-center p-2 rounded-lg border text-center"
                      style={{ backgroundColor: c.color, borderColor: c.border + "40" }}
                    >
                      <span className="text-xl font-jp font-bold" style={{ color: "#1F2937" }}>
                        {c.char}
                      </span>
                      <span className="text-xs text-[#6B7280]">{c.romaji}</span>
                    </div>
                  ))}
                </div>

                {/* XP Bar */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                    <Zap size={14} style={{ color: "#4F46E5" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6B7280]">XP Hari Ini</span>
                      <span className="font-bold text-[#4F46E5]">240 / 300</span>
                    </div>
                    <div className="w-full bg-[#EEF2FF] rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-[#4F46E5]"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl p-3 border border-[#E7E5E4]"
              >
                <div className="flex items-center gap-2">
                  <Trophy size={18} style={{ color: "#F2B84B" }} />
                  <span className="text-xs font-bold text-[#1F2937]">Hiragana Master!</span>
                </div>
              </motion.div>

              {/* Floating streak */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white shadow-xl rounded-2xl p-3 border border-[#E7E5E4]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <div>
                    <div className="text-xs font-bold text-[#1F2937]">Streak 30 Hari</div>
                    <div className="text-xs text-[#6B7280]">Terus semangat!</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Why Learn With Us ─────────────────────────────────────────────────
function WhySection() {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Pembelajaran Terstruktur",
      desc: "Kurikulum yang dirancang dari dasar hingga mahir mengikuti standar JLPT.",
      color: "#D95F76",
      bg: "#FCE7EC",
    },
    {
      icon: <Zap size={24} />,
      title: "Spaced Repetition",
      desc: "Flashcard dengan algoritma pengulangan jarak untuk memori jangka panjang.",
      color: "#4F46E5",
      bg: "#EEF2FF",
    },
    {
      icon: <Trophy size={24} />,
      title: "Gamifikasi",
      desc: "XP, streak, badge, dan leaderboard untuk menjaga motivasi belajar.",
      color: "#F2B84B",
      bg: "#FEF9C3",
    },
    {
      icon: <Headphones size={24} />,
      title: "Latihan Mendengarkan",
      desc: "Audio native speaker untuk melatih kemampuan mendengar bahasa Jepang.",
      color: "#22C55E",
      bg: "#DCFCE7",
    },
    {
      icon: <Target size={24} />,
      title: "Persiapan JLPT",
      desc: "Latihan soal dan ujian simulasi untuk semua level N5 hingga N1.",
      color: "#3B82F6",
      bg: "#DBEAFE",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Pantau Kemajuan",
      desc: "Dashboard analitik untuk memahami kekuatan dan kelemahan belajar Anda.",
      color: "#8B5CF6",
      bg: "#EDE9FE",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#D95F76] bg-[#FCE7EC] rounded-full mb-4">
            KENAPA NIHONQUEST?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
            Belajar Lebih Efektif & Menyenangkan
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Metode belajar kami menggabungkan ilmu linguistik, psikologi pembelajaran,
            dan teknologi untuk hasil terbaik.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-[#E7E5E4] bg-white hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: f.bg, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-[#1F2937] mb-2">{f.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Learning Path Section ─────────────────────────────────────────────
function LearningPathSection() {
  const steps = [
    { label: "Hiragana", emoji: "あ", color: "#D95F76", desc: "46 karakter dasar" },
    { label: "Katakana", emoji: "ア", color: "#4F46E5", desc: "46 karakter katakana" },
    { label: "Kosakata Dasar", emoji: "語", color: "#22C55E", desc: "500+ kata N5" },
    { label: "Tata Bahasa", emoji: "文", color: "#F59E0B", desc: "Pola kalimat dasar" },
    { label: "Kanji N5", emoji: "漢", color: "#8B5CF6", desc: "80 kanji penting" },
    { label: "JLPT N5", emoji: "🎯", color: "#D95F76", desc: "Ujian simulasi" },
    { label: "N4 → N3", emoji: "📈", color: "#4F46E5", desc: "Tingkatkan level" },
    { label: "N2 → N1", emoji: "🏆", color: "#F2B84B", desc: "Level mahir" },
  ];

  return (
    <section id="path" className="py-24 bg-[#FFF9F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] rounded-full mb-4">
            JALUR BELAJAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
            Jalur Pembelajaran Terstruktur
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Mulai dari nol hingga mahir dengan panduan langkah demi langkah yang jelas.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E7E5E4] -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1 md:max-w-[calc(50%-32px)]">
                  <div className="bg-white rounded-2xl p-5 border border-[#E7E5E4] hover:shadow-md transition-all flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-jp font-bold flex-shrink-0"
                      style={{ backgroundColor: step.color + "20", color: step.color }}
                    >
                      {step.emoji}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937]">{step.label}</h3>
                      <p className="text-sm text-[#6B7280]">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex w-10 h-10 rounded-full border-2 border-[#E7E5E4] bg-white items-center justify-center flex-shrink-0 z-10">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 md:max-w-[calc(50%-32px)] hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Explore Japanese Section ──────────────────────────────────────────
function ExploreSection() {
  const categories = [
    { href: "/hiragana", label: "Hiragana", jpLabel: "ひらがな", icon: "あ", color: "#D95F76", bg: "#FCE7EC", desc: "46 karakter dasar" },
    { href: "/katakana", label: "Katakana", jpLabel: "カタカナ", icon: "ア", color: "#4F46E5", bg: "#EEF2FF", desc: "Kata serapan asing" },
    { href: "/kanji", label: "Kanji", jpLabel: "漢字", icon: "漢", color: "#8B5CF6", bg: "#EDE9FE", desc: "2000+ Kanji JLPT" },
    { href: "/vocabulary", label: "Kosakata", jpLabel: "語彙", icon: "語", color: "#22C55E", bg: "#DCFCE7", desc: "Kategoris & level" },
    { href: "/grammar", label: "Tata Bahasa", jpLabel: "文法", icon: "文", color: "#F59E0B", bg: "#FEF9C3", desc: "Pola kalimat JLPT" },
    { href: "/listening", label: "Mendengarkan", jpLabel: "聴解", icon: "🎧", color: "#3B82F6", bg: "#DBEAFE", desc: "Latihan audio" },
    { href: "/reading", label: "Membaca", jpLabel: "読解", icon: "📖", color: "#EC4899", bg: "#FCE7F3", desc: "Teks level JLPT" },
    { href: "/conversation", label: "Percakapan", jpLabel: "会話", icon: "💬", color: "#F97316", bg: "#FED7AA", desc: "Dialog interaktif" },
  ];

  return (
    <section id="explore" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#D95F76] bg-[#FCE7EC] rounded-full mb-4">
            KONTEN PEMBELAJARAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
            Jelajahi Bahasa Jepang
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Konten pembelajaran lengkap dari alfabet dasar hingga teks tingkat lanjut.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col p-5 rounded-2xl border border-[#E7E5E4] bg-white hover:shadow-lg hover:border-transparent transition-all relative overflow-hidden"
                style={{ "--hover-shadow": `0 20px 40px ${cat.color}20` } as React.CSSProperties}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-jp font-bold mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: cat.bg, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-[#1F2937] mb-0.5">{cat.label}</h3>
                <p className="text-xs font-jp text-[#6B7280] mb-1">{cat.jpLabel}</p>
                <p className="text-xs text-[#6B7280]">{cat.desc}</p>
                <div
                  className="mt-3 flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                  style={{ color: cat.color }}
                >
                  Mulai Belajar <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── JLPT Section ──────────────────────────────────────────────────────
function JLPTSection() {
  const levels = [
    {
      level: "N5",
      label: "Pemula",
      color: "#22C55E",
      bg: "#DCFCE7",
      vocab: "800",
      kanji: "100",
      grammar: "80",
      desc: "Dapat memahami bahasa Jepang dasar.",
    },
    {
      level: "N4",
      label: "Dasar",
      color: "#3B82F6",
      bg: "#DBEAFE",
      vocab: "1500",
      kanji: "300",
      grammar: "150",
      desc: "Dapat memahami bahasa Jepang tingkat dasar.",
    },
    {
      level: "N3",
      label: "Menengah",
      color: "#F59E0B",
      bg: "#FEF9C3",
      vocab: "3000",
      kanji: "650",
      grammar: "200",
      desc: "Di antara N4 dan N2, bahasa Jepang sehari-hari.",
    },
    {
      level: "N2",
      label: "Atas-Menengah",
      color: "#F97316",
      bg: "#FED7AA",
      vocab: "6000",
      kanji: "1000",
      grammar: "300",
      desc: "Dapat memahami bahasa Jepang dalam berbagai situasi.",
    },
    {
      level: "N1",
      label: "Mahir",
      color: "#EF4444",
      bg: "#FEE2E2",
      vocab: "10000",
      kanji: "2000",
      grammar: "500",
      desc: "Dapat memahami bahasa Jepang dalam segala situasi.",
    },
  ];

  return (
    <section id="jlpt" className="py-24 bg-[#FFF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#8B5CF6] bg-[#EDE9FE] rounded-full mb-4">
            PERSIAPAN UJIAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
            Persiapan JLPT Lengkap
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Materi dan latihan soal untuk setiap level JLPT dari N5 hingga N1.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {levels.map((lv, i) => (
            <motion.div
              key={lv.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/jlpt/${lv.level.toLowerCase()}`}
                className="group flex flex-col p-5 rounded-2xl border border-[#E7E5E4] bg-white hover:shadow-lg transition-all h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-3"
                  style={{ backgroundColor: lv.bg, color: lv.color }}
                >
                  {lv.level}
                </div>
                <span
                  className="text-xs font-semibold mb-2 px-2 py-0.5 rounded-full self-start"
                  style={{ backgroundColor: lv.bg, color: lv.color }}
                >
                  {lv.label}
                </span>
                <p className="text-xs text-[#6B7280] mb-4 leading-relaxed flex-1">{lv.desc}</p>
                <div className="space-y-1">
                  {[
                    { key: "Kosakata", val: lv.vocab },
                    { key: "Kanji", val: lv.kanji },
                    { key: "Tata Bahasa", val: lv.grammar },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between text-xs">
                      <span className="text-[#6B7280]">{item.key}</span>
                      <span className="font-semibold text-[#1F2937]">{item.val}+</span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 text-xs font-semibold flex items-center gap-1"
                  style={{ color: lv.color }}
                >
                  Mulai N{lv.level[1]} <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features Showcase ─────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { icon: <Layers size={20} />, label: "Flashcard", desc: "Spaced repetition cerdas", color: "#D95F76" },
    { icon: <Brain size={20} />, label: "Kuis", desc: "10+ tipe pertanyaan", color: "#4F46E5" },
    { icon: <Headphones size={20} />, label: "Listening", desc: "Audio native speaker", color: "#22C55E" },
    { icon: <BookOpen size={20} />, label: "Reading", desc: "Teks level JLPT", color: "#F59E0B" },
    { icon: <Calendar size={20} />, label: "Tantangan Harian", desc: "Streak & reward", color: "#8B5CF6" },
    { icon: <TrendingUp size={20} />, label: "Pantau Kemajuan", desc: "Statistik detail", color: "#3B82F6" },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#22C55E] bg-[#DCFCE7] rounded-full mb-4">
            FITUR INTERAKTIF
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
            Semua yang Kamu Butuhkan
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Fitur lengkap untuk pengalaman belajar yang efektif, menyenangkan, dan terukur.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#E7E5E4] bg-white hover:shadow-md transition-all"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: f.color + "20", color: f.color }}
              >
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1F2937]">{f.label}</h3>
                <p className="text-sm text-[#6B7280]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Pilih Level Kamu", desc: "Tentukan level awal dan target JLPT yang ingin kamu capai.", icon: <Target size={24} /> },
    { num: "02", title: "Belajar Materi", desc: "Ikuti pelajaran terstruktur dengan penjelasan yang jelas dan mudah dipahami.", icon: <BookOpen size={24} /> },
    { num: "03", title: "Latihan & Kuis", desc: "Perkuat pemahaman dengan flashcard, kuis, dan latihan interaktif.", icon: <Brain size={24} /> },
    { num: "04", title: "Pantau Kemajuan", desc: "Lihat statistik belajar dan ketahui area yang perlu ditingkatkan.", icon: <BarChart2 size={24} /> },
  ];

  return (
    <section id="how" className="py-24 bg-[#FFF9F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#F59E0B] bg-[#FEF9C3] rounded-full mb-4">
            CARA KERJA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
            Sederhana & Efektif
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#E7E5E4] flex items-center justify-center shadow-sm">
                  <div style={{ color: "#D95F76" }}>{s.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full sakura-gradient flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
              </div>
              <h3 className="font-bold text-[#1F2937] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Daily Challenge Preview ───────────────────────────────────────────
function DailyChallengeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#F97316] bg-[#FED7AA] rounded-full mb-4">
              TANTANGAN HARIAN
            </span>
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
              Belajar Setiap Hari, <br />
              Raih Streak Terpanjang
            </h2>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              Selesaikan tantangan harian untuk mendapatkan XP, mempertahankan streak,
              dan membuka pencapaian eksklusif.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { label: "5 Kanji Baru", xp: "+20 XP", done: true },
                { label: "10 Kosakata", xp: "+30 XP", done: true },
                { label: "5 Tata Bahasa", xp: "+25 XP", done: false },
                { label: "5 Soal Latihan", xp: "+25 XP", done: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl border border-[#E7E5E4] bg-[#FFF9F7]"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: item.done ? "#22C55E" : "#E7E5E4" }}
                    />
                    <span
                      className={`text-sm font-medium ${item.done ? "line-through text-[#6B7280]" : "text-[#1F2937]"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: item.done ? "#DCFCE7" : "#EEF2FF",
                      color: item.done ? "#22C55E" : "#4F46E5",
                    }}
                  >
                    {item.xp}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold sakura-gradient hover:opacity-90 transition-opacity shadow"
            >
              <Flame size={16} />
              Mulai Tantangan Hari Ini
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="bg-[#FFF9F7] rounded-3xl p-8 border border-[#E7E5E4]">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🔥</div>
                <h3 className="text-2xl font-bold text-[#1F2937]">7 Hari Streak!</h3>
                <p className="text-[#6B7280] text-sm">Terus pertahankan semangat belajarmu</p>
              </div>
              <div className="grid grid-cols-7 gap-1.5 mb-6">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-md"
                    style={{
                      backgroundColor: i < 7 ? "#D95F76" : i < 14 ? "#FCE7EC" : "#F3F4F6",
                    }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Total XP", value: "1,240", icon: "⚡" },
                  { label: "Streak", value: "7 hari", icon: "🔥" },
                  { label: "Level", value: "Level 5", icon: "🏆" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-3 text-center border border-[#E7E5E4]">
                    <div className="text-xl mb-1">{s.icon}</div>
                    <div className="font-bold text-[#1F2937] text-sm">{s.value}</div>
                    <div className="text-xs text-[#6B7280]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 sakura-gradient" />
      <div className="absolute inset-0 seigaiha-pattern opacity-10" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4 font-jp">日本語</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Memulai Perjalanan Bahasa Jepangmu?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Bergabung dengan ribuan pelajar yang sudah memulai perjalanan menuju JLPT mereka bersama NihonQuest.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-[#D95F76] hover:bg-[#FFF9F7] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-lg"
            >
              <Play size={20} />
              Mulai Belajar — Gratis!
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-4">Tidak perlu kartu kredit. Mulai langsung sekarang.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────
function Footer() {
  const links = {
    Belajar: [
      { label: "Hiragana", href: "/hiragana" },
      { label: "Katakana", href: "/katakana" },
      { label: "Kanji", href: "/kanji" },
      { label: "Kosakata", href: "/vocabulary" },
      { label: "Tata Bahasa", href: "/grammar" },
    ],
    Latihan: [
      { label: "Flashcard", href: "/flashcards" },
      { label: "Kuis", href: "/quiz" },
      { label: "Listening", href: "/listening" },
      { label: "Reading", href: "/reading" },
      { label: "Percakapan", href: "/conversation" },
    ],
    JLPT: [
      { label: "JLPT N5", href: "/jlpt/n5" },
      { label: "JLPT N4", href: "/jlpt/n4" },
      { label: "JLPT N3", href: "/jlpt/n3" },
      { label: "JLPT N2", href: "/jlpt/n2" },
      { label: "JLPT N1", href: "/jlpt/n1" },
    ],
  };

  return (
    <footer className="bg-[#1F2937] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl sakura-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm font-jp">日</span>
              </div>
              <span className="font-bold text-xl">
                Nihon<span style={{ color: "#D95F76" }}>Quest</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform belajar bahasa Jepang terlengkap. Dari N5 hingga N1, kami temani perjalananmu.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">
                {section}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 NihonQuest. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="font-jp text-lg text-[#D95F76]">日</span>
            <span>Dibuat dengan ❤️ untuk pecinta bahasa Jepang</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhySection />
      <LearningPathSection />
      <ExploreSection />
      <JLPTSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DailyChallengeSection />
      <CTASection />
      <Footer />
    </main>
  );
}
