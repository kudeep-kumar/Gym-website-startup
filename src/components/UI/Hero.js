import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero">
          <div className="hero__wrapper">
            {/* =====================Hero content=====================*/}
            <div className="hero__content">
              <h2
                className="section__title"
                data-aos="fade-up"
                data-aos-duration="1500">
                Exersize is the key to a{" "}
                <span className="heighlights">Healthy</span> Lifestyle
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Earum corrupti laudantium quia modi ex assumenda.
              </p>

              <div
                className="hero__btns"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200">
                <button className="register__btn"> Get Started</button>
                <button className="watch__btn">
                  <span>
                    <i class="ri-play-fill"></i>
                  </span>
                  <label>Watch Now</label>
                </button>
              </div>
            </div>

            {/* ================== Hero img =================*/}

            <div className="hero__img">
              <div className="hero__img-wrapper">
                <div className="box-01">
                  <div className="box-02">
                    <div className="box-03">
                      <div className="box__img">
                        <img src={heroImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="heart__rate"
                  data-aos="fade-right"
                  data-aos-duration="1500">
                  <h2>Heart Rate</h2>
                  <span>
                    <i class="ri-heart-pulse-fill"></i>
                  </span>
                  <h5>2567 BPM</h5>
                </div>

                <div
                  className="gym__location"
                  data-aos="fade-left"
                  data-aos-duration="1500">
                  <span>
                    {" "}
                    <i class="ri-map-pin-2-fill"></i>
                  </span>
                  <h5>
                    find a new <br /> gym near you{" "}
                  </h5>
                </div>
                <div
                  className="dumble__icon"
                  data-aos="fade-down"
                  data-aos-duration="1500">
                  <img src={dumbleIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Hero;
