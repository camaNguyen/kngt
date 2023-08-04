import React from "react";
import Xomnhalalogonew from "../assets/about.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Xomnhalalogonew})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Smart, affordable products
          <br></br>
          <br></br>
          XOM NHA LA is a pioneering online store, providing top-quality
          products and exceptional customer service to customers worldwide. Our
          team consists of innovators and forward-thinkers, dedicated to
          continuously enhancing and improving your shopping journey.
          <br></br>
          <br></br>
          Our name has become synonymous with quality, sustainability and
          reliability. We are proud to have produced years of happy customers
          and look forward to continuing our work for many more to come! Browse
          our site to explore our extensive selection and subscribe to stay in
          the know about special offers and discounts!
        </p>
      </div>
    </div>
  );
}

export default About;
