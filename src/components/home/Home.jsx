import React from 'react';
import Section from '../section/Section';
import './Home.css'

function Home() {
  return (
    <div className='container'>
      <Section 
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing Inventory'
      />
      {/* <Section />
      <Section />
      <Section /> */}
    </div>
  );
}

export default Home;


