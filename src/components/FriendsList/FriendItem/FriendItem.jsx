import React from "react";
import { workHours } from "../../../functions/workHours";
import { CardContainer, InfoCompany, InfoLink, ListDetails, LogoCompany } from "./FriendItem.styled";

const FriendItem = ({ friend }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } = friend;
  const workingHours = workHours(workDays);

  return (
    <CardContainer>
      <LogoCompany to={url} target="_blank">
        <img src={imageUrl} alt={`Logo of ${title}`} />
      </LogoCompany>
      <InfoCompany>
        <h2>{title}</h2>
        <ListDetails>
          <li>
            <p>Email: </p>
            <InfoLink to={email ? `mailto:${email}` : "#"}>{email || "website only"}</InfoLink>
          </li>
          <li>
            <p>Address: </p>
            <InfoLink to={addressUrl ? `${addressUrl}` : "#"}>{address || "website only"}</InfoLink>
          </li>
          <li>
            <p>Phone: </p>
            <InfoLink to={phone ? `tel:${phone}` : "#"}>{phone || "website only"}</InfoLink>
          </li>
        </ListDetails>
      </InfoCompany>
      <span>{workingHours || "Day and night"}</span>
    </CardContainer>
  );
};

export default FriendItem;
