import * as actionType  from '../constants/placeordercontenst.js'




export const placeorderAction=(Product,carts, totalCost,
    totalPrice,
    totalDiscount,
    totalAmount, deliveryCharge)=>(dispatch)=>{
    try {
        dispatch({type:actionType.PLACE_ORDER_ADDTOCART,payload:{Product,carts, totalCost,
            totalPrice,
            totalDiscount,
            totalAmount, deliveryCharge}})
    } catch (error) {
        dispatch({type:actionType.PLACE_ORDER_ERROR,payload:error.message})
    }
}