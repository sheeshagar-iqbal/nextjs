import React from 'react'

const page =async ({params}) => {
    let {pid}=await params
  return (
    <div>contact-pid={pid}</div>
  )
}

export default page