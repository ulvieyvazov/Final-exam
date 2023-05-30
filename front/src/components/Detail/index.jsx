import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.scss"


const DetailPage = () => {
  const params = useParams();

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:5050/hosting/${params.id}`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="detail">
        <img src={data.img} alt="" />
        <h2>{data.title}</h2>
        <h3>Plans start at {data.price}/month</h3>
      </div>
    </>
  );
};

export default DetailPage;
