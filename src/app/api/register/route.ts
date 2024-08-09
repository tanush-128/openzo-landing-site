import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    number,
    department,
    year,
    rollNumber,
  }: {
    name: string;
    email: string;
    number: number;
    department: string;
    year: string;
    rollNumber: string;
  } = await req.json();
  if (!name || !email || !number || !department || !year || !rollNumber) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields.",
      },
      { status: 400 },
    );
  }

  const prisma = db;

  try {
    const existingUser = await prisma.eventUser.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "User already exists.",
        },
        { status: 400 },
      );
    }

    const user = await prisma.eventUser.create({
      data: {
        name,
        email,
        number,
        department,
        year,
        rollNumber,
      },
      select: {
        name: true,
        email: true,
        number: true,
        department: true,
        year: true,
        rollNumber: true,
      },
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while creating the user.",
      },
      { status: 500 },
    );
  }
}
