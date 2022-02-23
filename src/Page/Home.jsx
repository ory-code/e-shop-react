import React from "react";
import "../style/Home.css";
import hero from "../assets/hero.jpg";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="home">
      
      <div className="hero__image">
        <img src={hero} alt="" />
        <div className="hero__text">
          <h1>NEW SEASON ARRIVALS</h1>
          <p>CHECK OUT ALL THE TRENDS</p>
        </div>
        <Products/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
