// @ts-nocheck
import React from 'react'
import Modal from '../Modal/Modal'
import NavMenuMobile from './NavMenuMobile/NavMenuMobile'

const MobileMenu = ({setIsShowMobileMenu}) => {
  return (
    <Modal setIsShowMobileMenu={setIsShowMobileMenu}>
        <NavMenuMobile/>
    </Modal>
  )
}

export default MobileMenu