"use client"
import { servicesData } from '@/utils/consts'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { ArrowBtn_1 } from '../../components/ArrowBtn_1/ArrowBtn_1'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {


  useGSAP(() => {

    const start = '-60% 0%'
    const end = '+=90%'
    const scrub = 2
    const from = {
      opacity: 0.1,
      scale: 0.8
    }

    gsap.from("#services-item-1", {
      scrollTrigger: {
        trigger: ".services-wrapper",
        start: start,
        end: end,
        scrub: scrub,
      },

      x: -75,
      y: -75,
      ...from
    });
    gsap.from("#services-item-2", {
      scrollTrigger: {
        trigger: ".services-wrapper",
        start: start,
        end: end,
        scrub: scrub,
      },
      x: 75,
      y: -75,
      ...from
    });
    gsap.from("#services-item-3", {
      scrollTrigger: {
        trigger: ".services-wrapper",
        start: start,
        end: end,
        scrub: scrub,
      },
      x: -75,
      y: 75,
      ...from
    });
    gsap.from("#services-item-4", {
      scrollTrigger: {
        trigger: ".services-wrapper",
        start: start,
        end: end,
        scrub: scrub,
      },
      x: 75,
      y: 75,
      ...from
    });
  })

  const backgroundHandle = (idx: number) => {
    switch (idx) {
      case 0: return '#7E5518'
      case 1: return '#18012B'
      case 2: return '#411F1F'
      case 3: return '#2B4349'
    }
  }

  const detailHandle = (id: string) => {
    const node = document.getElementById(id)
    const root = document.getElementById('modal_root')
    root?.setAttribute('data-state', 'open')
    node?.setAttribute('data-state', 'open')
    document.body.classList.add('overflow-hidden')
  }

  return (
    <>
      <h2 className='section-title'>
        Какие дизайн-проекты создаю?
      </h2>
      <div id='services' className='services-wrapper max-sm:hidden'>
        <div className='services-outbox relative'>
          <span className='services-center-line-span '>
          </span>
          <span className='services-center-line-circle'>
          </span>
          <div className='services-box relative'>
            {servicesData.map((service, idx) => (
              <div
                id={`services-item-${idx + 1}`}
                style={{
                  borderRadius: ` ${idx === 3 ? '0px' : '90px'} ${idx === 2 ? '0px' : '90px'} ${idx === 0 ? '0px' : '90px'} ${idx === 1 ? '0px' : '90px'} `,
                  flexDirection: (idx > 1 ? 'column-reverse' : 'column'),
                  background: `linear-gradient(${idx > 1 ? "180deg" : '0deg'}, ${backgroundHandle(idx)} 0%, rgba(0, 0, 0, 0.00) 91.55%)`
                }}
                className='services-item'
                onClick={e => detailHandle(service.id)}
                key={service.label}
              >
                <Image src={service.img} alt={service.label} />
                <div
                  style={{
                    top: idx > 1 ? '3rem' : '',
                    left: '2.75rem',
                    bottom: idx <= 1 ? '3rem' : '',
                  }}
                  className='service-item-text-block'
                >
                  <button className='mb-4'>
                    <ArrowBtn_1 />
                  </button>
                  <p className={'text-[var(--foreground)] text-[2rem] max-w-72 '}>
                    {service.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id='m-services' className='relative hidden max-sm:flex flex-col items-end justify-start gap-4'>
        {servicesData.map((service, idx) => (
          <div
            key={service.id}
            className={` relative -right-4 w-11/12 rounded-l-2xl h-40 p-10 `}
            onClick={e => detailHandle(service.id)}
            style={{
              backgroundColor: service.color
            }}
          >
            <h5 className='text-2xl text-white mb-4'> {service.label} </h5>
            <button className='mb-4'>
              <ArrowBtn_1 />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services