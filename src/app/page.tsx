import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileCTA } from "@/components/MobileCTA";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
