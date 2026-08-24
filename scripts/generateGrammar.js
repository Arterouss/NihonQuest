const fs = require('fs');
const path = require('path');

const grammarList = [
  // N5
  { pattern: "〜です", meaning: "Adalah / merupakan", formation: "Kata Benda / Sifat-な + です", explanation: "Bentuk sopan dari だ.", jlpt: "N5", examples: [{jp: "私は学生です。", reading: "Watashi wa gakusei desu.", meaning: "Saya adalah pelajar."}], mistakes: "Jangan gunakan setelah kata sifat-い." },
  { pattern: "〜ます", meaning: "Bentuk sopan kata kerja", formation: "Kata Kerja (bentuk ます)", explanation: "Bentuk sopan dari kata kerja.", jlpt: "N5", examples: [{jp: "ご飯を食べます。", reading: "Gohan wo tabemasu.", meaning: "Saya makan nasi."}], mistakes: "Hanya untuk kata kerja." },
  { pattern: "〜は〜が好きです", meaning: "Menyukai sesuatu", formation: "Topik は Objek が 好きです", explanation: "Pola menyatakan kesukaan.", jlpt: "N5", examples: [{jp: "音楽が好きです。", reading: "Ongaku ga suki desu.", meaning: "Saya suka musik."}], mistakes: "Jangan gunakan を." },
  { pattern: "〜ている", meaning: "Sedang / keadaan", formation: "Kata Kerja-て + いる", explanation: "Menyatakan hal yang sedang berlangsung atau kondisi.", jlpt: "N5", examples: [{jp: "本を読んでいる。", reading: "Hon wo yonde iru.", meaning: "Sedang membaca buku."}], mistakes: "Bisa berarti 'sudah' tergantung konteks." },
  { pattern: "〜たい", meaning: "Ingin melakukan", formation: "Kata Kerja-ます + たい", explanation: "Menyatakan keinginan diri sendiri.", jlpt: "N5", examples: [{jp: "日本へ行きたい。", reading: "Nihon e ikitai.", meaning: "Ingin pergi ke Jepang."}], mistakes: "Bukan untuk keinginan orang ketiga." },
  { pattern: "〜ませんか", meaning: "Maukah (ajakan)", formation: "Kata Kerja-ます + ませんか", explanation: "Mengajak orang lain dengan sopan.", jlpt: "N5", examples: [{jp: "一緒に食べませんか。", reading: "Issho ni tabemasen ka.", meaning: "Maukah makan bersama?"}], mistakes: "Bentuk ajakan sopan." },
  { pattern: "〜から", meaning: "Karena (alasan)", formation: "Kalimat + から", explanation: "Menyatakan alasan atau sebab.", jlpt: "N5", examples: [{jp: "忙しいですから。", reading: "Isogashii desu kara.", meaning: "Karena saya sibuk."}], mistakes: "Berbeda dengan ので." },
  { pattern: "〜ないでください", meaning: "Tolong jangan", formation: "Kata Kerja-ない + でください", explanation: "Meminta seseorang untuk tidak melakukan sesuatu.", jlpt: "N5", examples: [{jp: "忘れないでください。", reading: "Wasurenaide kudasai.", meaning: "Tolong jangan lupakan."}], mistakes: "Harus pakai bentuk ない." },
  { pattern: "〜のが上手です", meaning: "Pintar dalam hal...", formation: "Kata Kerja-kamus + のが上手です", explanation: "Menyatakan keahlian seseorang.", jlpt: "N5", examples: [{jp: "彼は歌うのが上手です。", reading: "Kare wa utau no ga jouzu desu.", meaning: "Dia pandai menyanyi."}], mistakes: "Gunakan partikel が." },
  { pattern: "〜ましょう", meaning: "Mari / Ayo", formation: "Kata Kerja-ます + ましょう", explanation: "Ajakan langsung.", jlpt: "N5", examples: [{jp: "行きましょう。", reading: "Ikimashou.", meaning: "Ayo pergi."}], mistakes: "Lebih asertif dari ませんか." },

  // N4
  { pattern: "〜なければならない", meaning: "Harus / wajib", formation: "Kata Kerja-ない + なければならない", explanation: "Kewajiban.", jlpt: "N4", examples: [{jp: "勉強しなければならない。", reading: "Benkyou shinakereba naranai.", meaning: "Harus belajar."}], mistakes: "Agak kaku." },
  { pattern: "〜ことができる", meaning: "Bisa / mampu", formation: "Kata Kerja-kamus + ことができる", explanation: "Menyatakan kemampuan.", jlpt: "N4", examples: [{jp: "泳ぐことができる。", reading: "Oyogu koto ga dekiru.", meaning: "Bisa berenang."}], mistakes: "Lebih formal dari potensial." },
  { pattern: "〜てみる", meaning: "Mencoba (melakukan)", formation: "Kata Kerja-て + みる", explanation: "Eksperimen.", jlpt: "N4", examples: [{jp: "食べてみる。", reading: "Tabete miru.", meaning: "Mencoba memakannya."}], mistakes: "Bukan mencoba berusaha." },
  { pattern: "〜らしい", meaning: "Tampaknya (berdasarkan info)", formation: "Kata Benda / Sifat / Kerja + らしい", explanation: "Dugaan dari informasi luar.", jlpt: "N4", examples: [{jp: "雨らしい。", reading: "Ame rashii.", meaning: "Tampaknya hujan."}], mistakes: "Beda dengan そうだ." },
  { pattern: "〜ために", meaning: "Untuk (tujuan)", formation: "Kata Kerja-kamus + ために", explanation: "Tujuan melakukan sesuatu.", jlpt: "N4", examples: [{jp: "家を買うために働く。", reading: "Ie wo kau tame ni hataraku.", meaning: "Bekerja untuk membeli rumah."}], mistakes: "Sebab jika pakai kata sifat." },
  { pattern: "〜すぎる", meaning: "Terlalu (berlebihan)", formation: "Kata Kerja-ます / Sifat + すぎる", explanation: "Melebihi batas normal.", jlpt: "N4", examples: [{jp: "食べすぎた。", reading: "Tabesugita.", meaning: "Terlalu banyak makan."}], mistakes: "Kesan negatif." },
  { pattern: "〜たばかり", meaning: "Baru saja", formation: "Kata Kerja-た + ばかり", explanation: "Tindakan baru saja selesai menurut perasaan.", jlpt: "N4", examples: [{jp: "起きたばかりです。", reading: "Okita bakari desu.", meaning: "Baru saja bangun."}], mistakes: "Beda dengan ところ." },
  { pattern: "〜かもしれない", meaning: "Mungkin", formation: "Kata Benda/Sifat/Kerja + かもしれない", explanation: "Kemungkinan sekitar 50%.", jlpt: "N4", examples: [{jp: "明日は雨かもしれない。", reading: "Ashita wa ame kamoshirenai.", meaning: "Besok mungkin hujan."}], mistakes: "Bukan kepastian." },
  { pattern: "〜にする", meaning: "Memutuskan untuk", formation: "Kata Benda + にする", explanation: "Menentukan pilihan.", jlpt: "N4", examples: [{jp: "コーヒーにします。", reading: "Ko-hi- ni shimasu.", meaning: "Saya pilih kopi."}], mistakes: "Beda dengan ことにする." },
  { pattern: "〜ば", meaning: "Jika (syarat)", formation: "Kata Kerja-bentuk ba", explanation: "Kalimat pengandaian.", jlpt: "N4", examples: [{jp: "安ければ買う。", reading: "Yasukereba kau.", meaning: "Jika murah, beli."}], mistakes: "Lebih condong ke syarat." },

  // N3
  { pattern: "〜ばかりか〜も", meaning: "Tidak hanya... tapi juga", formation: "A + ばかりか + B + も", explanation: "Ada penambahan mengejutkan.", jlpt: "N3", examples: [{jp: "彼は英語ばかりか中国語も話せる。", reading: "Kare wa eigo bakari ka chuugokugo mo hanaseru.", meaning: "Tidak hanya Inggris, dia juga bisa bahasa Cina."}], mistakes: "Sama dengan だけでなく." },
  { pattern: "〜さえ〜ば", meaning: "Asal saja", formation: "Kata Benda + さえ + Kerja-ば", explanation: "Kondisi minimum.", jlpt: "N3", examples: [{jp: "お金さえあれば。", reading: "Okane sae areba.", meaning: "Asal ada uang."}], mistakes: "Menekankan hal minimum." },
  { pattern: "〜に違いない", meaning: "Pasti", formation: "Kata + に違いない", explanation: "Keyakinan kuat.", jlpt: "N3", examples: [{jp: "彼が犯人に違いない。", reading: "Kare ga hannin ni chigainai.", meaning: "Dia pasti pelakunya."}], mistakes: "Lebih kuat dari はずだ." },
  { pattern: "〜わけではない", meaning: "Bukan berarti", formation: "Kata + わけではない", explanation: "Menyangkal asumsi.", jlpt: "N3", examples: [{jp: "嫌いなわけではない。", reading: "Kirai na wake dewa nai.", meaning: "Bukan berarti benci."}], mistakes: "Bukan berarti total salah." },
  { pattern: "〜べきだ", meaning: "Seharusnya", formation: "Kata Kerja-kamus + べきだ", explanation: "Saran moral/kewajaran.", jlpt: "N3", examples: [{jp: "約束は守るべきだ。", reading: "Yakusoku wa mamorubeki da.", meaning: "Janji harus ditepati."}], mistakes: "Suru menjadi subeki." },
  { pattern: "〜たびに", meaning: "Setiap kali", formation: "Kerja-kamus/Benda-の + たびに", explanation: "Tiap kali A, maka B.", jlpt: "N3", examples: [{jp: "会うたびに喧嘩する。", reading: "Au tabi ni kenka suru.", meaning: "Tiap kali bertemu selalu bertengkar."}], mistakes: "Tidak bisa untuk hal yang pasti rutin." },
  { pattern: "〜というと", meaning: "Bicara soal...", formation: "Kata Benda + というと", explanation: "Mengangkat topik yang diasosiasikan.", jlpt: "N3", examples: [{jp: "日本というと寿司だ。", reading: "Nihon to iu to sushi da.", meaning: "Bicara soal Jepang, pasti sushi."}], mistakes: "Beda dengan といえば." },
  { pattern: "〜おかげで", meaning: "Berkat (hal positif)", formation: "Kata + おかげで", explanation: "Penyebab hasil baik.", jlpt: "N3", examples: [{jp: "先生のおかげで合格した。", reading: "Sensei no okage de goukaku shita.", meaning: "Berkat guru, saya lulus."}], mistakes: "Hanya untuk hal positif." },
  { pattern: "〜せいで", meaning: "Gara-gara (hal negatif)", formation: "Kata + せいで", explanation: "Penyebab hasil buruk.", jlpt: "N3", examples: [{jp: "雨のせいで遅れた。", reading: "Ame no sei de okureta.", meaning: "Gara-gara hujan, saya telat."}], mistakes: "Hanya untuk negatif." },
  { pattern: "〜っぱなし", meaning: "Dibiarkan (seperti itu)", formation: "Kata Kerja-ます + っぱなし", explanation: "Membiarkan kondisi buruk berlalu.", jlpt: "N3", examples: [{jp: "ドアを開けっぱなしにする。", reading: "Doa wo akeppanashi ni suru.", meaning: "Membiarkan pintu terbuka."}], mistakes: "Kesan ceroboh." },

  // N2
  { pattern: "〜に先立って", meaning: "Sebelum (acara resmi)", formation: "Kata Benda + に先立って", explanation: "Digunakan dalam bisnis/pengumuman.", jlpt: "N2", examples: [{jp: "会議に先立って、挨拶します。", reading: "Kaigi ni sakidatte, aisatsu shimasu.", meaning: "Sebelum rapat, saya akan memberi salam."}], mistakes: "Terlalu formal untuk sehari-hari." },
  { pattern: "〜上(で)", meaning: "Setelah melakukan...", formation: "Kata Kerja-た / Benda-の + 上で", explanation: "Syarat mutlak sebelum hal berikutnya.", jlpt: "N2", examples: [{jp: "相談した上で決めます。", reading: "Soudan shita ue de kimemasu.", meaning: "Diputuskan setelah berunding."}], mistakes: "Harus bentuk -TA jika kerja." },
  { pattern: "〜次第", meaning: "Segera setelah", formation: "Kata Kerja-ます + 次第", explanation: "Begitu selesai A, segera B.", jlpt: "N2", examples: [{jp: "わかり次第連絡します。", reading: "Wakari shidai renraku shimasu.", meaning: "Akan dikabari setelah paham."}], mistakes: "Mirip dengan とすぐに." },
  { pattern: "〜わけがない", meaning: "Tidak mungkin", formation: "Kata + わけがない", explanation: "Keyakinan subjektif bahwa itu mustahil.", jlpt: "N2", examples: [{jp: "彼が知っているわけがない。", reading: "Kare ga shitteiru wake ga nai.", meaning: "Tidak mungkin dia tahu."}], mistakes: "Mirip はずがない." },
  { pattern: "〜ものか", meaning: "Sama sekali tidak!", formation: "Kata + ものか", explanation: "Penolakan emosional.", jlpt: "N2", examples: [{jp: "あんな店に行くものか。", reading: "Anna mise ni iku mono ka.", meaning: "Saya tidak akan pernah pergi ke toko itu."}], mistakes: "Cenderung bahasa lisan." },
  { pattern: "〜に基づいて", meaning: "Berdasarkan pada", formation: "Kata Benda + に基づいて", explanation: "Dasar hukum/data/fakta.", jlpt: "N2", examples: [{jp: "データに基づいて判断する。", reading: "De-ta ni motozuite handan suru.", meaning: "Menilai berdasarkan data."}], mistakes: "Sangat formal." },
  { pattern: "〜反面", meaning: "Di sisi lain", formation: "Kata + 反面", explanation: "Dua sisi dari satu hal yang sama.", jlpt: "N2", examples: [{jp: "便利な反面、危険だ。", reading: "Benri na hanmen, kiken da.", meaning: "Praktis tapi di sisi lain berbahaya."}], mistakes: "Beda subjek gunakan 一方で." },
  { pattern: "〜からいうと", meaning: "Dilihat dari...", formation: "Kata Benda + からいうと", explanation: "Dari perspektif tertentu.", jlpt: "N2", examples: [{jp: "能力からいうと彼が適任だ。", reading: "Nouryoku kara iu to kare ga tekinin da.", meaning: "Dari kemampuan, dia yang cocok."}], mistakes: "Bisa ditukar dengan からすると." },
  { pattern: "〜得る", meaning: "Mungkin terjadi / Bisa", formation: "Kata Kerja-ます + 得る (える/うる)", explanation: "Kemungkinan objektif.", jlpt: "N2", examples: [{jp: "起こり得る問題だ。", reading: "Okori uru mondai da.", meaning: "Masalah yang bisa saja terjadi."}], mistakes: "Bukan untuk kemampuan (bisa berenang)." },
  { pattern: "〜ざるを得ない", meaning: "Terpaksa harus", formation: "Kata Kerja-ない (tanpa nai) + ざるを得ない", explanation: "Tidak ada pilihan lain.", jlpt: "N2", examples: [{jp: "認めざるを得ない。", reading: "Mitomezaru wo enai.", meaning: "Terpaksa harus mengakui."}], mistakes: "Suru menjadi Sezaru." },

  // N1
  { pattern: "〜を余儀なくされる", meaning: "Terpaksa melakukan (karena situasi)", formation: "Kata Benda + を余儀なくされる", explanation: "Situasi buruk memaksa subjek melakukan sesuatu.", jlpt: "N1", examples: [{jp: "中止を余儀なくされた。", reading: "Chuushi wo yoginaku sareta.", meaning: "Terpaksa harus dibatalkan."}], mistakes: "Subjeknya orang yang menderita paksaan." },
  { pattern: "〜いかんでは", meaning: "Tergantung pada...", formation: "Kata Benda (+の) + いかんでは", explanation: "Sangat formal untuk 'tergantung'.", jlpt: "N1", examples: [{jp: "成績いかんでは退学になる。", reading: "Seiseki ikan dewa taigaku ni naru.", meaning: "Tergantung nilainya bisa di-DO."}], mistakes: "Mirip によって." },
  { pattern: "〜かたわら", meaning: "Sambil / di samping", formation: "Kata Kerja-kamus / Benda-の + かたわら", explanation: "Melakukan B sebagai sampingan A (pekerjaan utama).", jlpt: "N1", examples: [{jp: "教師のかたわら小説を書く。", reading: "Kyoushi no katawara shousetsu wo kaku.", meaning: "Selain jadi guru, juga nulis novel."}], mistakes: "Aksi panjang, bukan instan seperti ながら." },
  { pattern: "〜なり", meaning: "Begitu melakukan A, langsung B", formation: "Kata Kerja-kamus + なり", explanation: "Aksi B seringkali mengejutkan/negatif.", jlpt: "N1", examples: [{jp: "帰るなり泣き出した。", reading: "Kaeru nari nakidashita.", meaning: "Begitu pulang langsung menangis."}], mistakes: "Subjeknya pihak ke-3." },
  { pattern: "〜とあって", meaning: "Karena (situasi spesial)", formation: "Kata Benda / Kalimat + とあって", explanation: "Akibat wajar dari situasi luar biasa.", jlpt: "N1", examples: [{jp: "無料とあって客が多い。", reading: "Muryou to atte kyaku ga ooi.", meaning: "Wajar tamunya banyak karena gratis."}], mistakes: "Tidak dipakai untuk diri sendiri." },
  { pattern: "〜極まる", meaning: "Sangat / luar biasa", formation: "Kata Sifat-な + 極まる", explanation: "Puncak ekstrim (biasanya negatif).", jlpt: "N1", examples: [{jp: "不愉快極まる。", reading: "Fuyukai kiwamaru.", meaning: "Sangat tidak menyenangkan."}], mistakes: "Sering dipakai dengan 極まりない." },
  { pattern: "〜にたえる", meaning: "Layak untuk (dilihat/dibaca)", formation: "Kata Kerja-kamus + にたえる", explanation: "Ada nilai untuk dilakukan.", jlpt: "N1", examples: [{jp: "読むにたえる本だ。", reading: "Yomu ni taeru hon da.", meaning: "Buku yang layak dibaca."}], mistakes: "Negatifnya にたえない (tidak sanggup)." },
  { pattern: "〜まじき", meaning: "Tidak sepantasnya", formation: "Kata Kerja-kamus + まじき + Benda", explanation: "Larangan moral profesi.", jlpt: "N1", examples: [{jp: "許すまじき行為だ。", reading: "Yurusu majiki koui da.", meaning: "Perbuatan yang tak pantas dimaafkan."}], mistakes: "Suru menjadi Surumajiki / Subeki majiki." },
  { pattern: "〜んがため(に)", meaning: "Demi untuk (tekad kuat)", formation: "Kata Kerja-ない(tanpa nai) + んがため", explanation: "Tujuan absolut.", jlpt: "N1", examples: [{jp: "勝たんがために練習する。", reading: "Katan ga tame ni renshuu suru.", meaning: "Latihan demi untuk menang."}], mistakes: "Suru menjadi Sen ga tame." },
  { pattern: "〜てやまない", meaning: "Tidak henti-hentinya (berharap)", formation: "Kata Kerja-て + やまない", explanation: "Perasaan kuat.", jlpt: "N1", examples: [{jp: "成功を祈ってやまない。", reading: "Seikou wo inotte yamanai.", meaning: "Terus berdoa untuk kesuksesannya."}], mistakes: "Hanya untuk kata kerja emosi (berdoa, berharap)." }
];

const fileContent = `export interface GrammarExample {
  jp: string;
  reading: string;
  meaning: string;
}

export interface GrammarEntry {
  pattern: string;
  meaning: string;
  formation: string;
  explanation: string;
  jlpt: string;
  examples: GrammarExample[];
  mistakes: string;
}

export const grammarData: GrammarEntry[] = ${JSON.stringify(grammarList, null, 2)};
`;

const outputPath = path.join(__dirname, "..", "src", "lib", "grammarData.ts");
fs.writeFileSync(outputPath, fileContent, "utf-8");
console.log("✅ Berhasil men-generate grammarData.ts dengan", grammarList.length, "tata bahasa!");
