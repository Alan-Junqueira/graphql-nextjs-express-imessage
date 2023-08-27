import { authOptions } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const session = await getServerSession(authOptions);

  console.log("session", session);
  return NextResponse.json({ session });
}
