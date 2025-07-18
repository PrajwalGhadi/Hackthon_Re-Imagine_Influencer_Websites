import { createContext, useEffect, useState } from "react";

export const ContextAPI = createContext(null);

const ContextWrapper = (props) => {
  const [landingPage, setLandingPage] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/landingPage.json"); // ✅ corrected path
        const data = await res.json();
        console.log("Landing Page Data:", data); // ✅ check structure
        setLandingPage(data);
      } catch (error) {
        console.error("Error fetching landing page:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextAPI.Provider value={{landingPageData:landingPage, landingPageFn:setLandingPage}}>
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextWrapper;
