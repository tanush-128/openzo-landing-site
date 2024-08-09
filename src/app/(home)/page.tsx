import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import Navbar from "./navbar/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import Pricing from "./pricing/page";
import FifthSection from "./fifth-section/page";
import Footer from "./footer/page";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="">
        <div className="parallax  bg-blend-overlay">
          <div className="h-screen flex items-center justify-center bg-blend-multiply">
            <FirstSection />
          </div>
        </div>
        <div className="pt-16">
          <Carousel />
          <section id="user-app">
            <SecondSection />
          </section>
          <section id="business-app">
            <ThirdSection />
          </section>
          <FourthSection />
          {/* <Pricing /> */}
          <FifthSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
