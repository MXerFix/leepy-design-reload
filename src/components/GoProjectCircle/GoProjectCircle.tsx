import { Arrow_2 } from '@/SVGs/Arrow_2'
import classNames from 'classnames'
import React, { ReactNode } from 'react'

interface goProjBtnI {
  children: string | ReactNode
  className?: string
} 

export const GoProjectCircleBtn = ({children, className}: goProjBtnI) => {
  return (
    <button className={classNames(' relative flex flex-col items-start go_project_btn_circle ', className)} >
      {children}
      <Arrow_2 className=' go_project_arrow_ ' />
    </button>
  )
}
