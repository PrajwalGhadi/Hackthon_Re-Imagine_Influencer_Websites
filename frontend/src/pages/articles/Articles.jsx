import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";

import clsx from "clsx";
import MyThoughts from "./mythoughts/Mythoughts";


const Articles = () => {
  const { myThoughts } = useContext(ContextAPI);
  // console.log(myThoughts && myThoughts)
  return (
    <>
      <main id="Articles"
        className={clsx(
          "flex flex-col font-[Inter] px-[4vw] gap-[10vw]",
          "lg:gap-[2vw] lg:pt-[5vw] lg:min-h-[100vh]"
        )}
      >
        <MyThoughts myThoughts = {myThoughts}/>
      </main>
    </>
  );
};

export default Articles;
