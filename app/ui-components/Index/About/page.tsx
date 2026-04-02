"use client";

import Image from "next/image";

import { useInView } from "react-intersection-observer";

import AboutImg1 from "@/public/about/about1.jpg";
import AboutImg2 from "@/public/about/about2.jpg";
import AboutImg3 from "@/public/about/about3.jpg";

import CountUp from "react-countup";

const statsData = [
  {
    value: 2026,
    suffix: "",
    title: "Years experience",
    desc: "Improving our skills and knowledge to provide the best service to our clients.",
  },
  {
    value: 190,
    suffix: "+",
    title: "Projects completed",
    desc: "Successfully completed a wide range of projects, from small residential to large commercial spaces.",
  },
  {
    value: 150,
    suffix: "+",
    title: "Happy clients",
    desc: "Building strong relationships with our clients and ensuring their satisfaction with our work.",
  },
  {
    value: 50,
    suffix: "+",
    title: "Awards won",
    desc: "Recognized for our excellence in design and innovation in the interior design industry.",
  },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 about ">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              About Auréa
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl">
              We Shape{" "}
              <span className="text-(--prim) ">Intrior Designs, Crafting </span>
              Timeless Elegance for Your Space.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
          <div className="about-image">
            <Image
              src={AboutImg1}
              alt="About Image 1"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5 "
            />
          </div>
          <div className="about-image lg:pt-10">
            <Image
              src={AboutImg2}
              alt="About Image 2"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5 "
            />
          </div>
          <div className="about-image lg:pt-20">
            <Image
              src={AboutImg3}
              alt="About Image 3"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5 "
            />
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="px-[8%] lg:px-[12%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
      >
        {statsData.map((item, index) => (
          <div key={index} className="about-card">
            <h2 className="text-5xl tracking-wider CalSans font-bold mb-6">
              {inView && <CountUp start={0} end={item.value} duration={2.5} />}
              {item.suffix}
            </h2>
            <div className="about-content py-6 border-t border-gray-400r">
              <h3 className="mb-3 text-2xl CalSans">{item.title} </h3>
              <p className="text-gray-400 GolosText">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
