"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Feature {
  name: string;
  description: string;
  image: string;
  alt: string;
}

const features: Feature[] = [
  {
    name: "Discover your Locality",
    description:
      "One of a kind Discovery & Fulfilment platform for all the products and services in a locality",
    image: "/images/user-app/1.avif",
    alt: "Customizable",
  },
  {
    name: "Delivery from Local Stores",
    description:
      "The convenience of getting products from local stores delivered to home and reasonable prices",
    image: "/images/user-app/2.avif",
    alt: "Customizable",
  },
  {
    name: "Book Services",
    description:
      "The ability to book a wide range of services and offerings in a locality",
    image: "/images/user-app/3.avif",
    alt: "Customizable",
  },
  {
    name: "P2P Marketplace",
    description:
      "P2P Marketplace features and access to 100 + categories of stores & Businesses",
    image: "/images/user-app/4.avif",
    alt: "Customizable",
  },
];

const SecondSection = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center pb-10 lg:flex-row">
        <div className="justify-center p-5 lg:w-1/2">
          <div className="txt-grad pb-4 text-4xl font-bold text-transparent md:pb-10 md:text-6xl">
            OPENZO APP
          </div>

          <div className="mb-8 text-lg md:text-2xl">
            Openzo is a one-stop local convenience platform for all your needs.
            With Openzo, users can order products, groceries, and food from
            local stores and have them delivered instantly. Users can also find
            home services, book appointments, and access almost everything they
            need in a single app.
          </div>
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=in.openzo.openzo"
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
            {/* <button className="bg-kred text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                </button> */}
            <Link
              target="_blank"
              href="https://openzo.in"
              className="flex h-[55px] items-center justify-center gap-2 rounded-lg bg-kred px-2 text-white hover:bg-blue-600 md:p-4"
            >
              <span>Web App</span>
              <ExternalLink size={24} />
            </Link>
          </div>
        </div>

        {/* 
                <video className="rounded-xl md:w-2/5 p-4 md:p-0 "  autoPlay muted loop >
                    <source src="/content/video-2.mp4" type="video/mp4" />

                </video> */}
        <div className="">
          <img
            className="mx-auto h-auto rounded-xl p-2 md:max-w-[620px]"
            // src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=918,h=1200,fit=crop/YbNyW78p3RCzrjv0/1-AGB4roLeR3SzEk3y.png"
            src="images/user-app.png"
          ></img>
        </div>
      </div>
      <div className="mb-2 flex-col items-center justify-center bg-blue-50 p-8 md:mb-12">
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

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full transform flex-col items-center justify-center space-y-6 rounded-xl border p-8 pb-10 transition-all duration-500 ease-in-out hover:scale-105">
      <div className="text-3xl font-bold text-gray-600">
        <Image
          src={feature.image}
          alt={feature.alt}
          width={300}
          height={300}
          className="mb-10 flex h-20 w-20 items-center justify-center object-contain"
        />
        <div>
          <div className="bg-gradient-to-t from-black to-gray-800 bg-clip-text pb-4 text-2xl text-transparent">
            {feature.name}
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-lg text-transparent">
            {feature.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export { FeatureCard };
export type { Feature };
export default SecondSection;
