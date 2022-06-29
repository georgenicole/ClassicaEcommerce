import React from "react";
import ItemListContainer from "./Containers/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom"





function App() {
  return (
  <BrowserRouter>
 <NavBar/>
 <Routes>
<Route path="/" element={ItemListContainer}></Route>
<Route path="/category/:id" element={ItemListContainer}></Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
