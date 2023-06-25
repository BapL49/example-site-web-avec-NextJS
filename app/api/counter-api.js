import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export default async function CounterApi() {

    const counterQuery = await kv.hget('counter:counter', 'number');

    const counter = NextResponse.json(counterQuery);

    return counter;
}

