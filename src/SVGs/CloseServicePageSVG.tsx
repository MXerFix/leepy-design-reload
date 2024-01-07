import React, { SVGProps } from 'react'

const CloseServicePageSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path className='service-page-close-btn-arrow' fill-rule="evenodd" clip-rule="evenodd" d="M12.8284 33.5356L9.64645 30.3536C9.45118 30.1583 9.45118 29.8417 9.64645 29.6465L12.8284 26.4645C13.0237 26.2692 13.3403 26.2692 13.5355 26.4645C13.7308 26.6598 13.7308 26.9763 13.5355 27.1716L11.2071 29.5L50 29.5C50.2761 29.5 50.5 29.7239 50.5 30C50.5 30.2762 50.2761 30.5 50 30.5L11.2071 30.5L13.5355 32.8285C13.7308 33.0237 13.7308 33.3403 13.5355 33.5356C13.3403 33.7308 13.0237 33.7308 12.8284 33.5356Z" fill="black" />
    </svg>
  )
}

export default CloseServicePageSVG