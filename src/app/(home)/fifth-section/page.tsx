import Link from "next/link";

const FifthSection = () => {
  return (
    <div className="p-10 md:py-20">
      <div className="mx-auto rounded-xl border-[1px] p-10 md:w-2/3">
        <div className="mb-5 text-4xl font-bold">
          Start building your online store today.
        </div>
        <div></div>

        <Link
          href={"https://forms.gle/V7gfC5u5mHmokEdA9"}
          target="blank"
          className="mt-5 rounded-lg bg-blue-500 px-6 py-3 text-white md:w-1/4"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default FifthSection;
