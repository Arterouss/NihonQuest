import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useProgressStore } from "./useProgressStore";

export interface AchievementData {
  id: string;
  name: string;
  nameJp: string;
  desc: string;
  icon: string;
  color: string;
  bg: string;
  xp: number;
}

export const ACHIEVEMENTS_LIST: AchievementData[] = [
  // Masteries
  { id: "hiragana-master", name: "Hiragana Master", nameJp: "ひらがなマスター", desc: "Selesaikan semua hiragana dasar", icon: "あ", color: "#D95F76", bg: "#FCE7EC", xp: 50 },
  { id: "katakana-master", name: "Katakana Master", nameJp: "カタカナマスター", desc: "Selesaikan semua katakana dasar", icon: "ア", color: "#4F46E5", bg: "#EEF2FF", xp: 50 },
  { id: "first-kanji", name: "Kanji Pertama", nameJp: "初めての漢字", desc: "Pelajari kanji pertamamu", icon: "漢", color: "#8B5CF6", bg: "#EDE9FE", xp: 20 },
  { id: "vocab-100", name: "100 Kosakata", nameJp: "100語", desc: "Pelajari 100 kosakata", icon: "📚", color: "#22C55E", bg: "#DCFCE7", xp: 100 },
  { id: "grammar-master", name: "Grammar Master", nameJp: "文法マスター", desc: "Pelajari semua tata bahasa N5", icon: "文", color: "#F59E0B", bg: "#FEF9C3", xp: 200 },
  { id: "n5-complete", name: "N5 Selesai", nameJp: "N5完了", desc: "Selesaikan semua materi N5", icon: "🎯", color: "#22C55E", bg: "#DCFCE7", xp: 500 },
  
  // Streaks & Dedication
  { id: "streak-7", name: "Streak 7 Hari", nameJp: "7日連続", desc: "Belajar 7 hari berturut-turut", icon: "🔥", color: "#F97316", bg: "#FED7AA", xp: 75 },
  { id: "streak-30", name: "Streak 30 Hari", nameJp: "30日連続", desc: "Belajar 30 hari berturut-turut", icon: "🔥", color: "#EF4444", bg: "#FEE2E2", xp: 300 },
  { id: "daily-7", name: "7 Daily Challenge", nameJp: "7日間チャレンジ", desc: "Selesaikan 7 tantangan harian", icon: "📅", color: "#8B5CF6", bg: "#EDE9FE", xp: 100 },
  { id: "level-5", name: "Level 5", nameJp: "レベル5", desc: "Capai Level 5", icon: "⭐", color: "#F2B84B", bg: "#FEF9C3", xp: 150 },
  { id: "night-owl", name: "Burung Hantu", nameJp: "フクロウ", desc: "Belajar di atas jam 10 malam", icon: "🦉", color: "#3B82F6", bg: "#DBEAFE", xp: 30 },

  // Practice & Actions
  { id: "first-quiz", name: "Kuis Pertama", nameJp: "初めてのクイズ", desc: "Selesaikan kuis pertamamu", icon: "🧠", color: "#3B82F6", bg: "#DBEAFE", xp: 10 },
  { id: "quiz-perfect", name: "Sempurna!", nameJp: "完璧！", desc: "Dapat nilai 100 di kuis", icon: "💯", color: "#EF4444", bg: "#FEE2E2", xp: 50 },
  { id: "flashcard-100", name: "100 Flashcard", nameJp: "100フラッシュカード", desc: "Review 100 flashcard", icon: "🃏", color: "#EC4899", bg: "#FCE7F3", xp: 150 },
  { id: "flashcard-king", name: "Raja Flashcard", nameJp: "フラッシュカード王", desc: "Review 500 flashcard", icon: "👑", color: "#F59E0B", bg: "#FEF9C3", xp: 300 },
  
  // Specific Features
  { id: "seniman-kanji", name: "Seniman Kanji", nameJp: "漢字の芸術家", desc: "Tulis kanji pertama di kanvas", icon: "🖌️", color: "#10B981", bg: "#D1FAE5", xp: 20 },
  { id: "suara-emas", name: "Suara Emas", nameJp: "黄金の声", desc: "Bicara dengan pengucapan benar", icon: "🎙️", color: "#8B5CF6", bg: "#EDE9FE", xp: 30 },
  { id: "pitch-perfect", name: "Pitch Perfect", nameJp: "ピッチパーフェクト", desc: "Pelajari materi Pitch Accent", icon: "🎵", color: "#3B82F6", bg: "#DBEAFE", xp: 20 },
  { id: "si-sopan", name: "Si Paling Sopan", nameJp: "一番丁寧な人", desc: "Membaca materi Keigo & Budaya", icon: "🎎", color: "#D95F76", bg: "#FCE7EC", xp: 20 },
  
  // Explorers
  { id: "explorer", name: "Penjelajah", nameJp: "探検家", desc: "Buka semua fitur aplikasi", icon: "🗺️", color: "#6366F1", bg: "#E0E7FF", xp: 100 },
];

interface AchievementState {
  unlockedIds: string[];
  recentUnlock: AchievementData | null;
  unlockAchievement: (id: string) => void;
  clearRecentUnlock: () => void;
}

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set, get) => ({
      unlockedIds: [],
      recentUnlock: null,
      
      unlockAchievement: (id: string) => {
        const { unlockedIds } = get();
        
        // If already unlocked, do nothing
        if (unlockedIds.includes(id)) return;
        
        const achievement = ACHIEVEMENTS_LIST.find(a => a.id === id);
        if (!achievement) return;
        
        // Add to unlocked list and set as recent for the toast notification
        set({
          unlockedIds: [...unlockedIds, id],
          recentUnlock: achievement,
        });
        
        // INSTANT XP GAIN
        // Add XP globally using the progress store
        if (achievement.xp > 0) {
          useProgressStore.getState().addXP(achievement.xp, "Achievement");
        }
      },
      
      clearRecentUnlock: () => set({ recentUnlock: null }),
    }),
    {
      name: "nihonquest-achievements",
      // Exclude recentUnlock from being persisted so it doesn't show up again on reload
      partialize: (state) => ({ unlockedIds: state.unlockedIds }),
    }
  )
);
