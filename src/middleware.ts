import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return response;
}

export const config = {
  matcher: ["/static/:path*", "/_next/image/:path*", "/images/:path*"],
};
