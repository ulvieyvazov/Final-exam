import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProduct } from "../../../Schema/AddProduct";
import axios from "axios";
import { teal } from "@mui/material/colors";

const Add = () => {


  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProduct),
  });

  
  const postData = async()=>{

    const values = getValues()

    await axios.post("http://localhost:5050/hosting", {
      img:  values.img,
      title: values.title,
      price: values.price
    })
  }



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form onSubmit={handleSubmit(postData)}
        action=""
        style={{ width: "30%", margin: "0 auto", padding: "70px 0" }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="img"
            variant="outlined"
            {...register("img")}
          />
          {errors.img?.message && (
            <p style={{ color: "red" }}>{errors.img?.message}</p>
          )}
          <TextField
            id="filled-basic"
            label="title"
            variant="filled"
            {...register("title")}
          />
          {errors.title?.message && (
            <p style={{ color: "red" }}>{errors.title?.message}</p>
          )}
          <TextField
            id="standard-basic"
            label="price"
            variant="standard"
            type="number"
            {...register("price")}
          />
          {errors.price?.message && (
            <p style={{ color: "red" }}>{errors.price?.message}</p>
          )}
        </Box>
        <button type="submit" style={{padding: '8px 150px', border: 0, cursor: "pointer", marginLeft: '10px', marginTop: '20px', fontSize: '20px', color: "white", backgroundColor: 'teal'}}>Submit</button>
      </form>
    </>
  );
};

export default Add;
