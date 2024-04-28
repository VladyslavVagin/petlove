import React from "react";
import SearchBar from "../../ForNewsPage/SearchBar/SearchBar";
import CategorySelect from "./CategorySelect/CategorySelect";
import ByGenderSelect from "./ByGenderSelect/ByGenderSelect";
import ByTypeSelect from "./ByTypeSelect/ByTypeSelect";
import { SearchContainer, SelectContainer } from "./SearchBarNotices.styled";
import SearchLocation from "./SearchLocation/SearchLocation";

const SearchBarNotices = () => {
  return (
    <SearchContainer>
      <SearchBar setSearchValue={""} setCurrentPage={1} searchValue={""} />
      <SelectContainer>
        <CategorySelect />
        <ByGenderSelect />
      </SelectContainer>
      <ByTypeSelect />
      <SearchLocation />
    </SearchContainer>
  );
};

export default SearchBarNotices;
