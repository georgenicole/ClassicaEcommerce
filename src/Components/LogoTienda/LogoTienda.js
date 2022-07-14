import React from "react";
import "./styles.css";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const LogoTienda = ({ prod }) => {
  return (
    <Button
      variant="text"
      style={{
        display: "flex",
        flexDirection: "row",
        width: 10,
        height: 10,
        fontWeight: "bold",
      }}
    >
      <BakeryDiningIcon
        style={{
          color: "#BF9270",
          backgroundColor: "#FAEEE0",
          width: 33,
          height: 30,
          borderRadius: 9,
          margin: 10,
        }}
      />
      <Link to="/" style={{ color: "#BF9270", textDecoration: "none" }}>
        Classica
      </Link>
    </Button>
  );
};
