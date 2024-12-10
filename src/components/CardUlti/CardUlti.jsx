import React from 'react';
import './CardUlti.css';


function SobreNos() {
    return (
    <div class="content-block">
        <h2 class="title_box">Título</h2>
        <div className='data_valor'>
            <p class="value_box">data: dd/mm/aaaa</p>
            <p class="value_box">valor: R$ </p>
        </div>
        <div className="linha_box"></div>
        <p class="content_box">
            O texto que você compartilhou, aparentemente escrito por Peter Handke, reflete sobre a sociedade contemporânea...
        </p>
        <button class="btn_box">Ver Mais</button>
    </div>
    );
  }

  export default SobreNos;