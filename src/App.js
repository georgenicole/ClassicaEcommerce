import React from "react";
import ItemListContainer from "./Components/Containers/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (
 <div>
 <NavBar/>
 <ItemListContainer greeting="Hello, welcome!" phrase="Did you know that whatever you want to eat, thanks to our delivery services you can have it in moments?"/>
 </div>
  );
}

export default App;
