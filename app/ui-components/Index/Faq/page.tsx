"use client";

import Image from "next/image";
import { useState } from "react";

import FAQ from "@/public/faq.jpg";

const faqData = [
  {
    id: "01",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of interior design services, including space planning, furniture selection, color consultation, and project management.",
  },
  {
    id: "02",
    question: "How long does a typical interior design project take?",
    answer:
      "The duration of an interior design project can vary depending on the scope and complexity. On average, it can take anywhere from a few weeks to several months.",
  },
  {
    id: "03",
    question: "Do you work with clients remotely?",
    answer:
      "Yes, we offer remote interior design services. We can collaborate with clients through video calls, email, and online platforms to ensure a seamless design process.",
  },
  {
    id: "04",
    question: "What is your design process?",
    answer:
      "Our design process typically involves an initial consultation, concept development, design presentation, revisions, and final implementation. We work closely with our clients throughout each stage to ensure their vision is brought to life.",
  },
  {
    id: "05",
    question: "Do you provide 3D renderings of the design?",
    answer:
      "Yes, we provide 3D renderings of the design to help our clients visualize the final outcome. This allows them to make informed decisions and provide feedback before the implementation phase.",
  },
  {
    id: "06",
    question: "What is your pricing structure?",
    answer:
      "Our pricing structure varies depending on the scope of the project and the services required. We offer both fixed-price packages and hourly rates. We provide a detailed proposal and contract outlining the costs before starting any work.",
  },
  {
    id: "07",
    question: "Can you help with sourcing furniture and decor?",
    answer:
      "Yes, we can assist with sourcing furniture and decor. We have established relationships with various suppliers and can help our clients find the perfect pieces that fit their style and budget.",
  },
  {
    id: "08",
    question: "Do you offer sustainable interior design options?",
    answer:
      "Yes, we are committed to sustainable interior design practices. We can incorporate eco-friendly materials, energy-efficient lighting, and sustainable furniture options into our designs to create environmentally conscious spaces.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 ">
        <div className="flex flex-col lg:flex-row gap-11">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Asked Questions
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl mb-5">
              We provide{" "}
              <span className="text-(--prim) ">answers to your questions</span>{" "}
              about our services
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 py-10 ">
          <div className="w-full lg:w-1/1  ">
            <div className="space-y-4 w-full">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`overflow-hidden py-2 transition-all duration-300
                  border-b border-gray-300 ${openIndex === index ? "" : ""}`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-heading flex items-center gap-5">
                      <h3 className="text-3xl font-semibold text-(--prim) ">
                        {" "}
                        {faq.id}
                      </h3>
                      <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800">
                        {faq.question}
                      </span>
                    </div>
                    {openIndex === index ? (
                      <i className="bi bi-dash text-(--prim) transition-all duration-300 text-2xl md:text-3xl"></i>
                    ) : (
                      <i className="bi bi-plus text-(--prim) transition-all duration-300 text-2xl md:text-3xl"></i>
                    )}
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden 
                      ${openIndex === index ? "max-h-75 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                  >
                    <p className="text-gray-700 GolosText px-7">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 pt-5">
            <div className="faq-card flex flex-col md:flex-row lg:flex-col md:items-center items-start gap-6">
              <Image src={FAQ} alt="faq" className="rounded-2xl mb-5" />
              <div className="flex flex-col">
                <h2 className="capitalize text-3xl CalSans mb-5">
                  Still have questions? We are here to help you.
                </h2>
                <p className="text-gray-400 text-lg GolosText">
                  If you have any further questions or need assistance, please
                  don&apos;t hesitate to contact us. Our team is always ready to
                  provide you with the information and support you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
