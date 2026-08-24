export interface ListeningQuestion {
  q: string;
  options: string[];
  correct: number;
}

export interface ListeningExercise {
  id: number;
  title: string;
  level: string;
  duration: string;
  script: string;
  translation: string;
  questions: ListeningQuestion[];
}

export const listeningData: ListeningExercise[] = [
  {
    "id": 1,
    "title": "Perkenalan Diri",
    "level": "N5",
    "duration": "1:30",
    "script": "はじめまして。わたしはさとうゆかです。にじゅうさんさいです。よろしくおねがいします。",
    "translation": "Salam kenal. Saya Yuka Sato. Umur saya 23 tahun. Senang berkenalan dengan Anda.",
    "questions": [
      {
        "q": "Berapa umur Yuka Sato?",
        "options": [
          "21 tahun",
          "22 tahun",
          "23 tahun",
          "24 tahun"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 2,
    "title": "Di Restoran",
    "level": "N5",
    "duration": "2:15",
    "script": "いらっしゃいませ！なんめいさまですか？ふたりです。じゃあ、こちらへどうぞ。",
    "translation": "Selamat datang! Berapa orang? Dua orang. Kalau begitu, silakan ke sini.",
    "questions": [
      {
        "q": "Berapa orang tamu yang datang ke restoran?",
        "options": [
          "1 orang",
          "2 orang",
          "3 orang",
          "4 orang"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 3,
    "title": "Jadwal Kereta",
    "level": "N5",
    "duration": "1:45",
    "script": "つぎのとうきょうゆきの電車は、じゅうじはんしゅっぱつです。さんばんせんからでます。",
    "translation": "Kereta tujuan Tokyo selanjutnya berangkat jam 10:30. Berangkat dari peron nomor 3.",
    "questions": [
      {
        "q": "Kereta akan berangkat dari peron nomor berapa?",
        "options": [
          "Peron 1",
          "Peron 2",
          "Peron 3",
          "Peron 4"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 4,
    "title": "Prakiraan Cuaca",
    "level": "N4",
    "duration": "2:00",
    "script": "明日の天気は晴れのち曇りでしょう。午後は雨が降るかもしれませんから、傘を持って出かけてください。",
    "translation": "Cuaca besok kemungkinan cerah lalu berawan. Karena sore harinya mungkin akan turun hujan, tolong bawa payung saat keluar.",
    "questions": [
      {
        "q": "Apa yang harus dibawa saat keluar rumah besok?",
        "options": [
          "Payung",
          "Kacamata hitam",
          "Jas",
          "Topi"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": 5,
    "title": "Pesan di Telepon",
    "level": "N4",
    "duration": "2:30",
    "script": "もしもし、田中です。今、駅に着きました。会議は3時からですね。すぐに向かいます。",
    "translation": "Halo, ini Tanaka. Sekarang saya sudah sampai di stasiun. Rapatnya jam 3 kan? Saya akan segera menuju ke sana.",
    "questions": [
      {
        "q": "Jam berapa rapat akan dimulai?",
        "options": [
          "Jam 1",
          "Jam 2",
          "Jam 3",
          "Jam 4"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 6,
    "title": "Rencana Akhir Pekan",
    "level": "N4",
    "duration": "1:50",
    "script": "今週の土曜日は友達と映画を見に行きます。日曜日は家でゆっくり休むつもりです。",
    "translation": "Sabtu minggu ini saya akan pergi nonton film dengan teman. Hari Minggu saya berencana santai istirahat di rumah.",
    "questions": [
      {
        "q": "Apa yang akan dia lakukan pada hari Minggu?",
        "options": [
          "Nonton film",
          "Istirahat di rumah",
          "Bertemu teman",
          "Belanja"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 7,
    "title": "Pengumuman Bandara",
    "level": "N3",
    "duration": "3:10",
    "script": "お客様にご案内いたします。ニューヨーク行きJL123便は、出発が30分遅れます。ご迷惑をおかけして申し訳ありません。",
    "translation": "Pengumuman untuk penumpang. Penerbangan JL123 tujuan New York, keberangkatannya akan terlambat 30 menit. Kami memohon maaf atas ketidaknyamanan ini.",
    "questions": [
      {
        "q": "Berapa lama penerbangan tersebut terlambat?",
        "options": [
          "10 menit",
          "20 menit",
          "30 menit",
          "1 jam"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 8,
    "title": "Wawancara TV",
    "level": "N3",
    "duration": "4:00",
    "script": "このレストランが人気の理由は、料理が美味しいだけでなく、店員のサービスが素晴らしいからです。特に週末は予約がいっぱいです。",
    "translation": "Alasan mengapa restoran ini populer bukan hanya karena makanannya enak, tapi juga karena pelayanan stafnya yang luar biasa. Terutama di akhir pekan, reservasinya selalu penuh.",
    "questions": [
      {
        "q": "Selain masakan yang enak, apa alasan lain restoran itu populer?",
        "options": [
          "Harganya murah",
          "Lokasinya strategis",
          "Pelayanan stafnya bagus",
          "Buka 24 jam"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 9,
    "title": "Berita Ekonomi",
    "level": "N2",
    "duration": "5:20",
    "script": "昨年の自動車の輸出額は、前の年と比べて5パーセント増加しました。円安の影響で、海外での売り上げが伸びたためと見られています。",
    "translation": "Nilai ekspor mobil tahun lalu meningkat 5 persen dibandingkan tahun sebelumnya. Hal ini diperkirakan karena pengaruh pelemahan yen yang membuat penjualan di luar negeri melonjak.",
    "questions": [
      {
        "q": "Berapa persen peningkatan nilai ekspor mobil tahun lalu?",
        "options": [
          "2%",
          "5%",
          "10%",
          "15%"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 10,
    "title": "Diskusi Rapat Bisnis",
    "level": "N2",
    "duration": "6:15",
    "script": "新製品の発売日ですが、開発の遅れにより来月に延期せざるを得ません。マーケティング戦略も修正する必要があります。",
    "translation": "Mengenai tanggal rilis produk baru, karena adanya keterlambatan pengembangan kita terpaksa menundanya ke bulan depan. Strategi pemasaran pun perlu direvisi.",
    "questions": [
      {
        "q": "Mengapa tanggal rilis produk ditunda?",
        "options": [
          "Kekurangan dana",
          "Masalah pemasaran",
          "Keterlambatan pengembangan",
          "Kekurangan bahan baku"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 11,
    "title": "Kuliah Universitas",
    "level": "N1",
    "duration": "8:00",
    "script": "現代の消費行動において、価格の安さよりも、その商品が環境にどのような影響を与えるかが重視される傾向にあります。これをエシカル消費と呼びます。",
    "translation": "Dalam perilaku konsumen modern, terdapat kecenderungan di mana dampaknya terhadap lingkungan lebih dipentingkan dibandingkan harga yang murah. Hal ini disebut dengan konsumsi etis.",
    "questions": [
      {
        "q": "Menurut audio, apa yang lebih dipentingkan oleh konsumen modern selain harga murah?",
        "options": [
          "Kualitas produk",
          "Merek produk",
          "Dampak lingkungan",
          "Kecepatan pengiriman"
        ],
        "correct": 2
      }
    ]
  }
];
