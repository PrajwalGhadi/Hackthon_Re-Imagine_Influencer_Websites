import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ Correct modules import
import clsx from "clsx";

const booknotes = ({booknotes}) => {
 
  return (
    <>
      <div className="py-5">
        <h1 className={clsx("font-medium font-[Playfair_Display] text-[7vw]", "lg:text-[2.5vw] lg:mb-2 lg:leading-[3vw]")}>
          {booknotes?.heading}
        </h1>
        <p className={clsx("text-lg mb-10","lg:text-2xl lg:mb-5")}>{booknotes?.description}</p>
        <div className={clsx("flex justify-between flex-nowrap overflow-hidden shrink-0 min-h-[5vw] px-6", "lg:gap-20 lg:min-h-[5vw] lg:px-5 lg:py-10")}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={50}
            pagination={{ clickable: true, type: "bullets" }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={500}
            modules={[Navigation, Pagination]}
            className={clsx("!overflow-visible w-full relative !pb-[12vw] lg:!pb-[3vw]")}
          >
            {booknotes?.books?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!w-[80vw] md:!w-[15vw] flex-shrink-0"
              >
                <div className={"bg-[#f2f3f5] w-full h-[50vh] flex flex-col items-center rounded-2xl shadow-[0.25vw_0.25vw_0.75vw] p-5"}>
                  <img
                    src={item?.cover}
                    alt={item?.title}
                    className="object-contain aspect-square w-full min-h-[60%] rounded-2xl"
                  />
                  <div className="w-full mt-4 text-center flex flex-col items-center">
                    <h3 className="font-semibold text-sm text-textColor">
                      {item?.title.length > 25
                        ? item.title.substring(0, 25) + "..."
                        : item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item?.author}</p>
                    <button className={clsx("w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0.75vw_0.75vw_0.75vw_rgba(0,0,0,0.75)] px-2 py-2 rounded-lg mt-8","lg:px-4 lg:shadow-[0.25vw_0.25vw_0.5vw_rgba(0,0,0,0.75)]")}>
                      Read Notes
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center justify-center">
          <button className={clsx("w-fit text-[#fef4ec] bg-[#bc8f8f] border-none shadow-[0.75vw_0.75vw_0.75vw_rgba(0,0,0,0.75)] px-2 py-2 rounded-lg mt-8", "lg:px-4 lg:rounded-lg lg:mt-0 lg:shadow-[0.2vw_0.2vw_0.5vw_rgba(0,0,0,0.75)]")}>
            Browse Full Library
          </button>
        </div>
      </div>
    </>
  );
};

export default booknotes;
