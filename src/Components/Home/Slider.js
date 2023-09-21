import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Slider() {
  const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 700 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 700, min: 300 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1
  }
};

return(
  <Wrapper>
    <div className="container" >
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
  <div> <img src={img1}  className='img'   alt="img" /></div>
  <div> <img src={img2}  className='img'   alt="img" /></div>
  <div> <img src={img3}  className='img'   alt="img" /></div>
  
</Carousel>
</div>
  </Wrapper>
)


}

 const Wrapper =styled.div`
 position:absolute;
 margin-top:26px;
 width:100%;
 


// .container{
//   width:100%;
  
// }
.img{
  width:1321px;
  height:450px;
}
@media(max-width:1170px){
  width:1321px
}
@media(max-width:995px){
  width:1321px
}
`

