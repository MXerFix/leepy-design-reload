import { otherServicesData } from '@/utils/consts'
import React from 'react'

const OtherServices = () => {
  return (
    <>
      <h2 className='section-title'>
        Дополнительные услуги
      </h2>
      <div className='other-services-outbox relative'>
        <div className='other-services-box'>
          {otherServicesData.map((service) => (
            <div key={service.label} className='other-services-item'>
              <service.icon width={'var(--lord-icon-size)'} height={'var(--lord-icon-size)'} />
              <div className='other-services-item-text-block'>
                <h4 className='other-services-item-title'>{service.label}</h4>
                <p className='other-services-item-price'>
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OtherServices