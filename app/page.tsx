import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-first/20 selection:text-first">
      <Navbar />
      <main>
        <Hero />
        <section className="pt-24 pb-32">
          <Services />
        </section>
        <section className="py-24 bg-slate-50/50">
          <WhyChooseUs />
        </section>
        <section className="py-24 bg-white">
          <Portfolio />
        </section>
        <section className="py-24 bg-slate-50">
          <Testimonials />
        </section>
        <CallToAction />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
