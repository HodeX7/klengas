import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
  return (
    <div className="footer">
      <p>© 2021 Klengas Tech LLP . All Rights Reserved</p>
      <div className="handles">
        <a href="https://www.linkedin.com/company/klengas-tech-llp/about/"  target="_blank" >
          <LinkedInIcon className="socialmedia__handles li" />
        </a>
        <a href="https://twitter.com/klengas"  target="_blank" >
          <TwitterIcon className="socialmedia__handles tw" />
        </a>
        <a href="https://www.facebook.com/pages/category/Gas---Chemical-Service/Klengas-Tech-LLP-1689560071367498/"  target="_blank" >
          <FacebookIcon className="socialmedia__handles fb" />
        </a>
        <a href='https://www.instagram.com/klengas/'  target="_blank" >
          <InstagramIcon  className="socialmedia__handles ig" />
        </a>
        <a href="https://www.youtube.com/user/maku2575"  target="_blank" >
          <YouTubeIcon className="socialmedia__handles yt" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
