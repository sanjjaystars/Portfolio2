import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}
