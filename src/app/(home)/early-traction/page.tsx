"use client";

import React from "react";

const EarlyTraction = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-12 lg:py-16">
      {/* Heading */}
      <div className="pb-8 text-center">
        <h1 className="text-gold-500 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Early Traction
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:gap-16">
        {/* Large Number Section */}
        <div className="flex transform flex-col items-center justify-center rounded-lg border-4 border-green-500 bg-black p-6 transition duration-300 hover:scale-105 sm:p-8 md:p-10 lg:p-12">
          <h2 className="text-gold-400 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
            ₹100,000+
          </h2>
          <p className="mt-4 text-center text-lg text-gray-300 sm:text-xl md:text-2xl">
            Monthly GMV generated for local businesses
          </p>
        </div>

        {/* Small Stats Section */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
          {/* Users */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border-4 border-yellow-500 bg-black p-5 transition duration-300 hover:scale-105 sm:p-6 md:p-8">
            <h3 className="text-3xl font-bold text-yellow-400 sm:text-4xl md:text-5xl">
              1,000+
            </h3>
            <p className="mt-2 text-lg text-gray-300 sm:text-xl md:text-2xl">
              Users
            </p>
          </div>

          {/* Benefitted Local Businesses */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border-4 border-orange-500 bg-black p-5 transition duration-300 hover:scale-105 sm:p-6 md:p-8">
            <h3 className="text-3xl font-bold text-orange-400 sm:text-4xl md:text-5xl">
              15+
            </h3>
            <p className="mt-2 text-lg text-gray-300 sm:text-xl md:text-2xl">
              Benefitted Local Businesses
            </p>
          </div>
        </div>
      </div>

      {/* Supporters Section */}
      <div>
        <div className="mt-12 pb-8 text-center">
          <h1 className="text-gold-500 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Our Supporters
          </h1>
        </div>
        <div className="flex w-full flex-col justify-around space-y-8 sm:flex-row sm:space-x-10 sm:space-y-0 md:space-x-16">
          <div className="mx-auto max-w-xs flex-1 sm:mx-0">
            <img
              src="/images/aws_for_startups.png"
              className="mx-auto h-20 w-48 object-cover sm:h-24 sm:w-56"
              alt="AWS for Startups"
            />
            <div className="mt-4 text-center text-lg text-gray-300 sm:text-xl md:text-2xl">
              <strong className="text-white">Selected</strong> for AWS for
              Startups program, receiving{" "}
              <strong className="text-gold-400">USD $1000</strong> in AWS
              credits.
            </div>
          </div>

          <div className="mx-auto max-w-xs flex-1 sm:mx-0">
            <img
              src="/images/ecell-manipal.png"
              className="mx-auto h-20 w-20 object-cover sm:h-24 sm:w-24"
              alt="E-Cell Manipal"
            />
            <div className="mt-4 text-center text-lg text-gray-300 sm:text-xl md:text-2xl">
              Incubated at{" "}
              <strong className="text-white">Innovation Centre</strong> (MIT),
              Manipal Academy of Higher Education.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyTraction;
