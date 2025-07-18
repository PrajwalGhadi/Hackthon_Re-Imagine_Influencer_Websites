import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import clsx from "clsx";

const Footer = () => {
  const { landingPageData } = useContext(ContextAPI);
  const footer = landingPageData?.footer;
  const newsletter = landingPageData?.newsletter;
  return (
    <>
      <div
        className={clsx(
          "bg-[#1A1A1A] text-[#f4eeee] flex max-w-[100vw] flex-col",
          "lg:min-h-[15vw] lg:rounded-tl-[3vw] lg:rounded-tr-[3vw] lg:px-[15vw] lg:py-10 lg:-mt-10"
        )}
      >
        <div className={clsx("flex flex-col", "lg:flex-row")}>
          <div className="w-full  p-4">
            <h1 className={clsx("font-[Square_peg] text-5xl", "lg:text-5xl")}>
              {footer?.logo}
            </h1>

            <form
              action=""
              className={clsx("flex justify-start mt-20", "lg:mt-20")}
            >
              <input
                type="text"
                placeholder={newsletter?.inputPlaceholder}
                className={
                  clsx("bg-[#fef4ec] text-gray-700 px-4 rounded-tl-lg rounded-bl-lg",
                  "lg:px-4 lg:text-lg")
                }
              />
              <button
                className={clsx(
                  "w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)] rounded-tr-lg rounded-br-lg p-2",
                  "lg:rounded-tr-lg lg:rounded-br-lg lg:mt-auto lg:text-lg lg:p-4"
                )}
              >
                Join Me
              </button>
            </form>
            <h3 className={clsx("font-medium py-2", "lg:text-lg lg:px-1")}>
              Join the Newsletter
            </h3>
          </div>

          <div className="w-[50%]  p-4">
            <h3
              className={clsx(
                "font-medium text-xl",
                "lg:text-lg lg:px-1 lg:py-2"
              )}
            >
              {footer?.resources?.title}
            </h3>

            <div
              className={clsx("flex flex-col text-lg mt-5 gap-1", "lg:gap-2")}
            >
              {footer?.resources?.links?.map((item, index) => {
                return (
                  <>
                    <div key={index} className="">
                      <h3>{item}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="w-[50%]  p-4">
            <h3
              className={clsx(
                "font-medium text-xl",
                "lg:text-lg lg:px-1 lg:py-2"
              )}
            >
              {footer?.contact?.title}
            </h3>

            <div
              className={clsx("flex flex-col text-lg mt-5 gap-1", "lg:gap-2")}
            >
              {footer?.contact?.links?.map((item, index) => {
                return (
                  <>
                    <div key={index} className="flex gap-2 items-center">
                      <h3>{item}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="w-[50%]  p-4">
            <h3
              className={clsx(
                "font-medium text-xl",
                "lg:text-lg lg:px-1 lg:py-2"
              )}
            >
              {footer?.socialMedia?.title}
            </h3>

            <div className={("flex flex-col text-lg mt-5 gap-1", "lg:gap-2")}>
              {footer?.socialMedia?.links?.map((item, index) => {
                return (
                  <>
                    <div key={index} className="flex gap-2 items-center">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className={clsx(
                          "w-[6vw] h-[6vw]",
                          "lg:w-[2vw] lg:h-[2vw]"
                        )}
                      />
                      <h3 className="text-lg">{item?.name}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className={clsx("py-5 text-center")}>
            <p>{footer?.credits?.copyrights} | {footer?.credits?.credits}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
