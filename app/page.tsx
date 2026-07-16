import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import SkipLink from "@/components/ui/SkipLink";

/** Home one-page : les sections s'enchaînent au scroll (Hero → Work → About → Contact). */
export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="content">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
