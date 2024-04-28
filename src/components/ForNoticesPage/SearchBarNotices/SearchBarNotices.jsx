// @ts-nocheck
import React, { useState } from "react";
import CategorySelect from "./CategorySelect/CategorySelect";
import ByGenderSelect from "./ByGenderSelect/ByGenderSelect";
import ByTypeSelect from "./ByTypeSelect/ByTypeSelect";
import { SearchContainer, SelectContainer } from "./SearchBarNotices.styled";
import SearchLocation from "./SearchLocation/SearchLocation";
import TextInput from "./TextInput/TextInput";
import RadioSection from "./RadioSection/RadioSection";

const SearchBarNotices = () => {
  const [radioSearch, setRadioSearch] = useState(null);
  const [categoryQuery, setCategoryQuery] = useState(null);
  const [genderQuery, setGenderQuery] = useState(null);
  const [byTypeQuery, setByTypeQuery] = useState(null);
  const [locationQuery, setLocationQuery] = useState(null);
  const [textQuery, setTextQuery] = useState("");

  console.log(categoryQuery, radioSearch, genderQuery, byTypeQuery, locationQuery, textQuery);

  return (
    <SearchContainer>
      <TextInput setTextQuery={setTextQuery} textQuery={textQuery}/>
      <SelectContainer>
        <CategorySelect setCategoryQuery={setCategoryQuery}/>
        <ByGenderSelect setGenderQuery={setGenderQuery}/>
      </SelectContainer>
      <ByTypeSelect setByTypeQuery={setByTypeQuery}/>
      <SearchLocation setLocationQuery={setLocationQuery}/>
      <RadioSection setRadioSearch={setRadioSearch} radioSearch={radioSearch}/>
    </SearchContainer>
  );
};

export default SearchBarNotices;
