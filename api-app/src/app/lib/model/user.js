import mongoose from "mongoose";

const userschema= new mongoose.Schema({
    name:String,
    age:Number
})
const usermodel = mongoose.model("userinfo",userschema)

export default  usermodel