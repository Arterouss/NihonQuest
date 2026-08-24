import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserProgress {
  name: string;
  xp: number;
  level: number;
  streak: number;
  completedItems: number;
  studySessions: number;
  lastStudyDate: string | null;
  dailyTasksDone: number[]; // Array of task IDs completed today
}

interface ProgressState extends UserProgress {
  addXP: (amount: number) => void;
  incrementSessions: () => void;
  completeDailyTask: (taskId: number) => void;
  checkAndResetDaily: () => void;
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
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXP: (amount) => {
        set((state) => {
          let newXp = state.xp + amount;
          let newLevel = state.level;
          let nextLevelXp = newLevel * 300;

          // Level up logic: every 300 XP
          while (newXp >= nextLevelXp) {
            newLevel++;
            nextLevelXp = newLevel * 300;
          }

          return {
            xp: newXp,
            level: newLevel,
          };
        });
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

      checkAndResetDaily: () => {
        set((state) => {
          const today = new Date().toDateString();
          if (state.lastStudyDate !== today) {
            // It's a new day, reset daily tasks
            return { dailyTasksDone: [] };
          }
          return state;
        });
      }
    }),
    {
      name: "nihonquest-progress", // name of the item in localStorage
    }
  )
);
