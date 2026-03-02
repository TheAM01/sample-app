import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export function middleware(request: NextRequest) {

    const response = NextResponse.next();
    const themePref = request.cookies.get("theme");

    if (!themePref) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header-123", "custom-value-456")

    return response;

    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/login", request.nextUrl));
    // }
}

// export const config = {
//     matcher: "/profile"
// }