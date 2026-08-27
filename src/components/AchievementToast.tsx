"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy } from "lucide-react";
import { useAchievementStore } from "@/store/useAchievementStore";
import { useProgressStore } from "@/store/useProgressStore"; // just to show XP

export default function AchievementToast() {
  const { recentUnlock, clearRecentUnlock } = useAchievementStore();
  const { xp } = useProgressStore(); // Trigger re-render to see XP updates
  
  // Auto-dismiss after 4 seconds
  useEffect(() => {
    if (recentUnlock) {
      // Play a sound effect if available (optional)
      try {
        const audio = new Audio('/sounds/achievement.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {}); // ignore error if browser blocks auto-play
      } catch (e) {}

      const timer = setTimeout(() => {
        clearRecentUnlock();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [recentUnlock, clearRecentUnlock]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none w-full max-w-sm px-4">
      <AnimatePresence>
        {recentUnlock && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="w-full bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-2 overflow-hidden pointer-events-auto"
            style={{ borderColor: recentUnlock.color + "50" }}
          >
            {/* Shimmer effect */}
            <motion.div 
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
            
            <div className="relative z-10 p-4 flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl font-jp flex-shrink-0 shadow-inner"
                style={{ backgroundColor: recentUnlock.bg }}
              >
                {recentUnlock.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase mb-0.5" style={{ color: recentUnlock.color }}>
                  <Trophy size={10} />
                  Pencapaian Baru
                </div>
                <h3 className="font-bold text-[#1F2937] text-base truncate">{recentUnlock.name}</h3>
                <p className="text-xs text-[#6B7280] truncate">{recentUnlock.desc}</p>
                
                {recentUnlock.xp > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex mt-2 px-2 py-0.5 bg-[#FEF9C3] text-[#F59E0B] text-[10px] font-bold rounded-full items-center gap-1 border border-[#FDE047]"
                  >
                    +{recentUnlock.xp} XP Instan!
                  </motion.div>
                )}
              </div>

              <button 
                onClick={clearRecentUnlock}
                className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors self-start"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
