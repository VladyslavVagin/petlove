// @ts-nocheck
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { editUser } from "../../../../redux/auth/operations";
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
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(
      /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    ),
  phone: yup.string().matches(/^\+38\d{10}$/, "Invalid phone format"),
  avatar: yup
    .string()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Ivalid format"),
});

const FormEditUser = ({ setImageURL, setShowEditForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const preset_key = "dyeb3ian";
  const cloud_name = "dip8jsion";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(editUser(data));
    setShowEditForm(false);
  };

  const handleUploadAvatar = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload/`, {
  method: "POST",
  body: formData,
}).then((res) => {
    if (!res.ok) {
      throw new Error("Upload failed");
    }
    return res.json(); 
  }).then(data => setValue("avatar", data.secure_url)).catch(error => console.log("Upload error:", error.message));
    const fileURL = URL.createObjectURL(file);
    setImageURL(fileURL);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <InputAvatarURL
            type="text"
            {...register("avatar")}
            defaultValue={user.avatar || "Avatar URL"}
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
      <InputStandart
        type="text"
        {...register("name")}
        defaultValue={user.name}
      />
      <p>{errors.name?.message}</p>
      <InputStandart
        type="email"
        {...register("email")}
        defaultValue={user.email}
      />
      <p>{errors.email?.message}</p>
      <InputStandart
        type="tel"
        {...register("phone")}
        defaultValue={user.phone || "Phone number"}
      />
      <p>{errors.phone?.message}</p>
      <SubmitBtn type="submit">Go to profile</SubmitBtn>
    </FormContainer>
  );
};

export default FormEditUser;
