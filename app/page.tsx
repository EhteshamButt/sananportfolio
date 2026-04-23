import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowreelCategories from "./components/ShowreelCategories";
import Tools from "./components/Tools";
import WhyChooseMe from "./components/WhyChooseMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ShowreelCategories />
      <Tools />
      <WhyChooseMe />
      <Footer />
    </main>
  );
}
