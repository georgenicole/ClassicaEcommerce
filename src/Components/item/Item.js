import React from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

const Item = ({ prod }) => {
  let navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/detail/${prod.id}`)}>
      <div className="card__body">
        <Card sx={{ maxWidth: 300, minHeight: 433 }} className="Card">
          <img src={prod.image} alt="imageProduct" className="product-img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Price: $ ${prod.price}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className="card__btn"
              variant="text"
              style={{ color: "#BF9270", backgroundColor: "#FAEEE0" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Item;
