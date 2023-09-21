import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductsAction } from '../Redux/Action/ProductsAction';
import { Box, Input } from '@mui/material';

export default function NavbarSearch() {
  const { Products } = useSelector((state) => state.getProducts);
  const{allProducts}=useSelector(state=>state.getFilterProducts)
  const [searchTerm, setSearchTerm] = useState('');
let products=Products?Products:allProducts?allProducts:Products

const filteredProducts = Array.isArray(products)
? products.filter((element) =>
    element?.longName?.toLowerCase().includes(searchTerm.toLowerCase())
  )
: [];
  return (
    <Wrapper>
      <Input
        type="text"
        name="search"
        className="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if(e.target.value === ""){
          document.getElementById("pro-search").classList.add("view")
          }
          else{
            document.getElementById("pro-search").classList.remove("view")
          }
        }}
      />
      <Box className="search view" id="pro-search">

        { filteredProducts &&
          filteredProducts.map((product) => (
            <Link to={`/${product.id}`} key={product.id} style={{textDecoration:"none"}}>
              <ul>
                <li onClick={()=>{document.getElementById("pro-search").classList.add("view")}}>{product.name}</li >
              </ul>
            </Link>
          ))}
      </Box>
     
    </Wrapper>
  );
}


  const Wrapper= styled.div`
 position:absolute;
 margin-left:-500px;
 width:auto;
 margin-top:7px;
.text{
  padding:4px 10px;
  background:#f5f5f5;
  height:30px;
  width:324px;
  border-radius:5px;
}
.search{
  background:#f5f5f5;
  margin-left:1px;
  height:auto;
  border-radius:5px;
  margin-top:10px;
  padding:20px 10px;
  box-shadow :0px 5px 10px 1px gray;
  width:305px;
  list-style-type:none;
  

}
li{
  list-style-type:none;
  color:purple;
  text-align:left;
  margin-left:-10px;
  opacity:0.7;
}
li:hover{
  color:black;
  opacity:1
  font-weight:bold;
}
.view{
  display:none;
}
// @media(max-width:1200px){
//   margin-left:-510px;
// }
// @media(max-width:1100px){
//   margin-left:-380px;
// }
// @media(max-width:965px){
//   margin-left:-280px;
//   .text{
//     padding:4px 10px;
//     width:250px;
//   }
// }
// @media(max-width:800px){
//   margin-left:-180px;
//   .text{
//     padding:4px 10px;
//     width:250px;
//   }
// }
// @media(max-width:628px){
//   margin-left:-230px;
//   .text{
//     padding:4px 10px;
//     width:220px;
//   }
// }
// @media(max-width:580px){
//   margin-left:-140px;
//   .text{
//     padding:4px 10px;
//     width:220px;
//   }
// }
// @media(max-width:518px){

//   margin-left:-150px;
//   .text{
//     padding:4px 10px;
//     width:210px;
//   }
// }
  `

//   import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function NavbarSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//   };

//   const handleSearch = () => {
//     // Perform your search logic here.
//     // You can filter your data based on the searchTerm and update searchResults.
//     // For now, let's assume searchResults is an array of matching items.
    
//     // Example search logic:
//     // Assuming you have an array of products in your state.
//     // Replace 'products' with your actual data source.
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setSearchResults(filteredProducts);
//   };

//   return (
//     <Wrapper>
//       <input
//         type="text"
//         name="search"
//         className="text"
//         placeholder="Search here"
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {searchResults.length > 0 && (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>{result.name}</li>
//           ))}
//         </ul>
//       )}
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   position: absolute;
//   margin-left: -555px;
//   margin-top: 12px;

//   .text {
//     padding: 4px 10px;
//     width: 300px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//   }
// `;
