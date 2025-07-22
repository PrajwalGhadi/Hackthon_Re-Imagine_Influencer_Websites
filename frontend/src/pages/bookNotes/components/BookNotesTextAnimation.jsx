import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";

const BookNotesTextAnimation = ({ pensieve }) => {
  return (
    <>
      {" "}
      {pensieve?.joinPensivePoints?.subpoints && (
        <>
          <TypeAnimation
            sequence={[pensieve?.joinPensivePoints?.subpoints[0]]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-2xl opacity-75 md:text-2xl")}
          />
          <TypeAnimation
            sequence={[
              "",
              1500, // wait before typing the second line
              pensieve?.joinPensivePoints?.subpoints[1],
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-2xl  opacity-75 md:text-2xl")}
          />
          <TypeAnimation
            sequence={[
              "",
              3000, // wait more before third line
              pensieve?.joinPensivePoints?.subpoints[2],
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-2xl  opacity-75 md:text-2xl")}
          />
        </>
      )}
    </>
  );
};

export default BookNotesTextAnimation;
