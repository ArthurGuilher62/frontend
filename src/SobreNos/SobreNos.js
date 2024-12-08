import React from 'react';
import './SobreNos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SobreNos() {
    return (
      <div>
        <Header />
        <div className="SobreNos">
          <h1>Sobre Nós</h1>

            <p>
                Somos um grupo de estudantes da Universidade de Brasília (UnB), atuando na disciplina de Modelagem e Desenvolvimento de Sistemas (MDS). 
                Nosso objetivo é criar soluções inovadoras para otimizar a gestão de processos e recursos em diferentes tipos de organizações. 
                Por meio do desenvolvimento de sistemas eficientes, buscamos transformar dados em ferramentas poderosas que possam promover maior eficiência operacional, 
                transparência nos processos e melhores tomadas de decisão.</p>
            <p>
                Nosso trabalho é baseado na aplicação de técnicas de modelagem e desenvolvimento de sistemas que garantam a integração e a automação de processos, 
                além de assegurar que as informações estejam sempre acessíveis e bem organizadas. 
                Acreditamos que, com o uso estratégico da tecnologia, é possível impactar positivamente o desempenho organizacional, seja em pequenas empresas ou grandes corporações.
            </p>
            <p>
                Nosso time é formado por estudantes dedicados, 
                apaixonados por tecnologia e em busca de desafios que contribuam para o aprimoramento do ambiente corporativo e acadêmico.
            </p>

        </div>

        <Footer />

      </div>
    );
  }

  export default SobreNos;