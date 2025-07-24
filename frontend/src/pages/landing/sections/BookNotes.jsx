

import clsx from "clsx";

import BookSlider from "../components/BookSlider";
import Button from "../../../components/shared/Button";

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
          <Button text = {'Browse Full Library'} />
        </div>
      </section>
    </>
  );
};

export default booknotes;
