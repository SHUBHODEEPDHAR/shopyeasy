import React from 'react'
import styled from 'styled-components';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import AppsIcon from '@mui/icons-material/Apps';
import SubjectIcon from '@mui/icons-material/Subject';

export default function ProductsHeader() {
  const { Products } = useSelector(state => state.getProducts);
  // console.log("🚀 ~ file: AllProducts.js:13 ~ AllProducts ~ Products:", Products)
  const { FilterProducts, allProducts } = useSelector(state => state.getFilterProducts)
  // console.log("🚀 ~ file: AllProducts.js:14 ~ AllProducts ~ FilterProducts:", FilterProducts)

  let products = FilterProducts === undefined ? allProducts : FilterProducts
  //  console.log("🚀 ~ file: AllProducts.js:25 ~ AllProducts ~ products:", products)
  return (
    <Wrapper>
      <div className="container">
        <div className="button">
          <button className='btn grid-btn ' onClick={() => {
            document.getElementById("grid_view").classList.remove("view");
            document.getElementById("list_view").classList.add("view")
          }}><AppsIcon /></button>
          <button className='btn list-btn ' onClick={() => {
            document.getElementById("list_view").classList.remove("view");
            document.getElementById("grid_view").classList.add("view")
          }}><SubjectIcon /></button>
        </div>
        {products && Object.keys(products).length &&
          products.length !== 0 ?
          <p className="product-list">
            {`Number of Products ${products.length}`}
          </p>
          :
          <p className="product-list">
            {`Number of Products 0`}
          </p>
        }
        <div className="filter">
          <Filter />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.button{
  width:480px;
  margin-left:20px;
   
  }
  .btn{
    margin:5px 5px;
    border:none;
    border-radius:5px;
    background:purple;
    color:white;
    box-shadow:0px 3px 5px 1px gray;
    
  }
  .product-list{
    width:300px;
    text align :left;
    justify-content:center;
    font-size:24px;
    font-weight:bold;
     margin-top:5px;
  }
  .filter{
    position:absolute;
    margin:1px 400px;
  }
  
`