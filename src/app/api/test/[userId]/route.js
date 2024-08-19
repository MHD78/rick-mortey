import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../utils/connectDB";

export async function GET(req, { params }) {
  await connectDB();
  console.log(params);
  const data = ["one", "two", "there", "four"];
  const res = data[params.userId];
  return NextResponse.json({ res });
}
