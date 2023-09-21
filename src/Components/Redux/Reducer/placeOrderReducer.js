
import * as actionType  from '../constants/placeordercontenst.js'


const initialstate ={
    isLogin:false,
   customerName:"",
   customerAddress:"",
   customerPhonenumber:"",
   customerEmail:"",
   OrderQuantity:0,
   OrderCost:0,
   OrderPrice:0,
   OrderTotalAmount:0,
   OrderDiscount:0,
   ProductImage:""
}
const placeorderReducer =(state =initialstate ,action)=>{
   switch(action.type){
    case actionType.PLACE_ORDER_ADDTOCART:
        let {Product,carts, totalCost,
            totalPrice,
            totalDiscount,
            totalAmount, deliveryCharge}=action.payload 
            return{
                ...state,
                
            }
   }
}