const features = [
  {
    name: "Basic",
    price: "₹40/month",
    fees: "3.7% + 30 paisa per transaction",
    description:
      "Start selling online with a simple and easy to use platform. Create your first store in minutes..",
  },
  {
    name: "Standard",
    price: "₹80/month",
    fees: "2.9% + 30 paisa per transaction",
    description:
      "Level up your business with a powerful eCommerce platform.  to grow.",
  },
  {
    name: "Premium",
    price: "₹200/month",
    fees: "2.4% + 30 paisa per transaction",
    description:
      "For businesses that need more. Get access to all the features you need to grow.",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="
        text-4xl 
        text-center
         md:text-6xl 
         font-bold 
         bg-gradient-to-r
        from-black
         to-gray-500 
         bg-clip-text
         text-transparent md:pb-10
        "
      >
        Pricing
        <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
          Simple and transparent pricing plans for all businesses.
        </div>
      </div>

      <div className="md:grid sm:grid sm:grid-cols-2 md:grid-cols-3 ">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div
              className="
                    grid
                    justify-center
                    items-center
                    gap-4
                    border
                    rounded-xl
                    p-4 
                    h-96
                    "
            >
              <div className="text-2xl text-black pb-4">{feature.name}</div>
              <div className="text-xl ">{feature.price}</div>
              <div className="text-xl ">{feature.fees}</div>
              <div className="text-xl">{feature.description}</div>

              <div className="bg-kred text-white font-extrabold text-center p-4 border rounded-xl items-center justify-center">
                Get Started
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
