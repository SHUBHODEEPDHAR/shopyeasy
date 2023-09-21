
import * as actionTypes from '../constants/constant.js'
const initialstate = {
    allProducts: [],
    FilterProducts: [],
    isLoading:false,
    isError:true,

}



export const FilterReducer = (state = initialstate, action) => {

    switch (action.type) {
        case actionTypes.GET_FILTER_PRODUCT_LOADING:
            return {
                ...state,
                allProducts: [...action.payload],
                FilterProducts: [...action.payload],
                SelectedProduct: [...action.payload],
                isError:false,
            }
        case actionTypes.GET_FILTER_INPUT:
            return {
                ...state,
                allProducts: [...action.payload],
                FilterProducts: [...action.payload],
                SelectedProduct: [...action.payload],
                isLoading:false,
                isError:false,
            }
        case actionTypes.GET_FILTER_PRODUCT:
            let { text, brand, type, colors, clear,priceValue} = action.payload
            let { allProducts } = state;
            let newproduct = "";
         
           
            
            if (text !== undefined ) {
                newproduct = [...allProducts].filter(products => products.name.toLowerCase().includes(text)) 
              
            }
        
           if (type) {
                newproduct = [...allProducts].filter(products => products.type.includes(type))
            }
           if (brand) {
                newproduct = [...allProducts].filter(products => products.Brand.includes(brand))

            }
            if (colors) {
                newproduct = [...allProducts].filter(products => products.color.includes(colors))

            }
         
            if (clear) {
                newproduct = window.location.reload()
            }
            if (priceValue){
                newproduct = [...allProducts].filter(product=>product.price <= priceValue)
            }
            return {
                ...state,
                FilterProducts: newproduct ? newproduct : [...allProducts],
                isLoading:false,
                isError:false,
                    
            }


        case actionTypes.GET_FILTER_PRODUCT_OPTION:
            let { FilterProducts } = state;

            let tempData = [...FilterProducts];

            if (action.payload === "lowest") {
                tempData.sort((a, b) => a.price - b.price)
            }
            if (action.payload === "Highest") {
                tempData.sort((a, b) => b.price - a.price)
            }
            if (action.payload === "A to Z") {
                tempData.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === "Z to A") {
                tempData.sort((a, b) => b.name.localeCompare(a.name))
            }
            return {
                ...state,
                FilterProducts: tempData,
                isLoading:false,
                isError:false,

            }


        default:
            return {
                state
            }
    }
}