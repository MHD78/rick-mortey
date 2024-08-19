import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.DB_URI);
    console.log("connected successfuly");
  } catch (error) {
    console.log("connection failure !");
  }
}

export default connectDB;
