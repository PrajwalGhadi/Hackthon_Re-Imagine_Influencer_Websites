import clsx from "clsx";
import NewletterInput from "../../../components/shared/NewletterInput";

const NewsLetter = ({ newsletter }) => {
  return (
    <>
      <div className="border-t-2 border-b-2 border-gray-400">
        <div className="bg-[#eeeadd] min-h-[8vw] py-5 px-10 text-center text-[1.5vw] flex flex-col gap-8">
          <p className={clsx("text-[3vw]", "lg:text-[1.35vw]")}>
            {newsletter?.description}
          </p>

          <NewletterInput newsletter={newsletter} />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
