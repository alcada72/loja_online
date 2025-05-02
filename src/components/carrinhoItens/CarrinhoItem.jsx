import React, { useContext } from 'react';
import { BsFillCartDashFill } from "react-icons/bs";
import "./CarrinhoItem.css";
import Appcontext from '../../Context/AppContext';

function CarrinhoItem({ dados }) {

  const { carrinho, setCarrinho } = useContext(Appcontext)
  const { id, thumbnail, title, price } = dados

  const removerItem = () => {
    const atualizarItemDeletedo = carrinho.filter((item) => item.id !== id)
    setCarrinho(atualizarItemDeletedo)
  }

  return (
    <section className="carrinho-item">
      <img src={thumbnail}
        alt="Imagem do produto"
        className='Carrinho-Item-img' />
      <div className="carrinho-item-content">
        <h3 className="carrinho-item-titulo">{title}</h3>
        <h3 className="carrinho-item-preco">R$ {price.toFixed(2)}</h3>
        <button type="button" className="botao-remove-item" onClick={removerItem}>
          <BsFillCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CarrinhoItem;