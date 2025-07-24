import clsx from "clsx";
import NewletterInput from "../../../components/shared/NewletterInput";

const NewsLetter = ({ newsletter }) => {
  return (
    <>
      <section className="border-t-2 border-b-2 border-gray-400 mt-2">
        <div className="bg-[#eeeadd] min-h-[8vw] py-5 px-3 md:px-10 lg:px-10 text-center flex flex-col gap-8">
          <p className={clsx("text-[3vw]", "lg:text-[1.35vw] md:text-[2vw]")}>
            {newsletter?.description}
          </p>

          <NewletterInput newsletter={newsletter} />
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
