"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const pseacrh =useSearchParams()
    const name = pseacrh.get('name')
    const lastname = pseacrh.get('lastname')
  return (
    <div>
        <h1 className='text-4xl text-center text-blue-500'>hey {name}-{lastname}</h1>
    </div>
  )
}

export default page