import React from "react";
import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

const ByGenderSelect = ({setGenderQuery, genderQuery, setCurrentPage}) => {
  const { genders } = useNotices();
   
  const gendersData = [
    { value: "", label: "Show all" },
    ...genders?.map(item => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1)
    }))
  ];

  const handleChangeGender = (e) => {
    setGenderQuery(e?.value);
    setCurrentPage(1);
  };

  const selectValue = genderQuery === null ? null : gendersData.find((option) => option.value === genderQuery);

  return (
    <div>
    <Select
      value={selectValue}
      onChange={handleChangeGender}
      options={gendersData}
      placeholder={"By gender"}
      maxMenuHeight={186}
      isClearable={true}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          border: "1px solid transparent",
          width: "143px",
          height: "42px",
          outline: "none",
          boxShadow: "none",
          background: "var(--white-color)",
          borderRadius: "30px",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "1.29",
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
          fontSize: "14px",
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
          width: "143px",
          borderRadius: "15px",
        }),
      }}
    />
  </div>
  );
};

export default ByGenderSelect;
