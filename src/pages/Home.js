import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/shirt.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> NEW ARRIVALS ARE HERE </h1>
        <p> Limited time price drop!</p>
        <Link to="/product">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
