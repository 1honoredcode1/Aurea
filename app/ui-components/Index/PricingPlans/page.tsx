"use client";

const PricingPlansData = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$99/month",
    desc: "Our foundation plan offers essential features at an affordable price, ready to take without breaking the bank.",
    features: [
      " Individuals & small projects",
      " Access to design features",
      " Limited library of decorative items",
      " Email support",
      " Monthly updates",
    ],
  },
  {
    id: 2,
    title: "Premium Plan",
    price: "$199/month",
    desc: "Our Premium plans unlocks tools and broader, ideal for growing teams ready to take their projects to the next level.",
    features: [
      "Small teams & growing businesses",
      "Full access to design features",
      "Full library of decorative items",
      "Priority support",
      "Advanced analytics",
    ],
  },
];
export default function PricingPlans() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 mt-0 md:mt-[17%] ">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8 ">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Our Pricing Plans
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-5xl md:text-6xl mb-5 w-full lg:w-[60%] ">
              Design your <span className="text-(--prim) ">space, know </span>
              services
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 h-full mt-10">
          <div className="w-full lg:w-1/2">
            <div className="pricing-wrap h-full rounded-2xl p-5 pt-20">
              <h1 className="CalSans text-6xl md:text-7xl text-white mb-5 w-full lg:w-[75%] ">
                Your dreams,{" "}
                <span className="text-(--prim) ">our mission, let&apos;s </span>
                make it happen.
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PricingPlansData.map((plan, index) => (
                <div
                  key={index}
                  className="pricing-card bg-white shadow p-5 rounded-2xl"
                >
                  <h3 className="GolosText font-semibold text-3xl mb-5">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] lg:text-[20px] ">
                    {plan.desc}
                  </p>
                  <h1 className="text-3xl lg:text-4xl mt-5 text-(--prim) CalSans flex border-b border-gray-300 pb-3">
                    {plan.price}{" "}
                    <span className="text-xl text-gray-600">/ Per Month</span>
                  </h1>
                  <div className="flex flex-col gap-2 my-5">
                    {plan.features.map((info) => (
                      <p
                        key={info}
                        className="text-gray-800 font-semibold text-[15px] GolosText "
                      >
                        <i className="bi bi-check-circle-fill text-(--prim) "></i>{" "}
                        {info}
                      </p>
                    ))}
                  </div>
                  <button
                    className="border border-gray-300 GolosText rounded-full px-4 py-2 hover:bg-(--prim) hover:text-white
                  cursor-pointer hover:border-transparent transition-all duration-300 "
                  >
                    Get Started Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
