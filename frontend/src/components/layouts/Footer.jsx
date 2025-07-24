import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";
import clsx from "clsx";
import NewletterInput from "../shared/NewletterInput";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const { landingPageData } = useContext(ContextAPI);
  const footer = landingPageData?.footer;
  const newsletter = landingPageData?.newsletter;
  return (
    <>
      <footer
        className={clsx(
          "bg-[#1A1A1A] text-[#f4eeee] flex max-w-[100vw] flex-col md:px-[2vw] py-[2vw]",
          "lg:min-h-[15vw] rounded-tl-[3vw] rounded-tr-[3vw] lg:px-[15vw] lg:py-10 lg:-mt-10"
        )}
      >
        <div className={clsx("flex flex-col", "lg:gap-5 lg:flex-row md:flex-row")}>
          <div className="w-[100%] p-4">
            <h1 onClick = {()=> {navigate('/')}} className={clsx("font-[Square_peg] text-5xl", "lg:text-5xl")}>
              {footer?.logo}
            </h1>

            <div className="flex justify-start mt-20">
              <NewletterInput newsletter={newsletter}/>
            </div>
            <h3 onClick = {()=>{navigate('/newsletter')}} className={clsx("font-medium py-2 pulse", "lg:text-lg lg:px-1")}>
              Join the Newsletter
            </h3>
          </div>

          <div className="w-full lg:w-[50%] py-4 lg:p-4" >
            <h3
              className={clsx(
                "font-medium text-xl",
                "lg:text-2xl lg:px-1 lg:py-2 md:text-md"
              )}
            >
              {footer?.resources?.title}
            </h3>

            <div
              className={clsx("flex flex-col text-lg mt-5 gap-1", "lg:text-xl lg:gap-2")}
            >
              {footer?.resources?.links?.map((item, index) => {
                return (
                  <div key={index}>
                    <h3 onClick={()=>{navigate(`${item.link}`)}}>{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-[100%] px-1 py-4 lg:p-4">
            <h3
              className={clsx(
                "font-medium text-xl",
                "lg:text-2xl lg:px-1 lg:py-2 md:text-md"
              )}
            >
              {footer?.contact?.title}
            </h3>

            <div
              className={clsx("flex flex-col text-lg mt-5 gap-1", "lg:gap-2")}
            >
              {footer?.contact?.links?.map((item, index) => {
                return (
                  <div key={index} className="flex gap-2 items-center lg:text-xl">
                    <h3>{item}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full  px-0 py-4">
            <h3
              className={clsx(
                "font-medium text-xl mb-5",
                "lg:text-2xl lg:px-1 lg:py-2 md:text-md"
              )}
            >
              {footer?.socialMedia?.title}
            </h3>

            <div className={("flex flex-col text-lg mt-5 gap-1", "lg:gap-2")}>
              {footer?.socialMedia?.links?.map((item, index) => {
                return (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="flex gap-2 items-center">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className={clsx(
                        "w-[6vw] h-[6vw]",
                        "lg:w-[2vw] lg:h-[2vw] md:w-[4vw] md:h-[4vw]"
                      )}
                    />
                    <h3 className="text-lg md:text-md lg:text-xl">{item?.name}</h3>
                  </a>
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
