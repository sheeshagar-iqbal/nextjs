import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav className='flex justify-center gap-4'>
            <Link href='/contact/34'>Contact</Link>
            <Link href='/service?name=zhou &lastname=feng'>service</Link>
            <Link href='/about'>about</Link>
        </nav>
        {children}
        <footer>
            
        </footer>
    </div>
  )
}

export default layout