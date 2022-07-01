import React from "react";
import ItemListContainer from "./Containers/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";

function Home() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
