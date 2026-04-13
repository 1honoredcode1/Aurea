export default function Newsletter() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 newsletter relative">
        <div className="flex flex-col items-center justify-center">
          <span className="rounded-full title-span border border-gray-400 ps-10 px-7 py-2 GolosText uppercase font-bold">
            Subsribe To Our Newsletter
          </span>

          <h1 className="CalSans text-center text-4xl md:text-7xl w-full my-5 lg:w-[60%]">
            Stay Updated With
            <span className="text-(--prim) "> Our Newsletter </span> And Learn
          </h1>
          <p className="text-center GolosText text-lg w-full lg:w-[60%] ">
            Our newsletter is your go-to source for expert advice, exclusive
            content, and behind-the-scenes looks at our projects. Join our
            community of design enthusiasts and stay connected with the world of
            interior design.
          </p>
          <div
            className="email-details border-b border-gray-300 w-112.5 flex items-center transition-all duration-300 
          hover:border-(--prim) cursor-pointer"
          >
            <input
              type="email"
              placeholder="Email address..."
              className="focus:outline-none w-full py-3"
            />
            <i className="bi bi-arrow-up-right px-2 py-1 bg-(--prim) text-white rounded-full transition-all duration-300 hover:rotate-45 "></i>
          </div>
        </div>
      </div>
    </>
  );
}
