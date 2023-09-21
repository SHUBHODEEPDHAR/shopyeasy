import React, { useState } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const  LoadingItems =()=> {
  const {isLoading}=useSelector(state=>state.getProducts)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    
    <Wrapper>
      {isLoading === true ?
    <div >
      <LinearProgress variant="determinate" value={progress} />
    </div>
    :
    <div></div>
       }
    </Wrapper>
    
    
 
  );
}

const Wrapper=styled.div`
padding-top:45px;
margin-bottom:-48px;
.view{
  display:none
}
`

export default LoadingItems