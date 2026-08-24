export interface VocabItem {
  word: string;
  meaning: string;
}

export interface ReadingQuestion {
  q: string;
  options: string[];
  correct: number;
}

export interface ReadingPassage {
  id: number;
  title: string;
  titleMeaning: string;
  level: string;
  text: string;
  translation: string;
  vocab: VocabItem[];
  questions: ReadingQuestion[];
}

export const readingData: ReadingPassage[] = [
  {
    "id": 1,
    "title": "私の家族",
    "titleMeaning": "Keluarga Saya",
    "level": "N5",
    "text": "わたしの　かぞくは　よにんです。ちちと　ははと　あにと　わたしです。ちちは　かいしゃいんです。ははは　せんせいです。あには　だいがくせいです。わたしは　こうこうせいです。",
    "translation": "Keluarga saya terdiri dari empat orang. Ayah, ibu, kakak, dan saya. Ayah adalah karyawan perusahaan. Ibu adalah guru. Kakak adalah mahasiswa. Saya adalah siswa SMA.",
    "vocab": [
      {
        "word": "かぞく",
        "meaning": "keluarga"
      },
      {
        "word": "よにん",
        "meaning": "empat orang"
      },
      {
        "word": "ちち",
        "meaning": "ayah (saya)"
      },
      {
        "word": "はは",
        "meaning": "ibu (saya)"
      },
      {
        "word": "あに",
        "meaning": "kakak laki-laki (saya)"
      }
    ],
    "questions": [
      {
        "q": "Berapa orang dalam keluarga?",
        "options": [
          "3 orang",
          "4 orang",
          "5 orang",
          "6 orang"
        ],
        "correct": 1
      },
      {
        "q": "Apa pekerjaan ibu?",
        "options": [
          "Karyawan",
          "Guru",
          "Dokter",
          "Mahasiswa"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "わたしのまち",
    "titleMeaning": "Kotaku",
    "level": "N5",
    "text": "わたしの　まちは　ちいさいです。でも、とても　しずかです。まちに　こうえんが　あります。こうえんは　おおきくて、きれいです。まいにち　こうえんで　さんぽします。",
    "translation": "Kota saya kecil. Tapi sangat tenang. Di kota ada taman. Taman itu besar dan indah. Setiap hari berjalan-jalan di taman.",
    "vocab": [
      {
        "word": "まち",
        "meaning": "kota"
      },
      {
        "word": "ちいさい",
        "meaning": "kecil"
      },
      {
        "word": "しずか",
        "meaning": "tenang"
      },
      {
        "word": "こうえん",
        "meaning": "taman"
      },
      {
        "word": "さんぽ",
        "meaning": "berjalan-jalan"
      }
    ],
    "questions": [
      {
        "q": "Bagaimana kota yang diceritakan?",
        "options": [
          "Besar dan ramai",
          "Kecil dan tenang",
          "Besar dan tenang",
          "Kecil dan ramai"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 3,
    "title": "朝ごはん",
    "titleMeaning": "Sarapan",
    "level": "N5",
    "text": "わたしは　まいにち　あさごはんを　たべます。いつも　パンと　たまごを　たべます。そして、コーヒーを　のみます。あさごはんは　とても　おいしいです。",
    "translation": "Saya setiap hari makan sarapan. Selalu makan roti dan telur. Lalu, minum kopi. Sarapannya sangat enak.",
    "vocab": [
      {
        "word": "あさごはん",
        "meaning": "sarapan"
      },
      {
        "word": "いつも",
        "meaning": "selalu"
      },
      {
        "word": "パン",
        "meaning": "roti"
      },
      {
        "word": "たまご",
        "meaning": "telur"
      },
      {
        "word": "のみます",
        "meaning": "minum"
      }
    ],
    "questions": [
      {
        "q": "Apa yang dia minum saat sarapan?",
        "options": [
          "Teh",
          "Susu",
          "Air putih",
          "Kopi"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": 4,
    "title": "手紙",
    "titleMeaning": "Surat",
    "level": "N4",
    "text": "田中さんへ\nお元気ですか。私は今、京都に住んでいます。京都はとてもきれいな町です。古いお寺がたくさんあります。来月、東京へ遊びに行きます。その時、一緒に食事をしませんか。お返事を待っています。\n鈴木より",
    "translation": "Untuk Tanaka,\nApa kabar? Saya sekarang tinggal di Kyoto. Kyoto adalah kota yang sangat indah. Ada banyak kuil tua. Bulan depan, saya akan pergi bermain ke Tokyo. Saat itu, maukah makan bersama? Saya menunggu balasan Anda.\nDari Suzuki",
    "vocab": [
      {
        "word": "お元気ですか",
        "meaning": "Apa kabar?"
      },
      {
        "word": "住んでいます",
        "meaning": "sedang tinggal"
      },
      {
        "word": "お寺",
        "meaning": "kuil (Buddha)"
      },
      {
        "word": "食事をしませんか",
        "meaning": "maukah makan?"
      },
      {
        "word": "お返事",
        "meaning": "balasan"
      }
    ],
    "questions": [
      {
        "q": "Di mana Suzuki tinggal sekarang?",
        "options": [
          "Tokyo",
          "Osaka",
          "Kyoto",
          "Nara"
        ],
        "correct": 2
      },
      {
        "q": "Apa yang ingin dilakukan Suzuki bulan depan?",
        "options": [
          "Pergi ke kuil",
          "Makan bersama Tanaka di Tokyo",
          "Pindah ke Tokyo",
          "Bekerja di Tokyo"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 5,
    "title": "日記",
    "titleMeaning": "Buku Harian",
    "level": "N4",
    "text": "今日は日曜日だった。天気がよかったので、友達と海へ行った。海で泳いだり、貝を拾ったりして、とても楽しかった。夕方、海辺のレストランで海鮮丼を食べた。新鮮で美味しかった。また行きたい。",
    "translation": "Hari ini adalah hari Minggu. Karena cuaca bagus, saya pergi ke laut bersama teman. Berenang di laut, memungut kerang, sangat menyenangkan. Sore harinya, makan kaisendon (nasi ikan mentah) di restoran tepi laut. Segar dan enak. Ingin pergi lagi.",
    "vocab": [
      {
        "word": "日記",
        "meaning": "buku harian"
      },
      {
        "word": "貝を拾う",
        "meaning": "memungut kerang"
      },
      {
        "word": "海辺",
        "meaning": "tepi laut"
      },
      {
        "word": "新鮮",
        "meaning": "segar"
      }
    ],
    "questions": [
      {
        "q": "Apa yang TIDAK dia lakukan di laut?",
        "options": [
          "Berenang",
          "Memancing",
          "Memungut kerang",
          "Makan kaisendon"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 6,
    "title": "ゴミの出し方",
    "titleMeaning": "Cara Membuang Sampah",
    "level": "N3",
    "text": "日本では、ゴミの出し方が地域によって異なります。燃えるゴミ、燃えないゴミ、資源ゴミなどに分けて出さなければなりません。また、ゴミを出す曜日も決まっています。ルールを守らないと、ゴミを収集してもらえないことがあります。",
    "translation": "Di Jepang, cara membuang sampah berbeda tergantung daerahnya. Harus memisahkan menjadi sampah yang bisa dibakar, tidak bisa dibakar, sampah daur ulang, dll. Selain itu, hari untuk membuang sampah juga sudah ditentukan. Jika tidak mematuhi aturan, terkadang sampah tidak akan diambil.",
    "vocab": [
      {
        "word": "地域",
        "meaning": "daerah"
      },
      {
        "word": "異なる",
        "meaning": "berbeda"
      },
      {
        "word": "燃えるゴミ",
        "meaning": "sampah yang bisa dibakar"
      },
      {
        "word": "資源",
        "meaning": "sumber daya/daur ulang"
      },
      {
        "word": "収集",
        "meaning": "pengumpulan"
      }
    ],
    "questions": [
      {
        "q": "Apa yang terjadi jika tidak mematuhi aturan membuang sampah?",
        "options": [
          "Didenda uang",
          "Sampah tidak diambil",
          "Harus pindah rumah",
          "Polisi akan datang"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 7,
    "title": "スマホの普及",
    "titleMeaning": "Penyebaran Smartphone",
    "level": "N3",
    "text": "近年、スマートフォンの普及により、私たちの生活は大きく変わりました。いつでもどこでも情報を調べたり、連絡を取ったりすることができます。しかし、一方で「歩きスマホ」による事故が増加しており、社会問題となっています。",
    "translation": "Beberapa tahun terakhir, karena penyebaran smartphone, kehidupan kita berubah besar. Kapanpun dan dimanapun kita bisa mencari informasi atau berkomunikasi. Namun, di sisi lain kecelakaan karena 'berjalan sambil main smartphone' meningkat dan menjadi masalah sosial.",
    "vocab": [
      {
        "word": "普及",
        "meaning": "penyebaran/populer"
      },
      {
        "word": "連絡を取る",
        "meaning": "berkomunikasi"
      },
      {
        "word": "増加",
        "meaning": "peningkatan"
      },
      {
        "word": "社会問題",
        "meaning": "masalah sosial"
      }
    ],
    "questions": [
      {
        "q": "Apa dampak negatif dari penyebaran smartphone yang disebutkan teks?",
        "options": [
          "Harga barang naik",
          "Kecelakaan 'berjalan sambil main smartphone'",
          "Orang jarang keluar rumah",
          "Masalah mata berkurang"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 8,
    "title": "テレワークの課題",
    "titleMeaning": "Tantangan Telework",
    "level": "N2",
    "text": "テレワークは通勤時間を削減できるというメリットがある一方で、コミュニケーション不足という課題も浮き彫りになっている。特に新入社員にとっては、先輩に気軽に質問できる環境がなく、孤独感を感じやすいという声も少なくない。企業はオンラインでの雑談の場を設けるなどの対策を講じている。",
    "translation": "Telework memiliki keuntungan dapat memangkas waktu komuter, namun di sisi lain masalah kurangnya komunikasi juga menjadi sorotan. Khususnya bagi karyawan baru, tidak sedikit suara yang mengatakan mereka merasa kesepian karena tidak ada lingkungan di mana mereka bisa dengan santai bertanya pada senior. Perusahaan mengambil langkah-langkah seperti menyediakan tempat mengobrol secara online.",
    "vocab": [
      {
        "word": "削減",
        "meaning": "pengurangan/pemangkasan"
      },
      {
        "word": "浮き彫りになる",
        "meaning": "menjadi jelas/sorotan"
      },
      {
        "word": "孤独感",
        "meaning": "rasa kesepian"
      },
      {
        "word": "対策を講じる",
        "meaning": "mengambil tindakan"
      }
    ],
    "questions": [
      {
        "q": "Siapa yang disebut paling rentan merasakan kesepian karena telework?",
        "options": [
          "Manajer",
          "Karyawan senior",
          "Karyawan baru",
          "Presiden direktur"
        ],
        "correct": 2
      },
      {
        "q": "Apa langkah yang diambil perusahaan?",
        "options": [
          "Mengurangi gaji",
          "Menyediakan obrolan online",
          "Mewajibkan masuk kantor",
          "Mengurangi jam kerja"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 9,
    "title": "AIと人間の未来",
    "titleMeaning": "Masa Depan AI dan Manusia",
    "level": "N1",
    "text": "人工知能の急速な進歩は、人間の労働市場に不可逆的な変容をもたらしつつある。定型業務が自動化されるのは必然の理であり、人間にはより創造的、かつ高度な対人スキルが求められるようになる。我々はAIを脅威として排斥するのではなく、いかにしてAIと協働し、互いの強みを補完し合うかを模索すべき局面に立たされている。",
    "translation": "Kemajuan pesat kecerdasan buatan sedang membawa transformasi ireversibel (tidak bisa dibalikkan) pada pasar tenaga kerja manusia. Otomatisasi pekerjaan rutin adalah suatu kepastian, dan manusia akan dituntut untuk memiliki keterampilan interpersonal yang lebih kreatif dan tingkat tinggi. Kita berada pada fase di mana kita tidak seharusnya menolak AI sebagai ancaman, melainkan mengeksplorasi bagaimana berkolaborasi dengannya dan saling melengkapi kelebihan masing-masing.",
    "vocab": [
      {
        "word": "不可逆的",
        "meaning": "ireversibel/tidak bisa dibalik"
      },
      {
        "word": "変容",
        "meaning": "transformasi/perubahan"
      },
      {
        "word": "必然の理",
        "meaning": "hukum alam/pasti terjadi"
      },
      {
        "word": "排斥",
        "meaning": "penolakan/pemboikotan"
      },
      {
        "word": "補完",
        "meaning": "saling melengkapi"
      },
      {
        "word": "局面",
        "meaning": "fase/situasi"
      }
    ],
    "questions": [
      {
        "q": "Menurut teks, apa yang dituntut dari manusia di era AI?",
        "options": [
          "Kemampuan pemrograman",
          "Keterampilan kreatif dan interpersonal tingkat tinggi",
          "Kemampuan melakukan pekerjaan rutin dengan cepat",
          "Menolak AI secara total"
        ],
        "correct": 1
      }
    ]
  }
];
