"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [data,setData]=useState([])
    const [oneuser,setOneuser]=useState()
    // const navigate =useRouter()
   async function showdata(){
    const res=  await  fetch('http://localhost:3000/api/product')
    const user= await res.json()
    console.log(user.data);
    const userinfo = user.data
    setData(user.data)
    console.log(userinfo);
    
        
    }

   async function demo(id){
    // console.log(id);
    
    const data= await fetch(`http://localhost:3000/api/product/${id}`,{
      method:"DELETE"
    })
    const res =await data.json()
    // console.log(res);
    
    }

    function update(item){
          setOneuser(item)
    }
    function frmhandler(e){
        let {name,value}=e.target
        
        setOneuser({...oneuser,[name]:value})
    }
     async function submitfrm(e){
        e.preventDefault()
        console.log(oneuser);
        let res = await fetch(`http://localhost:3000/api/product/${oneuser._id}`,{
            method:'PUT',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(oneuser)
        })
        let data =await res.json()
        console.log(data);
        setOneuser('')
        showdata()
        // navigate.push('/usershow')
        
    }
    useEffect(()=>{
        showdata()
    console.log(oneuser);
    
        
        
    },[])
  return (
    <>
       <h1>user</h1>
       <table>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>

 

       {
        data.map((item)=>(
          <>
           <tr key={item.name}>
          <th>{item.name}</th>
          <th>{item.age}</th>
          <th><button onClick={()=>demo(item._id)}>delete</button></th>
          <th><button onClick={()=>update(item)}>update</button></th>
        </tr>
</>
        ))
       }
      </table>

    {oneuser &&  <h1>{oneuser.name}</h1>}
    {oneuser && <form onSubmit={submitfrm}>
        <label>name</label><br/>
        <input onChange={frmhandler} value={oneuser.name} name='name' className='bg-amber-200 text-amber-600' /><br/>
        <label>age</label><br/>
        <input onChange={frmhandler} value={oneuser.age} name='age' className='bg-amber-200  text-amber-600'/><br/>
        <button>sumbit</button>
     </form>}
    </>
  )
}

export default page