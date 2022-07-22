import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Styles.css";

const HomeItems = ({ prod }) => {
  return (
    <div className="homeItems-navbar">
      <Button variant="text">
        <Link to="/" className="homeitems-buttons" style={{ color: "#BF9270" }}>
          Home
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="/category/breads"
          className="homeitems-buttons"
          style={{ color: "#BF9270" }}
        >
          Breads
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="/category/cookies"
          className="homeitems-buttons"
          style={{ color: "#BF9270" }}
        >
          Cookies
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="/category/donuts"
          className="homeitems-buttons"
          style={{ color: "#BF9270" }}
        >
          Donuts
        </Link>
      </Button>
    </div>
  );
};

export default HomeItems;
