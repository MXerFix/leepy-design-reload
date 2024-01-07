import { montserrat } from '@/app/layout'
import { ArrowBtn_1 } from '@/components/ArrowBtn_1/ArrowBtn_1'
import foreground from '../../../public/projects_foreground.svg'
import { GoProjectCircleBtn } from '@/components/GoProjectCircle/GoProjectCircle'
import { projectsItems } from '@/utils/consts'
import { getStatusColor, getValidProjectStatus } from '@/utils/helpers'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <>
      <h2 className='section-title'>
        Готовые кейсы
      </h2>
      <div id='projects' className='projects-wrapper'>
        <div className="projects-box w-full">
          {projectsItems.map((item, idx) => (
            <div
              key={item.name}
              className='projects-item relative'
              style={{
                translate: idx%2===0 ? '-259px' : '259px'
              }}
            >
              <div className='projects-item-left'>
                <span
                className={classNames(montserrat.className, 'projects-item-span')}
                style={{
                  color: getStatusColor(item.status)
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
        <Image className='absolute top-[122px] right-[128px] pointer-events-none' src={foreground} alt='' />
        <span className='projects-circle-foreground'>
        </span>
      </div>
    </>
  )
}

export default Projects