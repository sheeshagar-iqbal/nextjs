import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
 

<h1>users page</h1>
    <Link href='/dashboard/users/1'>user 1</Link> <br/>
    <Link href='/dashboard/users/2'>user 2</Link> <br/>
    <Link href='/dashboard/users/3'>user 3</Link> <br/>
    <Link href='/dashboard/users/4'>user 4</Link>

    </div>
  )
}

export default page