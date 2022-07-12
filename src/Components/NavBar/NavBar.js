import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AvatarImage from "../Avatar/Avatar";
import HomeItems from "../HomeItems/HomeItems";
import { LogoTienda } from "../LogoTienda/LogoTienda";
import CarWidget from "../CarWidget/CarWidget";
import { Shop } from "../../Context/ShopContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { estadoA } = useContext(Shop);
  console.log(estadoA);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar style={{ width: "100%", height: 68 }}>
          <LogoTienda />
          <HomeItems />
          <Button variant="text">
            <Link to="/#" style={{ color: "#BF9270", textDecoration: "none" }}>
              {estadoA}
            </Link>
          </Button>
          <CarWidget />
          <AvatarImage />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
