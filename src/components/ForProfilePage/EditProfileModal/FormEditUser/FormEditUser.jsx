// @ts-nocheck
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().matches(/^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/, "Enter a valid Email"),
    phone: yup.string().matches( /^\+38\d{10}$/, "Invalid phone format"),
    avatar: yup.string().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Ivalid format")
  });

const FormEditUser = ({ setImageURL }) => {
  const { user } = useAuth();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [, setFileAvatar] = useState();

  const onSubmit = (data) => console.log(data);

  const handleUploadAvatar = (e) => {
    const nameOfFile = e.target.files[0];
    const reader = new FileReader()
    reader.onload = () => {
        const fileURL = reader.result;
        setImageURL(fileURL);
        setValue("avatar", fileURL);
    };

    if (nameOfFile) {
        reader.readAsDataURL(nameOfFile);
    }
    // setFileAvatar(nameOfFile);
    // const fileURL = URL.createObjectURL(nameOfFile);
    // setImageURL(fileURL);
    // setValue("avatar", fileURL);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
        <InputAvatarURL
          type="text"
          {...register("avatar")}
          defaultValue={user.avatarURL || "Avatar URL"}
        />
        <p>{errors.avatar?.message}</p>
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
      </div>
      <InputStandart type="text" {...register("name")} defaultValue={user.name}/>
      <p>{errors.name?.message}</p>
      <InputStandart type="email" {...register("email")} defaultValue={user.email}/>
      <p>{errors.email?.message}</p>
      <InputStandart type="tel" {...register("phone")} defaultValue={user.phone || "Phone number"}/>
      <p>{errors.phone?.message}</p>
      <SubmitBtn type="submit">Go to profile</SubmitBtn>
    </FormContainer>
  );
};

export default FormEditUser;
