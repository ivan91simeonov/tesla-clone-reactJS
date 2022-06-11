import './Header.css';
import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import styled from 'styled-components';
import {AiFillCloseCircle} from 'react-icons/ai'

function Header() {
  return (
    <header className="container-nav">
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <nav className="navigation">
        <a href="#">Model X</a>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
      </nav>
      <nav className="right-menu">
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <a href="#" className='right-menu w'>
           <HiMenuAlt1 />
        </a> 
      </nav>
      <BurgerNav>
        <CustomClose />
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadaster</a></li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Existing Inventory</a></li>
      </BurgerNav>
    </header>
  );
}

export default Header;

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 16; 
list-style: none;
padding: 2rem;
display: flex;
flex-direction: column;
text-align: start;
`

const CustomClose = styled(AiFillCloseCircle)`
`
