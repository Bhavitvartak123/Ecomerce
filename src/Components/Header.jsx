import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import ecommerce from '../Images/ecommerce.png'
import Nav from './Nav'
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" style={{borderBottom:"2px solid rgb(180, 180, 180)"}}>     
        <img src={ecommerce}  style={{width:"250px" ,height:"37px"}} alt="Logo" />
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`

padding: 0 2.8rem;
height: 7rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
  height: 5rem;
}
`;

export default Header