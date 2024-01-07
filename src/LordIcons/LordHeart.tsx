// @ts-nocheck

import React from 'react'
import { LordIconType } from './lordIconType'

const LordHeart = ({ width = '70px', height = '70px' }: LordIconType) => {
  return (
    <lord-icon
      className='inline'
      src="https://cdn.lordicon.com/xyboiuok.json"
      trigger="hover"
      colors="primary:#9b71b4"
      style={{ width: width, height: height }}>
    </lord-icon>
  )
}

export default LordHeart