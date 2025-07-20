import clsx from "clsx";
import BookNotesTextAnimation from "../components/BookNotesTextAnimation";
import NewletterInput from "../../../components/shared/NewletterInput";

const PensieveCard = ({ pensieve }) => {
  return (
    <>
      <section id="PensieveCard" className="px-[5vw] py-5">
        <div className={clsx("bg-[#e3e8d0] flex flex-col gap-2 rounded-3xl shadow-[0.25vw_0.25vw_0.75vw] px-5","lg:gap-4 lg:min-h-[25vw] lg:rounded-4xl lg:shadow-[0.25vw_0.25vw_0.5vw]")}>
          <h1 className="text-center font-semibold text-[7vw] lg:text-[3vw]">
            {pensieve?.title}
          </h1>
          <h3 className="text-center text-[3vw] font-small lg:text-[1.25vw]">
            {pensieve?.subtitle}
          </h3>

          <div className="flex justify-center">
            <NewletterInput />
          </div>

          <div className="px-5 lg:px-25">
            <h3 className="text-[4vw] font-medium lg:text-[1.5vw]">
              {pensieve?.joinPensivePoints?.title}
            </h3>

            <div className={clsx("min-h-[12vh] flex flex-col", "")}>
              <BookNotesTextAnimation pensieve={pensieve} />
            </div>
          </div>

          <h3 className="text-center text-[3.25vw] lg:text-[1.25vw]">
            {pensieve?.finalText}
          </h3>
        </div>
      </section>
    </>
  );
};

export default PensieveCard;
