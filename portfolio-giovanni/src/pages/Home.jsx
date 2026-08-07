import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import DesignWorks from '../components/DesignWorks';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <DesignWorks />
      <Skills />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
