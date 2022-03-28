import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-center justify-center items-center'>
        <div className='logo mx-5'>
            <Image width={40} height={40} src="/hashnode.png" alt="" />
        </div>
            <div className='nav'>
                <ul className='flex items-center space-x-2 font-bold md:text-xl'> 
                    <Link href={'/'}><a><li>Playground</li></a></Link>
                    <Link href={'/'}><a><li>Blog</li></a></Link>
                </ul>
            </div>
        </div>
  )
}

export default Navbar
