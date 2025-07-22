import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ Correct modules import
import clsx from "clsx";
import BookNotesCard from "../../../components/carousels/BookNotesCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BooksContainer = ({ categories }) => {
  let param = useParams();
  // console.log(param.path);

  // console.log(categories)
  let matchedCategory =
    categories &&
    categories?.find(
      (cat) =>
        cat?.path.toLowerCase() === param.path && param?.path.toLowerCase() // using param.path && as I am getting the error of undefined when comming first time
    );

  // console.log(matchedCategory);
  return (
    <>
      <section id="booksContainer" className="px-[1vw] py-5">

        {/* For Desktop View */}
        <div
          className={clsx(
            "hidden lg:flex-wrap overflow-auto  min-h-[5vw] mb-15 rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "lg:flex lg:justify-center lg:gap-10 lg:max-h-[50vw] lg:px-4 lg:py-10  lg:max-w-[70vw] md:flex md:max-h-[50vh] md:justify-start md:gap-5 md:flex-wrap md:px-6 md:max-w-[100vw]"
          )}
        >
          {/* Using Double map here because books are kept under category  */}
          {matchedCategory === undefined ? (
            categories?.map((cat) =>
              cat?.books?.map((book, index) => (
                <BookNotesCard key={index} item={book} />
              ))
            )
          ) : matchedCategory ? (
            matchedCategory?.books?.map((book, index) => (
              <BookNotesCard key={index} item={book} />
            ))
          ) : (
            <p className="text-center">No books found in this category.</p>
          )}
        </div>

        {/* For Mobile View */}
        <div
          className={clsx(
            "flex justify-between flex-nowrap overflow-hidden shrink-0 min-h-[5vw] px-6 lg:hidden md:hidden"
          )}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={10}
            pagination={{ clickable: true, type: "fraction" }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={500}
            modules={[Navigation, Pagination]}
            className={clsx(
              "!overflow-visible w-full relative !pb-[12vw] lg:!pb-[3vw]"
            )}
          >
            {matchedCategory === undefined ? (
              categories?.map((cat) =>
                cat?.books?.map((book, index) => (
                  <SwiperSlide
                    key={index}
                    className="!w-[80vw] md:!w-[15vw] flex-shrink-0"
                  >
                    <BookNotesCard item={book} />
                  </SwiperSlide>
                ))
              )
            ) : matchedCategory ? (
              matchedCategory?.books?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[80vw] md:!w-[15vw] flex-shrink-0"
                >
                  <BookNotesCard item={item} />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center">No books found in this category.</p>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BooksContainer;
