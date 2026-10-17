async function product({params}){
    let {id} = await params
    
    return (
        <>
               <h1 className="text-blue-500 text-center"> product {id}</h1>
        </>
    )
}

export default product