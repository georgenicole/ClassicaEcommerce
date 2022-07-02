import React from "react";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Styles.css";

const HomeItems = ({ prod }) => {
  let navigate = useNavigate();
  return (
    <div className="homeItems-navbar">
      <Button variant="text">
        <Link
          to="/"
          className="homeItems-navbar_buttons"
          style={{ color: "#BF9270" }}
        >
          Home
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="/category/breads"
          className="homeItems-navbar_buttons"
          style={{ color: "#BF9270" }}
        >
          Breads
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="/category/cookies"
          className="homeItems-navbar_buttons"
          style={{ color: "#BF9270" }}
        >
          Cookies
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="/category/donuts"
          className="homeItems-navbar_buttons"
          style={{ color: "#BF9270" }}
        >
          Donuts
        </Link>
      </Button>
    </div>
  );
};

export default HomeItems;
