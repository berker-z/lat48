import ConnectMongoDB from "@lib/mongodb";
import Afaire from "@models/afaire";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { text, done } = await request.json();
  await ConnectMongoDB();
  await Afaire.create({ text, done });
  return NextResponse.json({ message: "Todo Created." }, { status: 201 });
}
