"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params= useParams()
  return (
    <div>

        <h1 className='text-4xl text-center text-blue-500'>hey {params.id}</h1>

    </div>
  )
}

export default page