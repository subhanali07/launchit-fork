import Hero from "../sections/Hero";
import Statement from "../sections/Statement";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Writings from "../sections/Writings";
import FAQ from "../sections/FAQ";
import Connect from "../sections/Connect";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <Projects />
      <Writings />
      <FAQ />
      <Connect />
    </>
  );
}
