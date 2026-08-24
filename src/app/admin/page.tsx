import { prisma } from "@/lib/prisma";
import { Users, BookOpen, Brain, Zap } from "lucide-react";

export default async function AdminDashboardPage() {
  // MOCK DB FOR OFFLINE MODE
  const [totalUsers, totalProgress, totalQuizzes] = [124, 850, 42];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">Ringkasan aktivitas platform NihonQuest.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Pengguna", value: totalUsers, icon: <Users size={20} />, color: "bg-blue-500" },
          { label: "Item Dipelajari", value: totalProgress, icon: <BookOpen size={20} />, color: "bg-green-500" },
          { label: "Kuis Tersedia", value: totalQuizzes, icon: <Brain size={20} />, color: "bg-purple-500" },
          { label: "Sesi Aktif", value: "24", icon: <Zap size={20} />, color: "bg-orange-500" }, // Mock data
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Aktivitas Terbaru</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                  U{i}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">User {i} menyelesaikan kuis N5</p>
                  <p className="text-xs text-gray-500">2 jam yang lalu</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Aksi Cepat</h2>
          <div className="space-y-3">
            <a href="/admin/content" className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
              + Tambah Konten Baru
            </a>
            <a href="/admin/users" className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
              Lihat Daftar Pengguna
            </a>
            <a href="/admin/settings" className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
              Pengaturan Sistem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
