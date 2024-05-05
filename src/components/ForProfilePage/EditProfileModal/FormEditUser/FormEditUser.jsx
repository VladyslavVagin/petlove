import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../../hooks/useAuth";
import sprite from "../../../../assets/icons/icons.svg";
import {
  AddAvatarInput,
  FormContainer,
  InputAvatarURL,
  InputStandart,
  Label,
  SubmitBtn,
} from "./FormEditUser.styled";

const FormEditUser = ({ setImageURL }) => {
  const { user } = useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const [, setFileAvatar] = useState();

  const onSubmit = (data) => console.log(data);

  const handleUploadAvatar = (e) => {
    const nameOfFile = e.target.files[0];
    setFileAvatar(nameOfFile);
    const fileURL = URL.createObjectURL(nameOfFile);
    setImageURL(fileURL);
    setValue("avatarURL", fileURL);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputAvatarURL
          type="text"
          {...register("avatarURL")}
          defaultValue={user.avatarURL || "Avatar URL"}
        />
        <Label>
          <AddAvatarInput
            type="file"
            {...register("avatarFile")}
            onChange={handleUploadAvatar}
          />
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-upload-cloud`}></use>
          </svg>
        </Label>
      </div>
      <InputStandart type="text" {...register("name")} defaultValue={user.name}/>
      <InputStandart type="email" {...register("email")} defaultValue={user.email}/>
      <InputStandart type="tel" {...register("phone")} defaultValue={user.phone || "Phone number"}/>
      <SubmitBtn type="submit">Go to profile</SubmitBtn>
    </FormContainer>
  );
};

export default FormEditUser;
