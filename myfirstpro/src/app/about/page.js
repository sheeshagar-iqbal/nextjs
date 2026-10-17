
"use client";
import React, { useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <h1>
            about page
        </h1>
         <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default page