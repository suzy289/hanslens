import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Showreel />
        <Services />
        <PortfolioGrid />
        <PhotoGallery />
        <About />
        <Skills />
        <Process />
      </main>
      <Footer />
    </>
  );
}
