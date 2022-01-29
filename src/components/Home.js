import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
         <Section
         id="model-s"
         title="Model S"
         des="Order online For Touchless Delivery "
         backimg="model-s.jpg"
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

         <Section
         id="model-x"
         title="Model X"
         des="Order online For Touchless Delivery "
         backimg="model-x.jpg"
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

         <Section
         id="model-x"
         title="Model Y"
         des="Order online For Touchless Delivery "
         backimg="model-y.jpg"
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

         <Section
         id="model-3"
         title="Model 3"
         des="Order online For Touchless Delivery "
         backimg="model-3.jpg"
         LeftButtontxt="Custom Order"
         RightButtontxt="Existing Inventory "
         />

        <Section
         title="Lowest cost solar panel in America"
         des="Money back  guarantee "
         backimg="solar-panel.jpg"
         LeftButtontxt="Order Now"
         RightButtontxt="Learn More "
         />

         <Section
          title="Solar For New roofs"
          des="Money back  guarantee "
          backimg="solar-roof.jpg"
          LeftButtontxt="Order Now"
          RightButtontxt="Learn More "
          />

          <Section
           title="Accessories"
           des=""
           backimg="accessories.jpg"
           LeftButtontxt="Shop Now"
           />
        </Container>
    )
}

export default Home


const Container = styled.div`
   height: 100vh; 

`