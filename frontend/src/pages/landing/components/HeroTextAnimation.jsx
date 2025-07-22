import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";

const HeroTextAnimation = ({ hero }) => {
  return (
    <>
      {" "}
      {hero?.subpoints && (
        <>
          <TypeAnimation
            sequence={[hero.subpoints[0]]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-xl")}
          />
          <TypeAnimation
            sequence={[
              "",
              1500, // wait before typing the second line
              hero.subpoints[1],
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-xl")}
          />
          <TypeAnimation
            sequence={[
              "",
              3000, // wait more before third line
              hero.subpoints[2],
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-xl")}
          />
          <TypeAnimation
            sequence={[
              "",
              4500, // wait more before third line
              hero.subpoints[3],
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-xl")}
          />
          <TypeAnimation
            sequence={[
              "",
              6000, // wait more before third line
              hero.subpoints[4],
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className={clsx("text-md lg:text-xl")}
          />
        </>
      )}
    </>
  );
};

export default HeroTextAnimation;
