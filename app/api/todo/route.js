import ConnectMongoDB from "@lib/mongodb";
import Afaire from "@models/afaire";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { text, done } = await request.json();
  await ConnectMongoDB();
  await Afaire.create({ text, done });
  return NextResponse.json({ message: "Todo Created." }, { status: 201 });
}

export async function GET() {
  await ConnectMongoDB();
  const Afaires = await Afaire.find();
  return NextResponse.json({ Afaires });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await ConnectMongoDB();
  await Afaire.findByIdAndDelete(id);
  return NextResponse.json({ message: "Item deleted." }, { status: 200 });
}

export async function PUT(request) {
  const { _id: _id, editedText: text, newStatus: done } = await request.json();
  await ConnectMongoDB();
  await Afaire.findByIdAndUpdate(_id, { text, done });
  return NextResponse.json({ message: "Item updated." }, { status: 200 });
}
