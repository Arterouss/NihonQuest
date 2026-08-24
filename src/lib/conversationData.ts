export interface DialogueLine {
  speaker: string;
  jp: string;
  reading: string;
  meaning: string;
}

export interface Dialogue {
  id: number;
  title: string;
  level: string;
  scenario: string;
  lines: DialogueLine[];
}

export const conversationData: Dialogue[] = [
  {
    "id": 1,
    "title": "Perkenalan Diri",
    "level": "N5",
    "scenario": "Pertemuan pertama dengan seseorang",
    "lines": [
      {
        "speaker": "A",
        "jp": "はじめまして。わたしはやまださくらです。",
        "reading": "Hajimemashite. Watashi wa Yamada Sakura desu.",
        "meaning": "Salam kenal. Saya Yamada Sakura."
      },
      {
        "speaker": "B",
        "jp": "はじめまして。わたしはすずきたろうです。よろしくおねがいします。",
        "reading": "Hajimemashite. Watashi wa Suzuki Taro desu. Yoroshiku onegaishimasu.",
        "meaning": "Salam kenal. Saya Suzuki Taro. Senang berkenalan."
      },
      {
        "speaker": "A",
        "jp": "こちらこそ、よろしくおねがいします。おしごとは？",
        "reading": "Kochira koso, yoroshiku onegaishimasu. Oshigoto wa?",
        "meaning": "Sama-sama, senang berkenalan. Pekerjaan Anda?"
      },
      {
        "speaker": "B",
        "jp": "わたしはかいしゃいんです。やまださんは？",
        "reading": "Watashi wa kaishain desu. Yamada-san wa?",
        "meaning": "Saya karyawan perusahaan. Bagaimana dengan Yamada-san?"
      },
      {
        "speaker": "A",
        "jp": "わたしはがくせいです。だいがくさんねんせいです。",
        "reading": "Watashi wa gakusei desu. Daigaku 3-nensei desu.",
        "meaning": "Saya mahasiswa. Mahasiswa tahun ketiga."
      }
    ]
  },
  {
    "id": 2,
    "title": "Di Kafe",
    "level": "N5",
    "scenario": "Memesan minuman dan makanan",
    "lines": [
      {
        "speaker": "Pelayan",
        "jp": "いらっしゃいませ！なにになさいますか？",
        "reading": "Irasshaimase! Nani ni nasaimasu ka?",
        "meaning": "Selamat datang! Mau pesan apa?"
      },
      {
        "speaker": "Kamu",
        "jp": "えーと、コーヒーをひとつください。",
        "reading": "E-to, ko-hi- wo hitotsu kudasai.",
        "meaning": "Hmm, kopi satu, tolong."
      },
      {
        "speaker": "Pelayan",
        "jp": "ホットとアイス、どちらになさいますか？",
        "reading": "Hotto to aisu, dochira ni nasaimasu ka?",
        "meaning": "Panas atau dingin, yang mana?"
      },
      {
        "speaker": "Kamu",
        "jp": "ホットでおねがいします。いくらですか？",
        "reading": "Hotto de onegaishimasu. Ikura desu ka?",
        "meaning": "Panas, tolong. Berapa harganya?"
      },
      {
        "speaker": "Pelayan",
        "jp": "さんびゃくえんです。",
        "reading": "Sanbyaku en desu.",
        "meaning": "300 yen."
      }
    ]
  },
  {
    "id": 3,
    "title": "Menanyakan Arah",
    "level": "N5",
    "scenario": "Bertanya lokasi stasiun",
    "lines": [
      {
        "speaker": "Turis",
        "jp": "すみません、えきはどこですか？",
        "reading": "Sumimasen, eki wa doko desu ka?",
        "meaning": "Permisi, stasiun ada di mana?"
      },
      {
        "speaker": "Lokal",
        "jp": "えきですね。このみちをまっすぐいってください。",
        "reading": "Eki desu ne. Kono michi wo massugu itte kudasai.",
        "meaning": "Stasiun ya. Silakan jalan lurus terus di jalan ini."
      },
      {
        "speaker": "Turis",
        "jp": "まっすぐですね。とおいですか？",
        "reading": "Massugu desu ne. Tooi desu ka?",
        "meaning": "Lurus terus ya. Apakah jauh?"
      },
      {
        "speaker": "Lokal",
        "jp": "いいえ、ちかいですよ。ごふんぐらいです。",
        "reading": "Iie, chikai desu yo. Gofun gurai desu.",
        "meaning": "Tidak, dekat kok. Sekitar lima menit."
      },
      {
        "speaker": "Turis",
        "jp": "わかりました。ありがとうございます！",
        "reading": "Wakarimashita. Arigatou gozaimasu!",
        "meaning": "Baiklah. Terima kasih banyak!"
      }
    ]
  },
  {
    "id": 4,
    "title": "Belanja di Toko",
    "level": "N5",
    "scenario": "Membeli pakaian dan menawar",
    "lines": [
      {
        "speaker": "Kamu",
        "jp": "すみません、これはいくらですか？",
        "reading": "Sumimasen, kore wa ikura desu ka?",
        "meaning": "Permisi, ini harganya berapa?"
      },
      {
        "speaker": "Kasir",
        "jp": "それはごせんえんです。",
        "reading": "Sore wa gosen en desu.",
        "meaning": "Itu harganya 5.000 yen."
      },
      {
        "speaker": "Kamu",
        "jp": "うーん、ちょっとたかいですね。",
        "reading": "U-n, chotto takai desu ne.",
        "meaning": "Hmm, agak mahal ya."
      },
      {
        "speaker": "Kasir",
        "jp": "じゃあ、こちらはどうですか？さんぜんえんです。",
        "reading": "Jaa, kochira wa dou desu ka? Sanzen en desu.",
        "meaning": "Kalau begitu, bagaimana dengan yang ini? Harganya 3.000 yen."
      },
      {
        "speaker": "Kamu",
        "jp": "いいですね。これにします！",
        "reading": "Ii desu ne. Kore ni shimasu!",
        "meaning": "Bagus. Saya ambil yang ini!"
      }
    ]
  },
  {
    "id": 5,
    "title": "Membuat Janji",
    "level": "N4",
    "scenario": "Mengajak teman pergi di akhir pekan",
    "lines": [
      {
        "speaker": "A",
        "jp": "今週末、暇ですか？",
        "reading": "Konshuumatsu, hima desu ka?",
        "meaning": "Akhir pekan ini kamu luang tidak?"
      },
      {
        "speaker": "B",
        "jp": "ええ、特に予定はありません。どうしてですか？",
        "reading": "Ee, tokuni yotei wa arimasen. Doushite desu ka?",
        "meaning": "Iya, tidak ada rencana khusus. Memangnya kenapa?"
      },
      {
        "speaker": "A",
        "jp": "新しい映画を見に行きませんか？",
        "reading": "Atarashii eiga wo mi ni ikimasen ka?",
        "meaning": "Maukah pergi nonton film baru?"
      },
      {
        "speaker": "B",
        "jp": "いいですね！土曜日と日曜日、どちらがいいですか？",
        "reading": "Ii desu ne! Doyoubi to nichiyoubi, dochira ga ii desu ka?",
        "meaning": "Boleh! Sabtu dan Minggu, lebih baik yang mana?"
      },
      {
        "speaker": "A",
        "jp": "土曜日の午後がいいです。",
        "reading": "Doyoubi no gogo ga ii desu.",
        "meaning": "Sabtu sore lebih baik."
      }
    ]
  },
  {
    "id": 6,
    "title": "Di Stasiun Kereta",
    "level": "N4",
    "scenario": "Tanya jadwal kereta karena terlambat",
    "lines": [
      {
        "speaker": "Kamu",
        "jp": "すみません、次の東京行きの電車は何時ですか？",
        "reading": "Sumimasen, tsugi no Toukyou yuki no densha wa nanji desu ka?",
        "meaning": "Permisi, kereta ke Tokyo selanjutnya jam berapa?"
      },
      {
        "speaker": "Petugas",
        "jp": "次の電車は10時15分です。",
        "reading": "Tsugi no densha wa juuji juugofun desu.",
        "meaning": "Kereta selanjutnya jam 10:15."
      },
      {
        "speaker": "Kamu",
        "jp": "急行ですか？それとも各駅停車ですか？",
        "reading": "Kyuukou desu ka? Soretomo kakueki teisha desu ka?",
        "meaning": "Apakah kereta ekspres? Atau kereta lokal (berhenti di tiap stasiun)?"
      },
      {
        "speaker": "Petugas",
        "jp": "急行です。東京まで約40分かかります。",
        "reading": "Kyuukou desu. Toukyou made yaku yonjuppun kakarimasu.",
        "meaning": "Ekspres. Ke Tokyo memakan waktu sekitar 40 menit."
      },
      {
        "speaker": "Kamu",
        "jp": "わかりました。急いで切符を買います。",
        "reading": "Wakarimashita. Isoide kippu wo kaimasu.",
        "meaning": "Baiklah. Saya akan cepat beli tiket."
      }
    ]
  },
  {
    "id": 7,
    "title": "Izin Sakit",
    "level": "N3",
    "scenario": "Menelepon atasan untuk izin tidak masuk kerja",
    "lines": [
      {
        "speaker": "Kamu",
        "jp": "もしもし、山田部長でしょうか。佐藤です。",
        "reading": "Moshimoshi, Yamada bucho deshou ka. Satou desu.",
        "meaning": "Halo, apakah ini Manajer Yamada? Saya Sato."
      },
      {
        "speaker": "Atasan",
        "jp": "あ、佐藤くん。どうしたの？声が変だね。",
        "reading": "A, Satou-kun. Doushita no? Koe ga hen da ne.",
        "meaning": "Ah, Sato. Ada apa? Suaramu terdengar aneh."
      },
      {
        "speaker": "Kamu",
        "jp": "実は、昨日の夜から熱があって、今日は休ませていただけないでしょうか。",
        "reading": "Jitsu wa, kinou no yoru kara netsu ga atte, kyou wa yasumasete itadakenai deshou ka.",
        "meaning": "Sebenarnya, sejak semalam saya demam, apakah saya boleh izin istirahat hari ini?"
      },
      {
        "speaker": "Atasan",
        "jp": "それは大変だ。無理しないで、ゆっくり休んでください。",
        "reading": "Sore wa taihen da. Muri shinaide, yukkuri yasunde kudasai.",
        "meaning": "Wah gawat. Jangan dipaksakan, beristirahatlah dengan baik."
      },
      {
        "speaker": "Kamu",
        "jp": "ご迷惑をおかけして申し訳ありません。明日は出社できると思います。",
        "reading": "Gomeiwaku wo okakeshite moushiwake arimasen. Ashita wa shussha dekiru to omoimasu.",
        "meaning": "Mohon maaf telah merepotkan. Saya rasa besok sudah bisa masuk kantor."
      }
    ]
  },
  {
    "id": 8,
    "title": "Komplain Barang",
    "level": "N3",
    "scenario": "Mengembalikan barang yang cacat di toko",
    "lines": [
      {
        "speaker": "Kamu",
        "jp": "すみません、昨日買ったこのシャツなんですが、ほつれがありました。",
        "reading": "Sumimasen, kinou katta kono shatsu nan desu ga, hotsure ga arimashita.",
        "meaning": "Permisi, soal kemeja yang saya beli kemarin ini, ada bagian yang benangnya lepas."
      },
      {
        "speaker": "Pelayan",
        "jp": "大変申し訳ございません。レシートはお持ちでしょうか。",
        "reading": "Taihen moushiwake gozaimasen. Reshi-to wa omochi deshou ka.",
        "meaning": "Kami sangat memohon maaf. Apakah Anda membawa struknya?"
      },
      {
        "speaker": "Kamu",
        "jp": "はい、これです。新しいものと交換できますか？",
        "reading": "Hai, kore desu. Atarashii mono to koukan dekimasu ka?",
        "meaning": "Ya, ini. Apakah bisa ditukar dengan yang baru?"
      },
      {
        "speaker": "Pelayan",
        "jp": "もちろんでございます。すぐに新しい商品をお持ちいたします。",
        "reading": "Mochiron de gozaimasu. Suguni atarashii shouhin wo omochi itashimasu.",
        "meaning": "Tentu saja. Saya akan segera membawakan produk yang baru."
      },
      {
        "speaker": "Kamu",
        "jp": "よろしくお願いします。",
        "reading": "Yoroshiku onegaishimasu.",
        "meaning": "Tolong ya."
      }
    ]
  },
  {
    "id": 9,
    "title": "Wawancara Kerja",
    "level": "N2",
    "scenario": "Menjawab pertanyaan motivasi di perusahaan Jepang",
    "lines": [
      {
        "speaker": "HRD",
        "jp": "それでは、当社を志望した理由を教えていただけますか。",
        "reading": "Sore dewa, tousha wo shibou shita riyuu wo oshiete itadakemasu ka.",
        "meaning": "Kalau begitu, bisakah Anda memberitahu alasan melamar di perusahaan kami?"
      },
      {
        "speaker": "Kamu",
        "jp": "はい。御社の環境問題に対する革新的な取り組みに強く惹かれたからです。",
        "reading": "Hai. Onsha no kankyou mondai ni taisuru kakushinteki na torikumi ni tsuyoku hikareta kara desu.",
        "meaning": "Baik. Karena saya sangat tertarik dengan upaya inovatif perusahaan Anda terhadap masalah lingkungan."
      },
      {
        "speaker": "HRD",
        "jp": "なるほど。前職での経験はどのように活かせると思いますか。",
        "reading": "Naruhodo. Zenshoku de no keiken wa dono you ni ikaseru to omoimasu ka.",
        "meaning": "Begitu ya. Bagaimana menurut Anda pengalaman di pekerjaan sebelumnya bisa dimanfaatkan?"
      },
      {
        "speaker": "Kamu",
        "jp": "前職ではプロジェクトリーダーを務めており、そのマネジメント経験が御社でも貢献できると確信しております。",
        "reading": "Zenshoku de wa purojekuto ri-da- wo tsutomete ori, sono manejimento keiken ga onsha demo kouken dekiru to kakushin shite orimasu.",
        "meaning": "Di pekerjaan sebelumnya saya menjabat sebagai pemimpin proyek, saya yakin pengalaman manajemen tersebut bisa berkontribusi di perusahaan Anda."
      },
      {
        "speaker": "HRD",
        "jp": "素晴らしいですね。期待しております。",
        "reading": "Subarashii desu ne. Kitai shite orimasu.",
        "meaning": "Luar biasa. Kami menantikannya."
      }
    ]
  },
  {
    "id": 10,
    "title": "Diskusi Bisnis Formal",
    "level": "N1",
    "scenario": "Negosiasi kontrak dan penyesuaian syarat",
    "lines": [
      {
        "speaker": "Klien",
        "jp": "今回の契約内容ですが、納期に関して少々懸念を抱いております。",
        "reading": "Konkai no keiyaku naiyou desu ga, nouki ni kanshite shoushou kenen wo idaite orimasu.",
        "meaning": "Mengenai isi kontrak kali ini, kami memiliki sedikit kekhawatiran terkait tenggat waktu pengiriman."
      },
      {
        "speaker": "Kamu",
        "jp": "左様でございますか。具体的にどの程度の前倒しをご希望でしょうか。",
        "reading": "Sayou de gozaimasu ka. Gutaiteki ni dono teido no maedaoshi wo gokibou deshou ka.",
        "meaning": "Begitu ya. Secara spesifik, seberapa cepat pengajuan yang Anda harapkan?"
      },
      {
        "speaker": "Klien",
        "jp": "できれば、予定より一週間早めていただけると助かるのですが。",
        "reading": "Dekireba, yotei yori isshuukan hayamete itadakeru to tasukaru no desu ga.",
        "meaning": "Jika memungkinkan, kami akan sangat tertolong bila bisa dimajukan satu minggu dari jadwal."
      },
      {
        "speaker": "Kamu",
        "jp": "承知いたしました。社内に持ち帰り、生産部門と至急調整を図ります。",
        "reading": "Shouchi itashimashita. Shanai ni mochikaeri, seisan bumon to shikyuu chousei wo hakarimasu.",
        "meaning": "Baik, saya mengerti. Saya akan bawa hal ini ke kantor dan segera mengkoordinasikannya dengan departemen produksi."
      },
      {
        "speaker": "Klien",
        "jp": "ご無理を申し上げますが、何卒よろしくお願いいたします。",
        "reading": "Gomuri wo moushiagemasu ga, nanitozo yoroshiku onegai itashimasu.",
        "meaning": "Saya tahu kami meminta hal yang sulit, tapi kami sangat memohon bantuan Anda."
      }
    ]
  }
];
