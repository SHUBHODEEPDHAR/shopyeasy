import React from 'react'
import styled from 'styled-components'
import NavbarLogo from './NavbarLogo'
import NavbarSearch from './NavbarSearch'
import NavbarComponents from './NavbarComponents'
import NavbarLogin from './NavbarLogin'


export default function Navbar() {
  return (
 <Wrapper>
<NavbarLogo/>
<NavbarSearch/>
<NavbarLogin/>
<NavbarComponents/>
 </Wrapper>
  )
}

const Wrapper=styled.div`
display:flex;
width:100%;
position:fixed;
background-color:purple;
height:45px;
justify-content:center;
align-item:center;
z-index:9999;

`