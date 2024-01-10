import { montserrat } from '@/app/layout'
import { ArrowBtn_1 } from '@/components/ArrowBtn_1/ArrowBtn_1'
import foreground from '../../../public/projects_foreground.svg'
import { GoProjectCircleBtn } from '@/components/GoProjectCircle/GoProjectCircle'
import { projectsItems } from '@/utils/consts'
import { getStatusColor, getValidProjectStatus } from '@/utils/helpers'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { Arrow } from '@/SVGs/Arrow'

const Projects = () => {
  return (
    <>
      <h2 className='section-title'>
        Готовые кейсы
      </h2>
      <div id='projects' className='projects-wrapper max-sm:hidden'>
        <div className="projects-box w-full">
          {projectsItems.map((item, idx) => (
            <div
              key={item.name}
              className='projects-item relative'
              style={{
                translate: idx % 2 === 0 ? '-259px' : '259px'
              }}
            >
              <div className='projects-item-left'>
                <span
                  className={classNames(montserrat.className, 'projects-item-span')}
                  style={{
                    color: getStatusColor(item.status),
                    borderBottom: '1px solid',
                    borderColor: getStatusColor(item.status),
                  }}
                >
                  {getValidProjectStatus(item.status)}
                </span>
                <h5 className='projects-item-title mb-3'>
                  {item.name}
                </h5>
                <ArrowBtn_1 circleFill={getStatusColor(item.status)} />
              </div>
              <div className='projects-item-right'>
                <Image className='projects-item-image' src={item.img} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
        <GoProjectCircleBtn>
          Обсудить проект
        </GoProjectCircleBtn>
        <Image className='projects-background-svg' src={foreground} alt='' />
        {/* <span className='projects-circle-foreground'>
        </span> */}
      </div>
      <div id='m-projects' className="projects-wrapper-mobile">
        <div className="projects-box-mobile flex flex-col items-center justify-start gap-6">
          {projectsItems.map((item, idx) => (
            <div
              key={item.name}
              className={` w-full h-[170px] flex flex-row items-center overflow-hidden justify-center gap-1.5 ${idx % 2 === 0 ? "rounded-bl-3xl rounded-tr-3xl flex-row-reverse " : "rounded-tl-3xl rounded-br-3xl"} `}
            >
              <div className=' relative w-[70%] bg-white h-full px-5 py-4 '>
                <span
                  className={classNames(montserrat.className, 'projects-item-span max-sm:text-xs')}
                  style={{
                    color: getStatusColor(item.status),
                    borderBottom: '1px solid',
                    borderColor: getStatusColor(item.status),
                  }}
                >
                  {getValidProjectStatus(item.status)}
                </span>
                <h5 className='projects-item-title my-3 max-sm:text-lg'>
                  {item.name}
                </h5>
                <div className={`absolute bottom-4 left-5 text-sm flex flex-row items-center justify-center gap-1`}>
                  <p className=' border border-black px-1 h-6 flex items-center justify-center '> {item.type} </p>
                  <button disabled={item.status === 'wip'} className={`bg-black  border border-black ${item.status === 'wip' && 'bg-neutral-400 border-neutral-400'} px-2 h-6 flex items-center justify-center `}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4" fill="none">
                      <path d="M19.1768 2.17678C19.2744 2.07915 19.2744 1.92085 19.1768 1.82322L17.5858 0.232233C17.4882 0.134602 17.3299 0.134602 17.2322 0.232233C17.1346 0.329864 17.1346 0.488155 17.2322 0.585786L18.6464 2L17.2322 3.41421C17.1346 3.51184 17.1346 3.67014 17.2322 3.76777C17.3299 3.8654 17.4882 3.8654 17.5858 3.76777L19.1768 2.17678ZM0 2.25H19V1.75H0V2.25Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className=' w-[30%] h-full overflow-hidden '>
                <Image className={`max-w-max relative ${!item.mobileImg && 'right-[37%]'} h-full`} src={item.mobileImg ?? item.img} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects