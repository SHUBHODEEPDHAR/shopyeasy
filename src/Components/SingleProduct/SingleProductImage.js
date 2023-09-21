import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../Context/ProductContext'

export default function SingleProductImage({Product}) {
 const {setImgs,imgs,bigimg,setBigimg}=useProductContext();
  return (
    <Wrapper id='single-img' >
     {Product && Product.map((product,index)=>(
 <div className="container" key={index} >
   
     <div className="small-image" style={{display:"grid"}}>
         <img src={product.image.big1} alt='img' className='sub-img'  onClick={(e)=>{setImgs(e.target.src)}} onMouseOver={(e)=>{setImgs(e.target.src)}}/>
         <img src={product.image.big2} alt='img' className='sub-img'  onClick={(e)=>{setImgs(e.target.src)}} onMouseOver={(e)=>{setImgs(e.target.src)}}/>
         
     </div>
   <div className="big-img">
  
     
   <img src={imgs=== "" ? product.image.big1: imgs} alt='img' className="main-img" onMouseOver={(event)=>{setBigimg(event.target.src); document.getElementById("bigImg").classList.toggle("view")}} onMouseLeave={()=>{document.getElementById("bigImg").classList.add("view")}} />
   </div>
   <div className="verybig-img">
  <img src={bigimg} alt='img' className='large-img view' id='bigImg'/>
   </div>
 </div>
 ))}
    </Wrapper>
   )
 }
 const Wrapper=styled.div`
padding-top:50px;

 .container{
 display:flex;

 
 }
 .main-img{
  position:absolute;
  width:280px;
  height:380px;
  padding:30px 40px;
  border-radius:0px;
  background:#f5f5f5;
  box-shadow:0px 0px 5px 0.2px gray
 }
 .small-image{
  display:list;
 margin:80px 0px;
 }
 .sub-img{
  width:80px;
  padding:10px 10px;
  border-radius:5px;
  background:#f5f5f5;
  margin-left:10px;
  margin-right:20px;
 }
 .large-img{
  position:absolute;
  width:35%;
  background:white;
  border-radius:15px;
  padding:20px;
  box-shadow:0px 5px 15px 1px gray;
  height:500px;
  z-index:9000;
 }
 .verybig-img{
  margin: 10px -560px 0px 500px;
  background:white;

  
 }
 .view{
  display:none;
 }
 @media(max-width:700px){
 display:none;

 }
 `