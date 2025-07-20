import clsx from "clsx";

const Hero = () => {
  return (
    <section id="newsletterHeroSection" className="px-[3vw] py-3 pb-20">
      <div className={clsx("flex flex-col justify-between font-[Inter] mt-15 gap-10",
          "lg:flex-row lg:mt-0")}>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="text-[5.25vw] font-bold lg:text-4xl lg:font-medium text-center">
              A Newsletter for Curious Thinkers ✨
            </h1>
            <h3 className="text-[3.25vw] lg:text-2xl text-center opacity-75 w-[90%]">
              “No spam. Just my favorite thoughts, book takeaways, and
              unfiltered ideas — as I write, read, and grow.”
            </h3>
          </div>
          <div className="bg-[#e3e8d0] py-2 lg:py-6 px-8 flex flex-col items-center justify-center lg:gap-2 rounded-4xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <h1
              className={clsx("font-[Square_peg] text-center text-[8vw]", "lg:text-5xl")}
            >
              Elizabeth Filips
            </h1>
            <h2 className="font-[Inter] text-[6vw] lg:text-4xl font-medium">
              Strong Opinions,
            </h2>
            <h2 className="font-[Inter] text-[6vw] lg:text-4xl font-medium">Loosely Held</h2>
            <p className="font-[Inter] text-[3.25vw] lg:text-[1vw] opacity-75 text-center mt-2">
              Heya, I'm Elizabeth, a medical student and painter in London. Some
              Sundays I write about exploring meaning, productivity, little
              pleasures and just navigating life. And some of my favourite
              things that week.
            </p>
            <p className={clsx("font-[Square_peg] mt-2 text-[5vw] text-center -rotate-8 border-b-1 pb-1 lg:text-shadow-lg/20", "lg:text-3xl")}>
              Elizabeth Filips
            </p>
          </div>
          <div className="bg-[#eeeadd] py-6 px-8flex flex-col items-center justify-center lg:gap-4 rounded-4xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <h3 className="text-[4.25vw] text-center lg:text-2xl mb-4">
              Join me and over 18,000 other overthinkers:
            </h3>
            <form action="" className="flex flex-col justify-end items-center gap-5 w-full">
              <input
                type="text"
                placeholder="First Name"
                className={clsx(
                  "text-black rounded-lg text-[3vw] w-[70%] px-4 border-b-2 border-black outline-none",
                  "lg:px-5 lg:text-lg lg:w-[50%]"
                )}
              />

              <input
                type="text"
                placeholder="Enter Email"
                className={clsx(
                    "text-black rounded-lg text-[3vw] w-[70%] px-4 border-b-2 border-black outline-none",
                  "lg:px-5 lg:text-lg lg:w-[50%]"
                )}
              />

              <button
                className={clsx(
                  "w-fit px-6 py-3 font-bold  text-[#fef4ec] bg-[#bc8f8f] rounded-lg mt-auto border-none shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)] text-[3.5vw] lg:text-lg lg:font-medium",
                  "lg:py-2 lg:px-5"
                )}
              >
                Join Me
              </button>
            </form>
          </div>
        </div>
        <div
          className={clsx(
            "flex items-center justify-center",
            "lg:w-[40%] lg:p-10"
          )}
        >
          <div
            className={clsx(
              "shadow-[0.2vw_0.25vw_0.5vw_rgb(0,0,0,0.75)] active:scale-105 rounded-tl-[8vw] rounded-br-[8vw] w-[55vw]",
              "lg:w-[15vw] lg:rounded-tl-[4vw] lg:rounded-br-[4vw]"
            )}
          >
            <img
              src="/assets/images/landingPageImages/landingPageImage.avif"
              alt=""
              className={clsx(
                "w-full h-full object-contain aspect-auto rounded-tl-[8vw] rounded-br-[8vw]",
                "lg:rounded-tl-[4vw] lg:rounded-br-[4vw]"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
