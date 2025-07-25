import clsx from "clsx";
import Button from "../../../components/shared/Button";

const YoutubeVideos = ({youtube}) => {

  return (
    <>
      <section className="py-5">
        <h1 className={clsx("font-medium font-[Playfair_Display] text-[7vw]", "lg:text-[2.5vw] lg:mb-2 lg:leading-[3vw] md:text-[4.5vw]")}>
          {youtube?.heading}
        </h1>
        <p className={clsx("text-lg mb-10","lg:text-2xl lg:mb-5")}>{youtube?.description}</p>

        <div className={clsx("flex item-center justify-between flex-wrap overflow-hidden shrink-0 gap-10 px-3 py-5 min-h-[15vw]", "lg:gap-10 lg:px-5 lg:py-15 md:flex-row")}>
          {youtube?.videos.map((item, index) => {
            return (
              <div key={index} className={clsx("shadow-[0px_4px_10px_rgba(0,0,0,0.25)] bg-[#f2f3f5] rounded-2xl w-full","lg:w-[30%]  md:w-[47%] hover:cursor-pointer hover:p-3 hover:bg-gray-500 hover:text-white hover:transition-[bg, text] hover:duration-200 hover:ease")}>
                <img src={item?.thumbnail} alt={item?.title} className={clsx("w-full object-cover rounded-2xl ")}/>
                <div>
                  <h3 className={clsx("text-center font-medium px-2 py-2 text-md lg:text-md")}>{item?.title}</h3>
                </div>
              </div>
            );
          })}
          
        </div>

        <div className="flex items-center justify-center">
          <Button text = {'Browse Full Library'} navigateTo={'/youtube'}/>
        </div>
      </section>
    </>
  );
};

export default YoutubeVideos;
