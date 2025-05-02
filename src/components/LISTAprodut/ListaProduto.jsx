import React from "react";
import "./ListaProduto.css";
import propTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";


function ListaProduto({ dados }) {
  const { title, price, thumbnail } = dados
  return (
  <section className="lista-produto">
    <img src={thumbnail}
      className="card__imag" alt="produtos" />
    <div className="card__info">
      <h2 className="card__price">{price}</h2>
      <h2 className="card__title">{title}</h2>
    </div>
    <button type="button" className="button__add_card"><BsFillCartPlusFill /></button>
  </section>
  );

}
export default ListaProduto;

ListaProduto.propTypes = {
  dados: propTypes.shape({}),
}.isRequired;
