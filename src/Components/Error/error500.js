import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Error500() {
  return (
   <Wrapper>
  <h1>{`Error 500 :-(`}</h1>
  <Typography>OH NO! SOMETHING WENT WRONG.....</Typography>
 <Link to="/" style={{textDecoration:"none",}}><Button style={{marginTop:"50px"}}>Go Back</Button></Link> 
   </Wrapper>
  )
}
const Wrapper=styled.div`
  text-align:center;
  height:400px;
  h1{
    font-size:40px;
    padding:30px 20px;
    margin-top:100px;
    color:purple;
    
  }
`