import React from 'react';
import logo from '../assets/logo.png'; 
import unbLogo from '../assets/logoUnb.png';
import './Footer.css';

function Footer() {
return (
  <footer className="App-footer">
    <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="title">Gastos Públicos</div>
    </div>
    <ul className="navigation__footer">
        <li><a className="navigation__footer__link" href="" target="_blank" rel="noopener noreferrer">Gastos</a></li>
        <li><a className="navigation__footer__link" href="" target="_blank" rel="noopener noreferrer">Monitoramento</a></li>
        <li><a className="navigation__footer__link" href="" target="_blank" rel="noopener noreferrer">Sobre o projeto</a></li>
        <li><a className="navigation__footer__link" href="" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
      </ul>
    <div>
      <img src={unbLogo} className="Unb-logo" alt="logo" />
    </div>
  </footer>
);
}

export default Footer;