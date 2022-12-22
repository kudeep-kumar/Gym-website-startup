import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="star__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500">
            <h2 className="section__title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
              sed cumque quidem voluptate temporibus doloremque mollitia magni
              at voluptas fugiat dolorum, eveniet commodi inventore iusto
              delectus quod, a quos!
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default start;
