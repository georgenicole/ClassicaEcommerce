import React, { useContext } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge, IconButton } from "@mui/material";
import { Shop } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const CarWidget = () => {
  const { cart } = useContext(Shop);

  return (
    <Link to="/cart">
      <IconButton size="small" edge="start">
        <Badge
          badgeContent={cart.length}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          style={{ color: "#614124" }}
        >
          <LocalGroceryStoreIcon
            className="Icon-CardWidget"
            style={{
              color: "#BF9270",
              backgroundColor: "#FFEDDB",
              width: 35,
              height: 35,
              borderRadius: 10,
              marginLeft: 8,
            }}
          />
        </Badge>
      </IconButton>
    </Link>
  );
};
export default CarWidget;
