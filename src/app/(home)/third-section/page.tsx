import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Feature, FeatureCard } from "../second-section/page";

const features: Feature[] = [
  {
    name: "Commerce & Logistics",
    description: "Commerce and logistics enablement in the locality",
    image: "/images/business-app/1.png",
    alt: "Customizable",
  },
  {
    name: "Appear on Google Search",
    description:
      "Discovery enablement not only in Openzo app but also Search enablement on web",
    image: "/images/business-app/2.png",
    alt: "Customizable",
  },
  {
    name: "Product Cataloging",
    description:
      "Easy to use business management software with Cataloging features",
    image: "/images/business-app/3.png",
    alt: "Customizable",
  },
  {
    name: "Lead Generation",
    description: "Lead generations form local consumer",
    image: "/images/business-app/4.png",
    alt: "Customizable",
  },
];

const ThirdSection = () => {
  return (
    <div
      className="

    "
    >
      <div
        className="lg:flex-row flex-col
items-center
flex  justify-center pb-10 pt-4 md:pt-16"
      >
        <div className=" w-full mx-auto">
          <img
            className="rounded-xl p-2 md:max-w-[620px] h-auto mx-auto"
            // src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=918,h=1200,fit=crop/YbNyW78p3RCzrjv0/1-AGB4roLeR3SzEk3y.png"
            src="images/1507.png"
          ></img>
        </div>
        <div className="p-5 justify-center ">
          <div
            className="
                txt-grad
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-4
               md:pb-10
                
                "
          >
            OPENZO BUSINESS APP
          </div>
          <div className="text-lg md:text-2xl mb-8">
            Openzo business app is the gateway for local businesses to join
            Openzo. With this app Local businesses will now be discoverable on
            google and on our User app. This app helps local businesses in End
            to end digitisation by providing an easy to use business management
            software.
          </div>
          <div className="flex gap-4 items-center mx-auto">
            <img
              alt=""
              // height={55}
              // width={200}
              className="object-contain  h-[72px] "
              src={"/images/playstore.png"}
            />
            {/* <button className="bg-kred text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                </button> */}
          </div>
        </div>
      </div>
      <div className="flex-col items-center justify-center bg-blue-50 p-8 mb-12">
        <div
          className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-1
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent

                
                
                "
        >
          Product Features
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:grid  lg:grid-cols-4 gap-4 xl:px-40">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
