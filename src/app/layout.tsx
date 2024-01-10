import type { Metadata } from 'next'
import { Caveat, Comfortaa, Inter, Italiana, Montserrat, Poiret_One, Prosto_One, Raleway } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/Header'
import { navListData } from '@/utils/consts'
import classNames from 'classnames'
import Footer from '@/components/Footer/Footer'

export const inter = Inter({ subsets: ['latin'] })
export const comfortaa = Comfortaa({ subsets: ['cyrillic', 'latin'], variable: '--font-comfortaa' })
export const caveat = Caveat({ subsets: ['cyrillic', 'latin'], variable: '--font-caveat' })
export const poiret_one = Poiret_One({ subsets: ['latin', 'cyrillic'], weight: '400', variable: '--font-poiret' })
export const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })
export const italiana = Italiana({ subsets: ['latin'], weight: '400' })
export const prosto_one = Prosto_One({ subsets: ['cyrillic', 'latin'], weight: '400', variable: '--font-prosto-one' })
export const raleway = Raleway({ subsets: ['cyrillic', 'latin'], variable: '--font-raleway'  })

export const metadata: Metadata = {
  title: 'Leepy-Design',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(poiret_one.className, prosto_one.variable, raleway.variable, caveat.variable, comfortaa.variable)}>
        <header>
          <Header navList={navListData} />
        </header>
        {children}
        <script defer src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  )
}
