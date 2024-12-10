import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';
import CardUlti from "../components/CardUlti/CardUlti"
import './Home.css';
function Home() {
  return (
    <div className="Home">
      <Header />
      <h1>Carrossel</h1>

      <BarraPesquisa />
      <div className='Cards'>
        <CardUlti />
        <CardUlti />
        <CardUlti />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
