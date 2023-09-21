import React from 'react'

import {Button} from '../styles/Button.js'
import styled from 'styled-components'


const Wrapper= styled.div`
.body-text {
  text-align:center;
  height:500px;
  margin-top:100px;

}
h2{
  padding-bottom:20px;
}
Button{
  margin-top:50px;
}
`
export default function Error() {
  return (
    <Wrapper>
<div className="container body-text">
  <h2>404 Error</h2>
  <h2>UH OH! You're lost.</h2>
  <p>The page you are looking for does not exist. How you got here is a mystery. But you can Click the button below to go back to teh homepage.</p>
  <Button>
    Home
  </Button>
</div>
    </Wrapper>
  )
}