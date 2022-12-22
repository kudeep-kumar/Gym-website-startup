import React from "react";
import Header from "../Header/Header";
import Hero from "./Hero";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import Yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benifits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Provident laborum molestias perspiciatis doloribus qui voluptatem?
          </p>
        </div>
        {/*  ===============exercise list =============== */}

        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500">
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>
            <div className="exercise__content">
              <h4> Healthy Life</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500">
            <span className="exercise__icon">
              <img src={Yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4> Incresed Flexibilty</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
          </div>
          <div 
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500">
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>
            <div className="exercise__content">
              <h4> Reducing Blood Pressure</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
