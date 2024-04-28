// @ts-nocheck
import React, { useState } from "react";
import SearchBar from "../../ForNewsPage/SearchBar/SearchBar";
import CategorySelect from "./CategorySelect/CategorySelect";
import ByGenderSelect from "./ByGenderSelect/ByGenderSelect";
import ByTypeSelect from "./ByTypeSelect/ByTypeSelect";
import { SearchContainer, SelectContainer } from "./SearchBarNotices.styled";
import SearchLocation from "./SearchLocation/SearchLocation";
import RadioSection from "./RadioSection/RadioSection";

const SearchBarNotices = () => {
  const [radioSearch, setRadioSearch] = useState(null);
  console.log(radioSearch);

  return (
    <SearchContainer>
      <SearchBar setSearchValue={""} setCurrentPage={1} searchValue={""} />
      <SelectContainer>
        <CategorySelect />
        <ByGenderSelect />
      </SelectContainer>
      <ByTypeSelect />
      <SearchLocation />
      <RadioSection setRadioSearch={setRadioSearch} radioSearch={radioSearch}/>
    </SearchContainer>
  );
};

export default SearchBarNotices;
