"use client";

import Image from "next/image";

import service1 from "@/public/services/services1.jpg";
import service2 from "@/public/services/services2.jpg";
import service3 from "@/public/services/services3.jpg";
import service4 from "@/public/services/services4.jpg";

export default function Services() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] pt-20 pb-60 services relative">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Our Services
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Explore our{" "}
              <span className="text-(--prim) ">
                comprehensive interior design{" "}
              </span>
              services
            </h1>
            <p className="text-gray-400 GolosText">
              We offer a wide range of interior design services to meet your
              needs.
            </p>
          </div>
        </div>
        <div className="services-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8 ">
            <h4 className="text-4xl CalSans">01</h4>
            <div className="services-content">
              <h2 className="mb-3 text-4xl CalSans">
                Residential Interior Design
              </h2>
              <p className="GolosText text-gray-400">
                We provide customized interior design solutions for residential
                spaces, creating comfortable and stylish living environments.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-52.5 w-full md:w-75 ">
            <Image
              src={service1}
              alt="service1"
              className="w-full h-full services-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="services-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 ">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8 ">
            <h4 className="text-4xl CalSans">02</h4>
            <div className="services-content">
              <h2 className="mb-3 text-4xl CalSans">
                Commercial Interior Design
              </h2>
              <p className="GolosText text-gray-400">
                We provide customized interior design solutions for commercial
                spaces, creating functional and aesthetically pleasing
                environments.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-52.5 w-full md:w-75 ">
            <Image
              src={service2}
              alt="service2"
              className="w-full h-full services-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="services-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 ">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8 ">
            <h4 className="text-4xl CalSans">03</h4>
            <div className="services-content">
              <h2 className="mb-3 text-4xl CalSans">
                Interior Design Consultation
              </h2>
              <p className="GolosText text-gray-400">
                We provide expert interior design consultation services,
                offering professional advice and guidance to help you create
                your ideal space.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-52.5 w-full md:w-75 ">
            <Image
              src={service3}
              alt="service3"
              className="w-full h-full services-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="services-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 ">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8 ">
            <h4 className="text-4xl CalSans">04</h4>
            <div className="services-content">
              <h2 className="mb-3 text-4xl CalSans">
                Outdoor & Landscape Design
              </h2>
              <p className="GolosText text-gray-400">
                We provide customized outdoor and landscape design solutions,
                creating beautiful and functional outdoor spaces.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-52.5 w-full md:w-75 ">
            <Image
              src={service4}
              alt="service4"
              className="w-full h-full services-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
      </div>
    </>
  );
}
