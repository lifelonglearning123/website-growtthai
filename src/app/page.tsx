import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <HowItWorks />
        <Results />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
