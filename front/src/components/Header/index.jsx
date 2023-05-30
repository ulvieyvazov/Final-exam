import React from "react";
import "./index.scss";
import { TfiServer } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiWechatFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-parent">
          <div className="header-top">
            <div className="header-top-left">
              <TfiServer className="icon-h" />
              <h2>Server</h2>
            </div>
            <div className="header-top-right">
              <div className="header-icon">
                <BiSupport className="icon-h" />
                <div>
                  <span>24/7 Support</span>
                  <p>1-800-200-3911</p>
                </div>
              </div>
              <div className="header-icon">
                <MdOutlineMailOutline className="icon-h" />
                <div>
                  <span>Email</span>
                  <p>mail@domain.com</p>
                </div>
              </div>
              <div className="header-icon">
                <RiWechatFill className="icon-h" />
                <div>
                  <span>Live Chat</span>
                  <p>Chat With Us Now</p>
                </div>
              </div>
            </div>
          </div>

          <div className="header-header">
            <div className="header">
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>Domain</li>
                <li>Hosting</li>
                <li>Blog</li>
                <li>Contact</li>
                <li><NavLink to={'/add'}>Add</NavLink></li>
              </ul>

              <div className="header-left">
                <a href="">Register</a>
                <a href="" className="a">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
