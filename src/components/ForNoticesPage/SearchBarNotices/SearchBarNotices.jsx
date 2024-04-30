// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CategorySelect from "./CategorySelect/CategorySelect";
import ByGenderSelect from "./ByGenderSelect/ByGenderSelect";
import ByTypeSelect from "./ByTypeSelect/ByTypeSelect";
import { SearchContainer, SelectContainer } from "./SearchBarNotices.styled";
import SearchLocation from "./SearchLocation/SearchLocation";
import TextInput from "./TextInput/TextInput";
import RadioSection from "./RadioSection/RadioSection";
import { fetchNotices } from "../../../redux/notices/operations";

const SearchBarNotices = ({currentPage}) => {
  const [radioSearch, setRadioSearch] = useState(null);
  const [categoryQuery, setCategoryQuery] = useState(null);
  const [genderQuery, setGenderQuery] = useState(null);
  const [byTypeQuery, setByTypeQuery] = useState(null);
  const [locationQuery, setLocationQuery] = useState(null);
  const [textQuery, setTextQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotices({page: currentPage, keyword: textQuery, category: categoryQuery, species: byTypeQuery, locationId: locationQuery, radioSearch: radioSearch, sex: genderQuery}));
  }, [byTypeQuery, categoryQuery, currentPage, dispatch, genderQuery, locationQuery, radioSearch, textQuery])

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
