import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import AllproductsFilter from '../Filter/AllproductsFilter';
import ProductsHeader from '../Header/ProductsHeader';
import { Link } from 'react-router-dom';
import OFAF from '../../images/OFAF.gif';




export default function AllProducts() {
  document.body.style.color="purple";
  const { FilterProducts, allProducts} = useSelector(state => state.getFilterProducts);

  let products = FilterProducts === undefined ? allProducts : FilterProducts
  // setTimeout(() => {
  //   if(products === undefined){
  //     window.location.replace('http://localhost:3000/error');
  //    }
  // },10000);
 
  return (
    <Wrapper>

      <div className="container">
        <div className="left" style={{width:"0px"}}>
          <div className="filter-container">
            <AllproductsFilter  />

          </div>
        </div>
        <div className="right">
          <div className="header">
            <ProductsHeader />
          </div>
          <hr style={{ width: "1210px", position: "absolute",  }} />
          <div className="body" style={{marginLeft:"260px",textAlign:"center",justifyContent:"center",padding:"20px"}}>
            
           {products === undefined?
            <div className="list-container" id='list_view' style={{width:"700px"}}>
               <img src={OFAF} alt="Loading...."/>
               <p style={{position:"absolute",marginTop:"-70px",marginLeft:"300px",fontSize:"20px",fontWeight:"bold"}}>Loading...</p>
              </div>
              :

            <div className="list-container" id='list_view' style={{width:"700px"}}>

              {
                products && products.map((element, index) => (

                  <Link to={`/${element.id}`} key={index} style={{ textDecoration: "none" }}>
                    <div className="list" key={index} style={{ backgroundColor:"#f5f5f5"}}>
                      <img src={element.image.small1} alt='img' className='list-img' />
                      <div className="details">
                        <p className='name' style={{ color: "black" }}>{element.name}</p>
                        <del className='cost'>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(element.cost)}</del>
                        <span className='price' >{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(element.price)}</span> <span style={{color:"green",fontSize:"16px",display:"table-caption",margin:"10px 0px 0px -40px"}}>{element.discount}</span>
                        <form >
                          <ul className='ul'>
                            <li className='li'>{element.frontDetails}</li>
                          </ul>
                        </form>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
}
            <div className="grid-product view" id='grid_view' >
              <div className="grid-container " style={{ display: "grid", margin:"20px -80px",}}>
                {products && products.map((product, index) => (
                  <Link to={`/${product.id}`} key={index} style={{ textDecoration: "none", }}>
                    <div className="grid items"  >
                      <img src={product.image.small1} alt='img' className='img' />
                      <div className="details">
                        <del>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(product.cost)}</del>
                        <div style={{ fontWeight: "bold", }}>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumSignificantDigits: 2 }).format(product.price)} <span style={{color:"green",fontSize:"12px"}}>{product.discount}</span></div>
                        
                        <p>{product.name.slice(0,37)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
padding-bottom:100px;
margin-left:10px;
.container{
height:auto;
  display:flex;
  padding-top:50px;
  
}


.header{
  display:flex;
  text-align:center;

}


.list{
  display:flex;
  margin-top:50px;
  box-shadow:0px 5px 10px 1px  gray;
  padding:10px 30px;
  border-radius:10px;
  
}
.list-img{
  width:150px;
  height:170px;
  margin-top:15px;
   border-radius:15px;
}
.li{
  display: table-caption;
  width: 280px;
  color:black;
  opacity:0.8;
  text-align:left;
  
}
.name{
  text-align:left;
  margin-left:40px;
  font-weight:bold;
}
.cost{
  display: table-caption;
  position:absolute;
  margin-left:40px;
  text-align:left;
  font-width:bold;
  opacity:0.7;
  color:gray;
  
}
.price{
  display: table-caption;
  text-align:left;
  margin-left:120px;
  font-weight:bold;
  opacity:1;
  font-weight:bold;
  color:black;
}
.view{
  display:none;
}
.grid-container{
  grid-template-columns : auto auto;
  margin-top:80px;
  width:"200px"
}
.items{
  display:block;
}
.grid{
  background:#ececfc;
  width:65%;
  height:230px;
  padding:20px 20px;
  margin: 20px 50px;
  border-radius:20px;
  text-align:center;
  margin-bottom:100px;
   box-shadow:0px 5px 10px 1px gray;
 }
 .img{
  width:120px;
  height:130px;
  border-radius:10px;
 }
 
`