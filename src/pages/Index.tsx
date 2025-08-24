import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import WorkProcess from "@/components/WorkProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pricing />
      <Portfolio />
      <WorkProcess />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Index;