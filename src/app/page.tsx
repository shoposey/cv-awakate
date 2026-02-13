import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Timeline />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
