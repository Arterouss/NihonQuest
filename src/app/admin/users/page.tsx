import { prisma } from "@/lib/prisma";
import { Search, UserCheck, Shield, Trash2 } from "lucide-react";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      streak: true,
      _count: {
        select: { progress: true },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
          <p className="text-gray-500 text-sm">Kelola akun dan role pengguna platform.</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari email atau nama pengguna..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
          />
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>Semua Role</option>
          <option>USER</option>
          <option>ADMIN</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
            <tr>
              <th className="px-6 py-4 font-medium">Pengguna</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Level/XP</th>
              <th className="px-6 py-4 font-medium">Progress</th>
              <th className="px-6 py-4 font-medium">Bergabung</th>
              <th className="px-6 py-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-gray-500 text-xs">{user.email}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {user.role === "ADMIN" ? <Shield size={12} /> : <UserCheck size={12} />}
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-900 font-medium">Lvl {user.streak?.level || 1}</div>
                  <div className="text-gray-500 text-xs">{user.streak?.totalXp || 0} XP</div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {user._count.progress} item selesai
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(user.createdAt).toLocaleDateString("id-ID")}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Hapus Pengguna">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  Belum ada pengguna terdaftar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
