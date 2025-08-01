import clsx from "clsx";



const NewletterInput = ({newsletter}) => {

  return (
    <>
      <form action="" className="flex justify-end ">
        <input
          type="text"
          placeholder={newsletter?.inputPlaceholder}
          className={clsx(
            "bg-[#fafaf8] text-black rounded-tl-lg rounded-bl-lg text-[3vw] px-3 py-3",
            "lg:px-5 md:px-5 lg:text-lg md:text-[1.25vw] placeholder:text-black outline-none"
          )}
        />
        <button
          className={clsx(
            "w-[20vw] px-3 py-3 text-[#fef4ec] bg-[#bc8f8f] rounded-tr-lg rounded-br-lg mt-auto border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] text-[3vw] lg:text-[0.75vw]",
            "lg:p-4 lg:w-fit md:text-[1.75vw] md:py-2 md:w-[10vw]"
          )}
        >
          Join Me
        </button>

      </form>
    </>
  );
};

export default NewletterInput;
