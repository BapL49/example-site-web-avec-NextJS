import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";


export async function GET() {

    const counter = await kv.hget('counter:counter', 'number');

    return NextResponse.json(counter);
}


export async function PUT() {
    
    const increaseCounter = await kv.hincrby('counter', 'number', 1);

    return NextResponse.json({increaseCounter})
}