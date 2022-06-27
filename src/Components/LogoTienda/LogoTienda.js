import React from 'react';
import Logo from "../Logo/logosinfoniaGrande.png"
import "./styles.css"

export const LogoTienda = () => {
  return (
    <img src={Logo} alt="logo"  className='logoPrincipal' style={{width:70, height:80}}/>
  )
}
