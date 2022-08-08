import React, { useContext, useEffect, useState } from "react";
import { Shop } from "../../Context/ShopContext";
import { Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.css";
import guardarOrden from "../../utils/guardarOrden";
import ordenGenerada from "../../utils/generarOrden";
import Form from "../../Components/Form/Form";

const Cart = () => {
  const [precioTotal, setPrecioTotal] = useState(0);
  const { cart, removeItem, clear } = useContext(Shop);

  const confirmarOrden = async (name, adress, phone, email) => {
    const order = ordenGenerada(name, adress, phone, email, cart, precioTotal);
    guardarOrden(cart, order);
    clear();
  };

  useEffect(() => {
    const precioReduce = () => {
      const valor = Object.values(cart).reduce(
        (suma, objeto) => suma + objeto.price * objeto.quantity,
        0
      );
      setPrecioTotal(valor);
    };
    precioReduce();
  }, [cart]);

  const [isForm, setForm] = useState(false);
  const handleSubmit = (param) => {
    setForm(param);
  };

  const cartMap = cart.map((producto) => {
    console.log(producto);
    return (
      <div
      className="container-cart"
        key={producto.id}
        style={{
          width: 500,
          heigth: 500,
          display: "flex",
        }}
      >
        <p>
          <img
            src={producto.image}
            alt="imagen"
            // style={{ width: 80, height: 90, borderRadius: 10 }}
            className="img-product-cart"
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
  });

  return (
    <div className="cart-container">
      {isForm && <Form cerrar={handleSubmit} makeOrder={confirmarOrden} />}
      {cartMap}
      <div style={{ marginRight: 35 }}>
        <Button variant="text">
          <Link to="/" style={{ color: "#BF9270", textDecoration: "none" }}>
            Continue Shopping
          </Link>
        </Button>
        {cart.length !== 0 ? (
          <>
            <Button
              variant="text"
              onClick={() => clear()}
              style={{ color: "#FF5D5D" }}
            >
              Cancel
            </Button>
            <Button
              variant="text"
              style={{ color: "#A0D995" }}
              onClick={() => {
                handleSubmit(true);
              }}
            >
              Confirmar compra
            </Button>
            <p>Total price: ${precioTotal}</p>
          </>
        ) : (
          <Typography className="Notselect-products">
            You have no selected products...
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Cart;
