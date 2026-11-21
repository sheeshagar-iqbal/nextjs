import { connectDb } from "@/app/lib/db";
import usermodel from "@/app/lib/model/user";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    await connectDb()
   
    const {id} =await params
    console.log(id);
    
    const res = await usermodel.findById(id)
    return NextResponse.json({message:" single user successfully", res})
}

export async function PUT(request,{params}) {
    await connectDb()
    const data= await request.json()
    const {id} =await params
    console.log(id);
    
    const res = await usermodel.findByIdAndUpdate(id,data,{new:true})
    return NextResponse.json({message:"user update successfully", res})
}

export async function DELETE(request,{params}) {
    await connectDb()
    const {id} =await params
    console.log(id);
    
    const res = await usermodel.findByIdAndDelete(id)
    return NextResponse.json({message:"user delete successfully", res})
}
