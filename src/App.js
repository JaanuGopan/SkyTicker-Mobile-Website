import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
// Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomePageFirstContainerImageSlide from "./HomePageFirstContainerImageSlide";

function App() {
  const handleDownloadApp = () => {
    const link = document.createElement("a");
    /* link.href =
      "https://drive.google.com/file/d/1mVAcglaeU9sD7GGzHAW-m9s5y_-hqW3q/view?usp=drive_link"; */
    link.href = "%PUBLIC_URL%/SkyTickerApp/app-release.apk";
    link.download = "SkyTicker.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-container">
      <div className="main-container-heading">
        <h1>SkyTicker</h1>
      </div>
      <div className="main-container-image">
        <div className="main-container-left-side">
          <img
            className="main-container-left-side-logo"
            src={logo}
            alt="Logo"
          />
          <label>Download SkyTicker Mobile App</label>
          <button
            className="mobile-app-download-button"
            href="/src/SkyTickerApp/app-release.apk"
            onClick={handleDownloadApp}
          >
            <label>Download</label>
          </button>
        </div>
        <div className="main-container-right-side">
          <HomePageFirstContainerImageSlide />
        </div>
      </div>
    </div>
  );
}

export default App;
