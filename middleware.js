import { NextResponse } from 'next/server';
import {cookies} from "next/headers";

export function middleware(request) {

    const cookieStore = cookies();
    const authToken = cookieStore.get("mathesisAdminAuth");
    let hasAdminAuth = authToken && authToken.value === "screwball";

    if (request.nextUrl.pathname.startsWith("/secure") && !hasAdminAuth)
        return NextResponse.redirect(new URL('/403', request.url));

}

export const config = {
    matcher: ['/secure/(.*)'],
};