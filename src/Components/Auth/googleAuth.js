import React from 'react'
import styled from 'styled-components'
import { GoogleLogin } from '@react-oauth/google';
import { useProductContext } from '../Context/ProductContext';
import { UserApi, getUser } from '../api/userApi.js';
import jwt_decode from "jwt-decode";
const clientId="637415186657-930povu12n1oedjmd88tonju3r6lqlpn.apps.googleusercontent.com"
export default function GoogleAuth() {
    const {loginUser,setLoginUser}=useProductContext();
    const onLoginSuccess =(res)=>{
        const decoded = jwt_decode(res.credential);
        const{picture,email,name}=decoded;
        console.log(decoded)
        setLoginUser(decoded)
        UserApi(picture,email,name)
        getUser(email)
      }
      const onLoginError =(res)=>{
        console.log("login error",res);
      }
        
  return (
    <Wrapper>
       <div className="container" onClick={()=>{document.getElementById("google-auth").classList.toggle("view")}} >
        <GoogleLogin
  onSuccess={onLoginSuccess}
  
  onError={onLoginError}
  useOneTap
/>
</div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
.view{
    display:none;
}
`