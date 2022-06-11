import React from 'react'
import './Section.css'

function Section({title , description  , leftBtnText , rightBtnText}) {
  return (
    <div className='wrap'>
      <div className='item-text'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='button-group'>
        <button className='left-button'>
            {leftBtnText}
        </button>
        <button className='right-button'>
            {rightBtnText}
        </button>
      </div>
    </div>
  )
}

export default Section
