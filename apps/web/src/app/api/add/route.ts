// import { PrismaClient } from '@repo/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const n = searchParams.get('n');
    const e = searchParams.get('e');
    const p = searchParams.get('p');

    // const prisma = new PrismaClient();
    // const newUser = await prisma.user.create({
    //   data: {
    //     username : n || "",
    //     email: e || "",
    //     password : p || "",
    //   },
    // });

    // return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
  }
}