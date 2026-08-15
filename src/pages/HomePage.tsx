import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import FeaturedProjects from "../sections/FeaturedProjects";
import Writings from "../sections/Writings";
import FAQ from "../sections/FAQ";
import Connect from "../sections/Connect";
import { Footer } from "../sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FeaturedProjects />
      <Connect />
      <Writings />
      <FAQ />
      <Footer />
    </>
  );
}
