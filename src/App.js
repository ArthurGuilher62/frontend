import logo from './assets/logo.png'; 
import unb from './assets/unb.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={unb} className="unb-logo" alt="unb" />
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="title">Gastos Públicos</div>
        </div>
        <ul className="navigation">
          <li><a className="navigation__link" href="" target="_blank" rel="noopener noreferrer">Gastos</a></li>
          <li><a className="navigation__link" href="" target="_blank" rel="noopener noreferrer">Monitoramento</a></li>
          <li><a className="navigation__link" href="" target="_blank" rel="noopener noreferrer">Sobre o projeto</a></li>
          <li><a className="navigation__link" href="" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
