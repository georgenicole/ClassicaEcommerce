import React from "react";
import ItemListContainer from "./Containers/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";





function App() {
  return (
 <div>
 <NavBar/>
 <ItemListContainer/>
 <ItemDetailContainer/>
 </div>

  );
}

export default App;
