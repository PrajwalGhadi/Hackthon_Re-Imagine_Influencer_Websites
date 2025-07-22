

import clsx from "clsx";

import BookSlider from "../components/BookSlider";

const booknotes = ({ booknotes }) => {
  return (
    <>
      <section className="py-5">
        <h1
          className={clsx(
            "font-medium font-[Playfair_Display] text-[7vw]",
            "lg:text-[2.5vw] lg:mb-2 lg:leading-[3vw] md:text-[4.5vw]"
          )}
        >
          {booknotes?.heading}
        </h1>
        <p className={clsx("text-lg mb-10","lg:text-2xl lg:mb-5")}>
          {booknotes?.description}
        </p>
        <div
          className={clsx(
            "flex justify-between flex-nowrap overflow-hidden shrink-0 min-h-[5vw] px-6",
            "lg:min-h-[5vw] lg:px-5 lg:py-10 md:min-h-[10vw] lg:flex md:flex"
          )}
        >
          <BookSlider booknotes = {booknotes}/>
        </div>

        <div className="flex items-center justify-center">
          <button
            className={clsx(
              "w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] px-2 py-2 rounded-lg mt-8",
              "lg:px-4 lg:rounded-lg lg:mt-0"
            )}
          >
            Browse Full Library
          </button>
        </div>
      </section>
    </>
  );
};

export default booknotes;
