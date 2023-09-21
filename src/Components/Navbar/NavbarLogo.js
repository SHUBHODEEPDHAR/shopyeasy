import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NavbarLogo() {
  return (
    <Wrapper>
      <Link to='/' style={{textDecoration:"none"}}>
   <div className="container">
    <span className='first'>Shopy</span>
    <span className='secound'>Easy</span>
   </div>
   </Link>
    </Wrapper>
    
    )
  }
  const Wrapper= styled.div`
  display:flex;
  position:absolute;
  margin-left:-1000px;
  margin-top:10px;
  .first{
    color:white;
    font-size:20px;
    font-weight:bold;
    text-align:left;
    width:auto;
  
    
  }
  .secound{
    color:yellow;
    font-size:20px;
    font-weight:bold;
    padding:15px 0px;
    padding-top:0px;
    width:100%;
    position:absolute;
   
  }
  // @media(max-width:1200px){

  //   .first{
  //     color:white;
  //     font-size:20px;
  //     font-weight:bold;
  //     margin:12px 0px;
  //     width:100%;
  //     position:absolute;
  //     margin-left:-540px;
  //   }
  //   .secound{
  //     color:yellow;
  //     font-size:20px;
  //     font-weight:bold;
  //     padding:15px 0px;
  //     padding-top:0px;
  //     margin:12px 0px;
  //     width:100%;
  //     position:absolute;
  //     margin-left:-477px;
  //   }
  // }
  // @media(max-width:1100px){
  //   .first{
  //     color:white;
  //     font-size:20px;
  //     font-weight:bold;
  //     margin:12px 0px;
  //     width:100%;
  //     position:absolute;
  //     margin-left:-480px;
  //   }
  //   .secound{
  //     color:yellow;
  //     font-size:20px;
  //     font-weight:bold;
  //     padding:15px 0px;
  //     padding-top:0px;
  //     margin:12px 0px;
  //     width:100%;
  //     position:absolute;
  //     margin-left:-416px;
  //   }

  // }
  //   @media(max-width:965px){
  //     .first{
  //       margin-left:-422px;
  //     }
  //     .secound{
  //       margin-left:-360px;
  //     }
  //   }
  //   @media(max-width:965px){
  //     .first{
  //       margin-left:-400px;
  //     }
  //     .secound{
  //       margin-left:-336px;
  //     }
  //   }
  //   @media(max-width:800px){
  //     .first{
  //       margin-left:-380px;
  //     }
  //     .secound{
  //       margin-left:-318px;
  //     }
  //   }
  //   @media(max-width:800px){
  //     .first{
  //       margin-left:-340px;
  //     }
  //     .secound{
  //       margin-left:-278px;
  //     }
  //   }
  //   @media(max-width:628px){
  //     .first{
  //       margin-left:-350px;
  //     }
  //     .secound{
  //       margin-left:-288px;
  //     }
  //   }
  //   @media(max-width:580px){
  //     .first{
  //       margin-left:-320px;
  //     }
  //     .secound{
  //       margin-left:-258px;
  //     }
  //   }
  //   @media(max-width:518px){
  //     .first{
  //       margin-left:-320px;
  //     }
  //     .secound{
  //       margin-left:-255px;
  //     }
  //   }
  `
