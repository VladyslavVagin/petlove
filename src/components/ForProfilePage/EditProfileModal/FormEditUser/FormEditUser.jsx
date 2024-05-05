import React, { useState } from "react";
import { useForm } from "react-hook-form";
import sprite from "../../../../assets/icons/icons.svg";
import {
  AddAvatarInput,
  FormContainer,
  InputAvatarURL,
  Label,
} from "./FormEditUser.styled";

const FormEditUser = ({ setImageURL }) => {
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
          placeholder="https://avatarURL..."
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
      <input type="submit" />
    </FormContainer>
  );
};

export default FormEditUser;
