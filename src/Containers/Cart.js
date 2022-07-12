import React, { useContext } from "react";
import { Shop } from "../Context/ShopContext";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(Shop);

  return (
    <div style={{ margin: 20 }}>
      {cart.map((producto) => {
        return (
          <div
            style={{
              width: 500,
              heigth: 500,
              display: "flex",
            }}
          >
            <p key={producto.id}>
              <img
                src={producto.image}
                alt="imagen"
                style={{ width: 80, height: 90, borderRadius: 10 }}
              />
            </p>
            <div style={{ marginLeft: 20 }}>
              <p> {producto.title}</p>
              <p>Quantity: {producto.quantity}</p>
              <p>Price: ${producto.price}</p>
              <IconButton
                size="small"
                edge="start"
                onClick={() => removeItem(producto.id)}
              >
                <DeleteIcon
                  style={{
                    color: "#BF9270",
                    backgroundColor: "#FFEDDB",
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    marginLeft: 8,
                  }}
                />
              </IconButton>
            </div>
          </div>
        );
      })}
      <div style={{ marginRight: 35 }}>
        <Button variant="text">
          <Link to="/" style={{ color: "#BF9270", textDecoration: "none" }}>
            Continue Shopping
          </Link>
        </Button>
        <Button variant="text">
          <Link to="*" style={{ color: "#BF9270", textDecoration: "none" }}>
            Confirm
          </Link>
        </Button>
        <Button
          variant="text"
          onClick={() => clear()}
          style={{ color: "#BF9270" }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Cart;
