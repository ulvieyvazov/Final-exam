import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Add from "./components/Pages/Admin";
import Home from "./components/Pages/Client/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/id/:id" element={<DetailPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
