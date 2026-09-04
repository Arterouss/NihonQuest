import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAchievementStore } from "./useAchievementStore";

export type MasteryType = "hiragana" | "katakana" | "kanji" | "vocab";

export interface UserProgress {
  name: string;
  xp: number;
  level: number;
  streak: number;
  completedItems: number;
  studySessions: number;
  lastStudyDate: string | null;
  dailyTasksDone: number[]; // Array of task IDs completed today
  weeklyXp: Record<string, number>; // Mapping "YYYY-MM-DD" to XP gained
  skillStats: Record<string, { correct: number; total: number }>; // Tracks correct/total items per category
  jlptN5Progress: { kanji: number; vocab: number; grammar: number }; // Track items completed per category for N5
  completedPaths: number[]; // Array of path node IDs that are completed
  // Mastery tracking
  masteredHiragana: string[];
  masteredKatakana: string[];
  masteredKanji: string[];
  masteredVocab: string[];
}

interface ProgressState extends UserProgress {
  addXP: (amount: number, category?: string, isN5?: boolean) => void;
  incrementSessions: () => void;
  completeDailyTask: (taskId: number) => void;
  completePath: (pathId: number) => void;
  checkAndResetDaily: () => void;
  syncFromDB: () => Promise<void>;
  toggleMastered: (type: MasteryType, item: string) => void;
  isMastered: (type: MasteryType, item: string) => boolean;
}

const initialState: UserProgress = {
  name: "Pelajar (Offline Mode)",
  xp: 0,
  level: 1,
  streak: 0,
  completedItems: 0,
  studySessions: 0,
  lastStudyDate: null,
  dailyTasksDone: [],
  weeklyXp: {},
  skillStats: {
    Hiragana: { correct: 0, total: 0 },
    Katakana: { correct: 0, total: 0 },
    Kanji: { correct: 0, total: 0 },
    Kosakata: { correct: 0, total: 0 },
    "Tata Bahasa": { correct: 0, total: 0 },
    Listening: { correct: 0, total: 0 },
    Reading: { correct: 0, total: 0 },
  },
  jlptN5Progress: { kanji: 0, vocab: 0, grammar: 0 },
  completedPaths: [],
  masteredHiragana: [],
  masteredKatakana: [],
  masteredKanji: [],
  masteredVocab: [],
};

function getMasteryKey(type: MasteryType): keyof Pick<UserProgress, "masteredHiragana" | "masteredKatakana" | "masteredKanji" | "masteredVocab"> {
  switch (type) {
    case "hiragana": return "masteredHiragana";
    case "katakana": return "masteredKatakana";
    case "kanji": return "masteredKanji";
    case "vocab": return "masteredVocab";
  }
}

function checkMasteryAchievements(state: UserProgress) {
  const { unlockAchievement } = useAchievementStore.getState();

  if (state.masteredHiragana.length >= 46) {
    unlockAchievement("hiragana-master");
  }
  if (state.masteredKatakana.length >= 46) {
    unlockAchievement("katakana-master");
  }
  if (state.masteredKanji.length >= 1) {
    unlockAchievement("first-kanji");
  }
  if (state.masteredVocab.length >= 100) {
    unlockAchievement("vocab-100");
  }
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXP: (amount, category, isN5) => {
        set((state) => {
          let newXp = state.xp + amount;
          let newLevel = state.level;
          let nextLevelXp = newLevel * 300;

          // Level up logic: every 300 XP
          while (newXp >= nextLevelXp) {
            newLevel++;
            nextLevelXp = newLevel * 300;
          }

          const todayStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
          const currentWeeklyXp = state.weeklyXp[todayStr] || 0;

          let newSkillStats = { ...state.skillStats };
          if (category && newSkillStats[category]) {
            newSkillStats[category] = {
              correct: newSkillStats[category].correct + 1,
              total: newSkillStats[category].total + 1,
            };
          }

          let newJlptProgress = { ...state.jlptN5Progress };
          if (isN5) {
            if (category === "Kanji") newJlptProgress.kanji += 1;
            else if (category === "Kosakata" || category === "vocab") newJlptProgress.vocab += 1;
            else if (category === "Tata Bahasa" || category === "grammar") newJlptProgress.grammar += 1;
          }

          return {
            xp: newXp,
            level: newLevel,
            weeklyXp: { ...state.weeklyXp, [todayStr]: currentWeeklyXp + amount },
            skillStats: newSkillStats,
            jlptN5Progress: newJlptProgress,
          };
        });

        // Sync with DB
        fetch("/api/user/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ xpAmount: amount, category, isN5 })
        }).catch(err => console.error("Failed to sync progress:", err));
      },

      incrementSessions: () => {
        set((state) => {
          const today = new Date().toDateString();
          let newStreak = state.streak;
          let newLastStudyDate = state.lastStudyDate;

          if (state.lastStudyDate !== today) {
            // Check if it's consecutive
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (state.lastStudyDate === yesterday.toDateString()) {
              newStreak += 1;
            } else {
              newStreak = 1; // reset streak if missed a day
            }
            newLastStudyDate = today;
          }

          return {
            studySessions: state.studySessions + 1,
            completedItems: state.completedItems + 1,
            streak: newStreak,
            lastStudyDate: newLastStudyDate,
          };
        });
      },

      completeDailyTask: (taskId) => {
        set((state) => {
          if (!state.dailyTasksDone.includes(taskId)) {
            return {
              dailyTasksDone: [...state.dailyTasksDone, taskId],
            };
          }
          return state;
        });
      },

      completePath: (pathId) => {
        set((state) => {
          if (!state.completedPaths.includes(pathId)) {
            return {
              completedPaths: [...state.completedPaths, pathId],
            };
          }
          return state;
        });
      },

      checkAndResetDaily: () => {
        set((state) => {
          const today = new Date().toDateString();
          if (state.lastStudyDate !== today) {
            // It's a new day, reset daily tasks
            return { dailyTasksDone: [] };
          }
          return state;
        });
      },

      toggleMastered: (type: MasteryType, item: string) => {
        const key = getMasteryKey(type);
        const current = get()[key];
        const alreadyMastered = current.includes(item);

        let newList: string[];
        if (alreadyMastered) {
          newList = current.filter(i => i !== item);
        } else {
          newList = [...current, item];
        }

        set({ [key]: newList } as Partial<UserProgress>);

        // Check achievements after updating
        const updatedState = get();
        checkMasteryAchievements(updatedState);

        // Determine content type for the DB
        const contentTypeMap: Record<MasteryType, string> = {
          hiragana: "hiragana",
          katakana: "katakana",
          kanji: "kanji",
          vocab: "vocabulary",
        };

        // Sync to DB
        fetch("/api/user/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentType: contentTypeMap[type],
            contentId: item,
            completed: !alreadyMastered,
          }),
        }).catch(err => console.error("Failed to sync mastery:", err));
      },

      isMastered: (type: MasteryType, item: string) => {
        const key = getMasteryKey(type);
        return get()[key].includes(item);
      },

      syncFromDB: async () => {
        try {
          const res = await fetch("/api/user/sync");
          if (res.ok) {
            const json = await res.json();
            if (json.success && json.data) {
              set((state) => ({
                ...state,
                name: json.data.name || state.name,
                xp: json.data.totalXp,
                level: json.data.level,
                completedPaths: json.data.completedPaths || state.completedPaths,
                masteredHiragana: json.data.masteredHiragana || state.masteredHiragana,
                masteredKatakana: json.data.masteredKatakana || state.masteredKatakana,
                masteredKanji: json.data.masteredKanji || state.masteredKanji,
                masteredVocab: json.data.masteredVocab || state.masteredVocab,
              }));
            }
          }
        } catch (error) {
          console.error("Failed to sync from DB:", error);
        }
      }
    }),
    {
      name: "nihonquest-progress", // name of the item in localStorage
    }
  )
);
