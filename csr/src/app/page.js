"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const [count ,setCount]=useState(0)
  const router = useRouter()
  function demo(){
    alert('hello')
  }
  function nav(){
    router.push('/about')
  }
  return (
    <>

    <h1 className='text-3xl p-10 text-center'>hello</h1>

    <button className='px-2 border-2' onClick={demo}>click</button>

     <h1>{count ??"default"}</h1>
      

    <button className='border-2 px-5' onClick={()=>setCount(count+1)}>click</button>
    <button className='border-2 px-5' onClick={nav}>about</button>
    <button className='border-2 px-5' onClick={()=>router.push('/contact')}>contact</button>

      

      
    </>
  )
}

export default page