"use client";

import Image from "next/image";
import Link from "next/link";

import HeroImg2 from "@/public/hero/hero-img2.jpg";
import HeroImg from "@/public/hero/hero-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import partner1 from "@/public/partners/partner1.svg";
import partner2 from "@/public/partners/partner2.svg";
import partner3 from "@/public/partners/partner3.svg";
import partner4 from "@/public/partners/partner4.svg";
import partner5 from "@/public/partners/partner5.svg";
import partner6 from "@/public/partners/partner6.svg";

const Partners = [partner1, partner2, partner3, partner4, partner5, partner6];

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg-elm"></div>
        <div className="hero-bg-elm2"></div>

        <div className="w-full px-[8%] lg:px-[12%] py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-[48%] relative z-10">
              <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full inline-block">
                Trusted Design Partner
              </span>

              <h1 className="hero-title CalSans my-5 text-6xl lg:text-8xl leading-[0.95]">
                <span className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
                  <span>Find Your</span>

                  <span className="hero-content-img hidden lg:block shrink-0 relative">
                    <Image
                      src={HeroImg2}
                      alt="hero-img2"
                      className="hero-content-img-media"
                      width={430}
                      height={130}
                      priority
                    />
                    <i className="bi bi-play-fill"></i>
                  </span>
                </span>

                <span className="block">
                  <span className="text-(--prim)">Interior Design</span>
                </span>
              </h1>

              <p className="text-gray-700 w-full md:w-[80%]">
                We are a full-service interior design company dedicated to
                creating beautiful and functional spaces that reflect our
                clients&apos; unique styles and needs.
              </p>

              <button
                className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold
              hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group"
              >
                <Link href="/ui-components/Pages/Services">
                  Get Our Services <i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[52%] z-10">
              <div className="hero-image">
                <Image
                  src={HeroImg}
                  alt="hero-img"
                  className="w-full h-full object-cover rounded-4xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          }}
          className="partner-swiper"
        >
          {Partners.map((img, index) => (
            <SwiperSlide key={index}>
              <Image src={img} alt="Partners" className="partner-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
