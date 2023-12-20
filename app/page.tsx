import About from '@/components/About'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Cta from '@/components/Cta'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Portofolio from '@/components/Portofolio'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Team from '@/components/Team'
import Whyus from '@/components/Whyus'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Whyus />
      <Skills />
      <Services />
      <Cta />
      <Portofolio />
      <Team />
      <Pricing />
      <Faq />
      <Contact />
    </>
  )
}
