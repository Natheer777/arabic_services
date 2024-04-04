// Import Swiper React components

import HeaderImg_01 from "../../assets/Icons/img1 1.webp";
import HeaderImg_02 from "../../assets/Icons/img1 (2).webp";
import HeaderImg_03 from "../../assets/Icons/img1 (3).webp";
import HeaderImg_04 from "../../assets/Icons/img1 (5).webp";
import HeaderImg_05 from "../../assets/Icons/img1 (6).webp";
import HeaderImg_06 from "../../assets/Icons/img1 (7).webp";
import HeaderImg_07 from "../../assets/Icons/img1 (8).webp";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Header.css";
import Data from '../../Data/HeaderImg'
import { useTranslation } from "react-i18next";
export default function Header() {
  const card = Data.map((card) =>{
    return(

      <SwiperSlide 
      key={card.id}
      image={card.Image}
       /> 
         )
    
    
      
    
  })
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
              <SwiperSlide className="img1"><img src={HeaderImg_01} alt="" /></SwiperSlide>
              <SwiperSlide className="img2"><img src={HeaderImg_02} alt="" /></SwiperSlide>
              <SwiperSlide className="img3"><img src={HeaderImg_03} alt="" /></SwiperSlide>
              <SwiperSlide className="img4"><img src={HeaderImg_04} alt="" /></SwiperSlide>
              <SwiperSlide className="img5"><img src={HeaderImg_05} alt="" /></SwiperSlide>
              <SwiperSlide className="img6"><img src={HeaderImg_06} alt="" /></SwiperSlide>
              <SwiperSlide className="img7"><img src={HeaderImg_07} alt="" /></SwiperSlide>            </Swiper>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
