import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";

import BookNotes from "./sections/BookNotes";
import Hero from "./sections/Hero";
import NewsLetter from "./sections/NewsLetter";
import PodcastSection from "./sections/PodcastSection";
import YoutubeVideos from "./sections/YoutubeVideos";
import clsx from "clsx";


const LandingPage = () => {
  console.log("Hello from landing page");
  const { landingPageData } = useContext(ContextAPI);

  // Mulitple variable created to pass the data as props to all the section of landing page
  // Reason -> instead of calling landingpage context in every signle component I have called once and passed the data as props
  const hero = landingPageData?.hero;
  const newsletter = landingPageData?.newsletter;
  const booknotes = landingPageData?.bookNotes;
  const youtube = landingPageData?.youtube;
  const podcast = landingPageData?.podcast;

  return (
    <>
      <div className={clsx("flex flex-col font-[Inter] px-[4vw] lg:px-[4vw] gap-[10vw]", "lg:gap-[2vw] lg:pt-[5vw]")}>
        <Hero hero = {hero}/>
        <NewsLetter newsletter = {newsletter}/>
        <BookNotes booknotes = {booknotes}/>
        <YoutubeVideos youtube = {youtube}/>
        <PodcastSection podcast = {podcast}/>
      </div>
    </>
  );
};

export default LandingPage;
