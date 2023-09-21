import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import ProductsChart from './ProductsChart'
import Delivery from './Delivery'
import { useSelector } from 'react-redux'
import { CircularProgress, Skeleton } from '@mui/material'

export default function Home() {

  document.body.style.color="purple";
  const {isLoading}=useSelector(state=>state.getProducts)
  return (
<Wrapper>
  {isLoading === true ?
    <Skeleton variant="rectangular" width={210} height={60} />
  :

  <>
<Slider/>
<h1 className='heading'>OUR PRODUCTS</h1>
<ProductsChart/>
<Delivery/>
</>
}
</Wrapper>
  )
}
const Wrapper= styled.div`

.heading{
  position:absolute;
  margin-top:500px;
 width:auto;
 margin-left:465px;

  font-size:35px;
  filter: drop-shadow(-2px 4px 4px gray);
}


}
// @media (max-width:995px){
//   .heading{
//     text-align:center;
//     margin:10px 0px;
//     width:1200px;
//   }
// }
// @media (max-width:995px){
//   .heading{
//     text-align:center;
//     margin-left:20px;
//   }
// }
// @media (max-width:845px){
//   .heading{
//     text-align:center;
//     margin-left:40px;
//   }
// }
@media (max-width:801px){
  .heading{
    position:absolute;
    margin-top:500px;
   width:100%;
   margin-left:500px;
  }
}
// @media (max-width:773px){
//   .heading{
//    margin-left:200px;
//    width:590px
//   }
// }
// @media (max-width:760px){
//   .heading{
//     text-align:center;
//     margin-left:200px;
//     width:580px;
//   }
// }
// @media (max-width:735px){
//   .heading{
//     text-align:center;
//     margin-left:190px;
//     width:560px;
//   }
// }


// @media (max-width:727px){
//   .heading{
//     text-align:center;
//     margin-left:200px;
//     width:450px;
//   }
// }
// @media (max-width:700px){
//   .heading{
//     text-align:center;
//     margin-left:200px;
//   }
// }
// @media (max-width:620px){
//   .heading{
//     text-align:center;
//     margin-left:170px;
   
//   }
// }
// @media (max-width:593px){
//   .heading{
//     text-align:center;
//     margin-left:160px;
//   }
// }
// @media (max-width:575px){
//   .heading{
//     text-align:center;
//     margin-left:200px;
    
//   }
// }
// @media (max-width:565px){
//   .heading{
//     text-align:center;
//     margin-left:200px;
//   }
// }
// @media (max-width:551px){
//   .heading{
//     text-align:center;
//     margin-left:200px;
//   }
// }
// @media (max-width:541px){
//   .heading{
//     text-align:center;
//     margin-left:220px;
//   }
// }
// @media (max-width:460px){
  
//   .heading{
//     text-align:center;
//     width:1220px;
//   }
// }
// @media (max-width:400px){
//   .heading{
//     text-align:center;
//     margin-left:300px;
//   }
// }

// @media (max-width:350px){
//   .heading{
//     text-align:center;
//     margin-left:295px;
//   }
// }
@media (max-width:280px){
  .heading{
    width:400px;
  }
// }
// @media (max-width:286px){
//   .heading{
//     text-align:center;
//     margin-left:295px;
  
//   }
// }
// @media (max-width:260px){
//   .heading{
//     text-align:center;
//     margin-left:295px;

//   }
// }
// @media (max-width:249px){
//   .heading{
//     text-align:center;
//     margin-left:295px;
//     }
// }
// @media (max-width:243px){
//   .heading{
//     text-align:center;
//     margin-left:295px;
    
//   }
// }
// @media (max-width:233px){
//   .heading{
//     text-align:center;
//     margin-left:250px;
    
//   }
// }
`