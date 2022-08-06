import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./Styles.css";

const ItemCount = ({ onConfirm, stock }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    stock > 0 ? setValue(1) : setValue(0);
  }, [stock]);

  const handleAdd = () => {
    if (value < stock) setValue(parseInt(value) + 1);
  };

  const handleSub = () => {
    if (value > 0) setValue(parseInt(value) - 1);
  };

  const handleConfirm = () => {
    if (value <= stock) {
      onConfirm(value);
    }
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 80 }}>
          <Button
            className="buttonCount-style"
            style={{ color: "#BF9270", borderColor: "#BF9270" }}
            variant="outlined"
            onClick={handleAdd}
            disabled={value === stock}
          >
            +
          </Button>
          <p className="countStyles">{value}</p>
          <Button
            style={{ color: "#BF9270", borderColor: "#BF9270" }}
            className="buttonCount-style"
            variant="outlined"
            onClick={handleSub}
            disabled={value === 0}
          >
            -
          </Button>
        </div>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#A0D995 ",
            color: "#125C13",
            width: 140,
            height: 38,
            marginTop: 40,
          }}
          disabled={value === 0}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
