import React from 'react';
import './Info.css';
import emailimg from '../assets/email.png';

function Info() {
  return (
    <div className="Info">
      <h2>Simão Moreira</h2>
      <h3>Student</h3>
      <p>simaomoreira.website</p>
      <a href="mailto: simaomoreira5228@hotmail.com" target={'_blank'} rel="noreferrer"><button className='email-button'><img src={emailimg}/><span>Email</span></button></a>
    </div>
  );
}

export default Info;
