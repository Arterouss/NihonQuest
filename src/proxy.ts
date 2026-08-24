import { auth } from "../auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const isLoggedIn = !!session?.user;
  const isAdmin = (session?.user as { role?: string })?.role === "ADMIN";

  // Admin routes protection
  if (nextUrl.pathname.startsWith("/admin")) {
    if (nextUrl.pathname === "/admin/login") {
      if (isAdmin) return NextResponse.redirect(new URL("/admin", nextUrl));
      return NextResponse.next();
    }
    if (!isLoggedIn) return NextResponse.redirect(new URL("/admin/login", nextUrl));
    if (!isAdmin) return NextResponse.redirect(new URL("/", nextUrl));
    return NextResponse.next();
  }

  // Learning routes protection
  const learningPaths = ["/dashboard", "/hiragana", "/katakana", "/kanji", "/vocabulary",
    "/grammar", "/conversation", "/listening", "/reading", "/flashcards", "/quiz",
    "/jlpt", "/dictionary", "/daily-challenge", "/progress", "/achievements", "/profile", "/path"];
  
  const isLearningRoute = learningPaths.some(p => nextUrl.pathname.startsWith(p));
  
  if (isLearningRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
