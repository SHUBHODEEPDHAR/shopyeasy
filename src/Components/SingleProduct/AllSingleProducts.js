import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SingleProductAction } from '../Redux/Action/SingleProductAction';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SingleProductImage from './SingleProductImage';
import SingleProductDetails from './SingleProductDetails';
import SmallSingleProductImage from './SmallSingleProductImage';
import OFAF from '../../images/OFAF.gif'


export default function AllSingleProducts() {
    const{id}=useParams();

    const {SingleProduct}=useSelector(state=>state.getSingleProduct)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(SingleProductAction(id))
    },[dispatch,id])
  return (
   <Wrapper>
<div className="container">
    {SingleProduct=== undefined?
    <div className="loading">
        <img src={OFAF} alt="Loading...." style={{marginTop:"20px",marginLeft:"350px",fontSize:"20px",fontWeight:"bold"}}/>
               <p style={{position:"absolute",marginTop:"-70px",marginLeft:"550px",fontSize:"20px",fontWeight:"bold"}}>Loading...</p>
        </div>
        :
        <>
<div className="left-body">
    <SingleProductImage Product={SingleProduct} id={id} />
    {SingleProduct && SingleProduct.map((product,index)=>(
    <SmallSingleProductImage key={index} img1={product.image.big1} img2={product.image.big2} id={id} Product={product}/>
    
    ))
}
</div>
<div className="right-body" >
    <SingleProductDetails Product={SingleProduct}/>
    
   
</div>
</>
}
</div>
   </Wrapper>
  )
}
const Wrapper= styled.div`
width:1200px;
padding-top:60px;
height:auto;
padding-bottom:150px;
.container{
    display:flex;
}
.left-body{
    width:500px;
    
}
.right-body{
    width:700px;
    padding:20px 20px;
    margin:20px 30px;
}

`