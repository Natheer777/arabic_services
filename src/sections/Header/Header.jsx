import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Import Swiper core styles

import "./Header.css";

export default function Header() {
  // Uncomment if using translation
  // const [t] = useTranslation();
  const swiperRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // التحقق مما إذا كانت swiperRef.current موجودة وليست فارغة
      if (swiperRef.current && swiperRef.current.swiper) {
        // الحصول على زر التالي من swiperRef.current.swiper
        const nextButton = swiperRef.current.swiper.navigation.nextEl;
        if (nextButton) {
          // نقوم بتشغيل النقر على زر التالي
          nextButton.click();
        }
      }
    }, 5000);

    // تنظيف مؤقت الفاصل
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container">
      <div className="Main-img container">
        <Swiper
          ref={swiperRef}
          dir="ltr"
          spaceBetween={30}
          effect={"fade"}
          autoplay={{ delay: 10000 }} // Set autoplay directly here
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
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
  );
}
