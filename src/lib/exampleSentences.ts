// Example sentences for common Japanese vocabulary
// Each entry maps a word to its example sentence(s)

export interface ExampleSentence {
  ja: string;    // Japanese sentence
  reading: string; // Romaji / reading
  id: string;    // Indonesian translation
}

// Map of word -> example sentences
const sentenceMap: Record<string, ExampleSentence[]> = {
  // === Kata Kerja (Verbs) ===
  "会う": [{ ja: "明日、友達に会います。", reading: "Ashita, tomodachi ni aimasu.", id: "Besok, saya akan bertemu teman." }],
  "開ける": [{ ja: "窓を開けてください。", reading: "Mado o akete kudasai.", id: "Tolong buka jendelanya." }],
  "あげる": [{ ja: "友達にプレゼントをあげました。", reading: "Tomodachi ni purezento o agemashita.", id: "Saya memberi hadiah kepada teman." }],
  "遊ぶ": [{ ja: "公園で遊びましょう。", reading: "Kouen de asobimashō.", id: "Ayo bermain di taman." }],
  "洗う": [{ ja: "手を洗ってください。", reading: "Te o aratte kudasai.", id: "Tolong cuci tanganmu." }],
  "ある": [{ ja: "机の上に本があります。", reading: "Tsukue no ue ni hon ga arimasu.", id: "Ada buku di atas meja." }],
  "歩く": [{ ja: "毎朝、学校まで歩きます。", reading: "Maiasa, gakkou made arukimasu.", id: "Setiap pagi, saya berjalan ke sekolah." }],
  "言う": [{ ja: "先生が「静かにしてください」と言いました。", reading: "Sensei ga 'shizuka ni shite kudasai' to iimashita.", id: "Guru berkata 'tolong tenang'." }],
  "行く": [{ ja: "明日、東京に行きます。", reading: "Ashita, Tōkyō ni ikimasu.", id: "Besok, saya akan pergi ke Tokyo." }],
  "いる": [{ ja: "猫が部屋にいます。", reading: "Neko ga heya ni imasu.", id: "Ada kucing di kamar." }],
  "入れる": [{ ja: "コーヒーに砂糖を入れます。", reading: "Koohii ni satou o iremasu.", id: "Saya memasukkan gula ke kopi." }],
  "歌う": [{ ja: "カラオケで歌います。", reading: "Karaoke de utaimasu.", id: "Saya menyanyi di karaoke." }],
  "売る": [{ ja: "このお店は花を売っています。", reading: "Kono omise wa hana o utte imasu.", id: "Toko ini menjual bunga." }],
  "起きる": [{ ja: "毎朝6時に起きます。", reading: "Maiasa rokuji ni okimasu.", id: "Setiap pagi saya bangun jam 6." }],
  "教える": [{ ja: "日本語を教えています。", reading: "Nihongo o oshiete imasu.", id: "Saya mengajar bahasa Jepang." }],
  "押す": [{ ja: "このボタンを押してください。", reading: "Kono botan o oshite kudasai.", id: "Tolong tekan tombol ini." }],
  "覚える": [{ ja: "漢字を覚えるのは大変です。", reading: "Kanji o oboeru no wa taihen desu.", id: "Menghafal kanji itu susah." }],
  "泳ぐ": [{ ja: "夏にプールで泳ぎます。", reading: "Natsu ni puuru de oyogimasu.", id: "Di musim panas saya berenang di kolam." }],
  "買う": [{ ja: "スーパーで野菜を買いました。", reading: "Suupaa de yasai o kaimashita.", id: "Saya membeli sayuran di supermarket." }],
  "書く": [{ ja: "手紙を書きます。", reading: "Tegami o kakimasu.", id: "Saya menulis surat." }],
  "貸す": [{ ja: "友達に本を貸しました。", reading: "Tomodachi ni hon o kashimashita.", id: "Saya meminjamkan buku kepada teman." }],
  "借りる": [{ ja: "図書館で本を借りました。", reading: "Toshokan de hon o karimashita.", id: "Saya meminjam buku di perpustakaan." }],
  "聞く": [{ ja: "音楽を聞きます。", reading: "Ongaku o kikimasu.", id: "Saya mendengarkan musik." }],
  "切る": [{ ja: "紙をはさみで切ります。", reading: "Kami o hasami de kirimasu.", id: "Saya memotong kertas dengan gunting." }],
  "来る": [{ ja: "友達が家に来ます。", reading: "Tomodachi ga ie ni kimasu.", id: "Teman datang ke rumah." }],
  "消す": [{ ja: "電気を消してください。", reading: "Denki o keshite kudasai.", id: "Tolong matikan lampunya." }],
  "答える": [{ ja: "質問に答えてください。", reading: "Shitsumon ni kotaete kudasai.", id: "Tolong jawab pertanyaannya." }],
  "困る": [{ ja: "お金がなくて困っています。", reading: "Okane ga nakute komatte imasu.", id: "Saya kesulitan karena tidak punya uang." }],
  "座る": [{ ja: "椅子に座ってください。", reading: "Isu ni suwatte kudasai.", id: "Silakan duduk di kursi." }],
  "知る": [{ ja: "彼の名前を知っていますか？", reading: "Kare no namae o shitte imasu ka?", id: "Apakah kamu tahu namanya?" }],
  "住む": [{ ja: "東京に住んでいます。", reading: "Tōkyō ni sunde imasu.", id: "Saya tinggal di Tokyo." }],
  "する": [{ ja: "毎日、運動をします。", reading: "Mainichi, undou o shimasu.", id: "Setiap hari, saya berolahraga." }],
  "食べる": [{ ja: "朝ごはんにパンを食べます。", reading: "Asagohan ni pan o tabemasu.", id: "Saya makan roti untuk sarapan." }],
  "使う": [{ ja: "このアプリを使ってください。", reading: "Kono apuri o tsukatte kudasai.", id: "Tolong gunakan aplikasi ini." }],
  "作る": [{ ja: "お母さんがケーキを作りました。", reading: "Okaasan ga keeki o tsukurimashita.", id: "Ibu membuat kue." }],
  "出す": [{ ja: "手紙を出しました。", reading: "Tegami o dashimashita.", id: "Saya mengirim surat." }],
  "飲む": [{ ja: "毎朝コーヒーを飲みます。", reading: "Maiasa koohii o nomimasu.", id: "Setiap pagi saya minum kopi." }],
  "乗る": [{ ja: "電車に乗ります。", reading: "Densha ni norimasu.", id: "Saya naik kereta." }],
  "入る": [{ ja: "部屋に入ってもいいですか？", reading: "Heya ni haitte mo ii desu ka?", id: "Boleh saya masuk ke kamar?" }],
  "話す": [{ ja: "日本語を話せますか？", reading: "Nihongo o hanasemasu ka?", id: "Apakah kamu bisa berbicara bahasa Jepang?" }],
  "走る": [{ ja: "公園で走ります。", reading: "Kouen de hashirimasu.", id: "Saya berlari di taman." }],
  "働く": [{ ja: "銀行で働いています。", reading: "Ginkou de hataraite imasu.", id: "Saya bekerja di bank." }],
  "引く": [{ ja: "ドアを引いてください。", reading: "Doa o hiite kudasai.", id: "Tolong tarik pintunya." }],
  "降る": [{ ja: "今日は雨が降っています。", reading: "Kyou wa ame ga futte imasu.", id: "Hari ini sedang turun hujan." }],
  "待つ": [{ ja: "ここで待ってください。", reading: "Koko de matte kudasai.", id: "Tolong tunggu di sini." }],
  "見る": [{ ja: "テレビを見ます。", reading: "Terebi o mimasu.", id: "Saya menonton TV." }],
  "持つ": [{ ja: "傘を持っていますか？", reading: "Kasa o motte imasu ka?", id: "Apakah kamu membawa payung?" }],
  "もらう": [{ ja: "友達からプレゼントをもらいました。", reading: "Tomodachi kara purezento o moraimashita.", id: "Saya menerima hadiah dari teman." }],
  "休む": [{ ja: "今日は学校を休みます。", reading: "Kyou wa gakkou o yasumimasu.", id: "Hari ini saya tidak masuk sekolah." }],
  "読む": [{ ja: "毎晩、本を読みます。", reading: "Maiban, hon o yomimasu.", id: "Setiap malam, saya membaca buku." }],
  "分かる": [{ ja: "この漢字の意味が分かりますか？", reading: "Kono kanji no imi ga wakarimasu ka?", id: "Apakah kamu mengerti arti kanji ini?" }],
  "忘れる": [{ ja: "宿題を忘れました。", reading: "Shukudai o wasuremashita.", id: "Saya lupa PR." }],
  "渡す": [{ ja: "先生にレポートを渡しました。", reading: "Sensei ni repooto o watashimashita.", id: "Saya menyerahkan laporan kepada guru." }],
  "渡る": [{ ja: "橋を渡ります。", reading: "Hashi o watarimasu.", id: "Saya menyeberangi jembatan." }],
  "勉強する": [{ ja: "毎日日本語を勉強しています。", reading: "Mainichi nihongo o benkyou shite imasu.", id: "Setiap hari saya belajar bahasa Jepang." }],
  "練習する": [{ ja: "漢字を練習します。", reading: "Kanji o renshuu shimasu.", id: "Saya berlatih kanji." }],

  // === Kata Benda (Nouns) ===
  "朝": [{ ja: "朝は6時に起きます。", reading: "Asa wa rokuji ni okimasu.", id: "Pagi saya bangun jam 6." }],
  "足": [{ ja: "足が痛いです。", reading: "Ashi ga itai desu.", id: "Kaki saya sakit." }],
  "頭": [{ ja: "頭が痛いです。", reading: "Atama ga itai desu.", id: "Kepala saya sakit." }],
  "兄": [{ ja: "兄は大学生です。", reading: "Ani wa daigakusei desu.", id: "Kakak laki-laki saya mahasiswa." }],
  "姉": [{ ja: "姉は先生です。", reading: "Ane wa sensei desu.", id: "Kakak perempuan saya guru." }],
  "雨": [{ ja: "今日は雨です。", reading: "Kyou wa ame desu.", id: "Hari ini hujan." }],
  "犬": [{ ja: "犬が好きです。", reading: "Inu ga suki desu.", id: "Saya suka anjing." }],
  "家": [{ ja: "大きい家に住みたいです。", reading: "Ookii ie ni sumitai desu.", id: "Saya ingin tinggal di rumah besar." }],
  "海": [{ ja: "夏に海に行きました。", reading: "Natsu ni umi ni ikimashita.", id: "Di musim panas saya pergi ke laut." }],
  "駅": [{ ja: "駅はどこですか？", reading: "Eki wa doko desu ka?", id: "Di mana stasiunnya?" }],
  "お金": [{ ja: "お金が足りません。", reading: "Okane ga tarimasen.", id: "Uangnya tidak cukup." }],
  "お茶": [{ ja: "お茶を飲みましょう。", reading: "Ocha o nomimashō.", id: "Ayo minum teh." }],
  "学校": [{ ja: "学校は8時に始まります。", reading: "Gakkou wa hachiji ni hajimarimasu.", id: "Sekolah dimulai jam 8." }],
  "体": [{ ja: "体に気をつけてください。", reading: "Karada ni ki o tsukete kudasai.", id: "Tolong jaga kesehatanmu." }],
  "木": [{ ja: "公園に大きい木があります。", reading: "Kouen ni ookii ki ga arimasu.", id: "Ada pohon besar di taman." }],
  "薬": [{ ja: "薬を飲みました。", reading: "Kusuri o nomimashita.", id: "Saya sudah minum obat." }],
  "口": [{ ja: "口を開けてください。", reading: "Kuchi o akete kudasai.", id: "Tolong buka mulutmu." }],
  "車": [{ ja: "車で会社に行きます。", reading: "Kuruma de kaisha ni ikimasu.", id: "Saya pergi ke kantor naik mobil." }],
  "子供": [{ ja: "子供が公園で遊んでいます。", reading: "Kodomo ga kouen de asonde imasu.", id: "Anak-anak sedang bermain di taman." }],
  "言葉": [{ ja: "新しい言葉を覚えました。", reading: "Atarashii kotoba o oboemashita.", id: "Saya menghafal kata baru." }],
  "魚": [{ ja: "魚が好きです。", reading: "Sakana ga suki desu.", id: "Saya suka ikan." }],
  "先生": [{ ja: "先生は優しいです。", reading: "Sensei wa yasashii desu.", id: "Guru itu baik." }],
  "空": [{ ja: "今日の空はきれいです。", reading: "Kyou no sora wa kirei desu.", id: "Langit hari ini indah." }],
  "食べ物": [{ ja: "日本の食べ物が好きです。", reading: "Nihon no tabemono ga suki desu.", id: "Saya suka makanan Jepang." }],
  "友達": [{ ja: "友達とカフェに行きました。", reading: "Tomodachi to kafe ni ikimashita.", id: "Saya pergi ke kafe bersama teman." }],
  "猫": [{ ja: "猫がかわいいです。", reading: "Neko ga kawaii desu.", id: "Kucingnya lucu." }],
  "花": [{ ja: "花をもらいました。", reading: "Hana o moraimashita.", id: "Saya menerima bunga." }],
  "人": [{ ja: "あの人は誰ですか？", reading: "Ano hito wa dare desu ka?", id: "Siapa orang itu?" }],
  "本": [{ ja: "この本はおもしろいです。", reading: "Kono hon wa omoshiroi desu.", id: "Buku ini menarik." }],
  "水": [{ ja: "水をください。", reading: "Mizu o kudasai.", id: "Tolong beri saya air." }],
  "店": [{ ja: "あの店は安いです。", reading: "Ano mise wa yasui desu.", id: "Toko itu murah." }],
  "目": [{ ja: "目が大きいです。", reading: "Me ga ookii desu.", id: "Matanya besar." }],
  "山": [{ ja: "富士山に登りたいです。", reading: "Fujisan ni noboritai desu.", id: "Saya ingin mendaki Gunung Fuji." }],
  "夜": [{ ja: "夜は静かです。", reading: "Yoru wa shizuka desu.", id: "Malam itu tenang." }],
  "天気": [{ ja: "今日の天気はいいです。", reading: "Kyou no tenki wa ii desu.", id: "Cuaca hari ini bagus." }],
  "電車": [{ ja: "電車で学校に行きます。", reading: "Densha de gakkou ni ikimasu.", id: "Saya pergi ke sekolah naik kereta." }],
  "時間": [{ ja: "時間がありません。", reading: "Jikan ga arimasen.", id: "Tidak ada waktu." }],
  "映画": [{ ja: "週末に映画を見ました。", reading: "Shuumatsu ni eiga o mimashita.", id: "Saya menonton film di akhir pekan." }],

  // === Kata Sifat (Adjectives) ===
  "新しい": [{ ja: "新しい携帯を買いました。", reading: "Atarashii keitai o kaimashita.", id: "Saya membeli HP baru." }],
  "暑い": [{ ja: "今日はとても暑いです。", reading: "Kyou wa totemo atsui desu.", id: "Hari ini sangat panas." }],
  "危ない": [{ ja: "ここは危ないです。", reading: "Koko wa abunai desu.", id: "Di sini berbahaya." }],
  "甘い": [{ ja: "このケーキは甘いです。", reading: "Kono keeki wa amai desu.", id: "Kue ini manis." }],
  "忙しい": [{ ja: "今週は忙しいです。", reading: "Konshuu wa isogashii desu.", id: "Minggu ini saya sibuk." }],
  "大きい": [{ ja: "この部屋は大きいです。", reading: "Kono heya wa ookii desu.", id: "Kamar ini besar." }],
  "小さい": [{ ja: "小さい猫がいます。", reading: "Chiisai neko ga imasu.", id: "Ada kucing kecil." }],
  "高い": [{ ja: "このレストランは高いです。", reading: "Kono resutoran wa takai desu.", id: "Restoran ini mahal." }],
  "安い": [{ ja: "この店は安いです。", reading: "Kono mise wa yasui desu.", id: "Toko ini murah." }],
  "おいしい": [{ ja: "このラーメンはおいしいです。", reading: "Kono raamen wa oishii desu.", id: "Ramen ini enak." }],
  "楽しい": [{ ja: "旅行は楽しかったです。", reading: "Ryokou wa tanoshikatta desu.", id: "Perjalanan itu menyenangkan." }],
  "難しい": [{ ja: "日本語は難しいです。", reading: "Nihongo wa muzukashii desu.", id: "Bahasa Jepang itu susah." }],
  "易しい": [{ ja: "このテストは易しいです。", reading: "Kono tesuto wa yasashii desu.", id: "Tes ini mudah." }],
  "長い": [{ ja: "この映画は長いです。", reading: "Kono eiga wa nagai desu.", id: "Film ini panjang." }],
  "短い": [{ ja: "夏休みは短いです。", reading: "Natsuyasumi wa mijikai desu.", id: "Liburan musim panas itu pendek." }],
  "近い": [{ ja: "駅は近いです。", reading: "Eki wa chikai desu.", id: "Stasiunnya dekat." }],
  "遠い": [{ ja: "空港は遠いです。", reading: "Kuukou wa tooi desu.", id: "Bandara itu jauh." }],
  "良い": [{ ja: "この本は良いです。", reading: "Kono hon wa yoi desu.", id: "Buku ini bagus." }],
  "元気": [{ ja: "お元気ですか？", reading: "Ogenki desu ka?", id: "Apa kabar?" }],
  "静か": [{ ja: "この図書館は静かです。", reading: "Kono toshokan wa shizuka desu.", id: "Perpustakaan ini tenang." }],
  "きれい": [{ ja: "この花はきれいです。", reading: "Kono hana wa kirei desu.", id: "Bunga ini cantik." }],
  "有名": [{ ja: "富士山は有名です。", reading: "Fujisan wa yuumei desu.", id: "Gunung Fuji itu terkenal." }],

  // === Kata Keterangan & Lainnya ===
  "今日": [{ ja: "今日は何曜日ですか？", reading: "Kyou wa nan youbi desu ka?", id: "Hari ini hari apa?" }],
  "明日": [{ ja: "明日は日曜日です。", reading: "Ashita wa nichiyoubi desu.", id: "Besok hari Minggu." }],
  "昨日": [{ ja: "昨日、映画を見ました。", reading: "Kinou, eiga o mimashita.", id: "Kemarin, saya menonton film." }],
  "いつも": [{ ja: "いつも7時に起きます。", reading: "Itsumo shichiji ni okimasu.", id: "Saya selalu bangun jam 7." }],
  "時々": [{ ja: "時々、日本料理を食べます。", reading: "Tokidoki, nihon ryouri o tabemasu.", id: "Kadang-kadang saya makan masakan Jepang." }],
  "たくさん": [{ ja: "本をたくさん読みました。", reading: "Hon o takusan yomimashita.", id: "Saya membaca banyak buku." }],
  "少し": [{ ja: "日本語が少し分かります。", reading: "Nihongo ga sukoshi wakarimasu.", id: "Saya sedikit mengerti bahasa Jepang." }],
  "とても": [{ ja: "この映画はとてもおもしろいです。", reading: "Kono eiga wa totemo omoshiroi desu.", id: "Film ini sangat menarik." }],
  "まだ": [{ ja: "まだ食べていません。", reading: "Mada tabete imasen.", id: "Saya belum makan." }],
  "もう": [{ ja: "もう宿題をしましたか？", reading: "Mou shukudai o shimashita ka?", id: "Apakah kamu sudah mengerjakan PR?" }],

  // more common words
  "青": [{ ja: "空は青いです。", reading: "Sora wa aoi desu.", id: "Langit itu biru." }],
  "青い": [{ ja: "青い海が見えます。", reading: "Aoi umi ga miemasu.", id: "Laut biru terlihat." }],
  "赤": [{ ja: "赤い花が好きです。", reading: "Akai hana ga suki desu.", id: "Saya suka bunga merah." }],
  "赤い": [{ ja: "赤い車があります。", reading: "Akai kuruma ga arimasu.", id: "Ada mobil merah." }],
  "白い": [{ ja: "白い猫がいます。", reading: "Shiroi neko ga imasu.", id: "Ada kucing putih." }],
  "黒い": [{ ja: "黒いかばんを持っています。", reading: "Kuroi kaban o motte imasu.", id: "Saya membawa tas hitam." }],
};

/**
 * Get example sentence(s) for a vocabulary word.
 * Falls back to a contextual placeholder if the word isn't in the dictionary.
 */
export function getExampleSentence(word: string, reading: string, meaning: string): ExampleSentence[] {
  // Try exact match
  if (sentenceMap[word]) {
    return sentenceMap[word];
  }

  // Try reading match (for words stored by reading)
  if (sentenceMap[reading]) {
    return sentenceMap[reading];
  }

  // Generate a contextual fallback
  return [{
    ja: `${word}を使って文を作りましょう。`,
    reading: `${reading} o tsukatte bun o tsukurimashō.`,
    id: `Mari membuat kalimat menggunakan "${meaning}".`,
  }];
}

export default sentenceMap;
