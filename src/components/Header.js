import React, {useState} from 'react'
import styled from "styled-components"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import {selectCars} from '../features/car/carSlice';
// import {useSelector} from 'react-redux';

function Header(props) {
     const [sidebarStatus, setSidebarStatus] = useState(false);
    //  const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src='/images/logo.svg'/>
            </a>
            <Menu>
               <a href='#Section'>Model S</a>
               <a href='#Section'>Model X</a>
               <a href='#Section'>Model Y</a>
               <a href='#Section'>Model 3</a>
               <a href='#Section'>Accessories</a>
            </Menu>
            <Rightmenu>
               <a href='#'>Shop</a>
               <a href='#'>Tesla acc</a>
                <Custommenu onClick={()=> setSidebarStatus(true)}/>
            </Rightmenu>
            <Burg show={sidebarStatus}>
                <Wrapper>  
                  <Close_icon onClick={()=> setSidebarStatus(false)}/>
                </Wrapper>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>
             <li> <a href='#Section'>Model S</a></li>

            </Burg>

        </Container>
    )
}

export default Header

const Container = styled.div`
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   top: 0;
   left:0;
   right:0;
   z-index: 1;

`
const Menu = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;

   a{
       font-weight: 700;
       text-transform: uppercase;
       padding: 0 10px;
       flex-wrap: nowrap;
       cursor: pointer;

   }

   @media (max-width:768px){
    display: none;
   }

`
const Rightmenu = styled.div`

display: flex;
align-items: center;
   a{
       font-weight: 600;
       text-transform: uppercase;
       margin-right: 10px;
       flex-wrap: nowrap;

   }

`
const Custommenu = styled(MenuOpenIcon)`
   cursor: pointer;

`

const Burg = styled.div`

   position: fixed;
   background: white;
   padding: 20px;
   list-style: none;
   width: 300px;
   text-align: left;
   top: 0;
   bottom:0;
   right:0;
   z-index: 1;
   transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
   transition : transform 0.5s ease-in-out;
   li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0 ,0 ,0 , 0.2);
       
       a{
        font-weight: 600;
 
    }
   
    }
`
const Close_icon = styled(HighlightOffIcon)`
   cursor: pointer;
 

`

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`


















