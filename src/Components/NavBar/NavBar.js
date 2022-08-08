import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HomeItems from "../HomeItems/HomeItems";
import { LogoTienda } from "../LogoTienda/LogoTienda";
import CarWidget from "../CarWidget/CarWidget";
import "./Navbar.css";
import { useContext } from "react";
import { ProductContext } from "../../Context/ItemContext";


export default function NavBar() {

     const { setProductListFiltered, category, productList} = useContext(ProductContext)
     const handleSearch = (event) =>{
      let categoryFiltered = productList;
      if (category) {
        categoryFiltered  = productList.filter(
          (producto) => producto.category === category
        );
        }
      let list = []
      categoryFiltered.forEach((element)=>{
        if (element.title.toLowerCase().includes(event.target.value.toLowerCase())){
          list.push(element) 
         }})
       setProductListFiltered(list)
      }
       
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar className="toobar">
          <LogoTienda />
          <div className="container-search">
            <input  type="text" placeholder="Search..." onChange={handleSearch}  className="searcher"/>
          </div>
          <HomeItems />
          <CarWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
