import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Section1img from '../images/model-s.jpg';
import Section2img from '../images/model-x.jpg';
import Section3img from '../images/model-y.jpg';
import Section4img from '../images/model-3.jpg';
import Section5img from '../images/solar-panel.jpg';
import Section6img from '../images/solar-roof.jpg';
import Section7img from '../images/accessories.jpg';
function Home() {
    return (
        <Container>
         <Section
         id="model-s"
         title="Model S"
         des="Order online For Touchless Delivery "
         backimg={Section1img}
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

         <Section
         id="model-x"
         title="Model X"
         des="Order online For Touchless Delivery "
         backimg={Section2img}
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

         <Section
         id="model-x"
         title="Model Y"
         des="Order online For Touchless Delivery "
         backimg={Section3img}
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

         <Section
         id="model-3"
         title="Model 3"
         des="Order online For Touchless Delivery "
         backimg={Section4img}
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

        <Section
         title="Lowest cost solar panel in America"
         des="Money back  guarantee "
         backimg={Section5img}
         LeftButtontxt="Order Now"
         RightButtontxt="Learn More "
         />

         <Section
          title="Solar For New roofs"
          des="Money back  guarantee "
          backimg={Section6img}
          LeftButtontxt="Order Now"
          RightButtontxt="Learn More "
          />

          <Section
           title="Accessories"
           des=""
           backimg={Section7img}
           LeftButtontxt="Shop Now"
           />
        </Container>
    )
}

export default Home


const Container = styled.div`
   height: 100vh; 

`