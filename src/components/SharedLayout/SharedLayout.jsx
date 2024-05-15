// @ts-nocheck
import React, { Suspense, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import LoaderMain, { LoaderContainer } from "../Common/LoaderMain/LoaderMain";
import Header from "../Header/Header";
import MainScreen from "../MainScreen/MainScreen";

const SharedLayout = () => {
  const location = useLocation();
  const [showFirstScreen, setShowFirstScreen] = useState(location?.pathname === "/" ? true : false);

  useEffect(() => {
    setTimeout(() => setShowFirstScreen(false), 6000);
  }, []);

  return (
    <>
      <Header />
      {showFirstScreen && <MainScreen />}
      <main>
        <Suspense
          fallback={
            <LoaderContainer>
              <LoaderMain />
            </LoaderContainer>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
