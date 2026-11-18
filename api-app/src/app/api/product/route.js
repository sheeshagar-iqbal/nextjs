import { NextResponse} from "next/server"
export async function GET(){
   let data= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .catch(error => console.log(error))
    return NextResponse.json({'message':"from get data",data})
}
export async function POST(request){
    let data= await request.json()
    console.log(data.name);
    let {name ,age}=data
    console.log(name,age,typeof(name));
    if(!name || !age){
        console.log("hi");
    return NextResponse.json({message:"all feild require"})

        
    
    
    // if (!name || !batch){
    // return NextResponse.json({message:"all feild require"})
        
    }else{
    return NextResponse.json({message:"post req",data})
       
    }
    
}

// export async function POST(request){
//     let {searchParams}= new URL(request.url)
//     let data = searchParams.get('name')
//     let batch = searchParams.get('batch')
   
//     return NextResponse.json({message:'success',data,batch})
// }


export function DELETE(){

    return NextResponse.json({message:'delete the res'})
}

export function PUT(){
    return NextResponse.json({message:'update thee req'})
}