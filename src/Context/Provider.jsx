import React, { useState } from 'react';
import PropTypes from "prop-types";
import AppContext from './AppContext';

function Provider({ children }) {
  const [produts, setproduts] = useState([]);
  const [processador, setProcessador] = useState(true)
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const valor = {
    produts,
    setproduts,
    processador,
    setProcessador,
    carrinho,
    setCarrinho,
    mostrarCarrinho,
    setMostrarCarrinho
  };

  return (
    <AppContext.Provider value={valor}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
