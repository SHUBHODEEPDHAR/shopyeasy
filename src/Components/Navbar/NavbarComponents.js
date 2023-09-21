import React, { useState } from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'

import { useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';
import { Button, SwipeableDrawer } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export default function NavbarComponents() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const drawerStyle={
    width:"100%",
    paddingTop:"60px",
    paddingLeft:"20px",
    textAlign:"center",
    height:"auto",
  
   
 }
 const drawerdiractioin=["right"]
 const {carts}=useSelector(state=>state.getAddtoCart)


 const toggleDrawer = (anchor, open) => (event) => {
  if (
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};
  return (
  <Wrapper>
    <div id="menu">
    <Link to="/" style={{textDecoration:"none",color:"white"}}>
<h4 className="Home link">
  Home
</h4>
</Link>

<Link to= "/Products" style={{textDecoration:"none",color:"white"}}>
<h4 className="products link">
  Products
</h4>
</Link>
<Link to="/contact" className='contacts'  style={{textDecoration:"none"}}>
<h4 className="contact link" >
  Contact Us
</h4>
</Link>
<Link to="/cart" className='carts ' style={{textDecoration:"none"}}>
<h4 className="cart link" style={{textDecoration:"none"}}>
  Cart
</h4>
<span className='cart-items' style={{textDecoration:"none",color:"white"}}>{`${carts}`}</span>
</Link>

</div>
<WbSunnyIcon  id="light" className="mode view"style={{position:"absolute",color:"yellow"}} onClick={()=>{document.getElementById("light").classList.toggle("view");document.getElementById("dark").classList.toggle("view");document.body.style.backgroundColor="";document.body.style.color="Purple"}}/>
<DarkModeIcon id="dark"  className="mode dark-logo" style={{position:"absolute",color:"black"}} onClick={()=>{document.getElementById("dark").classList.toggle("view"); document.getElementById("light").classList.toggle("view"); document.body.style.backgroundColor="black"; document.body.style.color="white"}}/>
{
  drawerdiractioin.map((anchor,index)=>(
  <React.Fragment key={index}>

{/* <MenuIcon  value={anchor} className='menu-btn' onClick={toggleDrawer(anchor, true)}/> */}
<Button onClick={toggleDrawer(anchor, true)} className='menu-btn view' ><MenuIcon/></Button>
<SwipeableDrawer className='drawer'  id="sdr"
     anchor={anchor}
     open={state[anchor]}
     PaperProps={{sx:drawerStyle}}
     onClose={toggleDrawer(anchor, false)}
     onOpen={toggleDrawer(anchor, true)}

    >
    <Button onClick={toggleDrawer(anchor, false)} className='menu-btn  view' style={{textAlign:"right",marginLeft:"50%",marginTop:"10px",fontSize:"50px",color:"purple"}}><CloseIcon style={{fontSize:"50px"}} /></Button>
       <Link to="/" style={{textDecoration:"none",}}>
<h4 className="Home link2" style={{textDecoration:"none",fontSize:"26px",color:"purple"}}>
  Home
</h4>
</Link>

<Link to= "/Products" style={{textDecoration:"none"}}>
<h4 className="products link2" style={{textDecoration:"none",fontSize:"26px",color:"purple"}}>
  Products
</h4>
</Link>
<Link to="/contact"  style={{textDecoration:"none"}}>
<h4 className="contact link2" style={{textDecoration:"none",fontSize:"26px",color:"purple"}}>
  Contact Us
</h4>
</Link>
<Link to="/cart" style={{textDecoration:"none"}}>
<h4 className="cart link2" style={{textDecoration:"none",fontSize:"26px",color:"purple"}}>
  Cart
</h4>
<span className='cart-items'style={{position:"absolute",margin:"-72px 32px",backgroundColor:"skyblue",color:"white",
padding:"4px 8px",borderRadius:"15px"}} id='num' >{`${carts}`}</span>
</Link>
    </SwipeableDrawer>

</React.Fragment>
))
}
  </Wrapper>
  )
}
const Wrapper= styled.div`
display:flex;
position:absolute;
color:White;
cursor:pointer;
margin-left:700px;
.link{
  margin-top:14px;
  padding:0px 10px;
  animation-delay:all 3s ;
  height:35px;
  
}
.link:hover{
  color:yellow;
  transform:scale(1.10);
   
}
.link2{
  margin-top:14px;
  padding:0px 10px;
  animation-delay:all 3s ;
  height:35px;
}
.link2:hover{
  color:yellow;
  transform:scale(1.10);
   
}
.catagory{
  margin-top:7px;
  padding:0px 10px;
  color:black;
}
.products{
  margin-top:14.5px;
}
.cart-items{
  position:absolute;
  background:skyblue;
  padding:3px 6px;
  border-radius:20px;
  font-size:12px;
  margin: -65px 0px 0px 47px;
 
}
.view{
  display:none;
}
#menu{
  display:flex;
color:White;
cursor:pointer;

}
.drawer{
  width:100px;
  display:none;
}
Link{
  color:white;
}
#cl-btn{
  margin-left:20px;
}
.mode{
  margin-left:360px;
  margin-top:10px;
}
.dark-logo{
  background:white;
  border-radius:20px;
}
.carts{color:white}
.contacts{color:white}
@media (max-width: 1200px){
  position:absolute;
  margin-left:400px;
  .home{
    color:black
  }
  .catagory{
    color:black;
  }
  .link{
    color:black
  }
  Link{
    color:black;
    margin-top:10px;
  }
  .view{
    display:block;
  }
  #menu{
    display:none;
  }
  .menu-btn{
    margin-top:10px;
    margin-left:250px;
  }
  .menu-btn{
    margin-top:5px;
    border:none;
    background:none;
    color:white;

  }
  .drawer{
    color:black;
  }
  #num{
 
    margin: -47px 42px;
    background: skyblue;
  }
}

`