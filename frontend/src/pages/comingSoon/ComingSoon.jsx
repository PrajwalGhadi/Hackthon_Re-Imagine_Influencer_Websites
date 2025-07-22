import clsx from "clsx";



const ComingSoon = ({title}) => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col font-[Inter] px-[4vw] gap-[10vw] h-screen pt-[20vw]",
          "lg:gap-[2vw] lg:pt-[10vw]"
        )}
      >
        <h1 className="text-4xl font-semibold mb-4">
          {title} is Coming Soon 🚧
        </h1>
        <p className="text-lg text-gray-600">
          We're working hard to bring this to you. Stay tuned!
        </p>
      </div>
    </>
  );
};

export default ComingSoon;
