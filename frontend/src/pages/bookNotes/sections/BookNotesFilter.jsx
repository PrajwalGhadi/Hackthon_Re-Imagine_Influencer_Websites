import { useNavigate } from "react-router-dom";

const BookNotesFilter = ({ categories }) => {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(`/booknotes/${path}`);
  }

  return (
    <>
      <section
        id="bookNotesFilter"
        className="px-[5vw] py-2 lg:px-[5vw] lg:py-5"
      >
        <div className="bg-[#cad7fe] min-h-[3vw] rounded-2xl flex items-center justify-center px-3 gap-2 shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-4 lg:gap-4 lg:rounded-3xl">
          <h3
            className="text-center text-[3.5vw] font-small shadow-[0.25vw_0.25vw_0.5vw_rgb(0,0,0,0.75)] py-2 px-5 lg:hover:shadow-[0px_4px_10px_rgba(0,0,0,0.25)] lg:p-2 rounded-xl active:scale-95 lg:text-[1.25vw] flex flex-col gap-2 lg:flex-row lg:shadow-none select-none"
            onClick={() => handleClick("all")}
          >
            <span>📚</span>
            <span> All</span>
          </h3>
          {categories?.map((item, index) => {
            return (
              <h3
                key={index}
                className="text-center text-[3.25vw] font-small shadow-[0.25vw_0.25vw_0.5vw] lg:hover:shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-2 px-1 lg:p-2 rounded-xl active:scale-95 lg:text-[1.25vw] flex flex-col gap-2 lg:flex-row lg:shadow-none select-none"
                onClick={() => handleClick(item?.path)}
              >
                <span>{item.filterLogo}</span> <span>{item.filterName}</span>
              </h3>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BookNotesFilter;
