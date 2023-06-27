import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";


export async function GET() {
    
    const increaseCounter = await kv.hincrby('counter:counter', 'number', 1);

    return NextResponse.json(increaseCounter);
}