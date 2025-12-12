import { auth } from "@/auth";
import connectDb from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const { role, mobile } = await req.json();
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // ⭐ UPDATED: Now updating user by ID (NOT email)
    const user = await User.findByIdAndUpdate(
      session.user.id,
      { role, mobile },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: `edit role and mobile error: ${error}` },
      { status: 500 }
    );
  }
}
