export interface GrammarEntry {
  id: string;
  title: string;
  level: string;
  meaning: string;
  structure: string;
  category: "Particle" | "Verb Conjugation" | "Adjective" | "Expression" | "Noun";
  explanation: string;
  examples: {
    ja: string;
    reading: string;
    id: string;
  }[];
}

export const grammarData: GrammarEntry[] = [
  {
    id: "g1",
    title: "〜です / 〜ます (Desu / Masu)",
    level: "N5",
    meaning: "Adalah / Melakukan (Bentuk Sopan)",
    structure: "[Kata Benda/Sifat] + です | [Kata Kerja] + ます",
    category: "Expression",
    explanation: "Digunakan di akhir kalimat untuk membuatnya sopan (polite form). 'Desu' digunakan setelah kata benda atau kata sifat, sedangkan 'Masu' digunakan sebagai akhiran kata kerja.",
    examples: [
      {
        ja: "私は学生です。",
        reading: "Watashi wa gakusei desu.",
        id: "Saya adalah murid."
      },
      {
        ja: "毎日りんごを食べます。",
        reading: "Mainichi ringo o tabemasu.",
        id: "Setiap hari saya makan apel."
      }
    ]
  },
  {
    id: "g2",
    title: "〜は (Partikel wa)",
    level: "N5",
    meaning: "Adalah (Penanda Subjek/Topik)",
    structure: "[Topik] + は",
    category: "Particle",
    explanation: "Partikel 'wa' (ditulis dengan huruf 'ha' は) digunakan untuk menandai topik dari suatu kalimat.",
    examples: [
      {
        ja: "今日はいい天気です。",
        reading: "Kyou wa ii tenki desu.",
        id: "Hari ini cuacanya bagus."
      },
      {
        ja: "彼は先生です。",
        reading: "Kare wa sensei desu.",
        id: "Dia (laki-laki) adalah guru."
      }
    ]
  },
  {
    id: "g3",
    title: "〜が (Partikel ga)",
    level: "N5",
    meaning: "Penanda Subjek Spesifik",
    structure: "[Subjek] + が",
    category: "Particle",
    explanation: "Digunakan untuk menandai subjek yang melakukan aksi, atau objek dari kata kerja tertentu seperti 'suka' (sukidesu), 'mengerti' (wakarimasu), atau 'ada' (arimasu/imasu).",
    examples: [
      {
        ja: "猫が好きです。",
        reading: "Neko ga suki desu.",
        id: "Saya suka kucing."
      },
      {
        ja: "雨が降っています。",
        reading: "Ame ga futte imasu.",
        id: "Hujan sedang turun."
      }
    ]
  },
  {
    id: "g4",
    title: "〜を (Partikel wo / o)",
    level: "N5",
    meaning: "Penanda Objek",
    structure: "[Objek] + を + [Kata Kerja Transitif]",
    category: "Particle",
    explanation: "Digunakan untuk menandai objek langsung dari sebuah kata kerja. Diucapkan seperti 'o'.",
    examples: [
      {
        ja: "水を飲みます。",
        reading: "Mizu o nomimasu.",
        id: "Saya minum air."
      },
      {
        ja: "本を読みます。",
        reading: "Hon o yomimasu.",
        id: "Saya membaca buku."
      }
    ]
  },
  {
    id: "g5",
    title: "〜に (Partikel ni)",
    level: "N5",
    meaning: "Di / Ke / Pada (Penanda Waktu, Tempat, Tujuan)",
    structure: "[Waktu/Tempat/Tujuan] + に",
    category: "Particle",
    explanation: "Digunakan untuk menunjukkan waktu spesifik, tujuan arah (ke mana), atau lokasi keberadaan sesuatu (dengan kata kerja arimasu/imasu).",
    examples: [
      {
        ja: "７時に起きます。",
        reading: "Shichiji ni okimasu.",
        id: "Saya bangun pada jam 7."
      },
      {
        ja: "東京に行きます。",
        reading: "Tokyo ni ikimasu.",
        id: "Saya pergi ke Tokyo."
      }
    ]
  },
  {
    id: "g6",
    title: "〜で (Partikel de)",
    level: "N5",
    meaning: "Di / Dengan (Penanda Tempat Aktivitas, Alat)",
    structure: "[Tempat/Alat] + で",
    category: "Particle",
    explanation: "Menunjukkan tempat di mana sebuah aktivitas/aksi terjadi, atau alat/metode yang digunakan untuk melakukan sesuatu.",
    examples: [
      {
        ja: "レストランで食べます。",
        reading: "Resutoran de tabemasu.",
        id: "Saya makan di restoran."
      },
      {
        ja: "電車で行きます。",
        reading: "Densha de ikimasu.",
        id: "Saya pergi dengan kereta."
      }
    ]
  },
  {
    id: "g7",
    title: "これ / それ / あれ (Kore / Sore / Are)",
    level: "N5",
    meaning: "Ini / Itu / Itu (Jauh)",
    structure: "これ/それ/あれ + は + [Kata Benda] + です",
    category: "Noun",
    explanation: "Kore (Ini, dekat pembicara). Sore (Itu, dekat lawan bicara). Are (Itu jauh, jauh dari keduanya). Dore (Yang mana?). Berfungsi sebagai kata ganti benda.",
    examples: [
      {
        ja: "これは私の本です。",
        reading: "Kore wa watashi no hon desu.",
        id: "Ini adalah buku saya."
      },
      {
        ja: "あれは何ですか？",
        reading: "Are wa nan desu ka?",
        id: "Itu (di sana) apa?"
      }
    ]
  },
  {
    id: "g8",
    title: "〜てください (〜te kudasai)",
    level: "N5",
    meaning: "Tolong ... (Permintaan)",
    structure: "[Kata Kerja Bentuk-Te] + ください",
    category: "Verb Conjugation",
    explanation: "Digunakan untuk meminta seseorang melakukan sesuatu dengan sopan.",
    examples: [
      {
        ja: "ちょっと待ってください。",
        reading: "Chotto matte kudasai.",
        id: "Tolong tunggu sebentar."
      },
      {
        ja: "ここに書いてください。",
        reading: "Koko ni kaite kudasai.",
        id: "Tolong tulis di sini."
      }
    ]
  },
  {
    id: "g9",
    title: "〜ないでください (〜nai de kudasai)",
    level: "N5",
    meaning: "Tolong jangan ...",
    structure: "[Kata Kerja Bentuk-Nai] + でください",
    category: "Verb Conjugation",
    explanation: "Digunakan untuk meminta seseorang agar TIDAK melakukan sesuatu.",
    examples: [
      {
        ja: "忘れないでください。",
        reading: "Wasurenai de kudasai.",
        id: "Tolong jangan lupa."
      },
      {
        ja: "ここで写真を撮らないでください。",
        reading: "Koko de shashin o toranai de kudasai.",
        id: "Tolong jangan mengambil foto di sini."
      }
    ]
  },
  {
    id: "g10",
    title: "〜たいです (〜tai desu)",
    level: "N5",
    meaning: "Ingin ...",
    structure: "[Kata Kerja Bentuk-Masu (hilangkan masu)] + たいです",
    category: "Verb Conjugation",
    explanation: "Digunakan untuk mengekspresikan keinginan pembicara untuk melakukan suatu tindakan.",
    examples: [
      {
        ja: "日本へ行きたいです。",
        reading: "Nihon e ikitai desu.",
        id: "Saya ingin pergi ke Jepang."
      },
      {
        ja: "お寿司が食べたいです。",
        reading: "Osushi ga tabetai desu.",
        id: "Saya ingin makan sushi."
      }
    ]
  }
];
