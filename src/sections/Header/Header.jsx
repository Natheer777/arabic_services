// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Header.css";
import img1 from '../../assets/Icons/img1 (1).webp'
import img2 from '../../assets/Icons/img1 (2).webp'
import { useTranslation } from "react-i18next";
export default function Header() {
  const [t] = useTranslation();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="sec1 col-lg-6">
            <div className="title  d-flex">
              <h1 className="left">{t("Header-h")}</h1>
              <p className=" right">{t("Header-p")}</p>
            </div>
          </div>
          <div className="sec2 col-lg-6">

          <div className="Main-img">
            <Swiper
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
              <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide className="img1"><img src={img2} alt="" /></SwiperSlide>   <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide className="img1"><img src={img2} alt="" /></SwiperSlide>   <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide className="img1"><img src={img2} alt="" /></SwiperSlide>   <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide className="img1"><img src={img2} alt="" /></SwiperSlide>   <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide className="img1"><img src={img2} alt="" /></SwiperSlide>   <SwiperSlide className="img1"><img src={img1} alt="" /></SwiperSlide>
              {/* <SwiperSlide className="img2"></SwiperSlide>
              <SwiperSlide className="img3"></SwiperSlide>
              <SwiperSlide className="img4"></SwiperSlide>
              <SwiperSlide className="img5"></SwiperSlide>
              <SwiperSlide className="img7"></SwiperSlide>
              <SwiperSlide className="img8"></SwiperSlide>
              <SwiperSlide className="img9"></SwiperSlide> */}
            </Swiper>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
