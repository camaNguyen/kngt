import React from "react";
import Xomnhalalogonew from "../assets/about.png";
import { Link } from "react-router-dom";
import "../styles/Locations.css";

function Locations() {
  return (
    <div className="locations">
      <div
        className="locationsTop"
        style={{ backgroundImage: `url(${Xomnhalalogonew})` }}
      ></div>
      <div className="locationsBottom">
        <h1> STORE LOCATIONS</h1>
        <h2>Come visit us</h2>

        <br></br>

        <p>
          Location 1
          <h1>
            500 Terry Francine Street
            <br></br>
            San Francisco, CA 94158
          </h1>
        </p>

        <p>
          Location 2
          <h1>
            500 Terry Francine Street
            <br></br>
            San Francisco, CA 94158
          </h1>
        </p>

        <p>
          Location 3
          <h1>
            500 Terry Francine Street
            <br></br>
            San Francisco, CA 94158
          </h1>
        </p>

        <Link to="/contact">
          <button> Contact US </button>
        </Link>
      </div>
    </div>
  );
}

export default Locations;
