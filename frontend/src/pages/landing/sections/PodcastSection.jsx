import clsx from "clsx";

const PodcastSection = ({podcast}) => {


  return (
    <>
      <div className="py-5 mb-20">
        <h1 className={clsx("font-medium font-[Playfair_Display] text-[7vw]", "lg:text-[2.5vw] lg:mb-2 lg:leading-[3vw]")}>
          {podcast?.heading}
        </h1>
        <p className={clsx("text-lg mb-10","lg:text-2xl lg:mb-5")}>{podcast?.description}</p>

        <div className={clsx("flex item-center justify-center flex-wrap overflow-hidden shrink-0 gap-10 px-5 py-5 min-h-[15vw]", "lg:gap-10 lg:min-h-[5vw] lg:px-10 lg:py-10")}>
          {podcast?.episodes?.map((item, index) => {
            return (
              <div key={index} className={clsx(" bg-[#f2f3f5] rounded-2xl","lg:w-[40%] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]")}>
                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  className={clsx("w-full object-cover rounded-2xl")}
                />
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center">
          <button className={clsx("w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] px-2 py-2 rounded-lg mt-8", "lg:px-4 lg:rounded-lg lg:mt-0 lg:shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)]")}>
            Browse Full Library
          </button>
        </div>
      </div>
    </>
  );
};

export default PodcastSection;
