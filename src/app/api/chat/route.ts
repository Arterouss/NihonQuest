import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

// Initialize the Google Generative AI client
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || '',
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: `Kamu adalah Sensei AI, seorang guru bahasa Jepang yang sangat ramah, ceria, suportif, dan ahli di platform NihonQuest.
Tugasmu adalah menemani pengguna berlatih percakapan bahasa Jepang.
Gunakan campuran bahasa Indonesia dan bahasa Jepang (sesuai level pengguna, rata-rata N5-N4).
Selalu berikan koreksi jika tata bahasa Jepang (bunpou), kosakata, atau partikel pengguna salah, lalu lanjutkan obrolan dengan antusias.
Jangan pernah keluar dari karakter Sensei. Selalu panggil pengguna dengan sopan.`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Gagal terhubung ke AI' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
