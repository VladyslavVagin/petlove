import React from "react";
import sprite from "../../../../assets/icons/icons.svg";

const Buttons = () => {
  return (
    <div>
      <button type="button">
        Add to
        <svg width={18} height={18}>
          <use xlinkHref={`${sprite}#icon-heart`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Buttons;
