import React from 'react';
import logo from '../assets/logo.png'; 
import unbLogo from '../assets/logoUnb.png';
import './Footer.css';

function Footer() {
return (
  <footer className="App-footer">
    <div className="linha"></div>
    <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="title_footer">Gastos Públicos</div>
    </div>
    <ul className="navigation__footer">
        <li><a className="navigation__footerLink" href="" target="_blank" rel="noopener noreferrer">Gastos</a></li>
        <li><a className="navigation__footerLink" href="" target="_blank" rel="noopener noreferrer">Monitoramento</a></li>
        <li><a className="navigation__footerLink" href="/SobreProjeto" target="_blank" rel="noopener noreferrer">Sobre o projeto</a></li>
        <li><a className="navigation__footerLink" href="/SobreNos" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
      </ul>
    <div>
      <img src={unbLogo} className="Unb-logo" alt="logo" />
    </div>
  </footer>
);
}

export default Footer;