import React from 'react';
import './Footer.css';
import twitter from '../assets/twitter.png';
import github from '../assets/Github.png';
import linkedin from '../assets/Linkedin.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';

function Footer() {
  return (
    <div className="Footer">
      <a href="" target={'_blank'} rel="noreferrer"><img src={twitter}/></a>
      <a href="" target={'_blank'} rel="noreferrer"><img src={facebook}/></a>
      <a href="" target={'_blank'} rel="noreferrer"><img src={instagram}/></a>
      <a href="" target={'_blank'} rel="noreferrer"><img src={linkedin}/></a>
      <a href="https://github.com/SimaoMoreira5228" target={'_blank'} rel="noreferrer"><img src={github}/></a>
    </div>
  );
}

export default Footer;
