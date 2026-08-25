"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email atau password salah. Silakan coba lagi.");
      setLoading(false);
    } else {
      const session = await getSession();
      if ((session?.user as any)?.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F7] px-4 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 seigaiha-pattern opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative"
      >
        {/* Card */}
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
            <h1 className="text-2xl font-bold text-[#1F2937] mb-2">Selamat Datang Kembali</h1>
            <p className="text-[#6B7280] text-sm font-jp">おかえりなさい！</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-2">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Masukkan password"
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-[#E7E5E4] bg-[#FFF9F7] focus:border-[#D95F76] focus:ring-2 focus:ring-[#D95F76]/20 transition-all text-[#1F2937] placeholder-[#6B7280] text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#D95F76] transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-[#FEE2E2] border border-[#EF4444]/30 rounded-xl text-sm text-[#EF4444]"
              >
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              id="btn-login"
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3 rounded-xl text-white font-bold sakura-gradient hover:opacity-90 transition-all shadow disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Masuk...
                </span>
              ) : (
                "Masuk"
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#6B7280]">
              Belum punya akun?{" "}
              <Link href="/register" className="font-semibold text-[#D95F76] hover:underline">
                Daftar Sekarang
              </Link>
            </p>
          </div>

          {/* Removed Admin Link since it's merged */}
        </div>
      </motion.div>
    </div>
  );
}
