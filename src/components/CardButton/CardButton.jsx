import React, { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import "./CardButton.css"
import Appcontext from "../../Context/AppContext";

function CardButton() {
  const { carrinho, mostrarCarrinho, setMostrarCarrinho } = useContext(Appcontext)

  return (
    <button type="button" onClick={() => setMostrarCarrinho(!mostrarCarrinho)} className="cart__button">
      <BsCartPlus />
      {
        carrinho.length > 0 && <span className="cart__status">{carrinho.length}</span>
      }
    </button>
  );
}

export default CardButton;
