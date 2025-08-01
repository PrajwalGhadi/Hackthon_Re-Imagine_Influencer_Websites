import clsx from "clsx";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Routers from "./router/Routers";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={clsx("bg-[#fef4ec] max-w-[100vw]", "lg:px-[15vw]")}>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default App;
