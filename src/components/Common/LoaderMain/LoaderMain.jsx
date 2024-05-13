import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Hearts } from "react-loader-spinner";

export const LoaderContainer = styled.div`
    min-width: 100%;
    min-height: 100%;
    position: fixed;
`

export const LoaderNewsBox = styled.div`
  position: absolute;
  margin-top: 60px;
  width: 94%;
  height: 50%;
`;

const LoaderMain = () => {
  const mobile = useMediaQuery({maxWidth: 767.98});

  const LoaderStyles = {
    position: "absolute",
    top: "30%", 
    left: mobile ? "46%" : "50%",
    transform: "translate(-50%, -50%)"
}

  return (
    <>
      <Hearts
        height="180"
        width="180"
        color="var(--accent-color)"
        ariaLabel="hearts-loading"
        wrapperStyle={LoaderStyles}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default LoaderMain;
