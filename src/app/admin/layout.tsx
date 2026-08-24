import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogOut, Users, BookOpen, LayoutDashboard, Settings } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  // If no session, the middleware should have caught it (or redirect to /admin/login)
  // But just in case:
  const user = session?.user as { role?: string } | undefined;
  if (user && user.role !== "ADMIN") {
    redirect("/");
  }

  // Hide sidebar for login page
  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1F2937] text-white flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl sakura-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm font-jp">日</span>
            </div>
            <span className="font-bold text-lg">
              Admin<span style={{ color: "#D95F76" }}>Quest</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">CMS Dashboard</p>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {[
            { href: "/admin", label: "Overview", icon: <LayoutDashboard size={18} /> },
            { href: "/admin/users", label: "Users", icon: <Users size={18} /> },
            { href: "/admin/content", label: "Learning Content", icon: <BookOpen size={18} /> },
            { href: "/admin/settings", label: "Settings", icon: <Settings size={18} /> },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center font-bold text-xs">
              AD
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Admin</p>
              <p className="text-xs text-gray-400 mt-1">Superadmin</p>
            </div>
          </div>
          <Link
            href="/api/auth/signout?callbackUrl=/admin/login"
            className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-all"
          >
            <LogOut size={16} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
