import React, { useContext } from "react";
import "./ListaProduto.css";
import propTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import Appcontext from "../../Context/AppContext";


function ListaProduto({ dados }) {

  const { title, price, thumbnail } = dados
  const { carrinho, setCarrinho } = useContext(Appcontext)

  const botaoAdd = () => {
    const existe = carrinho.some(item => item.id === dados.id);
    if (!existe) {
      setCarrinho([...carrinho, dados]);
    }
  };

  return (
    <section className="lista-produto">
      <img src={thumbnail}
        className="card__imag"
        alt="produtos"
      />

      <div className="card__info">
        <h2 className="card__price">{price}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add_card"
        onClick={botaoAdd}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

ListaProduto.propTypes = {
  dados: propTypes.shape({}),
}.isRequired;

export default ListaProduto;  