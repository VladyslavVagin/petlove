// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import sprite from "../../../assets/icons/icons.svg";
import SexButtons from "./SexButtons/SexButtons";
import PetAvatar from "./PetAvatar/PetAvatar";
import { addPetSchema } from "../../../schemas/schemas.ts";
import {
  InputNormal,
  InputPetImage,
  InvisibleInput,
  UploadContainer,
} from "./CreationForm.styled";
import {
  Label,
  AddAvatarInput,
} from "../../ForProfilePage/EditProfileModal/FormEditUser/FormEditUser.styled";
import BirthdayInput from "./BirthdayInput/BirthdayInput";

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

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    if (sexPet !== "unknown") {
      setValue("sex", sexPet);
    }
  }, [setValue, sexPet]);

  const handleUploadAvatar = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    fetch(cloudURL, { method: "POST", body: formData })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Upload failed");
        }
        return res.json();
      })
      .then((data) => setValue("imgURL", data.secure_url))
      .catch((error) => console.log("Upload error:", error.message));
    const fileURL = URL.createObjectURL(file);
    setPetImageURL(fileURL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SexButtons setSexPet={setSexPet} sexPet={sexPet} />
      <InvisibleInput type="text" {...register("sex")} />
      <p>{errors.sex?.message}</p>
      <PetAvatar petImageURL={petImageURL} />
      <UploadContainer>
        <label>
          <InputPetImage
            type="text"
            {...register("imgURL")}
            placeholder="Enter URL"
          />
          <p>{errors.imgURL?.message}</p>
        </label>
        <Label>
          <AddAvatarInput
            type="file"
            name="avatarFile"
            onChange={handleUploadAvatar}
          />
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-upload-cloud`}></use>
          </svg>
        </Label>
      </UploadContainer>
      <InputNormal type="text" {...register("title")} placeholder="Title"/>
      <p>{errors.title?.message}</p>
      <InputNormal type="text" {...register("name")} placeholder="Pet's Name"/>
      <p>{errors.name?.message}</p>
      <BirthdayInput/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreationForm;
