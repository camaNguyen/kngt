import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com" target="instagram" rel="instagram">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com" target="twitter" rel="twitter">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com" target="facebook" rel="facebook">
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2023 Xóm Nhà Lá</p>
    </div>
  );
}

export default Footer;
