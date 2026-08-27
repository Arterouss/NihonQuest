export interface PitchWord {
  word: string;
  reading: string;
  meaning: string;
  pattern: "heiban" | "atamadaka" | "odaka" | "nakadaka";
  patternLabel: string;
  morae: string[];
  highMorae: boolean[]; // true = high pitch, false = low pitch
  example: string;
  audioUrl?: string;
}

export const pitchPatterns = [
  {
    id: "heiban",
    name: "平板型 (Heiban)",
    description: "Nada rendah di awal, lalu naik dan tetap tinggi sampai akhir. Paling umum digunakan.",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
  },
  {
    id: "atamadaka",
    name: "頭高型 (Atamadaka)",
    description: "Nada tinggi di suku kata pertama, lalu turun dan tetap rendah.",
    color: "#EF4444",
    bgColor: "#FEF2F2",
  },
  {
    id: "odaka",
    name: "尾高型 (Odaka)",
    description: "Nada rendah di awal, naik, dan turun tepat setelah suku kata terakhir.",
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
  {
    id: "nakadaka",
    name: "中高型 (Nakadaka)",
    description: "Nada naik di tengah lalu turun sebelum suku kata terakhir.",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
];

export const pitchWords: PitchWord[] = [
  // Heiban
  {
    word: "桜",
    reading: "さくら",
    meaning: "Bunga Sakura",
    pattern: "heiban",
    patternLabel: "平板型",
    morae: ["さ", "く", "ら"],
    highMorae: [false, true, true],
    example: "桜がきれいですね。(Bunganya cantik ya.)",
  },
  {
    word: "電話",
    reading: "でんわ",
    meaning: "Telepon",
    pattern: "heiban",
    patternLabel: "平板型",
    morae: ["で", "ん", "わ"],
    highMorae: [false, true, true],
    example: "電話してください。(Tolong hubungi saya.)",
  },
  {
    word: "学生",
    reading: "がくせい",
    meaning: "Pelajar / Mahasiswa",
    pattern: "heiban",
    patternLabel: "平板型",
    morae: ["が", "く", "せ", "い"],
    highMorae: [false, true, true, true],
    example: "私は学生です。(Saya adalah pelajar.)",
  },
  // Atamadaka
  {
    word: "橋",
    reading: "はし",
    meaning: "Jembatan",
    pattern: "atamadaka",
    patternLabel: "頭高型",
    morae: ["は", "し"],
    highMorae: [true, false],
    example: "橋を渡ります。(Menyeberangi jembatan.)",
  },
  {
    word: "雨",
    reading: "あめ",
    meaning: "Hujan",
    pattern: "atamadaka",
    patternLabel: "頭高型",
    morae: ["あ", "め"],
    highMorae: [true, false],
    example: "雨が降っています。(Sedang hujan.)",
  },
  {
    word: "春",
    reading: "はる",
    meaning: "Musim Semi",
    pattern: "atamadaka",
    patternLabel: "頭高型",
    morae: ["は", "る"],
    highMorae: [true, false],
    example: "春が来た。(Musim semi telah tiba.)",
  },
  // Odaka
  {
    word: "箸",
    reading: "はし",
    meaning: "Sumpit",
    pattern: "odaka",
    patternLabel: "尾高型",
    morae: ["は", "し"],
    highMorae: [false, true],
    example: "箸で食べます。(Makan menggunakan sumpit.)",
  },
  {
    word: "男",
    reading: "おとこ",
    meaning: "Laki-laki",
    pattern: "odaka",
    patternLabel: "尾高型",
    morae: ["お", "と", "こ"],
    highMorae: [false, true, true],
    example: "あの男の人は誰ですか？(Siapa pria itu?)",
  },
  // Nakadaka
  {
    word: "お母さん",
    reading: "おかあさん",
    meaning: "Ibu",
    pattern: "nakadaka",
    patternLabel: "中高型",
    morae: ["お", "か", "あ", "さ", "ん"],
    highMorae: [false, true, true, false, false],
    example: "お母さんはどこですか？(Di mana ibu?)",
  },
  {
    word: "心",
    reading: "こころ",
    meaning: "Hati / Pikiran",
    pattern: "nakadaka",
    patternLabel: "中高型",
    morae: ["こ", "こ", "ろ"],
    highMorae: [false, true, false],
    example: "心が温かい人。(Orang yang berhati hangat.)",
  },
];
