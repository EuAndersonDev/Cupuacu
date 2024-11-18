//NÃO TERMINADO ;-;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

function Carrousel() {
    const carouselItems = [
        {
          title: "Lenço Umedecido Piquitucho",
          image: "lenço-piquitucho.png",
          button: "Compre Agora",
        },
        {
          title: "Ofertas Imperdíveis: Tablet",
          image: "tablet.png",
          button: "Veja Mais",
        },
        {
          title: "Liquidificador com desconto!",
          image: "liquidificador.png",
          button: "Comprar Agora",
        },
      ];
      

    return (
        <div className="w-full bg-blue-200">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-64"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-between items-center p-8">
                  <div>
                    <h1 className="text-3xl font-bold">{item.title}</h1>
                    <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">
                      {item.button}
                    </button>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}

export default Carrousel;