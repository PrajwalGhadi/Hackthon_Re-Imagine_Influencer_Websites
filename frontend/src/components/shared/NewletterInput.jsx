import clsx from "clsx";


const NewletterInput = ({newsletter}) => {
  return (
    <>
      <form action="" className="flex justify-end ">
        <input
          type="text"
          placeholder={newsletter?.inputPlaceholder}
          className={clsx(
            "bg-[#fafaf8] text-black rounded-tl-lg rounded-bl-lg text-[3vw] px-4",
            "lg:px-5 lg:text-lg"
          )}
        />
        <button
          className={clsx(
            "w-fit p-2 text-[#fef4ec] bg-[#bc8f8f] rounded-tr-lg rounded-br-lg mt-auto border-none shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)] text-[3vw] lg:text-lg",
            "lg:p-4"
          )}
        >
          Join Me
        </button>
      </form>
    </>
  );
};

export default NewletterInput;
