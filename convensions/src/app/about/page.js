"use client"
import React, { useEffect, useState } from 'react'

const page =  () => {
    const [dataa,setData]=useState([])

    async function getData(){
        let url= 'https://jsonplaceholder.typicode.com/posts'
            let res=await fetch(url)
            let data=await res.json()
                setData(data)
            console.log(data);
    }
  
      useEffect(()=>{
        getData()
      },[]) 
  return (
    <>
    <div>page about</div>

    <table border='1'  className='border-2 border-amber-300'>
        <thead>
            <tr>
                <th>userid</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
        { 
        
            dataa.map((item)=>(
                <>
                    {/* console.log(item.id) */}
                <tr>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
               </>
                
            ))
        }
        </tbody>
    </table>
    </>
  )
}

export default page