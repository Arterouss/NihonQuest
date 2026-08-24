"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight, Play } from "lucide-react";

const dialogues = [
  {
    id: 1,
    title: "Perkenalan Diri",
    level: "N5",
    scenario: "Pertemuan pertama dengan seseorang",
    lines: [
      { speaker: "A", jp: "はじめまして。わたしはやまださくらです。", reading: "Hajimemashite. Watashi wa Yamada Sakura desu.", meaning: "Salam kenal. Saya Yamada Sakura." },
      { speaker: "B", jp: "はじめまして。わたしはすずきたろうです。よろしくおねがいします。", reading: "Hajimemashite. Watashi wa Suzuki Taro desu. Yoroshiku onegaishimasu.", meaning: "Salam kenal. Saya Suzuki Taro. Senang berkenalan." },
      { speaker: "A", jp: "こちらこそ、よろしくおねがいします。おしごとは？", reading: "Kochira koso, yoroshiku onegaishimasu. Oshigoto wa?", meaning: "Sama-sama, senang berkenalan. Pekerjaan Anda?" },
      { speaker: "B", jp: "わたしはかいしゃいんです。やまださんは？", reading: "Watashi wa kaishain desu. Yamada-san wa?", meaning: "Saya karyawan perusahaan. Bagaimana dengan Yamada-san?" },
      { speaker: "A", jp: "わたしはがくせいです。だいがくさんねんせいです。", reading: "Watashi wa gakusei desu. Daigaku 3-nensei desu.", meaning: "Saya mahasiswa. Mahasiswa tahun ketiga." },
    ],
  },
  {
    id: 2,
    title: "Di Kafe",
    level: "N5",
    scenario: "Memesan di kafe Jepang",
    lines: [
      { speaker: "Pelayan", jp: "いらっしゃいませ！なにになさいますか？", reading: "Irasshaimase! Nani ni nasaimasu ka?", meaning: "Selamat datang! Mau pesan apa?" },
      { speaker: "Kamu", jp: "えーと、コーヒーをひとつください。", reading: "E-to, ko-hi- wo hitotsu kudasai.", meaning: "Hmm, kopi satu, tolong." },
      { speaker: "Pelayan", jp: "ホットとアイス、どちらになさいますか？", reading: "Hotto to aisu, dochira ni nasaimasu ka?", meaning: "Panas atau dingin, yang mana?" },
      { speaker: "Kamu", jp: "ホットでおねがいします。いくらですか？", reading: "Hotto de onegaishimasu. Ikura desu ka?", meaning: "Panas, tolong. Berapa harganya?" },
      { speaker: "Pelayan", jp: "さんびゃくえんです。", reading: "Sanbyaku en desu.", meaning: "300 yen." },
    ],
  },
];

type Dialogue = typeof dialogues[0];

export default function ConversationPage() {
  const [activeDialogue, setActiveDialogue] = useState<Dialogue | null>(null);
  const [currentLine, setCurrentLine] = useState(0);

  if (activeDialogue) {
    const line = activeDialogue.lines[currentLine];
    const isLast = currentLine === activeDialogue.lines.length - 1;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setActiveDialogue(null); setCurrentLine(0); }}
            className="text-sm font-semibold text-[#D95F76] hover:underline"
          >
            ← Kembali
          </button>
          <div className="h-4 w-0.5 bg-[#E7E5E4]" />
          <h1 className="font-bold text-[#1F2937]">{activeDialogue.title}</h1>
        </div>

        {/* Progress */}
        <div className="w-full bg-[#FCE7EC] rounded-full h-2">
          <motion.div
            className="h-2 rounded-full sakura-gradient"
            animate={{ width: `${((currentLine + 1) / activeDialogue.lines.length) * 100}%` }}
          />
        </div>

        {/* Dialogue Lines */}
        <div className="space-y-3">
          {activeDialogue.lines.slice(0, currentLine + 1).map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${l.speaker === "B" || l.speaker === "Kamu" ? "flex-row-reverse" : ""}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FCE7EC] flex items-center justify-center flex-shrink-0 font-bold text-xs text-[#D95F76]">
                {l.speaker[0]}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  l.speaker === "B" || l.speaker === "Kamu"
                    ? "bg-[#D95F76] text-white"
                    : "bg-white border border-[#E7E5E4]"
                }`}
              >
                <p className={`font-jp font-bold mb-1 ${l.speaker === "B" || l.speaker === "Kamu" ? "text-white" : "text-[#1F2937]"}`}>
                  {l.jp}
                </p>
                <p className={`text-xs mb-1 ${l.speaker === "B" || l.speaker === "Kamu" ? "text-white/80" : "text-[#6B7280]"} italic`}>
                  {l.reading}
                </p>
                <p className={`text-xs ${l.speaker === "B" || l.speaker === "Kamu" ? "text-white/70" : "text-[#6B7280]"}`}>
                  {l.meaning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 justify-center">
          {currentLine > 0 && (
            <button
              onClick={() => setCurrentLine(currentLine - 1)}
              className="px-4 py-2 border border-[#E7E5E4] rounded-xl text-sm font-semibold text-[#6B7280]"
            >
              ← Sebelumnya
            </button>
          )}
          {!isLast ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => setCurrentLine(currentLine + 1)}
              className="px-6 py-2 sakura-gradient text-white rounded-xl text-sm font-semibold flex items-center gap-1"
            >
              Lanjutkan <ChevronRight size={14} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => { setActiveDialogue(null); setCurrentLine(0); }}
              className="px-6 py-2 bg-[#22C55E] text-white rounded-xl text-sm font-semibold"
            >
              ✓ Selesai!
            </motion.button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F97316] flex items-center justify-center">
            <MessageCircle size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Percakapan</h1>
            <p className="text-[#6B7280] text-sm">会話 — Latihan dialog percakapan Jepang</p>
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {dialogues.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <button
              onClick={() => setActiveDialogue(d)}
              className="w-full text-left bg-white rounded-2xl border border-[#E7E5E4] p-6 hover:border-[#F97316] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#FED7AA] flex items-center justify-center">
                  <MessageCircle size={20} className="text-[#F97316]" />
                </div>
                <span className="px-2 py-1 bg-[#FEF9C3] text-[#F59E0B] text-xs font-bold rounded-full">{d.level}</span>
              </div>
              <h3 className="font-bold text-[#1F2937] mb-1">{d.title}</h3>
              <p className="text-sm text-[#6B7280] mb-4">{d.scenario}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6B7280]">{d.lines.length} baris percakapan</span>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#F97316] group-hover:gap-2 transition-all">
                  <Play size={12} /> Mulai
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
