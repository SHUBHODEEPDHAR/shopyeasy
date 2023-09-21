
import * as actionTypes from '../constants/constantcart.js'




export const AddtocartAction=(cart,item)=>(dispatch)=>{

    //  dispatch({type:actionTypes.GET_ADD_TO_CART_LOADING})
    try {
        dispatch({type:actionTypes.ADD_TO_CART,payload:{cart,item
          
          }})
    } catch (error) {
       dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error.message})
    }
}
 
export const RemovecartAction=(remove)=>(dispatch)=>{
    try {
        dispatch({type:actionTypes.REMOVE_TO_CART,payload:remove})
    } catch (error) {
        dispatch({type:actionTypes.REMOVE_FROM_CART_ERROR,payload:error.message})
    }
       
       
}

export const ClearallAction =(remove)=>(dispatch)=>{
   try {
    dispatch({type:actionTypes.CLEAR_ALL,payload:remove})
   } catch (error) {
    dispatch({type:actionTypes.CLEAR_ALL_ERROR})
   }
} 
export const TotalqtyAction=()=>(dispatch)=>{
    dispatch({type:actionTypes.TOTAL_QTY})
}
export const caritemsAction=()=>(dispatch)=>{
    dispatch({type:actionTypes.CART_ITEM})
}
export const decreaseAction=()=>(dispatch)=>{
    dispatch({type:actionTypes.DECRESE})
}
export const increseAction=()=>(dispatch)=>{
    dispatch({type:actionTypes.INCRESE})
}
export const totalPriceAction =(ProductPrice,ProductCost,ProductDiscount)=>(dispatch)=>{
    dispatch({type:actionTypes.PRICE_VALUE,payload:{ProductPrice,ProductCost,ProductDiscount}})
}