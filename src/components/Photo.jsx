import React from 'react';
import './Photo.css';
import Logo from '../assets/man-falling.jpg';

function Photo() {
  return (
    <div className='Photo'>
      <img src={Logo}/>
    </div>
  );
}

export default Photo;
