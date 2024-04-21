// @ts-nocheck
import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from '../Header/Header';

const SharedLayout = () => {

  return (
    <>
     <Header/>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
}

export default SharedLayout