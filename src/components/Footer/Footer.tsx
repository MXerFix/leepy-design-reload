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
    <div className={classNames('footer-wrapper')}>
      <div className='footer-box'>
        <div id='footer-nav-docs' className='footer-column-box'>
          <a className='footer_btn' href="https://docs.google.com/document/d/1JLkuVBgZGAwnnoag6aDOWLdvME6VA1pwJmaJlKJm-RU/" target='_blank'>Политика конфиденциальности</a>
          <a className='footer_btn' href="https://docs.google.com/document/d/1NeJ3gGiWOoOBNVpuC5c4V24-z7inC62rSPbxjjekBsg" target='_blank'>Условия использования</a>
          <span className={classNames('font-poiret')}>©2023</span>
          <Logotype className='scale-[0.6] max-sm:w-4 max-sm:h-7 max-sm:scale-100' />
          <span id='version' className='text-sm font-raleway text-neutral-800'> v {version} </span>
        </div>
        <div id='footer-nav-main' className='footer-column-box'>
          <a className='footer_btn max-sm:hidden' href={"#services"}>услуги</a>
          <a className='footer_btn max-sm:hidden' href="#">на главную</a>
          <a className='footer_btn max-sm:hidden' href={"#projects"}>кейсы</a>
          <a className='footer_btn' href={'#m-services'}>услуги</a>
          <a className='footer_btn' href="#">на главную</a>
          <a className='footer_btn' href={'#m-projects'}>кейсы</a>
        </div>
        <div id='footer-nav-contacts' className='footer-column-box'>
          <h5 className='max-sm:hidden'>Контакты:</h5>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="https://t.me/leepydesign" target='_blank'>
              <ContactsTelegram width={16} height={16} />
              telegram
            </a>
          </div>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="" target='_blank'>
              <ContactsWhatsApp />
              whatsapp
            </a>
          </div>
          <div className='footer-btn-div'>
            <a className='footer_btn' href="mailto:leepy-design@yandex.ru" target='_blank'>
              <ContactsEmail />
              email
            </a>
          </div>
          <div className='footer-btn-div'>
            <a className='footer_btn font-comfortaa text-2xl max-sm:text-xs' href="tel:+79958989882" target='_blank'>
              8 (995) 898 98 82
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer