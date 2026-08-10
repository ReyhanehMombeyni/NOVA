import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { baseUrl } from "@/lib/api";

export async function POST(request: Request) {
  try {
    
    const body = await request.json();

    const res = await fetch(`${baseUrl}/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { message: data?.error?.message || "Signup failed" },
        { status: res.status }
      );
    }

    if (!data?.jwt) {
      return NextResponse.json(
        { message: "Invalid response from server" },
        { status: 500 }
      );
    }

    const cookieStore = await cookies();
    cookieStore.set("jwt", data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });
    return NextResponse.json({ user: data.user });
  } catch {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}