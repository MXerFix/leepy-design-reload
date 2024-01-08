import { navListItem, otherServicesDataType, projectsItemType, validProjectStatusesType, detailedServiceType } from './../types/types';
import { servicesDataType, whyMeDataType } from "@/types/types";
import LordHeart from "@/LordIcons/LordHeart";
import LordDetails from "@/LordIcons/LordDetails";
import LordClock from "@/LordIcons/LordClock";
import LordSupport from "@/LordIcons/LordSupport";
import service_shop from '../../public/service_shop.svg'
import service_business from '../../public/service_business.svg'
import service_landing from '../../public/service_landing.svg'
import service_multipage from '../../public/service_multipage.svg'
import LordFrontend from '@/LordIcons/LordFrontend';
import LordTilda from '@/LordIcons/LordTilda';
import LordLongSupport from '@/LordIcons/LordLongSupport';
import LordBCardDesign from '@/LordIcons/LordBCardDesign';
import flowers from '../../public/projects_flowers.png'
import bakery from '../../public/projects_bakery.png'
import syncsound from '../../public/projects_syncsound.png'
import gamarjoba from '../../public/projects_gamarjoba.png'
import detailed_landing from '../../public/service_details_landing.webp'
import detailed_shop from '../../public/service_details_shop.webp'
import detailed_multipage from '../../public/service_details_multipage.webp'
import detailed_business from '../../public/service_details_business.webp'

export const version = '0.0.2a'

export const navListData: navListItem[] = [
  {
    href: '#',
    label: 'главная',
  },
  {
    href: '#about',
    label: 'обо мне',
  },
  {
    href: '#services',
    label: 'услуги',
  },
  {
    href: '#projects',
    label: 'кейсы',
  },
]

export const whyMeData: whyMeDataType[] = [
  {
    icon: LordHeart,
    title: 'Индивидуальный подход',
    description: 'Дизайн, соответствующий уникальным потребностям и характеру Вашего бизнеса.',
  },
  {
    icon: LordDetails,
    title: 'Внимание к деталям',
    description: 'Создание гармоничного и структурированного дизайна, способствующего удобству использования сайта.',
  },
  {
    icon: LordClock,
    title: 'Соблюдение сроков',
    description: 'Понимание важности своевременного завершения проекта. Эффективное распределение времени работы над Вашим продуктом.',
  },
  {
    icon: LordSupport,
    title: 'Поддержка и обслуживание',
    description: 'Предоставление услуг по долгосрочной поддержке и обслуживанию сайта, что важно для его долгосрочной успешной работы.',
  },

]

export const servicesData: servicesDataType[] = [
  {
    id: 'shop_details',
    href: '/services/shop',
    label: 'Интернет-магазин',
    img: service_shop,
    color: 'var(--service-card-bg-store)'
  },
  {
    id: 'business_details',
    href: '/services/business',
    label: 'Сайт-визитка',
    img: service_business,
    color: 'var(--service-card-bg-business)'
  },
  {
    id: 'landing_details',
    href: '/services/landing',
    label: 'Landing-page',
    img: service_landing,
    color: 'var(--service-card-bg-landing)'
  },
  {
    id: 'multipage_details',
    href: '/services/multipage',
    label: 'Многостраничный сайт',
    img: service_multipage,
    color: 'var(--service-card-bg-multipage)'
  },
]

export const otherServicesData: otherServicesDataType[] = [
  {
    icon: LordFrontend,
    label: 'Front-end разработка',
    price: 'от 55.000',
  },
  {
    icon: LordTilda,
    label: 'Разработка на Tilda',
    price: 'от 25.000',
  },
  {
    icon: LordLongSupport,
    label: 'Долгосрочная поддержка',
    price: 'от 5.000',
  },
  {
    icon: LordBCardDesign,
    label: 'Дизайн визитной карточки',
    price: 'от 3.000',
  },
]

export const projectStatuses = {
  available: 'available',
  sold: 'sold',
  reserved: 'reserved',
  wip: 'wip'
}

export const validProjectStatuses: validProjectStatusesType = {
  available: 'Свободный проект',
  sold: 'Проект продан',
  reserved: 'Проект забронирован',
  wip: 'Проект в разработке'
}

export const projectsItems: projectsItemType[] = [
  {
    name: 'Дизайн-проект для цветочного бутика',
    type: 'Интернет-магазин',
    href: '',
    status: 'available',
    img: flowers
  },
  {
    name: 'Дизайн-проект для магазина техники',
    type: 'Интернет-магазин',
    href: '',
    status: 'sold',
    img: syncsound
  },
  {
    name: 'Дизайн-проект для туров в Грузию',
    type: 'Многостраничный сайт',
    href: '',
    status: 'reserved',
    img: gamarjoba
  },
  {
    name: 'Дизайн-проект для пекарни',
    type: 'Лендинг',
    href: '',
    status: 'wip',
    img: bakery
  },
]

export const detailedServices: detailedServiceType[] = [
  {
    id: 'landing_details',
    name: 'Landing-page',
    description: 'Дизайн лендинга включает в себя разработку макета страницы, подбор цветовой палитры и шрифтов, а также определение расположения и стиля основных элементов, таких как текст, изображения, кнопки и баннеры.',
    price: 'от 6.000',
    color: 'var(--service-card-bg-landing)',
    time: 'от 7 дней',
    steps: ['Обсуждение проекта', 'Анализ конкурентов', 'Подготовка мудборда', 'Типографика', 'Создание прототипа', 'Дизайн проекта', 'Создание UI-kit', 'Полная презентация проекта клиенту'],
    img: detailed_landing
  },
  {
    id: 'shop_details',
    name: 'Интернет-магазин',
    description: 'Дизайн сайта интернет-магазина включает разработку макета, определение расположения основных элементов, а также создание удобных фильтров и навигационных систем для каталога товаров.',
    price: 'от 15.000',
    color: 'var(--service-card-bg-store)',
    time: 'от 18 дней',
    steps: ['Обсуждение проекта', 'Анализ конкурентов', 'Подготовка мудборда', 'Типографика', 'Создание прототипа', 'Дизайн проекта', 'Создание UI-kit', 'Полная презентация проекта клиенту'],
    img: detailed_shop
  },
  {
    id: 'business_details',
    name: 'Сайт-визитка',
    description: 'Дизайн сайта-визитки включает определение основных элементов и контента, который будет размещен на сайте, разработку макета и структуры страниц.',
    price: 'от 5.000',
    color: 'var(--service-card-bg-business)',
    time: 'от 6 дней',
    steps: ['Обсуждение проекта', 'Анализ конкурентов', 'Подготовка мудборда', 'Типографика', 'Создание прототипа', 'Дизайн проекта', 'Создание UI-kit', 'Полная презентация проекта клиенту'],
    img: detailed_business
  },
  {
    id: 'multipage_details',
    name: 'Многостраничный сайт',
    description: 'Дизайн лендинга включает в себя разработку макета страницы, подбор цветовой палитры и шрифтов, а также определение расположения и стиля основных элементов, таких как текст, изображения, кнопки и баннеры.',
    price: 'от 6.000',
    color: 'var(--service-card-bg-multipage)',
    time: 'от 7 дней',
    steps: ['Обсуждение проекта', 'Анализ конкурентов', 'Подготовка мудборда', 'Типографика', 'Создание прототипа', 'Дизайн проекта', 'Создание UI-kit', 'Полная презентация проекта клиенту'],
    img: detailed_multipage
  },
]