import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProductContext } from '../Context/ProductContext'
import { useDispatch, useSelector } from 'react-redux';
import { AddtocartAction, caritemsAction, totalPriceAction } from '../Redux/Action/AddtocartAction';
import { ID,Name,Email } from '../api/userApi';

export default function PlaceOrder() {

    const { cartItems, carts, totalCost,
        totalPrice,
        totalDiscount,
        totalAmount, deliveryCharge} = useSelector(state => state.getAddtoCart)
      let Product = cartItems && cartItems.filter(products => { return products })
      let ProductPrice = Product && Product.map(product => product.price * product.quantity);
      let ProductCost = Product && Product.map(product => product.cost * product.quantity)
      let ProductDiscount = Product && Product.map(product => product.cost * product.quantity - product.price * product.quantity);
     
      const { cart, qty, item } = useProductContext();
      const { remove} = useProductContext()
    

    
    
    
      const dispatch = useDispatch();
       // eslint-disable-next-line 
      useEffect(() => {
       
        dispatch(AddtocartAction(cart, item))
      
        dispatch(caritemsAction(qty));
        dispatch(totalPriceAction(ProductPrice, ProductCost, ProductDiscount))
         // eslint-disable-next-line 
      }, [dispatch, cart, remove, qty, item, carts])


 

let products = cartItems && cartItems.filter(products => { return products })


function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === '[object Date]'
}

function isObj(val) {
  return typeof val === 'object'
}

 function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val)
  } else {
    return val
  }
}

function buildForm({ action, params }) {
  const form = document.createElement('form')
  form.setAttribute('method', 'post')
  form.setAttribute('action', action)

  if (params && typeof params === 'object') {
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  }
 
  return form
}

 function post(details) {
  const form = buildForm(details)
  document.body.appendChild(form)
  form.submit()
  form.remove()
}

const getData=(data)=>
{

return fetch(`http://localhost:9000/payment`,{
  method:"POST",
  headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
  },
  body:JSON.stringify(data)
}).then(response=>response.json()).catch(err=>console.log(err))
}



const makePayment=()=>
{
getData({amount:500,email:'abc@gmail.com'}).then(response=>{

var information={
  action:"https://securegw-stage.paytm.in/order/process",
  params:response
}
post(information)

})
}


  return (
    <Wrapper>
      <div className="userid">
     {`User ID: ${!ID ?"NA" :ID  }`}
      </div>
     
  {/* <div className="ph-num">
  {`Phone Number: +91${uservalue.phonenumber}`}
  </div> */}
  <div className="name">
  {`User Name: ${!Name ?"NA" :Name }`}
  </div>
  <div className="email">
  {`Email ID : ${!Email?"abc@gmail.com":Email }`}
  </div>
  {/* <div className="address">
 {`Address : ${uservalue.address}`}
  </div> */}
  <div className="container" style={{display:"flex"}}>
    {products && products.map((e,index)=>(
 <div className="grid-img" key={index}>
<img src={e.image} alt="img" className='order-img'/>
<span className='order-qty'>{e.quantity}</span>
 </div>
 ))}
  </div>
  <div className="discount-copon">

  </div>
  <div className="price-details">
<h3 style={{textAlign:"center"}}>Product Details</h3>
<hr/>
<h3 style={{textAlign:"center"}} >{`Total ${carts} Items`}</h3>
<div className='details'>
  <span>Total Cost </span>
  <span className='amt' style={{width:"510px"}}>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalCost)}</span>
</div>
<div className='details'>
  <span>Total Price </span>
  <span className='amt' style={{width:"508px"}}>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalPrice)}</span>
</div>
<div className='details'>
  <span>Total Discount </span>
  <span className='amt' style={{width:"478px"}}>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalDiscount)}</span>
</div>
<div className='details'>
  <span>Delivery Charge </span>
  <span className='amt' style={{width:"468px",color:"green"}}>{deliveryCharge === 0 ?"FREE": new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(deliveryCharge) }</span>
</div>
<hr/>
<div className='details'>
  <span style={{fontWeight:"bold",fontSize:"20px"}}>Total Amount </span>
  <span className='amt' style={{width:"455px",fontWeight:"bold",fontSize:"20px"}}>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalAmount)}</span>
</div>
  </div>

  <div className="continue">
<button className='btn' onClick={()=>{makePayment()}}>Continue Payment</button>
  </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:1050px;
color:purple;
padding:60px;
.userid{
 width:auto;
 background:#f5f5f5;
 height:auto;
 text-align:left;
 padding:15px;
 margin:20px 0px;
 border-radius:10px;
 box-shadow: 0px 0px 5px 1px gray;
} 
.ph-num{
  width:auto;
  background:#f5f5f5;
  height:auto;
  text-align:left;
  padding:15px;
  margin:20px 0px;
  border-radius:10px;
  box-shadow: 0px 0px 5px 1px gray;
  
}
.name{
  width:auto;
  background:#f5f5f5;
  height:auto;
  text-align:left;
  padding:15px;
  margin:20px 0px;
  border-radius:10px;
  box-shadow: 0px 0px 5px 1px gray;
}
.email{
  width:auto;
  background:#f5f5f5;
 height:auto;
 text-align:left;
 padding:15px;
 margin:20px 0px;
 border-radius:10px;
 box-shadow: 0px 0px 5px 1px gray;
}
.address{
  width:auto;
  background:#f5f5f5;
  height:auto;
  text-align:left;
  padding:15px;
  margin:20px 0px;
  border-radius:10px;
  box-shadow: 0px 0px 5px 1px gray;
}
.price-details{
  
    background:black;
    width:100%;
    margin:20px 0px;
    margin-top:60px;
    height:auto;
    border-radius:15px;
    background:#f5f5f5;
      box-shadow:0px 5px 10px 0.8px gray;
      padding:15px 10px;

   }
.details{
  margin:0px 100px;
  padding:10px 0px
}
.amt{
  position:absolute;
  text-align:right;
  margin-left:200px;

  
}
.btn{
  width:200px;
  text-align:center;
  margin:50px 430px;
  padding:10px 10px;
  border:none;
  background:purple;
  color:white;
  box-shadow: 0px 2px 5px 1px gray;
  cursor:pointer;
} 
.btn:hover{
  transform:scale(0.96);

}
.order-img{
  width:80px;
  height:80px;
}
.grid-img{
  background:#f5f5f5;
  padding:20px;
  margin:20px;
  box-shadow:0px 0px 10px 2px gray;
  border-radius:60px;

  
}
.container{
  text-align:center;
  justify-content:center;
  align-items:center;
  margin-top:50px;
}
.order-qty{
  position:absolute;
  padding:5px;
  background:skyblue;
  color:white;
  width:15px;
  margin: -20px 10px 10px 0px;
  border-radius:20px;
}

`

