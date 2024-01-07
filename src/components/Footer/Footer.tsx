import React from 'react'
import { Logotype } from '../Logo/Logotype'
import ContactsTelegram from '@/SVGs/ContactsTelegram'
import ContactsWhatsApp from '@/SVGs/ContactsWhatsApp'
import ContactsEmail from '@/SVGs/ContactsEmail'
import classNames from 'classnames'
import { comfortaa, poiret_one } from '@/app/layout'

const Footer = () => {
  return (
    <div className={classNames('footer-wrapper font-comfortaa')}>
      <div className='footer-box'>
        <div className='footer-column-box'>
          <a className='footer_btn' href="">Политика конфиденциальности</a>
          <a className='footer_btn' href="">Условия использования</a>
          <span className={classNames('font-poiret')}>©2023</span>
          <Logotype className='scale-[0.6]' />
        </div>
        <div className='footer-column-box'>
          <a className='footer_btn' href="">услуги</a>
          <a className='footer_btn' href="">на главную</a>
          <a className='footer_btn' href="">кейсы</a>
        </div>
        <div className='footer-column-box'>
          <h5>Контакты:</h5>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="">
              <ContactsTelegram />
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
        </div>
      </div>
    </div>
  )
}

export default Footer