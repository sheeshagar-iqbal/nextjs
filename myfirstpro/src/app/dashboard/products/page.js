import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>products

        <Link href='/dashboard/products/1'>product 1</Link> <br/>
        <Link href='/dashboard/products/2'>product 2</Link> <br/>
    </div>
  )
}

export default page