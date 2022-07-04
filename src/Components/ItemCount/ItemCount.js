import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Styles.css";

const ItemCount = ({ handleAdd, stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 80 }}>
          <Button
            className="buttonCount-style"
            style={{ color: "#BF9270", borderColor: "#BF9270" }}
            variant="outlined"
            onClick={onAdd}
            disabled={count === stock}
          >
            +
          </Button>
          <p className="countStyles">{count}</p>
          <Button
            style={{ color: "#BF9270", borderColor: "#BF9270" }}
            className="buttonCount-style"
            variant="outlined"
            onClick={onDecrement}
            disabled={count <= 1}
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
          disabled={stock <= 0}
          onClick={() => handleAdd(count)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
