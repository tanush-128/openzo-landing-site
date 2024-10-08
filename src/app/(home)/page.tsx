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
import EarlyTraction from "./early-traction/page";

export default function Home() {
  return (
    <div>
      <div className="">
        <div className="parallax bg-blend-overlay">
          <Navbar />

          <div className="flex h-screen items-center justify-center bg-blend-multiply">
            <FirstSection />
          </div>
        </div>
        <div className="">
          <div className="traction bg-blend-overlay">
            <div className="flex items-center justify-center bg-blend-multiply lg:h-screen">
              <EarlyTraction />
            </div>
          </div>
          {/* <Carousel /> */}

          <section id="user-app">
            <SecondSection />
          </section>
          <section id="business-app">
            <ThirdSection />
          </section>

          {/* <FourthSection /> */}
          {/* <Pricing /> */}
          <FifthSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
