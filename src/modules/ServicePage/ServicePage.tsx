"use client"
import { Arrow } from '@/SVGs/Arrow'
import ArrowServicePageDetails from '@/SVGs/ArrowServicePageDetails'
import CloseServicePageSVG from '@/SVGs/CloseServicePageSVG'
import { prosto_one } from '@/app/layout'
import Footer from '@/components/Footer/Footer'
import { ServicePageType } from '@/types/types'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'

const ServicePage = ({ details }: ServicePageType) => {

  const { id, description, img, name, price, steps, time, color } = details

  const [addition, setAddition] = useState(false)

  const closeHandler = () => {
    document.getElementById(id)?.setAttribute('data-state', 'closed')
    document.getElementById('modal_root')?.setAttribute('data-state', 'closed')
    document.body.classList.remove('overflow-hidden')
    const acc = document.getElementById(`${id}-addition`)
    if (acc) {
      acc.setAttribute('data-state', 'closed')
      acc.style.maxHeight = '0'
    }
  }

  const detailsHandler = () => {
    setAddition(prev => !addition)
    let acc = document.getElementById(`${id}-addition`)
    if (acc?.getAttribute('data-state') === 'open' && acc) {
      acc?.setAttribute('data-state', 'closed')
      acc.style.maxHeight = '0'
    } else if (acc && acc?.getAttribute('data-state') === 'closed') {
      acc?.setAttribute('data-state', 'open')
      acc.style.maxHeight = acc.scrollHeight + 'px'
    }
  }


  return (
    <div
      id={id}
      className=' service-page-wrapper text-white '
      style={{
        backgroundColor: color
      }}
    >
      <div className='service-page-main'>
        <Image quality={100} src={img} alt={name} />
        <div className='service-page-text'>
          <div className=''>
            <h3 className={`service-page-title mb-4`} > {name} </h3>
            <p className='service-page-time'> {time} </p>
          </div>
          <p className='service-page-description'> {description} </p>
          <div className='service-page-under'>
            <button onClick={e => detailsHandler()} className='service-page-service-details'>
              Подробнее о проекте
              <span className={`service-page-service-details-arrow ${addition ? 'rotate-180' : 'rotate-0'} `}>
                <ArrowServicePageDetails />
              </span>
            </button>
            <div className=' flex flex-row items-center justify-end gap-12 '>
              <p className='service-page-price'> {price} </p>
              <button className='service-page-take-service-btn'> Заказать проект </button>
            </div>
          </div>
        </div>
        <button className={`service-page-close-button ${(id === 'shop_details' || id === 'multipage_details') && 'close-service-light'}`} onClick={e => closeHandler()}>
          <CloseServicePageSVG className={`${(id === 'shop_details' || id === 'multipage_details') && 'close-service-light'}`} />
        </button>
      </div>
      <div id={`${id}-addition`} data-state="closed" className='service-page-addition'>
        <h5 className='service-page-title mb-16' > Этапы проекта </h5>
        <div className='flex flex-row items-center justify-between'>
          <ul className='service-page-addition-steps-ul mb-16'>
            {steps.map((step, idx) =>
              <li className='service-page-addition-step-li'>
                <p className={'w-6 flex flex-row items-center justify-between'}>
                  <span className={idx === 0 ? 'ml-1.5' : ''}>{idx + 1}</span>
                  <span>.</span>
                </p>
                <p className='leading-[3rem]'>{step}</p>
              </li>
            )}
          </ul>
          <p className={classNames(' service-page-addition-left-text font-caveat ')}>
            <a className='' href="">Скачайте бриф</a>, заполните и отправьте его мне!
          </p>
        </div>
        <p className='mb-24 text-2xl'> * После каждого выполненного пункта клиент получает отчет. </p>
        <Footer />
      </div>
    </div>
  )
}

export default ServicePage