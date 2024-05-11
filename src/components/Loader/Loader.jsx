import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import loaderImg from "../../assets/images/loader.webp";
import loaderTablet from "../../assets/images/bgTablet.webp";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <LoaderContainer>
      <img src={tablet ? loaderTablet : loaderImg} alt="loader" />
      <span>{progress}%</span>
    </LoaderContainer>
  );
};

export default Loader;
