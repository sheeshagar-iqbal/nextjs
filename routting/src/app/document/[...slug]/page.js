import React from 'react'

const page =async ({params}) => {
    let {slug}=await  params
  return (
    <div>
        <h1>dynamic catch all route {slug}</h1>
        </div>
  )
}

export default page