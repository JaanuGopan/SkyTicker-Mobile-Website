import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "./assets/Mobile App Images/1.jpg";
import image11 from "./assets/Mobile App Images/11.jpg";
import image12 from "./assets/Mobile App Images/12.jpg";
import image13 from "./assets/Mobile App Images/13.jpg";
import image14 from "./assets/Mobile App Images/14.jpg";
import image16 from "./assets/Mobile App Images/16.jpg";
import image17 from "./assets/Mobile App Images/17.jpg";
import image18 from "./assets/Mobile App Images/18.jpg";
import image19 from "./assets/Mobile App Images/19.png";
import image2 from "./assets/Mobile App Images/2.jpg";
import image21 from "./assets/Mobile App Images/21.jpg";
import image3 from "./assets/Mobile App Images/3.jpg";
import image5 from "./assets/Mobile App Images/5.jpg";
import image7 from "./assets/Mobile App Images/7.jpg";
import image9 from "./assets/Mobile App Images/9.jpg";
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
            <img src={image2} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>Click create account to create a SkyTicker account.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image3} alt="Slide 3" />
            <div className="image-slide-content-label">
              <label>
                Fill the student details and click arrow button to OTP
                verification.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image5} alt="Slide 4" />
            <div className="image-slide-content-label">
              <label>Enter the OTP and click verify.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image7} alt="Slide 4" />
            <div className="image-slide-content-label">
              <label>
                Enter the username and password for your account. And click
                SignUp button to complete the registration.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image9} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>Login with your registered username and password.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image11} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                Click this button in the bottom navigation bar to navigate to
                the module enrollment page.
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
                Then click the "Not Enrolled Module" button to see the modules
                for enrollment.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image13} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                Click the Plus icon button to enter enrollment key for enroll
                the module.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image14} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>And enter the enrollment key to enroll the module.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image16} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>After enrollment, you can see the enrolled modules.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image17} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                After enrollment, Click the "Scan QR code" button to scan the QR
                code. And you need to give camera service access.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image18} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>Scan the QR code and get the lecture details.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image19} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>
                After scan the QR code, you can get the lecture details and mark
                attendance. For this you need to give location service access to
                verify your location.
              </label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slide-content">
            <img src={image21} alt="Slide 2" />
            <div className="image-slide-content-label">
              <label>You can see your attendance details.</label>
            </div>

            <div className="sized-box"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePageFirstContainerImageSlide;
