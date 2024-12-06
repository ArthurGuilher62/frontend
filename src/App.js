import logo from './assets/logo.png';
import unb from './assets/unb.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={unb} className="unb-logo" alt="unb" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Gastos Publicos</h1>
        <a
          className="gastos"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          gastos
        </a>
        <a
          className="monitoramento"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          monitoramento
        </a>
        <a
          className="sobreOprojeto"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          sobre o projeto
        </a>
        <a
          className="sobreNos"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          sobre nós
        </a>
      </header>
    </div>
  );
}

export default App;
