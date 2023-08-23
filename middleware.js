import { NextResponse } from 'next/server';
import './scripts/utils';

export function middleware(request) {

    let validAuth = ""+("granted"+Math.floor(Date.now()/10000)).hashCode();
    let givenAuth = new URLSearchParams(request.url.split("?")[1]).get("auth");

    if (request.nextUrl.pathname.startsWith("/secure") && validAuth !== givenAuth)
        return NextResponse.redirect(new URL('/403', request.url));

}

export const config = {
    matcher: ['/secure/(.*)'],
};