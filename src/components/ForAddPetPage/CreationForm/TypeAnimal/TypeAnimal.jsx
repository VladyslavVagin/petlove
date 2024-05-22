// @ts-nocheck
import React from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { useNotices } from "../../../../hooks/useNotices";

const TypeAnimal = ({ petType, setPetType }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const { species } = useNotices();

  const speciesData = [...species?.map((item) => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1),
    })),
  ];

  const handleByType = e => setPetType(e?.value);

  const selectValue = petType === null ? null : speciesData.find((option) => option.value === petType);

  return (
    <>
      <Select
        value={selectValue}
        onChange={handleByType}
        options={speciesData}
        placeholder={"Type of pet"}
        maxMenuHeight={tablet ? 142 : 78}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid var(--link-gray)",
            width: tablet ? "210px" : "143px",
            height: tablet ? "52px" : "40px",
            background: "var(--white-color)",
            borderRadius: "30px",
            boxShadow: "none",
            fontSize: tablet ? "16px" : "14px",
            outline: "none",
            fontWeight: "500",
            lineHeight: tablet ? "1.25" : "1.29",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "pointer",
            "&::placeholder": {
              color: "var(--placeholder-color)",
            },
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
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "var(--placeholder-color)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: tablet ? "210px" : "100%",
            borderRadius: "15px",
          }),
        }}
      />
    </>
  );
};

export default TypeAnimal;
