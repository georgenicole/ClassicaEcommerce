import React from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

const Item = ({ prod }) => {
  let navigate = useNavigate();
  return (
    <div
      className="card"
      style={{ widtd: "100%", height: "100%", display: "flex" }}
      onClick={() => navigate(`/detail/${prod.id}`)}
    >
      <div className="card__body">
        <Card sx={{ maxWidth: 300, minHeight: 433 }} className="Card">
          <img
            src={prod.image}
            alt="hola"
            style={{ width: 350, height: 250 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card__title"
            >
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
              style={{ color: "#BF9270", marginRight: 115 }}
            >
              Add to Cart
            </Button>
            <IconButton size="small" edge="start">
              <FavoriteBorderIcon
                style={{
                  color: "#BF9270",
                  backgroundColor: "#FAEEE0",
                  width: 25,
                  height: 27,
                  borderRadius: 9,
                  marginLeft: 10,
                }}
              />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Item;
