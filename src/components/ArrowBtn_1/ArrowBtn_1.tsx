
import React from 'react'

export const ArrowBtn_1 = ({ fill = 'white', circleFill='red' }: { fill?: string, circleFill?: string }) => {
  return (
    <svg className='arrow-btn-1-svg' xmlns="http://www.w3.org/2000/svg" width="186" height="16" viewBox="0 0 186 16" fill="none">
      <path className='arrow-btn-1-svg-path' d="M185.354 8.35355C185.549 8.15829 185.549 7.84171 185.354 7.64645L182.172 4.46447C181.976 4.2692 181.66 4.2692 181.464 4.46447C181.269 4.65973 181.269 4.97631 181.464 5.17157L184.293 8L181.464 10.8284C181.269 11.0237 181.269 11.3403 181.464 11.5355C181.66 11.7308 181.976 11.7308 182.172 11.5355L185.354 8.35355ZM0 8.5H185V7.5H0V8.5Z" fill="white" />
      <circle className='arrow-btn-1-svg-circle' cx="24" cy="8" r="7.5" stroke="white"/>
      <circle className='arrow-btn-1-svg-circle-2' cx={0} cy={8} r={4} fill={circleFill} />
    </svg>
  )
}
