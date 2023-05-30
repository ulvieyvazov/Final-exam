import React from "react";
import "./index.scss"
import { AiFillHeart } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
          <div className="footer">
               <p>Copyright © 2023 All Rights Reserved | This template is made with </p>
               <AiFillHeart style={{color: 'red', margin: '0 4px'}}/>
               <p>by Colorlib</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
