import React from "react";
import { CardContainer, InfoCompany, InfoLink, ListDetails, LogoCompany } from "./FriendItem.styled";

const FriendItem = ({ friend }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } = friend;

  const workingHours = workDays?.filter((day) => day?.isOpen).map((day) => {
      const fromTime = day.from ? day.from.slice(0, 5) : "00:00";
      const toTime = day.to ? day.to.slice(0, 5) : "00:00";
      return `${fromTime} - ${toTime}`;
    })[0];

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
