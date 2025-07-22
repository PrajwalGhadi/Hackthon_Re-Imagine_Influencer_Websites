import clsx from "clsx";

const YoutubeVideos = ({youtube}) => {

  return (
    <>
      <section className="py-5">
        <h1 className={clsx("font-medium font-[Playfair_Display] text-[7vw]", "lg:text-[2.5vw] lg:mb-2 lg:leading-[3vw] md:text-[4.5vw]")}>
          {youtube?.heading}
        </h1>
        <p className={clsx("text-lg mb-10","lg:text-2xl lg:mb-5")}>{youtube?.description}</p>

        <div className={clsx("flex item-center justify-between flex-wrap overflow-hidden shrink-0 gap-10 px-3 py-5 min-h-[15vw]", "lg:gap-10 lg:min-h-[5vw] lg:px-15 lg:py-10 md:flex-row")}>
          {youtube?.videos.map((item, index) => {
            return (
              <div key={index} className={clsx("shadow-[0px_4px_10px_rgba(0,0,0,0.25)] bg-[#f2f3f5] rounded-2xl w-full","lg:w-[30%]  md:w-[47%]")}>
                <img src={item?.thumbnail} alt={item?.title} className={clsx("w-full object-cover rounded-2xl")}/>
                <div>
                  <h3 className={clsx("text-center font-medium px-2 py-2 text-md")}>{item?.title}</h3>
                </div>
              </div>
            );
          })}
          
        </div>

        <div className="flex items-center justify-center">
          <button className={clsx("w-fit text-[#fef4ec] bg-[#bc8f8f] font-medium border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] px-2 py-2 rounded-lg mt-8", "lg:px-4 lg:rounded-lg lg:mt-0")}>
            Browse Full Library
          </button>
        </div>
      </section>
    </>
  );
};

export default YoutubeVideos;
