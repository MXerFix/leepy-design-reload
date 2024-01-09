import Footer from '@/components/Footer/Footer'
import FootBar from '@/components/Mobile/FootBar'
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
    <div className='wrapper'>
      <main id='#' className="">
        <Banner />
        <WhyMe />
        <Services />
        <OtherServices />
        <Projects />
        <div className='px-16 max-[719px]:px-0'>
          <Contacts />
          <Footer />
        </div>
      </main>
      <div data-state="closed" id="modal_root">
        {detailedServices.map((details) => <ServicePage key={details.id} details={details} />)}
      </div>
      <FootBar />
    </div>
  )
}
