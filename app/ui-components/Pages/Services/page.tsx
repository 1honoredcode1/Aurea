"use client";

import Link from "next/link";

import service1 from "@/public/services/services1.jpg";
import service2 from "@/public/services/services2.jpg";
import service3 from "@/public/services/services3.jpg";
import service4 from "@/public/services/services4.jpg";

import Newsletter from "../../Index/Newsletter/page";

const ServicesData = [
  {
    id: "1",
    title: "Residential Interior Design",
    desc: "We provide customized interior design solutions for residential spaces, creating comfortable and stylish living environments.",
    img: service1,
  },
  {
    id: "2",
    title: "Commercial Interior Design",
    desc: "Our commercial interior design services focus on creating functional and visually appealing spaces for businesses, including offices, retail stores, and hospitality venues.",
    img: service2,
  },
  {
    id: "3",
    title: "Sustainable Design",
    desc: "We incorporate sustainable design principles into our projects, using eco-friendly materials and energy-efficient solutions to create environmentally responsible interiors.",
    img: service3,
  },
  {
    id: "4",
    title: "Project Management",
    desc: "Our project management services ensure that your interior design project is executed smoothly, on time, and within budget, coordinating all aspects from concept to completion.",
    img: service4,
  },
];

export default function Services() {
  return (
    <>
      <div className="services-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">Services</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300 "
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Services</h2>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] pt-30 pb-20 ">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">
              Our Services
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl w-full lg:w-[80%] mb-5 ">
              Explore Our{" "}
              <span className="text-(--prim)">Interior Design </span>
              Services
            </h1>
            <p className="text-gray-400 GolosText">
              From concept development and space planning to furniture selection
              and project management, our team of experienced designers is
              dedicated to creating interiors that reflect your unique style and
              meet your functional needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {ServicesData.map((service, index) => (
            <div
              key={index}
              className="service-wrap w-full h-full flex flex-col justify-between p-8 rounded-2xl overflow-hidden
            bg-cover bg-center hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundImage: `url(${service.img.src})` }}
            >
              <h2 className="text-white GolosText text-4xl "> 0{service.id}</h2>
              <div className="flex flex-col">
                <h2 className="text-white GolosText text-4xl mb-3">
                  {" "}
                  {service.title}{" "}
                </h2>
                <p className="text-gray-300"> {service.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
}
