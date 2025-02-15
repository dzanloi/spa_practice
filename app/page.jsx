import Analytics from "@/components/Analytics";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary">
      <Navbar />

      <Hero/>

      <Analytics/>

      <VideoSection/>

      <Newsletter/>

      <Cards/>

      <Footer/>
    </div>
  );
}
