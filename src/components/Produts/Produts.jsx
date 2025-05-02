import React, { useEffect, useContext } from "react";
import "./Produts.css";
import BuscarProdutos from "../../api/buscarprodutos";
import ListaProduto from "../LISTAprodut/ListaProduto";
import Processador from "../Processador/Preocessador";
import Appcontext from "../../Context/AppContext";


function Produts() {

  const { produts, setproduts, processador, setProcessador } = useContext(Appcontext);

  useEffect(() => {
    BuscarProdutos("iphone").then((resposta) => {
      setproduts(resposta);
      setTimeout(() => {
        setProcessador(false)
      }, 2000);
    });
  }, []);


  return (
    (
      processador ? <Processador /> :
        <section className="produts container">
          {produts.map((produto) => <ListaProduto key={produto.id} dados={produto} />)}
        </section>
    )

  );
}

export default Produts;
