import { prisma } from "@/lib/prisma";
import { Plus, Edit2, Trash2, Filter } from "lucide-react";

export default async function AdminContentPage() {
  const contents = await prisma.learningContent.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Konten</h1>
          <p className="text-gray-500 text-sm">Kelola materi pelajaran, kanji, dan kosakata.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D95F76] hover:bg-[#B83D58] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
          <Plus size={16} /> Tambah Konten
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["Semua", "Hiragana", "Katakana", "Kanji", "Vocabulary", "Grammar"].map((f) => (
          <button
            key={f}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
            <tr>
              <th className="px-6 py-4 font-medium">Judul/Karakter</th>
              <th className="px-6 py-4 font-medium">Tipe</th>
              <th className="px-6 py-4 font-medium">Level JLPT</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contents.map((content) => (
              <tr key={content.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4 font-medium text-gray-900 font-jp">
                  {content.title}
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold">
                    {content.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-xs font-bold">
                    {content.jlptLevel || "Dasar"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    Aktif
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {contents.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Belum ada konten. Data statis saat ini di-hardcode di sisi klien.
                  <br/>
                  <span className="text-xs">Klik "Tambah Konten" untuk memasukkan data ke database.</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
