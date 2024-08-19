
import mongoose, { model, models } from "mongoose";



const userSchema  = new mongoose.Schema({id:Number,name:String})

const User = models.User || model("User",userSchema)


export default User