"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const psearch =useSearchParams()
    const name =psearch.get('name')
    const price =psearch.get('price')
    const username =psearch.get('username')
  return (
    <div>

        <h1 className='text-center'>
             <ul>
                <li>
                    username- {username}
                </li>
                <li>
                    price- {price}
                </li>
                <li>
                    name- {name}
                </li>
             </ul>
        </h1>
    </div>
  )
}

export default page