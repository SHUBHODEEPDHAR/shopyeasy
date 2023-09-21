import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import {  AddtocartAction,  ClearallAction, RemovecartAction,  caritemsAction, decreaseAction,  increseAction, totalPriceAction } from '../Redux/Action/AddtocartAction';
import { useProductContext } from '../Context/ProductContext';
import ClearIcon from '@mui/icons-material/Clear';

import loading from '../../images/loading.png'

import { Link } from 'react-router-dom';

// Define the AddToCart component
export default function AddToCart() {
  // useSelector to get data from Redux store
  const { cartItems, carts, totalCost,
    totalPrice,
    totalDiscount,
    totalAmount, deliveryCharge, isEmpty } = useSelector(state => state.getAddtoCart)
  let Product = cartItems && cartItems.filter(products => { return products })
  let ProductPrice = Product && Product.map(product => product.price * product.quantity);
  let ProductCost = Product && Product.map(product => product.cost * product.quantity)
  let ProductDiscount = Product && Product.map(product => product.cost * product.quantity - product.price * product.quantity);
  let totalitem = 0;
   // Get data from a custom context (if applicable)
  const { cart, qty, item } = useProductContext();
  const { remove, setRemove,setNewList,setHandleOrder } = useProductContext()

  const image = cart && cart.image.small1



  const dispatch = useDispatch();
   // useEffect to dispatch actions and update data when dependencies change
  useEffect(() => {
    dispatch(increseAction())
    dispatch(AddtocartAction(cart, item))
    dispatch(RemovecartAction(remove))
    dispatch(caritemsAction(qty));
    dispatch(totalPriceAction(ProductPrice, ProductCost, ProductDiscount))
  }, [dispatch, cart, remove, qty, item, carts])


// console.log(inputVal)
  totalitem = carts
  return (
    <Wrapper>
      {isEmpty === true ?
        <div>
          <img className='loading-img' src={loading} alt="loading..." />
        </div>
        :
        <main>

          <div style={{ display: "flex" }}>


            <div style={{ display: "block" }}>
              {Product && Product.map((product, index) => (

                <section key={index} style={{width:"590px"}} >
                  <div className="container" >
                    <div className="cards" style={{ display: "grid" }}>
                      <div className="grid-cart" >
                        <img src={product.image} alt="img" className='cart-img' />
                        <div className="details">
                          <p className='name'> {product.name}</p>
                          <p>{product.color}</p>
                          <del className='cost'>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(product.cost)}</del>
                          <span><span className='price'>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(product.price)}</span><span className='discount'>{product.discount}</span></span>
                          <div className="qty-item"> 
                            <button className='decrese qty' onClick={() => { document.getElementById("input-value").value = product.quantity > 1 ? --product.quantity : 1; dispatch(decreaseAction()) }}>{`<`}</button>
                            <input type='text' name='text' value={product.quantity} className='input qty' id='input-value' readOnly />
                            <button className='increse qty' onClick={() => { document.getElementById("input-value").value = product.quantity >= 1 && product.quantity < product.stock ? ++product.quantity : product.stock; dispatch(increseAction()); }} >{`>`}</button>
                          </div>
                        </div>
                        <ClearIcon style={{ position: "absolute" }} className='clr-icon' onClick={() => { setRemove(product.id); setNewList(cartItems); }} />

                      </div>
                    </div>
                  </div>
                </section>
              )

              )}

              <button className='clear' onClick={() => { dispatch(ClearallAction(remove)); }} >Clear All</button>
             
             <Link to="/placeorder" onClick={()=>{setHandleOrder(Product,carts, totalCost,
    totalPrice,
    totalDiscount,
    totalAmount, deliveryCharge)}}><button className='placeorder btn'>Place Order</button></Link> 
            
            </div>
            <div style={{ display: "block" }}>

              <section >
                <div className="container-price" style={{marginLeft:"0px"}}>
                  <div className="grid-price" style={{width:"400px"}}>
                    <div className="cards-price">
                      <div className="title">
                        <h3>Price Details</h3>
                      </div>
                      <hr />
                      <div className="itemprice">
                        <span className='head'>Total Cost </span>
                        <span className="cost amt">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalCost)}</span>
                      </div>
                      <div className="itemprice">
                        <span className='head'>Total Discount </span>
                        <span className="cost amt">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalDiscount)}</span>
                      </div>
                      <div className="itemprice">
                        <span className='head'>Total Price </span>
                        <span className="cost amt">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalPrice)}</span>
                      </div>
                      <div className="itemprice">
                        <span className='head'>Delivery Charge </span>
                        <span className="cost amt">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(deliveryCharge)}</span>
                      </div>
                      <hr />
                      <div className="itemprice">

                        <div className="prices">
                          <span className='head-total'>Total Amount </span>
                          <span className="total-price amt">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalAmount)}</span>
                        </div>
                      </div>
                      <hr />
                      <div className="save-amount">
                        <h4 style={{ color: "#60ad60" }}>You will save {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(totalDiscount)} on this order</h4>
                      </div>

                    </div>

                  </div>
                </div>
              </section>

            </div>


          </div>

        </main>
      }


    </Wrapper>
  )
}
const Wrapper = styled.div`
color:purple;
padding:60px;
height:auto;
width:1000px;

.loading-img{
  width:200px;
  margin:10px 450px;

}
.grid-cart{
  background-color:#f5f5f5;
  padding:10px 10px;
  width:500px; 
  border-radius:5px;
  display:flex;
  box-shadow:0px 5px 10px 0.8px gray;
  margin: 10px 10px;
}
.cart-img{
  height:80px;
  padding:10px 10px;
  border-radius:15px;
  margin:0px 10px;

}
.cards{
  padding-top:50px;
  width:200px;
}
.details{
  margin-top:-10px;
}
p{
  font-weight:bold;

}
.cost{
  font-size:16px;
  font-weight:bold;
  color:gray;
  opacity:0.7;
}
.price{
  padding:0px 10px;
  font-size:18px;
  font-weight:bold;

}
.discount{
  font-size:14px;
  font-weight:bold;
  color:green;
}
.clr-icon{
  text-align:right;
  justify-content:right;
 width:950px
}
.input{
  width:20px;
  text-align:center;
  height:24px;
  font-weight:bold;
}
.qty-item{
  margin: 0px 0px 0px 270px;
 
}
.clear{
  width:100px;
  padding:10px 20px ;
  margin-top:30px;
  margin-left:10px;
  color:white;
  font-weight:bold;
  background:purple;
  border:none;
  box-shadow:0px 2px 5px 0.8px gray;
  opacity:0.7;
  cursor :pointer;
}
.clear:hover{
  transform:scale(0.90);
  opacity:1;
  transform-delay:50s

}
.increse{
  margin-left:2px;
  border:none;
  background:purple;
  color:white;
  font-weight:bold;
  height:30px;
  width:30px;
  border-radius:20px;
  cursor:pointer;

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
  font-weight:bold;
  height:30px;
  width:30px;
  border-radius:20px;
  cursor:pointer;
 }
 .cart-items-btn{
  margin :15px;
  
 }
 .name{
  padding-right:50px;
 }
 .container-price{
  text-align:center;
 }
 .grid-price{
  background:black;
  width:400px;
  margin-left:50px;
  margin-top:60px;
  height:auto;
  border-radius:15px;
  background:#f5f5f5;
    box-shadow:0px 5px 10px 0.8px gray;
    padding:15px 10px;
 }
 .itemprice{
  text-align:left;
  display:flex;
  font-size:20px;
  
 
 }
 .prices{
  display:flex;
  font-size:20px;
  font-weight:bold;
  maring-top:10px;
 }
 .amt{
  text-align:right;
  width:100%;
  margin-top:15px;
 }
 .head{
  width:100%;
  padding:10px 10px;

 }
 .head-total{
  width:300%;
  padding: 20px 10px;
 }
 .total-price{
  width:250px;
 }
 .btn{
  text-align:center;
  margin:50px 0px;
  margin-left:322px;
  opacity:0.7;
  padding:10px 10px;
  border:none;
  background:purple;
  color:white;
  box-shadow: 0px 2px 5px 1px gray;
  cursor:pointer;
} 
.btn:hover{
  transform:scale(0.90);
  opacity:1
}

`