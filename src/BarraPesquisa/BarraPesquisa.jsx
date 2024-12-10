import React from 'react';
import lupa from '../assets/lupa.png';
import filtro from '../assets/filtro.png';

import './BarraPesquisa.css';

function BarraPesquisa() {
  return (
      <div className="search-container">
        <img className="lupa" src={lupa} alt="Lupa" />
        <form action="/" method="GET">
          <input type="text" id="barraPesquisa" placeholder="Pesquise por um gasto" required />
          <input type="submit" id="botaoPesquisa" value="Buscar" />
        </form>
        <img className="filtro" src={filtro} alt="Filtrar" />
      </div>
  );
}

export default BarraPesquisa;