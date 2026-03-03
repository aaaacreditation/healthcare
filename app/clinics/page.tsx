import { Header } from "../components/Header";
import { ClinicsHero } from "./components/ClinicsHero";
import { ClinicsAbout } from "./components/ClinicsAbout";
import { ClinicsEvaluation } from "./components/ClinicsEvaluation";
import { ClinicsProcess } from "./components/ClinicsProcess";
import { Gallery } from "../components/Gallery";
import { ClinicsEligibility } from "./components/ClinicsEligibility";
import { Testimonials } from "../components/Testimonials";
import { ClinicsContact } from "./components/ClinicsContact";
import { Footer } from "../components/Footer";
import { Team } from "../components/Team";

export default function ClinicsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClinicsHero />
      <ClinicsAbout />
      <ClinicsEvaluation />
      <ClinicsProcess />
      <Testimonials />
      <ClinicsEligibility />
      <Gallery />
      <Team />
      <ClinicsContact />
      <Footer />
    </main>
  );
}
