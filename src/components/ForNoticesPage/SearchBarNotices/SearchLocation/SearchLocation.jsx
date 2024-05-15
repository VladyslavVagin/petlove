import React, { useState } from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { DropdownIndicator } from "./DropDownIndicator";
import { useNotices } from "../../../../hooks/useNotices";

const SearchLocation = ({
  setLocationQuery,
  locationQuery,
  setCurrentPage,
}) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const [inputValue, setInputValue] = useState("");
  const { cities } = useNotices();
  let filteredCities;

  if (inputValue?.length >= 3) {
    filteredCities = cities?.filter((city) =>
      `${city?.cityEn}`.toLowerCase().startsWith(inputValue?.toLowerCase())
    );
  }

  const options = filteredCities?.map((city) => ({
    value: `${city._id}`,
    label: `${city.stateEn}, ${city.cityEn}`,
  }));

  const formatOptionLabel = ({ value, label }) => {
    const parts = label.split(new RegExp(`(${inputValue})`, "gi"));
    return (
      <div>
        {parts.map((part, index) =>
          part.toLowerCase() === inputValue.toLowerCase() ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          )
        )}
      </div>
    );
  };

  const handleByCity = (value) => {
    setTimeout(() => setInputValue(value), 600);
  };

  const handleChangeLocation = (e) => {
    setLocationQuery(e?.value);
    setCurrentPage(1);
  };

  const selectValue =
    locationQuery === null
      ? null
      : options?.find((option) => option.value === locationQuery);

  return (
    <>
      <Select
        onInputChange={handleByCity}
        onChange={handleChangeLocation}
        value={selectValue}
        options={options}
        placeholder={"Location"}
        maxMenuHeight={216}
        isClearable={true}
        components={{ DropdownIndicator }}
        formatOptionLabel={formatOptionLabel}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: tablet ? "227px" : "100%",
            height: tablet ? "48px" : "42px",
            marginTop: tablet ? "0px" : "12px",
            background: "var(--white-color)",
            borderRadius: "30px",
            fontSize: tablet ? "16px" : "14px",
            outline: "none",
            boxShadow: "none",
            animation: "appearDown 1400ms ease 1",
            fontWeight: "500",
            lineHeight: tablet ? "1.25" : "1.29",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "pointer",
            "&:hover": {
              borderColor: "var(--accent-color)",
            },
            "&:focus-within": {
              borderColor: "var(--accent-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: tablet ? "16px" : "14px",
            fontWeight: "500",
            fontFamily: "Manrope",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--accent-color)"
              : "var(--placeholder-color)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "30px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: tablet ? "227px" : "100%",
            borderRadius: "15px",
          }),
        }}
      />
    </>
  );
};

export default SearchLocation;
