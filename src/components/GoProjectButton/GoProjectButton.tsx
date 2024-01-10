import { Arrow } from '@/SVGs/Arrow'
import { comfortaa } from '@/app/layout'
import classNames from 'classnames'
import React from 'react'

export const GoProjectButton = ({ children, className }: {children: string, className: string}) => {
  return (
    <a href='#contacts' className={ classNames(className, ' relative overflow-hidden w-max h-max ', comfortaa.className) }>
      <div className='go-project-btn overflow-hidden w-max h-max '>
        {children}
        <span className='go-project-btn-border1'></span>
        <span className='go-project-btn-border2'></span>
        <span className='go-project-btn-border3'></span>
        <span className='go-project-btn-border4'></span>
        <span className='go-project-btn-arrow'> <Arrow className='' /> </span>
      </div>
    </a>
  )
}
