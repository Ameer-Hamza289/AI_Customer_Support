import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
const tokenSecret = "password";

export async function POST(req: NextRequest) {
  const formData = await req.json();

  await prisma.$connect();
  const user = await prisma.user.findFirst({
    where: {
      email: formData.email,
    },
  });
  if (!user) {
    console.log("no user found");
    return NextResponse.json({ message: "invalid email" });
  }
  const hashedPassword = user.password;
  const result = await bcrypt.compare(formData.password, hashedPassword);
  if (result) {
    const secret = new TextEncoder().encode(tokenSecret);
    const alg = "HS256";
    const payload = { email: formData.email };
    const jwt = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg })
      .setIssuer("urn:example:issuer")
      .setExpirationTime("2m")
      .sign(secret);

    const response = NextResponse.json(payload, { status: 200 });
    response.cookies.set({
      name: "jwt",
      value: jwt,
      path: "/",
      maxAge: 60,
    });
    return response;
  }
  console.log("login failed");
  return NextResponse.json({ message: "wrong password" });
}
