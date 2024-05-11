import dogPic from "../../assets/images/modals/dogmodal.webp";
import catPic from "../../assets/images/modals/formodal.webp";

type Message = {
  imgUrl: string;
  name: string;
  birthday: string;
  comment: string;
};

export const LoginMessage: Message = {
  imgUrl: dogPic,
  name: "Rich",
  birthday: "21.09.2020",
  comment:
    "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",
};

export const RegisterMessage: Message = {
  imgUrl: catPic,
  name: "Jack",
  birthday: "18.10.2021",
  comment:
    "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.",
};
