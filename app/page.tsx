import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { GlobalPresence } from "./components/GlobalPresence";
import { WhyAAA } from "./components/WhyAAA";
import { Process } from "./components/Process";
import { Eligibility } from "./components/Eligibility";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <GlobalPresence />
      <WhyAAA />
      <Process />
      <Gallery />
      <Eligibility />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
