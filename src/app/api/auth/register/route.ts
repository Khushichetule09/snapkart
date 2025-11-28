import connectDb from "@/lib/db";
import User, { IUser } from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const body = await req.json();
    const { name, email, password } = body as { name: string; email: string; password: string };

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json({ message: "Email already exists!" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    } as IUser);

    const { password: _, ...userData } = user.toObject(); // remove password
    return NextResponse.json(userData, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: `Register error: ${error.message || error}` },
      { status: 500 }
    );
  }
}
