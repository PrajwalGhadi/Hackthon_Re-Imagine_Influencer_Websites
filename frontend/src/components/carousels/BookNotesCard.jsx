import clsx from "clsx";
import { useLocation } from "react-router-dom";
import Button from "../shared/Button";

const BookNotesCard = ({ item }) => {
  const location = useLocation();
  return (
    <>
      <div
        className={`bg-[#ffff] hover:bg-gray-400 transition-all ease-in duration-300 lg:w-fit lg:h-[40vh] h-[45vh] flex flex-col items-center rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] p-5 backdrop-blur-none w-[85%] ${
          location.pathname === "/" ? "md:w-[100%]" : "md:w-[30%]"
        } md:h-[32vh]`}
      >
        <img
          src={item?.cover}
          alt={item?.title}
          className="object-contain aspect-square w-full min-h-[60%] rounded-2xl"
        />
        <div className="w-full mt-4 text-center flex flex-col items-center">
          <h3 className="font-semibold text-sm text-textColor">
            {item?.title.length > 25
              ? item.title.substring(0, 20) + "..."
              : item.title}
          </h3>
          <p className="text-sm text-gray-600 ">
            {item?.author.length > 25
              ? item?.author.substring(0, 20) + "..."
              : item?.author}
          </p>

          <div className="flex items-center justify-center md:-mt-4 lg:mt-5">
            <Button text={"Read Notes"} navigateTo={"/booknotes"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNotesCard;
