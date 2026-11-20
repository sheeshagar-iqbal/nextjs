"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const [data,setData]=useState([])
   async function showdata(){
    const res=  await  fetch('http://localhost:3000/api/product')
    const user= await res.json()
    console.log(user.data);
    const userinfo = user.data
    setData(user.data)
    console.log(userinfo);
    
        
    }
    useEffect(()=>{
        showdata()
   
        
        
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
        </tr>
</>
        ))
       }
      </table>
    </>
  )
}

export default page