import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactCounter from "@/components/ImpactCounter";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import Models from "@/components/Models";
import Gallery from "@/components/Gallery";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactCounter />
      <About />
      <VisionMission />
      <WhyChooseUs />
      <Models />
      <Gallery />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
