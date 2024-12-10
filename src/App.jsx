import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreNos from './SobreNos/SobreNos';
import Gastos from './Gastos/Gastos';
import Home from './Home/Home';
import SobreProjeto from './SobreProjeto/SobreProjeto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/SobreProjeto" element={<SobreProjeto />} />
        <Route path="/Gastos" element={<Gastos />} />
      </Routes>
    </Router>
  );
}

export default App;