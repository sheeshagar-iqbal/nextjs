'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params= useParams()
  return (
    <div>
        <h1 className='text-6xl text-center py-3'>{params.cid}</h1>
    </div>
  )
}

export default page