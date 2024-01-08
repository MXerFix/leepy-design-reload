import React from 'react'
import { Logotype } from '../Logo/Logotype'
import ContactsTelegram from '@/SVGs/ContactsTelegram'
import ContactsWhatsApp from '@/SVGs/ContactsWhatsApp'
import ContactsEmail from '@/SVGs/ContactsEmail'
import classNames from 'classnames'
import { comfortaa, poiret_one } from '@/app/layout'
import { version } from '@/utils/consts'

const Footer = () => {
  return (
    <div className={classNames('footer-wrapper font-comfortaa')}>
      <div className='footer-box'>
        <div id='footer-nav-docs' className='footer-column-box'>
          <a className='footer_btn' href="">Политика конфиденциальности</a>
          <a className='footer_btn' href="">Условия использования</a>
          <span className={classNames('font-poiret')}>©2023</span>
          <Logotype className='scale-[0.6] max-sm:w-4 max-sm:h-7 max-sm:scale-100' />
        </div>
        <div id='footer-nav-main' className='footer-column-box'>
          <a className='footer_btn' href="">услуги</a>
          <a className='footer_btn' href="">на главную</a>
          <a className='footer_btn' href="">кейсы</a>
        </div>
        <div id='footer-nav-contacts' className='footer-column-box'>
          <h5 className='max-sm:hidden'>Контакты:</h5>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="">
              <ContactsTelegram width={16} height={16} />
              telegram
            </a>
          </div>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="">
              <ContactsWhatsApp />
              whatsapp
            </a>
          </div>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="">
              <ContactsEmail />
              email
            </a>
          </div>
          <div className='footer-btn-div'>
            <a className='footer_btn text-xs' href="">
              8 (995) 898 98 82
            </a>
          </div>
          <span id='version' className='font-raleway'> {version} </span>
        </div>
      </div>
    </div>
  )
}

export default Footer