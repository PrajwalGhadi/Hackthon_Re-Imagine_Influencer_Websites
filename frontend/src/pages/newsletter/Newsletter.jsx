import clsx from "clsx";
import Hero from "./sections/Hero";


const Newsletter = () => {
  return (
    <main
      className={clsx("w-full pt-[5vw]", "lg:gap-[2vw]")}
      id="BookNotesPage"
    >
        <Hero />
    </main>
  );
};

export default Newsletter;
