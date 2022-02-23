import React, { useState, useEffect } from "react";
import "../style/Products.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  let componentMounted = true;

  // return () => {
  // componentMounted = false;
  // };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProducts();
  }, [componentMounted]);

  const Loading = () => {
    return (
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="products__choise__filter">
          <Button variant="outlined" onClick={() => setFilter(data)}>
            All
          </Button>
          <Button
            variant="outlined"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            variant="outlined"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button variant="outlined" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </Button>
          <Button
            variant="outlined"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </Button>
        </div>
        {filter.map((product, key) => {
          return (
            <div className="card__product" key={key}>
              <div className="card__product__img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card__product__description">
                <div className="card__product__description__content">
                  <h3> {product.title} </h3>
                  <p> {product.price} €</p>
                  <Button
                    variant="outlined"
                    onClick={() => nav(`/products/${product.id}`)}
                  >
                    See more
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="products__container">
        <div className="products__container__title">
          <h1>Latest Products</h1>
        </div>
        <div className="products__container__content">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
