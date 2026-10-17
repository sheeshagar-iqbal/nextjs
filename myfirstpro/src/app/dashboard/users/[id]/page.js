async function page({params}) {
    let {id}= await params
    return(
        <>
        <h1 className="text-red-400 text-center bg-amber-200"> user ={id}</h1>
        </>
    )
}

export default page