import React from 'react'
import styled from 'styled-components'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useProductContext } from '../Context/ProductContext';
import { Avatar } from '@mui/material';
import { removeUser } from '../api/userApi';
export default function LoginDetails({view,handleLogout}) {
  const {loginUser}=useProductContext();
  return (
<Wrapper>
<PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <>
<Avatar variant="contained" {...bindTrigger(popupState)} className="login-name" id="login-id" style={{marginTop:"-35px"}}><img src={loginUser.picture} alt=''/></Avatar>
<Menu {...bindMenu(popupState)} style={{marginTop:"10px"}}> 
            <MenuItem onClick={()=>{handleLogout(); popupState.close();window.location.reload();removeUser(loginUser.email)}}>Logout</MenuItem>
          </Menu>
          </>
      )}
      </PopupState>
</Wrapper>
  )
}
 
const Wrapper=styled.div`
position:absolute;
margin-left:20px;
width:200px;

img{
  width:40px;
  margin-top:-10px;
  border-radius:20px;
}
`
