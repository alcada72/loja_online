import React from "react";
import Header from "./components/Header/Header";
import Produts from "./components/Produts/Produts";
import Provider from "./Context/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <Produts />
    </Provider>


  );
}

export default App;
