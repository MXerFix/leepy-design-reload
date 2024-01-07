import React from 'react'

export const Arrow = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
        <path d="M10.5015 0.973834C10.4871 0.69807 10.2518 0.486235 9.97606 0.500687L5.48223 0.736199C5.20647 0.750651 4.99463 0.985918 5.00908 1.26168C5.02354 1.53745 5.2588 1.74928 5.53457 1.73483L9.52908 1.52548L9.73843 5.52C9.75288 5.79577 9.98815 6.0076 10.2639 5.99315C10.5397 5.9787 10.7515 5.74343 10.7371 5.46767L10.5015 0.973834ZM1.37157 11.3326L10.3738 1.33457L9.63066 0.665437L0.628428 10.6634L1.37157 11.3326Z" fill="white" />
      </svg>
    </div>
  )
}
