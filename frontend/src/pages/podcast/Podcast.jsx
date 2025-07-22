import clsx from "clsx"
import PodcastHero from "./sections/PodcastHero"


const Podcast = () => {
  return (
    <main className={clsx("flex flex-col font-[Inter] px-[4vw] lg:px-[4vw] gap-[10vw]", "lg:gap-[2vw] lg:pt-[5vw] min-h-[100vh]")}>
        <PodcastHero />
    </main>
  )
}

export default Podcast