// @ts-nocheck
import React, { useState } from "react";
import { HomePageSection } from "../Home/HomePage.styled";
import UserAndEditBtns from "../../components/ForProfilePage/UserAndEditBtns/UserAndEditBtns";
import { Container } from "./Profile.styled";
import UserInformation from "../../components/ForProfilePage/UserInformation";

const Profile = () => {
 const [showEditForm, setShowEditForm] = useState(false);
 console.log(showEditForm);

  return (
    <HomePageSection>
      <Container>
        <UserAndEditBtns setShowEditForm={setShowEditForm}/>
        <UserInformation setShowEditForm={setShowEditForm}/>
      </Container>
    </HomePageSection>
  );
};

export default Profile;
