import { createContext, useEffect, useState } from "react";

export const ContextAPI = createContext(null);

const ContextWrapper = (props) => {
  const [landingPage, setLandingPage] = useState();
  const [bookNotesPage, setBookNotesPage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Using the promise.all to fetch the multiple json at once
        const [landingPageRes, bookNotesRes] = await Promise.all([
          fetch("/jsons/LandingPage.json"),
          fetch("/jsons/BookNotes.json"),
        ]);

        const [landingPageData, bookNotesData] = await Promise.all([
          landingPageRes.json(),
          bookNotesRes.json(),
        ]);

        console.log("Landing Page Data:", landingPageData);
        console.log("Book Notes Data:", bookNotesData);

        setLandingPage(landingPageData);
        setBookNotesPage(bookNotesData)

      } catch (error) {
        console.error("Error fetching landing page:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextAPI.Provider
      value={{ landingPageData: landingPage, landingPageFn: setLandingPage, bookNotesPageData: bookNotesPage, bookNotesPageFn: setBookNotesPage }}
    >
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextWrapper;
