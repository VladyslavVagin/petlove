// @ts-nocheck
import React, { useState } from 'react'
import SexButtons from './SexButtons/SexButtons'

const CreationForm = () => {
 const [sexPet, setSexPet] = useState("unknown");
 console.log(sexPet);

  return (
    <div>
        <SexButtons setSexPet={setSexPet} sexPet={sexPet}/>
    </div>
  )
}

export default CreationForm