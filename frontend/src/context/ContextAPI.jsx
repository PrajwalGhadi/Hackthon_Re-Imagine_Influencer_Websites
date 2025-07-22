import { createContext, useEffect, useState } from "react";

export const ContextAPI = createContext(null);

const ContextWrapper = (props) => {
  const [landingPage, setLandingPage] = useState();
  const [bookNotesPage, setBookNotesPage] = useState();
  const [myThoughts, setMyThoughts] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Using the promise.all to fetch the multiple json at once
        const [landingPageRes, bookNotesRes, myThoughtsRes] = await Promise.all([
          fetch("/jsons/LandingPage.json"),
          fetch("/jsons/BookNotes.json"),
          fetch("/jsons/MyThought.json"),
        ]);

        const [landingPageData, bookNotesData, myThoughtsData] = await Promise.all([
          landingPageRes.json(),
          bookNotesRes.json(),
          myThoughtsRes.json(),
        ]);

        // console.log("Landing Page Data:", landingPageData);
        // console.log("Book Notes Data:", bookNotesData);

        setLandingPage(landingPageData);
        setBookNotesPage(bookNotesData);
        setMyThoughts(myThoughtsData);

      } catch (error) {
        console.error("Error fetching landing page:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextAPI.Provider
      value={{ landingPageData: landingPage, landingPageFn: setLandingPage, bookNotesPageData: bookNotesPage, bookNotesPageFn: setBookNotesPage, myThoughts: myThoughts, myThoughtsFn: setMyThoughts}}
    >
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextWrapper;
