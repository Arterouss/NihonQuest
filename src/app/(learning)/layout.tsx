"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BookOpen, AlignJustify, BookMarked,
  Layers, Brain, MessageCircle, Headphones, FileText,
  Zap, Target, Trophy, User, LogOut, Menu, X,
  ChevronRight, Flame, BarChart2, Map, Search,
  Calendar,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
  { href: "/path", icon: <Map size={18} />, label: "Jalur Belajar" },
  { type: "divider", label: "MATERI" },
  { href: "/hiragana", icon: <span className="font-jp font-bold text-sm">あ</span>, label: "Hiragana" },
  { href: "/katakana", icon: <span className="font-jp font-bold text-sm">ア</span>, label: "Katakana" },
  { href: "/kanji", icon: <span className="font-jp font-bold text-sm">漢</span>, label: "Kanji" },
  { href: "/vocabulary", icon: <BookMarked size={18} />, label: "Kosakata" },
  { href: "/grammar", icon: <AlignJustify size={18} />, label: "Tata Bahasa" },
  { href: "/conversation", icon: <MessageCircle size={18} />, label: "Percakapan" },
  { type: "divider", label: "LATIHAN" },
  { href: "/listening", icon: <Headphones size={18} />, label: "Listening" },
  { href: "/reading", icon: <BookOpen size={18} />, label: "Reading" },
  { href: "/flashcards", icon: <Layers size={18} />, label: "Flashcard" },
  { href: "/quiz", icon: <Brain size={18} />, label: "Kuis" },
  { type: "divider", label: "LAINNYA" },
  { href: "/jlpt", icon: <Target size={18} />, label: "JLPT" },
  { href: "/dictionary", icon: <Search size={18} />, label: "Kamus" },
  { href: "/daily-challenge", icon: <Calendar size={18} />, label: "Tantangan Harian" },
  { href: "/progress", icon: <BarChart2 size={18} />, label: "Kemajuan" },
  { href: "/achievements", icon: <Trophy size={18} />, label: "Pencapaian" },
];

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-[#E7E5E4]">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <div className="w-8 h-8 rounded-xl sakura-gradient flex items-center justify-center">
            <span className="text-white font-bold text-sm font-jp">日</span>
          </div>
          <span className="font-bold text-lg text-[#1F2937]">
            Nihon<span style={{ color: "#D95F76" }}>Quest</span>
          </span>
        </Link>
        {onClose && (
          <button onClick={onClose} className="text-[#6B7280] hover:text-[#D95F76] transition-colors">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {navItems.map((item, i) => {
          if (item.type === "divider") {
            return (
              <div key={i} className="pt-4 pb-1 px-3">
                <span className="text-[10px] font-bold text-[#6B7280] tracking-widest uppercase">
                  {item.label}
                </span>
              </div>
            );
          }

          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href!}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#FCE7EC] text-[#D95F76]"
                  : "text-[#6B7280] hover:bg-[#FFF9F7] hover:text-[#1F2937]"
              }`}
            >
              <span className={isActive ? "text-[#D95F76]" : "text-[#6B7280]"}>{item.icon}</span>
              {item.label}
              {isActive && <ChevronRight size={14} className="ml-auto text-[#D95F76]" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-[#E7E5E4] space-y-1">
        <Link
          href="/profile"
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#6B7280] hover:bg-[#FFF9F7] hover:text-[#1F2937] transition-all"
        >
          <User size={18} />
          Profil
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#6B7280] hover:bg-[#FEE2E2] hover:text-[#EF4444] transition-all w-full text-left"
        >
          <LogOut size={18} />
          Keluar
        </button>
      </div>
    </div>
  );
}

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#FFF9F7] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E7E5E4] flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-xl"
            >
              <SidebarContent onClose={() => setMobileSidebarOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center gap-3 px-4 h-14 bg-white border-b border-[#E7E5E4] flex-shrink-0">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2 rounded-lg text-[#6B7280] hover:text-[#D95F76] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg sakura-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xs font-jp">日</span>
            </div>
            <span className="font-bold text-[#1F2937]">
              Nihon<span style={{ color: "#D95F76" }}>Quest</span>
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
