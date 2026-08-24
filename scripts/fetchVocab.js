const fs = require("fs");
const path = require("path");
const dns = require("node:dns");

// Force IPv4
dns.setDefaultResultOrder("ipv4first");

const levels = ["n5", "n4", "n3", "n2", "n1"];
const BASE_URL = "https://cdn.jsdelivr.net/gh/stephenmk/yomitan-jlpt-vocab@master/original_data/";

async function fetchVocab() {
  console.log("Mencoba mengunduh ribuan kosakata dari CDN...");
  let allVocab = [];

  try {
    for (const lvl of levels) {
      console.log(`Mengunduh ${lvl.toUpperCase()}...`);
      const res = await fetch(`${BASE_URL}${lvl}.csv`);
      if (!res.ok) throw new Error(`Gagal fetch ${lvl}`);
      const csvText = await res.text();
      
      const lines = csvText.trim().split('\n').slice(1); // skip header
      const parsed = lines.map(line => {
        // split by comma but handle quotes if necessary. Usually these are simple CSVs
        // Let's just do a simple split and fallback if comma is inside quotes
        const parts = line.split(',');
        const seq = parts[0];
        const kana = parts[1];
        const kanji = parts[2];
        const definition = parts.slice(3).join(',').replace(/^"|"$/g, ''); // Handle commas in definition
        
        return {
          level: parseInt(lvl.replace('n', '')),
          word: kanji || kana,
          reading: kanji ? kana : "",
          meaning: definition,
          type: "Vocabulary"
        };
      }).filter(v => v.word !== "");
      
      allVocab = allVocab.concat(parsed);
    }
  } catch (err) {
    console.warn("⚠️ Error fetching data:", err.message);
    return;
  }

  // Write to file
  const fileContent = `export interface Vocabulary {
  level: number;
  word: string;
  reading: string;
  meaning: string;
  type?: string;
}

export const vocabularyData: Vocabulary[] = ${JSON.stringify(allVocab, null, 2)};
`;

  const outputPath = path.join(__dirname, "..", "src", "lib", "vocabularyData.ts");
  fs.writeFileSync(outputPath, fileContent, "utf-8");

  console.log(`✅ Berhasil menulis ${allVocab.length} kosakata ke src/lib/vocabularyData.ts`);
}

fetchVocab();
