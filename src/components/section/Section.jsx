import React from 'react';
import './Section.css';
import styled from 'styled-components';

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <div className="item-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="button-group">
        <button className="left-button">{leftBtnText}</button>
        {rightBtnText && (
          <button className="right-button">{rightBtnText}</button>
        )}
        {/* <img src="/images/down-arrow.svg" alt="" /> */}
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(prop) => `url("/images/${prop.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
