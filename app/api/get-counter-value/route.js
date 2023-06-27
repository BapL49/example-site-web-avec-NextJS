import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";


export async function GET() {

    const counter = await kv.hget('counter:counter', 'number');

    return NextResponse.json(counter);
}


