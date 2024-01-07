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
      <div className='flex flex-col items-center justify-start'>
        <div className='w-11/12 relative flex flex-row flex-wrap text-[var(--foreground)]'>
          
          {whyMeData.map((item) => (
            <div className='w-[43.5%] mx-[3.25%] my-3 flex flex-row items-start justify-between gap-6 ' key={item.title}>
              <div className=''>
                <item.icon />
              </div>
              <div>
                <h4 className={classNames(caveat.className, 'text-4xl leading-[var(--lord-icon-size)]')}>
                  {item.title}
                </h4>
                <p className={classNames(montserrat.className, '')}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyMe