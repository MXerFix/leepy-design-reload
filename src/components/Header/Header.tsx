import Link from 'next/link'
import React from 'react'
import { GoProjectButton } from '../GoProjectButton/GoProjectButton'
import { Logotype } from '../Logo/Logotype'
import { NavList } from '../NavList/NavList'
import { HeaderI } from '@/types/types'

export const Header = ({ navList }: HeaderI) => {
  return (
    <div className='pl-10 pr-16 bg-transparent flex flex-nowrap flex-row justify-between items-center text-xl relative header '>
      <Logotype className=" w-12 z-10 " />
      <NavList navList={navList} />
      <GoProjectButton className=" z-10 text-neutral-800 bg-white hover:bg-transparent hover:text-white duration-300 " >
        обсудить проект
      </GoProjectButton>
    </div>
  )
}
