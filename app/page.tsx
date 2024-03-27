import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Section_devider from "@/components/Section_devider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Section_devider />
      <About />
      <Section_devider />
      <Projects />
      <Section_devider />
      <Skills />
      <Section_devider />
      <Experiences />
      <Section_devider />
      <Contact />
      <Footer />
    </main>
  );
}
