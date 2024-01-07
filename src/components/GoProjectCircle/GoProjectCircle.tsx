import { Arrow_2 } from '@/SVGs/Arrow_2'
import React, { ReactNode } from 'react'

interface goProjBtnI {
  children: string | ReactNode
} 

export const GoProjectCircleBtn = ({children}: goProjBtnI) => {
  return (
    <button className=' relative flex flex-col items-start go_project_btn_circle ' >
      {children}
      <Arrow_2 className=' go_project_arrow_ ' />
    </button>
  )
}
