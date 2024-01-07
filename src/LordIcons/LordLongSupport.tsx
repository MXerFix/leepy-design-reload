// @ts-nocheck

import React from 'react'
import { LordIconType } from './lordIconType'

const LordLongSupport = ({ width = '70px', height = '70px' }: LordIconType) => {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/oqdmuxru.json"
      trigger="hover"
      colors="primary:#9b71b4"
      style={{ width: width, height: height }}>
    </lord-icon>
  )
}

export default LordLongSupport