// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SexButtons from "./SexButtons/SexButtons";
import PetAvatar from "./PetAvatar/PetAvatar";
import { addPetSchema } from "../../../schemas/schemas.ts";

const CreationForm = () => {
  const preset_key = process.env.REACT_APP_PRESET_KEY;
  const cloudURL = process.env.REACT_APP_CLOUDINARY_URL;
  const [sexPet, setSexPet] = useState("unknown");
  const [petImageURL, setPetImageURL] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetSchema),
  });

  useEffect(() => {
    if(sexPet !== "unknown") {
      setValue("sex", sexPet);
    }
  }, [setValue, sexPet])

  return (
    <form>
      <SexButtons setSexPet={setSexPet} sexPet={sexPet} />
      <input type="radio" {...register("sex")}/>
      <PetAvatar petImageURL={petImageURL} />
      <input type="submit"/>
    </form>
  );
};

export default CreationForm;
