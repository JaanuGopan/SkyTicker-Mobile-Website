import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import image1 from "./assets/Mobile App Images/1.jpg";
import image2 from "./assets/Mobile App Images/2.jpg";
import image3 from "./assets/Mobile App Images/3.jpg";
import image4 from "./assets/Mobile App Images/4.jpg";
import image5 from "./assets/Mobile App Images/5.jpg";
import image8 from "./assets/Mobile App Images/8.jpg";
import image9 from "./assets/Mobile App Images/9.jpg";
import image11 from "./assets/Mobile App Images/11.jpg";
import image12 from "./assets/Mobile App Images/12.jpg";
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
                This is the SkyTicker App. Click on the button to get started.
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
                Students need to enroll in the module to mark attendance for the
                module lectures.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image4} alt="Slide 4" />
            <div className="image-slide-content-label">
              <label>Enter the enrollment key to enroll in the module.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image5} alt="Slide 4" />
            <div className="image-slide-content-label">
              <label>
                After module enrollment, students can mark their attendance for
                the module.
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
                Click on the scan QR code button and scan the QR code.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image8} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                After scanning the QR code, it shows available lectures for the
                module. Select the correct lecture.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image9} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                Then click the "Attend" button to mark the attendance.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image11} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                After marking attendance, you can see the notification alert at
                the bottom of the screen.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image12} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                Then navigate to the history page to see the marked attendance.
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
