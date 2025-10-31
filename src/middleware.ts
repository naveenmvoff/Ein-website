import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Unified middleware: protect multiple order/thank-you routes.
// - /thank-you/order-placed: requires cookie `order_placed=1` (set by HeroForm),
//   cookie is consumed (cleared) once used.
// - /trucks-service/orderPlaced and /packers-and-movers/orderPlaced: require
//   cookie `isMove=true` (existing logic). Adjust as needed.

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Guard thank-you page
  if (pathname === "/thank-you/order-placed") {
    const cookie = request.cookies.get("order_placed");
    if (!cookie || cookie.value !== "1") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Allow and clear the cookie so it's single-use
    const res = NextResponse.next();
    res.cookies.set("order_placed", "", { path: "/", maxAge: 0 });
    return res;
  }

  // Existing move-order guards
  if (pathname === "/trucks-service/orderPlaced" || pathname === "/packers-and-movers/orderPlaced") {
    const isMove = request.cookies.get("isMove")?.value;
    // debug log (server logs)
    // console.log('Middleware check for move routes', pathname, isMove);
    if (isMove !== "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/thank-you/order-placed",
    "/trucks-service/orderPlaced",
    "/packers-and-movers/orderPlaced",
  ],
};
