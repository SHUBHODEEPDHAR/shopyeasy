import axios from "axios";
import * as actionTypes from "../constants/constant.js"



const url="http://localhost:9000";

export const ProductsAction=()=>async(dispatch)=>{
   
    try {
        const {data}= await axios.get(`${url}/products`);
        dispatch({type:actionTypes.GET_PRODUCTS, payload:data});
     
        
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCTS_ERROR,payload:error.message})
    }
}

