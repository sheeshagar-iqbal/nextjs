import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>page dashboard
    <ul>
           <li><Link href='/dashboard/users'>Users</Link></li>
           <li><Link href='/dashboard/products'>Products</Link></li>

    </ul>
        
</div>
  )
}

export default page