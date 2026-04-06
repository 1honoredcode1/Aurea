"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";

import test1 from "@/public/team/team-1.jpg";
import test2 from "@/public/team/team-2.jpg";

const TestimonialData = [
  {
    id: "1",
    img: test2,
    desc: "A wonderful experience working with this interior design company. They transformed my home into a stunning space that perfectly reflects my style and personality. Highly recommended!",
    name: "Jonathan",
    role: "Co-Founder",
  },
  {
    id: "2",
    img: test1,
    desc: "I am extremely satisfied with the interior design services provided by this company. They listened to my ideas and created a beautiful and functional space that exceeded my expectations. I would definitely work with them again!",
    name: "Emily",
    role: "Marketing Manager",
  },
];

export default function Testimonial() {
  return (
    <>
      <div className="testimonial flex flex-col-reverse lg:flex-row gap-5 bg-[#EEE]">
        <div className="w-full lg:w-1/2 testimonial-image"></div>
        <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[12%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20 ">
          <div className="flex flex-col gap-10">
            <div className="w-full pt-8">
              <span className="rounded-full text-black title-span border border-gray-400 px-6 GolosText uppercase font-bold">
                Our Clients say
              </span>
            </div>
            <div className="w-full lg:w-1.2">
              <h1 className="CalSans text-black text-5xl md:text-7xl">
                Here is what{" "}
                <span className="text-(--prim) ">our clients say </span>
                about our interiors.
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-5">
            <h1 className="text-7xl CalSans">4.50</h1>{" "}
            <div className="flex flex-col items-center">
              <div className="stars-icon flex items-center gap-1 bg-(--prim) px-3 py-1 text-white rounded-full ">
                <i className="bi bi-star-fill text-cs"></i>
                <i className="bi bi-star-fill text-cs"></i>
                <i className="bi bi-star-fill text-cs"></i>
                <i className="bi bi-star-fill text-cs"></i>
                <i className="bi bi-star-fill text-cs"></i>
              </div>
              <p className="GolosText"> 2,100 Reviews</p>
            </div>
            <p className="w-full lg:w-[50%] font-semibold GolosText ">
              Our team is dedicated to creating beautiful interiors that exceed
              our clients&apos; expectations.
            </p>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              modules={[Autoplay]}
              speed={1500}
            >
              {TestimonialData.map((test, index) => (
                <SwiperSlide key={index}>
                  <p className="GolosText text-2xl font-semibold tracking-wide">
                    {test.desc}
                  </p>
                  <div className="flex items-center gap-3 mt-8">
                    <Image
                      src={test.img}
                      alt={test.name}
                      className="rounded-full w-17.5 h-17.5 object-cover "
                    />
                    <div>
                      <h3 className="CalSans text-xl text-black">
                        {test.name}
                      </h3>
                      <p className="GolosText text-sm text-gray-600">
                        {test.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
