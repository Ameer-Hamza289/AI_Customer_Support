import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { emitWarning } from "process";
const prisma = new PrismaClient();
const tokenSecret = "password";

export async function POST(req: NextRequest) {
  const formData = await req.json();

  await prisma.$connect();
  let user = await prisma.user.findFirst({
    where: {
      email: formData.email,
    },
  });
  if (user) {
    console.log("user already register");
    // ideally send an error message with error code
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const saltRounds = 10;
  const hash = await bcrypt.hash(formData.password, saltRounds);
  user = await prisma.user.create({
    data: {
      name: formData.name,
      email: formData.email,
      password: hash,
    },
  });

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
