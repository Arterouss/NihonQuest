"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const grammarData = [
  {
    pattern: "〜です",
    meaning: "Adalah / merupakan",
    formation: "Kata Benda / Kata Sifat-な + です",
    explanation: "Digunakan di akhir kalimat untuk menyatakan sopan. Bentuk formal dari だ.",
    jlpt: "N5",
    examples: [
      { jp: "私は学生です。", reading: "Watashi wa gakusei desu.", meaning: "Saya adalah pelajar." },
      { jp: "これは本です。", reading: "Kore wa hon desu.", meaning: "Ini adalah buku." },
    ],
    mistakes: "Jangan gunakan です setelah kata sifat-い (い形容詞). Bentuk sopan-nya sudah dengan penambahan です di akhir kata sifat-い.",
  },
  {
    pattern: "〜ます",
    meaning: "Bentuk sopan kata kerja",
    formation: "Kata Kerja (bentuk ます)",
    explanation: "Bentuk sopan dari kata kerja. Digunakan dalam percakapan formal atau dengan orang yang lebih tua/senior.",
    jlpt: "N5",
    examples: [
      { jp: "食べます。", reading: "Tabemasu.", meaning: "Saya makan." },
      { jp: "学校へ行きます。", reading: "Gakkou e ikimasu.", meaning: "Saya pergi ke sekolah." },
    ],
    mistakes: "Jangan bingung antara 食べます (tabemasu - makan) dan 食べません (tabemasen - tidak makan).",
  },
  {
    pattern: "〜は〜が好きです",
    meaning: "Menyukai sesuatu",
    formation: "Topik は Objek が 好きです",
    explanation: "Pola untuk menyatakan kesukaan. Particle が digunakan dengan kata好き (suki).",
    jlpt: "N5",
    examples: [
      { jp: "私は音楽が好きです。", reading: "Watashi wa ongaku ga suki desu.", meaning: "Saya suka musik." },
      { jp: "彼女は猫が好きです。", reading: "Kanojo wa neko ga suki desu.", meaning: "Dia (perempuan) suka kucing." },
    ],
    mistakes: "Jangan gunakan を setelah objek. Harus menggunakan が dengan 好き.",
  },
  {
    pattern: "〜ている",
    meaning: "Sedang melakukan / kondisi",
    formation: "Kata Kerja (bentuk て) + いる",
    explanation: "Digunakan untuk menyatakan tindakan yang sedang berlangsung atau kondisi yang dihasilkan dari tindakan sebelumnya.",
    jlpt: "N5",
    examples: [
      { jp: "本を読んでいる。", reading: "Hon wo yonde iru.", meaning: "Sedang membaca buku." },
      { jp: "結婚しています。", reading: "Kekkon shite imasu.", meaning: "Sudah menikah. (kondisi)" },
    ],
    mistakes: "Hati-hati: 〜ている bisa berarti 'sedang' atau 'sudah dalam kondisi' tergantung kata kerjanya.",
  },
  {
    pattern: "〜たい",
    meaning: "Ingin melakukan sesuatu",
    formation: "Kata Kerja (bentuk ます, hilangkan ます) + たい",
    explanation: "Menyatakan keinginan pembicara untuk melakukan sesuatu. Hanya untuk keinginan diri sendiri, tidak untuk orang lain.",
    jlpt: "N5",
    examples: [
      { jp: "日本へ行きたいです。", reading: "Nihon e ikitai desu.", meaning: "Saya ingin pergi ke Jepang." },
      { jp: "ラーメンが食べたい。", reading: "Ra-men ga tabetai.", meaning: "Saya ingin makan ramen." },
    ],
    mistakes: "Untuk menyatakan keinginan orang lain, gunakan 〜たがっている bukan 〜たい.",
  },
  {
    pattern: "〜ませんか",
    meaning: "Mengajak melakukan sesuatu",
    formation: "Kata Kerja (bentuk ます, hilangkan ます) + ませんか",
    explanation: "Digunakan untuk mengundang atau mengajak seseorang melakukan sesuatu. Lebih sopan dari 〜ましょう.",
    jlpt: "N5",
    examples: [
      { jp: "一緒に食べませんか？", reading: "Issho ni tabemasen ka?", meaning: "Mau makan bersama?" },
      { jp: "映画を見ませんか？", reading: "Eiga wo mimasen ka?", meaning: "Mau nonton film?" },
    ],
    mistakes: "〜ませんか adalah undangan, 〜ましょう adalah ajakan yang lebih langsung/pasti.",
  },
  // ── N4 ─────────────────────────────────────────────────────────────
  {
    pattern: "〜なければならない",
    meaning: "Harus / wajib",
    formation: "Kata Kerja (bentuk ない, hilangkan い) + なければならない",
    explanation: "Menyatakan kewajiban atau keharusan. Sinonim: 〜なきゃ (kasual).",
    jlpt: "N4",
    examples: [
      { jp: "宿題をしなければならない。", reading: "Shukudai wo shinakereba naranai.", meaning: "Harus mengerjakan PR." },
      { jp: "明日早く起きなければなりません。", reading: "Ashita hayaku okikereba narimasen.", meaning: "Harus bangun pagi besok." },
    ],
    mistakes: "Jangan bingung dengan 〜てもいい (boleh) vs 〜なければならない (harus).",
  },
  {
    pattern: "〜ことができる",
    meaning: "Bisa / mampu melakukan",
    formation: "Kata Kerja (bentuk kamus) + ことができる",
    explanation: "Menyatakan kemampuan atau kemungkinan. Lebih formal dari 〜られる.",
    jlpt: "N4",
    examples: [
      { jp: "日本語を話すことができます。", reading: "Nihongo wo hanasu koto ga dekimasu.", meaning: "Bisa berbicara bahasa Jepang." },
      { jp: "泳ぐことができない。", reading: "Oyogu koto ga dekinai.", meaning: "Tidak bisa berenang." },
    ],
    mistakes: "〜ことができる lebih formal, sedangkan 〜られる lebih umum digunakan dalam percakapan.",
  },
  {
    pattern: "〜てみる",
    meaning: "Mencoba melakukan sesuatu",
    formation: "Kata Kerja (bentuk て) + みる",
    explanation: "Menyatakan tindakan yang dilakukan sebagai percobaan atau untuk mengetahui hasilnya.",
    jlpt: "N4",
    examples: [
      { jp: "この料理を食べてみてください。", reading: "Kono ryouri wo tabete mite kudasai.", meaning: "Coba makan masakan ini." },
      { jp: "日本語で話してみた。", reading: "Nihongo de hanashite mita.", meaning: "Mencoba berbicara dalam bahasa Jepang." },
    ],
    mistakes: "〜てみる menunjukkan 'mencoba sebagai eksperimen', berbeda dari 〜ようとする (berusaha melakukan).",
  },
  {
    pattern: "〜らしい",
    meaning: "Tampaknya / sepertinya (berdasarkan info)",
    formation: "Kata Benda / Kata Sifat / Kata Kerja + らしい",
    explanation: "Menyatakan dugaan berdasarkan informasi yang didengar atau diketahui. Berbeda dari 〜そう (berdasarkan penampilan).",
    jlpt: "N4",
    examples: [
      { jp: "彼は医者らしい。", reading: "Kare wa isha rashii.", meaning: "Tampaknya dia dokter." },
      { jp: "明日は雨らしいです。", reading: "Ashita wa ame rashii desu.", meaning: "Sepertinya besok hujan." },
    ],
    mistakes: "〜らしい (dari info luar) berbeda dari 〜ようだ (dari pengamatan langsung) dan 〜そうだ (dari penampilan fisik).",
  },
  {
    pattern: "〜ために",
    meaning: "Untuk (tujuan) / karena (sebab)",
    formation: "Kata Kerja / Kata Benda + ために",
    explanation: "Menyatakan tujuan (untuk melakukan sesuatu) atau penyebab. Konteksnya tergantung pada kata sebelumnya.",
    jlpt: "N4",
    examples: [
      { jp: "日本語を勉強するために、日本へ来た。", reading: "Nihongo wo benkyou suru tame ni, Nihon e kita.", meaning: "Datang ke Jepang untuk belajar bahasa Jepang." },
      { jp: "病気のために休んだ。", reading: "Byouki no tame ni yasunda.", meaning: "Absen karena sakit." },
    ],
    mistakes: "Untuk tujuan, gunakan Kata Kerja + ために. Untuk alasan/sebab, gunakan Kata Benda + のために.",
  },
  // ── N3 ─────────────────────────────────────────────────────────────
  {
    pattern: "〜ばかりか〜も",
    meaning: "Tidak hanya ... tapi juga ...",
    formation: "A + ばかりか + B + も",
    explanation: "Menyatakan bahwa tidak hanya A, tetapi B juga berlaku. Menunjukkan penambahan yang mengejutkan.",
    jlpt: "N3",
    examples: [
      { jp: "彼は日本語ばかりか中国語も話せる。", reading: "Kare wa Nihongo bakari ka Chuugokugo mo hanaseru.", meaning: "Dia tidak hanya bisa bahasa Jepang, tapi juga bahasa China." },
    ],
    mistakes: "Jangan bingung dengan 〜だけでなく, keduanya mirip tapi 〜ばかりか lebih menekankan kejutan.",
  },
  {
    pattern: "〜さえ〜ば",
    meaning: "Asal saja / selama",
    formation: "Kata Benda + さえ / Kata Kerja (bentuk て) + さえいれば",
    explanation: "Menyatakan kondisi minimum yang diperlukan. 'Asal kondisi X terpenuhi, hasilnya Y.'",
    jlpt: "N3",
    examples: [
      { jp: "お金さえあれば何でも買える。", reading: "Okane sae areba nandemo kaeru.", meaning: "Asal ada uang, bisa beli apa saja." },
      { jp: "練習さえすれば上手になる。", reading: "Renshuu sae sureba jouzu ni naru.", meaning: "Asal berlatih, pasti mahir." },
    ],
    mistakes: "〜さえ〜ば menekankan MINIMUM yang diperlukan, bukan syarat biasa.",
  },
  {
    pattern: "〜に違いない",
    meaning: "Pasti / tidak diragukan lagi",
    formation: "Kata Kerja / Kata Sifat / Kata Benda + に違いない",
    explanation: "Menyatakan keyakinan kuat dari pembicara berdasarkan logika atau bukti. Lebih kuat dari 〜はずだ.",
    jlpt: "N3",
    examples: [
      { jp: "彼はもう家に着いたに違いない。", reading: "Kare wa mou ie ni tsuita ni chigainai.", meaning: "Dia pasti sudah sampai di rumah." },
    ],
    mistakes: "〜に違いない adalah keyakinan pribadi yang kuat, 〜はずだ adalah perkiraan logis.",
  },
  {
    pattern: "〜わけではない",
    meaning: "Bukan berarti / tidak selalu",
    formation: "Kata Kerja / Kata Sifat + わけではない",
    explanation: "Menolak kesimpulan atau asumsi yang mungkin ditarik dari situasi. 'Bukan berarti...' atau 'Tidak selalu...'",
    jlpt: "N3",
    examples: [
      { jp: "お金が全てというわけではない。", reading: "Okane ga subete to iu wake dewa nai.", meaning: "Bukan berarti uang adalah segalanya." },
      { jp: "嫌いなわけではないが、好きでもない。", reading: "Kirai na wake dewa nai ga, suki demo nai.", meaning: "Bukan berarti aku benci, tapi juga tidak suka." },
    ],
    mistakes: "〜わけではない digunakan untuk memberi klarifikasi atau koreksi terhadap asumsi orang lain.",
  },
];

const jlptColors: Record<string, { bg: string; text: string }> = {
  N5: { bg: "#DCFCE7", text: "#22C55E" },
  N4: { bg: "#DBEAFE", text: "#3B82F6" },
  N3: { bg: "#FEF9C3", text: "#F59E0B" },
  N2: { bg: "#FED7AA", text: "#F97316" },
  N1: { bg: "#FEE2E2", text: "#EF4444" },
};

function GrammarCard({ grammar }: { grammar: typeof grammarData[0] }) {
  const [expanded, setExpanded] = useState(false);
  const c = jlptColors[grammar.jlpt];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FFF9F7] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#FCE7EC] text-[#D95F76] font-jp font-bold text-xl px-3 py-2 rounded-xl">
            {grammar.pattern}
          </div>
          <div>
            <h3 className="font-bold text-[#1F2937]">{grammar.meaning}</h3>
            <p className="text-xs text-[#6B7280] mt-0.5">{grammar.formation}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="text-xs font-bold px-2 py-1 rounded-full hidden sm:block"
            style={{ backgroundColor: c.bg, color: c.text }}
          >
            {grammar.jlpt}
          </span>
          {expanded ? <ChevronUp size={16} className="text-[#6B7280]" /> : <ChevronDown size={16} className="text-[#6B7280]" />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-[#E7E5E4] pt-4">
              <p className="text-[#6B7280] text-sm leading-relaxed">{grammar.explanation}</p>

              <div>
                <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">Contoh Kalimat</h4>
                <div className="space-y-2">
                  {grammar.examples.map((ex, i) => (
                    <div key={i} className="bg-[#FFF9F7] rounded-xl p-3">
                      <p className="font-jp font-bold text-[#1F2937]">{ex.jp}</p>
                      <p className="text-xs text-[#6B7280] mt-0.5 italic">{ex.reading}</p>
                      <p className="text-sm text-[#6B7280] mt-0.5">{ex.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-xs font-bold text-amber-700 mb-1">⚠️ Kesalahan Umum</p>
                <p className="text-xs text-amber-700 leading-relaxed">{grammar.mistakes}</p>
              </div>

              <div className="flex gap-2">
                <Link href="/quiz?type=grammar" className="flex-1 py-2 bg-[#D95F76] text-white rounded-xl text-sm font-semibold text-center">
                  Latihan Kuis
                </Link>
                <Link href="/flashcards?type=grammar" className="flex-1 py-2 border border-[#D95F76] text-[#D95F76] rounded-xl text-sm font-semibold text-center">
                  Flashcard
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState("N5");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] flex items-center justify-center">
            <span className="text-xl font-jp text-white font-bold">文</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Tata Bahasa</h1>
            <p className="text-[#6B7280] text-sm">文法 — Pola kalimat & tata bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Level Tabs */}
      <div className="flex gap-2 flex-wrap">
        {["N5", "N4", "N3", "N2", "N1"].map((level) => {
          const c = jlptColors[level];
          return (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border`}
              style={
                activeLevel === level
                  ? { backgroundColor: c.text, color: "white", borderColor: c.text }
                  : { borderColor: "#E7E5E4", color: "#6B7280" }
              }
            >
              {level}
              <span className="ml-1 text-xs opacity-70">
                ({grammarData.filter(g => g.jlpt === level).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Grammar List */}
      <div className="space-y-3">
        {grammarData.filter(g => g.jlpt === activeLevel).length === 0 ? (
          <div className="text-center py-12 text-[#6B7280]">
            <div className="text-4xl mb-3">📚</div>
            <p className="font-medium">Materi {activeLevel} akan segera hadir!</p>
          </div>
        ) : (
          grammarData.filter(g => g.jlpt === activeLevel).map((g) => (
            <GrammarCard key={g.pattern} grammar={g} />
          ))
        )}
      </div>
    </div>
  );
}
