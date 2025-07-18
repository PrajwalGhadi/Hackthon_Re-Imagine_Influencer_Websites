import clsx from "clsx";

const NewsLetter = ({newsletter}) => {

  return (
    <>
      <div className="border-t-2 border-b-2 border-gray-400">
        <div className="bg-[#eeeadd] min-h-[8vw] py-5 px-10 text-center text-[1.5vw] flex flex-col gap-8">
          <p className={clsx("text-[3vw]", "lg:text-[1.35vw]")}>{newsletter?.description}</p>

          <form action="" className="flex justify-end ">
            <input
              type="text"
              placeholder={newsletter?.inputPlaceholder}
              className={clsx("bg-[#fafaf8]  rounded-tl-lg rounded-bl-lg text-[3vw] px-4", "lg:px-5 lg:text-lg")}
            />
            <button className={clsx("w-fit p-2 text-[#fef4ec] bg-[#bc8f8f] rounded-tr-lg rounded-br-lg mt-auto border-none shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)] text-[3vw] lg:text-lg","lg:p-4")}>
              Join Me
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
