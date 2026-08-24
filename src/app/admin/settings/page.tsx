import { Settings, Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
          <Settings className="text-gray-600" size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengaturan Sistem</h1>
          <p className="text-gray-500 text-sm">Konfigurasi umum aplikasi NihonQuest.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl">
        <form className="space-y-6">
          {/* General Settings */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Pengaturan Umum</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Aplikasi</label>
                <input 
                  type="text" 
                  defaultValue="NihonQuest" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5CF6] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status Maintenance</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5CF6] outline-none">
                  <option value="false">Tidak Aktif (Live)</option>
                  <option value="true">Aktif (Mode Perbaikan)</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Jika aktif, hanya admin yang bisa mengakses website.</p>
              </div>
            </div>
          </div>

          {/* Gamification Settings */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2 mt-8">Gamifikasi</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Base XP per Quiz Correct Answer</label>
                <input 
                  type="number" 
                  defaultValue="10" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5CF6] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Daily Challenge Bonus XP</label>
                <input 
                  type="number" 
                  defaultValue="100" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5CF6] outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              type="button" 
              className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2.5 rounded-xl font-bold transition-colors"
            >
              <Save size={18} /> Simpan Pengaturan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
