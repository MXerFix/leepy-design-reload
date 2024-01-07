import { comfortaa } from '@/app/layout'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { navListItem } from '@/types/types'

export const NavList = ({navList}: {navList: navListItem[]}) => {


  return (
    <div className=' absolute top-0 right-0 left-0 bottom-0 w-full h-full flex justify-center items-center '>
      <nav className=' w-max h-max flex flex-row flex-nowrap absolute ' >
        {navList.map(({ href, label }) => (
          <div key={label} className=' overflow-hidden w-max h-max mx-12 text-xl '>
            <a href={href} className={classNames(comfortaa.className, 'navigation_btn')} > {label} </a>
          </div>
        ))}
      </nav>
    </div>
  )
}
