"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Gagal mendaftar. Silakan coba lagi.");
        return;
      }

      router.push("/login?registered=1");
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F7] px-4 py-12">
      <div className="absolute inset-0 seigaiha-pattern opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative"
      >
        <div className="bg-white rounded-3xl shadow-xl border border-[#E7E5E4] p-8 sm:p-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl sakura-gradient flex items-center justify-center">
                <span className="text-white font-bold text-base font-jp">日</span>
              </div>
              <span className="font-bold text-2xl text-[#1F2937]">
                Nihon<span style={{ color: "#D95F76" }}>Quest</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-[#1F2937] mb-2">Mulai Perjalananmu</h1>
            <p className="text-[#6B7280] text-sm font-jp">ようこそ！NihonQuestへ</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">Nama Lengkap</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  minLength={2}
                  placeholder="Nama lengkapmu"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-[#FFF9F7] focus:border-[#D95F76] focus:ring-2 focus:ring-[#D95F76]/20 transition-all text-[#1F2937] placeholder-[#6B7280] text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E7E5E4] bg-[#FFF9F7] focus:border-[#D95F76] focus:ring-2 focus:ring-[#D95F76]/20 transition-all text-[#1F2937] placeholder-[#6B7280] text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  minLength={6}
                  placeholder="Minimal 6 karakter"
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-[#E7E5E4] bg-[#FFF9F7] focus:border-[#D95F76] focus:ring-2 focus:ring-[#D95F76]/20 transition-all text-[#1F2937] placeholder-[#6B7280] text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#D95F76]"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-[#FEE2E2] border border-[#EF4444]/30 rounded-xl text-sm text-[#EF4444]"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              id="btn-register"
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3 rounded-xl text-white font-bold sakura-gradient hover:opacity-90 transition-all shadow disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Mendaftar...
                </span>
              ) : (
                "Daftar Sekarang"
              )}
            </motion.button>
          </form>

          <p className="text-xs text-center text-[#6B7280] mt-4">
            Dengan mendaftar, kamu menyetujui Syarat & Ketentuan kami.
          </p>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#6B7280]">
              Sudah punya akun?{" "}
              <Link href="/login" className="font-semibold text-[#D95F76] hover:underline">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
