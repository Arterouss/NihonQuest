const fs = require("fs");
const path = require("path");
const dns = require("node:dns");

// Force IPv4 to bypass local DNS resolution issues
dns.setDefaultResultOrder("ipv4first");

async function fetchKanji() {
  console.log("Fetching kanji data from jsdelivr CDN (bypassing github raw block)...");
  try {
    const res = await fetch("https://cdn.jsdelivr.net/gh/davidluzgouveia/kanji-data@master/kanji.json");
    const data = await res.json();

    const kanjiList = [];
    for (const [char, info] of Object.entries(data)) {
      if (info.jlpt_new >= 1 && info.jlpt_new <= 5) {
        kanjiList.push({
          char: char,
          meaning: info.meanings.slice(0, 3).join(" / "),
          onyomi: info.readings_on || [],
          kunyomi: info.readings_kun || [],
          strokes: info.strokes,
          jlpt: `N${info.jlpt_new}`,
        });
      }
    }

    // Sort from N5 to N1
    kanjiList.sort((a, b) => b.jlpt.localeCompare(a.jlpt));

    const fileContent = `export type KanjiEntry = {
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

export const kanjiData: KanjiEntry[] = ${JSON.stringify(kanjiList, null, 2)};
`;

    fs.writeFileSync(path.join(__dirname, "../src/lib/kanjiData.ts"), fileContent, "utf8");
    console.log(`Successfully wrote ${kanjiList.length} kanji to src/lib/kanjiData.ts`);
  } catch (err) {
    console.error("Error fetching kanji data:", err);
  }
}

fetchKanji();
