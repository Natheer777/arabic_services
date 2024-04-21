// Import Swiper React components



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Header.css";
// import { useTranslation } from "react-i18next";
export default function Header() {
  // const [t] = useTranslation();
  return (
    <>
      <div className="container">
     

          <div className="Main-img container">
            <Swiper
            dir="ltr"
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="img1"></SwiperSlide>
              <SwiperSlide className="img2"></SwiperSlide>
              <SwiperSlide className="img3"></SwiperSlide>
              <SwiperSlide className="img4"></SwiperSlide>
              <SwiperSlide className="img5"></SwiperSlide>
              <SwiperSlide className="img6"></SwiperSlide>
              <SwiperSlide className="img7"></SwiperSlide>
              <SwiperSlide className="img8"></SwiperSlide>
              <SwiperSlide className="img9"></SwiperSlide>
              <SwiperSlide className="img10"></SwiperSlide>
              <SwiperSlide className="img11"></SwiperSlide>
                     </Swiper>
          </div>
          </div>
    </>
  );
}
