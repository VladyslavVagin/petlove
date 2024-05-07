// @ts-nocheck
import React, { useState } from 'react'
import SexButtons from './SexButtons/SexButtons'
import PetAvatar from './PetAvatar/PetAvatar';
import UploadFoto from './UploadFoto/UploadFoto';

const CreationForm = () => {
 const [sexPet, setSexPet] = useState("unknown");
 const [petImageURL, setPetImageURL] = useState("");

  return (
    <div>
        <SexButtons setSexPet={setSexPet} sexPet={sexPet}/>
        <PetAvatar petImageURL={petImageURL}/>
        <UploadFoto setPetImageURL={setPetImageURL}/>
    </div>
  )
}

export default CreationForm