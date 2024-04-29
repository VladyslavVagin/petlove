// @ts-nocheck
import React from "react";
import { useNotices } from "../../../hooks/useNotices";
import Card from "../Card/Card";
import { ListOfNotices } from "./AnimalList.styled";

const AnimalsList = () => {
const { notices } = useNotices();


  return <ListOfNotices>
    {notices.map(notice => <Card notice={notice} key={notice._id}/>)}
  </ListOfNotices>;
};

export default AnimalsList;
