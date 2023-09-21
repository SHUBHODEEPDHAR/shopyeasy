import React from 'react'
import Carousel from 'react-multi-carousel';
import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css';



export default function SmallSingleProductImage({img1,img2,Product,id}) {


    const responsive = {
 
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      
    }
      
      return(
        <Wrapper>
       <div style={{width:"800px",margin:"40px 200px"}}>
      <Carousel responsive={responsive}  swipeable={false}
      autoPlay={true}
        autoPlaySpeed={10000}
        draggable={false}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .10"
        transitionDuration={10000}
        containerClass="carousel-container"
        id="main-sld"
      
        >
        <div > <img src={img1}  className='img'   alt="img"   onClick={()=>{document.getElementById("sld-img").classList.remove("view");
      }} /></div>
        <div> <img src={img2}  className='img'   alt="img"   onClick={()=>{document.getElementById("sld-img").classList.remove("view");
      }} /></div>
        
      </Carousel>
      </div>
      <div style={{width:"1000px",position:"absolute" }} className="view" id='sld-img'>
      <Carousel responsive={responsive}  swipeable={false}
      autoPlay={true}
        autoPlaySpeed={10000}
        draggable={false}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .10"
        transitionDuration={10000}
        containerClass="carousel-container"
      
        >
        <div > <img src={img1}  className='img2'   alt="img"    onClick={()=>{document.getElementById("sld-img").classList.add("view")}} /></div>
        <div> <img src={img2}  className='img2'   alt="img"    onClick={()=>{document.getElementById("sld-img").classList.add("view")}}/></div>
        
      </Carousel>
      </div>
      
        </Wrapper>
      
      
  )
}
const Wrapper=styled.div`

display:none;
.view{
    display:none
}
.img{
width:800px;
height:750px;
}
.img2{
  width:1000px;
  height:900px;
  }
#sld-img{
  background:#f5f5f5;
  padding:20px;
  margin:-500px 40px;
  height:auto;
  z-index:9999;
  box-shadow:0px 0px 100px 1px black;
}
@media(max-width: 700px){
    display:block

}

`