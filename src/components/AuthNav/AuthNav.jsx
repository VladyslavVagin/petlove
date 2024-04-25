// @ts-nocheck
import React from 'react'
import { ButtonsAuthContainer, LoginBtn, RegisterBtn } from './AuthNav.styled'

const AuthNav = ({setIsShowMobileMenu}) => {
  const handleClick = () => setIsShowMobileMenu(false);

  return (
    <ButtonsAuthContainer>
        <LoginBtn to={'/login'} onClick={handleClick}>log in</LoginBtn>
        <RegisterBtn to={'/register'} onClick={handleClick}>registration</RegisterBtn>
    </ButtonsAuthContainer>
  )
}

export default AuthNav