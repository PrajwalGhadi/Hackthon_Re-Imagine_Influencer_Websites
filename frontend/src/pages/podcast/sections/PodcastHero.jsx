import clsx from "clsx";
import ReactPlayer from "react-player";

const PodcastHero = () => {
  return (
    <section
      className={clsx(
        "flex flex-col justify-between font-[Inter] mt-15 gap-10",
        "lg:flex-row lg:mt-0 md:flex-row"
      )}
    >
      <div className="w-full h-[70vh]">
        <img src="https://i.ytimg.com/vi/fmjB9F6fTRs/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC6zvL5U6tSiEVhivWaAopkciMtOg" alt="" />
      </div>
    </section>
  );
};

export default PodcastHero;
