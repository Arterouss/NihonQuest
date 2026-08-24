"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import Link from "next/link";

type KanjiEntry = { char: string; meaning: string; onyomi: string[]; kunyomi: string[]; strokes: number; jlpt: string };

const allKanji: KanjiEntry[] = [
  // ── N5 (80 kanji) ─────────────────────────────────────────────────
  { char: "一", meaning: "satu", onyomi: ["いち","いつ"], kunyomi: ["ひと"], strokes: 1, jlpt: "N5" },
  { char: "二", meaning: "dua", onyomi: ["に"], kunyomi: ["ふた"], strokes: 2, jlpt: "N5" },
  { char: "三", meaning: "tiga", onyomi: ["さん"], kunyomi: ["み","みつ"], strokes: 3, jlpt: "N5" },
  { char: "四", meaning: "empat", onyomi: ["し"], kunyomi: ["よ","よん"], strokes: 5, jlpt: "N5" },
  { char: "五", meaning: "lima", onyomi: ["ご"], kunyomi: ["いつ"], strokes: 4, jlpt: "N5" },
  { char: "六", meaning: "enam", onyomi: ["ろく"], kunyomi: ["む","むつ"], strokes: 4, jlpt: "N5" },
  { char: "七", meaning: "tujuh", onyomi: ["しち"], kunyomi: ["なな"], strokes: 2, jlpt: "N5" },
  { char: "八", meaning: "delapan", onyomi: ["はち"], kunyomi: ["や","やつ"], strokes: 2, jlpt: "N5" },
  { char: "九", meaning: "sembilan", onyomi: ["きゅう","く"], kunyomi: ["ここの"], strokes: 2, jlpt: "N5" },
  { char: "十", meaning: "sepuluh", onyomi: ["じゅう"], kunyomi: ["とお"], strokes: 2, jlpt: "N5" },
  { char: "百", meaning: "seratus", onyomi: ["ひゃく"], kunyomi: [], strokes: 6, jlpt: "N5" },
  { char: "千", meaning: "seribu", onyomi: ["せん"], kunyomi: ["ち"], strokes: 3, jlpt: "N5" },
  { char: "万", meaning: "sepuluh ribu", onyomi: ["まん","ばん"], kunyomi: [], strokes: 3, jlpt: "N5" },
  { char: "円", meaning: "yen / bulat", onyomi: ["えん"], kunyomi: ["まる"], strokes: 4, jlpt: "N5" },
  { char: "年", meaning: "tahun", onyomi: ["ねん"], kunyomi: ["とし"], strokes: 6, jlpt: "N5" },
  { char: "月", meaning: "bulan / rembulan", onyomi: ["げつ","がつ"], kunyomi: ["つき"], strokes: 4, jlpt: "N5" },
  { char: "日", meaning: "hari / matahari", onyomi: ["にち","じつ"], kunyomi: ["ひ","か"], strokes: 4, jlpt: "N5" },
  { char: "時", meaning: "waktu / jam", onyomi: ["じ"], kunyomi: ["とき"], strokes: 10, jlpt: "N5" },
  { char: "分", meaning: "menit / bagian", onyomi: ["ふん","ぶん"], kunyomi: ["わ"], strokes: 4, jlpt: "N5" },
  { char: "半", meaning: "setengah", onyomi: ["はん"], kunyomi: ["なか"], strokes: 5, jlpt: "N5" },
  { char: "人", meaning: "orang", onyomi: ["じん","にん"], kunyomi: ["ひと"], strokes: 2, jlpt: "N5" },
  { char: "山", meaning: "gunung", onyomi: ["さん"], kunyomi: ["やま"], strokes: 3, jlpt: "N5" },
  { char: "川", meaning: "sungai", onyomi: ["せん"], kunyomi: ["かわ"], strokes: 3, jlpt: "N5" },
  { char: "田", meaning: "sawah", onyomi: ["でん"], kunyomi: ["た"], strokes: 5, jlpt: "N5" },
  { char: "木", meaning: "pohon / kayu", onyomi: ["もく","ぼく"], kunyomi: ["き"], strokes: 4, jlpt: "N5" },
  { char: "火", meaning: "api", onyomi: ["か"], kunyomi: ["ひ"], strokes: 4, jlpt: "N5" },
  { char: "水", meaning: "air", onyomi: ["すい"], kunyomi: ["みず"], strokes: 4, jlpt: "N5" },
  { char: "金", meaning: "emas / uang", onyomi: ["きん"], kunyomi: ["かね"], strokes: 8, jlpt: "N5" },
  { char: "土", meaning: "tanah", onyomi: ["ど","と"], kunyomi: ["つち"], strokes: 3, jlpt: "N5" },
  { char: "大", meaning: "besar", onyomi: ["だい","たい"], kunyomi: ["おお"], strokes: 3, jlpt: "N5" },
  { char: "小", meaning: "kecil", onyomi: ["しょう"], kunyomi: ["ちい","こ","お"], strokes: 3, jlpt: "N5" },
  { char: "中", meaning: "tengah / dalam", onyomi: ["ちゅう"], kunyomi: ["なか"], strokes: 4, jlpt: "N5" },
  { char: "上", meaning: "atas", onyomi: ["じょう","しょう"], kunyomi: ["うえ","のぼ"], strokes: 3, jlpt: "N5" },
  { char: "下", meaning: "bawah", onyomi: ["か","げ"], kunyomi: ["した","くだ"], strokes: 3, jlpt: "N5" },
  { char: "左", meaning: "kiri", onyomi: ["さ"], kunyomi: ["ひだり"], strokes: 5, jlpt: "N5" },
  { char: "右", meaning: "kanan", onyomi: ["う","ゆう"], kunyomi: ["みぎ"], strokes: 5, jlpt: "N5" },
  { char: "国", meaning: "negara", onyomi: ["こく"], kunyomi: ["くに"], strokes: 8, jlpt: "N5" },
  { char: "語", meaning: "bahasa", onyomi: ["ご"], kunyomi: ["かた"], strokes: 14, jlpt: "N5" },
  { char: "学", meaning: "belajar", onyomi: ["がく"], kunyomi: ["まな"], strokes: 8, jlpt: "N5" },
  { char: "校", meaning: "sekolah", onyomi: ["こう"], kunyomi: [], strokes: 10, jlpt: "N5" },
  { char: "先", meaning: "sebelum / ahli", onyomi: ["せん"], kunyomi: ["さき"], strokes: 6, jlpt: "N5" },
  { char: "生", meaning: "hidup / lahir", onyomi: ["せい","しょう"], kunyomi: ["い","う","なま"], strokes: 5, jlpt: "N5" },
  { char: "子", meaning: "anak", onyomi: ["し","す"], kunyomi: ["こ"], strokes: 3, jlpt: "N5" },
  { char: "女", meaning: "perempuan", onyomi: ["じょ","にょ"], kunyomi: ["おんな"], strokes: 3, jlpt: "N5" },
  { char: "男", meaning: "laki-laki", onyomi: ["だん","なん"], kunyomi: ["おとこ"], strokes: 7, jlpt: "N5" },
  { char: "目", meaning: "mata", onyomi: ["もく","ぼく"], kunyomi: ["め"], strokes: 5, jlpt: "N5" },
  { char: "耳", meaning: "telinga", onyomi: ["じ"], kunyomi: ["みみ"], strokes: 6, jlpt: "N5" },
  { char: "口", meaning: "mulut", onyomi: ["こう","く"], kunyomi: ["くち"], strokes: 3, jlpt: "N5" },
  { char: "手", meaning: "tangan", onyomi: ["しゅ"], kunyomi: ["て"], strokes: 4, jlpt: "N5" },
  { char: "足", meaning: "kaki", onyomi: ["そく"], kunyomi: ["あし"], strokes: 7, jlpt: "N5" },
  { char: "本", meaning: "buku / asal", onyomi: ["ほん"], kunyomi: ["もと"], strokes: 5, jlpt: "N5" },
  { char: "車", meaning: "kendaraan", onyomi: ["しゃ"], kunyomi: ["くるま"], strokes: 7, jlpt: "N5" },
  { char: "電", meaning: "listrik", onyomi: ["でん"], kunyomi: [], strokes: 13, jlpt: "N5" },
  { char: "気", meaning: "udara / semangat", onyomi: ["き","け"], kunyomi: [], strokes: 6, jlpt: "N5" },
  { char: "食", meaning: "makan", onyomi: ["しょく","じき"], kunyomi: ["た","く"], strokes: 9, jlpt: "N5" },
  { char: "飲", meaning: "minum", onyomi: ["いん"], kunyomi: ["の"], strokes: 12, jlpt: "N5" },
  { char: "見", meaning: "melihat", onyomi: ["けん"], kunyomi: ["み"], strokes: 7, jlpt: "N5" },
  { char: "聞", meaning: "mendengar", onyomi: ["ぶん","もん"], kunyomi: ["き","きこ"], strokes: 14, jlpt: "N5" },
  { char: "言", meaning: "berbicara / kata", onyomi: ["げん","ごん"], kunyomi: ["い","こと"], strokes: 7, jlpt: "N5" },
  { char: "行", meaning: "pergi", onyomi: ["こう","ぎょう"], kunyomi: ["い","ゆ","おこな"], strokes: 6, jlpt: "N5" },
  { char: "来", meaning: "datang", onyomi: ["らい"], kunyomi: ["く","き"], strokes: 7, jlpt: "N5" },
  { char: "出", meaning: "keluar", onyomi: ["しゅつ","すい"], kunyomi: ["で","だ"], strokes: 5, jlpt: "N5" },
  { char: "入", meaning: "masuk", onyomi: ["にゅう"], kunyomi: ["い","はい"], strokes: 2, jlpt: "N5" },
  { char: "白", meaning: "putih", onyomi: ["はく","びゃく"], kunyomi: ["しろ","しら"], strokes: 5, jlpt: "N5" },
  { char: "黒", meaning: "hitam", onyomi: ["こく"], kunyomi: ["くろ"], strokes: 11, jlpt: "N5" },
  { char: "赤", meaning: "merah", onyomi: ["せき","しゃく"], kunyomi: ["あか"], strokes: 7, jlpt: "N5" },
  { char: "青", meaning: "biru / hijau", onyomi: ["せい","しょう"], kunyomi: ["あお"], strokes: 8, jlpt: "N5" },
  { char: "花", meaning: "bunga", onyomi: ["か"], kunyomi: ["はな"], strokes: 7, jlpt: "N5" },
  { char: "天", meaning: "langit / surga", onyomi: ["てん"], kunyomi: ["あめ","あま"], strokes: 4, jlpt: "N5" },
  { char: "空", meaning: "langit / kosong", onyomi: ["くう"], kunyomi: ["そら","あ","から"], strokes: 8, jlpt: "N5" },
  { char: "雨", meaning: "hujan", onyomi: ["う"], kunyomi: ["あめ","あま"], strokes: 8, jlpt: "N5" },
  { char: "犬", meaning: "anjing", onyomi: ["けん"], kunyomi: ["いぬ"], strokes: 4, jlpt: "N5" },
  { char: "猫", meaning: "kucing", onyomi: ["びょう"], kunyomi: ["ねこ"], strokes: 11, jlpt: "N5" },
  { char: "魚", meaning: "ikan", onyomi: ["ぎょ"], kunyomi: ["さかな","うお"], strokes: 11, jlpt: "N5" },
  { char: "鳥", meaning: "burung", onyomi: ["ちょう"], kunyomi: ["とり"], strokes: 11, jlpt: "N5" },
  { char: "東", meaning: "timur", onyomi: ["とう"], kunyomi: ["ひがし"], strokes: 8, jlpt: "N5" },
  { char: "西", meaning: "barat", onyomi: ["せい","さい"], kunyomi: ["にし"], strokes: 6, jlpt: "N5" },
  { char: "南", meaning: "selatan", onyomi: ["なん","な"], kunyomi: ["みなみ"], strokes: 9, jlpt: "N5" },
  { char: "北", meaning: "utara", onyomi: ["ほく"], kunyomi: ["きた"], strokes: 5, jlpt: "N5" },

  // ── N4 (kanji) ─────────────────────────────────────────────────────
  { char: "会", meaning: "bertemu / rapat", onyomi: ["かい","え"], kunyomi: ["あ"], strokes: 6, jlpt: "N4" },
  { char: "社", meaning: "perusahaan / kuil", onyomi: ["しゃ"], kunyomi: ["やしろ"], strokes: 7, jlpt: "N4" },
  { char: "家", meaning: "rumah / keluarga", onyomi: ["か","け"], kunyomi: ["いえ","や"], strokes: 10, jlpt: "N4" },
  { char: "方", meaning: "arah / cara", onyomi: ["ほう"], kunyomi: ["かた"], strokes: 4, jlpt: "N4" },
  { char: "事", meaning: "hal / pekerjaan", onyomi: ["じ","ず"], kunyomi: ["こと"], strokes: 8, jlpt: "N4" },
  { char: "場", meaning: "tempat", onyomi: ["じょう"], kunyomi: ["ば"], strokes: 12, jlpt: "N4" },
  { char: "地", meaning: "tanah / daerah", onyomi: ["ち","じ"], kunyomi: [], strokes: 6, jlpt: "N4" },
  { char: "仕", meaning: "pekerjaan / melayani", onyomi: ["し"], kunyomi: ["つか"], strokes: 5, jlpt: "N4" },
  { char: "道", meaning: "jalan", onyomi: ["どう","とう"], kunyomi: ["みち"], strokes: 12, jlpt: "N4" },
  { char: "町", meaning: "kota kecil", onyomi: ["ちょう"], kunyomi: ["まち"], strokes: 7, jlpt: "N4" },
  { char: "村", meaning: "desa", onyomi: ["そん"], kunyomi: ["むら"], strokes: 7, jlpt: "N4" },
  { char: "自", meaning: "diri sendiri", onyomi: ["じ","し"], kunyomi: ["みずか"], strokes: 6, jlpt: "N4" },
  { char: "動", meaning: "bergerak", onyomi: ["どう"], kunyomi: ["うご"], strokes: 11, jlpt: "N4" },
  { char: "用", meaning: "kegunaan / pemakaian", onyomi: ["よう"], kunyomi: ["もち"], strokes: 5, jlpt: "N4" },
  { char: "間", meaning: "antara / interval", onyomi: ["かん","けん"], kunyomi: ["あいだ","ま"], strokes: 12, jlpt: "N4" },
  { char: "長", meaning: "panjang / pemimpin", onyomi: ["ちょう"], kunyomi: ["なが","おさ"], strokes: 8, jlpt: "N4" },
  { char: "週", meaning: "minggu", onyomi: ["しゅう"], kunyomi: [], strokes: 11, jlpt: "N4" },
  { char: "今", meaning: "sekarang", onyomi: ["こん","きん"], kunyomi: ["いま"], strokes: 4, jlpt: "N4" },
  { char: "何", meaning: "apa / berapa", onyomi: ["か"], kunyomi: ["なに","なん"], strokes: 7, jlpt: "N4" },
  { char: "書", meaning: "menulis / buku", onyomi: ["しょ"], kunyomi: ["か"], strokes: 10, jlpt: "N4" },
  { char: "読", meaning: "membaca", onyomi: ["どく","とく"], kunyomi: ["よ"], strokes: 14, jlpt: "N4" },
  { char: "話", meaning: "berbicara / cerita", onyomi: ["わ"], kunyomi: ["はな","はなし"], strokes: 13, jlpt: "N4" },
  { char: "思", meaning: "berpikir / merasa", onyomi: ["し"], kunyomi: ["おも"], strokes: 9, jlpt: "N4" },
  { char: "知", meaning: "mengetahui", onyomi: ["ち"], kunyomi: ["し"], strokes: 8, jlpt: "N4" },
  { char: "友", meaning: "teman", onyomi: ["ゆう"], kunyomi: ["とも"], strokes: 4, jlpt: "N4" },
  { char: "門", meaning: "gerbang", onyomi: ["もん"], kunyomi: ["かど"], strokes: 8, jlpt: "N4" },
  { char: "親", meaning: "orang tua / akrab", onyomi: ["しん"], kunyomi: ["おや","した"], strokes: 16, jlpt: "N4" },
  { char: "兄", meaning: "kakak laki-laki", onyomi: ["けい","きょう"], kunyomi: ["あに"], strokes: 5, jlpt: "N4" },
  { char: "姉", meaning: "kakak perempuan", onyomi: ["し"], kunyomi: ["あね"], strokes: 8, jlpt: "N4" },
  { char: "弟", meaning: "adik laki-laki", onyomi: ["てい","だい","で"], kunyomi: ["おとうと"], strokes: 7, jlpt: "N4" },
  { char: "妹", meaning: "adik perempuan", onyomi: ["まい"], kunyomi: ["いもうと"], strokes: 8, jlpt: "N4" },
  { char: "父", meaning: "ayah", onyomi: ["ふ"], kunyomi: ["ちち"], strokes: 4, jlpt: "N4" },
  { char: "母", meaning: "ibu", onyomi: ["ぼ"], kunyomi: ["はは"], strokes: 5, jlpt: "N4" },
  { char: "買", meaning: "membeli", onyomi: ["ばい"], kunyomi: ["か"], strokes: 12, jlpt: "N4" },
  { char: "売", meaning: "menjual", onyomi: ["ばい"], kunyomi: ["う"], strokes: 7, jlpt: "N4" },
  { char: "新", meaning: "baru", onyomi: ["しん"], kunyomi: ["あたら","あら","にい"], strokes: 13, jlpt: "N4" },
  { char: "古", meaning: "tua / kuno", onyomi: ["こ"], kunyomi: ["ふる"], strokes: 5, jlpt: "N4" },
  { char: "好", meaning: "suka / baik", onyomi: ["こう"], kunyomi: ["す","この"], strokes: 6, jlpt: "N4" },
  { char: "多", meaning: "banyak", onyomi: ["た"], kunyomi: ["おお"], strokes: 6, jlpt: "N4" },
  { char: "少", meaning: "sedikit", onyomi: ["しょう"], kunyomi: ["すこ","すく"], strokes: 4, jlpt: "N4" },
  { char: "高", meaning: "tinggi / mahal", onyomi: ["こう"], kunyomi: ["たか"], strokes: 10, jlpt: "N4" },
  { char: "安", meaning: "murah / aman", onyomi: ["あん"], kunyomi: ["やす"], strokes: 6, jlpt: "N4" },
  { char: "早", meaning: "cepat / pagi", onyomi: ["そう","さっ"], kunyomi: ["はや"], strokes: 6, jlpt: "N4" },
  { char: "待", meaning: "menunggu", onyomi: ["たい"], kunyomi: ["ま"], strokes: 9, jlpt: "N4" },
  { char: "起", meaning: "bangun / terjadi", onyomi: ["き"], kunyomi: ["お"], strokes: 10, jlpt: "N4" },
  { char: "寝", meaning: "tidur", onyomi: ["しん"], kunyomi: ["ね"], strokes: 13, jlpt: "N4" },
  { char: "開", meaning: "membuka", onyomi: ["かい"], kunyomi: ["あ","ひら"], strokes: 12, jlpt: "N4" },
  { char: "閉", meaning: "menutup", onyomi: ["へい"], kunyomi: ["し","と"], strokes: 11, jlpt: "N4" },
  { char: "使", meaning: "menggunakan", onyomi: ["し"], kunyomi: ["つか"], strokes: 8, jlpt: "N4" },
  { char: "教", meaning: "mengajar", onyomi: ["きょう"], kunyomi: ["おし","おそ"], strokes: 11, jlpt: "N4" },
  { char: "習", meaning: "belajar / berlatih", onyomi: ["しゅう"], kunyomi: ["なら"], strokes: 11, jlpt: "N4" },

  // ── N3 (kanji) ─────────────────────────────────────────────────────
  { char: "民", meaning: "rakyat", onyomi: ["みん"], kunyomi: ["たみ"], strokes: 5, jlpt: "N3" },
  { char: "主", meaning: "tuan / utama", onyomi: ["しゅ","す"], kunyomi: ["ぬし","おも"], strokes: 5, jlpt: "N3" },
  { char: "以", meaning: "berdasarkan / sejak", onyomi: ["い"], kunyomi: [], strokes: 5, jlpt: "N3" },
  { char: "化", meaning: "berubah / transformasi", onyomi: ["か","け"], kunyomi: ["ば"], strokes: 4, jlpt: "N3" },
  { char: "体", meaning: "tubuh", onyomi: ["たい","てい"], kunyomi: ["からだ"], strokes: 7, jlpt: "N3" },
  { char: "力", meaning: "kekuatan", onyomi: ["りょく","りき"], kunyomi: ["ちから"], strokes: 2, jlpt: "N3" },
  { char: "意", meaning: "maksud / pikiran", onyomi: ["い"], kunyomi: [], strokes: 13, jlpt: "N3" },
  { char: "同", meaning: "sama", onyomi: ["どう"], kunyomi: ["おな"], strokes: 6, jlpt: "N3" },
  { char: "実", meaning: "kenyataan / buah", onyomi: ["じつ"], kunyomi: ["み","みの","まこと"], strokes: 8, jlpt: "N3" },
  { char: "発", meaning: "berangkat / muncul", onyomi: ["はつ","ほつ"], kunyomi: ["た"], strokes: 9, jlpt: "N3" },
  { char: "問", meaning: "pertanyaan / masalah", onyomi: ["もん"], kunyomi: ["と","とい"], strokes: 11, jlpt: "N3" },
  { char: "題", meaning: "tema / judul", onyomi: ["だい"], kunyomi: [], strokes: 18, jlpt: "N3" },
  { char: "通", meaning: "lewat / hubungan", onyomi: ["つう","つ"], kunyomi: ["とお","かよ"], strokes: 10, jlpt: "N3" },
  { char: "直", meaning: "lurus / memperbaiki", onyomi: ["ちょく","じき"], kunyomi: ["なお","ただ"], strokes: 8, jlpt: "N3" },
  { char: "切", meaning: "memotong / penting", onyomi: ["せつ","さい"], kunyomi: ["き"], strokes: 4, jlpt: "N3" },
  { char: "心", meaning: "hati / pikiran", onyomi: ["しん"], kunyomi: ["こころ"], strokes: 4, jlpt: "N3" },
  { char: "強", meaning: "kuat", onyomi: ["きょう","ごう"], kunyomi: ["つよ","し"], strokes: 11, jlpt: "N3" },
  { char: "弱", meaning: "lemah", onyomi: ["じゃく"], kunyomi: ["よわ"], strokes: 10, jlpt: "N3" },
  { char: "信", meaning: "percaya", onyomi: ["しん"], kunyomi: ["まこと"], strokes: 9, jlpt: "N3" },
  { char: "返", meaning: "kembali / mengembalikan", onyomi: ["へん"], kunyomi: ["かえ"], strokes: 7, jlpt: "N3" },
  { char: "受", meaning: "menerima", onyomi: ["じゅ"], kunyomi: ["う"], strokes: 8, jlpt: "N3" },
  { char: "表", meaning: "permukaan / menyatakan", onyomi: ["ひょう"], kunyomi: ["おもて","あらわ"], strokes: 8, jlpt: "N3" },
  { char: "考", meaning: "berpikir / mempertimbangkan", onyomi: ["こう"], kunyomi: ["かんが"], strokes: 6, jlpt: "N3" },
  { char: "働", meaning: "bekerja", onyomi: ["どう"], kunyomi: ["はたら"], strokes: 13, jlpt: "N3" },
  { char: "急", meaning: "terburu-buru / mendadak", onyomi: ["きゅう"], kunyomi: ["いそ"], strokes: 9, jlpt: "N3" },
  { char: "決", meaning: "memutuskan", onyomi: ["けつ"], kunyomi: ["き"], strokes: 7, jlpt: "N3" },
  { char: "始", meaning: "mulai", onyomi: ["し"], kunyomi: ["はじ"], strokes: 8, jlpt: "N3" },
  { char: "終", meaning: "berakhir / selesai", onyomi: ["しゅう"], kunyomi: ["お","おわ"], strokes: 11, jlpt: "N3" },
  { char: "続", meaning: "berlanjut / melanjutkan", onyomi: ["ぞく"], kunyomi: ["つづ"], strokes: 13, jlpt: "N3" },
  { char: "変", meaning: "berubah / aneh", onyomi: ["へん"], kunyomi: ["か"], strokes: 9, jlpt: "N3" },
];

const jlptLevels = ["N5", "N4", "N3", "N2", "N1"];

const jlptColors: Record<string, { bg: string; text: string; border: string }> = {
  N5: { bg: "#DCFCE7", text: "#22C55E", border: "#22C55E" },
  N4: { bg: "#DBEAFE", text: "#3B82F6", border: "#3B82F6" },
  N3: { bg: "#FEF9C3", text: "#F59E0B", border: "#F59E0B" },
  N2: { bg: "#FED7AA", text: "#F97316", border: "#F97316" },
  N1: { bg: "#FEE2E2", text: "#EF4444", border: "#EF4444" },
};

const levelCounts: Record<string, number> = {
  N5: 80, N4: 300, N3: 650, N2: 1000, N1: 2000,
};

export default function KanjiPage() {
  const [activeLevel, setActiveLevel] = useState("N5");
  const [search, setSearch] = useState("");
  const [selectedKanji, setSelectedKanji] = useState<KanjiEntry | null>(null);

  const filtered = allKanji.filter((k) => {
    const matchLevel = k.jlpt === activeLevel;
    const matchSearch = !search || k.char.includes(search) || k.meaning.toLowerCase().includes(search.toLowerCase());
    return matchLevel && matchSearch;
  });

  const c = jlptColors[activeLevel];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6] flex items-center justify-center">
            <span className="text-2xl font-jp text-white font-bold">漢</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kanji</h1>
            <p className="text-[#6B7280] text-sm">漢字 — Aksara Tionghoa dalam bahasa Jepang</p>
          </div>
        </div>
      </motion.div>

      {/* Level Tabs */}
      <div className="flex gap-2 flex-wrap">
        {jlptLevels.map((level) => {
          const col = jlptColors[level];
          return (
            <button
              key={level}
              onClick={() => { setActiveLevel(level); setSearch(""); }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                activeLevel === level ? "text-white border-transparent" : "border-[#E7E5E4] text-[#6B7280]"
              }`}
              style={activeLevel === level ? { backgroundColor: col.text } : {}}
            >
              {level}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Cari kanji atau arti..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-white focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: `Total Kanji ${activeLevel}`, value: levelCounts[activeLevel]?.toLocaleString() ?? "—", color: c.text },
          { label: "Tersedia di App", value: filtered.length.toString(), color: "#4F46E5" },
          { label: "Dikuasai", value: "0", color: "#D95F76" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#E7E5E4] p-4 text-center">
            <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-[#6B7280] font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#6B7280]">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-medium">Kanji tidak ditemukan</p>
          <p className="text-sm mt-1">Data {activeLevel} N2 dan N1 akan segera hadir!</p>
        </div>
      )}

      {/* Kanji Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
        {filtered.map((kanji) => {
          const col = jlptColors[kanji.jlpt];
          return (
            <motion.button
              key={kanji.char}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedKanji(kanji)}
              className="flex flex-col items-center justify-center p-4 gap-1.5 bg-white rounded-2xl border border-[#E7E5E4] hover:border-[#8B5CF6] hover:shadow-md transition-all aspect-square"
            >
              <span className="text-3xl font-jp font-bold text-[#1F2937]">{kanji.char}</span>
              <span className="text-[10px] text-[#6B7280] text-center leading-tight">{kanji.meaning}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Kanji Detail Modal */}
      <AnimatePresence>
        {selectedKanji && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedKanji(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-8xl font-jp font-bold text-[#1F2937] block leading-none">{selectedKanji.char}</span>
                  <p className="text-[#6B7280] mt-2 font-medium">{selectedKanji.meaning}</p>
                </div>
                <button onClick={() => setSelectedKanji(null)} className="p-2 rounded-xl hover:bg-[#FFF9F7] text-[#6B7280]">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FFF9F7] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] font-medium mb-1">音読み (Onyomi)</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedKanji.onyomi.map((r) => (
                        <span key={r} className="font-jp text-[#1F2937] font-bold text-sm">{r}</span>
                      ))}
                      {selectedKanji.onyomi.length === 0 && <span className="text-[#6B7280] text-xs">—</span>}
                    </div>
                  </div>
                  <div className="bg-[#FFF9F7] rounded-xl p-3">
                    <p className="text-xs text-[#6B7280] font-medium mb-1">訓読み (Kunyomi)</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedKanji.kunyomi.map((r) => (
                        <span key={r} className="font-jp text-[#1F2937] font-bold text-sm">{r}</span>
                      ))}
                      {selectedKanji.kunyomi.length === 0 && <span className="text-[#6B7280] text-xs">—</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#6B7280]">Jumlah coretan:</span>
                  <span className="font-bold text-[#1F2937]">{selectedKanji.strokes} coretan</span>
                  <span
                    className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: jlptColors[selectedKanji.jlpt].bg, color: jlptColors[selectedKanji.jlpt].text }}
                  >
                    {selectedKanji.jlpt}
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <Link href="/flashcards?type=kanji" className="flex-1 py-2.5 bg-[#8B5CF6] text-white rounded-xl text-sm font-semibold text-center">
                    Flashcard
                  </Link>
                  <Link href="/quiz?type=kanji" className="flex-1 py-2.5 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-xl text-sm font-semibold text-center">
                    Kuis
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
