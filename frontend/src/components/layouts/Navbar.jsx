import { useContext, useState } from "react";
import { ContextAPI } from "../../context/ContextAPI";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

const Navbar = () => {
  const { landingPageData } = useContext(ContextAPI);
  const navlinks = landingPageData?.navbar;

  const [isMenuOpen, setIsMenuOpen] = useState();

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav
      className={clsx(
        "md:w-[90%] lg:w-[70%] w-full flex items-center justify-between bg-[#1A1A1A] text-[#f4eeee] fixed z-20  min-h-[60px] px-[4vw] shadow-[0px_4px_10px_rgb(0,0,0,0.5)]",
        "lg:min-h-[60px] lg:px-[5vw] lg:py-4 rounded-[1vw] left-[50%] top-[0%] transform -translate-x-1/2 translate-y-[2%] "
      )}
    >
      <NavLink to="/">
        <h1
          className={clsx(
            "font-[Square_peg] text-4xl text-[#FEF4EC]",
            "lg:text-[2vw] md:text-[3.5vw]"
          )}
        >
          {navlinks?.logo}
        </h1>
      </NavLink>

      <div
        className={clsx(
          "font-[Inter] hidden",
          "lg:flex lg:visible md:visible md:flex lg:gap-6 md:gap-3"
        )}
      >
        {navlinks?.links?.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="links lg:text-[0.9vw] md:text-[1.75vw] text-[#FEF4EC] relative inline-block transition duration-300 hover:text-[#fcd187] hover:scale-108 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fcd187] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      <div className="lg:hidden md:hidden">
        {isMenuOpen ? (
          <AiOutlineClose
            onClick={openMenu}
            className={`text-2xl inline-block opacity-0 transform scale-90 transition-all ease duration-300 ${
              isMenuOpen
                ? "opacity-100 transform scale-90"
                : "opacity-100 transform scale-90"
            }`}
          />
        ) : (
          <FiMenu
            onClick={openMenu}
            className={`text-2xl inline-block opacity-0 transform scale-90 transition-all ease duration-300 ${
              !isMenuOpen
                ? "opacity-100 transform scale-90"
                : "opacity-100 transform scale-90"
            }`}
          />
        )}

        {/* Menu is always present; visibility controlled by `active` class */}
        <div
          className={`bg-[#1A1A1A] text-[#FEF4EC] absolute w-full h-[50vw] -z-5 top-[9vw] left-0 
              transform transition-[transform, opacity] duration-600 ease-in-out 
              flex flex-col gap-[1vw] px-[6vw] py-[1vw] 
              ${
                isMenuOpen
                  ? "translate-y-5 opacity-100 pointer-events-auto"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }`}
        >
          {navlinks?.links?.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="links lg:text-[0.9vw] md:text-[1.75vw] text-[#FEF4EC] relative inline-block transition duration-300 hover:text-[#fcd187] hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fcd187] after:transition-all after:duration-300 hover:after:w-[25%]"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
