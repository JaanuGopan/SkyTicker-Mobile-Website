import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_image_1 from "./assets/Designer.jpeg";
import slide_image_0 from "./assets/Designer_pic1.jpeg";
import slide_image_2 from "./assets/Designer (1).jpeg";
import slide_image_3 from "./assets/Designer (2).jpeg";
import slide_image_4 from "./assets/Designer (3).jpeg";

import image1 from "./assets/Mobile App Images/1.jpg";
import image2 from "./assets/Mobile App Images/2.jpg";
import image3 from "./assets/Mobile App Images/3.jpg";
import image4 from "./assets/Mobile App Images/4.jpg";
import image5 from "./assets/Mobile App Images/5.jpg";
import "./ImageSlide.css";

const HomePageFirstContainerImageSlide = () => {
  return (
    <div className="HomePageFirstContainer-image-slide">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image1} alt="Slide 1" />
            <div className="image-slide-content-label">
              <label>
                Students can mark their attendance using SkyTicker mobile app.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image2} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                Student need to enroll the module to be able to mark attendance.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image3} alt="Slide 3" />
            <div className="image-slide-content-label">
              <label>
                After module enrollment, students can scan QR code and mark
                their attendance.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image4} alt="Slide 4" />
            <div className="image-slide-content-label">
              <label>
                After marking attendance, the students can view their
                attendance.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image5} alt="Slide 4" />
            <div className="image-slide-content-label">
              <label>
                After marking attendance, the students can view their
                attendance.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePageFirstContainerImageSlide;
