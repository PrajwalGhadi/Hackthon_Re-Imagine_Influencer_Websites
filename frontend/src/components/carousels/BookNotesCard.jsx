import clsx from "clsx";
import { useLocation } from "react-router-dom";


const BookNotesCard = ({item}) => {

  // console.log('I came to BookNotesCards')

  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <div
        className={
          `bg-[#ffff] lg:w-fit  lg:h-[40vh] h-[40vh] flex flex-col items-center rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] p-5 backdrop-blur-none w-[85%] ${location.pathname === '/'? 'md:w-[100%]' : 'md:w-[30%]'} md:h-[32vh]`
        }
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
          <p className="text-sm text-gray-500">{item?.author.length > 25 ? item?.author.substring(0, 20) + "..." : item?.author}</p>
          <button
            className={clsx(
              "w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] font-medium px-2 py-2 rounded-lg mt-8",
              "lg:px-4 shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
            )}
          >
            Read Notes
          </button>
        </div>
      </div>
    </>
  );
};

export default BookNotesCard;
