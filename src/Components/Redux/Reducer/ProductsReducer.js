
import *as actionTypes from "../constants/constant.js"


const initialstate={
    Products:[],
    FilterProduct:[],
    Featured:[],
    Mobile:[],
    Laptop:[],
    Tshirt:[],
    isLoading:false,
    isError:false,
   
    
}

export const ProductsReducer=(state=initialstate,action)=>{

 
  switch(action.type){
    case actionTypes.GET_PRODUCTS:
        const dataset = [...action.payload];
        const newProduct = dataset.filter(element=> element.featured === true);
        const mobileProduct= dataset.filter(element=> element.type === "Mobile");
        const tshirtProduct= dataset.filter(element=> element.type === "t-shirt");
        const laptopProduct= dataset.filter(element=> element.type === "Laptop");
        return {
        ...state,
        Products:[...action.payload],
        Featured:newProduct,
        Mobile:mobileProduct,
        Tshirt:tshirtProduct,
        Laptop:laptopProduct,
        GetProducts:[...action.payload]
        }
 
    case actionTypes.GET_PRODUCTS_ERROR:
        return{
            ...state,
            Products:action.payload,
            isLoading:false,
        }  
    
     default:
        return{
            state
        }    
  }
}