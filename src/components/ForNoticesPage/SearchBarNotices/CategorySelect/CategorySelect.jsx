import React from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { useNotices } from "../../../../hooks/useNotices";

const CategorySelect = ({
  setCategoryQuery,
  categoryQuery,
  setCurrentPage,
}) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const { categories } = useNotices();
  const categoriesData = [
    { value: "", label: "Show all" },
    ...categories?.map((item) => ({
      value: item,
      label: item?.charAt(0).toUpperCase() + item?.slice(1),
    })),
  ];

  const handleChangeCategory = (selectedOption) => {
    setCategoryQuery(selectedOption?.value);
    setCurrentPage(1);
  };

  const selectValue =
    categoryQuery === null
      ? null // Set to default value
      : categoriesData.find((option) => option.value === categoryQuery);

  return (
    <div>
      <Select
        value={selectValue}
        onChange={handleChangeCategory}
        options={categoriesData}
        placeholder={"Category"}
        maxMenuHeight={186}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width:  tablet ? "170px" : "143px",
            height: tablet ? "48px" : "42px",
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
            fontSize: tablet ? "18px" : "14px",
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
            width: tablet ? "170px" : "143px",
            borderRadius: "15px",
          }),
        }}
      />
    </div>
  );
};

export default CategorySelect;
