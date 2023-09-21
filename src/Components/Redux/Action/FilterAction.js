
import axios from 'axios';

import * as actionTypes from '../constants/constant.js'


const Url ="http://localhost:9000"
export const FilterAction=(text,brand,type,colors,clear,priceValue)=>async(dispatch)=>{
    
    const {data}= await axios.get(`${Url}/products`);
    dispatch({type:actionTypes.GET_FILTER_PRODUCT_LOADING,payload:data})
    try {
        dispatch({type:actionTypes.GET_FILTER_INPUT,payload:data})
        dispatch({type:actionTypes.GET_FILTER_PRODUCT,payload:{text,brand,colors,type,clear,priceValue}})
    } catch (error) {
        dispatch({type:actionTypes.GET_FILTER_PRODUCT_ERROR,payload:error.message})
    }
}

export const FilterOptionAction = (options)=>(dispatch)=>{
    try {
      
        dispatch({type:actionTypes.GET_FILTER_PRODUCT_OPTION,payload:options})
    } catch (error) {
        dispatch({type:actionTypes.GET_FILTER_PRODUCT_OPTION_ERROR,payload:error.message})
    }
}

export const FilterList = (brand,type,colors)=>(dispatch)=>{
    try {
      
        dispatch({type:actionTypes.GET_FILTER_PRODUCT_LIST,payload:{brand,type,colors}})
    } catch (error) {
        dispatch({type:actionTypes.GET_FILTER_PRODUCT_LIST_ERROR,payload:error.message})
    }
}
