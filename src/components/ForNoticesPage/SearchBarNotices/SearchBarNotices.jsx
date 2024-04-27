import React from 'react'
import SearchBar from "../../ForNewsPage/SearchBar/SearchBar"
import CategorySelect from './CategorySelect/CategorySelect';
import { SearchContainer, SelectContainer } from './SearchBarNotices.styled'
import ByGenderSelect from './ByGenderSelect/ByGenderSelect';

const SearchBarNotices = () => {
  return (
    <SearchContainer>
      <SearchBar setSearchValue={''} setCurrentPage={1} searchValue={''}/>
      <SelectContainer>
        <CategorySelect/>
        <ByGenderSelect/>
      </SelectContainer>
    </SearchContainer>
  )
}

export default SearchBarNotices