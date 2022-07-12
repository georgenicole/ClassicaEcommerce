import React, { useContext } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge, IconButton } from "@mui/material";
import { Shop } from "../../Context/ShopContext";

const CarWidget = () => {
  const { cart } = useContext(Shop);

  return (
    <div>
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
    </div>
  );
};
export default CarWidget;
