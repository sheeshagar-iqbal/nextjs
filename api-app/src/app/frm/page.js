"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const [Formdata,setFrmdata]=useState({})
    const navigate = useRouter()
    function frmhandler(e){
        let {name,value}=e.target
        
        setFrmdata({...Formdata,[name]:value})
    } 
    async function submitfrm(e){
        e.preventDefault()
        console.log(Formdata);
        let res = await fetch('http://localhost:3000/api/product',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(Formdata)
        })
        let data =await res.json()
        console.log(data);
        navigate.push('/usershow')
        
    }

  return (
    <>
     <form onSubmit={submitfrm}>
        <label>name</label><br/>
        <input onChange={frmhandler} value={Formdata.name} name='name' className='bg-amber-200 text-amber-600' /><br/>
        <label>age</label><br/>
        <input onChange={frmhandler} value={Formdata.age} name='age' className='bg-amber-200  text-amber-600'/><br/>
        <button>sumbit</button>
     </form>
    </>
  )
}

export default page