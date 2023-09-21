import React from 'react'
import styled from 'styled-components';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SecurityIcon from '@mui/icons-material/Security';
import StoreIcon from '@mui/icons-material/Store';
export default function Delivery() {
  return (
   <Wrapper>
<div className="container" style={{display:"grid"}}>
  <div className="grid row1">
    <LocalShippingIcon  className='icons'/>
  <p>7 days return gurentee</p>
  </div>
  <div className="middlecontainer">
    <div className="gridmiddle row2">
    <Inventory2Icon className='icons'/>
      <p>Free Delivery</p>
    </div>
    <div className="gridmiddle row3">
    <SecurityIcon className='icons'/>
    <p>Secure Dilivery</p>
    </div>
  </div>
  <div className="grid row4" >
  <StoreIcon className='icons '/>
<p>Cash on Delivery</p>
  </div>
</div>
   </Wrapper>
  )
}
const Wrapper =styled.div`
width:100%;

.container{
  display:grid;
  grid-template-columns: auto auto auto;
  align-items:center;
  justify-content:center;
  text align:center;
  width:1100px;
  margin:0px 70px;
}
.grid{
background:#ced1e5;
width:250px;
height:80px;
padding:75px 15px;
margin:10px 0px;
text-align: center;
font-size:18px;
font-weight:bold;
color:#696969;
border-radius:15px;
padding-top:50px;
box-shadow:0px 4px 8px 1px gray;
}
.gridmiddle{
  background:rgb(220 218 227);
  padding:20px 95px;
  margin:10px 30px;
  padding-bottom:8px;
  text-align: center;
  border-radius:15px;
  font-weight:bold;
    color:#696969;
    text-align:center;
    box-shadow:0px 2px 5px 1px gray;
}
.middlecontainer{
  align-items:center;
  justify-content:center;
  text align:center;


}
.icons{
  font-size:50px;
  color:purple;
}


@media (max-width:1071px){
  width:1030px;
  .container{
    display:grid;
    grid-template-columns: auto auto auto;
    align-items:center;
    justify-content:center;
    text align:center;
   
  }
  .grid{
    background:#ced1e5;
    width:250px;
    height:80px;
    padding:75px 15px;
    margin:10px -50px;
    text-align: center;
    font-size:18px;
    font-weight:bold;
    color:#696969;
    border-radius:15px;
    padding-top:50px;
    box-shadow:0px 4px 8px 1px gray;
    }
    .gridmiddle{
      background:rgb(220 218 227);
      padding:20px 95px;
      margin:10px 80px;
      padding-bottom:8px;
      text-align: center;
      border-radius:15px;
      font-weight:bold;
        color:#696969;
        text-align:center;
        box-shadow:0px 2px 5px 1px gray;
    }
}
@media (max-width:995px){
  
  .container{
    display:grid;
    grid-template-columns: auto auto auto;
    align-items:center;
    justify-content:center;
    text align:center;
    width:1060px;
  }
  .grid{
    background:#ced1e5;
    width:250px;
    height:80px;
    padding:75px 15px;
    margin:10px -50px;
    text-align: center;
    font-size:18px;
    font-weight:bold;
    color:#696969;
    border-radius:15px;
    padding-top:50px;
    box-shadow:0px 4px 8px 1px gray;
    }
    .gridmiddle{
      background:rgb(220 218 227);
      padding:20px 95px;
      margin:10px 80px;
      padding-bottom:8px;
      text-align: center;
      border-radius:15px;
      font-weight:bold;
        color:#696969;
        text-align:center;
        box-shadow:0px 2px 5px 1px gray;
    }
}
// @media (max-width:936px){
//   .container{
//     display:grid;
//     grid-template-columns: auto auto auto;
//     align-items:center;
//     justify-content:center;
//     text align:center;
//     margin-left:20px;
//   }
//   .grid{
//     background:#ced1e5;
//     width:220px;
//     height:80px;
//     padding:75px 10px;
//     margin:10px -50px;
//     text-align: center;
//     font-size:18px;
//     font-weight:bold;
//     color:#696969;
//     border-radius:15px;
//     padding-top:50px;
//     box-shadow:0px 4px 8px 1px gray;
//     }
//     .gridmiddle{
//       background:rgb(220 218 227);
//       padding:20px 50px;
//       margin:10px 80px;
//       padding-bottom:8px;
//       text-align: center;
//       border-radius:15px;
//       font-weight:bold;
//         color:#696969;
//         text-align:center;
//         box-shadow:0px 2px 5px 1px gray;
//     }
// }
//  @media (max-width:850px){
//   .container{
//    margin-left:80px;
//   }
//   .grid{
//     background:#ced1e5;
//     width:250px;
//     height:80px;
//     padding:75px 0px;
//     margin:10px -50px;
//     text-align: center;
//     font-size:18px;
//     font-weight:bold;
//     color:#696969;
//     border-radius:15px;
//     padding-top:50px;
//     box-shadow:0px 4px 8px 1px gray;
//     }
//     .gridmiddle{
//       background:rgb(220 218 227);
//       padding:20px 50px;
//       margin:10px 80px;
//       padding-bottom:8px;
//       text-align: center;
//       border-radius:15px;
//       font-weight:bold;
//         color:#696969;
//         text-align:center;
//         box-shadow:0px 2px 5px 1px gray;
//     }
//  }
//  @media (max-width:801px){
//   .container{
//    margin-left:140px;
//   }
//   .grid{
//     background:#ced1e5;
//     width:250px;
//     height:80px;
//     padding:75px 0px;
//     margin:10px -50px;
//     text-align: center;
//     font-size:18px;
//     font-weight:bold;
//     color:#696969;
//     border-radius:15px;
//     padding-top:50px;
//     box-shadow:0px 4px 8px 1px gray;
//     }
//     .gridmiddle{
//       background:rgb(220 218 227);
//       padding:20px 70px;
//       margin:10px 80px;
//       padding-bottom:8px;
//       text-align: center;
//       border-radius:15px;
//       font-weight:bold;
//         color:#696969;
//         text-align:center;
//         box-shadow:0px 2px 5px 1px gray;
//     }
//  }

// @media (max-width:727px){
//   .container{
//    margin-left:180px;
//   }
//   @media (max-width:647px){
//     .container{
//      margin-left:150px;
//     }
//     @media (max-width:637px){
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
//       }
//       .grid{
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 0px;
//         margin:10px -50px;
//         text-align: center;
//         font-size:18px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .gridmiddle{
//           background:rgb(220 218 227);
//           padding:20px 50px;
//           margin:10px 80px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
    
//     }
  
//     @media (max-width:565px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:-142px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:-140px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
   
//     @media (max-width:541px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:-134px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:-134px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
//     @media (max-width:530px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:58px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:60px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:-130px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:-132px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
    
    
//     @media (max-width:518px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:58px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:60px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:-120px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:-120px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
//     @media (max-width:490px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:58px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:60px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:-100px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:-100px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
   
    
//     }
    @media (max-width:460px){
      margin-top:30px;
      height:800px;

      .row1{
        position:absolute;
        background:#ced1e5;
        width:800px;
        height:80px;
        padding:75px 50px;
        margin-top:180px;
        margin-left:100px;
        text-align: center;
        font-size:20px;
        font-weight:bold;
        color:#696969;
        border-radius:15px;
        padding-top:50px;
        box-shadow:0px 4px 8px 1px gray;
        }
        .row4{
          position:absolute;
          background:#ced1e5;
          width:800px;
          height:80px;
          margin-left:100px;
          padding:75px 60px;
          margin-top:1350px;
          text-align: center;
          font-size:18px;
          font-weight:bold;
          color:#696969;
          border-radius:15px;
          padding-top:50px;
          box-shadow:0px 4px 8px 1px gray;
          }
        .row3{
          position:absolute;
          background:rgb(220 218 227);
          padding:20px 60px;
          margin:210px  -270px;
          width:500px;
          margin-top:380px;
          padding-bottom:8px;
          text-align: center;
          border-radius:15px;
          font-weight:bold;
            color:#696969;
            text-align:center;
            box-shadow:0px 2px 5px 1px gray;
        }
        .row2{
          position:absolute;
          background:rgb(220 218 227);
          padding:20px  60px;
          margin:210px  -270px;
          width:500px;
          padding-bottom:8px;
          text-align: center;
          border-radius:15px;
          font-weight:bold;
            color:#696969;
            text-align:center;
            box-shadow:0px 2px 5px 1px gray;
        }
    
    }

//     @media (max-width:400px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:120px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:122px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:0px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:0px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
    
//     @media (max-width:330px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:100px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:102px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:15px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:15px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
//     @media (max-width:275px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:75px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:77px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left: 20px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:20px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }

//     @media (max-width:220px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  48px;
//         margin-top:230px;
//         margin-left:60px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:50px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left: 26px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:26px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
//     @media (max-width:195px){
//       height:800px;
//       .container{
//        margin:20px 0px;
//        margin-left:160px;
       
//       }
//       .row1{
//         position:absolute;
//         background:#ced1e5;
//         width:250px;
//         height:80px;
//         padding:75px 120px;
//         margin:50px  60px;
//         margin-top:230px;
//         margin-left:30px;
//         text-align: center;
//         font-size:20px;
//         font-weight:bold;
//         color:#696969;
//         border-radius:15px;
//         padding-top:50px;
//         box-shadow:0px 4px 8px 1px gray;
//         }
//         .row4{
//           position:absolute;
//           background:#ced1e5;
//           width:250px;
//           height:80px;
//           padding:75px 120px;
//           margin:50px  60px;
//           margin-top:1350px;
//           margin-left:32px;
//           text-align: center;
//           font-size:18px;
//           font-weight:bold;
//           color:#696969;
//           border-radius:15px;
//           padding-top:50px;
//           box-shadow:0px 4px 8px 1px gray;
//           }
//         .row3{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 215px;
//           margin:210px 0px;
//           margin-left:20px;
//           margin-top:380px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
//         .row2{
//           position:absolute;
//           background:rgb(220 218 227);
//           padding:20px 210px;
//           margin:210px 0px;
//           margin-left:20px;
//           padding-bottom:8px;
//           text-align: center;
//           border-radius:15px;
//           font-weight:bold;
//             color:#696969;
//             text-align:center;
//             box-shadow:0px 2px 5px 1px gray;
//         }
    
//     }
`