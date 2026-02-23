import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-surface">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <FloatingCTA />
      <Footer />
    </main>
  );
}