import React from "react";
import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

const ByTypeSelect = ({setByTypeQuery, byTypeQuery, setCurrentPage}) => {
  const { species } = useNotices();

  const speciesData = [
    { value: "", label: "Show all" },
    ...species?.map((item) => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1),
    })),
  ];

  const handleByType = (e) => {
    setByTypeQuery(e?.value);
    setCurrentPage(1);
  };
  const selectValue = byTypeQuery === null ? null : speciesData.find((option) => option.value === byTypeQuery);

  return (
    <div>
      <Select
        value={selectValue}
        onChange={handleByType}
        options={speciesData}
        placeholder={"By type"}
        maxMenuHeight={216}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: "100%",
            height: "42px",
            background: "var(--white-color)",
            borderRadius: "30px",
            boxShadow: "none",
            fontSize: "14px",
            outline: "none",
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
            width: "100%",
            borderRadius: "15px",
          }),
        }}
      />
    </div>
  );
};

export default ByTypeSelect;
