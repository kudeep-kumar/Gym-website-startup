import React from "react";
import "../../styles/testomonials.css";

// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

export default function Testimonials() {
  return (
    <section>
      <div className="container sliders">
      <h2 className="section__title">Testomonials</h2>
        <>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper">
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  ratione repellendus, sit sint impedit nisi. Atque delectus
                  corrupti quam culpa vero inventore est recusandae quis. Nisi
                  expedita voluptatum velit optio.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__img-02">
                <img src={avatar02} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ratione repellendus, sit sint impedit nisi. Atque delectus
                corrupti quam culpa vero inventore est recusandae quis. Nisi
                expedita voluptatum velit optio.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__img-03">
                <img src={avatar01} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ratione repellendus, sit sint impedit nisi. Atque delectus
                corrupti quam culpa vero inventore est recusandae quis. Nisi
                expedita voluptatum velit optio.
              </p>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
}
