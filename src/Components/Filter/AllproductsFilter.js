
import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { useProductContext } from '../Context/ProductContext'
import { useDispatch, useSelector } from 'react-redux';
import { FilterAction } from '../Redux/Action/FilterAction';
import { Button, FormControl, InputLabel,  MenuItem, Select, SwipeableDrawer } from '@mui/material';

import Slider from '@mui/material/Slider';

import FilterListIcon from '@mui/icons-material/FilterList';
import EastIcon from '@mui/icons-material/East';

export default function AllproductsFilter() {

  document.body.style.color="purple";
//  document.querySelector(".menu-btn").style.color="purple"

if( document.body.style.backgroundColor==="black"){
  document.querySelector("#menu").style.color="white"
}

  const {setText,text,type,setType,colors,setColors,brand,setBrand,clear,setClear,priceValue,setPriceValue}=useProductContext();
  const { FilterProducts}=useSelector(state=>state.getFilterProducts)
  
const dispatch= useDispatch();
useEffect(()=>{
  dispatch(FilterAction(text,brand,type,colors,clear,priceValue));
},[dispatch,text,brand,type,colors,clear,priceValue])
const {allProducts}=useSelector(state=>state.getFilterProducts)
let uniqueData=[];
let uniqueType=[];
let uniqueColor=[];
let val= allProducts && allProducts.map(e=>e.price)
  let newMax =Math.max.apply(null,val)
   
   let newMin =Math.min.apply(null,val)
  

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const drawerStyle={
    width:"300px",
    paddingTop:"60px",
    paddingLeft:"20px",
    textAlign:"center",
    height:"550px",
    display:"block"
  
   
 }
 const drawerdiractioin=["left"]



 const toggleDrawer = (anchor, open) => (event) => {
  if (
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const [company, setCompany] = useState('');
const handleCompany = (event) => {
  setCompany(event.target.value);
};
const [catagory, setCatagory] = useState('');
const handleCatagory = (event) => {
  setCatagory(event.target.value);
};

const [color, setColor] = useState('');
const handleColor = (event) => {
  setColor(event.target.value);
};


  return (
    
 <Wrapper>
   {
  drawerdiractioin.map((anchor,index)=>(
  <div key={index}> 
    <button onClick={toggleDrawer(anchor, true)} className='menu-btn' id="menu" style={{margin:"50px 130px",position:"absolute",}}><FilterListIcon/></button>
    <SwipeableDrawer className='drawer'  id="sdr"
     anchor={anchor}
     open={state[anchor]}
     PaperProps={{sx:drawerStyle}}
     onClose={toggleDrawer(anchor, false)}
     onOpen={toggleDrawer(anchor, true)}

    >
       <Button onClick={toggleDrawer(anchor, false)} className='menu-btn' style={{marginRight:"-250px",padding:"10px"}}><EastIcon/></Button>

  <div className="input-text">
 <input type='text' className='text' id='input-text'  name='text' value={text}  placeholder='SEARCH HERE' onChange={(e)=>{setText(e.target.value)}} style={{padding:"10px 58px",backgroundColor:"#f5f5f5"}}/>
 </div>

 <div className="totalContainer" style={{display:"grid"}}>
 
     <FormControl sx={{ m: 1, minWidth: 120 }}>
     <InputLabel id="demo-simple-select-label">Company</InputLabel>
     <Select
          value={company}
          onChange={handleCompany}
         label ="Company"
         
        >
  { allProducts && allProducts.forEach(element => {
    if (!uniqueData.includes(element.Brand)) {
      uniqueData.push(element.Brand);
      
    }
  })}
  <MenuItem value="">
            <em>None</em>
          </MenuItem>

  {uniqueData.map((product,index)=>(
    <MenuItem key={index} style={{listStyleType:"none"}} onClick={(event)=>{setBrand(`${event.target.textContent}`)}} value={product}>{product}</MenuItem>
    ))}
    </Select>
    
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 120 }}>
     <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
     <Select
          value={catagory}
          onChange={handleCatagory}
         label ="Catagory"
         
        >
  
  { allProducts && allProducts.forEach(element => {
    if (!uniqueType.includes(element.type)) {
      uniqueType.push(element.type);
    
    }
  })}
<MenuItem value="">
            <em>None</em>
          </MenuItem>

 
  {uniqueType.map((product,index)=>(
    <MenuItem key={index}style={{listStyleType:"none"}} className='type' value={product} onClick={(event)=>{setType((event.target.textContent))}}>{product}</MenuItem>
    ))}
  </Select>
 </FormControl>
  
 

 <FormControl sx={{ m: 1, minWidth: 120 }}>
     <InputLabel id="demo-simple-select-label">Color</InputLabel>
     <Select
          value={color}
          onChange={handleColor}
         label ="Color"
         
        >
  { allProducts && allProducts.forEach(element => {
    if (!uniqueColor.includes(element.color)) {
      uniqueColor.push(element.color);
    
    }
  })}
<MenuItem value="">
            <em>None</em>
          </MenuItem>

  {uniqueColor.map((product,index)=>(
    <MenuItem key={index} style={{listStyleType:"none"}} className='color' value={product} onClick={(event)=>{setColors(event.target.textContent)}}>{product}</MenuItem>
    ))}
 </Select>
 </FormControl>
  

 <div className="price-filter" style={{display:"block",boxShadow:"0px 0px 0px 0.5px gray",margin:"4px 9px 0px 8px",padding:" 70px 0px 0px 0px",borderRadius:"5px"}}>
  <label htmlFor="price" style={{textAlign:"left",margin:"-140px -36px 3px -40px",opacity:"0.7",paddingTop:"80px",position:"absolute"}}>Price</label>
 <Slider style={{padding:"10px 10px", width: "150px",}}
  aria-label="slider-label"
  name="price"
  defaultValue={newMin}
  min={newMin}
  step={1}
  max={newMax}
 value={newMax}
  valueLabelDisplay="auto"
  color="secondary"
  onChange={(e)=>{setPriceValue(e.target.value);}}
/>
  {/* <PriceFilter  product= {allProducts}/> */}


 </div>

 <div className="container-button">
  <button value={FilterProducts} onClick={(event)=>{setClear(event.target.type)}} id='submit' style={{margin:"20px 0px 0px 0px ",padding:"10px 10px",color:"white",backgroundColor:"purple",border:"none",cursor:"pointer"}}>Clear All Filters</button>
 </div>
 </div>
 </SwipeableDrawer>
</div>
  ))
}
 </Wrapper>

  )
}
const Wrapper=styled.div`
display:block;

align-items :center;
justify-content:center;
text-align:center;
.input-text{
  padding:10px 10px;
  background: #ede3ef;
  border-radius:5px;
  box-shadow:0px 1px 5px 0.5px gray;
  margin-top:15px;
}
.text{
  margin:20px 0px;
  padding:5px 20px;
  width:80%;
  background:#f5f5f5;
}
.container {
  display:block;
  text-align:left;
}
.menu-btn{
  color:purple
}
.totalContainer{
display:block;
font-size:22px;
cursor:pointer;
margin-top:-50px;
}
.container-color{
  margin-top:10px;

}
.container-type{
  margin-top:30px;
}
p{
  text-align:center;
  margin-left:-80px;
  background:purple;
  color:white;
  font-weight:bold;
  padding:10px 0px;
}
option{
  margin-left:100px;
  padding:5px 0px;
}
.type{
text-align:left;
  
}
.color{
  text-align:left;
}
.comapany{

}
.brand{
  margin-top:20px;
}

#submit:hover{
  transform:scale(0.96);
  box-shadow:0px 5px 10px 0.8px gray;
}
.price-filter{
  width:200px;
  padding:30px 10px;
  margin: 57px 0px 0px 72px;
  justify-content:center;
  align-items:center;
  
}
.price-header{
 
  position:absolute;

}
button{
  
  cursor:pointer;
  border:none;
}
.menu-btn{
  border-radius:20px;
  box-shadow:0px 0px 5px 1px gray;
  background:#9c27b0;
  color:white;
  font-size:28px;
  padding-top:10px;
  
}
`