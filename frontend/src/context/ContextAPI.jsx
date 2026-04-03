import { createContext, useEffect, useState } from "react";

export const ContextAPI = createContext();

export const ContextWrapper = (props) => {
  const API_URL = "http://localhost:5000";

  const [landingPage, setLandingPage] = useState();
  const [bookNotesPage, setBookNotesPage] = useState();
  const [myThoughts, setMyThoughts] = useState();
  const [backendPosts, setBackendPosts] = useState([]); // Store backend posts from MongoDB

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using the promise.all to fetch the multiple json at once
        const [landingPageRes, bookNotesRes, myThoughtsRes] = await Promise.all(
          [
            fetch("/jsons/LandingPage.json"),
            fetch("/jsons/BookNotes.json"),
            fetch("/jsons/MyThought.json"),
          ],
        );

        const [landingPageData, bookNotesData, myThoughtsData] =
          await Promise.all([
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

  async function createPost(formData) {
    try {
      const title = formData.get("title");
      const content = formData.get("content");

      const response = await fetch(`${API_URL}/api/createPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      console.log("Frontend Create Post Function Error: ", error.message);
    }
  }

  async function getAllPost() {
    try {
      const response = await fetch(`${API_URL}/api/getPosts`);

      const result = await response.json();

      return result;
    } catch (error) {
      console.log("Frontend getAllPost function error: ", error.message);
    }
  }

  return (
    <ContextAPI.Provider
      value={{
        landingPageData: landingPage,
        landingPageFn: setLandingPage,
        bookNotesPageData: bookNotesPage,
        bookNotesPageFn: setBookNotesPage,
        myThoughts: myThoughts,
        myThoughtsFn: setMyThoughts,
        backendPosts: backendPosts,
        setBackendPosts: setBackendPosts,
        createPost: createPost,
        getAllPost: getAllPost,
      }}
    >
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextWrapper;
