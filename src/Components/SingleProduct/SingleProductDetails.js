import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import { useDispatch} from 'react-redux';
import { AddtocartAction } from '../Redux/Action/AddtocartAction';
import { getUser } from '../api/userApi';



export default function SingleProductDetails({Product,id}) {
  const history = useNavigate();
 const{cart,setCart,setQty,setItem,qty,loginUser}=useProductContext();

 const dispatch=useDispatch();
 const addItemToCart = () => {
  dispatch(AddtocartAction(id,cart));
  history('/cart');
}
const placeOrder=()=>{
  dispatch(AddtocartAction(id,cart));
  history('/placeorder');
}
const stocks=Product && Product.map(product=>product)
   console.log("🚀 ~ file: SingleProductDetails.js:25 ~ SingleProductDetails ~ stocks:", stocks)
   return(
    <Wrapper>
      {Product && Product.map((product,index)=>(
<div className="container" key={index} style={{display: "block"}}>
   <div className="name">
      <h3 className='name'>{product.longName}</h3>
   </div>
   <div className="product-price">
      <del className='cost'>{new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumSignificantDigits:2}).format(product.cost)}</del>
      <div><span className='price'>{new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumSignificantDigits:2}).format(product.price)} </span> <span className='discount'>{product.discount}</span></div>
      
   </div>
   
   <div className="main-details">
      <h5>Highlight</h5>
      <ul className='ul-hlt'>
         <li className='hlt'>{product.Highlights.h1}</li>
         <li className='hlt'>{product.Highlights.h2}</li>
         <li className='hlt'>{product.Highlights.h3}</li>

         <li className='hlt'>{product.Highlights.h4}</li>
         <li className='hlt'>{product.Highlights.h5}</li>
         <li className='hlt'>{product.Highlights.h6}</li>

         <li className='hlt'>{product.Highlights.h7}</li>
        
      </ul>
   </div>
   <div className="read-more" id="btn-more">
      <button onClick={()=>{
         document.getElementById("others").classList.toggle("view");
         document.getElementById("Wrrantey").classList.toggle("view");

         document.getElementById("Description").classList.toggle("view");

         document.getElementById("btn-less").classList.toggle("view");
        
         document.getElementById("btn-more").classList.add("view");

      }} className='read-btn'>Read More</button>
   </div>
   <div className="other-details view" id="others">
      <h5>Other Details</h5>
      <ul className='ul-otd '>
         <li className='otd'>{product.OtherDetails.o1}</li>
         <li className='otd'>{product.OtherDetails.o2}</li>
         <li className='otd'>{product.OtherDetails.o3}</li>

         <li className='otd'>{product.OtherDetails.o4}</li>
         <li className='otd'>{product.OtherDetails.o5}</li>
         <li className='otd'>{product.OtherDetails.o6}</li>
         <li className='otd'>{product.OtherDetails.o7}</li>
         <li className='otd'>{product.OtherDetails.o8}</li>
         <li className='otd'>{product.OtherDetails.o9}</li>
         <li className='otd'>{product.OtherDetails.o10}</li>
         <li className='otd'>{product.OtherDetails.o11}</li>
         <li className='otd'>{product.OtherDetails.o12}</li>
         <li className='otd'>{product.OtherDetails.o13}</li>
         <li className='otd'>{product.OtherDetails.o14}</li>
         <li className='otd'>{product.OtherDetails.o15}</li>
         <li className='otd'>{product.OtherDetails.o16}</li>
         <li className='otd'>{product.OtherDetails.o17}</li>

      </ul>
   </div>
   <div className="warranty view" id="Wrrantey">
      <h5>Warranty</h5>
      <p className='wty'>{product.warrenty}</p>
   </div>
   <div className="description view" id='Description'>
      <h5>Discription</h5>
      <p className='des'>{product.Description}</p>
   </div>
   <div className="Read-Less view" id='btn-less'>
      <button onClick={()=>{
         document.getElementById("others").classList.add("view");
         document.getElementById("Wrrantey").classList.add("view");

         document.getElementById("Description").classList.add("view");

         document.getElementById("btn-more").classList.remove("view");
         document.getElementById("btn-less").classList.add("view");
        

      }} className='read-btn'>Read Less</button>
   </div>
   <div className="Addtocart">
   
      <button   onClick={()=>{setCart(product);setQty(product.quantity);
      addItemToCart();setItem(qty);}} className='cart-btn'>Add To Cart</button>
         <button   onClick={()=>{setCart(product);setQty(product.quantity);
      placeOrder();setItem(qty);getUser(loginUser.gmail)}} className='cart-btn'>BUY NOW</button>
    
   </div>
   <div className="cart-items-btn">
         <button className='decrese qty' onClick={()=>{setQty(qty > 1 ? qty- 1: 1 )}}>{`<`}</button>
    <input type='text' name='text' value={qty} className='input qty' readOnly id='input-value' onClick={product.Description}/>
    <button className='increse qty' onClick={()=>{setQty(qty >= 1 && qty < product.stock ? qty + 1: product.stock);console.log("🚀 ~ file: SingleProductDetails.js:123 ~ SingleProductDetails ~ product:", product.stock)}}>{`>`}</button>
   </div>
    
</div>
))}
    </Wrapper>
   )
}
 const Wrapper= styled.div`
 .container{
   display:grid;
 }
 li{
   display:table-caption;
 }
 .name{
   padding:10px 20px;
 }
 .cost{
   padding:0px 40px;
   font-size:20px;
   opacity:0.7;
 }
 .price{
   padding:5px 40px;
   padding-right:20px;
   font-size:24px;
   font-weight:bold;

 }
 .discount{
   font-weight:bold;
   color:green;

 }
 .hlt{
   width:230%;
 }
 h5{
   padding-left:40px;
   font-size:20px;
   opacity:0.8;
 }
 .otd{
   width:230%;
 }
 .wty{
   padding-left:40px
 }
 .des{
   padding-left:40px;
 }
 .view{display:none}
 button{
   margin-left:40px;
   padding:5px 5px;
   border-radius:3px;
   box-shadow:0px 0px 15px 0.5 gray;
   cursor:pointer;
 }
 button:hover{
   transform:scale(1.10);
 }
 .input{
   width:22px;
   text-align:center;
   height:20px;
   border:none;
   background:green;
   color:white;
   border-radius:10px;
   box-shadow:0px 1px 5px 1px gray;
 }
 .qty-item{
   margin-left:4px;

 }
 .increse{
  margin-left:2px;
  border:none;
  background:purple;
  color:white;
  width:24px;
  height:24px; 
  font-weight:bold;
  border-radius:20px;


 }
 .increase:hover{
transform: scale(0.96)
 }
 .decrease:hover{
  transform: scale(0.96)
 }
 .decrese{
  margin-right:2px;
  border:none;
  background:purple;
  color:white;
  width:24px;
  height:24px; 
  font-weight:bold;
  border-radius:20px;
 }
 .cart-items-btn{
  margin :10px;
  
 }
 .cart-btn{
  margin:40px 40px;
  padding: 10px;
  border:none;
  background:purple;
  color:white;
  box-shadow:0px 2px 5px 1px gray;
  opacity:0.8
 }
 .cart-btn:hover{
  transform:scale(0.96);
  opacity:1;
 }
 .read-btn{
  border:none;
  background:#f5f5f5;
  padding:5px;
  box-shadow:0px 0px 5px 0.6px gray;
 }
 

 @media(max-width:700px){
  height:auto;
 width:1100px;
  display:block;
  padding-top:750px;
  margin:0px -430px;
  font-size:36px;
  li{
    display:table-caption;
  }
  .name{
    padding:10px 20px;
  }
  .cost{
    padding:0px 40px;
    font-size:36px;
    opacity:0.7;
  }
  .price{
    padding:5px 40px;
    padding-right:20px;
    font-size:38px;
    font-weight:bold;
 
  }
  .discount{
    font-weight:bold;
    color:green;
 
  }
  .hlt{
    width:800px;
  }
  h5{
    padding-left:40px;
    font-size:20px;
    opacity:0.8;
    font-size:36px;
  }
  .otd{
    width:230%;
  }
  .wty{
    padding-left:40px
  }
  .des{
    padding-left:40px;
  }
  .view{display:none}
  button{
    padding:5px 5px;
    border-radius:3px;
    box-shadow:0px 0px 15px 0.5 gray;
    cursor:pointer;
    font-size:36px;
  }
  button:hover{
    transform:scale(1.10);
  }
  .input{
 
    text-align:center;
    width:50px;
   height:50px; 
    border:none;
    background:green;
    color:white;
    border-radius:10px;
    box-shadow:0px 1px 5px 1px gray;
    font-size:36px;
  }
  .qty-item{
    margin-left:4px;
 
  }
  .increse{
    margin:-50px 20px;
   border:none;
   background:purple;
   color:white;
   width:50px;
   height:50px; ; 
   font-weight:bold;
   border-radius:20px;
   font-size:36px;
 
 
  }
  .increase:hover{
 transform: scale(0.96)
  }
  .decrease:hover{
   transform: scale(0.96)
  }
  .decrese{
   margin:-50px 0px;
   margin-left:390px;
   margin-right:20px;

   border:none;
   background:purple;
   color:white;
   width:50px;
   height:50px; 
   font-weight:bold;
   border-radius:20px;
   font-size:36px;
  }
  .cart-items-btn{
   margin :10px;
   
  }
  .cart-btn{
   margin:50px 390px;
   padding: 10px;
   border:none;
   background:purple;
   color:white;
   box-shadow:0px 2px 5px 1px gray;
   opacity:0.8
   
  }
  .cart-btn:hover{
   transform:scale(0.96);
   opacity:1;
  }
  .read-btn{
   border:none;
   background:#f5f5f5;
   padding:5px;
   box-shadow:0px 0px 5px 0.6px gray;
  margin:10px 400px;
  }
  .wty{
    width:900px;
  }
  .des{
    width:900px;
  }
  }
 `