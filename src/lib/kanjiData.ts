export type KanjiEntry = {
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  jlpt: string;
};

export const kanjiCountByLevel: Record<string, number> = {
  N5: 80,
  N4: 166,
  N3: 367,
  N2: 367,
  N1: 1017,
};

export const kanjiData: KanjiEntry[] = [
  {
    "char": "一",
    "meaning": "One / One Radical (no.1)",
    "onyomi": [
      "いち",
      "いつ"
    ],
    "kunyomi": [
      "ひと-",
      "ひと.つ"
    ],
    "strokes": 1,
    "jlpt": "N5"
  },
  {
    "char": "二",
    "meaning": "Two / Two Radical (no. 7)",
    "onyomi": [
      "に",
      "じ"
    ],
    "kunyomi": [
      "ふた",
      "ふた.つ",
      "ふたたび"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "九",
    "meaning": "Nine",
    "onyomi": [
      "きゅう",
      "く"
    ],
    "kunyomi": [
      "ここの",
      "ここの.つ"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "七",
    "meaning": "Seven",
    "onyomi": [
      "しち"
    ],
    "kunyomi": [
      "なな",
      "なな.つ",
      "なの"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "人",
    "meaning": "Person",
    "onyomi": [
      "じん",
      "にん"
    ],
    "kunyomi": [
      "ひと",
      "-り",
      "-と"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "入",
    "meaning": "Enter / Insert",
    "onyomi": [
      "にゅう",
      "じゅ"
    ],
    "kunyomi": [
      "い.る",
      "-い.る",
      "-い.り",
      "い.れる",
      "-い.れ",
      "はい.る"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "八",
    "meaning": "Eight / Eight Radical (no. 12)",
    "onyomi": [
      "はち"
    ],
    "kunyomi": [
      "や",
      "や.つ",
      "やっ.つ",
      "よう"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "十",
    "meaning": "Ten",
    "onyomi": [
      "じゅう",
      "じっ",
      "じゅっ"
    ],
    "kunyomi": [
      "とお",
      "と"
    ],
    "strokes": 2,
    "jlpt": "N5"
  },
  {
    "char": "三",
    "meaning": "Three",
    "onyomi": [
      "さん",
      "ぞう"
    ],
    "kunyomi": [
      "み",
      "み.つ",
      "みっ.つ"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "上",
    "meaning": "Above / Up",
    "onyomi": [
      "じょう",
      "しょう",
      "しゃん"
    ],
    "kunyomi": [
      "うえ",
      "-うえ",
      "うわ-",
      "かみ",
      "あ.げる",
      "-あ.げる",
      "あ.がる",
      "-あ.がる",
      "あ.がり",
      "-あ.がり",
      "のぼ.る",
      "のぼ.り",
      "のぼ.せる",
      "のぼ.す",
      "たてまつ.る"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "下",
    "meaning": "Below / Down / Descend",
    "onyomi": [
      "か",
      "げ"
    ],
    "kunyomi": [
      "した",
      "しも",
      "もと",
      "さ.げる",
      "さ.がる",
      "くだ.る",
      "くだ.り",
      "くだ.す",
      "-くだ.す",
      "くだ.さる",
      "お.ろす",
      "お.りる"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "大",
    "meaning": "Large / Big",
    "onyomi": [
      "だい",
      "たい"
    ],
    "kunyomi": [
      "おお-",
      "おお.きい",
      "-おお.いに"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "女",
    "meaning": "Woman / Female",
    "onyomi": [
      "じょ",
      "にょ",
      "にょう"
    ],
    "kunyomi": [
      "おんな",
      "め"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "山",
    "meaning": "Mountain",
    "onyomi": [
      "さん",
      "せん"
    ],
    "kunyomi": [
      "やま"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "川",
    "meaning": "Stream / River / River Or Three-stroke River Radical (no. 47)",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "かわ"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "土",
    "meaning": "Soil / Earth / Ground",
    "onyomi": [
      "ど",
      "と"
    ],
    "kunyomi": [
      "つち"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "千",
    "meaning": "Thousand",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "ち"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "子",
    "meaning": "Child / Sign Of The Rat / 11pm-1am",
    "onyomi": [
      "し",
      "す",
      "つ"
    ],
    "kunyomi": [
      "こ",
      "-こ",
      "ね"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "小",
    "meaning": "Little / Small",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "ちい.さい",
      "こ-",
      "お-",
      "さ-"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "中",
    "meaning": "In / Inside / Middle",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "なか",
      "うち",
      "あた.る"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "五",
    "meaning": "Five",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "いつ",
      "いつ.つ"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "六",
    "meaning": "Six",
    "onyomi": [
      "ろく",
      "りく"
    ],
    "kunyomi": [
      "む",
      "む.つ",
      "むっ.つ",
      "むい"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "円",
    "meaning": "Circle / Yen / Round",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "まる.い",
      "まる",
      "まど",
      "まど.か",
      "まろ.やか"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "天",
    "meaning": "Heavens / Sky / Imperial",
    "onyomi": [
      "てん"
    ],
    "kunyomi": [
      "あまつ",
      "あめ",
      "あま-"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "日",
    "meaning": "Day / Sun / Japan",
    "onyomi": [
      "にち",
      "じつ"
    ],
    "kunyomi": [
      "ひ",
      "-び",
      "-か"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "月",
    "meaning": "Month / Moon",
    "onyomi": [
      "げつ",
      "がつ"
    ],
    "kunyomi": [
      "つき"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "木",
    "meaning": "Tree / Wood",
    "onyomi": [
      "ぼく",
      "もく"
    ],
    "kunyomi": [
      "き",
      "こ-"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "水",
    "meaning": "Water",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "みず",
      "みず-"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "火",
    "meaning": "Fire",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "ひ",
      "-び",
      "ほ-"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "出",
    "meaning": "Exit / Leave / Go Out",
    "onyomi": [
      "しゅつ",
      "すい"
    ],
    "kunyomi": [
      "で.る",
      "-で",
      "だ.す",
      "-だ.す",
      "い.でる",
      "い.だす"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "右",
    "meaning": "Right",
    "onyomi": [
      "う",
      "ゆう"
    ],
    "kunyomi": [
      "みぎ"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "四",
    "meaning": "Four",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "よ",
      "よ.つ",
      "よっ.つ",
      "よん"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "左",
    "meaning": "Left",
    "onyomi": [
      "さ",
      "しゃ"
    ],
    "kunyomi": [
      "ひだり"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "本",
    "meaning": "Book / Present / Main",
    "onyomi": [
      "ほん"
    ],
    "kunyomi": [
      "もと"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "白",
    "meaning": "White",
    "onyomi": [
      "はく",
      "びゃく"
    ],
    "kunyomi": [
      "しろ",
      "しら-",
      "しろ.い"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "万",
    "meaning": "Ten Thousand / 10,000",
    "onyomi": [
      "まん",
      "ばん"
    ],
    "kunyomi": [
      "よろず"
    ],
    "strokes": 3,
    "jlpt": "N5"
  },
  {
    "char": "今",
    "meaning": "Now",
    "onyomi": [
      "こん",
      "きん"
    ],
    "kunyomi": [
      "いま"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "午",
    "meaning": "Noon / Sign Of The Horse / 11am-1pm",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "うま"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "友",
    "meaning": "Friend",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "とも"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "父",
    "meaning": "Father",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "ちち"
    ],
    "strokes": 4,
    "jlpt": "N5"
  },
  {
    "char": "北",
    "meaning": "North",
    "onyomi": [
      "ほく"
    ],
    "kunyomi": [
      "きた"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "半",
    "meaning": "Half / Middle / Odd Number",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "なか.ば"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "外",
    "meaning": "Outside",
    "onyomi": [
      "がい",
      "げ"
    ],
    "kunyomi": [
      "そと",
      "ほか",
      "はず.す",
      "はず.れる",
      "と-"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "母",
    "meaning": "Mother",
    "onyomi": [
      "ぼ"
    ],
    "kunyomi": [
      "はは",
      "も"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "休",
    "meaning": "Rest / Day Off / Retire",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "やす.む",
      "やす.まる",
      "やす.める"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "先",
    "meaning": "Before / Ahead / Previous",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "さき",
      "ま.ず"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "名",
    "meaning": "Name / Noted / Distinguished",
    "onyomi": [
      "めい",
      "みょう"
    ],
    "kunyomi": [
      "な",
      "-な"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "年",
    "meaning": "Year / Counter For Years",
    "onyomi": [
      "ねん"
    ],
    "kunyomi": [
      "とし"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "気",
    "meaning": "Spirit / Mind / Air",
    "onyomi": [
      "き",
      "け"
    ],
    "kunyomi": [
      "いき"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "百",
    "meaning": "Hundred",
    "onyomi": [
      "ひゃく",
      "びゃく"
    ],
    "kunyomi": [
      "もも"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "男",
    "meaning": "Male",
    "onyomi": [
      "だん",
      "なん"
    ],
    "kunyomi": [
      "おとこ",
      "お"
    ],
    "strokes": 7,
    "jlpt": "N5"
  },
  {
    "char": "見",
    "meaning": "See / Hopes / Chances",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "み.る",
      "み.える",
      "み.せる"
    ],
    "strokes": 7,
    "jlpt": "N5"
  },
  {
    "char": "車",
    "meaning": "Car",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "くるま"
    ],
    "strokes": 7,
    "jlpt": "N5"
  },
  {
    "char": "毎",
    "meaning": "Every",
    "onyomi": [
      "まい"
    ],
    "kunyomi": [
      "ごと",
      "-ごと.に"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "行",
    "meaning": "Going / Journey / Carry Out",
    "onyomi": [
      "こう",
      "ぎょう",
      "あん"
    ],
    "kunyomi": [
      "い.く",
      "ゆ.く",
      "-ゆ.き",
      "-ゆき",
      "-い.き",
      "-いき",
      "おこな.う",
      "おこ.なう"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "西",
    "meaning": "West / Spain",
    "onyomi": [
      "せい",
      "さい",
      "す"
    ],
    "kunyomi": [
      "にし"
    ],
    "strokes": 6,
    "jlpt": "N5"
  },
  {
    "char": "何",
    "meaning": "What",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "なに",
      "なん",
      "なに-",
      "なん-"
    ],
    "strokes": 7,
    "jlpt": "N5"
  },
  {
    "char": "来",
    "meaning": "Come / Due / Next",
    "onyomi": [
      "らい",
      "たい"
    ],
    "kunyomi": [
      "く.る",
      "きた.る",
      "きた.す",
      "き.たす",
      "き.たる",
      "き",
      "こ"
    ],
    "strokes": 7,
    "jlpt": "N5"
  },
  {
    "char": "学",
    "meaning": "Study / Learning / Science",
    "onyomi": [
      "がく"
    ],
    "kunyomi": [
      "まな.ぶ"
    ],
    "strokes": 8,
    "jlpt": "N5"
  },
  {
    "char": "金",
    "meaning": "Gold",
    "onyomi": [
      "きん",
      "こん",
      "ごん"
    ],
    "kunyomi": [
      "かね",
      "かな-",
      "-がね"
    ],
    "strokes": 8,
    "jlpt": "N5"
  },
  {
    "char": "雨",
    "meaning": "Rain",
    "onyomi": [
      "う"
    ],
    "kunyomi": [
      "あめ",
      "あま-",
      "-さめ"
    ],
    "strokes": 8,
    "jlpt": "N5"
  },
  {
    "char": "国",
    "meaning": "Country",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "くに"
    ],
    "strokes": 8,
    "jlpt": "N5"
  },
  {
    "char": "東",
    "meaning": "East",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ひがし"
    ],
    "strokes": 8,
    "jlpt": "N5"
  },
  {
    "char": "長",
    "meaning": "Long / Leader / Superior",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "なが.い",
      "おさ"
    ],
    "strokes": 8,
    "jlpt": "N5"
  },
  {
    "char": "前",
    "meaning": "In Front / Before",
    "onyomi": [
      "ぜん"
    ],
    "kunyomi": [
      "まえ",
      "-まえ"
    ],
    "strokes": 9,
    "jlpt": "N5"
  },
  {
    "char": "南",
    "meaning": "South",
    "onyomi": [
      "なん",
      "な"
    ],
    "kunyomi": [
      "みなみ"
    ],
    "strokes": 9,
    "jlpt": "N5"
  },
  {
    "char": "後",
    "meaning": "Behind / Back / Later",
    "onyomi": [
      "ご",
      "こう"
    ],
    "kunyomi": [
      "のち",
      "うし.ろ",
      "うしろ",
      "あと",
      "おく.れる"
    ],
    "strokes": 9,
    "jlpt": "N5"
  },
  {
    "char": "食",
    "meaning": "Eat / Food",
    "onyomi": [
      "しょく",
      "じき"
    ],
    "kunyomi": [
      "く.う",
      "く.らう",
      "た.べる",
      "は.む"
    ],
    "strokes": 9,
    "jlpt": "N5"
  },
  {
    "char": "校",
    "meaning": "Exam / School / Printing",
    "onyomi": [
      "こう",
      "きょう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N5"
  },
  {
    "char": "時",
    "meaning": "Time / Hour",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "とき",
      "-どき"
    ],
    "strokes": 10,
    "jlpt": "N5"
  },
  {
    "char": "高",
    "meaning": "Tall / High / Expensive",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "たか.い",
      "たか",
      "-だか",
      "たか.まる",
      "たか.める"
    ],
    "strokes": 10,
    "jlpt": "N5"
  },
  {
    "char": "間",
    "meaning": "Interval / Space",
    "onyomi": [
      "かん",
      "けん"
    ],
    "kunyomi": [
      "あいだ",
      "ま",
      "あい"
    ],
    "strokes": 12,
    "jlpt": "N5"
  },
  {
    "char": "話",
    "meaning": "Tale / Talk",
    "onyomi": [
      "わ"
    ],
    "kunyomi": [
      "はな.す",
      "はなし"
    ],
    "strokes": 13,
    "jlpt": "N5"
  },
  {
    "char": "電",
    "meaning": "Electricity",
    "onyomi": [
      "でん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N5"
  },
  {
    "char": "聞",
    "meaning": "Hear / Ask / Listen",
    "onyomi": [
      "ぶん",
      "もん"
    ],
    "kunyomi": [
      "き.く",
      "き.こえる"
    ],
    "strokes": 14,
    "jlpt": "N5"
  },
  {
    "char": "語",
    "meaning": "Word / Speech / Language",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "かた.る",
      "かた.らう"
    ],
    "strokes": 14,
    "jlpt": "N5"
  },
  {
    "char": "読",
    "meaning": "Read",
    "onyomi": [
      "どく",
      "とく",
      "とう"
    ],
    "kunyomi": [
      "よ.む",
      "-よ.み"
    ],
    "strokes": 14,
    "jlpt": "N5"
  },
  {
    "char": "生",
    "meaning": "Life / Genuine / Birth",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "い.きる",
      "い.かす",
      "い.ける",
      "う.まれる",
      "うま.れる",
      "う.まれ",
      "うまれ",
      "う.む",
      "お.う",
      "は.える",
      "は.やす",
      "き",
      "なま",
      "なま-",
      "な.る",
      "な.す",
      "む.す",
      "-う"
    ],
    "strokes": 5,
    "jlpt": "N5"
  },
  {
    "char": "書",
    "meaning": "Write",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "か.く",
      "-が.き",
      "-がき"
    ],
    "strokes": 10,
    "jlpt": "N5"
  },
  {
    "char": "力",
    "meaning": "Power / Strength / Strong",
    "onyomi": [
      "りょく",
      "りき",
      "りい"
    ],
    "kunyomi": [
      "ちから"
    ],
    "strokes": 2,
    "jlpt": "N4"
  },
  {
    "char": "口",
    "meaning": "Mouth",
    "onyomi": [
      "こう",
      "く"
    ],
    "kunyomi": [
      "くち"
    ],
    "strokes": 3,
    "jlpt": "N4"
  },
  {
    "char": "工",
    "meaning": "Craft / Construction / Katakana E Radical (no. 48)",
    "onyomi": [
      "こう",
      "く",
      "ぐ"
    ],
    "kunyomi": [],
    "strokes": 3,
    "jlpt": "N4"
  },
  {
    "char": "夕",
    "meaning": "Evening",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "ゆう"
    ],
    "strokes": 3,
    "jlpt": "N4"
  },
  {
    "char": "手",
    "meaning": "Hand",
    "onyomi": [
      "しゅ",
      "ず"
    ],
    "kunyomi": [
      "て",
      "て-",
      "-て",
      "た-"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "文",
    "meaning": "Sentence / Literature / Style",
    "onyomi": [
      "ぶん",
      "もん"
    ],
    "kunyomi": [
      "ふみ",
      "あや"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "犬",
    "meaning": "Dog",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "いぬ",
      "いぬ-"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "正",
    "meaning": "Correct / Justice / Righteous",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "ただ.しい",
      "ただ.す",
      "まさ",
      "まさ.に"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "田",
    "meaning": "Rice Field / Rice Paddy",
    "onyomi": [
      "でん"
    ],
    "kunyomi": [
      "た"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "目",
    "meaning": "Eye / Class / Look",
    "onyomi": [
      "もく",
      "ぼく"
    ],
    "kunyomi": [
      "め",
      "-め",
      "ま-"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "立",
    "meaning": "Stand Up / Rise / Set Up",
    "onyomi": [
      "りつ",
      "りゅう",
      "りっとる"
    ],
    "kunyomi": [
      "た.つ",
      "-た.つ",
      "た.ち-",
      "た.てる",
      "-た.てる",
      "た.て-",
      "たて-",
      "-た.て",
      "-だ.て",
      "-だ.てる"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "元",
    "meaning": "Beginning / Former Time / Origin",
    "onyomi": [
      "げん",
      "がん"
    ],
    "kunyomi": [
      "もと"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "公",
    "meaning": "Public / Prince / Official",
    "onyomi": [
      "こう",
      "く"
    ],
    "kunyomi": [
      "おおやけ"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "切",
    "meaning": "Cut / Cutoff / Be Sharp",
    "onyomi": [
      "せつ",
      "さい"
    ],
    "kunyomi": [
      "き.る",
      "-き.る",
      "き.り",
      "-き.り",
      "-ぎ.り",
      "き.れる",
      "-き.れる",
      "き.れ",
      "-き.れ",
      "-ぎ.れ"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "少",
    "meaning": "Few / Little",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "すく.ない",
      "すこ.し"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "心",
    "meaning": "Heart / Mind / Spirit",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "こころ",
      "-ごころ"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "方",
    "meaning": "Direction / Person / Alternative",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "かた",
      "-かた",
      "-がた"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "牛",
    "meaning": "Cow",
    "onyomi": [
      "ぎゅう"
    ],
    "kunyomi": [
      "うし"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "止",
    "meaning": "Stop / Halt",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "と.まる",
      "-ど.まり",
      "と.める",
      "-と.める",
      "-ど.め",
      "とど.める",
      "とど.め",
      "とど.まる",
      "や.める",
      "や.む",
      "-や.む",
      "よ.す",
      "-さ.す",
      "-さ.し"
    ],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "兄",
    "meaning": "Elder Brother / Big Brother",
    "onyomi": [
      "けい",
      "きょう"
    ],
    "kunyomi": [
      "あに"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "冬",
    "meaning": "Winter",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ふゆ"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "古",
    "meaning": "Old",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "ふる.い",
      "ふる-",
      "-ふる.す"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "台",
    "meaning": "Pedestal / A Stand / Counter For Machines And Vehicles",
    "onyomi": [
      "だい",
      "たい"
    ],
    "kunyomi": [
      "うてな",
      "われ",
      "つかさ"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "広",
    "meaning": "Wide / Broad / Spacious",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "ひろ.い",
      "ひろ.まる",
      "ひろ.める",
      "ひろ.がる",
      "ひろ.げる"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "用",
    "meaning": "Utilize / Business / Service",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "もち.いる"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "世",
    "meaning": "Generation / World / Society",
    "onyomi": [
      "せい",
      "せ",
      "そう"
    ],
    "kunyomi": [
      "よ"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "主",
    "meaning": "Lord / Chief / Master",
    "onyomi": [
      "しゅ",
      "す",
      "しゅう"
    ],
    "kunyomi": [
      "ぬし",
      "おも",
      "あるじ"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "代",
    "meaning": "Substitute / Change / Convert",
    "onyomi": [
      "だい",
      "たい"
    ],
    "kunyomi": [
      "か.わる",
      "かわ.る",
      "かわ.り",
      "か.わり",
      "-がわ.り",
      "-が.わり",
      "か.える",
      "よ",
      "しろ"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "写",
    "meaning": "Copy / Be Photographed / Describe",
    "onyomi": [
      "しゃ",
      "じゃ"
    ],
    "kunyomi": [
      "うつ.す",
      "うつ.る",
      "うつ-",
      "うつ.し"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "去",
    "meaning": "Gone / Past / Quit",
    "onyomi": [
      "きょ",
      "こ"
    ],
    "kunyomi": [
      "さ.る",
      "-さ.る"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "字",
    "meaning": "Character / Letter / Word",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "あざ",
      "あざな",
      "-な"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "早",
    "meaning": "Early / Fast",
    "onyomi": [
      "そう",
      "さっ"
    ],
    "kunyomi": [
      "はや.い",
      "はや",
      "はや-",
      "はや.まる",
      "はや.める",
      "さ-"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "町",
    "meaning": "Town / Village / Block",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "まち"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "花",
    "meaning": "Flower",
    "onyomi": [
      "か",
      "け"
    ],
    "kunyomi": [
      "はな"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "赤",
    "meaning": "Red",
    "onyomi": [
      "せき",
      "しゃく"
    ],
    "kunyomi": [
      "あか",
      "あか-",
      "あか.い",
      "あか.らむ",
      "あか.らめる"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "足",
    "meaning": "Leg / Foot / Be Sufficient",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "あし",
      "た.りる",
      "た.る",
      "た.す"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "不",
    "meaning": "Negative / Non- / Bad",
    "onyomi": [
      "ふ",
      "ぶ"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N4"
  },
  {
    "char": "仕",
    "meaning": "Attend / Doing / Official",
    "onyomi": [
      "し",
      "じ"
    ],
    "kunyomi": [
      "つか.える"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "会",
    "meaning": "Meeting / Meet / Party",
    "onyomi": [
      "かい",
      "え"
    ],
    "kunyomi": [
      "あ.う",
      "あ.わせる",
      "あつ.まる"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "同",
    "meaning": "Same / Agree / Equal",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "おな.じ"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "多",
    "meaning": "Many / Frequent / Much",
    "onyomi": [
      "た"
    ],
    "kunyomi": [
      "おお.い",
      "まさ.に",
      "まさ.る"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "考",
    "meaning": "Consider / Think Over",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "かんが.える",
      "かんが.え"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "肉",
    "meaning": "Meat",
    "onyomi": [
      "にく"
    ],
    "kunyomi": [
      "しし"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "自",
    "meaning": "Oneself",
    "onyomi": [
      "じ",
      "し"
    ],
    "kunyomi": [
      "みずか.ら",
      "おの.ずから",
      "おの.ずと"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "色",
    "meaning": "Color",
    "onyomi": [
      "しょく",
      "しき"
    ],
    "kunyomi": [
      "いろ"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "体",
    "meaning": "Body / Substance / Object",
    "onyomi": [
      "たい",
      "てい"
    ],
    "kunyomi": [
      "からだ",
      "かたち"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "作",
    "meaning": "Make / Production / Prepare",
    "onyomi": [
      "さく",
      "さ"
    ],
    "kunyomi": [
      "つく.る",
      "つく.り",
      "-づく.り"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "図",
    "meaning": "Map / Drawing / Plan",
    "onyomi": [
      "ず",
      "と"
    ],
    "kunyomi": [
      "え",
      "はか.る"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "売",
    "meaning": "Sell",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "う.る",
      "う.れる"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "弟",
    "meaning": "Younger Brother / Faithful Service To Elders",
    "onyomi": [
      "てい",
      "だい",
      "で"
    ],
    "kunyomi": [
      "おとうと"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "社",
    "meaning": "Company / Firm / Office",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "やしろ"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "言",
    "meaning": "Say / Word",
    "onyomi": [
      "げん",
      "ごん"
    ],
    "kunyomi": [
      "い.う",
      "こと"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "走",
    "meaning": "Run",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "はし.る"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "近",
    "meaning": "Near / Early / Akin",
    "onyomi": [
      "きん",
      "こん"
    ],
    "kunyomi": [
      "ちか.い"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "空",
    "meaning": "Empty / Sky / Void",
    "onyomi": [
      "くう"
    ],
    "kunyomi": [
      "そら",
      "あ.く",
      "あ.き",
      "あ.ける",
      "から",
      "す.く",
      "す.かす",
      "むな.しい"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "青",
    "meaning": "Blue / Green",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "あお",
      "あお-",
      "あお.い"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "音",
    "meaning": "Sound / Noise",
    "onyomi": [
      "おん",
      "いん",
      "-のん"
    ],
    "kunyomi": [
      "おと",
      "ね"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "地",
    "meaning": "Ground / Earth",
    "onyomi": [
      "ち",
      "じ"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "安",
    "meaning": "Relax / Cheap / Low",
    "onyomi": [
      "あん"
    ],
    "kunyomi": [
      "やす.い",
      "やす.まる",
      "やす",
      "やす.らか"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "有",
    "meaning": "Possess / Have / Exist",
    "onyomi": [
      "ゆう",
      "う"
    ],
    "kunyomi": [
      "あ.る"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "死",
    "meaning": "Death / Die",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "し.ぬ",
      "し.に-"
    ],
    "strokes": 6,
    "jlpt": "N4"
  },
  {
    "char": "京",
    "meaning": "Capital / 10**16",
    "onyomi": [
      "きょう",
      "けい",
      "きん"
    ],
    "kunyomi": [
      "みやこ"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "夜",
    "meaning": "Night / Evening",
    "onyomi": [
      "や"
    ],
    "kunyomi": [
      "よ",
      "よる"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "妹",
    "meaning": "Younger Sister",
    "onyomi": [
      "まい"
    ],
    "kunyomi": [
      "いもうと"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "姉",
    "meaning": "Elder Sister",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "あね",
      "はは"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "店",
    "meaning": "Store / Shop",
    "onyomi": [
      "てん"
    ],
    "kunyomi": [
      "みせ",
      "たな"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "明",
    "meaning": "Bright / Light",
    "onyomi": [
      "めい",
      "みょう",
      "みん"
    ],
    "kunyomi": [
      "あ.かり",
      "あか.るい",
      "あか.るむ",
      "あか.らむ",
      "あき.らか",
      "あ.ける",
      "-あ.け",
      "あ.く",
      "あ.くる",
      "あ.かす"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "歩",
    "meaning": "Walk / Counter For Steps",
    "onyomi": [
      "ほ",
      "ぶ",
      "ふ"
    ],
    "kunyomi": [
      "ある.く",
      "あゆ.む"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "画",
    "meaning": "Brush-stroke / Picture",
    "onyomi": [
      "が",
      "かく",
      "え",
      "かい"
    ],
    "kunyomi": [
      "えが.く",
      "かく.する",
      "かぎ.る",
      "はかりごと",
      "はか.る"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "知",
    "meaning": "Know / Wisdom",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "し.る",
      "し.らせる"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "室",
    "meaning": "Room / Apartment / Chamber",
    "onyomi": [
      "しつ"
    ],
    "kunyomi": [
      "むろ"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "思",
    "meaning": "Think",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "おも.う",
      "おもえら.く",
      "おぼ.す"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "海",
    "meaning": "Sea / Ocean",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "うみ"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "茶",
    "meaning": "Tea",
    "onyomi": [
      "ちゃ",
      "さ"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "以",
    "meaning": "By Means Of / Because / In View Of",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "もっ.て"
    ],
    "strokes": 5,
    "jlpt": "N4"
  },
  {
    "char": "夏",
    "meaning": "Summer",
    "onyomi": [
      "か",
      "が",
      "げ"
    ],
    "kunyomi": [
      "なつ"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "家",
    "meaning": "House / Home / Family",
    "onyomi": [
      "か",
      "け"
    ],
    "kunyomi": [
      "いえ",
      "や",
      "うち"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "紙",
    "meaning": "Paper",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "かみ"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "通",
    "meaning": "Traffic / Pass Through / Avenue",
    "onyomi": [
      "つう",
      "つ"
    ],
    "kunyomi": [
      "とお.る",
      "とお.り",
      "-とお.り",
      "-どお.り",
      "とお.す",
      "とお.し",
      "-どお.し",
      "かよ.う"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "強",
    "meaning": "Strong",
    "onyomi": [
      "きょう",
      "ごう"
    ],
    "kunyomi": [
      "つよ.い",
      "つよ.まる",
      "つよ.める",
      "し.いる",
      "こわ.い"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "教",
    "meaning": "Teach / Faith / Doctrine",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "おし.える",
      "おそ.わる"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "理",
    "meaning": "Logic / Arrangement / Reason",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "ことわり"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "週",
    "meaning": "Week",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "魚",
    "meaning": "Fish",
    "onyomi": [
      "ぎょ"
    ],
    "kunyomi": [
      "うお",
      "さかな",
      "-ざかな"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "鳥",
    "meaning": "Bird / Chicken",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "とり"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "黒",
    "meaning": "Black",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "くろ",
      "くろ.ずむ",
      "くろ.い"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "住",
    "meaning": "Dwell / Reside / Live",
    "onyomi": [
      "じゅう",
      "ぢゅう",
      "ちゅう"
    ],
    "kunyomi": [
      "す.む",
      "す.まう",
      "-ず.まい"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "医",
    "meaning": "Doctor / Medicine",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "い.やす",
      "い.する",
      "くすし"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "究",
    "meaning": "Research / Study",
    "onyomi": [
      "きゅう",
      "く"
    ],
    "kunyomi": [
      "きわ.める"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "者",
    "meaning": "Someone / Person",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "もの"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "研",
    "meaning": "Polish / Study Of / Sharpen",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "と.ぐ"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "場",
    "meaning": "Location / Place",
    "onyomi": [
      "じょう",
      "ちょう"
    ],
    "kunyomi": [
      "ば"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "朝",
    "meaning": "Morning / Dynasty / Regime",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "あさ"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "答",
    "meaning": "Solution / Answer",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "こた.える",
      "こた.え"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "買",
    "meaning": "Buy",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "か.う"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "道",
    "meaning": "Road-way / Street / District",
    "onyomi": [
      "どう",
      "とう"
    ],
    "kunyomi": [
      "みち",
      "いう"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "楽",
    "meaning": "Music / Comfort / Ease",
    "onyomi": [
      "がく",
      "らく",
      "ごう"
    ],
    "kunyomi": [
      "たの.しい",
      "たの.しむ",
      "この.む"
    ],
    "strokes": 13,
    "jlpt": "N4"
  },
  {
    "char": "事",
    "meaning": "Matter / Thing / Fact",
    "onyomi": [
      "じ",
      "ず"
    ],
    "kunyomi": [
      "こと",
      "つか.う",
      "つか.える"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "使",
    "meaning": "Use / Send On A Mission / Order",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "つか.う",
      "つか.い",
      "-つか.い",
      "-づか.い"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "始",
    "meaning": "Commence / Begin",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "はじ.める",
      "-はじ.める",
      "はじ.まる"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "服",
    "meaning": "Clothing / Admit / Obey",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "物",
    "meaning": "Thing / Object / Matter",
    "onyomi": [
      "ぶつ",
      "もつ"
    ],
    "kunyomi": [
      "もの",
      "もの-"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "屋",
    "meaning": "Roof / House / Shop",
    "onyomi": [
      "おく"
    ],
    "kunyomi": [
      "や"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "度",
    "meaning": "Degrees / Occurrence / Time",
    "onyomi": [
      "ど",
      "と",
      "たく"
    ],
    "kunyomi": [
      "たび",
      "-た.い"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "待",
    "meaning": "Wait / Depend On",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "ま.つ",
      "-ま.ち"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "持",
    "meaning": "Hold / Have",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "も.つ",
      "-も.ち",
      "も.てる"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "界",
    "meaning": "World / Boundary",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "発",
    "meaning": "Departure / Discharge / Publish",
    "onyomi": [
      "はつ",
      "ほつ"
    ],
    "kunyomi": [
      "た.つ",
      "あば.く",
      "おこ.る",
      "つか.わす",
      "はな.つ"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "送",
    "meaning": "Escort / Send",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "おく.る"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "重",
    "meaning": "Heavy / Important / Esteem",
    "onyomi": [
      "じゅう",
      "ちょう"
    ],
    "kunyomi": [
      "え",
      "おも.い",
      "おも.り",
      "おも.なう",
      "かさ.ねる",
      "かさ.なる",
      "おも"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "起",
    "meaning": "Rouse / Wake Up / Get Up",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "お.きる",
      "お.こる",
      "お.こす",
      "おこ.す",
      "た.つ"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "院",
    "meaning": "Inst. / Institution / Temple",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "終",
    "meaning": "End / Finish",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "お.わる",
      "-お.わる",
      "おわ.る",
      "お.える",
      "つい",
      "つい.に"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "習",
    "meaning": "Learn",
    "onyomi": [
      "しゅう",
      "じゅ"
    ],
    "kunyomi": [
      "なら.う",
      "なら.い"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "転",
    "meaning": "Revolve / Turn Around / Change",
    "onyomi": [
      "てん"
    ],
    "kunyomi": [
      "ころ.がる",
      "ころ.げる",
      "ころ.がす",
      "ころ.ぶ",
      "まろ.ぶ",
      "うたた",
      "うつ.る",
      "くる.めく"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "運",
    "meaning": "Carry / Luck / Destiny",
    "onyomi": [
      "うん"
    ],
    "kunyomi": [
      "はこ.ぶ"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "開",
    "meaning": "Open / Unfold / Unseal",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "ひら.く",
      "ひら.き",
      "-びら.き",
      "ひら.ける",
      "あ.く",
      "あ.ける"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "集",
    "meaning": "Gather / Meet / Congregate",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "あつ.まる",
      "あつ.める",
      "つど.う"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "飲",
    "meaning": "Drink / Smoke / Take",
    "onyomi": [
      "いん",
      "おん"
    ],
    "kunyomi": [
      "の.む",
      "-の.み"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "業",
    "meaning": "Business / Vocation / Arts",
    "onyomi": [
      "ぎょう",
      "ごう"
    ],
    "kunyomi": [
      "わざ"
    ],
    "strokes": 13,
    "jlpt": "N4"
  },
  {
    "char": "漢",
    "meaning": "Sino- / China",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N4"
  },
  {
    "char": "歌",
    "meaning": "Song / Sing",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "うた",
      "うた.う"
    ],
    "strokes": 14,
    "jlpt": "N4"
  },
  {
    "char": "親",
    "meaning": "Parent / Intimacy / Relative",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "おや",
      "おや-",
      "した.しい",
      "した.しむ"
    ],
    "strokes": 16,
    "jlpt": "N4"
  },
  {
    "char": "病",
    "meaning": "Ill / Sick",
    "onyomi": [
      "びょう",
      "へい"
    ],
    "kunyomi": [
      "や.む",
      "-や.み",
      "やまい"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "別",
    "meaning": "Separate / Branch Off / Diverge",
    "onyomi": [
      "べつ"
    ],
    "kunyomi": [
      "わか.れる",
      "わ.ける"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "注",
    "meaning": "Pour / Irrigate / Shed (tears)",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "そそ.ぐ",
      "さ.す",
      "つ.ぐ"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "洋",
    "meaning": "Ocean / Sea / Foreign",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "特",
    "meaning": "Special",
    "onyomi": [
      "とく"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "意",
    "meaning": "Idea / Mind / Heart",
    "onyomi": [
      "い"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N4"
  },
  {
    "char": "味",
    "meaning": "Flavor / Taste",
    "onyomi": [
      "み"
    ],
    "kunyomi": [
      "あじ",
      "あじ.わう"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "勉",
    "meaning": "Exertion / Endeavour / Encourage",
    "onyomi": [
      "べん"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "旅",
    "meaning": "Trip / Travel",
    "onyomi": [
      "りょ"
    ],
    "kunyomi": [
      "たび"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "員",
    "meaning": "Employee / Member / Number",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "動",
    "meaning": "Move / Motion / Change",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "うご.く",
      "うご.かす"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "悪",
    "meaning": "Bad / Vice / Rascal",
    "onyomi": [
      "あく",
      "お"
    ],
    "kunyomi": [
      "わる.い",
      "わる-",
      "あ.し",
      "にく.い",
      "-にく.い",
      "ああ",
      "いずくに",
      "いずくんぞ",
      "にく.む"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "族",
    "meaning": "Tribe / Family",
    "onyomi": [
      "ぞく"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "着",
    "meaning": "Don / Arrive / Wear",
    "onyomi": [
      "ちゃく",
      "じゃく"
    ],
    "kunyomi": [
      "き.る",
      "-ぎ",
      "き.せる",
      "-き.せ",
      "つ.く",
      "つ.ける"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "野",
    "meaning": "Plains / Field / Rustic",
    "onyomi": [
      "や",
      "しょ"
    ],
    "kunyomi": [
      "の",
      "の-"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "風",
    "meaning": "Wind / Air / Style",
    "onyomi": [
      "ふう",
      "ふ"
    ],
    "kunyomi": [
      "かぜ",
      "かざ-",
      "-かぜ"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "新",
    "meaning": "New",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "あたら.しい",
      "あら.た",
      "あら-",
      "にい-"
    ],
    "strokes": 13,
    "jlpt": "N4"
  },
  {
    "char": "問",
    "meaning": "Question / Ask / Problem",
    "onyomi": [
      "もん"
    ],
    "kunyomi": [
      "と.う",
      "と.い",
      "とん"
    ],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "銀",
    "meaning": "Silver",
    "onyomi": [
      "ぎん"
    ],
    "kunyomi": [
      "しろがね"
    ],
    "strokes": 14,
    "jlpt": "N4"
  },
  {
    "char": "題",
    "meaning": "Topic / Subject",
    "onyomi": [
      "だい"
    ],
    "kunyomi": [],
    "strokes": 18,
    "jlpt": "N4"
  },
  {
    "char": "館",
    "meaning": "Building / Mansion / Large Building",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "やかた",
      "たて"
    ],
    "strokes": 16,
    "jlpt": "N4"
  },
  {
    "char": "駅",
    "meaning": "Station",
    "onyomi": [
      "えき"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N4"
  },
  {
    "char": "料",
    "meaning": "Fee / Materials",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "映",
    "meaning": "Reflect / Reflection / Projection",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "うつ.る",
      "うつ.す",
      "は.える",
      "-ば.え"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "私",
    "meaning": "Private / I / Me",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "わたくし",
      "わたし"
    ],
    "strokes": 7,
    "jlpt": "N4"
  },
  {
    "char": "帰",
    "meaning": "Homecoming / Arrive At / Lead To",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "かえ.る",
      "かえ.す",
      "おく.る",
      "とつ.ぐ"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "春",
    "meaning": "Springtime / Spring (season)",
    "onyomi": [
      "しゅん"
    ],
    "kunyomi": [
      "はる"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "昼",
    "meaning": "Daytime / Noon",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "ひる"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "秋",
    "meaning": "Autumn",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "あき",
      "とき"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "計",
    "meaning": "Plot / Plan / Scheme",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "はか.る",
      "はか.らう"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "建",
    "meaning": "Build",
    "onyomi": [
      "けん",
      "こん"
    ],
    "kunyomi": [
      "た.てる",
      "た.て",
      "-だ.て",
      "た.つ"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "英",
    "meaning": "England / English / Hero",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "はなぶさ"
    ],
    "strokes": 8,
    "jlpt": "N4"
  },
  {
    "char": "飯",
    "meaning": "Meal / Boiled Rice",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "めし"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "曜",
    "meaning": "Weekday",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [],
    "strokes": 18,
    "jlpt": "N4"
  },
  {
    "char": "品",
    "meaning": "Goods / Refinement / Dignity",
    "onyomi": [
      "ひん",
      "ほん"
    ],
    "kunyomi": [
      "しな"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "急",
    "meaning": "Hurry / Emergency / Sudden",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "いそ.ぐ",
      "いそ.ぎ",
      "せ.く"
    ],
    "strokes": 9,
    "jlpt": "N4"
  },
  {
    "char": "真",
    "meaning": "True / Reality / Buddhist Sect",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "ま",
      "ま-",
      "まこと"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "堂",
    "meaning": "Public Chamber / Hall",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N4"
  },
  {
    "char": "試",
    "meaning": "Test / Try / Attempt",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "こころ.みる",
      "ため.す"
    ],
    "strokes": 13,
    "jlpt": "N4"
  },
  {
    "char": "借",
    "meaning": "Borrow / Rent",
    "onyomi": [
      "しゃく"
    ],
    "kunyomi": [
      "か.りる"
    ],
    "strokes": 10,
    "jlpt": "N4"
  },
  {
    "char": "験",
    "meaning": "Verification / Effect / Testing",
    "onyomi": [
      "けん",
      "げん"
    ],
    "kunyomi": [
      "あかし",
      "しるし",
      "ため.す",
      "ためし"
    ],
    "strokes": 18,
    "jlpt": "N4"
  },
  {
    "char": "質",
    "meaning": "Substance / Quality / Matter",
    "onyomi": [
      "しつ",
      "しち",
      "ち"
    ],
    "kunyomi": [
      "たち",
      "ただ.す",
      "もと",
      "わりふ"
    ],
    "strokes": 15,
    "jlpt": "N4"
  },
  {
    "char": "貸",
    "meaning": "Lend",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "か.す",
      "か.し-",
      "かし-"
    ],
    "strokes": 12,
    "jlpt": "N4"
  },
  {
    "char": "才",
    "meaning": "Genius / Years Old / Cubic Shaku",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [],
    "strokes": 3,
    "jlpt": "N3"
  },
  {
    "char": "王",
    "meaning": "King / Rule / Magnate",
    "onyomi": [
      "おう",
      "-のう"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "石",
    "meaning": "Stone",
    "onyomi": [
      "せき",
      "しゃく",
      "こく"
    ],
    "kunyomi": [
      "いし"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "内",
    "meaning": "Inside / Within / Between",
    "onyomi": [
      "ない",
      "だい"
    ],
    "kunyomi": [
      "うち"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "太",
    "meaning": "Plump / Thick / Big Around",
    "onyomi": [
      "たい",
      "た"
    ],
    "kunyomi": [
      "ふと.い",
      "ふと.る"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "引",
    "meaning": "Pull / Tug / Jerk",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "ひ.く",
      "ひ.き",
      "ひ.き-",
      "-び.き",
      "ひ.ける"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "市",
    "meaning": "Market / City / Town",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "いち"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "他",
    "meaning": "Other / Another / The Others",
    "onyomi": [
      "た"
    ],
    "kunyomi": [
      "ほか"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "号",
    "meaning": "Nickname / Number / Item",
    "onyomi": [
      "ごう"
    ],
    "kunyomi": [
      "さけ.ぶ",
      "よびな"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "平",
    "meaning": "Even / Flat / Peace",
    "onyomi": [
      "へい",
      "びょう",
      "ひょう"
    ],
    "kunyomi": [
      "たい.ら",
      "-だいら",
      "ひら",
      "ひら-"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "打",
    "meaning": "Strike / Hit / Knock",
    "onyomi": [
      "だ",
      "だあす"
    ],
    "kunyomi": [
      "う.つ",
      "う.ち-",
      "ぶ.つ"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "申",
    "meaning": "Have The Honor To / Sign Of The Monkey / 3-5pm",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "もう.す",
      "もう.し-",
      "さる"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "礼",
    "meaning": "Salute / Bow / Ceremony",
    "onyomi": [
      "れい",
      "らい"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "耳",
    "meaning": "Ear",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "みみ"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "交",
    "meaning": "Mingle / Mixing / Association",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "まじ.わる",
      "まじ.える",
      "ま.じる",
      "まじ.る",
      "ま.ざる",
      "ま.ぜる",
      "-か.う",
      "か.わす",
      "かわ.す",
      "こもごも"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "光",
    "meaning": "Ray / Light",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "ひか.る",
      "ひかり"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "回",
    "meaning": "-times / Round / Game",
    "onyomi": [
      "かい",
      "え"
    ],
    "kunyomi": [
      "まわ.る",
      "-まわ.る",
      "-まわ.り",
      "まわ.す",
      "-まわ.す",
      "まわ.し-",
      "-まわ.し",
      "もとお.る",
      "か.える"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "当",
    "meaning": "Hit / Right / Appropriate",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "あ.たる",
      "あ.たり",
      "あ.てる",
      "あ.て",
      "まさ.に",
      "まさ.にべし"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "米",
    "meaning": "Rice / Usa / Metre",
    "onyomi": [
      "べい",
      "まい",
      "めえとる"
    ],
    "kunyomi": [
      "こめ",
      "よね"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "声",
    "meaning": "Voice",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "こえ",
      "こわ-"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "形",
    "meaning": "Shape / Form / Style",
    "onyomi": [
      "けい",
      "ぎょう"
    ],
    "kunyomi": [
      "かた",
      "-がた",
      "かたち",
      "なり"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "草",
    "meaning": "Grass / Weeds / Herbs",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "くさ",
      "くさ-",
      "-ぐさ"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "化",
    "meaning": "Change / Take The Form Of / Influence",
    "onyomi": [
      "か",
      "け"
    ],
    "kunyomi": [
      "ば.ける",
      "ば.かす",
      "ふ.ける",
      "け.する"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "両",
    "meaning": "Both / Old Japanese Coin / Counter For Carriages (e.g., In A Train)",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "てる",
      "ふたつ"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "全",
    "meaning": "Whole / Entire / All",
    "onyomi": [
      "ぜん"
    ],
    "kunyomi": [
      "まった.く",
      "すべ.て"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "向",
    "meaning": "Yonder / Facing / Beyond",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "む.く",
      "む.い",
      "-む.き",
      "む.ける",
      "-む.け",
      "む.かう",
      "む.かい",
      "む.こう",
      "む.こう-",
      "むこ",
      "むか.い"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "曲",
    "meaning": "Bend / Music / Melody",
    "onyomi": [
      "きょく"
    ],
    "kunyomi": [
      "ま.がる",
      "ま.げる",
      "くま"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "次",
    "meaning": "Next / Order / Sequence",
    "onyomi": [
      "じ",
      "し"
    ],
    "kunyomi": [
      "つ.ぐ",
      "つぎ"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "直",
    "meaning": "Straightaway / Honesty / Frankness",
    "onyomi": [
      "ちょく",
      "じき",
      "じか"
    ],
    "kunyomi": [
      "ただ.ちに",
      "なお.す",
      "-なお.す",
      "なお.る",
      "なお.き",
      "す.ぐ"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "活",
    "meaning": "Lively / Resuscitation / Being Helped",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [
      "い.きる",
      "い.かす",
      "い.ける"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "点",
    "meaning": "Spot / Point / Mark",
    "onyomi": [
      "てん"
    ],
    "kunyomi": [
      "つ.ける",
      "つ.く",
      "た.てる",
      "さ.す",
      "とぼ.す",
      "とも.す",
      "ぼち"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "科",
    "meaning": "Department / Course / Section",
    "onyomi": [
      "か"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "首",
    "meaning": "Neck / Counter For Songs And Poems",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "くび"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "欠",
    "meaning": "Lack / Gap / Fail",
    "onyomi": [
      "けつ",
      "けん"
    ],
    "kunyomi": [
      "か.ける",
      "か.く"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "由",
    "meaning": "Wherefore / A Reason",
    "onyomi": [
      "ゆ",
      "ゆう",
      "ゆい"
    ],
    "kunyomi": [
      "よし",
      "よ.る"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "民",
    "meaning": "People / Nation / Subjects",
    "onyomi": [
      "みん"
    ],
    "kunyomi": [
      "たみ"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "付",
    "meaning": "Adhere / Attach / Refer To",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "つ.ける",
      "-つ.ける",
      "-づ.ける",
      "つ.け",
      "つ.け-",
      "-つ.け",
      "-づ.け",
      "-づけ",
      "つ.く",
      "-づ.く",
      "つ.き",
      "-つ.き",
      "-つき",
      "-づ.き",
      "-づき"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "失",
    "meaning": "Lose / Error / Fault",
    "onyomi": [
      "しつ"
    ],
    "kunyomi": [
      "うしな.う",
      "う.せる"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "必",
    "meaning": "Invariably / Certain / Inevitable",
    "onyomi": [
      "ひつ"
    ],
    "kunyomi": [
      "かなら.ず"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "未",
    "meaning": "Un- / Not Yet / Hitherto",
    "onyomi": [
      "み",
      "び"
    ],
    "kunyomi": [
      "いま.だ",
      "ま.だ",
      "ひつじ"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "末",
    "meaning": "End / Close / Tip",
    "onyomi": [
      "まつ",
      "ばつ"
    ],
    "kunyomi": [
      "すえ"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "記",
    "meaning": "Scribe / Account / Narrative",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "しる.す"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "組",
    "meaning": "Association / Braid / Plait",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "く.む",
      "くみ",
      "-ぐみ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "船",
    "meaning": "Ship / Boat",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "ふね",
      "ふな-"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "雪",
    "meaning": "Snow",
    "onyomi": [
      "せつ"
    ],
    "kunyomi": [
      "ゆき"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "支",
    "meaning": "Branch / Support / Sustain",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "ささ.える",
      "つか.える",
      "か.う"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "助",
    "meaning": "Help / Rescue / Assist",
    "onyomi": [
      "じょ"
    ],
    "kunyomi": [
      "たす.ける",
      "たす.かる",
      "す.ける",
      "すけ"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "君",
    "meaning": "Mister / You / Ruler",
    "onyomi": [
      "くん"
    ],
    "kunyomi": [
      "きみ",
      "-ぎみ"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "対",
    "meaning": "Vis-a-vis / Opposite / Even",
    "onyomi": [
      "たい",
      "つい"
    ],
    "kunyomi": [
      "あいて",
      "こた.える",
      "そろ.い",
      "つれあ.い",
      "なら.ぶ",
      "むか.う"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "局",
    "meaning": "Bureau / Board / Office",
    "onyomi": [
      "きょく"
    ],
    "kunyomi": [
      "つぼね"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "役",
    "meaning": "Duty / War / Campaign",
    "onyomi": [
      "やく",
      "えき"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "投",
    "meaning": "Throw / Discard / Abandon",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "な.げる",
      "-な.げ"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "決",
    "meaning": "Decide / Fix / Agree Upon",
    "onyomi": [
      "けつ"
    ],
    "kunyomi": [
      "き.める",
      "-ぎ.め",
      "き.まる",
      "さ.く"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "馬",
    "meaning": "Horse",
    "onyomi": [
      "ば"
    ],
    "kunyomi": [
      "うま",
      "うま-",
      "ま"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "番",
    "meaning": "Turn / Number In A Series",
    "onyomi": [
      "ばん"
    ],
    "kunyomi": [
      "つが.い"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "絵",
    "meaning": "Picture / Drawing / Painting",
    "onyomi": [
      "かい",
      "え"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "数",
    "meaning": "Number / Strength / Fate",
    "onyomi": [
      "すう",
      "す",
      "さく",
      "そく",
      "しゅ"
    ],
    "kunyomi": [
      "かず",
      "かぞ.える",
      "しばしば",
      "せ.める",
      "わずらわ.しい"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "所",
    "meaning": "Place / Extent",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "ところ",
      "-ところ",
      "どころ",
      "とこ"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "具",
    "meaning": "Tool / Utensil / Means",
    "onyomi": [
      "ぐ"
    ],
    "kunyomi": [
      "そな.える",
      "つぶさ.に"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "受",
    "meaning": "Accept / Undergo / Answer (phone)",
    "onyomi": [
      "じゅ"
    ],
    "kunyomi": [
      "う.ける",
      "-う.け",
      "う.かる"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "和",
    "meaning": "Harmony / Japanese Style / Peace",
    "onyomi": [
      "わ",
      "お",
      "か"
    ],
    "kunyomi": [
      "やわ.らぐ",
      "やわ.らげる",
      "なご.む",
      "なご.やか",
      "あ.える"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "定",
    "meaning": "Determine / Fix / Establish",
    "onyomi": [
      "てい",
      "じょう"
    ],
    "kunyomi": [
      "さだ.める",
      "さだ.まる",
      "さだ.か"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "実",
    "meaning": "Reality / Truth",
    "onyomi": [
      "じつ",
      "しつ"
    ],
    "kunyomi": [
      "み",
      "みの.る",
      "まこと",
      "みの",
      "みち.る"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "泳",
    "meaning": "Swim",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "およ.ぐ"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "苦",
    "meaning": "Suffering / Trial / Worry",
    "onyomi": [
      "く"
    ],
    "kunyomi": [
      "くる.しい",
      "-ぐる.しい",
      "くる.しむ",
      "くる.しめる",
      "にが.い",
      "にが.る"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "表",
    "meaning": "Surface / Table / Chart",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [
      "おもて",
      "-おもて",
      "あらわ.す",
      "あらわ.れる",
      "あら.わす"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "部",
    "meaning": "Section / Bureau / Dept",
    "onyomi": [
      "ぶ"
    ],
    "kunyomi": [
      "-べ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "乗",
    "meaning": "Ride / Power / Multiplication",
    "onyomi": [
      "じょう",
      "しょう"
    ],
    "kunyomi": [
      "の.る",
      "-の.り",
      "の.せる"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "客",
    "meaning": "Guest / Visitor / Customer",
    "onyomi": [
      "きゃく",
      "かく"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "相",
    "meaning": "Inter- / Mutual / Together",
    "onyomi": [
      "そう",
      "しょう"
    ],
    "kunyomi": [
      "あい-"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "美",
    "meaning": "Beauty / Beautiful",
    "onyomi": [
      "び",
      "み"
    ],
    "kunyomi": [
      "うつく.しい"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "負",
    "meaning": "Defeat / Negative / -",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "ま.ける",
      "ま.かす",
      "お.う"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "談",
    "meaning": "Discuss / Talk",
    "onyomi": [
      "だん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "要",
    "meaning": "Need / Main Point / Essence",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "い.る",
      "かなめ"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "勝",
    "meaning": "Victory / Win / Prevail",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "か.つ",
      "-が.ち",
      "まさ.る",
      "すぐ.れる",
      "かつ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "速",
    "meaning": "Quick / Fast",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "はや.い",
      "はや-",
      "はや.める",
      "すみ.やか"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "配",
    "meaning": "Distribute / Spouse / Exile",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "くば.る"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "酒",
    "meaning": "Sake / Alcohol",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "さけ",
      "さか-"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "進",
    "meaning": "Advance / Proceed / Progress",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "すす.む",
      "すす.める"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "落",
    "meaning": "Fall / Drop / Come Down",
    "onyomi": [
      "らく"
    ],
    "kunyomi": [
      "お.ちる",
      "お.ち",
      "お.とす"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "葉",
    "meaning": "Leaf / Plane / Lobe",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "は"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "路",
    "meaning": "Path / Route / Road",
    "onyomi": [
      "ろ",
      "る"
    ],
    "kunyomi": [
      "-じ",
      "みち"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "鳴",
    "meaning": "Chirp / Cry / Bark",
    "onyomi": [
      "めい"
    ],
    "kunyomi": [
      "な.く",
      "な.る",
      "な.らす"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "横",
    "meaning": "Sideways / Side / Horizontal",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "よこ"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "調",
    "meaning": "Tune / Tone / Meter",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "しら.べる",
      "しら.べ",
      "ととの.う",
      "ととの.える"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "頭",
    "meaning": "Head / Counter For Large Animals",
    "onyomi": [
      "とう",
      "ず",
      "と"
    ],
    "kunyomi": [
      "あたま",
      "かしら",
      "-がしら",
      "かぶり"
    ],
    "strokes": 16,
    "jlpt": "N3"
  },
  {
    "char": "顔",
    "meaning": "Face / Expression",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "かお"
    ],
    "strokes": 18,
    "jlpt": "N3"
  },
  {
    "char": "最",
    "meaning": "Utmost / Most / Extreme",
    "onyomi": [
      "さい",
      "しゅ"
    ],
    "kunyomi": [
      "もっと.も",
      "つま"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "争",
    "meaning": "Contend / Dispute / Argue",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "あらそ.う",
      "いか.でか"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "伝",
    "meaning": "Transmit / Go Along / Walk Along",
    "onyomi": [
      "でん",
      "てん"
    ],
    "kunyomi": [
      "つた.わる",
      "つた.える",
      "つた.う",
      "つだ.う",
      "-づた.い",
      "つて"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "共",
    "meaning": "Together / Both / Neither",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "とも",
      "とも.に",
      "-ども"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "好",
    "meaning": "Fond / Pleasing / Like Something",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "この.む",
      "す.く",
      "よ.い",
      "い.い"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "成",
    "meaning": "Turn Into / Become / Get",
    "onyomi": [
      "せい",
      "じょう"
    ],
    "kunyomi": [
      "な.る",
      "な.す",
      "-な.す"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "老",
    "meaning": "Old Man / Old Age / Grow Old",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [
      "お.いる",
      "ふ.ける"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "位",
    "meaning": "Rank / Grade / Throne",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "くらい",
      "ぐらい"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "初",
    "meaning": "First Time / Beginning",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "はじ.め",
      "はじ.めて",
      "はつ",
      "はつ-",
      "うい-",
      "-そ.める",
      "-ぞ.め"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "利",
    "meaning": "Profit / Advantage / Benefit",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "き.く"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "努",
    "meaning": "Toil / Diligent / As Much As Possible",
    "onyomi": [
      "ど"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "労",
    "meaning": "Labor / Thank For / Reward For",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [
      "ろう.する",
      "いたわ.る",
      "いた.ずき",
      "ねぎら",
      "つか.れる",
      "ねぎら.う"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "命",
    "meaning": "Fate / Command / Decree",
    "onyomi": [
      "めい",
      "みょう"
    ],
    "kunyomi": [
      "いのち"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "放",
    "meaning": "Set Free / Release / Fire",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "はな.す",
      "-っぱな.し",
      "はな.つ",
      "はな.れる",
      "こ.く",
      "ほう.る"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "昔",
    "meaning": "Once Upon A Time / Antiquity / Old Times",
    "onyomi": [
      "せき",
      "しゃく"
    ],
    "kunyomi": [
      "むかし"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "育",
    "meaning": "Bring Up / Grow Up / Raise",
    "onyomi": [
      "いく"
    ],
    "kunyomi": [
      "そだ.つ",
      "そだ.ち",
      "そだ.てる",
      "はぐく.む"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "指",
    "meaning": "Finger / Point To / Indicate",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "ゆび",
      "さ.す",
      "-さ.し"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "神",
    "meaning": "Gods / Mind / Soul",
    "onyomi": [
      "しん",
      "じん"
    ],
    "kunyomi": [
      "かみ",
      "かん-",
      "こう-"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "追",
    "meaning": "Chase / Drive Away / Follow",
    "onyomi": [
      "つい"
    ],
    "kunyomi": [
      "お.う"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "戦",
    "meaning": "War / Battle / Match",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "いくさ",
      "たたか.う",
      "おのの.く",
      "そよ.ぐ",
      "わなな.く"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "良",
    "meaning": "Good / Pleasing / Skilled",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "よ.い",
      "-よ.い",
      "い.い",
      "-い.い"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "便",
    "meaning": "Convenience / Facility / Excrement",
    "onyomi": [
      "べん",
      "びん"
    ],
    "kunyomi": [
      "たよ.り"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "働",
    "meaning": "Work / (kokuji)",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "はたら.く"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "庭",
    "meaning": "Courtyard / Garden / Yard",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "にわ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "息",
    "meaning": "Breath / Respiration / Son",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "いき"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "流",
    "meaning": "Current / A Sink / Flow",
    "onyomi": [
      "りゅう",
      "る"
    ],
    "kunyomi": [
      "なが.れる",
      "なが.れ",
      "なが.す",
      "-なが.す"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "消",
    "meaning": "Extinguish / Blow Out / Turn Off",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "き.える",
      "け.す"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "都",
    "meaning": "Metropolis / Capital / All",
    "onyomi": [
      "と",
      "つ"
    ],
    "kunyomi": [
      "みやこ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "商",
    "meaning": "Make A Deal / Selling / Dealing In",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "あきな.う"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "深",
    "meaning": "Deep / Heighten / Intensify",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "ふか.い",
      "-ぶか.い",
      "ふか.まる",
      "ふか.める",
      "み-"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "球",
    "meaning": "Ball / Sphere",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "たま"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "陽",
    "meaning": "Sunshine / Yang Principle / Positive",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "ひ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "寒",
    "meaning": "Cold",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "さむ.い"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "悲",
    "meaning": "Grieve / Sad / Deplore",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "かな.しい",
      "かな.しむ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "期",
    "meaning": "Period / Time / Date",
    "onyomi": [
      "き",
      "ご"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "歯",
    "meaning": "Tooth / Cog",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "よわい",
      "は",
      "よわ.い",
      "よわい.する"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "港",
    "meaning": "Harbor",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "みなと"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "登",
    "meaning": "Ascend / Climb Up",
    "onyomi": [
      "とう",
      "と",
      "どう",
      "しょう",
      "ちょう"
    ],
    "kunyomi": [
      "のぼ.る",
      "あ.がる"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "亡",
    "meaning": "Deceased / The Late / Dying",
    "onyomi": [
      "ぼう",
      "もう"
    ],
    "kunyomi": [
      "な.い",
      "な.き-",
      "ほろ.びる",
      "ほろ.ぶ",
      "ほろ.ぼす"
    ],
    "strokes": 3,
    "jlpt": "N3"
  },
  {
    "char": "合",
    "meaning": "Fit / Suit / Join",
    "onyomi": [
      "ごう",
      "がっ",
      "かっ"
    ],
    "kunyomi": [
      "あ.う",
      "-あ.う",
      "あ.い",
      "あい-",
      "-あ.い",
      "-あい",
      "あ.わす",
      "あ.わせる",
      "-あ.わせる"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "予",
    "meaning": "Beforehand / Previous / Myself",
    "onyomi": [
      "よ",
      "しゃ"
    ],
    "kunyomi": [
      "あらかじ.め"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "反",
    "meaning": "Anti-",
    "onyomi": [
      "はん",
      "ほん",
      "たん",
      "ほ"
    ],
    "kunyomi": [
      "そ.る",
      "そ.らす",
      "かえ.す",
      "かえ.る",
      "-かえ.る"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "返",
    "meaning": "Return / Answer / Fade",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "かえ.す",
      "-かえ.す",
      "かえ.る",
      "-かえ.る"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "宿",
    "meaning": "Inn / Lodging / Relay Station",
    "onyomi": [
      "しゅく"
    ],
    "kunyomi": [
      "やど",
      "やど.る",
      "やど.す"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "想",
    "meaning": "Concept / Think / Idea",
    "onyomi": [
      "そう",
      "そ"
    ],
    "kunyomi": [
      "おも.う"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "感",
    "meaning": "Emotion / Feeling / Sensation",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "暗",
    "meaning": "Darkness / Disappear / Shade",
    "onyomi": [
      "あん"
    ],
    "kunyomi": [
      "くら.い",
      "くら.む",
      "くれ.る"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "様",
    "meaning": "Esq. / Way / Manner",
    "onyomi": [
      "よう",
      "しょう"
    ],
    "kunyomi": [
      "さま",
      "さん"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "福",
    "meaning": "Blessing / Fortune / Luck",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "殺",
    "meaning": "Kill / Murder / Butcher",
    "onyomi": [
      "さつ",
      "さい",
      "せつ"
    ],
    "kunyomi": [
      "ころ.す",
      "-ごろ.し",
      "そ.ぐ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "然",
    "meaning": "Sort Of Thing / So / If So",
    "onyomi": [
      "ぜん",
      "ねん"
    ],
    "kunyomi": [
      "しか",
      "しか.り",
      "しか.し",
      "さ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "熱",
    "meaning": "Heat / Temperature / Fever",
    "onyomi": [
      "ねつ"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "選",
    "meaning": "Elect / Select / Choose",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "えら.ぶ"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "願",
    "meaning": "Petition / Request / Vow",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "ねが.う",
      "-ねがい"
    ],
    "strokes": 19,
    "jlpt": "N3"
  },
  {
    "char": "情",
    "meaning": "Feelings / Emotion / Passion",
    "onyomi": [
      "じょう",
      "せい"
    ],
    "kunyomi": [
      "なさ.け"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "疑",
    "meaning": "Doubt / Distrust / Be Suspicious",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [
      "うたが.う"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "皆",
    "meaning": "All / Everything",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "みな",
      "みんな"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "例",
    "meaning": "Example / Custom / Usage",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "たと.える"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "参",
    "meaning": "Nonplussed / Three (in Documents) / Going",
    "onyomi": [
      "さん",
      "しん"
    ],
    "kunyomi": [
      "まい.る",
      "まい-",
      "まじわる",
      "みつ"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "完",
    "meaning": "Perfect / Completion / End",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "念",
    "meaning": "Wish / Sense / Idea",
    "onyomi": [
      "ねん"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "折",
    "meaning": "Fold / Break / Fracture",
    "onyomi": [
      "せつ",
      "しゃく"
    ],
    "kunyomi": [
      "お.る",
      "おり",
      "お.り",
      "-お.り",
      "お.れる"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "望",
    "meaning": "Ambition / Full Moon / Hope",
    "onyomi": [
      "ぼう",
      "もう"
    ],
    "kunyomi": [
      "のぞ.む",
      "もち"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "束",
    "meaning": "Bundle / Sheaf / Ream",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "たば",
      "たば.ねる",
      "つか",
      "つか.ねる"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "残",
    "meaning": "Remainder / Leftover / Balance",
    "onyomi": [
      "ざん",
      "さん"
    ],
    "kunyomi": [
      "のこ.る",
      "のこ.す",
      "そこな.う",
      "のこ.り"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "求",
    "meaning": "Request / Want / Wish For",
    "onyomi": [
      "きゅう",
      "ぐ"
    ],
    "kunyomi": [
      "もと.める"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "約",
    "meaning": "Promise / Approximately / Shrink",
    "onyomi": [
      "やく"
    ],
    "kunyomi": [
      "つづ.まる",
      "つづ.める",
      "つづま.やか"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "性",
    "meaning": "Sex / Gender / Nature",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "さが"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "格",
    "meaning": "Status / Rank / Capacity",
    "onyomi": [
      "かく",
      "こう",
      "きゃく",
      "ごう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "能",
    "meaning": "Ability / Talent / Skill",
    "onyomi": [
      "のう"
    ],
    "kunyomi": [
      "よ.く"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "術",
    "meaning": "Art / Technique / Skill",
    "onyomi": [
      "じゅつ"
    ],
    "kunyomi": [
      "すべ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "晴",
    "meaning": "Clear Up",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [
      "は.れる",
      "は.れ",
      "は.れ-",
      "-ば.れ",
      "は.らす"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "列",
    "meaning": "File / Row / Rank",
    "onyomi": [
      "れつ",
      "れ"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "式",
    "meaning": "Style / Ceremony / Rite",
    "onyomi": [
      "しき"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "信",
    "meaning": "Faith / Truth / Fidelity",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "単",
    "meaning": "Simple / One / Single",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "ひとえ"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "変",
    "meaning": "Unusual / Change / Strange",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "か.わる",
      "か.わり",
      "か.える"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "夫",
    "meaning": "Husband / Man",
    "onyomi": [
      "ふ",
      "ふう",
      "ぶ"
    ],
    "kunyomi": [
      "おっと",
      "それ"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "昨",
    "meaning": "Yesterday / Previous",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "法",
    "meaning": "Method / Law / Rule",
    "onyomi": [
      "ほう",
      "はっ",
      "ほっ",
      "ふらん"
    ],
    "kunyomi": [
      "のり"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "晩",
    "meaning": "Nightfall / Night",
    "onyomi": [
      "ばん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "猫",
    "meaning": "Cat",
    "onyomi": [
      "びょう"
    ],
    "kunyomi": [
      "ねこ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "園",
    "meaning": "Park / Garden / Yard",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "その"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "遠",
    "meaning": "Distant / Far",
    "onyomi": [
      "えん",
      "おん"
    ],
    "kunyomi": [
      "とお.い"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "係",
    "meaning": "Person In Charge / Connection / Duty",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "かか.る",
      "かかり",
      "-がかり",
      "かか.わる"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "取",
    "meaning": "Take / Fetch / Take Up",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "と.る",
      "と.り",
      "と.り-",
      "とり",
      "-ど.り"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "守",
    "meaning": "Guard / Protect / Defend",
    "onyomi": [
      "しゅ",
      "す"
    ],
    "kunyomi": [
      "まも.る",
      "まも.り",
      "もり",
      "-もり",
      "かみ"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "幸",
    "meaning": "Happiness / Blessing / Fortune",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "さいわ.い",
      "さち",
      "しあわ.せ"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "箱",
    "meaning": "Box / Chest / Case",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "はこ"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "面",
    "meaning": "Mask / Face / Features",
    "onyomi": [
      "めん",
      "べん"
    ],
    "kunyomi": [
      "おも",
      "おもて",
      "つら"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "喜",
    "meaning": "Rejoice / Take Pleasure In",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "よろこ.ぶ",
      "よろこ.ばす"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "治",
    "meaning": "Reign / Be At Peace / Calm Down",
    "onyomi": [
      "じ",
      "ち"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる",
      "なお.る",
      "なお.す"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "笑",
    "meaning": "Laugh",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "わら.う",
      "え.む"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "辞",
    "meaning": "Resign / Word / Term",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "や.める",
      "いな.む"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "関",
    "meaning": "Connection / Barrier / Gateway",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "せき",
      "-ぜき",
      "かか.わる",
      "からくり",
      "かんぬき"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "政",
    "meaning": "Politics / Government",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "まつりごと",
      "まん"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "留",
    "meaning": "Detain / Fasten / Halt",
    "onyomi": [
      "りゅう",
      "る"
    ],
    "kunyomi": [
      "と.める",
      "と.まる",
      "とど.める",
      "とど.まる",
      "るうぶる"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "険",
    "meaning": "Precipitous / Inaccessible Place / Impregnable Position",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "けわ.しい"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "危",
    "meaning": "Dangerous / Fear / Uneasy",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "あぶ.ない",
      "あや.うい",
      "あや.ぶむ"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "存",
    "meaning": "Exist / Suppose / Be Aware Of",
    "onyomi": [
      "そん",
      "ぞん"
    ],
    "kunyomi": [
      "ながら.える",
      "あ.る",
      "たも.つ",
      "と.う"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "原",
    "meaning": "Meadow / Original / Primitive",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "はら"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "薬",
    "meaning": "Medicine / Chemical / Enamel",
    "onyomi": [
      "やく"
    ],
    "kunyomi": [
      "くすり"
    ],
    "strokes": 16,
    "jlpt": "N3"
  },
  {
    "char": "側",
    "meaning": "Side / Lean / Oppose",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "かわ",
      "がわ",
      "そば"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "席",
    "meaning": "Seat / Mat / Occasion",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "むしろ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "敗",
    "meaning": "Failure / Defeat / Reversal",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "やぶ.れる"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "果",
    "meaning": "Fruit / Reward / Carry Out",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "は.たす",
      "はた.す",
      "-は.たす",
      "は.てる",
      "-は.てる",
      "は.て"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "因",
    "meaning": "Cause / Factor / Be Associated With",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "よ.る",
      "ちな.む"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "常",
    "meaning": "Usual / Ordinary / Normal",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "つね",
      "とこ-"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "識",
    "meaning": "Discriminating / Know / Write",
    "onyomi": [
      "しき"
    ],
    "kunyomi": [
      "し.る",
      "しる.す"
    ],
    "strokes": 19,
    "jlpt": "N3"
  },
  {
    "char": "非",
    "meaning": "Un- / Mistake / Negative",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "あら.ず"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "官",
    "meaning": "Bureaucrat / The Government / Organ",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "察",
    "meaning": "Guess / Presume / Surmise",
    "onyomi": [
      "さつ"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "愛",
    "meaning": "Love / Affection / Favourite",
    "onyomi": [
      "あい"
    ],
    "kunyomi": [
      "いと.しい",
      "かな.しい",
      "め.でる",
      "お.しむ",
      "まな"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "警",
    "meaning": "Admonish / Commandment",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "いまし.める"
    ],
    "strokes": 19,
    "jlpt": "N3"
  },
  {
    "char": "覚",
    "meaning": "Memorize / Learn / Remember",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "おぼ.える",
      "さ.ます",
      "さ.める",
      "さと.る"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "説",
    "meaning": "Opinion / Theory / Explanation",
    "onyomi": [
      "せつ",
      "ぜい"
    ],
    "kunyomi": [
      "と.く"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "告",
    "meaning": "Revelation / Tell / Inform",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "つ.げる"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "種",
    "meaning": "Species / Kind / Class",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "たね",
      "-ぐさ"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "達",
    "meaning": "Accomplished / Reach / Arrive",
    "onyomi": [
      "たつ",
      "だ"
    ],
    "kunyomi": [
      "-たち"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "類",
    "meaning": "Sort / Kind / Variety",
    "onyomi": [
      "るい"
    ],
    "kunyomi": [
      "たぐ.い"
    ],
    "strokes": 18,
    "jlpt": "N3"
  },
  {
    "char": "報",
    "meaning": "Report / News / Reward",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "むく.いる"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "等",
    "meaning": "Etc. / And So Forth / Class (first)",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ひと.しい",
      "など",
      "-ら"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "座",
    "meaning": "Squat / Seat / Cushion",
    "onyomi": [
      "ざ"
    ],
    "kunyomi": [
      "すわ.る"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "忘",
    "meaning": "Forget",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "わす.れる"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "洗",
    "meaning": "Wash / Inquire Into / Probe",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "あら.う"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "許",
    "meaning": "Permit / Approve",
    "onyomi": [
      "きょ"
    ],
    "kunyomi": [
      "ゆる.す",
      "もと"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "静",
    "meaning": "Quiet",
    "onyomi": [
      "せい",
      "じょう"
    ],
    "kunyomi": [
      "しず-",
      "しず.か",
      "しず.まる",
      "しず.める"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "煙",
    "meaning": "Smoke",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "けむ.る",
      "けむり",
      "けむ.い"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "加",
    "meaning": "Add / Addition / Increase",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "くわ.える",
      "くわ.わる"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "容",
    "meaning": "Contain / Form / Looks",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "い.れる"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "易",
    "meaning": "Easy / Ready To / Simple",
    "onyomi": [
      "えき",
      "い"
    ],
    "kunyomi": [
      "やさ.しい",
      "やす.い"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "財",
    "meaning": "Property / Money / Wealth",
    "onyomi": [
      "ざい",
      "さい",
      "ぞく"
    ],
    "kunyomi": [
      "たから"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "若",
    "meaning": "Young / If / Perhaps",
    "onyomi": [
      "じゃく",
      "にゃく",
      "にゃ"
    ],
    "kunyomi": [
      "わか.い",
      "わか-",
      "も.しくわ",
      "も.し",
      "も.しくは",
      "ごと.し"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "忙",
    "meaning": "Busy / Occupied / Restless",
    "onyomi": [
      "ぼう",
      "もう"
    ],
    "kunyomi": [
      "いそが.しい",
      "せわ.しい",
      "おそ.れる",
      "うれえるさま"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "徒",
    "meaning": "On Foot / Junior / Emptiness",
    "onyomi": [
      "と"
    ],
    "kunyomi": [
      "いたずら",
      "あだ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "得",
    "meaning": "Gain / Get / Find",
    "onyomi": [
      "とく"
    ],
    "kunyomi": [
      "え.る",
      "う.る"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "続",
    "meaning": "Continue / Series / Sequel",
    "onyomi": [
      "ぞく",
      "しょく",
      "こう",
      "きょう"
    ],
    "kunyomi": [
      "つづ.く",
      "つづ.ける",
      "つぐ.ない"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "連",
    "meaning": "Take Along / Lead / Join",
    "onyomi": [
      "れん"
    ],
    "kunyomi": [
      "つら.なる",
      "つら.ねる",
      "つ.れる",
      "-づ.れ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "困",
    "meaning": "Quandary / Become Distressed / Annoyed",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "こま.る"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "機",
    "meaning": "Loom / Mechanism / Machine",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "はた"
    ],
    "strokes": 16,
    "jlpt": "N3"
  },
  {
    "char": "飛",
    "meaning": "Fly / Skip (pages) / Scatter",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "と.ぶ",
      "と.ばす",
      "-と.ばす"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "害",
    "meaning": "Harm / Injury",
    "onyomi": [
      "がい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "余",
    "meaning": "Too Much / Myself / Surplus",
    "onyomi": [
      "よ"
    ],
    "kunyomi": [
      "あま.る",
      "あま.り",
      "あま.す",
      "あんま.り"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "難",
    "meaning": "Difficult / Impossible / Trouble",
    "onyomi": [
      "なん"
    ],
    "kunyomi": [
      "かた.い",
      "-がた.い",
      "むずか.しい",
      "むづか.しい",
      "むつか.しい",
      "-にく.い"
    ],
    "strokes": 18,
    "jlpt": "N3"
  },
  {
    "char": "確",
    "meaning": "Assurance / Firm / Tight",
    "onyomi": [
      "かく",
      "こう"
    ],
    "kunyomi": [
      "たし.か",
      "たし.かめる"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "在",
    "meaning": "Exist / Outskirts / Suburbs",
    "onyomi": [
      "ざい"
    ],
    "kunyomi": [
      "あ.る"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "夢",
    "meaning": "Dream / Vision / Illusion",
    "onyomi": [
      "む",
      "ぼう"
    ],
    "kunyomi": [
      "ゆめ",
      "ゆめ.みる",
      "くら.い"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "産",
    "meaning": "Products / Bear / Give Birth",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "う.む",
      "う.まれる",
      "うぶ-",
      "む.す"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "倒",
    "meaning": "Overthrow / Fall / Collapse",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "たお.れる",
      "-だお.れ",
      "たお.す",
      "さかさま",
      "さかさ",
      "さかしま"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "妻",
    "meaning": "Wife / Spouse",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "つま"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "議",
    "meaning": "Deliberation / Consultation / Debate",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [],
    "strokes": 20,
    "jlpt": "N3"
  },
  {
    "char": "犯",
    "meaning": "Crime / Sin / Offense",
    "onyomi": [
      "はん",
      "ぼん"
    ],
    "kunyomi": [
      "おか.す"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "罪",
    "meaning": "Guilt / Sin / Crime",
    "onyomi": [
      "ざい"
    ],
    "kunyomi": [
      "つみ"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "論",
    "meaning": "Argument / Discourse",
    "onyomi": [
      "ろん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "経",
    "meaning": "Sutra / Longitude / Pass Thru",
    "onyomi": [
      "けい",
      "きょう",
      "きん"
    ],
    "kunyomi": [
      "へ.る",
      "た.つ",
      "たていと",
      "はか.る",
      "のり"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "済",
    "meaning": "Settle (debt, Etc.) / Relieve (burden) / Finish",
    "onyomi": [
      "さい",
      "せい"
    ],
    "kunyomi": [
      "す.む",
      "-ず.み",
      "-ずみ",
      "す.まない",
      "す.ます",
      "-す.ます",
      "すく.う",
      "な.す",
      "わたし",
      "わた.る"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "判",
    "meaning": "Judgement / Signature / Stamp",
    "onyomi": [
      "はん",
      "ばん"
    ],
    "kunyomi": [
      "わか.る"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "制",
    "meaning": "System / Law / Rule",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "務",
    "meaning": "Task / Duties",
    "onyomi": [
      "む"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "資",
    "meaning": "Assets / Resources / Capital",
    "onyomi": [
      "し"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "権",
    "meaning": "Authority / Power / Rights",
    "onyomi": [
      "けん",
      "ごん"
    ],
    "kunyomi": [
      "おもり",
      "かり",
      "はか.る"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "件",
    "meaning": "Affair / Case / Matter",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "くだん"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "断",
    "meaning": "Severance / Decline / Refuse",
    "onyomi": [
      "だん"
    ],
    "kunyomi": [
      "た.つ",
      "ことわ.る",
      "さだ.める"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "任",
    "meaning": "Responsibility / Duty / Term",
    "onyomi": [
      "にん"
    ],
    "kunyomi": [
      "まか.せる",
      "まか.す"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "責",
    "meaning": "Blame / Condemn / Censure",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "せ.める"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "増",
    "meaning": "Increase / Add / Augment",
    "onyomi": [
      "ぞう"
    ],
    "kunyomi": [
      "ま.す",
      "ま.し",
      "ふ.える",
      "ふ.やす"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "解",
    "meaning": "Unravel / Notes / Key",
    "onyomi": [
      "かい",
      "げ"
    ],
    "kunyomi": [
      "と.く",
      "と.かす",
      "と.ける",
      "ほど.く",
      "ほど.ける",
      "わか.る",
      "さと.る"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "際",
    "meaning": "Occasion / Side / Edge",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "きわ",
      "-ぎわ"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "認",
    "meaning": "Acknowledge / Witness / Discern",
    "onyomi": [
      "にん"
    ],
    "kunyomi": [
      "みと.める",
      "したた.める"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "過",
    "meaning": "Overdo / Exceed / Go Beyond",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "す.ぎる",
      "-す.ぎる",
      "-す.ぎ",
      "す.ごす",
      "あやま.つ",
      "あやま.ち",
      "よ.ぎる"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "寝",
    "meaning": "Lie Down / Sleep / Rest",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "ね.る",
      "ね.かす",
      "い.ぬ",
      "みたまや",
      "や.める"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "置",
    "meaning": "Placement / Put / Set",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "お.く",
      "-お.き"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "費",
    "meaning": "Expense / Cost / Spend",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "つい.やす",
      "つい.える"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "示",
    "meaning": "Show / Indicate / Point Out",
    "onyomi": [
      "じ",
      "し"
    ],
    "kunyomi": [
      "しめ.す"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "観",
    "meaning": "Outlook / Look / Appearance",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "み.る",
      "しめ.す"
    ],
    "strokes": 18,
    "jlpt": "N3"
  },
  {
    "char": "値",
    "meaning": "Price / Cost / Value",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "ね",
      "あたい"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "吸",
    "meaning": "Suck / Imbibe / Inhale",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "す.う"
    ],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "状",
    "meaning": "Status Quo / Conditions / Circumstances",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "収",
    "meaning": "Income / Obtain / Reap",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "職",
    "meaning": "Post / Employment / Work",
    "onyomi": [
      "しょく",
      "そく"
    ],
    "kunyomi": [],
    "strokes": 18,
    "jlpt": "N3"
  },
  {
    "char": "規",
    "meaning": "Standard / Measure",
    "onyomi": [
      "き"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "割",
    "meaning": "Proportion / Comparatively / Divide",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [
      "わ.る",
      "わり",
      "わ.り",
      "わ.れる",
      "さ.く"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "演",
    "meaning": "Performance / Act / Play",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "師",
    "meaning": "Expert / Teacher / Master",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "いくさ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "備",
    "meaning": "Equip / Provision / Preparation",
    "onyomi": [
      "び"
    ],
    "kunyomi": [
      "そな.える",
      "そな.わる",
      "つぶさ.に"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "優",
    "meaning": "Tenderness / Excel / Surpass",
    "onyomi": [
      "ゆう",
      "う"
    ],
    "kunyomi": [
      "やさ.しい",
      "すぐ.れる",
      "まさ.る"
    ],
    "strokes": 17,
    "jlpt": "N3"
  },
  {
    "char": "宅",
    "meaning": "Home / House / Residence",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N3"
  },
  {
    "char": "現",
    "meaning": "Present / Existing / Actual",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "あらわ.れる",
      "あらわ.す",
      "うつつ",
      "うつ.つ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "呼",
    "meaning": "Call / Call Out To / Invite",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "よ.ぶ"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "違",
    "meaning": "Difference / Differ",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "ちが.う",
      "ちが.い",
      "ちが.える",
      "-ちが.える",
      "たが.う",
      "たが.える"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "差",
    "meaning": "Distinction / Difference / Variation",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [
      "さ.す",
      "さ.し"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "供",
    "meaning": "Submit / Offer / Present",
    "onyomi": [
      "きょう",
      "く",
      "くう",
      "ぐ"
    ],
    "kunyomi": [
      "そな.える",
      "とも",
      "-ども"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "限",
    "meaning": "Limit / Restrict / To Best Of Ability",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "かぎ.る",
      "かぎ.り",
      "-かぎ.り"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "与",
    "meaning": "Bestow / Participate In / Give",
    "onyomi": [
      "よ"
    ],
    "kunyomi": [
      "あた.える",
      "あずか.る",
      "くみ.する",
      "ともに"
    ],
    "strokes": 3,
    "jlpt": "N3"
  },
  {
    "char": "渡",
    "meaning": "Transit / Ford / Ferry",
    "onyomi": [
      "と"
    ],
    "kunyomi": [
      "わた.る",
      "-わた.る",
      "わた.す"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "景",
    "meaning": "Scenery / View",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "抜",
    "meaning": "Slip Out / Extract / Pull Out",
    "onyomi": [
      "ばつ",
      "はつ",
      "はい"
    ],
    "kunyomi": [
      "ぬ.く",
      "-ぬ.く",
      "ぬ.き",
      "ぬ.ける",
      "ぬ.かす",
      "ぬ.かる"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "候",
    "meaning": "Climate / Season / Weather",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "そうろう"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "構",
    "meaning": "Posture / Build / Pretend",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "かま.える",
      "かま.う"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "捕",
    "meaning": "Catch / Capture",
    "onyomi": [
      "ほ"
    ],
    "kunyomi": [
      "と.らえる",
      "と.らわれる",
      "と.る",
      "とら.える",
      "とら.われる",
      "つか.まえる",
      "つか.まる"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "慣",
    "meaning": "Accustomed / Get Used To / Become Experienced",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "な.れる",
      "な.らす"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "満",
    "meaning": "Full / Fullness / Enough",
    "onyomi": [
      "まん",
      "ばん"
    ],
    "kunyomi": [
      "み.ちる",
      "み.つ",
      "み.たす"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "掛",
    "meaning": "Hang / Suspend / Depend",
    "onyomi": [
      "かい",
      "けい"
    ],
    "kunyomi": [
      "か.ける",
      "-か.ける",
      "か.け",
      "-か.け",
      "-が.け",
      "か.かる",
      "-か.かる",
      "-が.かる",
      "か.かり",
      "-が.かり",
      "かかり",
      "-がかり"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "居",
    "meaning": "Reside / To Be / Exist",
    "onyomi": [
      "きょ",
      "こ"
    ],
    "kunyomi": [
      "い.る",
      "-い",
      "お.る"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "突",
    "meaning": "Stab / Protruding / Thrust",
    "onyomi": [
      "とつ",
      "か"
    ],
    "kunyomi": [
      "つ.く"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "招",
    "meaning": "Beckon / Invite / Summon",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "まね.く"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "段",
    "meaning": "Grade / Steps / Stairs",
    "onyomi": [
      "だん",
      "たん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "腹",
    "meaning": "Abdomen / Belly / Stomach",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [
      "はら"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "痛",
    "meaning": "Pain / Hurt / Damage",
    "onyomi": [
      "つう"
    ],
    "kunyomi": [
      "いた.い",
      "いた.む",
      "いた.ましい",
      "いた.める"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "退",
    "meaning": "Retreat / Withdraw / Retire",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "しりぞ.く",
      "しりぞ.ける",
      "ひ.く",
      "の.く",
      "の.ける",
      "ど.く"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "迷",
    "meaning": "Astray / Be Perplexed / In Doubt",
    "onyomi": [
      "めい"
    ],
    "kunyomi": [
      "まよ.う"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "訪",
    "meaning": "Call On / Visit / Look Up",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "おとず.れる",
      "たず.ねる",
      "と.う"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "怒",
    "meaning": "Angry / Be Offended",
    "onyomi": [
      "ど",
      "ぬ"
    ],
    "kunyomi": [
      "いか.る",
      "おこ.る"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "眠",
    "meaning": "Sleep / Die / Sleepy",
    "onyomi": [
      "みん"
    ],
    "kunyomi": [
      "ねむ.る",
      "ねむ.い"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "靴",
    "meaning": "Shoes",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "くつ"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "途",
    "meaning": "Route / Way / Road",
    "onyomi": [
      "と"
    ],
    "kunyomi": [
      "みち"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "給",
    "meaning": "Salary / Wage / Gift",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "たま.う",
      "たも.う",
      "-たま.え"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "冷",
    "meaning": "Cool / Cold (beer, Person) / Chill",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "つめ.たい",
      "ひ.える",
      "ひ.や",
      "ひ.ややか",
      "ひ.やす",
      "ひ.やかす",
      "さ.める",
      "さ.ます"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "処",
    "meaning": "Dispose / Manage / Deal With",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "ところ",
      "-こ",
      "お.る"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "婦",
    "meaning": "Lady / Woman / Wife",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "よめ"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "程",
    "meaning": "Extent / Degree / Law",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "ほど",
      "-ほど"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "精",
    "meaning": "Refined / Ghost / Fairy",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "しら.げる",
      "くわ.しい"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "絶",
    "meaning": "Discontinue / Sever / Cut Off",
    "onyomi": [
      "ぜつ"
    ],
    "kunyomi": [
      "た.える",
      "た.やす",
      "た.つ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "杯",
    "meaning": "Counter For Cupfuls / Wine Glass / Glass",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "さかずき"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "積",
    "meaning": "Volume / Product (x*y) / Acreage",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "つ.む",
      "-づ.み",
      "つ.もる",
      "つ.もり"
    ],
    "strokes": 16,
    "jlpt": "N3"
  },
  {
    "char": "寄",
    "meaning": "Draw Near / Stop In / Bring Near",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "よ.る",
      "-よ.り",
      "よ.せる"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "娘",
    "meaning": "Daughter / Girl",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "むすめ",
      "こ"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "怖",
    "meaning": "Dreadful / Be Frightened / Fearful",
    "onyomi": [
      "ふ",
      "ほ"
    ],
    "kunyomi": [
      "こわ.い",
      "こわ.がる",
      "お.じる",
      "おそ.れる"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "恐",
    "meaning": "Fear / Dread / Awe",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "おそ.れる",
      "おそ.る",
      "おそ.ろしい",
      "こわ.い",
      "こわ.がる"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "婚",
    "meaning": "Marriage",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "遊",
    "meaning": "Play",
    "onyomi": [
      "ゆう",
      "ゆ"
    ],
    "kunyomi": [
      "あそ.ぶ",
      "あそ.ばす"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "貧",
    "meaning": "Poverty / Poor",
    "onyomi": [
      "ひん",
      "びん"
    ],
    "kunyomi": [
      "まず.しい"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "適",
    "meaning": "Suitable / Occasional / Rare",
    "onyomi": [
      "てき"
    ],
    "kunyomi": [
      "かな.う"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "押",
    "meaning": "Push / Stop / Check",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "お.す",
      "お.し-",
      "お.っ-",
      "お.さえる",
      "おさ.える"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "更",
    "meaning": "Grow Late / Night Watch / Sit Up Late",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "さら",
      "さら.に",
      "ふ.ける",
      "ふ.かす"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "浮",
    "meaning": "Floating / Float / Rise To Surface",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "う.く",
      "う.かれる",
      "う.かぶ",
      "む",
      "う.かべる"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "越",
    "meaning": "Surpass / Cross Over / Move To",
    "onyomi": [
      "えつ",
      "おつ"
    ],
    "kunyomi": [
      "こ.す",
      "-こ.す",
      "-ご.し",
      "こ.える",
      "-ご.え"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "背",
    "meaning": "Stature / Height / Back",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "せ",
      "せい",
      "そむ.く",
      "そむ.ける"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "盗",
    "meaning": "Steal / Rob / Pilfer",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ぬす.む",
      "ぬす.み"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "除",
    "meaning": "Exclude / Division (x/3) / Remove",
    "onyomi": [
      "じょ",
      "じ"
    ],
    "kunyomi": [
      "のぞ.く",
      "-よ.け"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "幾",
    "meaning": "How Many / How Much / How Far",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "いく-",
      "いく.つ",
      "いく.ら"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "散",
    "meaning": "Scatter / Disperse / Spend",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "ち.る",
      "ち.らす",
      "-ち.らす",
      "ち.らかす",
      "ち.らかる",
      "ち.らばる",
      "ばら",
      "ばら.ける"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "似",
    "meaning": "Becoming / Resemble / Counterfeit",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "に.る",
      "ひ.る"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "富",
    "meaning": "Wealth / Enrich / Abundant",
    "onyomi": [
      "ふ",
      "ふう"
    ],
    "kunyomi": [
      "と.む",
      "とみ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "探",
    "meaning": "Grope / Search / Look For",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "さぐ.る",
      "さが.す"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "迎",
    "meaning": "Welcome / Meet / Greet",
    "onyomi": [
      "げい"
    ],
    "kunyomi": [
      "むか.える"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "祖",
    "meaning": "Ancestor / Pioneer / Founder",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "雑",
    "meaning": "Miscellaneous",
    "onyomi": [
      "ざつ",
      "ぞう"
    ],
    "kunyomi": [
      "まじ.える",
      "まじ.る"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "賛",
    "meaning": "Approve / Praise / Title Or Inscription On Picture",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "たす.ける",
      "たた.える"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "込",
    "meaning": "Crowded / Mixture / In Bulk",
    "onyomi": [],
    "kunyomi": [
      "-こ.む",
      "こ.む",
      "こ.み",
      "-こ.み",
      "こ.める"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "欲",
    "meaning": "Longing / Covetousness / Greed",
    "onyomi": [
      "よく"
    ],
    "kunyomi": [
      "ほっ.する",
      "ほ.しい"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "閉",
    "meaning": "Closed / Shut",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [
      "と.じる",
      "と.ざす",
      "し.める",
      "し.まる",
      "た.てる"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "窓",
    "meaning": "Window / Pane",
    "onyomi": [
      "そう",
      "す"
    ],
    "kunyomi": [
      "まど",
      "てんまど",
      "けむだし"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "否",
    "meaning": "Negate / No / Noes",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "いな",
      "いや"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "暮",
    "meaning": "Evening / Twilight / Season's End",
    "onyomi": [
      "ぼ"
    ],
    "kunyomi": [
      "く.れる",
      "く.らす"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "誤",
    "meaning": "Mistake / Err / Do Wrong",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "あやま.る",
      "-あやま.る"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "降",
    "meaning": "Descend / Precipitate / Fall",
    "onyomi": [
      "こう",
      "ご"
    ],
    "kunyomi": [
      "お.りる",
      "お.ろす",
      "ふ.る",
      "ふ.り",
      "くだ.る",
      "くだ.す"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "勤",
    "meaning": "Diligence / Become Employed / Serve",
    "onyomi": [
      "きん",
      "ごん"
    ],
    "kunyomi": [
      "つと.める",
      "-づと.め",
      "つと.まる",
      "いそ.しむ"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "刻",
    "meaning": "Engrave / Cut Fine / Chop",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "きざ.む",
      "きざ.み"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "遅",
    "meaning": "Slow / Late / Back",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "おく.れる",
      "おく.らす",
      "おそ.い"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "破",
    "meaning": "Rend / Rip / Tear",
    "onyomi": [
      "は"
    ],
    "kunyomi": [
      "やぶ.る",
      "やぶ.れる",
      "わ.れる"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "互",
    "meaning": "Mutually / Reciprocally / Together",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "たが.い",
      "かたみ.に"
    ],
    "strokes": 4,
    "jlpt": "N3"
  },
  {
    "char": "彼",
    "meaning": "He / That / The",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "かれ",
      "かの",
      "か.の"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "恥",
    "meaning": "Shame / Dishonor",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "は.じる",
      "はじ",
      "は.じらう",
      "は.ずかしい"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "払",
    "meaning": "Pay / Clear Out / Prune",
    "onyomi": [
      "ふつ",
      "ひつ",
      "ほつ"
    ],
    "kunyomi": [
      "はら.う",
      "-はら.い",
      "-ばら.い"
    ],
    "strokes": 5,
    "jlpt": "N3"
  },
  {
    "char": "舞",
    "meaning": "Dance / Flit / Circle",
    "onyomi": [
      "ぶ"
    ],
    "kunyomi": [
      "ま.う",
      "-ま.う",
      "まい"
    ],
    "strokes": 15,
    "jlpt": "N3"
  },
  {
    "char": "頼",
    "meaning": "Trust / Request",
    "onyomi": [
      "らい"
    ],
    "kunyomi": [
      "たの.む",
      "たの.もしい",
      "たよ.る"
    ],
    "strokes": 16,
    "jlpt": "N3"
  },
  {
    "char": "戻",
    "meaning": "Re- / Return / Revert",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "もど.す",
      "もど.る"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "抱",
    "meaning": "Embrace / Hug / Hold In Arms",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "だ.く",
      "いだ.く",
      "かか.える"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "緒",
    "meaning": "Thong / Beginning / Inception",
    "onyomi": [
      "しょ",
      "ちょ"
    ],
    "kunyomi": [
      "お",
      "いとぐち"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "逃",
    "meaning": "Escape / Flee / Shirk",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "に.げる",
      "に.がす",
      "のが.す",
      "のが.れる"
    ],
    "strokes": 9,
    "jlpt": "N3"
  },
  {
    "char": "御",
    "meaning": "Honorable / Manipulate / Govern",
    "onyomi": [
      "ぎょ",
      "ご"
    ],
    "kunyomi": [
      "おん-",
      "お-",
      "み-"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "吹",
    "meaning": "Blow / Breathe / Puff",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "ふ.く"
    ],
    "strokes": 7,
    "jlpt": "N3"
  },
  {
    "char": "到",
    "meaning": "Arrival / Proceed / Reach",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "いた.る"
    ],
    "strokes": 8,
    "jlpt": "N3"
  },
  {
    "char": "髪",
    "meaning": "Hair Of The Head",
    "onyomi": [
      "はつ"
    ],
    "kunyomi": [
      "かみ"
    ],
    "strokes": 14,
    "jlpt": "N3"
  },
  {
    "char": "疲",
    "meaning": "Exhausted / Tire / Weary",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "つか.れる",
      "-づか.れ",
      "つか.らす"
    ],
    "strokes": 10,
    "jlpt": "N3"
  },
  {
    "char": "歳",
    "meaning": "Year-end / Age / Occasion",
    "onyomi": [
      "さい",
      "せい"
    ],
    "kunyomi": [
      "とし",
      "とせ",
      "よわい"
    ],
    "strokes": 13,
    "jlpt": "N3"
  },
  {
    "char": "偶",
    "meaning": "Accidentally / Even Number / Couple",
    "onyomi": [
      "ぐう"
    ],
    "kunyomi": [
      "たま"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "偉",
    "meaning": "Admirable / Greatness / Remarkable",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "えら.い"
    ],
    "strokes": 12,
    "jlpt": "N3"
  },
  {
    "char": "頂",
    "meaning": "Place On The Head / Receive / Top Of Head",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "いただ.く",
      "いただき"
    ],
    "strokes": 11,
    "jlpt": "N3"
  },
  {
    "char": "了",
    "meaning": "Complete / Finish",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 2,
    "jlpt": "N2"
  },
  {
    "char": "丸",
    "meaning": "Round / Full (month) / Perfection",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "まる",
      "まる.める",
      "まる.い"
    ],
    "strokes": 3,
    "jlpt": "N2"
  },
  {
    "char": "玉",
    "meaning": "Jewel / Ball",
    "onyomi": [
      "ぎょく"
    ],
    "kunyomi": [
      "たま",
      "たま-",
      "-だま"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "久",
    "meaning": "Long Time / Old Story",
    "onyomi": [
      "きゅう",
      "く"
    ],
    "kunyomi": [
      "ひさ.しい"
    ],
    "strokes": 3,
    "jlpt": "N2"
  },
  {
    "char": "戸",
    "meaning": "Door / Counter For Houses / Door Radical (no. 63)",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "と"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "毛",
    "meaning": "Fur / Hair / Feather",
    "onyomi": [
      "もう"
    ],
    "kunyomi": [
      "け"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "央",
    "meaning": "Center / Middle",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "氷",
    "meaning": "Icicle / Ice / Hail",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [
      "こおり",
      "ひ",
      "こお.る"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "皮",
    "meaning": "Pelt / Skin / Hide",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "かわ"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "皿",
    "meaning": "Dish / A Helping / Plate",
    "onyomi": [
      "べい"
    ],
    "kunyomi": [
      "さら"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "竹",
    "meaning": "Bamboo",
    "onyomi": [
      "ちく"
    ],
    "kunyomi": [
      "たけ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "糸",
    "meaning": "Thread",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "いと"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "虫",
    "meaning": "Insect / Bug / Temper",
    "onyomi": [
      "ちゅう",
      "き"
    ],
    "kunyomi": [
      "むし"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "村",
    "meaning": "Village / Town",
    "onyomi": [
      "そん"
    ],
    "kunyomi": [
      "むら"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "貝",
    "meaning": "Shellfish",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "かい"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "池",
    "meaning": "Pond / Cistern / Pool",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "いけ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "羽",
    "meaning": "Feathers / Counter For Birds, Rabbits",
    "onyomi": [
      "う"
    ],
    "kunyomi": [
      "は",
      "わ",
      "はね"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "角",
    "meaning": "Angle / Corner / Square",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "かど",
      "つの"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "谷",
    "meaning": "Valley",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "たに",
      "きわ.まる"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "麦",
    "meaning": "Barley / Wheat",
    "onyomi": [
      "ばく"
    ],
    "kunyomi": [
      "むぎ"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "林",
    "meaning": "Grove / Forest",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [
      "はやし"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "州",
    "meaning": "State / Province",
    "onyomi": [
      "しゅう",
      "す"
    ],
    "kunyomi": [
      "す"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "血",
    "meaning": "Blood",
    "onyomi": [
      "けつ"
    ],
    "kunyomi": [
      "ち"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "星",
    "meaning": "Star / Spot / Dot",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "ほし",
      "-ぼし"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "札",
    "meaning": "Tag / Paper Money / Counter For Bonds",
    "onyomi": [
      "さつ"
    ],
    "kunyomi": [
      "ふだ"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "辺",
    "meaning": "Environs / Boundary / Border",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "あた.り",
      "ほと.り",
      "-べ"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "弱",
    "meaning": "Weak / Frail",
    "onyomi": [
      "じゃく"
    ],
    "kunyomi": [
      "よわ.い",
      "よわ.る",
      "よわ.まる",
      "よわ.める"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "黄",
    "meaning": "Yellow",
    "onyomi": [
      "こう",
      "おう"
    ],
    "kunyomi": [
      "き",
      "こ-"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "森",
    "meaning": "Forest / Woods",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "もり"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "雲",
    "meaning": "Cloud",
    "onyomi": [
      "うん"
    ],
    "kunyomi": [
      "くも",
      "-ぐも"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "県",
    "meaning": "Prefecture",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "か.ける"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "軽",
    "meaning": "Lightly / Trifling / Unimportant",
    "onyomi": [
      "けい",
      "きょう",
      "きん"
    ],
    "kunyomi": [
      "かる.い",
      "かろ.やか",
      "かろ.んじる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "農",
    "meaning": "Agriculture / Farmers",
    "onyomi": [
      "のう"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "鉄",
    "meaning": "Iron",
    "onyomi": [
      "てつ"
    ],
    "kunyomi": [
      "くろがね"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "算",
    "meaning": "Calculate / Divining / Number",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "そろ"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "線",
    "meaning": "Line / Track",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "すじ"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "仲",
    "meaning": "Go-between / Relationship",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "なか"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "低",
    "meaning": "Lower / Short / Humble",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "ひく.い",
      "ひく.める",
      "ひく.まる"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "岸",
    "meaning": "Beach",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "きし"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "波",
    "meaning": "Waves / Billows / Poland",
    "onyomi": [
      "は"
    ],
    "kunyomi": [
      "なみ"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "拾",
    "meaning": "Pick Up / Gather / Find",
    "onyomi": [
      "しゅう",
      "じゅう"
    ],
    "kunyomi": [
      "ひろ.う"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "秒",
    "meaning": "Second (1/60 Minute)",
    "onyomi": [
      "びょう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "競",
    "meaning": "Emulate / Compete With / Bid",
    "onyomi": [
      "きょう",
      "けい"
    ],
    "kunyomi": [
      "きそ.う",
      "せ.る",
      "くら.べる"
    ],
    "strokes": 20,
    "jlpt": "N2"
  },
  {
    "char": "令",
    "meaning": "Orders / Ancient Laws / Command",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "根",
    "meaning": "Root / Radical / Head (pimple)",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "ね",
      "-ね"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "倍",
    "meaning": "Double / Twice / Times",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "島",
    "meaning": "Island",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "しま"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "祭",
    "meaning": "Ritual / Offer Prayers / Celebrate",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "まつ.る",
      "まつ.り",
      "まつり"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "章",
    "meaning": "Badge / Chapter / Composition",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "童",
    "meaning": "Juvenile / Child",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "わらべ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "階",
    "meaning": "Storey / Stair / Counter For Storeys Of A Building",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "きざはし"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "植",
    "meaning": "Plant",
    "onyomi": [
      "しょく"
    ],
    "kunyomi": [
      "う.える",
      "う.わる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "温",
    "meaning": "Warm",
    "onyomi": [
      "おん"
    ],
    "kunyomi": [
      "あたた.か",
      "あたた.かい",
      "あたた.まる",
      "あたた.める",
      "ぬく"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "湯",
    "meaning": "Hot Water / Bath / Hot Spring",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ゆ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "短",
    "meaning": "Short / Brevity / Fault",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "みじか.い"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "泉",
    "meaning": "Spring / Fountain",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "いずみ"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "橋",
    "meaning": "Bridge",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "はし"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "緑",
    "meaning": "Green",
    "onyomi": [
      "りょく",
      "ろく"
    ],
    "kunyomi": [
      "みどり"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "練",
    "meaning": "Practice / Gloss / Train",
    "onyomi": [
      "れん"
    ],
    "kunyomi": [
      "ね.る",
      "ね.り"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "億",
    "meaning": "Hundred Million / 10**8",
    "onyomi": [
      "おく"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "課",
    "meaning": "Chapter / Lesson / Section",
    "onyomi": [
      "か"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "賞",
    "meaning": "Prize / Reward / Praise",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "ほ.める"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "輪",
    "meaning": "Wheel / Ring / Circle",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [
      "わ"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "像",
    "meaning": "Statue / Picture / Image",
    "onyomi": [
      "ぞう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "卒",
    "meaning": "Graduate / Soldier / Private",
    "onyomi": [
      "そつ",
      "しゅつ"
    ],
    "kunyomi": [
      "そっ.する",
      "お.える",
      "お.わる",
      "ついに",
      "にわか"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "協",
    "meaning": "Co- / Cooperation",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "周",
    "meaning": "Circumference / Circuit / Lap",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "まわ.り"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "囲",
    "meaning": "Surround / Besiege / Store",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "かこ.む",
      "かこ.う",
      "かこ.い"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "固",
    "meaning": "Harden / Set / Clot",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "かた.める",
      "かた.まる",
      "かた.まり",
      "かた.い"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "季",
    "meaning": "Seasons",
    "onyomi": [
      "き"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "希",
    "meaning": "Hope / Beg / Request",
    "onyomi": [
      "き",
      "け"
    ],
    "kunyomi": [
      "まれ"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "材",
    "meaning": "Lumber / Log / Timber",
    "onyomi": [
      "ざい"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "芸",
    "meaning": "Technique / Art / Craft",
    "onyomi": [
      "げい",
      "うん"
    ],
    "kunyomi": [
      "う.える",
      "のり",
      "わざ"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "技",
    "meaning": "Skill / Art / Craft",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [
      "わざ"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "骨",
    "meaning": "Skeleton / Bone / Remains",
    "onyomi": [
      "こつ"
    ],
    "kunyomi": [
      "ほね"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "寺",
    "meaning": "Buddhist Temple",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "てら"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "岩",
    "meaning": "Boulder / Rock / Cliff",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "いわ"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "区",
    "meaning": "Ward / District",
    "onyomi": [
      "く",
      "おう",
      "こう"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "坂",
    "meaning": "Slope / Incline / Hill",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "さか"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "勇",
    "meaning": "Courage / Cheer Up / Be In High Spirits",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "いさ.む"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "毒",
    "meaning": "Poison / Virus / Venom",
    "onyomi": [
      "どく"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "浅",
    "meaning": "Shallow / Superficial / Frivolous",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "あさ.い"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "軍",
    "meaning": "Army / Force / Troops",
    "onyomi": [
      "ぐん"
    ],
    "kunyomi": [
      "いくさ"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "仏",
    "meaning": "Buddha / The Dead / France",
    "onyomi": [
      "ぶつ",
      "ふつ"
    ],
    "kunyomi": [
      "ほとけ"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "築",
    "meaning": "Fabricate / Build / Construct",
    "onyomi": [
      "ちく"
    ],
    "kunyomi": [
      "きず.く"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "門",
    "meaning": "Gate / Counter For Cannons",
    "onyomi": [
      "もん"
    ],
    "kunyomi": [
      "かど",
      "と"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "荷",
    "meaning": "Baggage / Shoulder-pole Load / Bear (a Burden)",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "に"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "府",
    "meaning": "Borough / Urban Prefecture / Govt Office",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "浴",
    "meaning": "Bathe / Be Favored With / Bask In",
    "onyomi": [
      "よく"
    ],
    "kunyomi": [
      "あ.びる",
      "あ.びせる"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "専",
    "meaning": "Specialty / Exclusive / Mainly",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "もっぱ.ら"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "細",
    "meaning": "Dainty / Get Thin / Taper",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "ほそ.い",
      "ほそ.る",
      "こま.か",
      "こま.かい"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "鼻",
    "meaning": "Nose / Snout",
    "onyomi": [
      "び"
    ],
    "kunyomi": [
      "はな"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "兵",
    "meaning": "Soldier / Private / Troops",
    "onyomi": [
      "へい",
      "ひょう"
    ],
    "kunyomi": [
      "つわもの"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "塩",
    "meaning": "Salt",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "しお"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "栄",
    "meaning": "Flourish / Prosperity / Honor",
    "onyomi": [
      "えい",
      "よう"
    ],
    "kunyomi": [
      "さか.える",
      "は.え",
      "-ば.え",
      "は.える",
      "え"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "干",
    "meaning": "Dry / Parch / Ebb",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "ほ.す",
      "ほ.し-",
      "-ぼ.し",
      "ひ.る"
    ],
    "strokes": 3,
    "jlpt": "N2"
  },
  {
    "char": "底",
    "meaning": "Bottom / Sole / Depth",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "そこ"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "署",
    "meaning": "Signature / Govt Office / Police Station",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "恋",
    "meaning": "Romance / In Love / Yearn For",
    "onyomi": [
      "れん"
    ],
    "kunyomi": [
      "こ.う",
      "こい",
      "こい.しい"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "訓",
    "meaning": "Instruction / Japanese Character Reading / Explanation",
    "onyomi": [
      "くん",
      "きん"
    ],
    "kunyomi": [
      "おし.える",
      "よ.む",
      "くん.ずる"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "祈",
    "meaning": "Pray / Wish",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "いの.る"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "焼",
    "meaning": "Bake / Burning",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "や.く",
      "や.き",
      "や.き-",
      "-や.き",
      "や.ける"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "胸",
    "meaning": "Bosom / Breast / Chest",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "むね",
      "むな-"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "脳",
    "meaning": "Brain / Memory",
    "onyomi": [
      "のう",
      "どう"
    ],
    "kunyomi": [
      "のうずる"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "枚",
    "meaning": "Sheet Of... / Counter For Flat Thin Objects Or Sheets",
    "onyomi": [
      "まい",
      "ばい"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "禁",
    "meaning": "Prohibition / Ban / Forbid",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "喫",
    "meaning": "Consume / Eat / Drink",
    "onyomi": [
      "きつ"
    ],
    "kunyomi": [
      "の.む"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "減",
    "meaning": "Dwindle / Decrease / Reduce",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "へ.る",
      "へ.らす"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "順",
    "meaning": "Obey / Order / Turn",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "布",
    "meaning": "Linen / Cloth / Spread",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "ぬの"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "詞",
    "meaning": "Part Of Speech / Words / Poetry",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "ことば"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "歴",
    "meaning": "Curriculum / Continuation / Passage Of Time",
    "onyomi": [
      "れき",
      "れっき"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "冊",
    "meaning": "Tome / Counter For Books / Volume",
    "onyomi": [
      "さつ",
      "さく"
    ],
    "kunyomi": [
      "ふみ"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "宇",
    "meaning": "Eaves / Roof / House",
    "onyomi": [
      "う"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "団",
    "meaning": "Group / Association",
    "onyomi": [
      "だん",
      "とん"
    ],
    "kunyomi": [
      "かたまり",
      "まる.い"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "暴",
    "meaning": "Outburst / Rave / Fret",
    "onyomi": [
      "ぼう",
      "ばく"
    ],
    "kunyomi": [
      "あば.く",
      "あば.れる"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "混",
    "meaning": "Mix / Blend / Confuse",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "ま.じる",
      "-ま.じり",
      "ま.ざる",
      "ま.ぜる",
      "こ.む"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "乱",
    "meaning": "Riot / War / Disorder",
    "onyomi": [
      "らん",
      "ろん"
    ],
    "kunyomi": [
      "みだ.れる",
      "みだ.る",
      "みだ.す",
      "みだ",
      "おさ.める",
      "わた.る"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "改",
    "meaning": "Reformation / Change / Modify",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "あらた.める",
      "あらた.まる"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "絡",
    "meaning": "Entwine / Coil Around / Get Caught In",
    "onyomi": [
      "らく"
    ],
    "kunyomi": [
      "から.む",
      "から.まる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "比",
    "meaning": "Compare / Race / Ratio",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "くら.べる"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "被",
    "meaning": "Incur / Cover / Veil",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "こうむ.る",
      "おお.う",
      "かぶ.る",
      "かぶ.せる"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "震",
    "meaning": "Quake / Shake / Tremble",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "ふる.う",
      "ふる.える"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "械",
    "meaning": "Contraption / Fetter / Machine",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "かせ"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "個",
    "meaning": "Individual / Counter For Articles",
    "onyomi": [
      "こ",
      "か"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "圧",
    "meaning": "Pressure / Push / Overwhelm",
    "onyomi": [
      "あつ",
      "えん",
      "おう"
    ],
    "kunyomi": [
      "お.す",
      "へ.す",
      "おさ.える",
      "お.さえる"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "厚",
    "meaning": "Thick / Heavy / Rich",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "あつ.い",
      "あか"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "防",
    "meaning": "Ward Off / Defend / Protect",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "ふせ.ぐ"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "史",
    "meaning": "History / Chronicle",
    "onyomi": [
      "し"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "委",
    "meaning": "Committee / Entrust To / Leave To",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "ゆだ.ねる"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "査",
    "meaning": "Investigate",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "総",
    "meaning": "General / Whole / All",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "す.べて",
      "すべ.て",
      "ふさ"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "設",
    "meaning": "Establishment / Provision / Prepare",
    "onyomi": [
      "せつ"
    ],
    "kunyomi": [
      "もう.ける"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "省",
    "meaning": "Focus / Government Ministry / Conserve",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "かえり.みる",
      "はぶ.く"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "税",
    "meaning": "Tax / Duty",
    "onyomi": [
      "ぜい"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "各",
    "meaning": "Each / Every / Either",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "おのおの"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "勢",
    "meaning": "Forces / Energy / Military Strength",
    "onyomi": [
      "せい",
      "ぜい"
    ],
    "kunyomi": [
      "いきお.い",
      "はずみ"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "営",
    "meaning": "Occupation / Camp / Perform",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "いとな.む",
      "いとな.み"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "領",
    "meaning": "Jurisdiction / Dominion / Territory",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "えり"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "副",
    "meaning": "Vice- / Assistant / Aide",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "域",
    "meaning": "Range / Region / Limits",
    "onyomi": [
      "いき"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "停",
    "meaning": "Halt / Stopping",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "と.める",
      "と.まる"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "革",
    "meaning": "Leather / Skin / Reform",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "かわ"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "律",
    "meaning": "Rhythm / Law / Regulation",
    "onyomi": [
      "りつ",
      "りち",
      "れつ"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "準",
    "meaning": "Semi- / Correspond To / Proportionate To",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [
      "じゅん.じる",
      "じゅん.ずる",
      "なぞら.える",
      "のり",
      "ひと.しい",
      "みずもり"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "則",
    "meaning": "Rule / Follow / Based On",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "のっと.る"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "導",
    "meaning": "Guidance / Leading / Conduct",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "みちび.く"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "乳",
    "meaning": "Milk / Breasts",
    "onyomi": [
      "にゅう"
    ],
    "kunyomi": [
      "ちち",
      "ち"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "城",
    "meaning": "Castle",
    "onyomi": [
      "じょう",
      "せい"
    ],
    "kunyomi": [
      "しろ"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "担",
    "meaning": "Shouldering / Carry / Raise",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "かつ.ぐ",
      "にな.う"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "額",
    "meaning": "Forehead / Tablet / Plaque",
    "onyomi": [
      "がく"
    ],
    "kunyomi": [
      "ひたい"
    ],
    "strokes": 18,
    "jlpt": "N2"
  },
  {
    "char": "輸",
    "meaning": "Transport / Send / Be Inferior",
    "onyomi": [
      "ゆ",
      "しゅ"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "燃",
    "meaning": "Burn / Blaze / Glow",
    "onyomi": [
      "ねん"
    ],
    "kunyomi": [
      "も.える",
      "も.やす",
      "も.す"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "祝",
    "meaning": "Celebrate / Congratulate",
    "onyomi": [
      "しゅく",
      "しゅう"
    ],
    "kunyomi": [
      "いわ.う"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "届",
    "meaning": "Deliver / Reach / Arrive",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "とど.ける",
      "-とど.け",
      "とど.く"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "肩",
    "meaning": "Shoulder",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "かた"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "腕",
    "meaning": "Arm / Ability / Talent",
    "onyomi": [
      "わん"
    ],
    "kunyomi": [
      "うで"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "腰",
    "meaning": "Loins / Hips / Waist",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "こし"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "触",
    "meaning": "Contact / Touch / Feel",
    "onyomi": [
      "しょく"
    ],
    "kunyomi": [
      "ふ.れる",
      "さわ.る",
      "さわ"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "層",
    "meaning": "Stratum / Social Class / Layer",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "型",
    "meaning": "Mould / Type / Model",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "かた",
      "-がた"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "庁",
    "meaning": "Government Office",
    "onyomi": [
      "ちょう",
      "てい"
    ],
    "kunyomi": [
      "やくしょ"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "管",
    "meaning": "Pipe / Tube / Wind Instrument",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "くだ"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "象",
    "meaning": "Elephant / Pattern After / Imitate",
    "onyomi": [
      "しょう",
      "ぞう"
    ],
    "kunyomi": [
      "かたど.る"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "量",
    "meaning": "Quantity / Measure / Weight",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "はか.る"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "境",
    "meaning": "Boundary / Border / Region",
    "onyomi": [
      "きょう",
      "けい"
    ],
    "kunyomi": [
      "さかい"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "武",
    "meaning": "Warrior / Military / Chivalry",
    "onyomi": [
      "ぶ",
      "む"
    ],
    "kunyomi": [
      "たけ",
      "たけ.し"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "述",
    "meaning": "Mention / State / Speak",
    "onyomi": [
      "じゅつ"
    ],
    "kunyomi": [
      "の.べる"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "販",
    "meaning": "Marketing / Sell / Trade",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "含",
    "meaning": "Contain / Include / Hold In The Mouth",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "ふく.む",
      "ふく.める"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "況",
    "meaning": "Condition / Situation",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "まし.て",
      "いわ.んや",
      "おもむき"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "補",
    "meaning": "Supplement / Supply / Make Good",
    "onyomi": [
      "ほ"
    ],
    "kunyomi": [
      "おぎな.う"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "効",
    "meaning": "Merit / Efficacy / Efficiency",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "き.く",
      "ききめ",
      "なら.う"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "豊",
    "meaning": "Bountiful / Excellent / Rich",
    "onyomi": [
      "ほう",
      "ぶ"
    ],
    "kunyomi": [
      "ゆた.か",
      "とよ"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "巻",
    "meaning": "Scroll / Volume / Book",
    "onyomi": [
      "かん",
      "けん"
    ],
    "kunyomi": [
      "ま.く",
      "まき",
      "ま.き"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "捜",
    "meaning": "Search / Look For / Locate",
    "onyomi": [
      "そう",
      "しゅ",
      "しゅう"
    ],
    "kunyomi": [
      "さが.す"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "替",
    "meaning": "Exchange / Spare / Substitute",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "か.える",
      "か.え-",
      "か.わる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "造",
    "meaning": "Create / Make / Structure",
    "onyomi": [
      "ぞう"
    ],
    "kunyomi": [
      "つく.る",
      "つく.り",
      "-づく.り"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "印",
    "meaning": "Stamp / Seal / Mark",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "しるし",
      "-じるし",
      "しる.す"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "復",
    "meaning": "Restore / Return To / Revert",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [
      "また"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "筆",
    "meaning": "Writing Brush / Writing / Painting Brush",
    "onyomi": [
      "ひつ"
    ],
    "kunyomi": [
      "ふで"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "貯",
    "meaning": "Savings / Store / Lay In",
    "onyomi": [
      "ちょ"
    ],
    "kunyomi": [
      "た.める",
      "たくわ.える"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "刺",
    "meaning": "Thorn / Pierce / Stab",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "さ.す",
      "さ.さる",
      "さ.し",
      "さし",
      "とげ"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "郵",
    "meaning": "Mail / Stagecoach Stop",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "針",
    "meaning": "Needle / Pin / Staple",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "はり"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "菓",
    "meaning": "Candy / Cakes / Fruit",
    "onyomi": [
      "か"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "河",
    "meaning": "River",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "かわ"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "汗",
    "meaning": "Sweat / Perspire",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "あせ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "再",
    "meaning": "Again / Twice / Second Time",
    "onyomi": [
      "さい",
      "さ"
    ],
    "kunyomi": [
      "ふたた.び"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "接",
    "meaning": "Touch / Contact / Adjoin",
    "onyomi": [
      "せつ",
      "しょう"
    ],
    "kunyomi": [
      "つ.ぐ"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "占",
    "meaning": "Fortune-telling / Divining / Forecasting",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "し.める",
      "うらな.う"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "胃",
    "meaning": "Stomach / Paunch / Crop",
    "onyomi": [
      "い"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "悩",
    "meaning": "Trouble / Worry / In Pain",
    "onyomi": [
      "のう"
    ],
    "kunyomi": [
      "なや.む",
      "なや.ます",
      "なや.ましい",
      "なやみ"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "昇",
    "meaning": "Rise Up",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "のぼ.る"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "濃",
    "meaning": "Concentrated / Thick / Dark",
    "onyomi": [
      "のう"
    ],
    "kunyomi": [
      "こ.い"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "極",
    "meaning": "Poles / Settlement / Conclusion",
    "onyomi": [
      "きょく",
      "ごく"
    ],
    "kunyomi": [
      "きわ.める",
      "きわ.まる",
      "きわ.まり",
      "きわ.み",
      "き.める",
      "-ぎ.め",
      "き.まる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "逆",
    "meaning": "Inverted / Reverse / Opposite",
    "onyomi": [
      "ぎゃく",
      "げき"
    ],
    "kunyomi": [
      "さか",
      "さか.さ",
      "さか.らう"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "巨",
    "meaning": "Gigantic / Big / Large",
    "onyomi": [
      "きょ"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "庫",
    "meaning": "Warehouse / Storehouse",
    "onyomi": [
      "こ",
      "く"
    ],
    "kunyomi": [
      "くら"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "児",
    "meaning": "Newborn Babe / Child / Young Of Animals",
    "onyomi": [
      "じ",
      "に",
      "げい"
    ],
    "kunyomi": [
      "こ",
      "-こ",
      "-っこ"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "凍",
    "meaning": "Frozen / Congeal / Refrigerate",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "こお.る",
      "こご.える",
      "こご.る",
      "い.てる",
      "し.みる"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "幼",
    "meaning": "Infancy / Childhood",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "おさな.い"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "清",
    "meaning": "Pure / Purify / Cleanse",
    "onyomi": [
      "せい",
      "しょう",
      "しん"
    ],
    "kunyomi": [
      "きよ.い",
      "きよ.まる",
      "きよ.める"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "録",
    "meaning": "Record",
    "onyomi": [
      "ろく"
    ],
    "kunyomi": [
      "しる.す",
      "と.る"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "券",
    "meaning": "Ticket",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "移",
    "meaning": "Shift / Move / Change",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "うつ.る",
      "うつ.す"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "並",
    "meaning": "Row / And / Besides",
    "onyomi": [
      "へい",
      "ほう"
    ],
    "kunyomi": [
      "な.み",
      "なみ",
      "なら.べる",
      "なら.ぶ",
      "なら.びに"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "乾",
    "meaning": "Drought / Dry / Dessicate",
    "onyomi": [
      "かん",
      "けん"
    ],
    "kunyomi": [
      "かわ.く",
      "かわ.かす",
      "ほ.す",
      "ひ.る",
      "いぬい"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "欧",
    "meaning": "Europe",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "うた.う",
      "は.く"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "臣",
    "meaning": "Retainer / Subject",
    "onyomi": [
      "しん",
      "じん"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "略",
    "meaning": "Abbreviation / Omission / Outline",
    "onyomi": [
      "りゃく"
    ],
    "kunyomi": [
      "ほぼ",
      "はぶ.く",
      "おか.す",
      "おさ.める",
      "はかりごと",
      "はか.る"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "航",
    "meaning": "Navigate / Sail / Cruise",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "板",
    "meaning": "Plank / Board / Plate",
    "onyomi": [
      "はん",
      "ばん"
    ],
    "kunyomi": [
      "いた"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "詰",
    "meaning": "Packed / Close / Pressed",
    "onyomi": [
      "きつ",
      "きち"
    ],
    "kunyomi": [
      "つ.める",
      "つ.め",
      "-づ.め",
      "つ.まる",
      "つ.む"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "照",
    "meaning": "Illuminate / Shine / Compare",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "て.る",
      "て.らす",
      "て.れる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "快",
    "meaning": "Cheerful / Pleasant / Agreeable",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "こころよ.い"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "版",
    "meaning": "Printing Block / Printing Plate / Edition",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "預",
    "meaning": "Deposit / Custody / Leave With",
    "onyomi": [
      "よ"
    ],
    "kunyomi": [
      "あず.ける",
      "あず.かる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "延",
    "meaning": "Prolong / Stretching",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "の.びる",
      "の.べる",
      "の.べ",
      "の.ばす"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "翌",
    "meaning": "The Following / Next",
    "onyomi": [
      "よく"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "符",
    "meaning": "Token / Sign / Mark",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "編",
    "meaning": "Compilation / Knit / Plait",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "あ.む",
      "-あ.み"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "普",
    "meaning": "Universal / Wide(ly) / Generally",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "あまね.く",
      "あまねし"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "掃",
    "meaning": "Sweep / Brush",
    "onyomi": [
      "そう",
      "しゅ"
    ],
    "kunyomi": [
      "は.く"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "泥",
    "meaning": "Mud / Mire / Adhere To",
    "onyomi": [
      "でい",
      "ない",
      "で",
      "に"
    ],
    "kunyomi": [
      "どろ",
      "なず.む"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "棒",
    "meaning": "Rod / Stick / Cane",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "孫",
    "meaning": "Grandchild / Descendants",
    "onyomi": [
      "そん"
    ],
    "kunyomi": [
      "まご"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "帯",
    "meaning": "Sash / Belt / Obi",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "お.びる",
      "おび"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "粉",
    "meaning": "Flour / Powder / Dust",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [
      "デシメートル",
      "こ",
      "こな"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "菜",
    "meaning": "Vegetable / Side Dish / Greens",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "な"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "貨",
    "meaning": "Freight / Goods / Property",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "たから"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "陸",
    "meaning": "Land / Six",
    "onyomi": [
      "りく",
      "ろく"
    ],
    "kunyomi": [
      "おか"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "均",
    "meaning": "Level / Average",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "なら.す"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "採",
    "meaning": "Pick / Take / Fetch",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "と.る"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "永",
    "meaning": "Eternity / Long / Lengthy",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "なが.い"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "液",
    "meaning": "Fluid / Liquid / Juice",
    "onyomi": [
      "えき"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "績",
    "meaning": "Exploits / Achievements / Unreeling Cocoons",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N2"
  },
  {
    "char": "複",
    "meaning": "Duplicate / Double / Compound",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "党",
    "meaning": "Party / Faction / Clique",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "なかま",
      "むら"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "卵",
    "meaning": "Egg / Ovum / Spawn",
    "onyomi": [
      "らん"
    ],
    "kunyomi": [
      "たまご"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "捨",
    "meaning": "Discard / Throw Away / Abandon",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "す.てる"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "汚",
    "meaning": "Dirty / Pollute / Disgrace",
    "onyomi": [
      "お"
    ],
    "kunyomi": [
      "けが.す",
      "けが.れる",
      "けが.らわしい",
      "よご.す",
      "よご.れる",
      "きたな.い"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "机",
    "meaning": "Desk / Table",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "つくえ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "簡",
    "meaning": "Simplicity / Brevity",
    "onyomi": [
      "かん",
      "けん"
    ],
    "kunyomi": [
      "えら.ぶ",
      "ふだ"
    ],
    "strokes": 18,
    "jlpt": "N2"
  },
  {
    "char": "誌",
    "meaning": "Document / Records",
    "onyomi": [
      "し"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "宝",
    "meaning": "Treasure / Wealth / Valuables",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "たから"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "尊",
    "meaning": "Revered / Valuable / Precious",
    "onyomi": [
      "そん"
    ],
    "kunyomi": [
      "たっと.い",
      "とうと.い",
      "たっと.ぶ",
      "とうと.ぶ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "敬",
    "meaning": "Awe / Respect / Honor",
    "onyomi": [
      "けい",
      "きょう"
    ],
    "kunyomi": [
      "うやま.う"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "灰",
    "meaning": "Ashes / Puckery Juice / Cremate",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "はい"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "砂",
    "meaning": "Sand",
    "onyomi": [
      "さ",
      "しゃ"
    ],
    "kunyomi": [
      "すな"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "著",
    "meaning": "Renowned / Publish / Write",
    "onyomi": [
      "ちょ",
      "ちゃく"
    ],
    "kunyomi": [
      "あらわ.す",
      "いちじる.しい"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "蒸",
    "meaning": "Steam / Heat / Sultry",
    "onyomi": [
      "じょう",
      "せい"
    ],
    "kunyomi": [
      "む.す",
      "む.れる",
      "む.らす"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "蔵",
    "meaning": "Storehouse / Hide / Own",
    "onyomi": [
      "ぞう",
      "そう"
    ],
    "kunyomi": [
      "くら",
      "おさ.める",
      "かく.れる"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "装",
    "meaning": "Attire / Dress / Pretend",
    "onyomi": [
      "そう",
      "しょう"
    ],
    "kunyomi": [
      "よそお.う",
      "よそお.い"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "裏",
    "meaning": "Back / Amidst / In",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "うら"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "諸",
    "meaning": "Various / Many / Several",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "もろ"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "臓",
    "meaning": "Entrails / Viscera / Bowels",
    "onyomi": [
      "ぞう"
    ],
    "kunyomi": [
      "はらわた"
    ],
    "strokes": 19,
    "jlpt": "N2"
  },
  {
    "char": "純",
    "meaning": "Genuine / Purity / Innocence",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "紅",
    "meaning": "Crimson / Deep Red",
    "onyomi": [
      "こう",
      "く"
    ],
    "kunyomi": [
      "べに",
      "くれない",
      "あか.い"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "拝",
    "meaning": "Worship / Adore / Pray To",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "おが.む",
      "おろが.む"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "劇",
    "meaning": "Drama / Play",
    "onyomi": [
      "げき"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "承",
    "meaning": "Acquiesce / Hear / Listen To",
    "onyomi": [
      "しょう",
      "じょう"
    ],
    "kunyomi": [
      "うけたまわ.る",
      "う.ける"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "損",
    "meaning": "Damage / Loss / Disadvantage",
    "onyomi": [
      "そん"
    ],
    "kunyomi": [
      "そこ.なう",
      "そこな.う",
      "-そこ.なう",
      "そこ.ねる",
      "-そこ.ねる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "枝",
    "meaning": "Bough / Branch / Twig",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "えだ"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "測",
    "meaning": "Fathom / Plan / Scheme",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "はか.る"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "講",
    "meaning": "Lecture / Club / Association",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N2"
  },
  {
    "char": "紹",
    "meaning": "Introduce / Inherit / Help",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "介",
    "meaning": "Jammed In / Shellfish / Mediate",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "湖",
    "meaning": "Lake",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "みずうみ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "銅",
    "meaning": "Copper",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "あかがね"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "油",
    "meaning": "Oil / Fat",
    "onyomi": [
      "ゆ",
      "ゆう"
    ],
    "kunyomi": [
      "あぶら"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "旧",
    "meaning": "Old Times / Old Things / Old Friend",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "ふる.い",
      "もと"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "姓",
    "meaning": "Surname",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "貿",
    "meaning": "Trade / Exchange",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "将",
    "meaning": "Leader / Commander / General",
    "onyomi": [
      "しょう",
      "そう"
    ],
    "kunyomi": [
      "まさ.に",
      "はた",
      "まさ",
      "ひきい.る",
      "もって"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "伸",
    "meaning": "Expand / Stretch / Extend",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "の.びる",
      "の.ばす",
      "の.べる",
      "の.す"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "幅",
    "meaning": "Hanging Scroll / Width",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [
      "はば"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "甘",
    "meaning": "Sweet / Coax / Pamper",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "あま.い",
      "あま.える",
      "あま.やかす",
      "うま.い"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "換",
    "meaning": "Interchange / Period / Change",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "か.える",
      "-か.える",
      "か.わる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "療",
    "meaning": "Heal / Cure",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N2"
  },
  {
    "char": "般",
    "meaning": "Carrier / Carry / All",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "依",
    "meaning": "Reliant / Depend On / Consequently",
    "onyomi": [
      "い",
      "え"
    ],
    "kunyomi": [
      "よ.る"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "漁",
    "meaning": "Fishing / Fishery",
    "onyomi": [
      "ぎょ",
      "りょう"
    ],
    "kunyomi": [
      "あさ.る"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "募",
    "meaning": "Recruit / Campaign / Gather (contributions)",
    "onyomi": [
      "ぼ"
    ],
    "kunyomi": [
      "つの.る"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "患",
    "meaning": "Afflicted / Disease / Suffer From",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "わずら.う"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "湾",
    "meaning": "Gulf / Bay / Inlet",
    "onyomi": [
      "わん"
    ],
    "kunyomi": [
      "いりえ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "爆",
    "meaning": "Bomb / Burst Open / Pop",
    "onyomi": [
      "ばく"
    ],
    "kunyomi": [
      "は.ぜる"
    ],
    "strokes": 19,
    "jlpt": "N2"
  },
  {
    "char": "跡",
    "meaning": "Tracks / Mark / Print",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "あと"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "香",
    "meaning": "Incense / Smell / Perfume",
    "onyomi": [
      "こう",
      "きょう"
    ],
    "kunyomi": [
      "か",
      "かお.り",
      "かお.る"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "兆",
    "meaning": "Portent / 10**12 / Trillion",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "きざ.す",
      "きざ.し"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "齢",
    "meaning": "Age",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "よわい",
      "とし"
    ],
    "strokes": 17,
    "jlpt": "N2"
  },
  {
    "char": "刊",
    "meaning": "Publish / Carve / Engrave",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "傾",
    "meaning": "Lean / Incline / Tilt",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "かたむ.く",
      "かたむ.ける",
      "かたぶ.く",
      "かた.げる",
      "かし.げる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "奥",
    "meaning": "Heart / Interior",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "おく",
      "おく.まる",
      "くま"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "贈",
    "meaning": "Presents / Send / Give To",
    "onyomi": [
      "ぞう",
      "そう"
    ],
    "kunyomi": [
      "おく.る"
    ],
    "strokes": 18,
    "jlpt": "N2"
  },
  {
    "char": "超",
    "meaning": "Transcend / Super- / Ultra-",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "こ.える",
      "こ.す"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "雇",
    "meaning": "Employ / Hire",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "やと.う"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "片",
    "meaning": "One-sided / Leaf / Sheet",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "かた-",
      "かた"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "群",
    "meaning": "Flock / Group / Crowd",
    "onyomi": [
      "ぐん"
    ],
    "kunyomi": [
      "む.れる",
      "む.れ",
      "むら",
      "むら.がる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "埋",
    "meaning": "Bury / Be Filled Up / Embedded",
    "onyomi": [
      "まい"
    ],
    "kunyomi": [
      "う.める",
      "う.まる",
      "う.もれる",
      "うず.める",
      "うず.まる",
      "い.ける"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "駐",
    "meaning": "Stop-over / Reside In / Resident",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "柱",
    "meaning": "Pillar / Post / Cylinder",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "はしら"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "鋭",
    "meaning": "Pointed / Sharpness / Edge",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "するど.い"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "殿",
    "meaning": "Mr. / Hall / Mansion",
    "onyomi": [
      "でん",
      "てん"
    ],
    "kunyomi": [
      "との",
      "-どの"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "薄",
    "meaning": "Dilute / Thin / Weak (tea)",
    "onyomi": [
      "はく"
    ],
    "kunyomi": [
      "うす.い",
      "うす-",
      "-うす",
      "うす.める",
      "うす.まる",
      "うす.らぐ",
      "うす.ら-",
      "うす.れる",
      "すすき"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "伺",
    "meaning": "Pay Respects / Visit / Ask",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "うかが.う"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "炭",
    "meaning": "Charcoal / Coal",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "すみ"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "包",
    "meaning": "Wrap / Pack Up / Cover",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "つつ.む",
      "くる.む"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "衣",
    "meaning": "Garment / Clothes / Dressing",
    "onyomi": [
      "い",
      "え"
    ],
    "kunyomi": [
      "ころも",
      "きぬ",
      "-ぎ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "鉱",
    "meaning": "Mineral / Ore",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "あらがね"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "双",
    "meaning": "Pair / Set / Comparison",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "ふた",
      "たぐい",
      "ならぶ",
      "ふたつ"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "床",
    "meaning": "Bed / Counter For Beds / Floor",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "とこ",
      "ゆか"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "掘",
    "meaning": "Dig / Delve / Excavate",
    "onyomi": [
      "くつ"
    ],
    "kunyomi": [
      "ほ.る"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "泊",
    "meaning": "Overnight Stay / Put Up At / Ride At Anchor",
    "onyomi": [
      "はく"
    ],
    "kunyomi": [
      "と.まる",
      "と.める"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "荒",
    "meaning": "Laid Waste / Rough / Rude",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "あら.い",
      "あら-",
      "あ.れる",
      "あ.らす",
      "-あ.らし",
      "すさ.む"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "袋",
    "meaning": "Sack / Bag / Pouch",
    "onyomi": [
      "たい",
      "だい"
    ],
    "kunyomi": [
      "ふくろ"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "珍",
    "meaning": "Rare / Curious / Strange",
    "onyomi": [
      "ちん"
    ],
    "kunyomi": [
      "めずら.しい",
      "たから"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "籍",
    "meaning": "Enroll / Domiciliary Register / Membership",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [],
    "strokes": 20,
    "jlpt": "N2"
  },
  {
    "char": "刷",
    "meaning": "Printing / Print / Brush",
    "onyomi": [
      "さつ"
    ],
    "kunyomi": [
      "す.る",
      "-ず.り",
      "-ずり",
      "は.く"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "封",
    "meaning": "Seal / Closing",
    "onyomi": [
      "ふう",
      "ほう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "筒",
    "meaning": "Cylinder / Pipe / Tube",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "つつ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "柔",
    "meaning": "Tender / Weakness / Gentleness",
    "onyomi": [
      "じゅう",
      "にゅう"
    ],
    "kunyomi": [
      "やわ.らか",
      "やわ.らかい",
      "やわ",
      "やわ.ら"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "沈",
    "meaning": "Sink / Be Submerged / Subside",
    "onyomi": [
      "ちん",
      "じん"
    ],
    "kunyomi": [
      "しず.む",
      "しず.める"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "辛",
    "meaning": "Spicy / Bitter / Hot",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "から.い",
      "つら.い",
      "-づら.い",
      "かのと"
    ],
    "strokes": 7,
    "jlpt": "N2"
  },
  {
    "char": "匹",
    "meaning": "Equal / Head / Counter For Small Animals",
    "onyomi": [
      "ひつ"
    ],
    "kunyomi": [
      "ひき"
    ],
    "strokes": 4,
    "jlpt": "N2"
  },
  {
    "char": "叫",
    "meaning": "Shout / Exclaim / Yell",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "さけ.ぶ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "涙",
    "meaning": "Tears / Sympathy",
    "onyomi": [
      "るい",
      "れい"
    ],
    "kunyomi": [
      "なみだ"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "缶",
    "meaning": "Tin Can / Container / Jar Radical (no. 121)",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "かま"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "粒",
    "meaning": "Grains / Drop / Counter For Tiny Particles",
    "onyomi": [
      "りゅう"
    ],
    "kunyomi": [
      "つぶ"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "塔",
    "meaning": "Pagoda / Tower / Steeple",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "肌",
    "meaning": "Texture / Skin / Body",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "はだ"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "舟",
    "meaning": "Boat / Ship",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "ふね",
      "ふな-",
      "-ぶね"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "曇",
    "meaning": "Cloudy Weather / Cloud Up",
    "onyomi": [
      "どん"
    ],
    "kunyomi": [
      "くも.る"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "磨",
    "meaning": "Grind / Polish / Scour",
    "onyomi": [
      "ま"
    ],
    "kunyomi": [
      "みが.く",
      "す.る"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "湿",
    "meaning": "Damp / Wet / Moist",
    "onyomi": [
      "しつ",
      "しゅう"
    ],
    "kunyomi": [
      "しめ.る",
      "しめ.す",
      "うるお.う",
      "うるお.す"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "硬",
    "meaning": "Stiff / Hard",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "かた.い"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "鈍",
    "meaning": "Dull / Slow / Foolish",
    "onyomi": [
      "どん"
    ],
    "kunyomi": [
      "にぶ.い",
      "にぶ.る",
      "にぶ-",
      "なま.る",
      "なまく.ら"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "涼",
    "meaning": "Refreshing / Nice And Cool",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "すず.しい",
      "すず.む",
      "すず.やか",
      "うす.い",
      "ひや.す",
      "まことに"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "零",
    "meaning": "Zero / Spill / Overflow",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "ぜろ",
      "こぼ.す",
      "こぼ.れる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "綿",
    "meaning": "Cotton",
    "onyomi": [
      "めん"
    ],
    "kunyomi": [
      "わた"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "帽",
    "meaning": "Cap / Headgear",
    "onyomi": [
      "ぼう",
      "もう"
    ],
    "kunyomi": [
      "ずきん",
      "おお.う"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "憎",
    "meaning": "Hate / Detest",
    "onyomi": [
      "ぞう"
    ],
    "kunyomi": [
      "にく.む",
      "にく.い",
      "にく.らしい",
      "にく.しみ"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "滴",
    "meaning": "Drip / Drop",
    "onyomi": [
      "てき"
    ],
    "kunyomi": [
      "しずく",
      "したた.る"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "畳",
    "meaning": "Tatami Mat / Counter For Tatami Mats / Fold",
    "onyomi": [
      "じょう",
      "ちょう"
    ],
    "kunyomi": [
      "たた.む",
      "たたみ",
      "かさ.なる"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "畜",
    "meaning": "Livestock / Domestic Fowl And Animals",
    "onyomi": [
      "ちく"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "溶",
    "meaning": "Melt / Dissolve / Thaw",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "と.ける",
      "と.かす",
      "と.く"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "踊",
    "meaning": "Jump / Dance / Leap",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "おど.る"
    ],
    "strokes": 14,
    "jlpt": "N2"
  },
  {
    "char": "賢",
    "meaning": "Intelligent / Wise / Wisdom",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "かしこ.い"
    ],
    "strokes": 16,
    "jlpt": "N2"
  },
  {
    "char": "灯",
    "meaning": "Lamp / A Light / Light",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ひ",
      "ほ-",
      "ともしび",
      "とも.す",
      "あかり"
    ],
    "strokes": 6,
    "jlpt": "N2"
  },
  {
    "char": "咲",
    "meaning": "Blossom / Bloom",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "さ.く",
      "-ざき"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "塗",
    "meaning": "Paint / Plaster / Daub",
    "onyomi": [
      "と"
    ],
    "kunyomi": [
      "ぬ.る",
      "ぬ.り",
      "まみ.れる"
    ],
    "strokes": 13,
    "jlpt": "N2"
  },
  {
    "char": "召",
    "meaning": "Seduce / Call / Send For",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "め.す"
    ],
    "strokes": 5,
    "jlpt": "N2"
  },
  {
    "char": "挟",
    "meaning": "Pinch / Between",
    "onyomi": [
      "きょう",
      "しょう"
    ],
    "kunyomi": [
      "はさ.む",
      "はさ.まる",
      "わきばさ.む",
      "さしはさ.む"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "枯",
    "meaning": "Wither / Die / Dry Up",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "か.れる",
      "か.らす"
    ],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "沸",
    "meaning": "Seethe / Boil / Ferment",
    "onyomi": [
      "ふつ"
    ],
    "kunyomi": [
      "わ.く",
      "わ.かす"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "濯",
    "meaning": "Laundry / Wash / Pour On",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [
      "すす.ぐ",
      "ゆす.ぐ"
    ],
    "strokes": 17,
    "jlpt": "N2"
  },
  {
    "char": "燥",
    "meaning": "Parch / Dry Up",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "はしゃ.ぐ"
    ],
    "strokes": 17,
    "jlpt": "N2"
  },
  {
    "char": "瓶",
    "meaning": "Bottle / Vial / Jar",
    "onyomi": [
      "びん"
    ],
    "kunyomi": [
      "かめ"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "耕",
    "meaning": "Till / Plow / Cultivate",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "たがや.す"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "肯",
    "meaning": "Agreement / Consent / Comply With",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "がえんじ.る"
    ],
    "strokes": 8,
    "jlpt": "N2"
  },
  {
    "char": "脂",
    "meaning": "Fat / Grease / Tallow",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "あぶら"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "膚",
    "meaning": "Skin / Body / Grain",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "はだ"
    ],
    "strokes": 15,
    "jlpt": "N2"
  },
  {
    "char": "軒",
    "meaning": "Flats / Counter For Houses / Eaves",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "のき"
    ],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "軟",
    "meaning": "Soft",
    "onyomi": [
      "なん"
    ],
    "kunyomi": [
      "やわ.らか",
      "やわ.らかい"
    ],
    "strokes": 11,
    "jlpt": "N2"
  },
  {
    "char": "郊",
    "meaning": "Outskirts / Suburbs / Rural Area",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N2"
  },
  {
    "char": "隅",
    "meaning": "Corner / Nook",
    "onyomi": [
      "ぐう"
    ],
    "kunyomi": [
      "すみ"
    ],
    "strokes": 12,
    "jlpt": "N2"
  },
  {
    "char": "隻",
    "meaning": "Vessels / Counter For Ships / Fish",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N2"
  },
  {
    "char": "刀",
    "meaning": "Sword / Saber / Knife",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "かたな",
      "そり"
    ],
    "strokes": 2,
    "jlpt": "N1"
  },
  {
    "char": "丁",
    "meaning": "Street / Ward / Town",
    "onyomi": [
      "ちょう",
      "てい",
      "ちん",
      "とう",
      "ち"
    ],
    "kunyomi": [
      "ひのと"
    ],
    "strokes": 2,
    "jlpt": "N1"
  },
  {
    "char": "又",
    "meaning": "Or Again / Furthermore / On The Other Hand",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "また",
      "また-",
      "また.の-"
    ],
    "strokes": 2,
    "jlpt": "N1"
  },
  {
    "char": "矢",
    "meaning": "Dart / Arrow",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "や"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "羊",
    "meaning": "Sheep",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "ひつじ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "氏",
    "meaning": "Family Name / Surname / Clan",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "うじ",
      "-うじ"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "仮",
    "meaning": "Sham / Temporary / Interim",
    "onyomi": [
      "か",
      "け"
    ],
    "kunyomi": [
      "かり",
      "かり-"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "級",
    "meaning": "Class / Rank / Grade",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "功",
    "meaning": "Achievement / Merits / Success",
    "onyomi": [
      "こう",
      "く"
    ],
    "kunyomi": [
      "いさお"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "第",
    "meaning": "No. / Residence",
    "onyomi": [
      "だい",
      "てい"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "暑",
    "meaning": "Sultry / Hot / Summer Heat",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "整",
    "meaning": "Organize / Arranging / Tune",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [
      "ととの.える",
      "ととの.う"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "詩",
    "meaning": "Poem / Poetry",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "うた"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "器",
    "meaning": "Utensil / Vessel / Receptacle",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "うつわ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "士",
    "meaning": "Gentleman / Scholar / Samurai",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "さむらい"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "標",
    "meaning": "Signpost / Seal / Mark",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [
      "しるべ",
      "しるし"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "鏡",
    "meaning": "Mirror / Speculum / Barrel-head",
    "onyomi": [
      "きょう",
      "けい"
    ],
    "kunyomi": [
      "かがみ"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "養",
    "meaning": "Foster / Bring Up / Rear",
    "onyomi": [
      "よう",
      "りょう"
    ],
    "kunyomi": [
      "やしな.う"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "謝",
    "meaning": "Apologize / Thank / Refuse",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "あやま.る"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "松",
    "meaning": "Pine Tree",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "まつ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "基",
    "meaning": "Fundamentals / Radical (chem) / Counter For Machines",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "もと",
      "もとい"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "妥",
    "meaning": "Gentle / Peace / Depravity",
    "onyomi": [
      "だ"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "雰",
    "meaning": "Atmosphere / Fog",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "頑",
    "meaning": "Stubborn / Foolish / Firmly",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "かたく"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "司",
    "meaning": "Director / Official / Govt Office",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "つかさど.る"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "泣",
    "meaning": "Cry / Weep / Moan",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "な.く"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "紀",
    "meaning": "Chronicle / Account / Narrative",
    "onyomi": [
      "き"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "典",
    "meaning": "Code / Ceremony / Law",
    "onyomi": [
      "てん",
      "でん"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "保",
    "meaning": "Protect / Guarantee / Keep",
    "onyomi": [
      "ほ",
      "ほう"
    ],
    "kunyomi": [
      "たも.つ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "弁",
    "meaning": "Valve / Petal / Braid",
    "onyomi": [
      "べん",
      "へん"
    ],
    "kunyomi": [
      "かんむり",
      "わきま.える",
      "わ.ける",
      "はなびら",
      "あらそ.う"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "証",
    "meaning": "Evidence / Proof / Certificate",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "あかし"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "冒",
    "meaning": "Risk / Face / Defy",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "おか.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "冗",
    "meaning": "Superfluous / Uselessness",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "梅",
    "meaning": "Plum",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "うめ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "結",
    "meaning": "Tie / Bind / Contract",
    "onyomi": [
      "けつ",
      "けち"
    ],
    "kunyomi": [
      "むす.ぶ",
      "ゆ.う",
      "ゆ.わえる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "是",
    "meaning": "Just So / This / Right",
    "onyomi": [
      "ぜ",
      "し"
    ],
    "kunyomi": [
      "これ",
      "この",
      "ここ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "渉",
    "meaning": "Ford / Go Cross / Transit",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "わた.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "虚",
    "meaning": "Void / Emptiness / Unpreparedness",
    "onyomi": [
      "きょ",
      "こ"
    ],
    "kunyomi": [
      "むな.しい",
      "うつ.ろ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "幻",
    "meaning": "Phantasm / Vision / Dream",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "まぼろし"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "弓",
    "meaning": "Bow / Bow (archery, Violin)",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "ゆみ"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "汽",
    "meaning": "Vapor / Steam",
    "onyomi": [
      "き"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "僧",
    "meaning": "Buddhist Priest / Monk",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "禅",
    "meaning": "Zen / Silent Meditation",
    "onyomi": [
      "ぜん",
      "せん"
    ],
    "kunyomi": [
      "しずか",
      "ゆず.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "句",
    "meaning": "Phrase / Clause / Sentence",
    "onyomi": [
      "く"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "節",
    "meaning": "Node / Season / Period",
    "onyomi": [
      "せつ",
      "せち"
    ],
    "kunyomi": [
      "ふし",
      "-ぶし",
      "のっと"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "昆",
    "meaning": "Descendants / Elder Brother / Insect",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "閥",
    "meaning": "Clique / Lineage / Pedigree",
    "onyomi": [
      "ばつ"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "舌",
    "meaning": "Tongue / Reed / Clapper",
    "onyomi": [
      "ぜつ"
    ],
    "kunyomi": [
      "した"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "宙",
    "meaning": "Mid-air / Air / Space",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "履",
    "meaning": "Perform / Complete / Footgear",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "は.く"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "善",
    "meaning": "Virtuous / Good / Goodness",
    "onyomi": [
      "ぜん"
    ],
    "kunyomi": [
      "よ.い",
      "い.い",
      "よ.く",
      "よし.とする"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "災",
    "meaning": "Disaster / Calamity / Woe",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "わざわ.い"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "率",
    "meaning": "Ratio / Rate / Proportion",
    "onyomi": [
      "そつ",
      "りつ",
      "しゅつ"
    ],
    "kunyomi": [
      "ひき.いる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "妨",
    "meaning": "Disturb / Prevent / Hamper",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "さまた.げる"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "裕",
    "meaning": "Abundant / Rich / Fertile",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "尾",
    "meaning": "Tail / End / Counter For Fish",
    "onyomi": [
      "び"
    ],
    "kunyomi": [
      "お"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "嫌",
    "meaning": "Dislike / Detest / Hate",
    "onyomi": [
      "けん",
      "げん"
    ],
    "kunyomi": [
      "きら.う",
      "きら.い",
      "いや"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "臭",
    "meaning": "Stinking / Ill-smelling / Suspicious Looking",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "くさ.い",
      "-くさ.い",
      "にお.う",
      "にお.い"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "穴",
    "meaning": "Hole / Aperture / Slit",
    "onyomi": [
      "けつ"
    ],
    "kunyomi": [
      "あな"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "笛",
    "meaning": "Flute / Clarinet / Pipe",
    "onyomi": [
      "てき"
    ],
    "kunyomi": [
      "ふえ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "敵",
    "meaning": "Enemy / Foe / Opponent",
    "onyomi": [
      "てき"
    ],
    "kunyomi": [
      "かたき",
      "あだ",
      "かな.う"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "挙",
    "meaning": "Raise / Plan / Project",
    "onyomi": [
      "きょ"
    ],
    "kunyomi": [
      "あ.げる",
      "あ.がる",
      "こぞ.る"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "派",
    "meaning": "Faction / Group / Party",
    "onyomi": [
      "は"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "素",
    "meaning": "Elementary / Principle / Naked",
    "onyomi": [
      "そ",
      "す"
    ],
    "kunyomi": [
      "もと"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "評",
    "meaning": "Evaluate / Criticism / Comment",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "批",
    "meaning": "Criticism / Strike",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "検",
    "meaning": "Examination / Investigate",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "しら.べる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "審",
    "meaning": "Hearing / Judge / Trial",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "つまび.らか",
      "つぶさ.に"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "条",
    "meaning": "Article / Clause / Item",
    "onyomi": [
      "じょう",
      "ちょう",
      "でき"
    ],
    "kunyomi": [
      "えだ",
      "すじ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "企",
    "meaning": "Undertake / Scheme / Design",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "くわだ.てる",
      "たくら.む"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "義",
    "meaning": "Righteousness / Justice / Morality",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "罰",
    "meaning": "Penalty / Punishment",
    "onyomi": [
      "ばつ",
      "ばち",
      "はつ"
    ],
    "kunyomi": [
      "ばっ.する"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "誕",
    "meaning": "Nativity / Be Born / Declension",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "脱",
    "meaning": "Undress / Removing / Escape From",
    "onyomi": [
      "だつ"
    ],
    "kunyomi": [
      "ぬ.ぐ",
      "ぬ.げる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "宮",
    "meaning": "Shinto Shrine / Constellations / Palace",
    "onyomi": [
      "きゅう",
      "ぐう",
      "く",
      "くう"
    ],
    "kunyomi": [
      "みや"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "案",
    "meaning": "Plan / Suggestion / Draft",
    "onyomi": [
      "あん"
    ],
    "kunyomi": [
      "つくえ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "価",
    "meaning": "Value / Price",
    "onyomi": [
      "か",
      "け"
    ],
    "kunyomi": [
      "あたい"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "統",
    "meaning": "Overall / Relationship / Ruling",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "す.べる",
      "ほび.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "策",
    "meaning": "Scheme / Plan / Policy",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "藤",
    "meaning": "Wisteria",
    "onyomi": [
      "とう",
      "どう"
    ],
    "kunyomi": [
      "ふじ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "姿",
    "meaning": "Figure / Form / Shape",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "すがた"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "応",
    "meaning": "Apply / Answer / Yes",
    "onyomi": [
      "おう",
      "よう",
      "-のう"
    ],
    "kunyomi": [
      "あた.る",
      "まさに",
      "こた.える"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "提",
    "meaning": "Propose / Take Along / Carry In Hand",
    "onyomi": [
      "てい",
      "ちょう",
      "だい"
    ],
    "kunyomi": [
      "さ.げる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "援",
    "meaning": "Abet / Help / Save",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "態",
    "meaning": "Attitude / Condition / Figure",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "わざ.と"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "賀",
    "meaning": "Congratulations / Joy",
    "onyomi": [
      "が"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "鬼",
    "meaning": "Ghost / Devil",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "おに",
      "おに-"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "護",
    "meaning": "Safeguard / Protect",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "まも.る"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "裁",
    "meaning": "Tailor / Judge / Decision",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "た.つ",
      "さば.く"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "崎",
    "meaning": "Promontory / Cape / Spit",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "さき",
      "さい",
      "みさき"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "看",
    "meaning": "Watch Over / See",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "み.る"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "幹",
    "meaning": "Tree Trunk / Main Part / Talent",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "みき"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "張",
    "meaning": "Lengthen / Counter For Bows & Stringed Instruments / Stretch",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "は.る",
      "-は.り",
      "-ば.り"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "沢",
    "meaning": "Swamp / Marsh / Brilliance",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [
      "さわ",
      "うるお.い",
      "うるお.す",
      "つや"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "施",
    "meaning": "Give / Bestow / Perform",
    "onyomi": [
      "し",
      "せ"
    ],
    "kunyomi": [
      "ほどこ.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "俳",
    "meaning": "Haiku / Actor",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "秀",
    "meaning": "Excel / Excellence / Beauty",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "ひい.でる"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "製",
    "meaning": "Made In... / Manufacture",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "狭",
    "meaning": "Cramped / Narrow / Contract",
    "onyomi": [
      "きょう",
      "こう"
    ],
    "kunyomi": [
      "せま.い",
      "せば.める",
      "せば.まる",
      "さ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "載",
    "meaning": "Ride / Board / Get On",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "の.せる",
      "の.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "視",
    "meaning": "Inspection / Regard As / See",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "み.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "環",
    "meaning": "Ring / Circle / Link",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "わ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "展",
    "meaning": "Unfold / Expand",
    "onyomi": [
      "てん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "株",
    "meaning": "Stocks / Stump / Shares",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "かぶ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "影",
    "meaning": "Shadow / Silhouette / Phantom",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "かげ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "響",
    "meaning": "Echo / Sound / Resound",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "ひび.く"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "票",
    "meaning": "Ballot / Label / Ticket",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "訴",
    "meaning": "Accusation / Sue / Complain Of Pain",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "うった.える"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "訟",
    "meaning": "Sue / Accuse",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "逮",
    "meaning": "Apprehend / Chase",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "模",
    "meaning": "Imitation / Copy / Mock",
    "onyomi": [
      "も",
      "ぼ"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "鮮",
    "meaning": "Fresh / Vivid / Clear",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "あざ.やか"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "属",
    "meaning": "Belong / Genus / Subordinate Official",
    "onyomi": [
      "ぞく",
      "しょく"
    ],
    "kunyomi": [
      "さかん",
      "つく",
      "やから"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "肥",
    "meaning": "Fertilizer / Get Fat / Fertile",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "こ.える",
      "こえ",
      "こ.やす",
      "こ.やし",
      "ふと.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "絞",
    "meaning": "Strangle / Constrict / Wring",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "しぼ.る",
      "し.める",
      "し.まる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "輩",
    "meaning": "Comrade / Fellow / People",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "-ばら",
      "やから",
      "やかい",
      "ともがら"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "隠",
    "meaning": "Conceal / Hide / Cover",
    "onyomi": [
      "いん",
      "おん"
    ],
    "kunyomi": [
      "かく.す",
      "かく.し",
      "かく.れる",
      "かか.す",
      "よ.る"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "授",
    "meaning": "Impart / Instruct / Grant",
    "onyomi": [
      "じゅ"
    ],
    "kunyomi": [
      "さず.ける",
      "さず.かる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "創",
    "meaning": "Genesis / Wound / Injury",
    "onyomi": [
      "そう",
      "しょう"
    ],
    "kunyomi": [
      "つく.る",
      "はじ.める",
      "きず",
      "けず.しける"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "往",
    "meaning": "Journey / Travel / Chase Away",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "い.く",
      "いにしえ",
      "さき.に",
      "ゆ.く"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "較",
    "meaning": "Contrast / Compare",
    "onyomi": [
      "かく",
      "こう"
    ],
    "kunyomi": [
      "くら.べる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "鉛",
    "meaning": "Lead",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "なまり"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "故",
    "meaning": "Happenstance / Especially / Intentionally",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "ゆえ",
      "ふる.い",
      "もと"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "障",
    "meaning": "Hinder / Hurt / Harm",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "さわ.る"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "従",
    "meaning": "Accompany / Obey / Submit To",
    "onyomi": [
      "じゅう",
      "しょう",
      "じゅ"
    ],
    "kunyomi": [
      "したが.う",
      "したが.える",
      "より"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "我",
    "meaning": "Ego / I / Selfish",
    "onyomi": [
      "が"
    ],
    "kunyomi": [
      "われ",
      "わ",
      "わ.が-",
      "わが-"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "激",
    "meaning": "Violent / Get Excited / Enraged",
    "onyomi": [
      "げき"
    ],
    "kunyomi": [
      "はげ.しい"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "励",
    "meaning": "Encourage / Be Diligent / Inspire",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "はげ.む",
      "はげ.ます"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "討",
    "meaning": "Chastise / Attack / Defeat",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "う.つ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "徴",
    "meaning": "Indications / Sign / Omen",
    "onyomi": [
      "ちょう",
      "ち"
    ],
    "kunyomi": [
      "しるし"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "怪",
    "meaning": "Suspicious / Mystery / Apparition",
    "onyomi": [
      "かい",
      "け"
    ],
    "kunyomi": [
      "あや.しい",
      "あや.しむ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "獣",
    "meaning": "Animal / Beast",
    "onyomi": [
      "じゅう"
    ],
    "kunyomi": [
      "けもの",
      "けだもの"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "振",
    "meaning": "Shake / Wave / Wag",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "ふ.る",
      "ぶ.る",
      "ふ.り",
      "-ぶ.り",
      "ふ.るう"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "豚",
    "meaning": "Pork / Pig",
    "onyomi": [
      "とん"
    ],
    "kunyomi": [
      "ぶた"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "独",
    "meaning": "Single / Alone / Spontaneously",
    "onyomi": [
      "どく",
      "とく"
    ],
    "kunyomi": [
      "ひと.り"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "屈",
    "meaning": "Yield / Bend / Flinch",
    "onyomi": [
      "くつ"
    ],
    "kunyomi": [
      "かが.む",
      "かが.める"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "暇",
    "meaning": "Spare Time / Rest / Leisure",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "ひま",
      "いとま"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "織",
    "meaning": "Weave / Fabric",
    "onyomi": [
      "しょく",
      "しき"
    ],
    "kunyomi": [
      "お.る",
      "お.り",
      "おり",
      "-おり",
      "-お.り"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "惑",
    "meaning": "Beguile / Delusion / Perplexity",
    "onyomi": [
      "わく"
    ],
    "kunyomi": [
      "まど.う"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "誘",
    "meaning": "Entice / Lead / Tempt",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "さそ.う",
      "いざな.う"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "就",
    "meaning": "Concerning / Settle / Take Position",
    "onyomi": [
      "しゅう",
      "じゅ"
    ],
    "kunyomi": [
      "つ.く",
      "つ.ける"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "睡",
    "meaning": "Drowsy / Sleep / Die",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "ねむ.る",
      "ねむ.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "症",
    "meaning": "Symptoms / Illness",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "締",
    "meaning": "Tighten / Tie / Shut",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "し.まる",
      "し.まり",
      "し.める",
      "-し.め",
      "-じ.め"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "迫",
    "meaning": "Urge / Force / Imminent",
    "onyomi": [
      "はく"
    ],
    "kunyomi": [
      "せま.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "端",
    "meaning": "Edge / Origin / End",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "はし",
      "は",
      "はた",
      "-ばた",
      "はな"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "健",
    "meaning": "Healthy / Health / Strength",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "すこ.やか"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "康",
    "meaning": "Ease / Peace",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "郎",
    "meaning": "Son / Counter For Sons",
    "onyomi": [
      "ろう",
      "りょう"
    ],
    "kunyomi": [
      "おとこ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "稚",
    "meaning": "Immature / Young",
    "onyomi": [
      "ち",
      "じ"
    ],
    "kunyomi": [
      "いとけない",
      "おさない",
      "おくて",
      "おでる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "博",
    "meaning": "Dr. / Command / Esteem",
    "onyomi": [
      "はく",
      "ばく"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "潔",
    "meaning": "Undefiled / Pure / Clean",
    "onyomi": [
      "けつ"
    ],
    "kunyomi": [
      "いさぎよ.い"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "隊",
    "meaning": "Regiment / Party / Company",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "修",
    "meaning": "Discipline / Conduct Oneself Well / Study",
    "onyomi": [
      "しゅう",
      "しゅ"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "奇",
    "meaning": "Strange / Strangeness / Curiosity",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "く.しき",
      "あや.しい",
      "くし",
      "めずら.しい"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "妙",
    "meaning": "Exquisite / Strange / Queer",
    "onyomi": [
      "みょう",
      "びょう"
    ],
    "kunyomi": [
      "たえ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "麗",
    "meaning": "Lovely / Beautiful / Graceful",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "うるわ.しい",
      "うら.らか"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "微",
    "meaning": "Delicate / Minuteness / Insignificance",
    "onyomi": [
      "び"
    ],
    "kunyomi": [
      "かす.か"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "益",
    "meaning": "Benefit / Gain / Profit",
    "onyomi": [
      "えき",
      "やく"
    ],
    "kunyomi": [
      "ま.す"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "憲",
    "meaning": "Constitution / Law",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "衆",
    "meaning": "Masses / Great Numbers / Multitude",
    "onyomi": [
      "しゅう",
      "しゅ"
    ],
    "kunyomi": [
      "おお.い"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "傘",
    "meaning": "Umbrella",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "かさ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "浜",
    "meaning": "Seacoast / Beach / Seashore",
    "onyomi": [
      "ひん"
    ],
    "kunyomi": [
      "はま"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "撃",
    "meaning": "Beat / Attack / Defeat",
    "onyomi": [
      "げき"
    ],
    "kunyomi": [
      "う.つ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "攻",
    "meaning": "Aggression / Attack / Criticize",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "せ.める"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "監",
    "meaning": "Oversee / Official / Govt Office",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "催",
    "meaning": "Sponsor / Hold (a Meeting) / Give (a Dinner)",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "もよう.す",
      "もよお.す"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "促",
    "meaning": "Stimulate / Urge / Press",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "うなが.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "江",
    "meaning": "Creek / Inlet / Bay",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "え"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "請",
    "meaning": "Solicit / Invite / Ask",
    "onyomi": [
      "せい",
      "しん",
      "しょう"
    ],
    "kunyomi": [
      "こ.う",
      "う.ける"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "雄",
    "meaning": "Masculine / Male / Hero",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "お-",
      "おす",
      "おん"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "壊",
    "meaning": "Demolition / Break / Destroy",
    "onyomi": [
      "かい",
      "え"
    ],
    "kunyomi": [
      "こわ.す",
      "こわ.れる",
      "やぶ.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "診",
    "meaning": "Checkup / Seeing / Diagnose",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "み.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "閣",
    "meaning": "Tower / Tall Building / Palace",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "僚",
    "meaning": "Colleague / Official / Companion",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "督",
    "meaning": "Coach / Command / Urge",
    "onyomi": [
      "とく"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "街",
    "meaning": "Boulevard / Street / Town",
    "onyomi": [
      "がい",
      "かい"
    ],
    "kunyomi": [
      "まち"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "宗",
    "meaning": "Religion / Sect / Denomination",
    "onyomi": [
      "しゅう",
      "そう"
    ],
    "kunyomi": [
      "むね"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "緊",
    "meaning": "Tense / Solid / Hard",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "し.める",
      "し.まる"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "宴",
    "meaning": "Banquet / Feast / Party",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "うたげ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "添",
    "meaning": "Annexed / Accompany / Marry",
    "onyomi": [
      "てん"
    ],
    "kunyomi": [
      "そ.える",
      "そ.う"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "猛",
    "meaning": "Fierce / Rave / Rush",
    "onyomi": [
      "もう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "烈",
    "meaning": "Ardent / Violent / Vehement",
    "onyomi": [
      "れつ"
    ],
    "kunyomi": [
      "はげ.しい"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "索",
    "meaning": "Cord / Rope / Searching",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "詳",
    "meaning": "Detailed / Full / Minute",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "くわ.しい",
      "つまび.らか"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "魅",
    "meaning": "Fascination / Charm / Bewitch",
    "onyomi": [
      "み"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "渇",
    "meaning": "Thirst / Dry Up / Parch",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [
      "かわ.く"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "系",
    "meaning": "Lineage / System",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "旗",
    "meaning": "National Flag / Banner / Standard",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "はた"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "乏",
    "meaning": "Destitution / Scarce / Limited",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "とぼ.しい",
      "とも.しい"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "覧",
    "meaning": "Perusal / See",
    "onyomi": [
      "らん"
    ],
    "kunyomi": [
      "み.る"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "懐",
    "meaning": "Pocket / Feelings / Heart",
    "onyomi": [
      "かい",
      "え"
    ],
    "kunyomi": [
      "ふところ",
      "なつ.かしい",
      "なつ.かしむ",
      "なつ.く",
      "なつ.ける",
      "なず.ける",
      "いだ.く",
      "おも.う"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "漏",
    "meaning": "Leak / Escape / Time",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [
      "も.る",
      "も.れる",
      "も.らす"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "購",
    "meaning": "Subscription / Buy",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "飾",
    "meaning": "Decorate / Ornament / Adorn",
    "onyomi": [
      "しょく"
    ],
    "kunyomi": [
      "かざ.る",
      "かざ.り"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "騒",
    "meaning": "Boisterous / Make Noise / Clamor",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "さわ.ぐ",
      "うれい",
      "さわ.がしい"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "撮",
    "meaning": "Snapshot / Take Pictures",
    "onyomi": [
      "さつ"
    ],
    "kunyomi": [
      "と.る",
      "つま.む",
      "-ど.り"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "離",
    "meaning": "Detach / Separation / Disjoin",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "はな.れる",
      "はな.す"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "融",
    "meaning": "Dissolve / Melt",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "と.ける",
      "と.かす"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "華",
    "meaning": "Splendor / Flower / Petal",
    "onyomi": [
      "か",
      "け"
    ],
    "kunyomi": [
      "はな"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "既",
    "meaning": "Previously / Already / Long Ago",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "すで.に"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "豪",
    "meaning": "Overpowering / Great / Powerful",
    "onyomi": [
      "ごう"
    ],
    "kunyomi": [
      "えら.い"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "鑑",
    "meaning": "Specimen / Take Warning From / Learn From",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "かんが.みる",
      "かがみ"
    ],
    "strokes": 23,
    "jlpt": "N1"
  },
  {
    "char": "尋",
    "meaning": "Inquire / Fathom / Look For",
    "onyomi": [
      "じん"
    ],
    "kunyomi": [
      "たず.ねる",
      "ひろ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "廊",
    "meaning": "Corridor / Hall / Tower",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "驚",
    "meaning": "Wonder / Be Surprised / Frightened",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "おどろ.く",
      "おどろ.かす"
    ],
    "strokes": 22,
    "jlpt": "N1"
  },
  {
    "char": "嘆",
    "meaning": "Sigh / Lament / Moan",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "なげ.く",
      "なげ.かわしい"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "倉",
    "meaning": "Godown / Warehouse / Storehouse",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "くら"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "巣",
    "meaning": "Nest / Rookery / Hive",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "す",
      "す.くう"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "径",
    "meaning": "Diameter / Path / Method",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "みち",
      "こみち",
      "さしわたし",
      "ただちに"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "救",
    "meaning": "Salvation / Save / Help",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "すく.う"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "脈",
    "meaning": "Vein / Pulse / Hope",
    "onyomi": [
      "みゃく"
    ],
    "kunyomi": [
      "すじ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "墓",
    "meaning": "Grave / Tomb",
    "onyomi": [
      "ぼ"
    ],
    "kunyomi": [
      "はか"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "徳",
    "meaning": "Benevolence / Virtue / Goodness",
    "onyomi": [
      "とく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "偵",
    "meaning": "Spy",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "綺",
    "meaning": "Figured Cloth / Beautiful",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "あや"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "序",
    "meaning": "Preface / Beginning / Order",
    "onyomi": [
      "じょ"
    ],
    "kunyomi": [
      "つい.で",
      "ついで"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "志",
    "meaning": "Intention / Plan / Resolve",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "シリング",
      "こころざ.す",
      "こころざし"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "恩",
    "meaning": "Grace / Kindness / Goodness",
    "onyomi": [
      "おん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "桜",
    "meaning": "Cherry",
    "onyomi": [
      "おう",
      "よう"
    ],
    "kunyomi": [
      "さくら"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "眼",
    "meaning": "Eyeball",
    "onyomi": [
      "がん",
      "げん"
    ],
    "kunyomi": [
      "まなこ",
      "め"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "興",
    "meaning": "Entertain / Revive / Retrieve",
    "onyomi": [
      "こう",
      "きょう"
    ],
    "kunyomi": [
      "おこ.る",
      "おこ.す"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "衛",
    "meaning": "Defense / Protection",
    "onyomi": [
      "えい",
      "え"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "酸",
    "meaning": "Acid / Bitterness / Sour",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "す.い"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "銭",
    "meaning": "Coin / .01 Yen / Money",
    "onyomi": [
      "せん",
      "ぜん"
    ],
    "kunyomi": [
      "ぜに",
      "すき"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "飼",
    "meaning": "Domesticate / Raise / Keep",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "か.う"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "傷",
    "meaning": "Wound / Hurt / Injure",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "きず",
      "いた.む",
      "いた.める"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "厳",
    "meaning": "Stern / Strictness / Severity",
    "onyomi": [
      "げん",
      "ごん"
    ],
    "kunyomi": [
      "おごそ.か",
      "きび.しい",
      "いか.めしい",
      "いつくし"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "密",
    "meaning": "Secrecy / Density (pop) / Minuteness",
    "onyomi": [
      "みつ"
    ],
    "kunyomi": [
      "ひそ.か"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "暖",
    "meaning": "Warmth",
    "onyomi": [
      "だん",
      "のん"
    ],
    "kunyomi": [
      "あたた.か",
      "あたた.かい",
      "あたた.まる",
      "あたた.める"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "秘",
    "meaning": "Secret / Conceal",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "ひ.める",
      "ひそ.か",
      "かく.す"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "訳",
    "meaning": "Translate / Reason / Circumstance",
    "onyomi": [
      "やく"
    ],
    "kunyomi": [
      "わけ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "染",
    "meaning": "Dye / Color / Paint",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "そ.める",
      "-ぞ.め",
      "-ぞめ",
      "そ.まる",
      "し.みる",
      "-じ.みる",
      "し.み",
      "-し.める"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "筋",
    "meaning": "Muscle / Sinew / Tendon",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "すじ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "垂",
    "meaning": "Droop / Suspend / Hang",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "た.れる",
      "た.らす",
      "た.れ",
      "-た.れ",
      "なんなんと.す"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "宣",
    "meaning": "Proclaim / Say / Announce",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "のたま.う"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "忠",
    "meaning": "Loyalty / Fidelity / Faithfulness",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "拡",
    "meaning": "Broaden / Extend / Expand",
    "onyomi": [
      "かく",
      "こう"
    ],
    "kunyomi": [
      "ひろ.がる",
      "ひろ.げる",
      "ひろ.める"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "操",
    "meaning": "Maneuver / Manipulate / Operate",
    "onyomi": [
      "そう",
      "さん"
    ],
    "kunyomi": [
      "みさお",
      "あやつ.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "熟",
    "meaning": "Mellow / Ripen / Mature",
    "onyomi": [
      "じゅく"
    ],
    "kunyomi": [
      "う.れる"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "異",
    "meaning": "Uncommon / Different / Queerness",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "こと",
      "こと.なる",
      "け"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "皇",
    "meaning": "Emperor",
    "onyomi": [
      "こう",
      "おう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "盛",
    "meaning": "Boom / Prosper / Copulate",
    "onyomi": [
      "せい",
      "じょう"
    ],
    "kunyomi": [
      "も.る",
      "さか.る",
      "さか.ん"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "漠",
    "meaning": "Vague / Obscure / Desert",
    "onyomi": [
      "ばく"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "糖",
    "meaning": "Sugar",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "納",
    "meaning": "Settlement / Obtain / Reap",
    "onyomi": [
      "のう",
      "なっ",
      "な",
      "なん",
      "とう"
    ],
    "kunyomi": [
      "おさ.める",
      "-おさ.める",
      "おさ.まる"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "肺",
    "meaning": "Lungs",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "賃",
    "meaning": "Fare / Fee / Hire",
    "onyomi": [
      "ちん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "貴",
    "meaning": "Precious / Value / Prize",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "たっと.い",
      "とうと.い",
      "たっと.ぶ",
      "とうと.ぶ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "吐",
    "meaning": "Spit / Vomit / Belch",
    "onyomi": [
      "と"
    ],
    "kunyomi": [
      "は.く",
      "つ.く"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "奴",
    "meaning": "Guy / Slave / Manservant",
    "onyomi": [
      "ど"
    ],
    "kunyomi": [
      "やつ",
      "やっこ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "隷",
    "meaning": "Slave / Servant / Prisoner",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "したが.う",
      "しもべ"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "芋",
    "meaning": "Potato",
    "onyomi": [
      "う"
    ],
    "kunyomi": [
      "いも"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "縮",
    "meaning": "Shrink / Contract / Shrivel",
    "onyomi": [
      "しゅく"
    ],
    "kunyomi": [
      "ちぢ.む",
      "ちぢ.まる",
      "ちぢ.める",
      "ちぢ.れる",
      "ちぢ.らす"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "縦",
    "meaning": "Vertical / Length / Height",
    "onyomi": [
      "じゅう"
    ],
    "kunyomi": [
      "たて"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "粋",
    "meaning": "Chic / Style / Purity",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "いき"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "聖",
    "meaning": "Holy / Saint / Sage",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "ひじり"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "磁",
    "meaning": "Magnet / Porcelain",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "射",
    "meaning": "Shoot / Shine Into / Onto",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "い.る",
      "さ.す",
      "う.つ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "幕",
    "meaning": "Curtain / Bunting / Act Of Play",
    "onyomi": [
      "まく",
      "ばく"
    ],
    "kunyomi": [
      "とばり"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "薦",
    "meaning": "Recommend / Mat / Advise",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "すす.める"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "推",
    "meaning": "Conjecture / Infer / Guess",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "お.す"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "揮",
    "meaning": "Brandish / Wave / Wag",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "ふる.う"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "沿",
    "meaning": "Run Alongside / Follow Along / Run Along",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "そ.う",
      "-ぞ.い"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "源",
    "meaning": "Source / Origin",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "みなもと"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "歓",
    "meaning": "Delight / Joy",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "よろこ.ぶ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "豆",
    "meaning": "Beans / Pea / Midget",
    "onyomi": [
      "とう",
      "ず"
    ],
    "kunyomi": [
      "まめ",
      "まめ-"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "腐",
    "meaning": "Rot / Decay / Sour",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "くさ.る",
      "-くさ.る",
      "くさ.れる",
      "くさ.れ",
      "くさ.らす",
      "くさ.す"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "彫",
    "meaning": "Carve / Engrave / Chisel",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "ほ.る",
      "-ぼ.り"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "舎",
    "meaning": "Cottage / Inn / Hut",
    "onyomi": [
      "しゃ",
      "せき"
    ],
    "kunyomi": [
      "やど.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "滞",
    "meaning": "Stagnate / Be Delayed / Overdue",
    "onyomi": [
      "たい",
      "てい"
    ],
    "kunyomi": [
      "とどこお.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "己",
    "meaning": "Self",
    "onyomi": [
      "こ",
      "き"
    ],
    "kunyomi": [
      "おのれ",
      "つちのと",
      "な"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "厄",
    "meaning": "Unlucky / Misfortune / Bad Luck",
    "onyomi": [
      "やく"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "亀",
    "meaning": "Tortoise / Turtle",
    "onyomi": [
      "き",
      "きゅう",
      "きん"
    ],
    "kunyomi": [
      "かめ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "剣",
    "meaning": "Sabre / Sword / Blade",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "つるぎ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "杉",
    "meaning": "Cedar / Cryptomeria",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "すぎ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "汁",
    "meaning": "Soup / Juice / Broth",
    "onyomi": [
      "じゅう"
    ],
    "kunyomi": [
      "しる",
      "-しる",
      "つゆ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "炎",
    "meaning": "Inflammation / Flame / Blaze",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "ほのお"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "為",
    "meaning": "Do / Change / Make",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "ため",
      "な.る",
      "な.す",
      "す.る",
      "たり",
      "つく.る",
      "なり"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "熊",
    "meaning": "Bear",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "くま"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "獄",
    "meaning": "Prison / Jail",
    "onyomi": [
      "ごく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "酔",
    "meaning": "Drunk / Feel Sick / Poisoned",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "よ.う",
      "よ.い",
      "よ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "酢",
    "meaning": "Vinegar / Sour / Acid",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [
      "す"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "盟",
    "meaning": "Alliance / Oath",
    "onyomi": [
      "めい"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "遺",
    "meaning": "Bequeath / Leave Behind / Reserve",
    "onyomi": [
      "い",
      "ゆい"
    ],
    "kunyomi": [
      "のこ.す"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "債",
    "meaning": "Bond / Loan / Debt",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "及",
    "meaning": "Reach Out / Exert / Exercise",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "およ.ぶ",
      "およ.び",
      "および",
      "およ.ぼす"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "奈",
    "meaning": "Nara / What?",
    "onyomi": [
      "な",
      "ない",
      "だい"
    ],
    "kunyomi": [
      "いかん",
      "からなし"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "廃",
    "meaning": "Abolish / Obsolete / Cessation",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [
      "すた.れる",
      "すた.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "摘",
    "meaning": "Pinch / Pick / Pluck",
    "onyomi": [
      "てき"
    ],
    "kunyomi": [
      "つ.む"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "核",
    "meaning": "Nucleus / Core / Kernel",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "沖",
    "meaning": "Open Sea / Offing / Rise High Into Sky",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "おき",
      "おきつ",
      "ちゅう.する",
      "わく"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "縄",
    "meaning": "Straw Rope / Cord",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "なわ",
      "ただ.す"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "津",
    "meaning": "Haven / Port / Harbor",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "つ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "献",
    "meaning": "Offering / Counter For Drinks / Present",
    "onyomi": [
      "けん",
      "こん"
    ],
    "kunyomi": [
      "たてまつ.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "継",
    "meaning": "Inherit / Succeed / Continue",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "つ.ぐ",
      "まま-"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "維",
    "meaning": "Fiber / Tie / Rope",
    "onyomi": [
      "い"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "伎",
    "meaning": "Deed / Skill",
    "onyomi": [
      "ぎ",
      "き"
    ],
    "kunyomi": [
      "わざ",
      "わざおぎ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "踏",
    "meaning": "Step / Trample / Carry Through",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "ふ.む",
      "ふ.まえる"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "鹿",
    "meaning": "Deer",
    "onyomi": [
      "ろく"
    ],
    "kunyomi": [
      "しか",
      "か"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "諾",
    "meaning": "Consent / Assent / Agreement",
    "onyomi": [
      "だく"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "跳",
    "meaning": "Hop / Leap Up / Spring",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "は.ねる",
      "と.ぶ",
      "-と.び"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "昭",
    "meaning": "Shining / Bright",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "償",
    "meaning": "Reparation / Make Up For / Recompense",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "つぐな.う"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "刑",
    "meaning": "Punish / Penalty / Sentence",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "執",
    "meaning": "Tenacious / Take Hold / Grasp",
    "onyomi": [
      "しつ",
      "しゅう"
    ],
    "kunyomi": [
      "と.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "塁",
    "meaning": "Bases / Fort / Rampart",
    "onyomi": [
      "るい",
      "らい",
      "すい"
    ],
    "kunyomi": [
      "とりで"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "崩",
    "meaning": "Crumble / Die / Demolish",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "くず.れる",
      "-くず.れ",
      "くず.す"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "抗",
    "meaning": "Confront / Resist / Defy",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "あらが.う"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "抵",
    "meaning": "Resist / Reach / Touch",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "旬",
    "meaning": "Decameron / Ten-day Period / Season (for Specific Products)",
    "onyomi": [
      "じゅん",
      "しゅん"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "弾",
    "meaning": "Bullet / Twang / Flip",
    "onyomi": [
      "だん",
      "たん"
    ],
    "kunyomi": [
      "ひ.く",
      "-ひ.き",
      "はず.む",
      "たま",
      "はじ.く",
      "はじ.ける",
      "ただ.す",
      "はじ.きゆみ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "聴",
    "meaning": "Listen / Headstrong / Naughty",
    "onyomi": [
      "ちょう",
      "てい"
    ],
    "kunyomi": [
      "き.く",
      "ゆる.す"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "遣",
    "meaning": "Dispatch / Despatch / Send",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "つか.う",
      "-つか.い",
      "-づか.い",
      "つか.わす",
      "や.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "闘",
    "meaning": "Fight / War",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "たたか.う",
      "あらそ.う"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "陣",
    "meaning": "Camp / Battle Array / Ranks",
    "onyomi": [
      "じん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "臨",
    "meaning": "Look To / Face / Meet",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [
      "のぞ.む"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "削",
    "meaning": "Plane / Sharpen / Whittle",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [
      "けず.る",
      "はつ.る",
      "そ.ぐ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "契",
    "meaning": "Pledge / Promise / Vow",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "ちぎ.る"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "恵",
    "meaning": "Favor / Blessing / Grace",
    "onyomi": [
      "けい",
      "え"
    ],
    "kunyomi": [
      "めぐ.む",
      "めぐ.み"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "掲",
    "meaning": "Put Up (a Notice) / Put Up / Hoist",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "かか.げる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "葬",
    "meaning": "Interment / Bury / Shelve",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "ほうむ.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "需",
    "meaning": "Demand / Request / Need",
    "onyomi": [
      "じゅ"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "宜",
    "meaning": "Best Regards / Good",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [
      "よろ.しい",
      "よろ.しく"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "繰",
    "meaning": "Winding / Reel / Spin",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "く.る"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "避",
    "meaning": "Evade / Avoid / Avert",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "さ.ける",
      "よ.ける"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "妊",
    "meaning": "Pregnancy",
    "onyomi": [
      "にん",
      "じん"
    ],
    "kunyomi": [
      "はら.む",
      "みごも.る"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "娠",
    "meaning": "With Child / Pregnancy",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "致",
    "meaning": "Doth / Do / Send",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "いた.す"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "奏",
    "meaning": "Play Music / Speak To A Ruler / Complete",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "かな.でる"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "伴",
    "meaning": "Consort / Accompany / Bring With",
    "onyomi": [
      "はん",
      "ばん"
    ],
    "kunyomi": [
      "ともな.う"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "併",
    "meaning": "Join / Get Together / Unite",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [
      "あわ.せる"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "却",
    "meaning": "Instead / On The Contrary / Rather",
    "onyomi": [
      "きゃく"
    ],
    "kunyomi": [
      "かえ.って",
      "しりぞ.く",
      "しりぞ.ける"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "慮",
    "meaning": "Prudence / Thought / Concern",
    "onyomi": [
      "りょ"
    ],
    "kunyomi": [
      "おもんぱく.る",
      "おもんぱか.る"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "懸",
    "meaning": "State Of Suspension / Hang / Depend",
    "onyomi": [
      "けん",
      "け"
    ],
    "kunyomi": [
      "か.ける",
      "か.かる"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "房",
    "meaning": "Tassel / Tuft / Fringe",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "ふさ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "扱",
    "meaning": "Handle / Entertain / Thresh",
    "onyomi": [
      "そう",
      "きゅう"
    ],
    "kunyomi": [
      "あつか.い",
      "あつか.う",
      "あつか.る",
      "こ.く"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "抑",
    "meaning": "Repress / Well / Now",
    "onyomi": [
      "よく"
    ],
    "kunyomi": [
      "おさ.える"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "択",
    "meaning": "Choose / Select / Elect",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [
      "えら.ぶ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "描",
    "meaning": "Sketch / Compose / Write",
    "onyomi": [
      "びょう"
    ],
    "kunyomi": [
      "えが.く",
      "か.く"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "盤",
    "meaning": "Tray / Shallow Bowl / Platter",
    "onyomi": [
      "ばん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "称",
    "meaning": "Appellation / Praise / Admire",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "たた.える",
      "とな.える",
      "あ.げる",
      "かな.う",
      "はか.り",
      "はか.る",
      "ほめ.る"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "緩",
    "meaning": "Slacken / Loosen / Relax",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "ゆる.い",
      "ゆる.やか",
      "ゆる.む",
      "ゆる.める"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "託",
    "meaning": "Consign / Requesting / Entrusting With",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [
      "かこつ.ける",
      "かこ.つ",
      "かこ.つける"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "賄",
    "meaning": "Bribe / Board / Supply",
    "onyomi": [
      "わい"
    ],
    "kunyomi": [
      "まかな.う"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "還",
    "meaning": "Send Back / Return",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "かえ.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "邦",
    "meaning": "Home Country / Country / Japan",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "くに"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "鈴",
    "meaning": "Small Bell / Buzzer",
    "onyomi": [
      "れい",
      "りん"
    ],
    "kunyomi": [
      "すず"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "岐",
    "meaning": "Branch Off / Fork In Road / Scene",
    "onyomi": [
      "き",
      "ぎ"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "隆",
    "meaning": "Hump / High / Noble",
    "onyomi": [
      "りゅう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "控",
    "meaning": "Withdraw / Draw In / Hold Back",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "ひか.える",
      "ひか.え"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "壁",
    "meaning": "Wall / Lining (stomach) / Fence",
    "onyomi": [
      "へき"
    ],
    "kunyomi": [
      "かべ"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "棋",
    "meaning": "Chess Piece / Japanese Chess / Shogi",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "ご"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "渋",
    "meaning": "Astringent / Hesitate / Reluctant",
    "onyomi": [
      "じゅう",
      "しゅう"
    ],
    "kunyomi": [
      "しぶ",
      "しぶ.い",
      "しぶ.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "仙",
    "meaning": "Hermit / Wizard / Cent",
    "onyomi": [
      "せん",
      "せんと"
    ],
    "kunyomi": [],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "充",
    "meaning": "Allot / Fill",
    "onyomi": [
      "じゅう"
    ],
    "kunyomi": [
      "あ.てる",
      "み.たす"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "免",
    "meaning": "Excuse / Dismissal",
    "onyomi": [
      "めん"
    ],
    "kunyomi": [
      "まぬか.れる",
      "まぬが.れる"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "勧",
    "meaning": "Persuade / Recommend / Advise",
    "onyomi": [
      "かん",
      "けん"
    ],
    "kunyomi": [
      "すす.める"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "圏",
    "meaning": "Sphere / Circle / Radius",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "かこ.い"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "奪",
    "meaning": "Rob / Take By Force / Snatch Away",
    "onyomi": [
      "だつ"
    ],
    "kunyomi": [
      "うば.う"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "慎",
    "meaning": "Humility / Be Careful / Discreet",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "つつし.む",
      "つつ.ましい",
      "つつし",
      "つつし.み"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "拒",
    "meaning": "Repel / Refuse / Reject",
    "onyomi": [
      "きょ",
      "ご"
    ],
    "kunyomi": [
      "こば.む"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "枠",
    "meaning": "Frame / Framework / Spindle",
    "onyomi": [],
    "kunyomi": [
      "わく"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "甲",
    "meaning": "Armor / High (voice) / A Grade",
    "onyomi": [
      "こう",
      "かん"
    ],
    "kunyomi": [
      "きのえ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "斐",
    "meaning": "Beautiful / Patterned",
    "onyomi": [
      "ひ",
      "い"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "祉",
    "meaning": "Welfare / Happiness",
    "onyomi": [
      "し"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "稲",
    "meaning": "Rice Plant",
    "onyomi": [
      "とう",
      "て"
    ],
    "kunyomi": [
      "いね",
      "いな-"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "譲",
    "meaning": "Defer / Turnover / Transfer",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "ゆず.る"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "謙",
    "meaning": "Self-effacing / Humble Oneself / Condescend",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "へりくだ.る"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "躍",
    "meaning": "Leap / Dance / Skip",
    "onyomi": [
      "やく"
    ],
    "kunyomi": [
      "おど.る"
    ],
    "strokes": 21,
    "jlpt": "N1"
  },
  {
    "char": "銃",
    "meaning": "Gun / Arms",
    "onyomi": [
      "じゅう"
    ],
    "kunyomi": [
      "つつ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "項",
    "meaning": "Paragraph / Nape Of Neck / Clause",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "うなじ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "鋼",
    "meaning": "Steel",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "はがね"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "顧",
    "meaning": "Look Back / Review / Examine Oneself",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "かえり.みる"
    ],
    "strokes": 21,
    "jlpt": "N1"
  },
  {
    "char": "駆",
    "meaning": "Drive / Run / Gallop",
    "onyomi": [
      "く"
    ],
    "kunyomi": [
      "か.ける",
      "か.る"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "唱",
    "meaning": "Chant / Recite / Call Upon",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "とな.える"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "俊",
    "meaning": "Sagacious / Genius / Excellence",
    "onyomi": [
      "しゅん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "兼",
    "meaning": "Concurrently / And / Beforehand",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "か.ねる",
      "-か.ねる"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "剤",
    "meaning": "Dose / Medicine / Drug",
    "onyomi": [
      "ざい",
      "すい",
      "せい"
    ],
    "kunyomi": [
      "かる",
      "けず.る"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "堀",
    "meaning": "Ditch / Moat / Canal",
    "onyomi": [
      "くつ"
    ],
    "kunyomi": [
      "ほり"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "巡",
    "meaning": "Patrol / Go Around / Circumference",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [
      "めぐ.る",
      "めぐ.り"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "戒",
    "meaning": "Commandment",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "いまし.める"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "排",
    "meaning": "Repudiate / Exclude / Expel",
    "onyomi": [
      "はい"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "携",
    "meaning": "Portable / Carry (in Hand) / Armed With",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "たずさ.える",
      "たずさ.わる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "敏",
    "meaning": "Cleverness / Agile / Alert",
    "onyomi": [
      "びん"
    ],
    "kunyomi": [
      "さとい"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "敷",
    "meaning": "Spread / Pave / Sit",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "し.く",
      "-し.き"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "犠",
    "meaning": "Sacrifice",
    "onyomi": [
      "ぎ",
      "き"
    ],
    "kunyomi": [
      "いけにえ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "獲",
    "meaning": "Seize / Get / Find",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "え.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "茂",
    "meaning": "Overgrown / Grow Thick / Be Luxuriant",
    "onyomi": [
      "も"
    ],
    "kunyomi": [
      "しげ.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "繁",
    "meaning": "Luxuriant / Thick / Overgrown",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "しげ.る",
      "しげ.く"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "頻",
    "meaning": "Repeatedly / Recur",
    "onyomi": [
      "ひん"
    ],
    "kunyomi": [
      "しき.りに"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "殖",
    "meaning": "Augment / Increase / Multiply",
    "onyomi": [
      "しょく"
    ],
    "kunyomi": [
      "ふ.える",
      "ふ.やす"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "衝",
    "meaning": "Collide / Brunt / Highway",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "つ.く"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "誉",
    "meaning": "Reputation / Praise / Honor",
    "onyomi": [
      "よ"
    ],
    "kunyomi": [
      "ほま.れ",
      "ほ.める"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "褒",
    "meaning": "Praise / Extol",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "ほ.める"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "透",
    "meaning": "Transparent / Permeate / Filter",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "す.く",
      "す.かす",
      "す.ける",
      "とう.る",
      "とう.す"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "隣",
    "meaning": "Neighboring",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [
      "とな.る",
      "となり"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "雅",
    "meaning": "Gracious / Elegant / Graceful",
    "onyomi": [
      "が"
    ],
    "kunyomi": [
      "みや.び"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "徹",
    "meaning": "Penetrate / Clear / Pierce",
    "onyomi": [
      "てつ"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "瀬",
    "meaning": "Rapids / Current / Torrent",
    "onyomi": [
      "らい"
    ],
    "kunyomi": [
      "せ"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "撤",
    "meaning": "Remove / Withdraw / Disarm",
    "onyomi": [
      "てつ"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "措",
    "meaning": "Set Aside / Give Up / Suspend",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "お.く"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "拠",
    "meaning": "Foothold / Based On / Follow",
    "onyomi": [
      "きょ",
      "こ"
    ],
    "kunyomi": [
      "よ.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "儀",
    "meaning": "Ceremony / Rule / Affair",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "樹",
    "meaning": "Timber / Trees / Wood",
    "onyomi": [
      "じゅ"
    ],
    "kunyomi": [
      "き"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "棄",
    "meaning": "Abandon / Throw Away / Discard",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "す.てる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "虎",
    "meaning": "Tiger / Drunkard",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "とら"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "蛍",
    "meaning": "Lightning-bug / Firefly",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "ほたる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "艦",
    "meaning": "Warship",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 21,
    "jlpt": "N1"
  },
  {
    "char": "潜",
    "meaning": "Submerge / Conceal / Hide",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "ひそ.む",
      "もぐ.る",
      "かく.れる",
      "くぐ.る",
      "ひそ.める"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "拳",
    "meaning": "Fist",
    "onyomi": [
      "けん",
      "げん"
    ],
    "kunyomi": [
      "こぶし"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "仁",
    "meaning": "Humanity / Virtue / Benevolence",
    "onyomi": [
      "じん",
      "に",
      "にん"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "至",
    "meaning": "Climax / Arrive / Proceed",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "いた.る"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "誠",
    "meaning": "Sincerity / Admonish / Warn",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [
      "まこと"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "郷",
    "meaning": "Home Town / Village / Native Place",
    "onyomi": [
      "きょう",
      "ごう"
    ],
    "kunyomi": [
      "さと"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "侵",
    "meaning": "Encroach / Invade / Raid",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "おか.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "偽",
    "meaning": "Falsehood / Lie / Deceive",
    "onyomi": [
      "ぎ",
      "か"
    ],
    "kunyomi": [
      "いつわ.る",
      "にせ",
      "いつわ.り"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "克",
    "meaning": "Overcome / Kindly / Skillfully",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "か.つ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "哲",
    "meaning": "Philosophy / Clear",
    "onyomi": [
      "てつ"
    ],
    "kunyomi": [
      "さとい",
      "あきらか"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "喪",
    "meaning": "Miss / Mourning",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "も"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "堅",
    "meaning": "Strict / Hard / Solid",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "かた.い",
      "-がた.い"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "括",
    "meaning": "Fasten / Tie Up / Arrest",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [
      "くく.る"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "弧",
    "meaning": "Arc / Arch / Bow",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "挑",
    "meaning": "Challenge / Contend For / Make Love To",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "いど.む"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "揚",
    "meaning": "Raise / Elevate / Hoist",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "あ.げる",
      "-あ.げ",
      "あ.がる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "握",
    "meaning": "Grip / Hold / Mould Sushi",
    "onyomi": [
      "あく"
    ],
    "kunyomi": [
      "にぎ.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "揺",
    "meaning": "Swing / Shake / Sway",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "ゆ.れる",
      "ゆ.る",
      "ゆ.らぐ",
      "ゆ.るぐ",
      "ゆ.する",
      "ゆ.さぶる",
      "ゆ.すぶる",
      "うご.く"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "斎",
    "meaning": "Purification / Buddhist Food / Room",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "とき",
      "つつし.む",
      "ものいみ",
      "い.む",
      "いわ.う",
      "いつ.く"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "暫",
    "meaning": "Temporarily / A While / Moment",
    "onyomi": [
      "ざん"
    ],
    "kunyomi": [
      "しばら.く"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "析",
    "meaning": "Chop / Divide / Tear",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "枢",
    "meaning": "Hinge / Pivot / Door",
    "onyomi": [
      "すう",
      "しゅ"
    ],
    "kunyomi": [
      "とぼそ",
      "からくり"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "軸",
    "meaning": "Axis / Pivot / Stem",
    "onyomi": [
      "じく"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "柄",
    "meaning": "Design / Pattern / Build",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [
      "がら",
      "え",
      "つか"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "滑",
    "meaning": "Slippery / Slide / Slip",
    "onyomi": [
      "かつ",
      "こつ"
    ],
    "kunyomi": [
      "すべ.る",
      "なめ.らか"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "潟",
    "meaning": "Lagoon",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "かた",
      "-がた"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "焦",
    "meaning": "Char / Hurry / Impatient",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "こ.げる",
      "こ.がす",
      "こ.がれる",
      "あせ.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "範",
    "meaning": "Pattern / Example / Model",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "紛",
    "meaning": "Distract / Be Mistaken For / Go Astray",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [
      "まぎ.れる",
      "-まぎ.れ",
      "まぎ.らす",
      "まぎ.らわす",
      "まぎ.らわしい"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "糾",
    "meaning": "Twist / Ask / Investigate",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "ただ.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "綱",
    "meaning": "Hawser / Class (genus) / Rope",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "つな"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "網",
    "meaning": "Netting / Network",
    "onyomi": [
      "もう"
    ],
    "kunyomi": [
      "あみ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "肝",
    "meaning": "Liver / Pluck / Nerve",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "きも"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "芝",
    "meaning": "Turf / Lawn",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "しば"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "裂",
    "meaning": "Split / Rend / Tear",
    "onyomi": [
      "れつ"
    ],
    "kunyomi": [
      "さ.く",
      "さ.ける",
      "-ぎ.れ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "襲",
    "meaning": "Attack / Advance On / Succeed To",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "おそ.う",
      "かさ.ね"
    ],
    "strokes": 22,
    "jlpt": "N1"
  },
  {
    "char": "貢",
    "meaning": "Tribute / Support / Finance",
    "onyomi": [
      "こう",
      "く"
    ],
    "kunyomi": [
      "みつ.ぐ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "趣",
    "meaning": "Purport / Gist / Elegance",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "おもむき",
      "おもむ.く"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "距",
    "meaning": "Long-distance / Spur / Fetlock",
    "onyomi": [
      "きょ"
    ],
    "kunyomi": [
      "へだ.たる",
      "けづめ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "露",
    "meaning": "Dew / Tears / Expose",
    "onyomi": [
      "ろ",
      "ろう"
    ],
    "kunyomi": [
      "つゆ"
    ],
    "strokes": 21,
    "jlpt": "N1"
  },
  {
    "char": "牧",
    "meaning": "Breed / Care For / Shepherd",
    "onyomi": [
      "ぼく"
    ],
    "kunyomi": [
      "まき"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "朗",
    "meaning": "Melodious / Clear / Bright",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [
      "ほが.らか",
      "あき.らか"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "潮",
    "meaning": "Tide / Salt Water / Opportunity",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "しお",
      "うしお"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "即",
    "meaning": "Instant / Namely / As Is",
    "onyomi": [
      "そく"
    ],
    "kunyomi": [
      "つ.く",
      "つ.ける",
      "すなわ.ち"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "垣",
    "meaning": "Hedge / Fence / Wall",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "かき"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "威",
    "meaning": "Intimidate / Dignity / Majesty",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "おど.す",
      "おど.し",
      "おど.かす"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "岳",
    "meaning": "Point / Peak / Mountain",
    "onyomi": [
      "がく"
    ],
    "kunyomi": [
      "たけ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "慰",
    "meaning": "Consolation / Amusement / Seduce",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "なぐさ.める",
      "なぐさ.む"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "懇",
    "meaning": "Sociable / Kind / Courteous",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "ねんご.ろ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "懲",
    "meaning": "Penal / Chastise / Punish",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "こ.りる",
      "こ.らす",
      "こ.らしめる"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "摩",
    "meaning": "Chafe / Rub / Polish",
    "onyomi": [
      "ま"
    ],
    "kunyomi": [
      "ま.する",
      "さす.る",
      "す.る"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "擦",
    "meaning": "Grate / Rub / Scratch",
    "onyomi": [
      "さつ"
    ],
    "kunyomi": [
      "す.る",
      "す.れる",
      "-ず.れ",
      "こす.る",
      "こす.れる"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "撲",
    "meaning": "Slap / Strike / Hit",
    "onyomi": [
      "ぼく"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "斉",
    "meaning": "Adjusted / Alike / Equal",
    "onyomi": [
      "せい",
      "さい"
    ],
    "kunyomi": [
      "そろ.う",
      "ひと.しい",
      "ひと.しく",
      "あたる",
      "はやい"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "旨",
    "meaning": "Delicious / Relish / Show A Liking For",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "むね",
      "うま.い"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "沼",
    "meaning": "Marsh / Lake / Bog",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "ぬま"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "泰",
    "meaning": "Peaceful / Calm / Peace",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "滅",
    "meaning": "Destroy / Ruin / Overthrow",
    "onyomi": [
      "めつ"
    ],
    "kunyomi": [
      "ほろ.びる",
      "ほろ.ぶ",
      "ほろ.ぼす"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "滋",
    "meaning": "Nourishing / More & More / Be Luxuriant",
    "onyomi": [
      "じ",
      "し"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "炉",
    "meaning": "Hearth / Furnace / Kiln",
    "onyomi": [
      "ろ"
    ],
    "kunyomi": [
      "いろり"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "琴",
    "meaning": "Harp / Koto",
    "onyomi": [
      "きん",
      "ごん"
    ],
    "kunyomi": [
      "こと"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "寸",
    "meaning": "Measurement / Tenth Of A Shaku / A Little",
    "onyomi": [
      "すん"
    ],
    "kunyomi": [],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "竜",
    "meaning": "Dragon / Imperial",
    "onyomi": [
      "りゅう",
      "りょう",
      "ろう"
    ],
    "kunyomi": [
      "たつ",
      "いせ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "縁",
    "meaning": "Affinity / Relation / Connection",
    "onyomi": [
      "えん",
      "-ねん"
    ],
    "kunyomi": [
      "ふち",
      "ふちど.る",
      "ゆかり",
      "よすが",
      "へり",
      "えにし"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "翼",
    "meaning": "Wing / Plane / Flank",
    "onyomi": [
      "よく"
    ],
    "kunyomi": [
      "つばさ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "吉",
    "meaning": "Good Luck / Joy / Congratulations",
    "onyomi": [
      "きち",
      "きつ"
    ],
    "kunyomi": [
      "よし"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "刃",
    "meaning": "Blade / Sword / Edge",
    "onyomi": [
      "じん",
      "にん"
    ],
    "kunyomi": [
      "は",
      "やいば",
      "き.る"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "忍",
    "meaning": "Endure / Bear / Put Up With",
    "onyomi": [
      "にん"
    ],
    "kunyomi": [
      "しの.ぶ",
      "しの.ばせる"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "桃",
    "meaning": "Peach",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "もも"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "侍",
    "meaning": "Waiter / Samurai / Wait Upon",
    "onyomi": [
      "じ",
      "し"
    ],
    "kunyomi": [
      "さむらい",
      "はべ.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "娯",
    "meaning": "Recreation / Pleasure",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "斗",
    "meaning": "Big Dipper / Ten Sho (vol) / Sake Dipper",
    "onyomi": [
      "と",
      "とう"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "朱",
    "meaning": "Vermilion / Cinnabar / Scarlet",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "あけ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "丘",
    "meaning": "Hill / Knoll",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "おか"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "梨",
    "meaning": "Pear Tree",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "なし"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "僕",
    "meaning": "Me / I (male) / Servant",
    "onyomi": [
      "ぼく"
    ],
    "kunyomi": [
      "しもべ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "釣",
    "meaning": "Angling / Fish / Catch",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "つ.る",
      "つ.り",
      "つ.り-"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "嵐",
    "meaning": "Storm / Tempest",
    "onyomi": [
      "らん"
    ],
    "kunyomi": [
      "あらし"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "姫",
    "meaning": "Princess",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "ひめ",
      "ひめ-"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "棚",
    "meaning": "Shelf / Ledge / Rack",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "たな",
      "-だな"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "砲",
    "meaning": "Cannon / Gun",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "雷",
    "meaning": "Thunder / Lightning Bolt",
    "onyomi": [
      "らい"
    ],
    "kunyomi": [
      "かみなり",
      "いかずち",
      "いかづち"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "芽",
    "meaning": "Bud / Sprout / Spear",
    "onyomi": [
      "が"
    ],
    "kunyomi": [
      "め"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "澄",
    "meaning": "Lucidity / Be Clear / Clear",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "す.む",
      "す.ます",
      "-す.ます"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "矛",
    "meaning": "Halberd / Arms / Festival Float",
    "onyomi": [
      "む",
      "ぼう"
    ],
    "kunyomi": [
      "ほこ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "鐘",
    "meaning": "Bell / Gong / Chimes",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "かね"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "凶",
    "meaning": "Villain / Evil / Bad Luck",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "塊",
    "meaning": "Clod / Lump / Chunk",
    "onyomi": [
      "かい",
      "け"
    ],
    "kunyomi": [
      "かたまり",
      "つちくれ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "狩",
    "meaning": "Hunt / Raid / Gather",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "か.る",
      "か.り",
      "-が.り"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "魂",
    "meaning": "Soul / Spirit",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "たましい",
      "たま"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "脚",
    "meaning": "Skids / Leg / Undercarriage",
    "onyomi": [
      "きゃく",
      "きゃ",
      "かく"
    ],
    "kunyomi": [
      "あし"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "也",
    "meaning": "To Be (classical)",
    "onyomi": [
      "や",
      "え"
    ],
    "kunyomi": [
      "なり",
      "か",
      "また"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "井",
    "meaning": "Well / Well Crib / Town",
    "onyomi": [
      "せい",
      "しょう"
    ],
    "kunyomi": [
      "い"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "嬢",
    "meaning": "Lass / Girl / Miss",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "むすめ"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "暦",
    "meaning": "Calendar / Almanac",
    "onyomi": [
      "れき",
      "りゃく"
    ],
    "kunyomi": [
      "こよみ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "眺",
    "meaning": "Stare / Watch / Look At",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "なが.める"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "裸",
    "meaning": "Naked / Nude / Uncovered",
    "onyomi": [
      "ら"
    ],
    "kunyomi": [
      "はだか"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "塾",
    "meaning": "Cram School / Private School",
    "onyomi": [
      "じゅく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "卓",
    "meaning": "Eminent / Table / Desk",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "菌",
    "meaning": "Germ / Fungus / Bacteria",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "陰",
    "meaning": "Shade / Yin / Negative",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "かげ",
      "かげ.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "霊",
    "meaning": "Spirits / Soul",
    "onyomi": [
      "れい",
      "りょう"
    ],
    "kunyomi": [
      "たま"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "稼",
    "meaning": "Earnings / Work / Earn Money",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "かせ.ぐ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "嫁",
    "meaning": "Marry Into / Bride",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "よめ",
      "とつ.ぐ",
      "い.く",
      "ゆ.く"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "溝",
    "meaning": "Gutter / Ditch / Sewer",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "みぞ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "滝",
    "meaning": "Waterfall / Rapids / Cascade",
    "onyomi": [
      "ろう",
      "そう"
    ],
    "kunyomi": [
      "たき"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "狂",
    "meaning": "Lunatic / Insane / Crazy",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "くる.う",
      "くる.おしい",
      "くるお.しい"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "翔",
    "meaning": "Soar / Fly",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "かけ.る",
      "と.ぶ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "墨",
    "meaning": "Black Ink / India Ink / Ink Stick",
    "onyomi": [
      "ぼく"
    ],
    "kunyomi": [
      "すみ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "鳩",
    "meaning": "Pigeon / Dove",
    "onyomi": [
      "きゅう",
      "く"
    ],
    "kunyomi": [
      "はと",
      "あつ.める"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "穏",
    "meaning": "Calm / Quiet / Moderation",
    "onyomi": [
      "おん"
    ],
    "kunyomi": [
      "おだ.やか"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "魔",
    "meaning": "Witch / Demon / Evil Spirit",
    "onyomi": [
      "ま"
    ],
    "kunyomi": [],
    "strokes": 21,
    "jlpt": "N1"
  },
  {
    "char": "寮",
    "meaning": "Dormitory / Hostel / Villa",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "盆",
    "meaning": "Basin / Lantern Festival / Tray",
    "onyomi": [
      "ぼん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "棟",
    "meaning": "Ridgepole / Ridge",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "むね",
      "むな-"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "寧",
    "meaning": "Rather / Preferably / Peaceful",
    "onyomi": [
      "ねい"
    ],
    "kunyomi": [
      "むし.ろ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "猿",
    "meaning": "Monkey",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "さる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "瞳",
    "meaning": "Pupil (of Eye)",
    "onyomi": [
      "どう",
      "とう"
    ],
    "kunyomi": [
      "ひとみ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "碁",
    "meaning": "Go",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "租",
    "meaning": "Tariff / Crop Tax / Borrowing",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "幽",
    "meaning": "Seclude / Confine To A Room / Deep",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "ふか.い",
      "かす.か",
      "くら.い",
      "しろ.い"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "泡",
    "meaning": "Bubbles / Foam / Suds",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "あわ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "癖",
    "meaning": "Mannerism / Habit / Vice",
    "onyomi": [
      "へき"
    ],
    "kunyomi": [
      "くせ",
      "くせ.に"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "鍛",
    "meaning": "Forge / Discipline / Train",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "きた.える"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "錬",
    "meaning": "Tempering / Refine / Drill",
    "onyomi": [
      "れん"
    ],
    "kunyomi": [
      "ね.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "穂",
    "meaning": "Ear / Ear (grain) / Head",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "ほ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "帝",
    "meaning": "Sovereign / The Emperor / God",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "みかど"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "瞬",
    "meaning": "Wink / Blink / Twinkle",
    "onyomi": [
      "しゅん"
    ],
    "kunyomi": [
      "またた.く",
      "まじろ.ぐ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "菊",
    "meaning": "Chrysanthemum",
    "onyomi": [
      "きく"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "誇",
    "meaning": "Boast / Be Proud / Pride",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "ほこ.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "庄",
    "meaning": "Level / In The Country / Manor",
    "onyomi": [
      "しょう",
      "そ",
      "そう",
      "ほう"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "阻",
    "meaning": "Thwart / Separate From / Prevent",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "はば.む"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "黙",
    "meaning": "Silence / Become Silent / Stop Speaking",
    "onyomi": [
      "もく",
      "ぼく"
    ],
    "kunyomi": [
      "だま.る",
      "もだ.す"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "俵",
    "meaning": "Bag / Bale / Sack",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [
      "たわら"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "架",
    "meaning": "Erect / Frame / Mount",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "か.ける",
      "か.かる"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "砕",
    "meaning": "Smash / Break / Crush",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "くだ.く",
      "くだ.ける"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "粘",
    "meaning": "Sticky / Glutinous / Greasy",
    "onyomi": [
      "ねん"
    ],
    "kunyomi": [
      "ねば.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "欺",
    "meaning": "Deceit / Cheat / Delude",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [
      "あざむ.く"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "詐",
    "meaning": "Lie / Falsehood / Deceive",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [
      "いつわ.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "霧",
    "meaning": "Fog / Mist",
    "onyomi": [
      "む",
      "ぼう",
      "ぶ"
    ],
    "kunyomi": [
      "きり"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "柳",
    "meaning": "Willow",
    "onyomi": [
      "りゅう"
    ],
    "kunyomi": [
      "やなぎ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "伊",
    "meaning": "Italy / That One",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "かれ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "佐",
    "meaning": "Assistant / Help",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "尺",
    "meaning": "Shaku / Japanese Foot / Measure",
    "onyomi": [
      "しゃく"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "哀",
    "meaning": "Pathetic / Grief / Sorrow",
    "onyomi": [
      "あい"
    ],
    "kunyomi": [
      "あわ.れ",
      "あわ.れむ",
      "かな.しい"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "唇",
    "meaning": "Lips",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "くちびる"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "塀",
    "meaning": "Fence / Wall / (kokuji)",
    "onyomi": [
      "へい",
      "べい"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "墜",
    "meaning": "Crash / Fall (down)",
    "onyomi": [
      "つい"
    ],
    "kunyomi": [
      "お.ちる",
      "お.つ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "如",
    "meaning": "Likeness / Like / Such As",
    "onyomi": [
      "じょ",
      "にょ"
    ],
    "kunyomi": [
      "ごと.し"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "婆",
    "meaning": "Old Woman / Grandma / Wet Nurse",
    "onyomi": [
      "ば"
    ],
    "kunyomi": [
      "ばば",
      "ばあ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "幣",
    "meaning": "Cash / Bad Habit / Humble Prefix",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [
      "ぬさ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "恨",
    "meaning": "Regret / Bear A Grudge / Resentment",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "うら.む",
      "うら.めしい"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "憩",
    "meaning": "Recess / Rest / Relax",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "いこ.い",
      "いこ.う"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "扇",
    "meaning": "Fan / Folding Fan",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "おうぎ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "扉",
    "meaning": "Front Door / Title Page / Front Page",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "とびら"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "挿",
    "meaning": "Insert / Put In / Graft",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "さ.す",
      "はさ.む"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "掌",
    "meaning": "Manipulate / Rule / Administer",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "てのひら",
      "たなごころ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "炊",
    "meaning": "Cook / Boil",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "た.く",
      "-だ.き"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "爽",
    "meaning": "Refreshing / Bracing / Resonant",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "あき.らか",
      "さわ.やか",
      "たがう"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "瞭",
    "meaning": "Clear",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "あきらか"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "胴",
    "meaning": "Trunk / Torso / Hull (ship)",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "虹",
    "meaning": "Rainbow",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "にじ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "帳",
    "meaning": "Notebook / Account Book / Album",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "とばり"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "蚊",
    "meaning": "Mosquito",
    "onyomi": [
      "ぶん"
    ],
    "kunyomi": [
      "か"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "蛇",
    "meaning": "Snake / Serpent / Hard Drinker",
    "onyomi": [
      "じゃ",
      "だ",
      "い",
      "や"
    ],
    "kunyomi": [
      "へび"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "辱",
    "meaning": "Embarrass / Humiliate / Shame",
    "onyomi": [
      "じょく"
    ],
    "kunyomi": [
      "はずかし.める"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "鉢",
    "meaning": "Bowl / Rice Tub / Pot",
    "onyomi": [
      "はち",
      "はつ"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "霜",
    "meaning": "Frost",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "しも"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "飢",
    "meaning": "Hungry / Starve",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "う.える"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "餓",
    "meaning": "Starve / Hungry / Thirst",
    "onyomi": [
      "が"
    ],
    "kunyomi": [
      "う.える"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "迅",
    "meaning": "Swift / Fast",
    "onyomi": [
      "じん"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "騎",
    "meaning": "Equestrian / Riding On Horses / Counter For Equestrians",
    "onyomi": [
      "き"
    ],
    "kunyomi": [],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "蓄",
    "meaning": "Amass / Raise / Hoard",
    "onyomi": [
      "ちく"
    ],
    "kunyomi": [
      "たくわ.える"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "尽",
    "meaning": "Exhaust / Use Up / Run Out Of",
    "onyomi": [
      "じん",
      "さん"
    ],
    "kunyomi": [
      "つ.くす",
      "-つ.くす",
      "-づ.くし",
      "-つ.く",
      "-づ.く",
      "-ず.く",
      "つ.きる",
      "つ.かす",
      "さかづき",
      "ことごと.く",
      "つか",
      "つき"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "彩",
    "meaning": "Coloring / Paint / Makeup",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "いろど.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "憶",
    "meaning": "Recollection / Think / Remember",
    "onyomi": [
      "おく"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "耐",
    "meaning": "-proof / Enduring",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "た.える"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "輝",
    "meaning": "Radiance / Shine / Sparkle",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "かがや.く"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "脅",
    "meaning": "Threaten / Coerce",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "おびや.かす",
      "おど.す",
      "おど.かす"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "麻",
    "meaning": "Hemp / Flax / Numb",
    "onyomi": [
      "ま",
      "まあ"
    ],
    "kunyomi": [
      "あさ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "培",
    "meaning": "Cultivate / Foster",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "つちか.う"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "悔",
    "meaning": "Repent / Regret",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "く.いる",
      "く.やむ",
      "くや.しい"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "遂",
    "meaning": "Consummate / Accomplish / Attain",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "と.げる",
      "つい.に"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "班",
    "meaning": "Squad / Corps / Unit",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "斜",
    "meaning": "Diagonal / Slanting / Oblique",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "なな.め",
      "はす"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "殴",
    "meaning": "Assault / Hit / Beat",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "なぐ.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "盾",
    "meaning": "Shield / Escutcheon / Pretext",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [
      "たて"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "穫",
    "meaning": "Harvest / Reap",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "駒",
    "meaning": "Pony / Horse / Colt",
    "onyomi": [
      "く"
    ],
    "kunyomi": [
      "こま"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "紫",
    "meaning": "Purple / Violet",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "むらさき"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "抽",
    "meaning": "Pluck / Pull / Extract",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "ひき-"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "誓",
    "meaning": "Vow / Swear / Pledge",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [
      "ちか.う"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "悟",
    "meaning": "Enlightenment / Perceive / Discern",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "さと.る"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "拓",
    "meaning": "Clear (the Land) / Open / Break Up (land)",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [
      "ひら.く"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "拘",
    "meaning": "Arrest / Seize / Concerned",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "かか.わる"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "礎",
    "meaning": "Cornerstone / Foundation Stone",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "いしずえ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "鶴",
    "meaning": "Crane / Stork",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "つる"
    ],
    "strokes": 21,
    "jlpt": "N1"
  },
  {
    "char": "刈",
    "meaning": "Reap / Cut / Clip",
    "onyomi": [
      "がい",
      "かい"
    ],
    "kunyomi": [
      "か.る"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "剛",
    "meaning": "Sturdy / Strength",
    "onyomi": [
      "ごう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "唯",
    "meaning": "Solely / Only / Merely",
    "onyomi": [
      "ゆい",
      "い"
    ],
    "kunyomi": [
      "ただ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "壇",
    "meaning": "Podium / Stage / Rostrum",
    "onyomi": [
      "だん",
      "たん"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "尼",
    "meaning": "Nun",
    "onyomi": [
      "に"
    ],
    "kunyomi": [
      "あま"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "概",
    "meaning": "Outline / Condition / Approximation",
    "onyomi": [
      "がい"
    ],
    "kunyomi": [
      "おおむ.ね"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "浸",
    "meaning": "Immersed / Soak / Dip",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "ひた.す",
      "ひた.る",
      "つ.かる"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "淡",
    "meaning": "Thin / Faint / Pale",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "あわ.い"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "煮",
    "meaning": "Boil / Cook",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "に.る",
      "-に",
      "に.える",
      "に.やす"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "覆",
    "meaning": "Capsize / Cover / Shade",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [
      "おお.う",
      "くつがえ.す",
      "くつがえ.る"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "謀",
    "meaning": "Conspire / Cheat / Impose On",
    "onyomi": [
      "ぼう",
      "む"
    ],
    "kunyomi": [
      "はか.る",
      "たばか.る",
      "はかりごと"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "陶",
    "meaning": "Pottery / Porcelain",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "すえ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "隔",
    "meaning": "Isolate / Alternate / Distance",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "へだ.てる",
      "へだ.たる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "征",
    "meaning": "Subjugate / Attack The Rebellious / Collect Taxes",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "陛",
    "meaning": "Highness / Steps (of Throne)",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "俗",
    "meaning": "Vulgar / Customs / Manners",
    "onyomi": [
      "ぞく"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "桑",
    "meaning": "Mulberry",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "くわ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "潤",
    "meaning": "Wet / Be Watered / Profit By",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [
      "うるお.う",
      "うるお.す",
      "うる.む"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "珠",
    "meaning": "Pearl / Gem / Jewel",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "たま"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "衰",
    "meaning": "Decline / Wane / Weaken",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "おとろ.える"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "奨",
    "meaning": "Exhort / Urge / Encourage",
    "onyomi": [
      "しょう",
      "そう"
    ],
    "kunyomi": [
      "すす.める"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "劣",
    "meaning": "Inferiority / Be Inferior To / Be Worse",
    "onyomi": [
      "れつ"
    ],
    "kunyomi": [
      "おと.る"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "勘",
    "meaning": "Intuition / Perception / Check",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "妃",
    "meaning": "Queen / Princess",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "きさき"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "峰",
    "meaning": "Summit / Peak",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "みね",
      "ね"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "巧",
    "meaning": "Adroit / Skilled / Ingenuity",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "たく.み",
      "たく.む",
      "うま.い"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "邪",
    "meaning": "Wicked / Injustice / Wrong",
    "onyomi": [
      "じゃ"
    ],
    "kunyomi": [
      "よこし.ま"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "駄",
    "meaning": "Burdensome / Pack Horse / Horse Load",
    "onyomi": [
      "だ",
      "た"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "廷",
    "meaning": "Courts / Imperial Court / Government Office",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "簿",
    "meaning": "Register / Record Book",
    "onyomi": [
      "ぼ"
    ],
    "kunyomi": [],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "彰",
    "meaning": "Patent / Clear",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "漫",
    "meaning": "Cartoon / Involuntarily / Unrestrained",
    "onyomi": [
      "まん"
    ],
    "kunyomi": [
      "みだり.に",
      "そぞ.ろ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "訂",
    "meaning": "Revise / Correct / Decide",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "ただ.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "諮",
    "meaning": "Consult With",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "はか.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "銘",
    "meaning": "Inscription / Signature (of Artisan)",
    "onyomi": [
      "めい"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "堤",
    "meaning": "Dike / Bank / Embankment",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "つつみ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "漂",
    "meaning": "Drift / Float (on Liquid)",
    "onyomi": [
      "ひょう"
    ],
    "kunyomi": [
      "ただよ.う"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "翻",
    "meaning": "Flip / Turn Over / Wave",
    "onyomi": [
      "ほん",
      "はん"
    ],
    "kunyomi": [
      "ひるがえ.る",
      "ひるがえ.す"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "軌",
    "meaning": "Rut / Wheel / Track",
    "onyomi": [
      "き"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "后",
    "meaning": "Empress / Queen / After",
    "onyomi": [
      "こう",
      "ご"
    ],
    "kunyomi": [
      "きさき"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "奮",
    "meaning": "Stirred Up / Be Invigorated / Flourish",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [
      "ふる.う"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "亭",
    "meaning": "Pavilion / Restaurant / Mansion",
    "onyomi": [
      "てい",
      "ちん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "仰",
    "meaning": "Face-up / Look Up / Depend",
    "onyomi": [
      "ぎょう",
      "こう"
    ],
    "kunyomi": [
      "あお.ぐ",
      "おお.せ",
      "お.っしゃる",
      "おっしゃ.る"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "伯",
    "meaning": "Chief / Count / Earl",
    "onyomi": [
      "はく"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "墳",
    "meaning": "Tomb / Mound",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "壮",
    "meaning": "Robust / Manhood / Prosperity",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "さかん"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "把",
    "meaning": "Grasp / Faggot / Bunch",
    "onyomi": [
      "は",
      "わ"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "搬",
    "meaning": "Conveyor / Carry / Transport",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "晶",
    "meaning": "Sparkle / Clear / Crystal",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "洞",
    "meaning": "Den / Cave / Excavation",
    "onyomi": [
      "どう"
    ],
    "kunyomi": [
      "ほら"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "涯",
    "meaning": "Horizon / Shore / Limit",
    "onyomi": [
      "がい"
    ],
    "kunyomi": [
      "はて"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "疫",
    "meaning": "Epidemic",
    "onyomi": [
      "えき",
      "やく"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "孔",
    "meaning": "Cavity / Hole / Slit",
    "onyomi": [
      "こう",
      "く"
    ],
    "kunyomi": [
      "あな"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "邸",
    "meaning": "Residence / Mansion",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "やしき"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "郡",
    "meaning": "County / District",
    "onyomi": [
      "ぐん"
    ],
    "kunyomi": [
      "こおり"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "釈",
    "meaning": "Explanation",
    "onyomi": [
      "しゃく",
      "せき"
    ],
    "kunyomi": [
      "とく",
      "す.てる",
      "ゆる.す"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "肪",
    "meaning": "Obese / Fat",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "喚",
    "meaning": "Yell / Cry / Call",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "わめ.く"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "媛",
    "meaning": "Beautiful Woman / Princess",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "ひめ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "貞",
    "meaning": "Upright / Chastity / Constancy",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "さだ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "玄",
    "meaning": "Mysterious / Occultness / Black",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "くろ",
      "くろ.い"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "苗",
    "meaning": "Seedling / Sapling / Shoot",
    "onyomi": [
      "びょう",
      "みょう"
    ],
    "kunyomi": [
      "なえ",
      "なわ-"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "渦",
    "meaning": "Whirlpool / Eddy / Vortex",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "うず"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "慈",
    "meaning": "Mercy",
    "onyomi": [
      "じ"
    ],
    "kunyomi": [
      "いつく.しむ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "襟",
    "meaning": "Collar / Neck / Lapel",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "えり"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "蓮",
    "meaning": "Lotus",
    "onyomi": [
      "れん"
    ],
    "kunyomi": [
      "はす",
      "はちす"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "亮",
    "meaning": "Clear / Help",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "あきらか"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "聡",
    "meaning": "Wise / Fast Learner",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "さと.い",
      "みみざと.い"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "浦",
    "meaning": "Bay / Creek / Inlet",
    "onyomi": [
      "ほ"
    ],
    "kunyomi": [
      "うら"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "塚",
    "meaning": "Hillock / Mound",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "つか",
      "-づか"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "陥",
    "meaning": "Collapse / Fall Into / Cave In",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "おちい.る",
      "おとしい.れる"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "貫",
    "meaning": "Pierce / 8 1/3lbs / Penetrate",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "つらぬ.く",
      "ぬ.く",
      "ぬき"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "覇",
    "meaning": "Hegemony / Supremacy / Leadership",
    "onyomi": [
      "は",
      "はく"
    ],
    "kunyomi": [
      "はたがしら"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "呂",
    "meaning": "Spine / Backbone",
    "onyomi": [
      "ろ",
      "りょ"
    ],
    "kunyomi": [
      "せぼね"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "擁",
    "meaning": "Hug / Embrace / Possess",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "孤",
    "meaning": "Orphan / Alone",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "賠",
    "meaning": "Compensation / Indemnify",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "鎖",
    "meaning": "Chain / Irons / Connection",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [
      "くさり",
      "とざ.す"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "噴",
    "meaning": "Erupt / Spout / Emit",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [
      "ふ.く"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "祥",
    "meaning": "Auspicious / Happiness / Blessedness",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "さいわ.い",
      "きざ.し",
      "よ.い",
      "つまび.らか"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "牲",
    "meaning": "Animal Sacrifice / Offering",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "秩",
    "meaning": "Regularity / Salary / Order",
    "onyomi": [
      "ちつ"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "唆",
    "meaning": "Tempt / Seduce / Instigate",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [
      "そそ.る",
      "そそのか.す"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "膨",
    "meaning": "Swell / Get Fat / Thick",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "ふく.らむ",
      "ふく.れる"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "芳",
    "meaning": "Perfume / Balmy / Favorable",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "かんば.しい"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "恒",
    "meaning": "Constancy / Always",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "つね",
      "つねに"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "倫",
    "meaning": "Ethics / Companion",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "陳",
    "meaning": "Exhibit / State / Relate",
    "onyomi": [
      "ちん"
    ],
    "kunyomi": [
      "ひ.ねる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "須",
    "meaning": "Ought / By All Means / Necessarily",
    "onyomi": [
      "す",
      "しゅ"
    ],
    "kunyomi": [
      "すべから.く",
      "すべし",
      "ひげ",
      "まつ",
      "もち.いる",
      "もと.める"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "偏",
    "meaning": "Partial / Side / Left-side Radical",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "かたよ.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "遇",
    "meaning": "Meet / Encounter / Interview",
    "onyomi": [
      "ぐう"
    ],
    "kunyomi": [
      "あ.う"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "糧",
    "meaning": "Provisions / Food / Bread",
    "onyomi": [
      "りょう",
      "ろう"
    ],
    "kunyomi": [
      "かて"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "殊",
    "meaning": "Particularly / Especially / Exceptionally",
    "onyomi": [
      "しゅ"
    ],
    "kunyomi": [
      "こと"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "慢",
    "meaning": "Ridicule / Laziness",
    "onyomi": [
      "まん"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "没",
    "meaning": "Drown / Sink / Hide",
    "onyomi": [
      "ぼつ",
      "もつ"
    ],
    "kunyomi": [
      "おぼ.れる",
      "しず.む",
      "ない"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "怠",
    "meaning": "Neglect / Laziness",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "おこた.る",
      "なま.ける"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "遭",
    "meaning": "Encounter / Meet / Party",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "あ.う",
      "あ.わせる"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "惰",
    "meaning": "Lazy / Laziness",
    "onyomi": [
      "だ"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "猟",
    "meaning": "Game-hunting / Shooting / Game",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "かり",
      "か.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "乃",
    "meaning": "From / Possessive Particle / Whereupon",
    "onyomi": [
      "ない",
      "だい",
      "の",
      "あい"
    ],
    "kunyomi": [
      "の",
      "すなわ.ち",
      "なんじ"
    ],
    "strokes": 2,
    "jlpt": "N1"
  },
  {
    "char": "綾",
    "meaning": "Design / Figured Cloth / Twill",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [
      "あや"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "颯",
    "meaning": "Sudden / Quick / Sound Of The Wind",
    "onyomi": [
      "さつ",
      "そう"
    ],
    "kunyomi": [
      "さっ.と"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "隼",
    "meaning": "Falcon",
    "onyomi": [
      "しゅん",
      "じゅん"
    ],
    "kunyomi": [
      "はやぶさ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "輔",
    "meaning": "Help",
    "onyomi": [
      "ほ",
      "ふ"
    ],
    "kunyomi": [
      "たす.ける"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "寛",
    "meaning": "Tolerant / Leniency / Generosity",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "くつろ.ぐ",
      "ひろ.い",
      "ゆる.やか"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "胞",
    "meaning": "Placenta / Sac / Sheath",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "浄",
    "meaning": "Clean / Purify / Cleanse",
    "onyomi": [
      "じょう",
      "せい"
    ],
    "kunyomi": [
      "きよ.める",
      "きよ.い"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "随",
    "meaning": "Follow / Though / Notwithstanding",
    "onyomi": [
      "ずい"
    ],
    "kunyomi": [
      "まにま.に",
      "したが.う"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "稿",
    "meaning": "Draft / Copy / Manuscript",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "わら",
      "したがき"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "丹",
    "meaning": "Rust-colored / Red / Red Lead",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "に"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "壌",
    "meaning": "Lot / Earth / Soil",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "つち"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "舗",
    "meaning": "Shop / Store / Pave",
    "onyomi": [
      "ほ"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "騰",
    "meaning": "Leaping Up / Jumping Up / Rising",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "あが.る",
      "のぼ.る"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "緯",
    "meaning": "Horizontal / Woof / Left & Right",
    "onyomi": [
      "い"
    ],
    "kunyomi": [
      "よこいと",
      "ぬき"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "艇",
    "meaning": "Rowboat / Small Boat",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "披",
    "meaning": "Expose / Open",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "錦",
    "meaning": "Brocade / Fine Dress / Honors",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "にしき"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "准",
    "meaning": "Quasi- / Semi- / Associate",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "剰",
    "meaning": "Surplus / Besides",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "あまつさえ",
      "あま.り",
      "あま.る"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "繊",
    "meaning": "Slender / Fine / Thin Kimono",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "諭",
    "meaning": "Rebuke / Admonish / Charge",
    "onyomi": [
      "ゆ"
    ],
    "kunyomi": [
      "さと.す"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "惨",
    "meaning": "Wretched / Disaster / Cruelty",
    "onyomi": [
      "さん",
      "ざん"
    ],
    "kunyomi": [
      "みじ.め",
      "いた.む",
      "むご.い"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "虐",
    "meaning": "Tyrannize / Oppress",
    "onyomi": [
      "ぎゃく"
    ],
    "kunyomi": [
      "しいた.げる"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "据",
    "meaning": "Set / Lay A Foundation / Install",
    "onyomi": [
      "きょ"
    ],
    "kunyomi": [
      "す.える",
      "す.わる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "徐",
    "meaning": "Gradually / Slowly / Deliberately",
    "onyomi": [
      "じょ"
    ],
    "kunyomi": [
      "おもむ.ろに"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "搭",
    "meaning": "Board / Load (a Vehicle) / Ride",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "鯉",
    "meaning": "Carp",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "こい"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "緋",
    "meaning": "Scarlet / Cardinal",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "あけ",
      "あか"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "曙",
    "meaning": "Dawn / Daybreak",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "あけぼの"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "胡",
    "meaning": "Barbarian / Foreign",
    "onyomi": [
      "う",
      "こ",
      "ご"
    ],
    "kunyomi": [
      "なんぞ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "帥",
    "meaning": "Commander / Leading Troops / Governor",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "啓",
    "meaning": "Disclose / Open / Say",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "ひら.く",
      "さと.す"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "葵",
    "meaning": "Hollyhock",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "あおい"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "駿",
    "meaning": "A Good Horse / Speed / A Fast Person",
    "onyomi": [
      "しゅん",
      "すん"
    ],
    "kunyomi": [
      "すぐ.れる"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "諒",
    "meaning": "Fact / Reality / Understand",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "あきら.か",
      "まことに"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "莉",
    "meaning": "Jasmine",
    "onyomi": [
      "り",
      "らい",
      "れい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "鯨",
    "meaning": "Whale",
    "onyomi": [
      "げい"
    ],
    "kunyomi": [
      "くじら"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "荘",
    "meaning": "Villa / Inn / Cottage",
    "onyomi": [
      "そう",
      "しょう",
      "ちゃん"
    ],
    "kunyomi": [
      "ほうき",
      "おごそ.か"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "栽",
    "meaning": "Plantation / Planting",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "拐",
    "meaning": "Kidnap / Falsify",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "冠",
    "meaning": "Crown / Best / Peerless",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "かんむり"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "勲",
    "meaning": "Meritorious Deed / Merit",
    "onyomi": [
      "くん"
    ],
    "kunyomi": [
      "いさお"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "酬",
    "meaning": "Repay / Reward / Retribution",
    "onyomi": [
      "しゅう",
      "しゅ",
      "とう"
    ],
    "kunyomi": [
      "むく.いる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "紋",
    "meaning": "Family Crest / Figures",
    "onyomi": [
      "もん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "卸",
    "meaning": "Wholesale",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "おろ.す",
      "おろし",
      "おろ.し"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "欄",
    "meaning": "Column / Handrail / Blank",
    "onyomi": [
      "らん"
    ],
    "kunyomi": [
      "てすり"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "逸",
    "meaning": "Deviate / Idleness / Leisure",
    "onyomi": [
      "いつ"
    ],
    "kunyomi": [
      "そ.れる",
      "そ.らす",
      "はぐ.れる"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "尚",
    "meaning": "Esteem / Furthermore / Still",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "なお"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "顕",
    "meaning": "Appear / Existing",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "あきらか",
      "あらわ.れる"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "粛",
    "meaning": "Solemn / Quietly / Softly",
    "onyomi": [
      "しゅく",
      "すく"
    ],
    "kunyomi": [
      "つつし.む"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "愚",
    "meaning": "Foolish / Folly / Absurdity",
    "onyomi": [
      "ぐ"
    ],
    "kunyomi": [
      "おろ.か"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "庶",
    "meaning": "Commoner / All / Bastard",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "践",
    "meaning": "Tread / Step On / Trample",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "ふ.む"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "呈",
    "meaning": "Display / Offer / Present",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "疎",
    "meaning": "Alienate / Rough / Neglect",
    "onyomi": [
      "そ",
      "しょ"
    ],
    "kunyomi": [
      "うと.い",
      "うと.む",
      "まば.ら"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "疾",
    "meaning": "Rapidly",
    "onyomi": [
      "しつ"
    ],
    "kunyomi": [
      "はや.い"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "謡",
    "meaning": "Song / Sing / Ballad",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "うた.い",
      "うた.う"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "鎌",
    "meaning": "Sickle / Scythe / Trick",
    "onyomi": [
      "れん",
      "けん"
    ],
    "kunyomi": [
      "かま"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "酷",
    "meaning": "Cruel / Severe / Atrocious",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [
      "ひど.い"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "叙",
    "meaning": "Confer / Relate / Narrate",
    "onyomi": [
      "じょ"
    ],
    "kunyomi": [
      "つい.ず",
      "ついで"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "且",
    "meaning": "Moreover / Also / Furthermore",
    "onyomi": [
      "しょ",
      "そ",
      "しょう"
    ],
    "kunyomi": [
      "か.つ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "痴",
    "meaning": "Stupid / Foolish",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [
      "し.れる",
      "おろか"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "茎",
    "meaning": "Stalk / Stem",
    "onyomi": [
      "けい",
      "きょう"
    ],
    "kunyomi": [
      "くき"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "阿",
    "meaning": "Africa / Flatter / Fawn Upon",
    "onyomi": [
      "あ",
      "お"
    ],
    "kunyomi": [
      "おもね.る",
      "くま"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "悠",
    "meaning": "Permanence / Distant / Long Time",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "杏",
    "meaning": "Apricot",
    "onyomi": [
      "きょう",
      "あん",
      "こう"
    ],
    "kunyomi": [
      "あんず"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "茜",
    "meaning": "Madder / Red Dye / Turkey Red",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "あかね"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "栞",
    "meaning": "Bookmark / Guidebook",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "しおり"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "伏",
    "meaning": "Prostrated / Bend Down / Bow",
    "onyomi": [
      "ふく"
    ],
    "kunyomi": [
      "ふ.せる",
      "ふ.す"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "鎮",
    "meaning": "Tranquilize / Ancient Peace-preservation Centers",
    "onyomi": [
      "ちん"
    ],
    "kunyomi": [
      "しず.める",
      "しず.まる",
      "おさえ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "奉",
    "meaning": "Observance / Offer / Present",
    "onyomi": [
      "ほう",
      "ぶ"
    ],
    "kunyomi": [
      "たてまつ.る",
      "まつ.る",
      "ほう.ずる"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "憂",
    "meaning": "Melancholy / Grieve / Lament",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "うれ.える",
      "うれ.い",
      "う.い",
      "う.き"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "朴",
    "meaning": "Crude / Simple / Plain",
    "onyomi": [
      "ぼく"
    ],
    "kunyomi": [
      "ほう",
      "ほお",
      "えのき"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "惜",
    "meaning": "Pity / Be Sparing Of / Frugal",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "お.しい",
      "お.しむ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "佳",
    "meaning": "Excellent / Beautiful / Good",
    "onyomi": [
      "か"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "悼",
    "meaning": "Lament / Grieve Over",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [
      "いた.む"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "該",
    "meaning": "Above-stated / The Said / That Specific",
    "onyomi": [
      "がい"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "赴",
    "meaning": "Proceed / Get / Become",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "おもむ.く"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "髄",
    "meaning": "Marrow / Pith / Essence",
    "onyomi": [
      "ずい"
    ],
    "kunyomi": [],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "傍",
    "meaning": "Bystander / Side / Besides",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "かたわ.ら",
      "わき",
      "おか-",
      "はた",
      "そば"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "累",
    "meaning": "Accumulate / Involvement / Trouble",
    "onyomi": [
      "るい"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "癒",
    "meaning": "Healing / Cure / Quench (thirst)",
    "onyomi": [
      "ゆ"
    ],
    "kunyomi": [
      "い.える",
      "いや.す",
      "い.やす"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "郭",
    "meaning": "Enclosure / Quarters / Fortification",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "くるわ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "尿",
    "meaning": "Urine",
    "onyomi": [
      "にょう"
    ],
    "kunyomi": [
      "ゆばり",
      "いばり",
      "しと"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "賓",
    "meaning": "V.i.p. / Guest",
    "onyomi": [
      "ひん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "虜",
    "meaning": "Captive / Barbarian / Low Epithet For The Enemy",
    "onyomi": [
      "りょ",
      "ろ"
    ],
    "kunyomi": [
      "とりこ",
      "とりく"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "憾",
    "meaning": "Remorse / Regret / Be Sorry",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "うら.む"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "弥",
    "meaning": "All The More / Increasingly",
    "onyomi": [
      "み",
      "び"
    ],
    "kunyomi": [
      "や",
      "いや",
      "いよ.いよ",
      "わた.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "粗",
    "meaning": "Coarse / Rough / Rugged",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "あら.い",
      "あら-"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "循",
    "meaning": "Sequential / Follow",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "凝",
    "meaning": "Congeal / Freeze / Stiff",
    "onyomi": [
      "ぎょう"
    ],
    "kunyomi": [
      "こ.る",
      "こ.らす",
      "こご.らす",
      "こご.らせる",
      "こご.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "昌",
    "meaning": "Prosperous / Bright / Clear",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "さかん"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "旦",
    "meaning": "Daybreak / Dawn / Morning",
    "onyomi": [
      "たん",
      "だん"
    ],
    "kunyomi": [
      "あき.らか",
      "あきら",
      "ただし",
      "あさ",
      "あした"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "愉",
    "meaning": "Pleasure / Happy / Rejoice",
    "onyomi": [
      "ゆ"
    ],
    "kunyomi": [
      "たの.しい",
      "たの.しむ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "抹",
    "meaning": "Rub / Paint / Erase",
    "onyomi": [
      "まつ"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "栓",
    "meaning": "Plug / Bolt / Cork",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "之",
    "meaning": "Of / This",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "の",
      "これ",
      "ゆく",
      "この"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "遼",
    "meaning": "Distant",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "瑛",
    "meaning": "Sparkle Of Jewelry / Crystal",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "那",
    "meaning": "What?",
    "onyomi": [
      "な",
      "だ"
    ],
    "kunyomi": [
      "なに",
      "なんぞ",
      "いかん"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "拍",
    "meaning": "Clap / Beat (music)",
    "onyomi": [
      "はく",
      "ひょう"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "猶",
    "meaning": "Furthermore / Still / Yet",
    "onyomi": [
      "ゆう",
      "ゆ"
    ],
    "kunyomi": [
      "なお"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "宰",
    "meaning": "Superintend / Manager / Rule",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "寂",
    "meaning": "Loneliness / Quietly / Mellow",
    "onyomi": [
      "じゃく",
      "せき"
    ],
    "kunyomi": [
      "さび",
      "さび.しい",
      "さび.れる",
      "さみ.しい"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "縫",
    "meaning": "Sew / Stitch / Embroider",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "ぬ.う"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "呉",
    "meaning": "Give / Do Something For / Kingdom Of Wu",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "く.れる",
      "くれ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "凡",
    "meaning": "Commonplace / Ordinary / Mediocre",
    "onyomi": [
      "ぼん",
      "はん"
    ],
    "kunyomi": [
      "およ.そ",
      "おうよ.そ",
      "すべ.て"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "恭",
    "meaning": "Respect / Reverent",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "うやうや.しい"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "錯",
    "meaning": "Confused / Mix / Be In Disorder",
    "onyomi": [
      "さく",
      "しゃく"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "穀",
    "meaning": "Cereals / Grain",
    "onyomi": [
      "こく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "陵",
    "meaning": "Mausoleum / Imperial Tomb / Mound",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "みささぎ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "弊",
    "meaning": "Abuse / Evil / Vice",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "舶",
    "meaning": "Liner / Ship",
    "onyomi": [
      "はく"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "窮",
    "meaning": "Hard Up / Destitute / Suffer",
    "onyomi": [
      "きゅう",
      "きょう"
    ],
    "kunyomi": [
      "きわ.める",
      "きわ.まる",
      "きわ.まり",
      "きわ.み"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "悦",
    "meaning": "Ecstasy / Joy / Rapture",
    "onyomi": [
      "えつ"
    ],
    "kunyomi": [
      "よろこ.ぶ",
      "よろこ.ばす"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "縛",
    "meaning": "Truss / Arrest / Bind",
    "onyomi": [
      "ばく"
    ],
    "kunyomi": [
      "しば.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "轄",
    "meaning": "Control / Wedge",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [
      "くさび"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "弦",
    "meaning": "Bowstring / Chord / Hypotenuse",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "つる"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "窒",
    "meaning": "Plug Up / Obstruct",
    "onyomi": [
      "ちつ"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "洪",
    "meaning": "Deluge / Flood / Vast",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "摂",
    "meaning": "Vicarious / Surrogate / Act In Addition To",
    "onyomi": [
      "せつ",
      "しょう"
    ],
    "kunyomi": [
      "おさ.める",
      "かね.る",
      "と.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "飽",
    "meaning": "Sated / Tired Of / Bored",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "あ.きる",
      "あ.かす",
      "あ.く"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "紳",
    "meaning": "Sire / Good Belt / Gentleman",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "庸",
    "meaning": "Commonplace / Ordinary / Employment",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "靖",
    "meaning": "Peaceful",
    "onyomi": [
      "せい",
      "じょう"
    ],
    "kunyomi": [
      "やす.んじる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "嘉",
    "meaning": "Applaud / Praise / Esteem",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "よみ.する",
      "よい"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "搾",
    "meaning": "Squeeze",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [
      "しぼ.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "蝶",
    "meaning": "Butterfly",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "碑",
    "meaning": "Tombstone / Monument",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "いしぶみ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "尉",
    "meaning": "Military Officer / Jailer / Old Man",
    "onyomi": [
      "い",
      "じょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "匠",
    "meaning": "Artisan / Workman / Carpenter",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "たくみ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "遥",
    "meaning": "Far Off / Distant / Long Ago",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "はる.か"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "智",
    "meaning": "Wisdom / Intellect / Reason",
    "onyomi": [
      "ち"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "賊",
    "meaning": "Burglar / Rebel / Traitor",
    "onyomi": [
      "ぞく"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "鼓",
    "meaning": "Drum / Beat / Rouse",
    "onyomi": [
      "こ"
    ],
    "kunyomi": [
      "つづみ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "旋",
    "meaning": "Rotation / Go Around",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "め.ぐる",
      "いばり"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "腸",
    "meaning": "Intestines / Guts / Bowels",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "はらわた",
      "わた"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "槽",
    "meaning": "Vat / Tub / Tank",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "ふね"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "伐",
    "meaning": "Fell / Strike / Attack",
    "onyomi": [
      "ばつ",
      "はつ",
      "か",
      "ぼち"
    ],
    "kunyomi": [
      "き.る",
      "そむ.く",
      "う.つ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "漬",
    "meaning": "Pickling / Soak / Moisten",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "つ.ける",
      "つ.かる",
      "-づ.け",
      "-づけ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "坪",
    "meaning": "Two-mat Area / Approx. Thirty-six Sq Ft",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [
      "つぼ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "紺",
    "meaning": "Dark Blue / Navy",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "羅",
    "meaning": "Gauze / Thin Silk / Rome",
    "onyomi": [
      "ら"
    ],
    "kunyomi": [
      "うすもの"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "峡",
    "meaning": "Gorge / Ravine",
    "onyomi": [
      "きょう",
      "こう"
    ],
    "kunyomi": [
      "はざま"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "俸",
    "meaning": "Stipend / Salary",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "醸",
    "meaning": "Brew / Cause",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "かも.す"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "弔",
    "meaning": "Condolences / Mourning / Funeral",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "とむら.う",
      "とぶら.う"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "乙",
    "meaning": "The Latter / Duplicate / Strange",
    "onyomi": [
      "おつ",
      "いつ"
    ],
    "kunyomi": [
      "おと-",
      "きのと"
    ],
    "strokes": 1,
    "jlpt": "N1"
  },
  {
    "char": "遍",
    "meaning": "Everywhere / Times / Widely",
    "onyomi": [
      "へん"
    ],
    "kunyomi": [
      "あまね.く"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "衡",
    "meaning": "Equilibrium / Measuring Rod / Scale",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "款",
    "meaning": "Goodwill / Article / Section",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "閲",
    "meaning": "Review / Inspection / Revision",
    "onyomi": [
      "えつ"
    ],
    "kunyomi": [
      "けみ.する"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "喝",
    "meaning": "Hoarse / Scold",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "敢",
    "meaning": "Daring / Brave / Bold",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "あ.えて",
      "あ.えない",
      "あ.えず"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "膜",
    "meaning": "Membrane",
    "onyomi": [
      "まく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "盲",
    "meaning": "Blind / Blind Man / Ignoramus",
    "onyomi": [
      "もう"
    ],
    "kunyomi": [
      "めくら"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "胎",
    "meaning": "Womb / Uterus",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "酵",
    "meaning": "Fermentation",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "堕",
    "meaning": "Degenerate / Descend To / Lapse Into",
    "onyomi": [
      "だ"
    ],
    "kunyomi": [
      "お.ちる",
      "くず.す",
      "くず.れる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "遮",
    "meaning": "Intercept / Interrupt / Obstruct",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [
      "さえぎ.る"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "凸",
    "meaning": "Convex / Beetle Brow / Uneven",
    "onyomi": [
      "とつ"
    ],
    "kunyomi": [
      "でこ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "凹",
    "meaning": "Concave / Hollow / Sunken",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "くぼ.む",
      "へこ.む",
      "ぼこ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "楓",
    "meaning": "Maple",
    "onyomi": [
      "ふう"
    ],
    "kunyomi": [
      "かえで"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "哉",
    "meaning": "How / What / Alas",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "かな",
      "や"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "蒼",
    "meaning": "Blue / Pale",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "あお.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "瑠",
    "meaning": "Lapis Lazuli",
    "onyomi": [
      "る",
      "りゅう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "萌",
    "meaning": "Show Symptoms Of / Sprout / Bud",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "も.える",
      "きざ.す",
      "めばえ",
      "きざ.し"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "硫",
    "meaning": "Sulphur",
    "onyomi": [
      "りゅう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "赦",
    "meaning": "Pardon / Forgiveness",
    "onyomi": [
      "しゃ"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "窃",
    "meaning": "Stealth / Steal / Secret",
    "onyomi": [
      "せつ"
    ],
    "kunyomi": [
      "ぬす.む",
      "ひそ.か"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "慨",
    "meaning": "Rue / Be Sad / Sigh",
    "onyomi": [
      "がい"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "扶",
    "meaning": "Aid / Help / Assist",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "たす.ける"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "戯",
    "meaning": "Frolic / Play / Sport",
    "onyomi": [
      "ぎ",
      "げ"
    ],
    "kunyomi": [
      "たわむ.れる",
      "ざ.れる",
      "じゃ.れる"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "忌",
    "meaning": "Mourning / Abhor / Detestable",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "い.む",
      "い.み",
      "い.まわしい"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "濁",
    "meaning": "Voiced / Uncleanness / Wrong",
    "onyomi": [
      "だく",
      "じょく"
    ],
    "kunyomi": [
      "にご.る",
      "にご.す"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "奔",
    "meaning": "Run / Bustle",
    "onyomi": [
      "ほん"
    ],
    "kunyomi": [
      "はし.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "肖",
    "meaning": "Resemblance",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "あやか.る"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "朽",
    "meaning": "Decay / Rot / Remain In Seclusion",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "く.ちる"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "殻",
    "meaning": "Husk / Nut Shell",
    "onyomi": [
      "かく",
      "こく",
      "ばい"
    ],
    "kunyomi": [
      "から",
      "がら"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "享",
    "meaning": "Enjoy / Receive / Undergo",
    "onyomi": [
      "きょう",
      "こう"
    ],
    "kunyomi": [
      "う.ける"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "藩",
    "meaning": "Clan / Enclosure",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "媒",
    "meaning": "Mediator / Go-between",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "なこうど"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "鶏",
    "meaning": "Chicken",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "にわとり",
      "とり"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "嘱",
    "meaning": "Entrust / Request / Send A Message",
    "onyomi": [
      "しょく"
    ],
    "kunyomi": [
      "しょく.する",
      "たの.む"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "迭",
    "meaning": "Transfer / Alternation",
    "onyomi": [
      "てつ"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "椎",
    "meaning": "Chinquapin / Mallet / Spine",
    "onyomi": [
      "つい",
      "すい"
    ],
    "kunyomi": [
      "つち",
      "う.つ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "絹",
    "meaning": "Silk",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "きぬ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "陪",
    "meaning": "Obeisance / Follow / Accompany",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "剖",
    "meaning": "Divide",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "譜",
    "meaning": "Musical Score / Music / Note",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "淑",
    "meaning": "Graceful / Gentle / Pure",
    "onyomi": [
      "しゅく"
    ],
    "kunyomi": [
      "しと.やか"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "帆",
    "meaning": "Sail",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "ほ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "憤",
    "meaning": "Aroused / Resent / Be Indignant",
    "onyomi": [
      "ふん"
    ],
    "kunyomi": [
      "いきどお.る"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "酌",
    "meaning": "Bar-tending / Serving Sake / The Host",
    "onyomi": [
      "しゃく"
    ],
    "kunyomi": [
      "く.む"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "暁",
    "meaning": "Daybreak / Dawn / In The Event",
    "onyomi": [
      "ぎょう",
      "きょう"
    ],
    "kunyomi": [
      "あかつき",
      "さと.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "傑",
    "meaning": "Greatness / Excellence",
    "onyomi": [
      "けつ"
    ],
    "kunyomi": [
      "すぐ.れる"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "錠",
    "meaning": "Lock / Fetters / Shackles",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "凌",
    "meaning": "Endure / Keep (rain)out / Stave Off",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "しの.ぐ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "瑞",
    "meaning": "Congratulations",
    "onyomi": [
      "ずい",
      "すい"
    ],
    "kunyomi": [
      "みず-",
      "しるし"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "璃",
    "meaning": "Glassy / Lapis Lazuli",
    "onyomi": [
      "り"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "遷",
    "meaning": "Transition / Move / Change",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [
      "うつ.る",
      "うつ.す",
      "みやこがえ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "拙",
    "meaning": "Bungling / Clumsy / Unskillful",
    "onyomi": [
      "せつ"
    ],
    "kunyomi": [
      "つたな.い"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "峠",
    "meaning": "Mountain Peak / Mountain Pass / Climax",
    "onyomi": [],
    "kunyomi": [
      "とうげ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "篤",
    "meaning": "Fervent / Kind / Cordial",
    "onyomi": [
      "とく"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "叔",
    "meaning": "Uncle / Youth",
    "onyomi": [
      "しゅく"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "雌",
    "meaning": "Feminine / Female",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "め-",
      "めす",
      "めん"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "堪",
    "meaning": "Withstand / Endure / Support",
    "onyomi": [
      "かん",
      "たん"
    ],
    "kunyomi": [
      "た.える",
      "たま.る",
      "こら.える",
      "こた.える"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "吟",
    "meaning": "Versify / Singing / Recital",
    "onyomi": [
      "ぎん"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "甚",
    "meaning": "Tremendously / Very / Great",
    "onyomi": [
      "じん"
    ],
    "kunyomi": [
      "はなは.だ",
      "はなは.だしい"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "崇",
    "meaning": "Adore / Respect / Revere",
    "onyomi": [
      "すう"
    ],
    "kunyomi": [
      "あが.める"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "漆",
    "meaning": "Lacquer / Varnish / Seven",
    "onyomi": [
      "しつ"
    ],
    "kunyomi": [
      "うるし"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "岬",
    "meaning": "Headland / Cape / Spit",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "みさき"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "紡",
    "meaning": "Spinning",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "つむ.ぐ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "礁",
    "meaning": "Reef / Sunken Rock",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "屯",
    "meaning": "Barracks / Police Station / Camp",
    "onyomi": [
      "とん"
    ],
    "kunyomi": [
      "たむろ"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "姻",
    "meaning": "Matrimony / Marry",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "擬",
    "meaning": "Mimic / Aim (a Gun) At / Nominate",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [
      "まが.い",
      "もど.き"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "睦",
    "meaning": "Intimate / Friendly / Harmonious",
    "onyomi": [
      "ぼく",
      "もく"
    ],
    "kunyomi": [
      "むつ.まじい",
      "むつ.む",
      "むつ.ぶ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "閑",
    "meaning": "Leisure",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "曹",
    "meaning": "Office / Official / Comrade",
    "onyomi": [
      "そう",
      "ぞう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "詠",
    "meaning": "Recitation / Poem / Song",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "よ.む",
      "うた.う"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "卑",
    "meaning": "Lowly / Base / Vile",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "いや.しい",
      "いや.しむ",
      "いや.しめる"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "侮",
    "meaning": "Scorn / Despise / Make Light Of",
    "onyomi": [
      "ぶ"
    ],
    "kunyomi": [
      "あなど.る",
      "あなず.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "鋳",
    "meaning": "Casting / Mint",
    "onyomi": [
      "ちゅう",
      "い",
      "しゅ",
      "しゅう"
    ],
    "kunyomi": [
      "い.る"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "胆",
    "meaning": "Gall Bladder / Courage / Pluck",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "きも"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "浪",
    "meaning": "Wandering / Waves / Billows",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "禍",
    "meaning": "Calamity / Misfortune / Evil",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "わざわい"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "酪",
    "meaning": "Dairy Products / Whey / Broth",
    "onyomi": [
      "らく"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "憧",
    "meaning": "Yearn After / Long For / Aspire To",
    "onyomi": [
      "しょう",
      "とう",
      "どう"
    ],
    "kunyomi": [
      "あこが.れる"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "慶",
    "meaning": "Jubilation / Congratulate / Rejoice",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "よろこ.び"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "亜",
    "meaning": "Asia / Rank Next / Come After",
    "onyomi": [
      "あ"
    ],
    "kunyomi": [
      "つ.ぐ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "汰",
    "meaning": "Washing / Sieving / Filtering",
    "onyomi": [
      "た",
      "たい"
    ],
    "kunyomi": [
      "おご.る",
      "にご.る",
      "よな.げる"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "梓",
    "meaning": "Catalpa Tree / Woodblock Printing",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "あずさ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "沙",
    "meaning": "Sand",
    "onyomi": [
      "さ",
      "しゃ"
    ],
    "kunyomi": [
      "すな",
      "よなげる"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "逝",
    "meaning": "Departed / Die",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [
      "ゆ.く",
      "い.く"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "匿",
    "meaning": "Hide / Shelter / Shield",
    "onyomi": [
      "とく"
    ],
    "kunyomi": [
      "かくま.う"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "寡",
    "meaning": "Widow / Minority / Few",
    "onyomi": [
      "か"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "痢",
    "meaning": "Diarrhea",
    "onyomi": [
      "り"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "坑",
    "meaning": "Pit / Hole",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "藍",
    "meaning": "Indigo",
    "onyomi": [
      "らん"
    ],
    "kunyomi": [
      "あい"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "畔",
    "meaning": "Paddy Ridge / Levee",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "あぜ",
      "くろ",
      "ほとり"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "唄",
    "meaning": "Song / Ballad",
    "onyomi": [
      "ばい"
    ],
    "kunyomi": [
      "うた",
      "うた.う"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "拷",
    "meaning": "Torture / Beat",
    "onyomi": [
      "ごう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "渓",
    "meaning": "Mountain Stream / Valley",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "たに",
      "たにがわ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "廉",
    "meaning": "Bargain / Reason / Charge",
    "onyomi": [
      "れん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "謹",
    "meaning": "Discreet / Reverently / Humbly",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "つつし.む"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "湧",
    "meaning": "Boil / Ferment / Seethe",
    "onyomi": [
      "ゆう",
      "よう",
      "ゆ"
    ],
    "kunyomi": [
      "わ.く"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "醜",
    "meaning": "Ugly / Unclean / Shame",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "みにく.い",
      "しこ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "升",
    "meaning": "Measuring Box / 1.8 Liter",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "ます"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "殉",
    "meaning": "Martyrdom / Follow By Resigning",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "煩",
    "meaning": "Anxiety / Trouble / Worry",
    "onyomi": [
      "はん",
      "ぼん"
    ],
    "kunyomi": [
      "わずら.う",
      "わずら.わす",
      "うるさ.がる",
      "うるさ.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "劾",
    "meaning": "Censure / Criminal Investigation",
    "onyomi": [
      "がい"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "桟",
    "meaning": "Scaffold / Cleat / Frame",
    "onyomi": [
      "さん",
      "せん"
    ],
    "kunyomi": [
      "かけはし"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "婿",
    "meaning": "Bridegroom / Son-in-law",
    "onyomi": [
      "せい"
    ],
    "kunyomi": [
      "むこ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "慕",
    "meaning": "Pining / Yearn For / Love Dearly",
    "onyomi": [
      "ぼ"
    ],
    "kunyomi": [
      "した.う"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "罷",
    "meaning": "Quit / Stop / Leave",
    "onyomi": [
      "ひ"
    ],
    "kunyomi": [
      "まか.り-",
      "や.める"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "矯",
    "meaning": "Rectify / Straighten / Correct",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "た.める"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "某",
    "meaning": "So-and-so / One / A Certain",
    "onyomi": [
      "ぼう"
    ],
    "kunyomi": [
      "それがし",
      "なにがし"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "囚",
    "meaning": "Captured / Criminal / Arrest",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "とら.われる"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "泌",
    "meaning": "Ooze / Flow / Soak In",
    "onyomi": [
      "ひつ",
      "ひ"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "漸",
    "meaning": "Steadily / Gradually Advancing / Finally",
    "onyomi": [
      "ぜん"
    ],
    "kunyomi": [
      "ようや.く",
      "やや",
      "ようよ.う",
      "すす.む"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "藻",
    "meaning": "Seaweed / Duckweed",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "も"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "妄",
    "meaning": "Delusion / Unnecessarily / Without Authority",
    "onyomi": [
      "もう",
      "ぼう"
    ],
    "kunyomi": [
      "みだ.りに"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "蛮",
    "meaning": "Barbarian",
    "onyomi": [
      "ばん"
    ],
    "kunyomi": [
      "えびす"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "倹",
    "meaning": "Frugal / Economy / Thrifty",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "つま.しい",
      "つづまやか"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "渥",
    "meaning": "Kindness / Moisten",
    "onyomi": [
      "あく"
    ],
    "kunyomi": [
      "あつ.い",
      "うるお.う"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "旭",
    "meaning": "Rising Sun / Morning Sun",
    "onyomi": [
      "きょく"
    ],
    "kunyomi": [
      "あさひ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "絢",
    "meaning": "Brilliant Fabric Design",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "鮎",
    "meaning": "Freshwater Trout / Smelt",
    "onyomi": [
      "でん",
      "ねん"
    ],
    "kunyomi": [
      "あゆ",
      "なまず"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "惟",
    "meaning": "Consider / Reflect / Think",
    "onyomi": [
      "い",
      "ゆい"
    ],
    "kunyomi": [
      "おも.んみる",
      "これ",
      "おも.うに"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "亥",
    "meaning": "Sign Of The Hog / 9-11pm / Twelfth Sign Of The Chinese Zodiac",
    "onyomi": [
      "がい",
      "かい"
    ],
    "kunyomi": [
      "い"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "郁",
    "meaning": "Cultural Progress / Perfume",
    "onyomi": [
      "いく"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "磯",
    "meaning": "Seashore / Beach",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "いそ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "壱",
    "meaning": "One (in Documents)",
    "onyomi": [
      "いち",
      "いつ"
    ],
    "kunyomi": [
      "ひとつ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "允",
    "meaning": "License / Sincerity / Permit",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "じょう",
      "まこと.に",
      "ゆるす"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "胤",
    "meaning": "Descendent / Issue / Offspring",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "たね"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "韻",
    "meaning": "Rhyme / Elegance / Tone",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "卯",
    "meaning": "Sign Of The Hare Or Rabbit / Fourth Sign Of Chinese Zodiac / 5-7am",
    "onyomi": [
      "ぼう",
      "もう"
    ],
    "kunyomi": [
      "う"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "丑",
    "meaning": "Sign Of The Ox Or Cow / 1-3am / Second Sign Of Chinese Zodiac",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "うし"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "叡",
    "meaning": "Intelligence / Imperial",
    "onyomi": [
      "えい"
    ],
    "kunyomi": [
      "あき.らか"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "謁",
    "meaning": "Audience / Audience (with King)",
    "onyomi": [
      "えつ"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "艶",
    "meaning": "Glossy / Luster / Glaze",
    "onyomi": [
      "えん"
    ],
    "kunyomi": [
      "つや",
      "なま.めかしい",
      "あで.やか",
      "つや.めく",
      "なま.めく"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "苑",
    "meaning": "Garden / Farm / Park",
    "onyomi": [
      "えん",
      "おん"
    ],
    "kunyomi": [
      "その",
      "う.つ"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "於",
    "meaning": "At / In / On",
    "onyomi": [
      "お",
      "よ"
    ],
    "kunyomi": [
      "おい.て",
      "お.ける",
      "ああ",
      "より"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "旺",
    "meaning": "Flourishing / Successful / Beautiful",
    "onyomi": [
      "おう",
      "きょう",
      "ごう"
    ],
    "kunyomi": [
      "かがや.き",
      "うつくし.い",
      "さかん"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "翁",
    "meaning": "Venerable Old Man",
    "onyomi": [
      "おう"
    ],
    "kunyomi": [
      "おきな"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "伽",
    "meaning": "Nursing / Attending / Entertainer",
    "onyomi": [
      "か",
      "が",
      "きゃ",
      "ぎゃ"
    ],
    "kunyomi": [
      "とぎ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "箇",
    "meaning": "Counter For Articles",
    "onyomi": [
      "か",
      "こ"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "茄",
    "meaning": "Eggplant",
    "onyomi": [
      "か"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "霞",
    "meaning": "Be Hazy / Grow Dim / Blurred",
    "onyomi": [
      "か",
      "げ"
    ],
    "kunyomi": [
      "かすみ",
      "かす.む"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "魁",
    "meaning": "Charging Ahead Of Others",
    "onyomi": [
      "かい"
    ],
    "kunyomi": [
      "さきがけ",
      "かしら"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "凱",
    "meaning": "Victory Song",
    "onyomi": [
      "がい",
      "かい"
    ],
    "kunyomi": [
      "かちどき",
      "やわらぐ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "馨",
    "meaning": "Fragrant / Balmy / Favourable",
    "onyomi": [
      "けい",
      "きょう"
    ],
    "kunyomi": [
      "かお.る",
      "かおり"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "嚇",
    "meaning": "Menacing / Dignity / Majesty",
    "onyomi": [
      "かく"
    ],
    "kunyomi": [
      "おど.す"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "褐",
    "meaning": "Brown / Woollen Kimono",
    "onyomi": [
      "かつ"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "叶",
    "meaning": "Grant / Answer",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "かな.える",
      "かな.う"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "樺",
    "meaning": "Birch / Dark Red",
    "onyomi": [
      "か"
    ],
    "kunyomi": [
      "かば",
      "かんば"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "茅",
    "meaning": "Miscanthus Reed",
    "onyomi": [
      "ぼう",
      "みょう"
    ],
    "kunyomi": [
      "かや",
      "ちがや"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "侃",
    "meaning": "Strong / Just / Righteous",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "つよ.い"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "棺",
    "meaning": "Coffin / Casket",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "莞",
    "meaning": "Smiling / Reed Used To Cover Tatami",
    "onyomi": [
      "かん"
    ],
    "kunyomi": [
      "い"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "巌",
    "meaning": "Rock / Crag / Boulder",
    "onyomi": [
      "がん"
    ],
    "kunyomi": [
      "いわ",
      "いわお",
      "けわ.しい"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "嬉",
    "meaning": "Glad / Pleased / Rejoice",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "うれ.しい",
      "たの.しむ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "毅",
    "meaning": "Strong",
    "onyomi": [
      "き",
      "ぎ"
    ],
    "kunyomi": [
      "つよ.い"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "稀",
    "meaning": "Rare / Phenomenal / Dilute (acid)",
    "onyomi": [
      "き",
      "け"
    ],
    "kunyomi": [
      "まれ",
      "まばら"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "誼",
    "meaning": "Friendship / Intimacy",
    "onyomi": [
      "ぎ"
    ],
    "kunyomi": [
      "よしみ",
      "よい"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "鞠",
    "meaning": "Ball",
    "onyomi": [
      "きく",
      "きゅう"
    ],
    "kunyomi": [
      "まり"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "橘",
    "meaning": "Mandarin Orange",
    "onyomi": [
      "きつ"
    ],
    "kunyomi": [
      "たちばな"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "亨",
    "meaning": "Pass Through / Go Smoothly",
    "onyomi": [
      "こう",
      "きょう",
      "ほう"
    ],
    "kunyomi": [
      "とお.る"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "匡",
    "meaning": "Correct / Save / Assist",
    "onyomi": [
      "きょう",
      "おう"
    ],
    "kunyomi": [
      "すく.う"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "喬",
    "meaning": "High / Boasting",
    "onyomi": [
      "きょう"
    ],
    "kunyomi": [
      "たか.い"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "尭",
    "meaning": "High / Far",
    "onyomi": [
      "ぎょう"
    ],
    "kunyomi": [
      "たか.い"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "桐",
    "meaning": "Paulownia",
    "onyomi": [
      "とう",
      "どう"
    ],
    "kunyomi": [
      "きり"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "斤",
    "meaning": "Axe / 1.32 Lb / Catty",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "欣",
    "meaning": "Take Pleasure In / Rejoice",
    "onyomi": [
      "きん",
      "ごん",
      "こん"
    ],
    "kunyomi": [
      "よろこ.ぶ",
      "よろこ.び"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "欽",
    "meaning": "Respect / Revere / Long For",
    "onyomi": [
      "きん",
      "こん"
    ],
    "kunyomi": [
      "つつし.む"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "芹",
    "meaning": "Parsley",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "せり"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "衿",
    "meaning": "Neck / Collar / Lapel",
    "onyomi": [
      "きん",
      "こん"
    ],
    "kunyomi": [
      "えり"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "玖",
    "meaning": "Beautiful Black Jewel / Nine",
    "onyomi": [
      "きゅう",
      "く"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "虞",
    "meaning": "Fear / Uneasiness / Anxiety",
    "onyomi": [
      "ぐ"
    ],
    "kunyomi": [
      "おそれ",
      "おもんぱか.る",
      "はか.る",
      "うれ.える",
      "あざむ.く",
      "あやま.る",
      "のぞ.む",
      "たの.しむ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "栗",
    "meaning": "Chestnut",
    "onyomi": [
      "りつ",
      "り"
    ],
    "kunyomi": [
      "くり",
      "おののく"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "薫",
    "meaning": "Send Forth Fragrance / Fragrant / Be Scented",
    "onyomi": [
      "くん"
    ],
    "kunyomi": [
      "かお.る"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "袈",
    "meaning": "A Coarse Camlet",
    "onyomi": [
      "け",
      "か"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "圭",
    "meaning": "Square Jewel / Corner / Angle",
    "onyomi": [
      "けい",
      "け"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "慧",
    "meaning": "Wise",
    "onyomi": [
      "けい",
      "え"
    ],
    "kunyomi": [
      "さとい"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "桂",
    "meaning": "Japanese Judas-tree / Cinnamon Tree",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "かつら"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "絃",
    "meaning": "String / Cord / Samisen Music",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "いと"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "伍",
    "meaning": "Five / Five-man Squad / File",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "いつつ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "梧",
    "meaning": "Chinese Parasol Tree / Phoenix Tree",
    "onyomi": [
      "ご"
    ],
    "kunyomi": [
      "あおぎり"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "瑚",
    "meaning": "Ancestral Offering Receptacle / Coral",
    "onyomi": [
      "こ",
      "ご"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "侯",
    "meaning": "Marquis / Lord / Daimyo",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "倖",
    "meaning": "Happiness / Luck",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "しあわ.せ",
      "さいわ.い"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "宏",
    "meaning": "Wide / Large",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "ひろ.い"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "弘",
    "meaning": "Vast / Broad / Wide",
    "onyomi": [
      "こう",
      "ぐ"
    ],
    "kunyomi": [
      "ひろ.い"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "昂",
    "meaning": "Rise",
    "onyomi": [
      "こう",
      "ごう"
    ],
    "kunyomi": [
      "あ.がる",
      "たか.い",
      "たか.ぶる"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "晃",
    "meaning": "Clear",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "あきらか"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "浩",
    "meaning": "Wide Expanse / Abundance / Vigorous",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "おおき.い",
      "ひろ.い"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "紘",
    "meaning": "Large",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "おおづな",
      "つな",
      "つなぐ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "鴻",
    "meaning": "Large Bird / Wild Goose / Large",
    "onyomi": [
      "こう",
      "ごう"
    ],
    "kunyomi": [
      "おおとり",
      "ひしくい",
      "おおがり"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "墾",
    "meaning": "Ground-breaking / Open Up Farmland",
    "onyomi": [
      "こん"
    ],
    "kunyomi": [
      "は.る",
      "ひら.く"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "嵯",
    "meaning": "Steep / Craggy / Rugged",
    "onyomi": [
      "さ",
      "し"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "瑳",
    "meaning": "Polish / Brilliant White Luster Of A Gem / Artful Smile",
    "onyomi": [
      "さ"
    ],
    "kunyomi": [
      "みが.く"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "裟",
    "meaning": "Buddhist Surplice",
    "onyomi": [
      "さ",
      "しゃ"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "采",
    "meaning": "Dice / Form / Appearance",
    "onyomi": [
      "さい"
    ],
    "kunyomi": [
      "と.る",
      "いろどり"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "冴",
    "meaning": "Be Clear / Serene / Cold",
    "onyomi": [
      "ご",
      "こ"
    ],
    "kunyomi": [
      "さ.える",
      "こお.る",
      "ひ.える"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "朔",
    "meaning": "Conjunction (astronomy) / First Day Of Month / North",
    "onyomi": [
      "さく"
    ],
    "kunyomi": [
      "ついたち"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "笹",
    "meaning": "Bamboo Grass / (kokuji)",
    "onyomi": [],
    "kunyomi": [
      "ささ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "皐",
    "meaning": "Swamp / Shore",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "さつき"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "燦",
    "meaning": "Brilliant",
    "onyomi": [
      "さん"
    ],
    "kunyomi": [
      "さん.たる",
      "あき.らか",
      "きらめ.く",
      "きら.めく"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "蚕",
    "meaning": "Silkworm",
    "onyomi": [
      "さん",
      "てん"
    ],
    "kunyomi": [
      "かいこ",
      "こ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "嗣",
    "meaning": "Heir / Succeed",
    "onyomi": [
      "し"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "肢",
    "meaning": "Limb / Arms & Legs",
    "onyomi": [
      "し"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "賜",
    "meaning": "Grant / Gift / Boon",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "たまわ.る",
      "たま.う",
      "たも.う"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "爾",
    "meaning": "You / Thou / Second Person",
    "onyomi": [
      "じ",
      "に"
    ],
    "kunyomi": [
      "なんじ",
      "しかり",
      "その",
      "のみ",
      "おれ",
      "しか"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "蒔",
    "meaning": "Sow (seeds)",
    "onyomi": [
      "し",
      "じ"
    ],
    "kunyomi": [
      "う.える",
      "ま.く"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "汐",
    "meaning": "Eventide / Tide / Salt Water",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "しお",
      "うしお",
      "せい"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "偲",
    "meaning": "Recollect / Remember",
    "onyomi": [
      "さい",
      "し"
    ],
    "kunyomi": [
      "しの.ぶ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "紗",
    "meaning": "Gauze / Gossamer",
    "onyomi": [
      "さ",
      "しゃ"
    ],
    "kunyomi": [
      "うすぎぬ"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "勺",
    "meaning": "Ladle / One Tenth Of A Go / Dip",
    "onyomi": [
      "しゃく"
    ],
    "kunyomi": [],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "爵",
    "meaning": "Baron / Peerage / Court Rank",
    "onyomi": [
      "しゃく"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "儒",
    "meaning": "Confucian",
    "onyomi": [
      "じゅ"
    ],
    "kunyomi": [],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "愁",
    "meaning": "Distress / Grieve / Lament",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "うれ.える",
      "うれ.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "洲",
    "meaning": "Continent / Sandbar / Island",
    "onyomi": [
      "しゅう",
      "す"
    ],
    "kunyomi": [
      "しま"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "峻",
    "meaning": "High / Steep",
    "onyomi": [
      "しゅん"
    ],
    "kunyomi": [
      "けわ.しい",
      "たか.い"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "竣",
    "meaning": "End / Finish",
    "onyomi": [
      "どう",
      "しゅん"
    ],
    "kunyomi": [
      "わらわ",
      "わらべ",
      "おわ.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "舜",
    "meaning": "Type Of Morning Glory / Rose Of Sharon / Althea",
    "onyomi": [
      "しゅん"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "淳",
    "meaning": "Pure",
    "onyomi": [
      "じゅん",
      "しゅん"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "遵",
    "meaning": "Abide By / Follow / Obey",
    "onyomi": [
      "じゅん"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "渚",
    "meaning": "Strand / Beach / Shore",
    "onyomi": [
      "しょ"
    ],
    "kunyomi": [
      "なぎさ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "恕",
    "meaning": "Excuse / Tolerate / Forgive",
    "onyomi": [
      "じょ",
      "しょ"
    ],
    "kunyomi": [
      "ゆる.す"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "宵",
    "meaning": "Wee Hours / Evening / Early Night",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "よい"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "抄",
    "meaning": "Extract / Selection / Summary",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "捷",
    "meaning": "Victory / Fast",
    "onyomi": [
      "しょう",
      "そう"
    ],
    "kunyomi": [
      "はや.い"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "梢",
    "meaning": "Treetops / Twig",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "こずえ",
      "くすのき"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "硝",
    "meaning": "Nitrate / Saltpeter",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "菖",
    "meaning": "Iris",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "蕉",
    "meaning": "Banana / Plantain",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "詔",
    "meaning": "Imperial Edict",
    "onyomi": [
      "しょう"
    ],
    "kunyomi": [
      "みことのり"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "丞",
    "meaning": "Help",
    "onyomi": [
      "じょう",
      "しょう"
    ],
    "kunyomi": [
      "すく.う",
      "たす.ける"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "穣",
    "meaning": "Good Crops / Prosperity / 10**28",
    "onyomi": [
      "じょう"
    ],
    "kunyomi": [
      "わら",
      "ゆたか"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "晋",
    "meaning": "Advance",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "すす.む"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "榛",
    "meaning": "Hazelnut / Filbert",
    "onyomi": [
      "しん",
      "はん"
    ],
    "kunyomi": [
      "はしばみ",
      "はり"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "秦",
    "meaning": "Manchu Dynasty / Name Given To Naturalized Foreigners",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "はた"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "薪",
    "meaning": "Fuel / Firewood / Kindling",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "たきぎ",
      "まき"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "翠",
    "meaning": "Green / Kingfisher",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "かわせみ",
      "みどり"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "錘",
    "meaning": "Weight / Plumb Bob / Sinker",
    "onyomi": [
      "すい"
    ],
    "kunyomi": [
      "つむ",
      "おもり"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "嵩",
    "meaning": "Be Aggravated / Grow Worse / Grow Bulky",
    "onyomi": [
      "すう",
      "しゅう"
    ],
    "kunyomi": [
      "かさ",
      "かさ.む",
      "たか.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "雛",
    "meaning": "Chick / Squab / Duckling",
    "onyomi": [
      "すう",
      "す",
      "じゅ"
    ],
    "kunyomi": [
      "ひな",
      "ひよこ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "畝",
    "meaning": "Furrow / Thirty Tsubo / Ridge",
    "onyomi": [
      "ぼう",
      "ほ",
      "も",
      "む"
    ],
    "kunyomi": [
      "せ",
      "うね"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "斥",
    "meaning": "Reject / Retreat / Recede",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "しりぞ.ける"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "碩",
    "meaning": "Large / Great / Eminent",
    "onyomi": [
      "せき"
    ],
    "kunyomi": [
      "おお.きい"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "銑",
    "meaning": "Pig Iron",
    "onyomi": [
      "せん"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "繕",
    "meaning": "Darning / Repair / Mend",
    "onyomi": [
      "ぜん"
    ],
    "kunyomi": [
      "つくろ.う"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "塑",
    "meaning": "Model / Molding",
    "onyomi": [
      "そ"
    ],
    "kunyomi": [
      "でく"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "惣",
    "meaning": "All",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "すべ.て"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "綜",
    "meaning": "Rule / Synthesize",
    "onyomi": [
      "そう"
    ],
    "kunyomi": [
      "おさ.める",
      "す.べる"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "黛",
    "meaning": "Blackened Eyebrows",
    "onyomi": [
      "たい"
    ],
    "kunyomi": [
      "まゆずみ"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "鯛",
    "meaning": "Sea Bream / Red Snapper",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "たい"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "鷹",
    "meaning": "Hawk",
    "onyomi": [
      "よう",
      "おう"
    ],
    "kunyomi": [
      "たか"
    ],
    "strokes": 24,
    "jlpt": "N1"
  },
  {
    "char": "啄",
    "meaning": "Peck / Pick Up",
    "onyomi": [
      "たく",
      "つく",
      "とく"
    ],
    "kunyomi": [
      "ついば.む",
      "つつ.く"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "琢",
    "meaning": "Polish",
    "onyomi": [
      "たく"
    ],
    "kunyomi": [
      "みが.く"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "只",
    "meaning": "Only / Free / In Addition",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "ただ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "但",
    "meaning": "However / But",
    "onyomi": [
      "たん"
    ],
    "kunyomi": [
      "ただ.し"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "辰",
    "meaning": "Sign Of The Dragon / 7-9am / Fifth Sign Of Chinese Zodiac",
    "onyomi": [
      "しん",
      "じん"
    ],
    "kunyomi": [
      "たつ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "巽",
    "meaning": "Southeast",
    "onyomi": [
      "そん"
    ],
    "kunyomi": [
      "たつみ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "檀",
    "meaning": "Cedar / Sandlewood / Spindle Tree",
    "onyomi": [
      "だん",
      "たん"
    ],
    "kunyomi": [
      "まゆみ"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "逐",
    "meaning": "Pursue / Drive Away / Chase",
    "onyomi": [
      "ちく"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "嫡",
    "meaning": "Legitimate Wife / Direct Descent (non-bastard)",
    "onyomi": [
      "ちゃく",
      "てき"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "衷",
    "meaning": "Inmost / Heart / Mind",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "猪",
    "meaning": "Boar",
    "onyomi": [
      "ちょ"
    ],
    "kunyomi": [
      "い",
      "いのしし"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "暢",
    "meaning": "Stretch",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "のび.る"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "脹",
    "meaning": "Dilate / Distend / Bulge",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "は.れる",
      "ふく.らむ",
      "ふく.れる"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "勅",
    "meaning": "Imperial Order",
    "onyomi": [
      "ちょく"
    ],
    "kunyomi": [
      "いまし.める",
      "みことのり"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "朕",
    "meaning": "Majestic Plural / Imperial We",
    "onyomi": [
      "ちん"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "槻",
    "meaning": "Zelkova Tree",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "つき"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "蔦",
    "meaning": "Vine / Ivy",
    "onyomi": [
      "ちょう"
    ],
    "kunyomi": [
      "つた"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "椿",
    "meaning": "Camellia",
    "onyomi": [
      "ちん",
      "ちゅん"
    ],
    "kunyomi": [
      "つばき"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "紬",
    "meaning": "Pongee (a Knotted Silk Cloth)",
    "onyomi": [
      "ちゅう"
    ],
    "kunyomi": [
      "つむぎ",
      "つむ.ぐ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "悌",
    "meaning": "Serving Our Elders",
    "onyomi": [
      "てい",
      "だい"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "禎",
    "meaning": "Happiness / Blessed / Good Fortune",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "さいわ.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "逓",
    "meaning": "Relay / In Turn / Sending",
    "onyomi": [
      "てい"
    ],
    "kunyomi": [
      "かわ.る",
      "たがいに"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "杜",
    "meaning": "Woods / Grove",
    "onyomi": [
      "と",
      "とう",
      "ず"
    ],
    "kunyomi": [
      "もり",
      "ふさ.ぐ",
      "やまなし"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "痘",
    "meaning": "Pox / Smallpox",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "謄",
    "meaning": "Mimeograph / Copy",
    "onyomi": [
      "とう"
    ],
    "kunyomi": [],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "寅",
    "meaning": "Sign Of The Tiger / 3-5am / Third Sign Of Chinese Zodiac",
    "onyomi": [
      "いん"
    ],
    "kunyomi": [
      "とら"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "酉",
    "meaning": "West / Bird / Sign Of The Bird",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "とり"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "惇",
    "meaning": "Sincere / Kind / Considerate",
    "onyomi": [
      "しゅん",
      "じゅん",
      "とん"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "敦",
    "meaning": "Industry / Kindliness",
    "onyomi": [
      "とん",
      "たい",
      "だん",
      "ちょう"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "凪",
    "meaning": "Lull / Calm / (kokuji)",
    "onyomi": [],
    "kunyomi": [
      "なぎ",
      "な.ぐ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "捺",
    "meaning": "Press / Print / Affix A Seal",
    "onyomi": [
      "なつ",
      "だつ"
    ],
    "kunyomi": [
      "さ.す",
      "お.す"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "楠",
    "meaning": "Camphor Tree",
    "onyomi": [
      "なん",
      "だん",
      "ぜん",
      "ねん"
    ],
    "kunyomi": [
      "くす",
      "くすのき"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "弐",
    "meaning": "Ii / Two / Second",
    "onyomi": [
      "に",
      "じ"
    ],
    "kunyomi": [
      "ふた.つ",
      "そえ"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "巴",
    "meaning": "Comma-design",
    "onyomi": [
      "は"
    ],
    "kunyomi": [
      "ともえ",
      "うずまき"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "萩",
    "meaning": "Bush Clover",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "はぎ"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "肇",
    "meaning": "Beginning",
    "onyomi": [
      "ちょう",
      "じょう",
      "とう"
    ],
    "kunyomi": [
      "はじ.める",
      "はじめ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "頒",
    "meaning": "Distribute / Disseminate / Partition",
    "onyomi": [
      "はん"
    ],
    "kunyomi": [
      "わか.つ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "眉",
    "meaning": "Eyebrow",
    "onyomi": [
      "び",
      "み"
    ],
    "kunyomi": [
      "まゆ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "柊",
    "meaning": "Holly",
    "onyomi": [
      "しゅ",
      "しゅう"
    ],
    "kunyomi": [
      "ひいらぎ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "彦",
    "meaning": "Lad / Boy (ancient)",
    "onyomi": [
      "げん"
    ],
    "kunyomi": [
      "ひこ"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "彪",
    "meaning": "Spotted / Mottled / Patterned",
    "onyomi": [
      "ひょう",
      "ひゅう"
    ],
    "kunyomi": [
      "あや"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "彬",
    "meaning": "Refined / Gentle",
    "onyomi": [
      "ひん",
      "ふん"
    ],
    "kunyomi": [
      "うるわ.しい",
      "あき.らか"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "芙",
    "meaning": "Lotus / Mt Fuji",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "賦",
    "meaning": "Levy / Ode / Prose",
    "onyomi": [
      "ふ",
      "ぶ"
    ],
    "kunyomi": [],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "附",
    "meaning": "Affixed / Attach / Refer To",
    "onyomi": [
      "ふ"
    ],
    "kunyomi": [
      "つ.ける",
      "つ.く"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "蕗",
    "meaning": "Butterbur / Bog Rhubarb",
    "onyomi": [
      "ろ",
      "る"
    ],
    "kunyomi": [
      "ふき"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "丙",
    "meaning": "Third Class / 3rd / 3rd Calendar Sign",
    "onyomi": [
      "へい"
    ],
    "kunyomi": [
      "ひのえ"
    ],
    "strokes": 5,
    "jlpt": "N1"
  },
  {
    "char": "碧",
    "meaning": "Blue / Green",
    "onyomi": [
      "へき",
      "ひゃく"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "甫",
    "meaning": "For The First Time / Not Until",
    "onyomi": [
      "ほ",
      "ふ"
    ],
    "kunyomi": [
      "はじ.めて"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "倣",
    "meaning": "Emulate / Imitate",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "なら.う"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "朋",
    "meaning": "Companion / Friend",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "とも"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "鳳",
    "meaning": "Male Mythical Bird",
    "onyomi": [
      "ほう",
      "ふう"
    ],
    "kunyomi": [],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "鵬",
    "meaning": "Phoenix",
    "onyomi": [
      "ほう"
    ],
    "kunyomi": [
      "おおとり"
    ],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "槙",
    "meaning": "Twig / Ornamental Evergreen",
    "onyomi": [
      "てん",
      "しん"
    ],
    "kunyomi": [
      "まき",
      "こずえ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "柾",
    "meaning": "Straight Grain / Spindle Tree / (kokuji)",
    "onyomi": [],
    "kunyomi": [
      "まさ",
      "まさめ",
      "まさき"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "亦",
    "meaning": "Also / Again",
    "onyomi": [
      "えき",
      "やく"
    ],
    "kunyomi": [
      "また"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "繭",
    "meaning": "Cocoon",
    "onyomi": [
      "けん"
    ],
    "kunyomi": [
      "まゆ",
      "きぬ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "麿",
    "meaning": "I / You / (kokuji)",
    "onyomi": [],
    "kunyomi": [
      "まろ"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "巳",
    "meaning": "Sign Of The Snake Or Serpent / 9-11am / Sixth Sign Of Chinese Zodiac",
    "onyomi": [
      "し"
    ],
    "kunyomi": [
      "み"
    ],
    "strokes": 3,
    "jlpt": "N1"
  },
  {
    "char": "稔",
    "meaning": "Harvest / Ripen",
    "onyomi": [
      "ねん",
      "じん",
      "にん"
    ],
    "kunyomi": [
      "みの.る",
      "みのり"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "椋",
    "meaning": "Type Of Deciduous Tree / Grey Starling",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "むく"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "孟",
    "meaning": "Chief / Beginning",
    "onyomi": [
      "もう",
      "ぼう",
      "みょう"
    ],
    "kunyomi": [
      "かしら"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "耗",
    "meaning": "Decrease",
    "onyomi": [
      "もう",
      "こう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "匁",
    "meaning": "Monme / 3.75 Grams / (kokuji)",
    "onyomi": [],
    "kunyomi": [
      "もんめ",
      "め"
    ],
    "strokes": 4,
    "jlpt": "N1"
  },
  {
    "char": "冶",
    "meaning": "Melting / Smelting",
    "onyomi": [
      "や"
    ],
    "kunyomi": [
      "い.る"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "耶",
    "meaning": "Question Mark",
    "onyomi": [
      "や",
      "じゃ"
    ],
    "kunyomi": [
      "か"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "佑",
    "meaning": "Help / Assist",
    "onyomi": [
      "ゆう",
      "う"
    ],
    "kunyomi": [
      "たす.ける"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "宥",
    "meaning": "Soothe / Calm / Pacify",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "なだ.める",
      "ゆる.す"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "柚",
    "meaning": "Citron",
    "onyomi": [
      "ゆ",
      "ゆう",
      "じく"
    ],
    "kunyomi": [
      "ゆず"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "祐",
    "meaning": "Help",
    "onyomi": [
      "ゆう",
      "う"
    ],
    "kunyomi": [
      "たす.ける"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "邑",
    "meaning": "Village / Rural Community / Right Village Radical (no. 163)",
    "onyomi": [
      "ゆう"
    ],
    "kunyomi": [
      "むら"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "楊",
    "meaning": "Willow",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "やなぎ"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "窯",
    "meaning": "Kiln / Oven / Furnace",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "かま"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "耀",
    "meaning": "Shine / Sparkle / Gleam",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "かがや.く",
      "ひかり"
    ],
    "strokes": 20,
    "jlpt": "N1"
  },
  {
    "char": "蓉",
    "meaning": "Lotus",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "濫",
    "meaning": "Excessive / Overflow / Spread Out",
    "onyomi": [
      "らん"
    ],
    "kunyomi": [
      "みだ.りに",
      "みだ.りがましい"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "蘭",
    "meaning": "Orchid / Holland",
    "onyomi": [
      "らん",
      "ら"
    ],
    "kunyomi": [],
    "strokes": 19,
    "jlpt": "N1"
  },
  {
    "char": "吏",
    "meaning": "Officer / An Official",
    "onyomi": [
      "り"
    ],
    "kunyomi": [],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "李",
    "meaning": "Plum",
    "onyomi": [
      "り"
    ],
    "kunyomi": [
      "すもも"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "琉",
    "meaning": "Precious Stone / Gem / Lapis Lazuli",
    "onyomi": [
      "りゅう",
      "る"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "稜",
    "meaning": "Angle / Edge / Corner",
    "onyomi": [
      "りょう",
      "ろう"
    ],
    "kunyomi": [
      "いつ",
      "かど"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "厘",
    "meaning": "Rin / 1/10 Sen / 1/10 Bu",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "琳",
    "meaning": "Jewel / Tinkling Of Jewelry",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "麟",
    "meaning": "Chinese Unicorn / Genius / Giraffe",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [],
    "strokes": 24,
    "jlpt": "N1"
  },
  {
    "char": "伶",
    "meaning": "Actor",
    "onyomi": [
      "れい",
      "りょう"
    ],
    "kunyomi": [
      "わざおぎ"
    ],
    "strokes": 7,
    "jlpt": "N1"
  },
  {
    "char": "嶺",
    "meaning": "Peak / Summit",
    "onyomi": [
      "れい",
      "りょう"
    ],
    "kunyomi": [
      "みね"
    ],
    "strokes": 17,
    "jlpt": "N1"
  },
  {
    "char": "怜",
    "meaning": "Wise",
    "onyomi": [
      "れい",
      "れん",
      "りょう"
    ],
    "kunyomi": [
      "あわ.れむ",
      "さと.い"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "玲",
    "meaning": "Sound Of Jewels",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "楼",
    "meaning": "Watchtower / Lookout / High Building",
    "onyomi": [
      "ろう"
    ],
    "kunyomi": [
      "たかどの"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "禄",
    "meaning": "Fief / Allowance / Pension",
    "onyomi": [
      "ろく"
    ],
    "kunyomi": [
      "さいわ.い",
      "ふち"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "倭",
    "meaning": "Yamato / Ancient Japan",
    "onyomi": [
      "わ",
      "い"
    ],
    "kunyomi": [
      "やまと",
      "したが.う"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "亘",
    "meaning": "Span / Range / Extend Over",
    "onyomi": [
      "こう",
      "かん",
      "せん"
    ],
    "kunyomi": [
      "わた.る",
      "もと.める"
    ],
    "strokes": 6,
    "jlpt": "N1"
  },
  {
    "char": "侑",
    "meaning": "Urge To Eat",
    "onyomi": [
      "ゆう",
      "う"
    ],
    "kunyomi": [
      "すす.める",
      "たす.ける"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "勁",
    "meaning": "Strong",
    "onyomi": [
      "けい"
    ],
    "kunyomi": [
      "つよ.い"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "奎",
    "meaning": "Star / God Of Literature",
    "onyomi": [
      "けい",
      "き"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "崚",
    "meaning": "Mountains Towering In A Row",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "彗",
    "meaning": "Comet",
    "onyomi": [
      "すい",
      "え",
      "けい",
      "せい"
    ],
    "kunyomi": [
      "ほうき"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "昴",
    "meaning": "The Pleiades",
    "onyomi": [
      "こう",
      "ぼう"
    ],
    "kunyomi": [
      "すばる"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "晏",
    "meaning": "Late / Quiet / Sets (sun)",
    "onyomi": [
      "あん"
    ],
    "kunyomi": [
      "おそ.い"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "晨",
    "meaning": "Morning / Early",
    "onyomi": [
      "しん"
    ],
    "kunyomi": [
      "あした",
      "とき",
      "あさ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "晟",
    "meaning": "Clear",
    "onyomi": [
      "せい",
      "じょう"
    ],
    "kunyomi": [
      "あきらか"
    ],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "暉",
    "meaning": "Shine / Light",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "かが.やく"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "椰",
    "meaning": "Coconut Tree",
    "onyomi": [
      "や"
    ],
    "kunyomi": [
      "やし"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "毬",
    "meaning": "Burr / Ball",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [
      "いが",
      "まり"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "洸",
    "meaning": "Sparkling Water",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "洵",
    "meaning": "Alike / Truth",
    "onyomi": [
      "じゅん",
      "しゅん"
    ],
    "kunyomi": [
      "の.ぶ",
      "まこと.に"
    ],
    "strokes": 9,
    "jlpt": "N1"
  },
  {
    "char": "滉",
    "meaning": "Deep And Broad",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "ひろ.い"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "漱",
    "meaning": "Gargle / Rinse Mouth",
    "onyomi": [
      "そう",
      "しゅう",
      "す"
    ],
    "kunyomi": [
      "くちすす.ぐ",
      "くちそそ.ぐ",
      "うがい",
      "すす.ぐ"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "澪",
    "meaning": "Water Route / Shipping Channel",
    "onyomi": [
      "れい"
    ],
    "kunyomi": [
      "みお"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "燎",
    "meaning": "Burn / Bonfire",
    "onyomi": [
      "りょう"
    ],
    "kunyomi": [
      "かがりび"
    ],
    "strokes": 16,
    "jlpt": "N1"
  },
  {
    "char": "燿",
    "meaning": "Shine",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "かがや.く",
      "ひかり"
    ],
    "strokes": 18,
    "jlpt": "N1"
  },
  {
    "char": "瑶",
    "meaning": "Beautiful As A Jewel",
    "onyomi": [
      "よう"
    ],
    "kunyomi": [
      "たま"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "皓",
    "meaning": "White / Clear",
    "onyomi": [
      "こう"
    ],
    "kunyomi": [
      "しろ.い",
      "ひか.る"
    ],
    "strokes": 12,
    "jlpt": "N1"
  },
  {
    "char": "眸",
    "meaning": "Pupil Of The Eye",
    "onyomi": [
      "ぼう",
      "む"
    ],
    "kunyomi": [
      "ひとみ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "笙",
    "meaning": "A Reed Instrument",
    "onyomi": [
      "しょう",
      "そう"
    ],
    "kunyomi": [
      "ふえ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "綸",
    "meaning": "Thread / Silk Cloth",
    "onyomi": [
      "りん",
      "かん"
    ],
    "kunyomi": [
      "いと"
    ],
    "strokes": 14,
    "jlpt": "N1"
  },
  {
    "char": "脩",
    "meaning": "Dried Meat",
    "onyomi": [
      "しゅう"
    ],
    "kunyomi": [
      "おさ.める",
      "なが.い",
      "ほじし"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "茉",
    "meaning": "Jasmine",
    "onyomi": [
      "まつ",
      "ばつ",
      "ま"
    ],
    "kunyomi": [],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "菫",
    "meaning": "The Violet",
    "onyomi": [
      "きん"
    ],
    "kunyomi": [
      "すみれ"
    ],
    "strokes": 11,
    "jlpt": "N1"
  },
  {
    "char": "詢",
    "meaning": "Consult With",
    "onyomi": [
      "じゅん",
      "しゅん"
    ],
    "kunyomi": [
      "はか.る",
      "まこと"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "諄",
    "meaning": "Tedious",
    "onyomi": [
      "しゅん"
    ],
    "kunyomi": [
      "ひちくど.い",
      "くど.い",
      "くどくど",
      "ねんご.ろ"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "赳",
    "meaning": "Strong And Brave",
    "onyomi": [
      "きゅう"
    ],
    "kunyomi": [],
    "strokes": 10,
    "jlpt": "N1"
  },
  {
    "char": "迪",
    "meaning": "Edify / Way / Path",
    "onyomi": [
      "てき"
    ],
    "kunyomi": [
      "みち",
      "みちび.く",
      "すす.む",
      "いた.る"
    ],
    "strokes": 8,
    "jlpt": "N1"
  },
  {
    "char": "頌",
    "meaning": "Eulogy",
    "onyomi": [
      "しょう",
      "じゅ",
      "よう"
    ],
    "kunyomi": [
      "かたち",
      "たた.える",
      "ほめ.る"
    ],
    "strokes": 13,
    "jlpt": "N1"
  },
  {
    "char": "黎",
    "meaning": "Dark / Black / Many",
    "onyomi": [
      "れい",
      "り"
    ],
    "kunyomi": [
      "くろ.い"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "凜",
    "meaning": "Cold / Strict / Severe",
    "onyomi": [
      "りん"
    ],
    "kunyomi": [
      "きびし.い"
    ],
    "strokes": 15,
    "jlpt": "N1"
  },
  {
    "char": "熙",
    "meaning": "Bright / Sunny / Prosperous",
    "onyomi": [
      "き"
    ],
    "kunyomi": [
      "たのし.む",
      "ひか.る",
      "ひろ.い",
      "よろこ.ぶ",
      "かわ.く",
      "あきらか",
      "ひろ.める",
      "ひろ.まる"
    ],
    "strokes": 15,
    "jlpt": "N1"
  }
];
