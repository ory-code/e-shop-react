import React from "react";
import logo from "../assets/logo-admin-mouv.gif";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
// import IconButton from "@mui/material/IconButton";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";

import "../style/Navbar.css";
// import AccountBox from "@mui/icons-material/AccountBox";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const nav = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar__logo" />
      <div className="link">
        <ul>
          <li onClick={() => nav("/")}>Home</li>
          <li onClick={() => nav("/products")}>Products</li>
          <li onClick={() => nav("/about")}>About</li>
          <li onClick={() => nav("/contact")}>Contact</li>
        </ul>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <SearchIcon />
      </div>
      <div className="navbar__basket">
        <Stack spacing={4} direction="row" sx={{ color: "white" }}>
          <Badge color="secondary" badgeContent={state.length}>
            <ShoppingBasketIcon onClick={() => nav("/cart")} />
          </Badge>
        </Stack>
      </div>
      <div className="navbar__login">
        {/* <Stack spacing={1} direction="row">
          <IconButton color="secondary" onClick={() => nav("/login")}>
            <AccountBox />
          </IconButton>
        </Stack> */}
        <Button variant="outlined" onClick={() => nav("/login")}>
          Login
        </Button>
        <Button variant="outlined" onClick={() => nav("/signup")}>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
