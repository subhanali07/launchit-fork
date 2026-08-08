import Hero from "../sections/Hero";
import Statement from "../sections/Statement";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Writings from "../sections/Writings";
import FAQ from "../sections/FAQ";
import Connect from "../sections/Connect";
import { Footer } from "../sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <About />
      <Projects />
      <Writings />
      <FAQ />
      <Connect />
      <Footer />
    </>
  );
}
