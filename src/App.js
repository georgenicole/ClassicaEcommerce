import React from "react";
import ItemListContainer from "./Containers/ItemListContainer";
import Cart from "./Containers/Cart/Cart";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFoound/NotFound";
import ShopProvider from "./Context/ShopContext";
import ItemProvider from "./Context/ItemContext";

function App() {
  return (
    <ItemProvider>
      <ShopProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </ItemProvider>
  );
}

export default App;
