import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const { landingPageData } = useContext(ContextAPI);
  const navlinks = landingPageData?.navbar;

  return (
    <nav
      className={clsx(
        "w-[100vw] flex items-center justify-between bg-[#1A1A1A] text-[#f4eeee] fixed z-10 min-h-[60px] px-[4vw]",
        "lg:min-h-[60px] lg:px-[15vw] lg:py-4"
      )}
    >
      <NavLink to="/">
        <h1 className={clsx("font-[Square_peg] text-4xl", "lg:text-4xl")}>
          {navlinks?.logo}
        </h1>
      </NavLink>

      <div
        className={clsx("font-[Inter] hidden", "lg:flex lg:visible lg:gap-6")}
      >
        {navlinks?.links?.map((item, index) => (
          <NavLink key={index} to={item.path} className="links">
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
