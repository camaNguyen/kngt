import React, { useState } from "react";
import Logo from "../assets/logo1.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=""/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/product"> Product </Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/faq"> FAQ </Link>
          <Link to="/locations"> Locations </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/product"> Product </Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/faq"> FAQ </Link>
        <Link to="/locations"> Locations </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
