import React from "react";
import { useSelector } from "react-redux";
import "../style/CartContent.css";
import Footer from "./Footer";
const CartContent = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const price = state.map((product) => product.price);
  const total = price.reduce((sum, product) => sum + product);

  console.log("mon prix =", total);
  return (
    <>
      <div className="cart">
        <h1>My Cart</h1>
        <div className="cart__container">
          {state.map((product, key) => {
            return (
              <div className="cart__card" key={key}>
                <img src={product.image} alt={product.title} />
                <div className="cart__card__info">
                  <div className="cart__card__info__top">
                    <p>{product.title}</p>
                  </div>
                  <div className="cart__card__info__price">
                    <p>{product.price} € </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cart__total__basket">
            <div className="cart__total__basket_content">
              <h2>TOTAL: {total} €</h2>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default CartContent;
