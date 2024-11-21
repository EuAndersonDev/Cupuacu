import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Styledcarrousel } from "../styles/CarrouselStyles";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import slide1 from "../svg/1.svg";
import slide2 from "../svg/2.svg";

function Carrousel() {
  return (
    <Styledcarrousel>
      <Swiper
        autoplay={{ delay: 40000 }}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* depois do resto da pagina estar pronto, volte aqui pra linkar com a pagina */}
          <img src={slide1} alt="Imagem 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Imagem 2" />
        </SwiperSlide>
      </Swiper>
    </Styledcarrousel>
  );
}

export default Carrousel;
