import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Cursor />
      <div className="scanline" />
      <GridBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
