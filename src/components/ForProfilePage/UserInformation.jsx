// @ts-nocheck
import React, { useState } from "react";
import AvatarData from "./UserData/AvatarData/AvatarData";
import MyInformation from "./UserData/MyInformation/MyInformation";
import MyPetsTitle from "./MyPetsTitle/MyPetsTitle";
import Logout from "./Logout/Logout";
import ModalLogout from "./ModalLogout/ModalLogout";

const UserInformation = ({ setShowEditForm }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div>
      <AvatarData setShowEditForm={setShowEditForm}/>
      <MyInformation/>
      <MyPetsTitle/>
      <Logout setShowLogout={setShowLogout}/>
      {showLogout && <ModalLogout setShowLogout={setShowLogout} showLogout={showLogout}/>}
    </div>
  );
};

export default UserInformation;
