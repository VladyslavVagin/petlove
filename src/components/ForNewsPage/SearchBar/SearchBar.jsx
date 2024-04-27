// @ts-nocheck
import React, { useState } from "react";
import sprite from "../../../assets/icons/icons.svg";
import {
  CancelSearchBtn,
  SearchForm,
  SubmitSearchBtn,
} from "./SearchBar.styled";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../../redux/news/operations";

const SearchBar = ({ setSearchValue, setCurrentPage, searchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setSearchValue(inputValue);
      setCurrentPage(1);
    } else {
      alert("You can't put empty field");
    }
  };

  console.log(searchValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCancelSearch = async () => {
    setInputValue("");
    setSearchValue("");
    setCurrentPage(1);
    await dispatch(fetchNews({ page: 1, searchQuery: null }));
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        disabled={searchValue === "" ? false : true}

      />
      {inputValue !== "" && (
        <CancelSearchBtn type="button" onClick={handleCancelSearch}>
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </CancelSearchBtn>
      )}
      <SubmitSearchBtn type="submit">
        <svg width={18} height={18}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </SubmitSearchBtn>
    </SearchForm>
  );
};

export default SearchBar;
