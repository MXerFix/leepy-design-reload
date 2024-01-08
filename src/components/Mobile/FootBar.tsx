import React from 'react'

const FootBar = () => {
  return (
    <div className='mobile-foot-bar'>
      <a href="#" id='mobile-foot-bar-item-homepage' className='mobile-foot-bar-item'>
        <span>главная</span>
      </a>
      <a href="#m-projects" id='mobile-foot-bar-item-projects' className='mobile-foot-bar-item'>
        <span>кейсы</span>
      </a>
      <a href="#m-services" id='mobile-foot-bar-item-services' className='mobile-foot-bar-item'>
        <span>услуги</span>
      </a>
      <a href="#contacts" id='mobile-foot-bar-item-contacts' className='mobile-foot-bar-item'>
        <span>контакты</span>
      </a>
    </div>
  )
}

export default FootBar