import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";
import PensieveCard from "./sections/PensieveCard";
import BookNotesFilter from "./sections/BookNotesFilter";
import BooksContainer from "./sections/BooksContainer";
import clsx from "clsx";

const BookNotesPage = () => {
  console.log("Hello from bookNotePage");
  const { bookNotesPageData } = useContext(ContextAPI);

  return (
    <>
      <main className={clsx("w-full pt-[15vw]", "lg:gap-[2vw] lg:pt-[5vw] md:py-[10vw]")} id="BookNotesPage">
        <PensieveCard pensieve = {bookNotesPageData?.pensieveCard}/>
        <BookNotesFilter categories = {bookNotesPageData?.categories}/>
        <BooksContainer categories = {bookNotesPageData?.categories}/>
      </main>
    </>
  );
};

export default BookNotesPage;
