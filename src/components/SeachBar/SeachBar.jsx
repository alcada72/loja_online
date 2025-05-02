import React, { useState,useContext } from "react";
import { BsSearch } from "react-icons/bs";
import "./SeachBar.css";
import BuscarProdutos from "../../api/buscarprodutos";
import Appcontext from "../../Context/AppContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const {setproduts} = useContext(Appcontext)

  const renderizarSearchar = async (eve) => {
    eve.preventDefault();

    const produtos = await BuscarProdutos(searchValue);
    setproduts(produtos);
    setSearchValue("");
  }


  return (
    <form className="search__bar" onSubmit={renderizarSearchar}>
      <input
        type="search"
        value={searchValue}
        className="search__input"
        placeholder="Buscar produtos..."
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
