import ArrowContacts from '@/SVGs/ArrowContacts'
import { caveat } from '@/app/layout'
import classNames from 'classnames'
import React from 'react'

const Contacts = () => {
  return (
    <div id='contacts' className='text-[var(--foreground)] mb-32 max-sm:mb-16'>
      <h2 className='section-title'>
        Контактная информация
      </h2>
      <p className=' text-3xl max-w-xl mb-24 max-sm:text-xl '>
        Если у Вас остались вопросы, Вы можете написать мне или оставить свои контакты!
      </p>
      <div className='flex flex-row items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-16 '>
        <div className='flex flex-col items-start justify-start text-3xl gap-6 max-sm:text-xl  '>
          <a className='contacts-a' href="">
            Telegram
            <ArrowContacts className='max-sm:w-12' />
          </a>
          <a className='contacts-a' href="">
            WhatsApp
            <ArrowContacts className='max-sm:w-12' />
          </a>
          <a className='contacts-a' href="">
            Email
            <ArrowContacts className='max-sm:w-12' />
          </a>
        </div>
        <p className={classNames(caveat.className, ' contacts-left-text ')}>
          <a className='' target='_blank' href="https://docs.google.com/document/d/1jvzATfFv3PJYaMAH_-R316ep9L8iJRdOGeiwYlbsOxA/">Скачайте бриф</a>, заполните и отправьте его мне!
        </p>
      </div>
    </div>
  )
}

export default Contacts