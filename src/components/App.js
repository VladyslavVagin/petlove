// @ts-nocheck
import React, { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import SharedLayout from "./SharedLayout/SharedLayout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const Friends = lazy(() => import("../pages/Friends/Friends"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const AddPet = lazy(() => import("../pages/AddPet/AddPet"));
const Favorites = lazy(() => import("../components/ForProfilePage/Favorites/Favorites"));
const Viewed = lazy(() => import("../components/ForProfilePage/Viewed/Viewed"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="news" element={<News />} />
          <Route path="notices" element={<Notices />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={ <PrivateRoute redirectTo="/home" component={<Profile />} />}>
            <Route index element={<Favorites />} />
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="viewed" element={<Viewed/>}/>
          </Route>
          <Route path="add-pet" element={ <PrivateRoute redirectTo="/home" component={<AddPet />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/profile" component={<Login />}/>} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/profile" component={<Register />}/>} />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
