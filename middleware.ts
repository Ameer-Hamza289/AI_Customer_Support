import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
// import { cookies } from "next/headers";
const tokenSecret = "password";

export async function middleware(req: NextRequest) {
  // const token = req.headers.get("Authorization");
  const cookie = req.cookies;
  const token = cookie.get("jwt")?.value;
  console.log(token);
  if (!token) {
    console.log("no token in cookie");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const secret = new TextEncoder().encode(tokenSecret);
  try {
    await jose.jwtVerify(token, secret);
  } catch (e) {
    console.log("invalid jwt");
    return new NextResponse(JSON.stringify({ message: "invalid JWT" }));
  }
  // jwt.verify(token, tokenSecret, (err, decoded) => {
  //   if (err) {
  //     return new NextResponse(JSON.stringify({ message: "invalid JWT" }));
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   } else {
  //     console.log("Decoded payload:", decoded);
  //   }
  // });
}

export const config = {
  matcher: ["/"],
};
