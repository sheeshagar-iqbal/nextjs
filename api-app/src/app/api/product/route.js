import { NextResponse} from "next/server"
export async function GET(){
   let data= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .catch(error => console.log(error))
    return NextResponse.json({'message':"from get data",data})
}
export function POST(){
    return NextResponse.json({message:"post req"})
}
export function DELETE(){
    return NextResponse.json({message:'delete the res'})
}

export function PUT(){
    return NextResponse.json({message:'update thee req'})
}