// import  React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { useDispatch } from 'react-redux';
// import { FilterAction } from '../Redux/Action/FilterAction';
// import { useProductContext } from '../Context/ProductContext';


// // export default function PriceFilter({product}) {
// // const {priceValue,setPriceValue}=useProductContext();
// //     const dispatch= useDispatch();
// //     useEffect(()=>{
// //       dispatch(FilterAction(priceValue));
// //     },[dispatch,priceValue])
    

//    let val= product && product.map(e=>e.price)
//   let newMax =Math.max.apply(null,val)
//    console.log(val)
//    let newMin =Math.min.apply(null,val)
//   console.log(priceValue)
//   //  console.log(val.reduce((a,b)=>Math.max(a,b,0)))

//     return (
//       <Box sx={{ width: 300 }}>
//      <Slider
//   aria-label="Temperature"
//   defaultValue={newMin}
//   min={newMin}
//   step={1}
//   max={newMax}
//   valueLabelDisplay="on"
//   color="secondary"
//   onChange={(e)=>{setPriceValue(e.target.value);console.log(e.target.value)}}
// />
//       </Box>
//     );
// }
