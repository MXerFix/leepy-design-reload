import { caveat, montserrat } from '@/app/layout'
import { whyMeData } from '@/utils/consts'
import classNames from 'classnames'
import React from 'react'

const WhyMe = () => {
  return (
    <div id='about' className=''>
      <h2 className=' section-title '>
        Почему именно я?
      </h2>
      <div className='about-box'>
        <div className='about-inbox relative'>
          {whyMeData.map((item) => (
            <div className=' about-item relative ' key={item.title}>
              <div className=''>
                <item.icon width={'var(--lord-icon-size)'} height={'var(--lord-icon-size)'} />
              </div>
              <div>
                <h4 className={classNames(caveat.className, 'about-item-title')}>
                  {item.title}
                </h4>
                <p className={classNames(montserrat.className, 'about-item-description')}>
                  {item.description}
                </p>
              </div>
              {/* <span className='block absolute top-0 left-0 w-4 h-4 default-linear rounded-full'>
              </span> */}
            </div>
          ))}
          <div className='absolute h-full top-0 -left-3.5'>
            <svg style={{
              width: 'max-content',
              height: '100%'
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 496" preserveAspectRatio="none" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 490.333C4.13943 490.333 5.33333 489.139 5.33333 487.667C5.33333 486.365 4.40043 485.281 3.16667 485.047L3.16667 328.397C4.40043 328.163 5.33333 327.079 5.33333 325.777C5.33333 324.475 4.40043 323.391 3.16667 323.157L3.16667 148.519C4.40044 148.285 5.33334 147.201 5.33334 145.899C5.33334 144.597 4.40044 143.513 3.16668 143.279L3.16669 5.28656C4.40045 5.05252 5.33335 3.96854 5.33335 2.66666C5.33335 1.19391 4.13945 0 2.66669 0C1.19393 0 1.92864e-05 1.19391 1.9228e-05 2.66666C1.91763e-05 3.96854 0.932922 5.05252 2.16669 5.28656L2.16668 143.279C0.932914 143.513 7.18291e-06 144.597 7.13131e-06 145.899C7.07968e-06 147.201 0.93291 148.285 2.16667 148.519L2.16667 323.157C0.932903 323.391 5.16011e-08 324.475 0 325.777C-5.16011e-08 327.079 0.932906 328.163 2.16667 328.397L2.16667 485.047C0.932903 485.281 5.16011e-08 486.365 0 487.667C-5.83823e-08 489.139 1.19391 490.333 2.66667 490.333Z" fill="url(#paint0_linear_783_780)" />
              <defs>
                <linearGradient id="paint0_linear_783_780" x1="2.66651" y1="0.32959" x2="2.66651" y2="490.333" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9B71B4" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyMe