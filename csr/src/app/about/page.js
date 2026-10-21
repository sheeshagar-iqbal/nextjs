
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
  return (
    <>
       about page

       <button onClick={()=>router.replace('/contact')} >contact</button>
    </>
  )
}

export default page