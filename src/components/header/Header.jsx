import './Header.css';
import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { selectCars } from '../../features/car/carSlice.js';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  

  return (
    <header className="container-nav">
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <nav className="navigation">
        {cars && cars.map((car , index) => 
        <a href="#" key={index}>{car}</a>
        )}
      </nav>
      <nav className="right-menu">
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <a href="#" className="right-menu w">
          <HiMenuAlt1 onClick={() => setBurgerStatus(true)} />
        </a>
      </nav>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car , index) => 
              <li>
              <a href="" key={index}>{car}y</a>
            </li>
        )}
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadaster</a>
        </li>
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
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
`;

const CustomClose = styled(AiFillCloseCircle)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
