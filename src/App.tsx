import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ContactCTA from "./components/ContactCTA";
import DeliveryProcess from "./components/DeliveryProcess";
import Container from "./components/ui/Container";
import Reveal from "./components/ui/Reveal";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero renders immediately — no reveal, it's above the fold */}
        <Hero />

        <Projects />

        <section id="about" className="scroll-mt-20 bg-white pb-20 sm:pb-24">
          <Container className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <Reveal>
              <About />
            </Reveal>
            <Reveal delayMs={120}>
              <ContactInfo />
            </Reveal>
          </Container>
        </section>

        <section className="bg-white pb-20 sm:pb-24">
          <Container className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            <Reveal>
              <Skills />
            </Reveal>
            <Reveal delayMs={120}>
              <Experience />
            </Reveal>
          </Container>
        </section>

        <section className="bg-white pb-20 sm:pb-24">
          <Container className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <Education />
            </Reveal>
            <Reveal delayMs={120}>
              <Certifications />
            </Reveal>
          </Container>
        </section>

        <Reveal>
          <DeliveryProcess />
        </Reveal>

        <Reveal>
          <ContactCTA />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
