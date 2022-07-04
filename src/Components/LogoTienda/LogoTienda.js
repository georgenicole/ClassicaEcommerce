import React from "react";
import "./styles.css";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";

export const LogoTienda = ({ prod }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <BakeryDiningIcon
        style={{
          color: "#BF9270",
          backgroundColor: "#FAEEE0",
          width: 38,
          height: 33,
          borderRadius: 9,
          marginLeft: 10,
          marginTop: 10,
        }}
      />
      <p
        style={{
          marginLeft: 8,
          color: "#BE8C63",
          fontWeight: "bold",
        }}
      >
        Classica
      </p>
    </div>
  );
};
