import React from "react";
import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

const ByTypeSelect = () => {
  const { species } = useNotices();

  const speciesData = [
    { value: "all", label: "Show all" },
    ...species?.map((item) => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1),
    })),
  ];

  const handleByType = (e) => console.log(e?.value);

  return (
    <div>
      <Select
        onChange={handleByType}
        options={speciesData}
        placeholder={"By type"}
        maxMenuHeight={216}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            width: "100%",
            height: "42px",
            background: "var(--white-color)",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "1.29",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "pointer",
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
