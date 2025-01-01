import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";


export async function POST(request) {
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const lowerCaseEmail = email.toLowerCase();
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email: lowerCaseEmail,
                password: hashedPassword,
            },
        });
        return NextResponse.json({ message: "User created", user });
    } catch (error) {
        return NextResponse.json({ error: "Email Address has already been used!" }, { status: 400 });
    }
}