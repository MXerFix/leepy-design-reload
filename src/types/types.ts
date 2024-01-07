import { StaticImageData } from "next/image"
import { ReactNode } from "react"


export type whyMeDataType = {
  icon: any,
  title: string,
  description: string
}

export type servicesDataType = {
  id: string
  img: string
  href: string
  label: string
}

export type otherServicesDataType = {
  label: string
  price: string
  icon: any
}

export type navListItem = {
  href: string
  label: string
}

export type HeaderI = {
  navList: navListItem[]
}

export type projectStatusType = 'available' | 'sold' | 'reserved' | 'wip'

export type projectsItemType = {
  name: string
  href: string
  status: projectStatusType
  img: StaticImageData
}

export type projectStatusValidType = 'Свободный проект' | 'Проект продан' | 'Проект забронирован' | 'Проект в разработке'

export type validProjectStatusesType = {
  available: 'Свободный проект' 
  sold: 'Проект продан' 
  reserved: 'Проект забронирован' 
  wip: 'Проект в разработке'
}

export type detailedServiceType = {
  id: string
  name: string
  price: string
  description: string
  time: string
  color: string
  steps: string[]
  img: StaticImageData
}

export type ServicePageType = {
  details: detailedServiceType
}