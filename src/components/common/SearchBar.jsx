import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { useLocalization } from "../../contexts/LocalizationContext";

export default function SearchBar() {
  const { strings } = useLocalization();

  const inputField = useRef(null);
  var jsonData;
  const [jsonDataState, setJsonData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        jsonData = json;
        setJsonData(json);
      });
  }, []);

  const navigate = useNavigate();
  function handleClick(e) {
    var sendingIds = "0"; //nula nic nezobrazuje, takhle nemusim řešit zakončování či začínání
    var searchString = inputField.current.value.toLowerCase();
    if (jsonData == null) {
      console.log("loading json from memory");
      jsonData = jsonDataState;
    }
    for (let i = 0; i < jsonData.length; i++) {
      if (
        jsonData[i].title.toLowerCase().includes(searchString) ||
        jsonData[i].description.toLowerCase().includes(searchString)
      ) {
        sendingIds += ";" + (parseInt(i) + 1);
        console.log("added to query");
      }
    }
    console.log(sendingIds);
    e.preventDefault();
    navigate(`/products?filter=${sendingIds}`);
  }
  return (
    <form className="wrapper" onSubmit={handleClick}>
      <input
        type="text"
        ref={inputField}
        className="search-bar"
        placeholder={strings.nav.search}
      />
      <button type="submit" className="search-button">
        <FaSearch className="search-icon" />
      </button>
    </form>
  );
}
