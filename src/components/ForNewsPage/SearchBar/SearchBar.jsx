import React, { useState } from "react";
import sprite from "../../../assets/icons/icons.svg";
import { SearchForm } from "./SearchBar.styled";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      console.log(searchValue);
      setSearchValue("");
    } else {
      alert("You can't put empty field");
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit">
        <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </button>
    </SearchForm>
  );
};

export default SearchBar;
