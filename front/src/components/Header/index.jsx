import React from "react";
import "./index.scss";
import { TfiServer } from "react-icons/tfi";

const index = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-parent">
          <div className="header-top">
            <div className="header-top-left">
              <TfiServer />
              <h2>Server</h2>
            </div>
            <div className="header-top-right">
              <div className="header-icon">
                <BiSupport />
                <div>
                    <span>24/7 Support</span>
                    <p>1-800-200-3911</p>
                </div>
              </div>
              <div className="header-icon"></div>
              <div className="header-icon"></div>
            </div>
          </div>
          <div className="header"></div>
        </div>
      </div>
    </>
  );
};

export default index;
