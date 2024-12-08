import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreNos from './SobreNos/SobreNos'; // Caminho do componente que será exibido
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}

export default App;
