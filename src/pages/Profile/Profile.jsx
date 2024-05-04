// @ts-nocheck
import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HomePageSection } from "../Home/HomePage.styled";
import UserAndEditBtns from "../../components/ForProfilePage/UserAndEditBtns/UserAndEditBtns";
import { Container } from "./Profile.styled";
import UserInformation from "../../components/ForProfilePage/UserInformation";
import LinksCollections from "../../components/ForProfilePage/LinksCollections/LinksCollections";

const Profile = () => {
 const [showEditForm, setShowEditForm] = useState(false);
 console.log(showEditForm);

  return (
    <HomePageSection>
      <Container>
        <UserAndEditBtns setShowEditForm={setShowEditForm}/>
        <UserInformation setShowEditForm={setShowEditForm}/>
      </Container>
      <LinksCollections/>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet/>
      </Suspense>
    </HomePageSection>
  );
};

export default Profile;
