import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Unified middleware: protect multiple order/thank-you routes.
// - /thank-you/order-placed: requires cookie `order_placed=1` (set by HeroForm),
//   cookie is consumed (cleared) once used.
// - /trucks-service/orderPlaced and /packers-and-movers/orderPlaced: require
//   cookie `isMove=true` (existing logic). Adjust as needed.

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const loginCookie = request.cookies.get("login")?.value;

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

  // if (
  //   pathname === "/trucks-service/orderPlaced" ||
  //   pathname === "/packers-and-movers/orderPlaced"
  // ) {
  //   const isMove = request.cookies.get("isMove")?.value;
  //   // debug log (server logs)
  //   // console.log('Middleware check for move routes', pathname, isMove);
  //   if (isMove !== "true") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }

  if (pathname.startsWith("/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/login")) {
    // If user IS logged in, redirect to /admin
    if (loginCookie) {
      return NextResponse.redirect(new URL("/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog", request.url));
    }
    // If not logged in, just allow /admin/login
    return NextResponse.next();
  }

  // Protect /admin page
  if (pathname === "/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog" && !loginCookie) {
    return NextResponse.redirect(new URL("/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/thank-you/order-placed",
    "/trucks-service/orderPlaced",
    "/packers-and-movers/orderPlaced",
    "/admin/:path*",
  ],
};
