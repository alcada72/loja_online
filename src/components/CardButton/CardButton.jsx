import React from "react";
import { BsCartPlus } from "react-icons/bs";
import "./CardButton.css"

function CardButton() {
  return (
    <button type="button" className="cart__button">
      <BsCartPlus />
      <span className="cart__status">1</span>
    </button>
  );
}

export default CardButton;
