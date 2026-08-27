export interface KeigoEntry {
  casual: string;
  casualReading: string;
  teineigo: string;
  teineigoReading: string;
  sonkeigo?: string;
  sonkeigoReading?: string;
  kenjogo?: string;
  kenjogoReading?: string;
  meaning: string;
}

export interface KeigoCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
  entries: KeigoEntry[];
}

export const keigoCategories: KeigoCategory[] = [
  {
    id: "teineigo",
    title: "丁寧語 (Teineigo)",
    subtitle: "Bahasa Sopan Standar",
    description: "Bahasa yang sopan dan netral. Digunakan dengan siapa saja yang tidak terlalu akrab, seperti orang yang baru dikenal, kasir, atau kenalan biasa.",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    icon: "🤝",
    entries: [
      { casual: "だ / です", casualReading: "da / desu", teineigo: "です", teineigoReading: "desu", meaning: "Adalah (kopula)" },
      { casual: "する", casualReading: "suru", teineigo: "します", teineigoReading: "shimasu", meaning: "Melakukan" },
      { casual: "食べる", casualReading: "taberu", teineigo: "食べます", teineigoReading: "tabemasu", meaning: "Makan" },
      { casual: "飲む", casualReading: "nomu", teineigo: "飲みます", teineigoReading: "nomimasu", meaning: "Minum" },
      { casual: "行く", casualReading: "iku", teineigo: "行きます", teineigoReading: "ikimasu", meaning: "Pergi" },
      { casual: "来る", casualReading: "kuru", teineigo: "来ます", teineigoReading: "kimasu", meaning: "Datang" },
    ],
  },
  {
    id: "sonkeigo",
    title: "尊敬語 (Sonkeigo)",
    subtitle: "Bahasa Penghormatan",
    description: "Digunakan untuk meninggikan status orang lain (atasan, pelanggan, guru). Kata kerja berubah sepenuhnya untuk menghormati tindakan orang lain.",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    icon: "👑",
    entries: [
      { casual: "いる", casualReading: "iru", teineigo: "います", teineigoReading: "imasu", sonkeigo: "いらっしゃる", sonkeigoReading: "irassharu", meaning: "Ada / Berada" },
      { casual: "する", casualReading: "suru", teineigo: "します", teineigoReading: "shimasu", sonkeigo: "なさる", sonkeigoReading: "nasaru", meaning: "Melakukan" },
      { casual: "食べる/飲む", casualReading: "taberu/nomu", teineigo: "食べます/飲みます", teineigoReading: "tabemasu/nomimasu", sonkeigo: "召し上がる", sonkeigoReading: "meshiagaru", meaning: "Makan / Minum" },
      { casual: "言う", casualReading: "iu", teineigo: "言います", teineigoReading: "iimasu", sonkeigo: "おっしゃる", sonkeigoReading: "ossharu", meaning: "Berkata / Berbicara" },
      { casual: "来る/行く", casualReading: "kuru/iku", teineigo: "来ます/行きます", teineigoReading: "kimasu/ikimasu", sonkeigo: "いらっしゃる", sonkeigoReading: "irassharu", meaning: "Datang / Pergi" },
      { casual: "知っている", casualReading: "shitte iru", teineigo: "知っています", teineigoReading: "shitte imasu", sonkeigo: "ご存知", sonkeigoReading: "go-zonji", meaning: "Mengetahui" },
      { casual: "もらう", casualReading: "morau", teineigo: "もらいます", teineigoReading: "moraimasu", sonkeigo: "お受け取りになる", sonkeigoReading: "o-uketori ni naru", meaning: "Menerima" },
    ],
  },
  {
    id: "kenjogo",
    title: "謙譲語 (Kenjōgo)",
    subtitle: "Bahasa Merendah",
    description: "Digunakan untuk merendahkan diri sendiri di hadapan orang yang dihormati. Ini adalah tanda kerendahan hati yang sangat penting dalam budaya Jepang.",
    color: "#10B981",
    bgColor: "#ECFDF5",
    icon: "🙇",
    entries: [
      { casual: "いる", casualReading: "iru", teineigo: "います", teineigoReading: "imasu", kenjogo: "おる", kenjogoReading: "oru", meaning: "Ada / Berada" },
      { casual: "する", casualReading: "suru", teineigo: "します", teineigoReading: "shimasu", kenjogo: "いたす", kenjogoReading: "itasu", meaning: "Melakukan" },
      { casual: "食べる/飲む", casualReading: "taberu/nomu", teineigo: "食べます/飲みます", teineigoReading: "tabemasu/nomimasu", kenjogo: "いただく", kenjogoReading: "itadaku", meaning: "Makan / Minum" },
      { casual: "言う", casualReading: "iu", teineigo: "言います", teineigoReading: "iimasu", kenjogo: "申す", kenjogoReading: "mousu", meaning: "Berkata / Berbicara" },
      { casual: "行く/来る", casualReading: "iku/kuru", teineigo: "行きます/来ます", teineigoReading: "ikimasu/kimasu", kenjogo: "参る", kenjogoReading: "mairu", meaning: "Pergi / Datang" },
      { casual: "知っている", casualReading: "shitte iru", teineigo: "知っています", teineigoReading: "shitte imasu", kenjogo: "存じている", kenjogoReading: "zonjite iru", meaning: "Mengetahui" },
      { casual: "もらう", casualReading: "morau", teineigo: "もらいます", teineigoReading: "moraimasu", kenjogo: "いただく", kenjogoReading: "itadaku", meaning: "Menerima" },
    ],
  },
];

export const keigoExpressions = [
  { situation: "Memperkenalkan diri", expression: "申します (moushimasu)", meaning: "Nama saya adalah... (versi merendah)", example: "田中と申します。(Saya yang bernama Tanaka.)" },
  { situation: "Meminta tolong", expression: "よろしくお願いいたします", meaning: "Mohon bimbingan dan kerjasama Anda", example: "今後ともよろしくお願いいたします。" },
  { situation: "Meminta maaf (formal)", expression: "大変申し訳ございません", meaning: "Saya sangat menyesal / Maaf sekali", example: "ご迷惑をおかけして、大変申し訳ございません。" },
  { situation: "Menyambut tamu (di toko)", expression: "いらっしゃいませ (irasshaimase)", meaning: "Selamat datang", example: "いらっしゃいませ、何かお探しですか？" },
  { situation: "Izin pergi lebih dulu", expression: "お先に失礼します", meaning: "Permisi, saya pergi lebih dulu", example: "お先に失礼します。お疲れ様でした。" },
];

export const budayaItems = [
  { icon: "🙇", title: "お辞儀 (Ojigi) — Membungkuk", desc: "Cara menyapa orang Jepang. Semakin dalam membungkuk, semakin besar rasa hormat Anda. 15° untuk sapaan biasa, 30° untuk terima kasih formal, 45° untuk permintaan maaf yang tulus.", },
  { icon: "💼", title: "名刺 (Meishi) — Kartu Nama", desc: "Berikan dan terima kartu nama dengan kedua tangan. Baca dulu dengan seksama sebelum meletakkannya, jangan sembarangan menaruhnya di saku.", },
  { icon: "🍽️", title: "いただきます / ごちそうさま", desc: "'Itadakimasu' sebelum makan (ungkapan syukur atas makanan), 'Gochisousama deshita' setelah selesai makan (terima kasih atas jamuan ini).", },
  { icon: "🎁", title: "プレゼント (Present) — Hadiah", desc: "Hadiah biasanya tidak dibuka langsung di depan pemberi. Ini dianggap sopan di Jepang. Buka hadiah di tempat yang lebih privat.", },
  { icon: "🚇", title: "Etika di Transportasi Umum", desc: "Berbicara pelan di telepon, tidak makan di kereta, mendahulukan penumpang yang keluar, dan mematikan bunyi HP di area tertentu.", },
  { icon: "👟", title: "Melepas Alas Kaki", desc: "Selalu lepas sepatu saat memasuki rumah Jepang atau ryokan (penginapan tradisional). Gunakan sandal yang disediakan di dalam rumah.", },
];
