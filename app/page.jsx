import Banner from '@components/Banner';
import Hero from '@components/Hero';
import LogoCloud from '@components/LogoCloud';
import FeatureOne from '@components/FeatureOne';
import Stats from '@components/Stats';
import Testimonials from '@components/Testimonials';
import CTA from '@components/CTA';
import Newsletter from '@components/Newsletter';

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <LogoCloud />
      <FeatureOne />
      <Stats />
      <Testimonials />
      <CTA />
      <Newsletter />
    </main>
  )
}