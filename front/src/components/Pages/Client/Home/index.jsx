import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SwiperCorusel from "../../../Swiper";
import { IoHardwareChipOutline } from "react-icons/io5";
import { TfiServer } from "react-icons/tfi";
import { BsFillAirplaneFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [sort, setSort] = useState("sorting");
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:5050/hosting");
    setData(
      res.data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSort = () => {
    let sortData = [];
    sortData = [...data].sort((a, b) => {
      setSort("sorting");
      return b.price - a.price;
    });

    setData(sortData);
  };
  const handleSortName = () => {
    let sortData = [];
    sortData = [...data].sort((a, b) => {
      setSort("sorting");
      return a.title.localeCompare(b.title);
    });

    setData(sortData);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5050/hosting/${id}`);
    await getData();
  };

  useEffect(() => {
    getData();
  }, [value]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="home-container">
        <div className="home-parent">
          <SwiperCorusel />

          <div className="different-parent">
            <div className="different-head">
              <h2>Different hosting platforms to suit every need!</h2>
            </div>

            <div className="inputs">
              <button onClick={handleSortName}>sort by title</button>
              <button onClick={handleSort}>sort by price</button>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search by name"
              />
            </div>

            <div className="hosting-card-parent">
              {data.map((d) => (
                <div className="hosting-card" key={d._id}>
                  <img
                    src={d.img}
                    alt=""
                    onClick={() => navigate(`id/${d._id}`)}
                  />
                  <h2>{d.title}</h2>
                  <p>Plans start at ${d.price}/month</p>
                  <a href="" className="a">
                    View Details
                  </a>

                  <div className="" style={{marginTop: '15px'}}>
                    <button
                      style={{
                        display: "block",
                        width: "20%",
                        margin: "0 auto",
                        padding: "8px 0",
                        backgroundColor: 'red',
                        border: '0',
                        cursor: "pointer",
                        color: "white",
                        fontSize: 'large',
                        borderRadius: '5px'
                      }}
                      onClick={() => deleteData(d._id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-image-section-container">
            <div className="bg-image-section">
              <div className="section-text-parent">
                <div className="section-text">
                  <h2>Satisfied Clients</h2>
                  <p>We are rated 4.99 / 5.00 (based on 4443 Reviews)</p>
                  <a href="" className="a">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="choose-parent">
            <div className="choose">
              <h2>Why Choose Us</h2>
            </div>

            <div className="choose-card-parent">
              <div className="choose-card">
                <div className="top">
                  <div className="path">
                    <IoHardwareChipOutline className="icon-h" />
                  </div>
                  <div className="path-text">
                    <p>High Quality Hardware</p>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur is a nice adipisicing
                    elita ssumenda a similique perferendis dolorem eos.
                  </p>
                </div>
              </div>
              <div className="choose-card">
                <div className="top">
                  <div className="path">
                    <TfiServer className="icon-h" />
                  </div>
                  <div className="path-text">
                    <p>Top Data Centers</p>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur is a nice adipisicing
                    elita ssumenda a similique perferendis dolorem eos.
                  </p>
                </div>
              </div>
              <div className="choose-card">
                <div className="top">
                  <div className="path">
                    <BsFillAirplaneFill className="icon-h" />
                  </div>
                  <div className="path-text">
                    <p>Outstanding Speed</p>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur is a nice adipisicing
                    elita ssumenda a similique perferendis dolorem eos.
                  </p>
                </div>
              </div>
              <div className="choose-card">
                <div className="top">
                  <div className="path">
                    <AiFillFire className="icon-h" />
                  </div>
                  <div className="path-text">
                    <p>Amazing Uptime</p>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur is a nice adipisicing
                    elita ssumenda a similique perferendis dolorem eos.
                  </p>
                </div>
              </div>
              <div className="choose-card">
                <div className="top">
                  <div className="path">
                    <BiSupport className="icon-h" />
                  </div>
                  <div className="path-text">
                    <p>Best Support</p>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur is a nice adipisicing
                    elita ssumenda a similique perferendis dolorem eos.
                  </p>
                </div>
              </div>
              <div className="choose-card">
                <div className="top">
                  <div className="path">
                    <FaUserAlt className="icon-h" />
                  </div>
                  <div className="path-text">
                    <p>Client Reviews</p>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Lorem ipsum dolor sit amet consectetur is a nice adipisicing
                    elita ssumenda a similique perferendis dolorem eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
