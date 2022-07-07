import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Styles.css";

const ItemCount = ({ onConfirm, maxQuantity }) => {
  const [value, setValue] = useState(1);

  const handleConfirm = () => {
    if (value <= maxQuantity) {
      onConfirm(value);
    } else {
      alert("Value > maxQuantity");
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
            onClick={() => setValue((value) => value + 1)}
            disabled={value === maxQuantity}
          >
            +
          </Button>
          <p className="countStyles">{value}</p>
          <Button
            style={{ color: "#BF9270", borderColor: "#BF9270" }}
            className="buttonCount-style"
            variant="outlined"
            onClick={() => setValue((value) => value - 1)}
            disabled={value === 1}
          >
            -
          </Button>
        </div>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#FAEEE0",
            color: "#BF9270",
            width: 140,
            height: 38,
            marginTop: 40,
          }}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
