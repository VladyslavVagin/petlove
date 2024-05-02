// @ts-nocheck
import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const Friends = lazy(() => import("../pages/Friends/Friends"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const AddPet = lazy(() => import("../pages/AddPet/AddPet"));

function App() {
  const location = useLocation();

  if (location.pathname === "/") {
    location.pathname = "/home";
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="home" element={<HomePage />} />
          <Route path="news" element={<News />} />
          <Route path="notices" element={<Notices />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-pet" element={<AddPet />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/profile" component={<Login />}/>} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/profile" component={<Register />}/>} />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
