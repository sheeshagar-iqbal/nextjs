
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const paramsearch = useSearchParams()
    const pname =paramsearch.getAll('name')
    const pagee =paramsearch.get('age')
    const pthname = usePathname()
  return (
    <div>

        <h1 className='text-4xl text-blue-300 text-center p-10'>service page {pname} - {pagee} -{pthname}</h1>
    </div>
  )
}

export default page