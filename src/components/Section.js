import React from 'react'
import styled from "styled-components"
import {Fade} from 'react-reveal';

import arrowdown from '../images/down-arrow.svg';
// background-image: ${props => `url("/images/${props.bgimg}")`}

function Section(props) {
    return (
        <Wrap bgimg={props.backimg}>
          <Fade bottom>
           <ItemText>
               <h1>{props.title}</h1>
               <p>{props.des}</p>
           </ItemText>
               </Fade>
           <Buttons> 
           <Fade bottom> 
           <ButtounGroup>
               <LeftButton>
               {props.LeftButtontxt}
               </LeftButton>
               {props.RightButtontxt &&
               <RightButton>
               {props.RightButtontxt}                
               </RightButton>}
          {/* it means if right button exist then execute it else don't */}
           
           </ButtounGroup>
           <ArrowDown src={arrowdown} />
              </Fade>
           </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
   height: 100vh; 
   width: 100vw;
   background-size: cover;
   background-position : center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   background-image: ${props => `url("${props.bgimg}")`}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p{
    text-decoration: underline;
    text-decoration-thickness: from-font;
  }

`
const ButtounGroup = styled.div`
 display: flex;
 margin-bottom: 30px;
 @media (max-width:768px){
    flex-direction: column;
   }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px; 
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
//getting inherited from left button 
const RightButton = styled(LeftButton)`  
 background: white;
  opacity: 0.65;
  color: black;
`

const ArrowDown = styled.img`  
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`  


`