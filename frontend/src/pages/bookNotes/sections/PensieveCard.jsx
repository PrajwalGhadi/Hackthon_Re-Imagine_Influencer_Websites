import clsx from "clsx";
import BookNotesTextAnimation from "../components/BookNotesTextAnimation";
import NewletterInput from "../../../components/shared/NewletterInput";

const PensieveCard = ({ pensieve, newsletter }) => {
  return (
    <>
      <section id="PensieveCard" className="px-[5vw] py-5 md:py-0 md:mb-5">
        <div className={clsx("bg-[#e3e8d0] flex flex-col gap-2 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] px-5","lg:gap-4 lg:min-h-[22vw] lg:rounded-4xl lg:shadow-[0px_4px_10px_rgba(0,0,0,0.25)]")}>
          <h1 className="text-center font-semibold text-[7vw] lg:text-[3vw] md:text-[5vw]">
            {pensieve?.title}
          </h1>
          <h3 className="text-center text-[3vw] font-small lg:text-[1.25vw] md:text-[2.25vw]">
            {pensieve?.subtitle}
          </h3>

          <div className="flex justify-center">
            <NewletterInput newsletter={newsletter}/>
          </div>

          <div className="px-5 lg:px-25">
            <h3 className="text-[4vw] font-medium lg:text-[1.5vw] md:text-[3vw]">
              {pensieve?.joinPensivePoints?.title}
            </h3>

            <div className={clsx("min-h-[12vh] flex flex-col", "md:min-h-[12vh] lg:min-h-[12vh]")}>
              <BookNotesTextAnimation pensieve={pensieve} />
            </div>
          </div>

          <h3 className="text-center text-[3.25vw] lg:text-[1.25vw] md:text-[2.75vw]">
            {pensieve?.finalText}
          </h3>
        </div>
      </section>
    </>
  );
};

export default PensieveCard;
