// @ts-nocheck

import React from 'react'
import { LordIconType } from './lordIconType'

const LordDetails = ({ width = '70px', height = '70px' }: LordIconType) => {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/nizfqlnk.json"
      trigger="hover"
      colors="primary:#9b71b4"
      style={{ width: width, height: height }}>
    </lord-icon>
  )
}

export default LordDetails