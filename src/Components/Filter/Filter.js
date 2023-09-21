import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProductContext } from '../Context/ProductContext'
import { useDispatch, useSelector } from 'react-redux';
import { FilterOptionAction } from '../Redux/Action/FilterAction';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


export default function Filter() {
  const {setOptions,options}=useProductContext();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(FilterOptionAction(options))
  },[dispatch,options])
  // console.log("🚀 ~ file: Filter.js:13 ~ Filter ~ options:", options)
  const {FilterProducts}=useSelector(state=>state.getFilterProducts)
  // console.log("🚀 ~ file: Filter.js:15 ~ Filter ~ FilterProducts:", FilterProducts)
  return (
  <Wrapper>
    <div className="filter">
<FilterAltIcon id="filter-icon" onClick={()=>{document.getElementById("filter-items").classList.toggle("view")}}/>
<select className='total-opt view'id="filter-items"  onChange={(event)=>{setOptions(event.target.value);
setTimeout(() => {
  document.getElementById("filter-items").classList.toggle("view")
},1000);}}> 
<option  className='opt' value="lowest" >lowest</option>
<option className='opt' value="Highest" > Highest</option>
<option  className='opt' value="A to Z" >A to Z</option>
<option  className='opt' value={"Z to A" }>Z to A</option>
        </select>
   
        </div>
  </Wrapper>
  )
}
const Wrapper=styled.div`
align-items:right;
justify-content:right;
.total-opt{
    justify-content:right;
    margin-left:160px;
    margin-top:26px;
    cursor:pointer;
    position:absolute;
    margin-right:50px;
}
.view{
  display:none
}
.filter{
  justify-content:center;
  text-align:center;
  margin:20px 20xpx;
}
#filter-icon{
  justify-content:center;
  text-align:center;
  positon:absolute;
  margin: 4px -201px 0px 171px;
}
`