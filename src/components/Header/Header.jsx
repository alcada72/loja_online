import React from "react";
import SearchBar from "../SeachBar/SeachBar";
import CardButton from "../CardButton/CardButton";
import "./Header.css";

function Header({ searchValue, setSearchValue }) {
  return (
    <header className="header">
      <div className="container">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <CardButton/>
      </div>
    </header>
  );
}

export default Header;
