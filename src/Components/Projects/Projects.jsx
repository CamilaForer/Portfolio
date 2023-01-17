import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  return (
    <div>
      <p className="title text-center">Proyectos</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="../assets/DA.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/DA.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/DA.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/DA.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
