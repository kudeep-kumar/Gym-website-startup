import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up"
    data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>FitBody </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolore distinctio perferendis quisquam repellat laudantium?
            </p>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Our Program</a>
              </li>
              <li>
                <a href="#"></a> Our Plans
              </li>
              <li>
                <a href="#"></a>Become a member
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Aboout us</a>
              </li>
              <li>
                <a href="#"></a> Contact us
              </li>
              <li>
                <a href="#"></a>Support
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Aboout us</a>
              </li>
              <li>
                <a href="#"></a> Contact us
              </li>
              <li>
                <a href="#"></a>Support
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div> 
        </div>
      </div>
      <p className="copyright">
        Copyright - {year} developed by Kuldeep. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
