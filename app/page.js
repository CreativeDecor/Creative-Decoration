import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Brands />
      <Gallery />
      <CTA />
    </>
  );
}
