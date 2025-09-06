import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// 👆 If Hero.js is inside `app/` folder
// If you put Hero.js inside `components/`, then:
// import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
