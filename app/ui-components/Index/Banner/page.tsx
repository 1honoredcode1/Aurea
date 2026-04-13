export default function Banner() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 banner h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
        <div className=" title flex flex-col items-center justify-center">
          <span className="rounded-full text-black/80 title-span border border-black px-6 GolosText uppercase font-bold">
            Your Dream Awaits
          </span>

          <h1 className="CalSans text-5xl text-white md:text-8xl w-full lg:w-[70%] my-5 ">
            Lets Start
            <span className="text-(--prim) "> Designing Your </span>
            Dream Space
          </h1>
        </div>
      </div>
    </>
  );
}
