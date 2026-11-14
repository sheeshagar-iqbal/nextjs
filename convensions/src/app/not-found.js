import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <>

    <div> 404 -  not-found</div>
    <button><Link href='/'>go to back home</Link></button>
    </>
  )
}

export default notfound