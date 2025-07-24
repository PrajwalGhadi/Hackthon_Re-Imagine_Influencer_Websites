import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const Button = ({ text, navigateTo }) => {
    
  const navigate = useNavigate();

  return (
    <button
      onClick={() => { navigateTo && navigate(navigateTo)}}
      className={clsx(
        "w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] p-3 rounded-lg mt-8",
        "lg:py-3 lg:px-5 lg:rounded-lg lg:mt-0 md:p-3 lg:text-md"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
