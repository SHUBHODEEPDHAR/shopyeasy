import axios from "axios"
import * as actionTypes from '../constants/constant.js'


const Url="http://localhost:9000"

export const SingleProductAction =(id)=>async(dispatch)=>{
 
    try {
        const {data}= await axios.get(`${Url}/products/get/${id}`)
        dispatch({type:actionTypes.GET_SINGLE_PRODUCT_SUCCESSFULL,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_SINGLE_PRODUCT_ERROR,payload:error.message})
    }
  
}