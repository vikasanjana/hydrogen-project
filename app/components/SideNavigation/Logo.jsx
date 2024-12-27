import { NavLink } from '@remix-run/react'
import React from 'react'
import logo from '~/assets/logo.png'

const Logo = () => {
  const url = '/'
  return (
    <NavLink
      className="navLinkLogo"
      end
      to={url}
    >
      <div className='brandImage'>
        <img src={logo} alt="logo" />
      </div>
    </NavLink>
  )
}

export default Logo
