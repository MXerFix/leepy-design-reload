import Footer from '@/components/Footer/Footer'
import Banner from '@/modules/Banner/Banner'
import Contacts from '@/modules/Contacts/Contacts'
import OtherServices from '@/modules/OtherServices/OtherServices'
import Projects from '@/modules/Projects/Projects'
import ServicePage from '@/modules/ServicePage/ServicePage'
import Services from '@/modules/Services/Services'
import WhyMe from '@/modules/WhyMe/WhyMe'
import { detailedServices } from '@/utils/consts'

export default function Home() {

  return (
    <>
      <main id='#' className="min-h-screen px-20">
        <Banner />
        <WhyMe />
        <Services />
        <OtherServices />
        <Projects />
        <div className='px-16'>
          <Contacts />
          <Footer />
        </div>
      </main>
      <div data-state="closed" id="modal_root">
        {detailedServices.map((details) => <ServicePage details={details} />)}
      </div>
    </>
  )
}
