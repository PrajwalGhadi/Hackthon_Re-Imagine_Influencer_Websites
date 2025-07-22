import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules"; // ✅ Correct modules import
import BookNotesCard from "../../../components/carousels/BookNotesCard";

const BookSlider = ({ booknotes }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={false}
      pagination={{ clickable: true, type: "bullets" }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={500}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // tablet
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30, // desktop
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 10, // larger screen
        },
      }}
      className={clsx(
        `!overflow-visible w-full relative !pb-[12vw] lg:!pb-[3vw] md:!pb-[6vw]`
      )}
    >
      {booknotes?.books?.map((item, index) => (
        <SwiperSlide
          key={index}
          className="!w-[80vw] md:!w-[35vw] lg:!w-[15vw]"
        >
          <BookNotesCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSlider;
