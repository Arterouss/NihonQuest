import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Dapatkan token sesi (berlaku untuk localhost maupun vercel production)
  const sessionToken = 
    request.cookies.get('authjs.session-token')?.value || 
    request.cookies.get('__Secure-authjs.session-token')?.value ||
    request.cookies.get('next-auth.session-token')?.value ||
    request.cookies.get('__Secure-next-auth.session-token')?.value;

  const pathname = request.nextUrl.pathname;

  // Daftar rute yang boleh diakses tanpa login
  const isPublicRoute = 
    pathname === '/' || 
    pathname === '/login' || 
    pathname === '/register' || 
    pathname.startsWith('/api');

  // Jika belum login dan mencoba masuk ke halaman belajar (bukan public)
  if (!sessionToken && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Jika sudah login, cegah masuk ke halaman login/register lagi
  if (sessionToken && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Hanya jalankan middleware ini pada rute halaman utama, hindari file statis
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
