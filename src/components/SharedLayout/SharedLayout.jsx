// @ts-nocheck
import React, { Suspense, useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from '../Header/Header';
import MainScreen from "../MainScreen/MainScreen"

const SharedLayout = () => {
  const [showFirstScreen, setShowFirstScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowFirstScreen(false), 6000);
  }, [])

  return (
    <>
     <Header/>
     {showFirstScreen && <MainScreen/>}
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
}

export default SharedLayout