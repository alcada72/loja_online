import React from "react";
import Header from "./components/Header/Header";
import Produts from "./components/Produts/Produts";
import Provider from "./Context/Provider";
import Carrinho from "./components/carrinho/Carrinho";


function App() {
  return (
    <Provider>
      <Header />
      <Produts />
      <Carrinho />
    </Provider>
  );
}

export default App;
