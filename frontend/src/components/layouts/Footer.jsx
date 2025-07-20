import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";
import clsx from "clsx";
import NewletterInput from "../shared/NewletterInput";

const Footer = () => {
  const { landingPageData } = useContext(ContextAPI);
  const footer = landingPageData?.footer;
  const newsletter = landingPageData?.newsletter;
  return (
    <>
      <footer
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

            <div className="flex justify-start mt-20">
              <NewletterInput />
            </div>
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
                  <div key={index}>
                    <h3>{item}</h3>
                  </div>
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
                  <div key={index} className="flex gap-2 items-center">
                    <h3>{item}</h3>
                  </div>
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
                );
              })}
            </div>
          </div>
        </div>

        <div className={clsx("py-5 text-center")}>
          <p>
            {footer?.credits?.copyrights} | {footer?.credits?.credits}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
