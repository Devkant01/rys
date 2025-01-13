import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    console.log('GET request received'); // This should log in your terminal
    return NextResponse.json({ message: 'Hello World' });
}