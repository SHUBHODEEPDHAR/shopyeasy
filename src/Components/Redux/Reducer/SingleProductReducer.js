import * as actionTypes from '../constants/constant.js'

const initialstate={
    SingleProduct:{},
    isError:true,
}


export const SingleProductReducer=(state=initialstate,action)=>{
    switch(action.type){
        case actionTypes.GET_SINGLE_PRODUCT_SUCCESSFULL:
            return{
                ...state,
                SingleProduct:action.payload
            }
         case actionTypes.GET_SINGLE_PRODUCT_ERROR:
            return{
                ...state,
                SingleProduct:[...state.SingleProduct,action.payload],
                isError:false,
            }   
        default:
            return{
             state,
             isError:false,
        }
    }

}