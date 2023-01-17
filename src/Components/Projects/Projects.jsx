import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Projects.scss";
// import required modules
import { Pagination, Navigation } from "swiper";

const Projects = () => {
  return (
    <div id="Projects">
      <p className="title text-center">Proyectos</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><a href="https://delicias-almaleka.netlify.app/"target="_blank" ><img src="../assets/DA.png" alt="Delicias Almaleka" /></a></SwiperSlide>
        <SwiperSlide><a href="https://camilaforer.github.io/Tetris/"target="_blank" ><img src="../assets/TETRIS.png" alt="Tetris" /></a></SwiperSlide>
        <SwiperSlide><a href="https://camilaforer.github.io/BOG003-social-network/src/#/initial"target="_blank" ><img src="../assets/DEL.png" alt="Deliciuos" /></a></SwiperSlide>
        <SwiperSlide><a href="https://camilaforer.github.io/BOG003-data-lovers/src/index.html"target="_blank" ><img src="../assets/LOL.png" alt="" /></a></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Projects;
