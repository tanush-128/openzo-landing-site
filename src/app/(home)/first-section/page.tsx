import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="from gray-00 spacey-10 bg-gradient-to-r to-gray-200 py-10 md:py-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center bg-gradient-to-r from-white to-white bg-clip-text pb-10 text-6xl font-bold text-transparent md:px-20 md:text-8xl">
          All in one Local Commerce Platform
        </div>

        <p className="md-10 bg-gradient-to-r from-white to-white bg-clip-text text-lg font-bold text-transparent md:text-2xl">
          Digitising Local Businesses and enabling Local Commerce.
          <br /> One stop platform for all local needs of customers.
        </p>
        <div className="flex justify-center gap-4 pt-10">
          <Link
            href={"https://forms.gle/V7gfC5u5mHmokEdA9"}
            target="blank"
            className="rounded-md bg-kred px-4 py-4 text-lg font-bold text-white md:px-10"
          >
            Get Started
          </Link>
          <Link
            href={"https://www.openzo.in"}
            target="blank"
            className="rounded-md bg-gray-600 px-4 py-4 text-lg font-bold text-white md:px-10"
          >
            View Web App
          </Link>
        </div>

        {/* <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
        </div> */}
      </div>
    </section>
  );
};

export default FirstSection;
