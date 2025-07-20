import clsx from "clsx";
import HeroTextAnimation from "../components/HeroTextAnimation";


const Hero = ({ hero }) => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col justify-between font-[Inter] mt-15 gap-10",
          "lg:flex-row lg:mt-0"
        )}
      >
        <div className={clsx("flex flex-col w-full py-5", "lg:py-10 lg:gap-2")}>
          <h1
            className={clsx(
              "font-medium font-[Playfair_Display] text-[7vw] leading-[8.5vw]",
              "lg:text-[3vw] lg:mb-4 lg:leading-[3.5vw]"
            )}
          >
            {hero?.headline}
          </h1>

          <p className={clsx("text-lg mb-10", "lg:text-2xl lg:mb-10")}>
            {hero?.subHeadline}
          </p>

          <div className={clsx("min-h-[20vh] flex flex-col", "")}>
            <HeroTextAnimation hero={hero} />
          </div>

          <button
            className={clsx(
              "text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0.75vw_0.75vw_0.75vw_rgba(0,0,0,0.75)] w-fit rounded-lg p-4 mt-10",
              "lg:shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)] lg:w-fit lg:p-4 lg:rounded-lg lg:mt-6"
            )}
          >
            Get Book Note
          </button>
        </div>

        <div
          className={clsx(
            "flex items-center justify-center",
            "lg:w-[40%] lg:p-10"
          )}
        >
          <div
            className={clsx(
              "shadow-[0.5vw_0.5vw_0.75vw] active:scale-105 rounded-tl-[8vw] rounded-br-[8vw] w-[55vw]",
              "lg:w-[15vw] lg:rounded-tl-[4vw] lg:rounded-br-[4vw]"
            )}
          >
            <img
              src={hero?.image}
              alt=""
              className={clsx(
                "w-full h-full object-contain aspect-auto rounded-tl-[8vw] rounded-br-[8vw]",
                "lg:rounded-tl-[4vw] lg:rounded-br-[4vw]"
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
