import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Feature, FeatureCard } from "../second-section/page";
import Link from "next/link";

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
    <div className=" ">
      <div className="flex flex-col items-center justify-center pb-10 pt-4 md:pt-16 lg:flex-row">
        <div className="mx-auto w-full">
          <img
            className="mx-auto h-auto rounded-xl p-2 md:max-w-[620px]"
            // src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=918,h=1200,fit=crop/YbNyW78p3RCzrjv0/1-AGB4roLeR3SzEk3y.png"
            src="images/1507.png"
          ></img>
        </div>
        <div className="justify-center p-5">
          <div className="txt-grad pb-4 text-4xl font-bold text-transparent md:pb-10 md:text-6xl">
            OPENZO BUSINESS APP
          </div>
          <div className="mb-8 text-lg md:text-2xl">
            Openzo business app is the gateway for local businesses to join
            Openzo. With this app Local businesses will now be discoverable on
            google and on our User app. This app helps local businesses in End
            to end digitisation by providing an easy to use business management
            software.
          </div>
          <div className="mx-auto flex items-center gap-4">
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=in.openzo.OpenzoForBusiness"
              }
            >
              <img
                alt=""
                // height={55}
                // width={200}
                className="h-[72px] object-contain"
                src={"/images/playstore.png"}
              />
            </Link>
            <Link
              href={"https://forms.gle/V7gfC5u5mHmokEdA9"}
              target="blank"
              className="rounded-lg bg-kred px-3 py-3 text-white md:px-6"
            >
              Contact Us
            </Link>
            {/* <button className="bg-kred text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                </button> */}
          </div>
        </div>
      </div>
      <div className="mb-12 flex-col items-center justify-center bg-blue-50 p-8">
        <div className="flex justify-center bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text pb-10 pt-1 text-3xl font-bold text-transparent md:text-5xl">
          Product Features
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 md:grid md:grid-cols-2 lg:grid-cols-4 xl:px-40">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
