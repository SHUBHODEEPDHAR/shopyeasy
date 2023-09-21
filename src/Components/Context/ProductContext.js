import { createContext, useContext, useState } from "react";




export const ProductsContext=createContext();


export const ProductContextProvider=({children})=>{
    const [text,setText]=useState("");
    const [options,setOptions]=useState("");
    const [brand,setBrand]=useState('');
    const [type,setType]=useState("");
    const [colors,setColors]=useState("");
    const [clear,setClear]=useState("");
    const [imgs,setImgs]=useState("");
    const [bigimg,setBigimg]=useState("");
    const [cart,setCart]=useState("");
    const [remove,setRemove]=useState("");
    const [newlist,setNewList]=useState("");
    const [clearall,setClearall]=useState("");
    const [increse,setIncrese]=useState("");
    const [decrise,setDecrise]=useState("");
    const [cartqty,setCartqty]=useState(0)
    const [products,setProducts]=useState("");
    const [priceValue,setPriceValue]=useState(0)
    const [qty,setQty]=useState(1);
    const [item,setItem]=useState(0);
    const [credential, setCredential]=useState({username:"",password:""})
    const [singupnewuser,setSignupnewuser]=useState({first_name:"",last_name:"",username:"",email:"",password:""})
    const [handleOrder,setHandleOrder]=useState("");
    const [uservalue,setUservalue]=useState("");
    const [loginUser,setLoginUser]=useState("");
    const [details,setDetails]=useState("")
return(
    <ProductsContext.Provider value={{text,setText,options,setOptions,type,setType,colors,setColors,brand,setBrand,clear,setClear,imgs,setImgs,bigimg,setBigimg,cart,setCart,remove,setRemove,newlist,setNewList,clearall,setClearall,increse,setIncrese,decrise,setDecrise,products,setProducts,qty,setQty,item,setItem,credential, setCredential,singupnewuser,setSignupnewuser,priceValue,setPriceValue,cartqty,setCartqty,handleOrder,setHandleOrder,uservalue,setUservalue,loginUser,setLoginUser,details,setDetails}}>
        {children}
    </ProductsContext.Provider>
)
}

//custome Hook
export const useProductContext=()=>{
    return useContext(ProductsContext);
}