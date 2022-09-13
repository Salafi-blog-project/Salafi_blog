import React, { useState } from 'react';
import styled from 'styled-components';

const HarmBurger = () => {

    const [open, setOpen] =useState(false)
    return ( 
        <StyledHarmBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledHarmBurger>
     );
}
 
export default HarmBurger;

const StyledHarmBurger = styled.div`
width:2rem;
height:2rem;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
div{
    width:2rem;
    height:0.3rem;
    background-color:${({open}) => open ? '#fff' : 'black'};
    border-radius:0.3rem;

    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
}
`