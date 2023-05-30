import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SwiperCorusel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div className="bg-image-home">
            <div className="bg-image-text-parent">
              <div className="bg-image-text">
                <h1>24/7 Customer Support</h1>
                <div className="header-left">
                  <a href="">Download</a>
                  <a href="" className="a">
                  Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-image-home2">
            <div className="bg-image-text-parent">
              <div className="bg-image-text">
                <h1>Affordable Domains</h1>
                <p>from $7/year</p>
                <div className="header-left">
                  <a href="">Download</a>
                  <a href="" className="a">
                  Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
