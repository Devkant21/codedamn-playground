import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (

<div className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Link href={'/'}><a>
        <Image width={40} height={40} src="/codedamn_logo.png" alt="" />
          </a>
      </Link>
      <span className="ml-3 text-xl">Codedamn</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 All rights reserved —
      <a href="https://codedamn.com/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@codedamn</a>
    </p>

  </div>
  </div>

  )
}

export default Footer