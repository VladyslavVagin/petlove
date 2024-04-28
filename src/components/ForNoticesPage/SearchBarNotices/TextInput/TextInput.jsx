import React, {useState} from 'react'
import sprite from "../../../../assets/icons/icons.svg";
import {
    CancelSearchBtn,
    SearchForm,
    SubmitSearchBtn,
  } from "./TextInput.styled";

const TextInput = ({setTextQuery, textQuery}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== "") {
          setTextQuery(inputValue);
        } else {
          alert("You can't put empty field");
        }
      };

      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleCancelSearch = () => {
        setInputValue("");
        setTextQuery("");
      };
    

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        disabled={textQuery === "" ? false : true}

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
  )
}

export default TextInput