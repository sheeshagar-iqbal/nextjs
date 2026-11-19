import mongoose from "mongoose";

const userschema= new mongoose.Schema({
    name:String,
    age:Number
})
const usermodel = mongoose.model("user",userschema)

export default  usermodel