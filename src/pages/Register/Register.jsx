import React from 'react'
import RegistrationImage from '../../components/Registration/RegistrationImage/RegistrationImage'
import RegistrationForm from '../../components/Registration/RegistrationForm/RegistrationForm'
import { RegisterSection } from './Register.styled'

const Register = () => {
  return (
    <RegisterSection>
      <RegistrationImage/>
       <RegistrationForm/>
    </RegisterSection>
  )
}

export default Register