import { NextResponse } from "next/server"

export async function  POST(request,{params}) {
    let {id}=await params
    return NextResponse.json({userId:id})   
}