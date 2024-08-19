import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../utils/connectDB";
import User from "../../../../models/User";

export async function POST(req:Request) {
    await connectDB();
    const requ = await req.json()
    console.log(requ.body)
    // const { name  } = req.body;
  
    // const user = new User({ id: 0, name });
    // await user.save();
  
    return NextResponse.json({ res: "success" });
  }