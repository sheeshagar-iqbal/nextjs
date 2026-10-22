import React from 'react'
import Cart from './cart'
const page = () => {
    const product =[
        {
            "name":"linar",
            "price":25
        },
        {
            "name":"linar",
            "price":25
        },
        {
            "name":"linar",
            "price":25
        }
    ]
  return (
    <div>

        {
            product.map((e)=>(
                <div className='border-3 p-10'>
                    <h1>{e.name}</h1>
                    <h1>{e.price}</h1>
                    <Cart/>
              </div>
            ))
        }
    </div>
  )
}

export default page