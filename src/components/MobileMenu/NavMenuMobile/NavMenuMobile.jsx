// @ts-nocheck
import React from 'react'
import { NavMenuList, StyledNavLink } from './NavMenuMobile.styled'

const NavMenuMobile = () => {
  return (
        <NavMenuList>
            <li>
                <StyledNavLink to={'/news'}>News</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={'/notices'}>Find pet</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={'/friends'}>Our friends</StyledNavLink>
            </li>
        </NavMenuList>
  )
}

export default NavMenuMobile