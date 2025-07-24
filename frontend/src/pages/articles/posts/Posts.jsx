import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextAPI } from "../../../context/ContextAPI";
import clsx from "clsx";
import ArticleContent from "../ArticleContent";

const Posts = () => {
  const params = useParams();
  
  const [currentBgColor, setCurrentBgColor] = useState(params.id % 2 === 0 ? '#cfcff1' : 'rgba(187,187,200,0.5)');

  const { myThoughts } = useContext(ContextAPI);

  const post = myThoughts?.mythoughts?.posts?.find(
    (_, index) => index === Number(params.id)
  );

  return (
    <>
      <section
        id="Mythoughts"
        className={clsx(
          "min-h-[110vh] mt-15 font-[Inter] flex justify-between gap-10",
          "lg:mt-0"
        )}
      >
        <div className="w-full py-15 px-5 md:py-15 lg:py-35 md:px-15 lg:px-25">
          <div
            className={` flex flex-col gap-2 rounded-2xl py-4 ${
              Number(params.id) % 2 === 0
                ? `bg-[${currentBgColor}]`
                : `bg-[${currentBgColor}]`
            }  shadow-[0px_4px_10px_rgba(0,0,0,0.25)]`}
          >
            <div className="flex justify-between gap-5 text-xl">
              <div className="flex gap-2 text-[4.5vw] md:text-xl lg:text-xl px-5 md:gap-5 lg:gap-5 mb-5">
                <small>{post?.date}</small> <small>{post?.readTime}</small>
              </div>
              <div className="flex items-center justify-center gap-4 px-4 py-2 bg-gray-800 rounded-tl-2xl rounded-bl-2xl md:px-10 lg:px-10 md:py-4 lg:py-4">
                {['#e3e8d0', '#eeeadd', 'rgba(187,187,200,0.5)', '#cfcff1'].map((item, index)=> {
                  return (
                    <div key={index} onClick={()=>{setCurrentBgColor(item)}} className={`w-3 h-3 rounded-full bg-[${item}] border-[#d8e9a5] hover:scale-105 active:scale-95 md:w-5 md:h-5 lg:w-5 lg:h-5`}></div>
                  )
                })}
              </div>
            </div>

            <div className="px-5 flex flex-col gap-2 text-3xl">
              <h1 className="font-bold ">{post?.title}</h1>
              <div className="py-10 hover:opacity-100 text-xl">
                <ArticleContent html={post?.content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
