import React, { useContext } from 'react';
import "./Carrinho.css";
import CarrinhoItem from '../carrinhoItens/CarrinhoItem';
import Appcontext from '../../Context/AppContext';

function Carrinho() {
  const { carrinho, mostrarCarrinho } = useContext(Appcontext)
  const precoTotal = carrinho.reduce((acc, item) => item.price + acc, 0);
  return (
    <section className={`Carrinho ${mostrarCarrinho ? 'Carrinho-ativo' : ''}`}>
      <div className="carrinho-itens">
        {
          carrinho.map((item) => <CarrinhoItem key={item.id} dados={item} />)
        }
      </div>
      <div className="carrinho-valor">
        {precoTotal}
        </div>
    </section>
  );
}

export default Carrinho;
