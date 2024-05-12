// @ts-nocheck
import React, { useState, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HomePageSection } from "../Home/HomePage.styled";
import { refreshUser } from "../../redux/auth/operations";
import EditProfileModal from "../../components/ForProfilePage/EditProfileModal/EditProfileModal";
import UserAndEditBtns from "../../components/ForProfilePage/UserAndEditBtns/UserAndEditBtns";
import { Container } from "./Profile.styled";
import UserInformation from "../../components/ForProfilePage/UserInformation";
import LinksCollections from "../../components/ForProfilePage/LinksCollections/LinksCollections";
import { DesktopBox } from "../../components/Common/DesktopBox/DesktopBox";

const Profile = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {showEditForm && (
        <EditProfileModal
          setShowEditForm={setShowEditForm}
          showEditForm={showEditForm}
        />
      )}
      <HomePageSection>
        <DesktopBox>
          <Container>
            <UserAndEditBtns setShowEditForm={setShowEditForm} />
            <UserInformation setShowEditForm={setShowEditForm} />
          </Container>
          <div>
            <LinksCollections />
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </div>
        </DesktopBox>
      </HomePageSection>
    </>
  );
};

export default Profile;
