"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Download, Lock, CheckCircle, Sparkles, Award } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { useAchievementStore, ACHIEVEMENTS_LIST } from "@/store/useAchievementStore";

// ---- Certificate Definitions ----
interface CertDef {
  id: string;
  title: string;
  titleJp: string;
  subtitle: string;
  description: string;
  condition: string;
  color: string;
  gradient: string;
  icon: string;
  xpRequired?: number;
  levelRequired?: number;
  achievementsRequired?: string[];
  rare: "common" | "rare" | "legendary";
}

const CERTIFICATES: CertDef[] = [
  {
    id: "cert-beginner",
    title: "Pelajar Bahasa Jepang",
    titleJp: "日本語学習者",
    subtitle: "Certificate of Japanese Language Beginner",
    description: "Telah menyelesaikan materi dasar dan memulai perjalanan belajar bahasa Jepang.",
    condition: "Capai Level 2",
    color: "#10B981",
    gradient: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 50%, #6EE7B7 100%)",
    icon: "🌱",
    levelRequired: 2,
    rare: "common",
  },
  {
    id: "cert-hiragana",
    title: "Master Hiragana",
    titleJp: "ひらがなマスター",
    subtitle: "Certificate of Hiragana Mastery",
    description: "Telah berhasil menguasai seluruh aksara Hiragana dasar bahasa Jepang.",
    condition: "Buka Achievement 'Hiragana Master'",
    color: "#D95F76",
    gradient: "linear-gradient(135deg, #FCE7EC 0%, #F9A8BF 50%, #F472A0 100%)",
    icon: "あ",
    achievementsRequired: ["hiragana-master"],
    rare: "common",
  },
  {
    id: "cert-n5",
    title: "JLPT N5 Ready",
    titleJp: "日本語能力試験N5",
    subtitle: "Certificate of N5 Level Completion",
    description: "Telah menguasai kosakata, kanji, dan tata bahasa setara JLPT N5.",
    condition: "Buka Achievement 'N5 Selesai'",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 50%, #93C5FD 100%)",
    icon: "🎯",
    achievementsRequired: ["n5-complete"],
    rare: "rare",
  },
  {
    id: "cert-dedicated",
    title: "Pelajar Berdedikasi",
    titleJp: "献身的な学習者",
    subtitle: "Certificate of Dedication",
    description: "Telah membuktikan semangat belajar yang tinggi dengan konsistensi harian selama 30 hari.",
    condition: "Buka Achievement 'Streak 30 Hari'",
    color: "#F97316",
    gradient: "linear-gradient(135deg, #FEF9C3 0%, #FDE68A 50%, #FCD34D 100%)",
    icon: "🔥",
    achievementsRequired: ["streak-30"],
    rare: "rare",
  },
  {
    id: "cert-explorer",
    title: "Penjelajah NihonQuest",
    titleJp: "日本クエスト探検家",
    subtitle: "Certificate of Full Exploration",
    description: "Telah mengeksplorasi semua fitur belajar di NihonQuest dengan penuh semangat.",
    condition: "Capai Level 5 & Buka Achievement 'Penjelajah'",
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)",
    icon: "🗺️",
    achievementsRequired: ["explorer"],
    levelRequired: 5,
    rare: "legendary",
  },
];

// ---- Certificate Canvas Component ----
function CertificateCanvas({ cert, userName, onReady }: { cert: CertDef; userName: string; onReady: (canvas: HTMLCanvasElement) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 1100;
    const H = 780;
    canvas.width = W;
    canvas.height = H;

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, W, H);
    if (cert.id === "cert-beginner") { bg.addColorStop(0, "#F0FDF4"); bg.addColorStop(1, "#DCFCE7"); }
    else if (cert.id === "cert-hiragana") { bg.addColorStop(0, "#FFF0F4"); bg.addColorStop(1, "#FCE7EC"); }
    else if (cert.id === "cert-n5") { bg.addColorStop(0, "#EFF6FF"); bg.addColorStop(1, "#DBEAFE"); }
    else if (cert.id === "cert-dedicated") { bg.addColorStop(0, "#FFFBEB"); bg.addColorStop(1, "#FEF3C7"); }
    else { bg.addColorStop(0, "#F5F3FF"); bg.addColorStop(1, "#EDE9FE"); }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Outer decorative border
    ctx.strokeStyle = cert.color;
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, W - 40, H - 40);

    // Inner border
    ctx.strokeStyle = cert.color + "60";
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, W - 70, H - 70);

    // Corner ornaments
    const corners = [[50, 50], [W - 50, 50], [50, H - 50], [W - 50, H - 50]];
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fillStyle = cert.color;
      ctx.fill();
    });

    // Top decorative line
    ctx.beginPath();
    ctx.moveTo(50, 80); ctx.lineTo(W - 50, 80);
    ctx.strokeStyle = cert.color + "40";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Logo/icon circle
    ctx.beginPath();
    ctx.arc(W / 2, 155, 55, 0, Math.PI * 2);
    ctx.fillStyle = cert.color + "20";
    ctx.fill();
    ctx.strokeStyle = cert.color;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Icon (emoji)
    ctx.font = "52px serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#1F2937";
    ctx.fillText(cert.icon.length <= 2 ? cert.icon : "🏆", W / 2, 175);

    // NihonQuest label
    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = cert.color;
    ctx.letterSpacing = "4px";
    ctx.fillText("N I H O N Q U E S T", W / 2, 240);
    ctx.letterSpacing = "0px";

    // Thin separator
    ctx.beginPath();
    const midX = W / 2;
    ctx.moveTo(midX - 120, 255); ctx.lineTo(midX + 120, 255);
    ctx.strokeStyle = cert.color + "80";
    ctx.lineWidth = 1;
    ctx.stroke();

    // "Sertifikat" text
    ctx.font = "italic 26px Georgia, serif";
    ctx.fillStyle = "#6B7280";
    ctx.fillText("Sertifikat Penghargaan", W / 2, 300);

    // Main title
    ctx.font = `bold 48px Georgia, serif`;
    ctx.fillStyle = "#1F2937";
    ctx.fillText(cert.title, W / 2, 358);

    // Japanese title
    ctx.font = "bold 22px 'Noto Sans JP', serif";
    ctx.fillStyle = cert.color;
    ctx.fillText(cert.titleJp, W / 2, 390);

    // "diberikan kepada" text
    ctx.font = "16px sans-serif";
    ctx.fillStyle = "#9CA3AF";
    ctx.fillText("diberikan kepada", W / 2, 438);

    // Decorative line under "diberikan kepada"
    ctx.beginPath();
    ctx.moveTo(midX - 200, 450); ctx.lineTo(midX + 200, 450);
    ctx.strokeStyle = cert.color + "60";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // User name
    ctx.font = `bold 44px Georgia, serif`;
    ctx.fillStyle = "#1F2937";
    ctx.fillText(userName || "Nama Pelajar", W / 2, 502);

    // Description
    ctx.font = "15px sans-serif";
    ctx.fillStyle = "#6B7280";
    const words = cert.description.split(" ");
    let line = "";
    let y = 548;
    for (const w of words) {
      const test = line + w + " ";
      if (ctx.measureText(test).width > 700) {
        ctx.fillText(line, W / 2, y);
        line = w + " ";
        y += 24;
      } else { line = test; }
    }
    ctx.fillText(line, W / 2, y);

    // Separator
    ctx.beginPath();
    ctx.moveTo(50, H - 160); ctx.lineTo(W - 50, H - 160);
    ctx.strokeStyle = cert.color + "40";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Signature section
    const signDate = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

    // Left: date
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#9CA3AF";
    ctx.textAlign = "left";
    ctx.fillText("Dikeluarkan pada:", 80, H - 130);
    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = "#374151";
    ctx.fillText(signDate, 80, H - 108);

    // Center: stamp
    ctx.beginPath();
    ctx.arc(W / 2, H - 110, 35, 0, Math.PI * 2);
    ctx.fillStyle = cert.color + "15";
    ctx.fill();
    ctx.strokeStyle = cert.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.font = "bold 11px sans-serif";
    ctx.fillStyle = cert.color;
    ctx.textAlign = "center";
    ctx.fillText("NIHON", W / 2, H - 116);
    ctx.fillText("QUEST", W / 2, H - 100);

    // Right: signature
    ctx.textAlign = "right";
    // Simulate a handwritten-style signature
    ctx.font = "italic 28px Georgia, serif";
    ctx.fillStyle = "#1F2937";
    ctx.fillText("Bay Sensei", W - 80, H - 115);

    ctx.beginPath();
    ctx.moveTo(W - 250, H - 95); ctx.lineTo(W - 80, H - 95);
    ctx.strokeStyle = "#6B7280";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = "13px sans-serif";
    ctx.fillStyle = "#9CA3AF";
    ctx.fillText("Bay Sensei — Pendiri NihonQuest", W - 80, H - 78);

    // Bottom line
    ctx.beginPath();
    ctx.moveTo(50, H - 50); ctx.lineTo(W - 50, H - 50);
    ctx.strokeStyle = cert.color + "40";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = "11px sans-serif";
    ctx.fillStyle = "#D1D5DB";
    ctx.textAlign = "center";
    ctx.fillText("www.nihonquest.app  •  Sertifikat resmi NihonQuest", W / 2, H - 30);

    onReady(canvas);
  }, [cert, userName, onReady]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl shadow-2xl border border-gray-200"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}

// ---- Main Page ----
export default function CertificatePage() {
  const { level, xp } = useProgressStore();
  const { unlockedIds } = useAchievementStore();
  const [selected, setSelected] = useState<CertDef | null>(null);
  const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null);
  const userName = useProgressStore(s => s.name);

  const isUnlocked = (cert: CertDef) => {
    const levelOk = cert.levelRequired ? level >= cert.levelRequired : true;
    const achOk = cert.achievementsRequired ? cert.achievementsRequired.every(id => unlockedIds.includes(id)) : true;
    return levelOk && achOk;
  };

  const handleDownload = () => {
    if (!canvasEl || !selected) return;
    const link = document.createElement("a");
    link.download = `NihonQuest_${selected.id}_${Date.now()}.png`;
    link.href = canvasEl.toDataURL("image/png");
    link.click();
  };

  const rareBadge = {
    common: { label: "Pemula", color: "#10B981", bg: "#D1FAE5" },
    rare: { label: "Langka", color: "#3B82F6", bg: "#DBEAFE" },
    legendary: { label: "Legendaris ⭐", color: "#8B5CF6", bg: "#EDE9FE" },
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
            <Award size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Sertifikat Penghargaan</h1>
            <p className="text-[#6B7280] text-sm">修了証 — Unduh sertifikat resmi atas pencapaianmu</p>
          </div>
        </div>
      </motion.div>

      {/* Info banner */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">Setiap sertifikat memiliki syarat yang harus dipenuhi. Selesaikan misi dan buka pencapaian untuk mendapatkan sertifikat resmi bertanda tangan <strong>Bay Sensei</strong>!</p>
      </div>

      {/* Certificate grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {CERTIFICATES.map((cert, i) => {
          const unlocked = isUnlocked(cert);
          const badge = rareBadge[cert.rare];
          return (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={unlocked ? { scale: 1.02, y: -2 } : {}}
              onClick={() => unlocked && setSelected(cert)}
              className={`relative text-left rounded-2xl border-2 p-5 overflow-hidden transition-all ${unlocked ? "cursor-pointer shadow-sm hover:shadow-md" : "cursor-not-allowed opacity-75"}`}
              style={{ borderColor: unlocked ? cert.color + "50" : "#E7E5E4" }}
            >
              {/* Background gradient strip */}
              <div className="absolute inset-0 opacity-30" style={{ background: cert.gradient }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-jp font-bold" style={{ backgroundColor: cert.color + "20" }}>
                    {cert.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: badge.bg, color: badge.color }}>
                      {badge.label}
                    </span>
                    {unlocked
                      ? <CheckCircle size={16} className="text-green-500" />
                      : <Lock size={16} className="text-[#9CA3AF]" />
                    }
                  </div>
                </div>

                <h3 className="font-bold text-[#1F2937] text-sm mb-0.5">{cert.title}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: cert.color }}>{cert.titleJp}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-3">{cert.description}</p>

                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: unlocked ? "#10B981" : "#9CA3AF" }}>
                  {unlocked ? <CheckCircle size={12} /> : <Lock size={12} />}
                  {cert.condition}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-5 border-b border-[#F3F4F6] flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-[#1F2937]">{selected.title}</h2>
                  <p className="text-xs text-[#6B7280]">{selected.subtitle}</p>
                </div>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-bold shadow-md"
                  style={{ background: `linear-gradient(135deg, ${selected.color}, ${selected.color}cc)` }}
                >
                  <Download size={15} /> Unduh PNG
                </button>
              </div>

              <div className="p-5">
                <CertificateCanvas
                  cert={selected}
                  userName={userName}
                  onReady={setCanvasEl}
                />
              </div>

              <div className="p-5 pt-0">
                <p className="text-xs text-center text-[#9CA3AF]">Sertifikat ini dibuat khusus untuk <strong>{userName}</strong> oleh NihonQuest.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
