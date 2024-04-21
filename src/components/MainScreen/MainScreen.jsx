import React, { useState, useEffect } from "react";
import sprite from "../../assets/icons/icons.svg";
import { MainScreenContainer } from "./MainScreen.styled";
import Loader from "../Loader/Loader";

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000);
  }, []);

  useEffect(() => {
    if(isLoading) {
        setTimeout(() => setIsLoading(false), 3300);
    }
  }, [isLoading])

  return (
    <MainScreenContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <svg width={190} height={50}>
          <use xlinkHref={`${sprite}#icon-logo-main`}></use>
        </svg>
      )}
    </MainScreenContainer>
  );
};

export default MainScreen;
