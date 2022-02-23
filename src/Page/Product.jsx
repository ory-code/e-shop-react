import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import {addCart} from "../redux/action"
import "../style/Product.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const dispatch = useDispatch()
const addProduct = (product) => {
dispatch(addCart(product))
}
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    );
  };

  const ShowProduct = () => {
    return (
      
        <div className="card__one__product">
          <div className="card__one_product__image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="card__one__product__info">
            <span> {product.category}</span>
            <div className="card__one__product__info__description">
              <p>{product.description}</p>
            </div>
            <p className="one__product__price" >{product.price} €</p>
            <div className="card__one__product__info__rating">
              <p>Rating {product.rating && product.rating.rate}</p>
              <StarIcon color="secondary" />
            </div>
          </div>
          <div className="card__one__product__basket">
            <Button variant="outlined" onClick={() => addProduct(product)}>Add to cart</Button>
            <Button variant="outlined" onClick={() => nav("/cart")}>
              Go to cart
            </Button>
          </div>
        
      </div>
    );
  };

  return (
    <>
   
      <div className="one__product__container">
        
        <div className="one__product__container__title">
          <h1>{product.title} </h1>
        </div>
        <div className="one__product__container__content">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Product;
