import React, { useEffect, useState } from 'react'
import loaderImg from "../../assets/images/loader.webp"
import { LoaderContainer } from './Loader.styled'

const Loader = () => {
const [progress, setProgress] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 4);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <LoaderContainer>
      <img src={loaderImg} alt='loader'/>
      <span>{progress}%</span>
    </LoaderContainer>
  )
}

export default Loader