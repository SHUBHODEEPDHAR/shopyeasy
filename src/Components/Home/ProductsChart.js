import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ProductsAction } from '../Redux/Action/ProductsAction';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

export default function ProductsChart() {
  const {Featured}= useSelector(state=> state.getProducts);
  

const dispatch= useDispatch();
useEffect(()=>{
  dispatch(ProductsAction())
},[dispatch])
  return (
    <Wrapper >
      {Featured === undefined ?
      <div className="container" style={{display:"grid",marginLeft:"-20px"}} >
       
  
  <div className="grid"   > 
  <Skeleton variant="rectangular" width={210} height={150} style={{textAlign:"center",margin:"0px -108px 0px 28px"}} animation="wave"/>
 
        <br/>
        <Skeleton/>
       <Skeleton/>
       <Skeleton/>
     
  </div>
  <div className="grid"   > 
  <Skeleton variant="rectangular" width={210} height={150} style={{textAlign:"center",margin:"0px -108px 0px 28px"}} animation="wave"/>
  
          <br/>
       <Skeleton/>
       <Skeleton/>
       <Skeleton/>
       
    </div>
    <div className="grid"   > 
    <Skeleton variant="rectangular" width={210} height={150} style={{textAlign:"center",margin:"0px -108px 0px 28px"}} animation="wave"/>

          <br/>
          <Skeleton/>
       <Skeleton/>
       <Skeleton/>
       
    </div>

    </div>
    :
<div className="container" style={{display:"grid"}} >
{
      Featured && Featured.map((product,index)=>(
        <Link to ={`/${product.id}`} key={index} style={{textDecoration:"none",color:"gray"}}>
  
  <div className="grid"  key={index} > 
    
        <img src={product.image.big1} alt='img' className='img'/>
        <br/>
        
        <del>{new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumSignificantDigits:2}).format(product.cost)}</del>
        
        <div className='pro-price'>{new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumSignificantDigits:2}).format(product.price)}</div>   

        
             <p className='pro-name'>{product.name.slice(0,30)}</p>
     
  </div>
  </Link>
   ))
  }

</div>
}
    </Wrapper>
   )
 }
 const Wrapper =styled.div`

padding-top:550px;
width:100%;
 .container{
  grid-template-columns: 5fr 5fr  5fr;
  margin: 10px 0px;
  
 }
 .grid{
  background:#ececec;
  width:70%;
  height:235px;
  padding:35px 25px;
  margin: 20px 100px;
  border-radius:20px;
  text-align:center;
   box-shadow: 0px 0px 15px 0.6px gray;
 }
.pro-name:{
  opacity:0.6;
  font-size:bold;
}
 .img{
  width:120px;
  border-radius:15px;
  height:150px;
  cursor:pointer;
 }
 .img:hover{
  transform:scale(1.10)
 }
 .pro-price{
  font-weight:bold;
  color:purple;
  cursor:pointer;
 }
 .pro-price:hover{
  transform:scale(1.10);
  filter: drop-shadow (2px 4px 8px purple);
 }
 @media (max-width:995px){
 width:100%;
 margin-left:300px;
justify-content:center;
  .container{
    grid-template-columns: 5fr 5fr ;
    
   }
   .grid{
    background:#ececec;
    width:300px;
    height:235px;
    padding:35px 25px;
    margin: 20px -40px;
    border-radius:20px;
    text-align:center;
     box-shadow: 0px 0px 15px 0.6px gray;
   }
 }
//  @media (max-width:850px){

//   .container{
//     grid-template-columns: 5fr 5fr ;
//     margin:0px 60px;
//     width:995px;
//    }
//    .grid{
//     background:#ececec;
//     width:70%;
//     height:235px;
//     padding:35px 25px;
//     margin: 20px -50px;
//     border-radius:20px;
//     text-align:center;
//      box-shadow: 0px 0px 15px 0.6px gray;
//    }
//  }
//  @media (max-width:801px){
     width:1000px;
//   .container{
//     grid-template-columns: 5fr 5fr ;
//     
//    }
//  }
 @media (max-width:801px){

  .container{
    grid-template-columns: 5fr 5fr ;
    margin-right:-120px
   }
 }
 @media (max-width:700px){

  .container{
    grid-template-columns: 5fr 5fr ;
    margin-right:-180px
   }
 }
 @media (max-width:600px){
 .container{
  grid-template-columns: 5fr 5fr ;
  margin-right:-300px
 }
//  }
//  @media (max-width:505px){
//   .container{
//     grid-template-columns: 5fr 5fr ;
//     margin-right:-300px;
//    }
//  }
//  @media (max-width:470px){
//   .container{
//     grid-template-columns: 5fr 5fr ;
//     margin-right:-360px;
//    }
//  }
 @media (max-width:460px){

  .container{
    grid-template-columns: 5fr  ;
    justify-content:center;
    margin-left:0%;
   }
   .grid{
    background:#ececec;
    width:50%;
    height:235px;
    padding:35px 100px;
    margin: 20px  110px;
    border-radius:20px;
    text-align:center;
     box-shadow: 0px 0px 15px 0.6px gray;
   }
 }
 `
