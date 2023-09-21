import thunk from "redux-thunk";
import { applyMiddleware, combineReducers} from "redux"
import { ProductsReducer } from "../Reducer/ProductsReducer";
import { FilterReducer } from "../Reducer/FilterReducer";
import { SingleProductReducer } from "../Reducer/SingleProductReducer";
import { cartReducer } from "../Reducer/AddtocartReducer.js";


const { createStore } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");


const reducer= combineReducers({
    getProducts : ProductsReducer,
    getFilterProducts: FilterReducer,
    getSingleProduct : SingleProductReducer,
    getAddtoCart: cartReducer,
})


const middleware=[thunk]

export const store=createStore(reducer,composeWithDevTools(
    applyMiddleware(...middleware)
))



export default store;