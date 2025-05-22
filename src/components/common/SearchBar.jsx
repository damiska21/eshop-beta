import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar() {
  const inputField = useRef(null);
  function handleClick() {
    console.log(inputField.current.value); //hodnota v textovým poli
  }
  return (
    <div className="wrapper nav-center">
      <input
        type="text"
        ref={inputField}
        className="search-bar"
        placeholder="Vyhledejte produkt ..."
      />
      <button className="search-button" onClick={handleClick}>
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
}
