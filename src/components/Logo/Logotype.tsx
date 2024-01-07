import React from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'

export const Logotype = ({ className }: {className: string}) => {
  return (
    <a href='#' className={className} >
      <Image src={logo} alt='Logotype' />
    </a>
  )
}
