import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    new URL("/resume-joaquin-candalaft.pdf", request.url)
  );
}

export const config = {
  matcher: "/resume",
};
