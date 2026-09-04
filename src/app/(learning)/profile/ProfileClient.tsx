"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Zap, Flame, Trophy, Target, BookOpen, Calendar, Edit2, X, Loader2 } from "lucide-react";
import Link from "next/link";
import { useAchievementStore, ACHIEVEMENTS_LIST } from "@/store/useAchievementStore";
import { useRouter } from "next/navigation";

interface ProfileData {
  name: string;
  email: string;
  jlptTarget: string;
  joinDate: string;
  totalXp: number;
  level: number;
  streak: number;
  totalStudyDays: number;
  totalSessions: number;
  quizAccuracy: number;
  masteredItems: number;
}

export default function ProfileClient({ initialData }: { initialData: ProfileData }) {
  const router = useRouter();
  const { unlockedIds } = useAchievementStore();
  const unlockedAchievements = ACHIEVEMENTS_LIST.filter(a => unlockedIds.includes(a.id)).slice(0, 4);

  const [data, setData] = useState<ProfileData>(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editForm, setEditForm] = useState({ name: data.name, jlptTarget: data.jlptTarget });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const json = await res.json();
      if (json.success) {
        setData(prev => ({ ...prev, name: json.data.name, jlptTarget: json.data.jlptTarget }));
        setIsEditing(false);
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update profile", error);
    } finally {
      setIsSaving(false);
    }
  };

  const formattedDate = new Date(data.joinDate).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-[#E7E5E4] overflow-hidden shadow-sm"
      >
        <div className="h-32 sakura-gradient relative">
          <div className="absolute inset-0 seigaiha-pattern opacity-20" />
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-4xl">
              {data.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="pt-14 pb-6 px-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">{data.name}</h1>
              <p className="text-[#6B7280] text-sm">{data.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-[#EEF2FF] text-[#4F46E5] text-sm font-bold rounded-full">
                  Level {data.level}
                </span>
                <span className="px-3 py-1 bg-[#FCE7EC] text-[#D95F76] text-sm font-bold rounded-full">
                  Target: {data.jlptTarget}
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[#E7E5E4] rounded-xl text-sm font-medium text-[#6B7280] hover:border-[#D95F76] hover:text-[#D95F76] transition-all"
            >
              <Edit2 size={14} /> Edit Profil
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "XP Total", value: data.totalXp.toLocaleString(), icon: <Zap size={16} />, color: "#4F46E5" },
              { label: "Streak", value: `${data.streak}d`, icon: <Flame size={16} />, color: "#D95F76" },
              { label: "Item Dikuasai", value: data.masteredItems, icon: <BookOpen size={16} />, color: "#22C55E" },
              { label: "Akurasi", value: `${data.quizAccuracy}%`, icon: <Target size={16} />, color: "#F59E0B" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-[#FFF9F7] rounded-2xl p-3">
                <div className="flex justify-center mb-1" style={{ color: s.color }}>{s.icon}</div>
                <div className="font-bold text-[#1F2937]">{s.value}</div>
                <div className="text-xs text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* XP Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <h2 className="font-bold text-[#1F2937] mb-4">Level & XP</h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#4F46E5] flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{data.level}</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-[#1F2937]">Level {data.level}</span>
              <span className="text-[#4F46E5] font-bold">{data.totalXp} / {data.level * 300} XP</span>
            </div>
            <div className="w-full bg-[#EEF2FF] rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-[#4F46E5]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((data.totalXp / (data.level * 300)) * 100, 100)}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-[#6B7280] mt-1.5">
              {data.level * 300 - data.totalXp} XP lagi untuk Level {data.level + 1}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Recent Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[#1F2937] flex items-center gap-2">
            <Trophy size={18} className="text-[#F2B84B]" />
            Pencapaian Terbaru
          </h2>
          <Link href="/achievements" className="text-xs font-semibold text-[#D95F76]">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {unlockedAchievements.length > 0 ? (
            unlockedAchievements.map((a, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#E7E5E4] bg-gray-50 text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2"
                  style={{ backgroundColor: a.color + "20" }}
                >
                  {a.icon}
                </div>
                <span className="text-xs font-bold text-[#1F2937] leading-tight">{a.name}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 col-span-4 text-center py-4">Belum ada achievement yang terbuka.</p>
          )}
        </div>
      </motion.div>

      {/* Learning Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-[#E7E5E4] p-6"
      >
        <h2 className="font-bold text-[#1F2937] mb-4">Informasi Belajar</h2>
        <div className="space-y-3">
          {[
            { label: "Bergabung sejak", value: formattedDate, icon: <Calendar size={16} /> },
            { label: "Target JLPT", value: data.jlptTarget, icon: <Target size={16} /> },
            { label: "Hari Belajar Aktif", value: `${data.totalStudyDays} hari`, icon: <BookOpen size={16} /> },
            { label: "Total Sesi Belajar", value: `${data.totalSessions} sesi`, icon: <Zap size={16} /> },
            { label: "Akurasi Kuis", value: `${data.quizAccuracy}%`, icon: <Trophy size={16} /> },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#F3F4F6] last:border-0">
              <div className="flex items-center gap-2 text-[#6B7280]">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              <span className="font-semibold text-[#1F2937] text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl"
            >
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold text-[#1F2937]">Edit Profil</h2>
                <button onClick={() => setIsEditing(false)} className="p-2 rounded-xl hover:bg-gray-100 text-[#6B7280]">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Nama Tampilan</label>
                  <input
                    type="text"
                    required
                    value={editForm.name}
                    onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E7E5E4] focus:border-[#D95F76] focus:ring-1 focus:ring-[#D95F76] outline-none transition-all text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Target JLPT</label>
                  <select
                    value={editForm.jlptTarget}
                    onChange={(e) => setEditForm(prev => ({ ...prev, jlptTarget: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E7E5E4] focus:border-[#D95F76] focus:ring-1 focus:ring-[#D95F76] outline-none transition-all text-sm"
                  >
                    <option value="N5">N5 (Pemula)</option>
                    <option value="N4">N4 (Dasar)</option>
                    <option value="N3">N3 (Menengah)</option>
                    <option value="N2">N2 (Lanjutan)</option>
                    <option value="N1">N1 (Mahir)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full py-2.5 rounded-xl bg-[#D95F76] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#B83D58] transition-colors disabled:opacity-70"
                  >
                    {isSaving ? <Loader2 size={18} className="animate-spin" /> : "Simpan Perubahan"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
