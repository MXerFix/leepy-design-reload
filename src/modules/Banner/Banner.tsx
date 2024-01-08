import { caveat, comfortaa } from '@/app/layout'
import classNames from 'classnames'
import React from 'react'
import Image from 'next/image'
import banner from '../../../public/banner.svg'
import { GoProjectCircleBtn } from '@/components/GoProjectCircle/GoProjectCircle'
import { Logotype } from '@/components/Logo/Logotype'

const Banner = () => {

  return (
    <div id='banner' className='banner-wrapper relative flex flex-row justify-between w-full'>
      <Logotype className='max-sm:block hidden mb-12 w-12' />
      <div className='banner-content'>
        <div className='banner-content-main-text'>
          <h1 className={classNames(comfortaa.className, 'banner-content-title')}>
            <span className='banner-element' id='banner-d'>D</span>
            <span className='banner-element' id='banner-e'>e</span>
            <span className='banner-element' id='banner-s'>s</span>
            <span className='banner-element' id='banner-i'>i</span>
            <span className='banner-element' id='banner-g'>g</span>
            <span className='banner-element' id='banner-n'>n</span>
            <span className='banner-element' id='banner-e2'>e</span>
            <span className='banner-element' id='banner-r'>r</span>
          </h1>
          <p className={classNames(caveat.className, 'banner-content-author')}>
            Lizaveta <span className='banner-content-author-span'>Piastolova</span>
          </p>
        </div>
        <span className='banner-content-span'></span>
        <p className={classNames(caveat.className, 'banner-content-slogan')}>Лицо вашего бизнеса в виртуальном мире...</p>
      </div>
      <GoProjectCircleBtn className='hidden max-sm:block before:bg-black go-project-btn-BLACK'>
        Обсудить проект
      </GoProjectCircleBtn>
      <Image className='absolute right-0 banner-image' src={banner} alt='banner' />
    </div>
  )
}

export default Banner