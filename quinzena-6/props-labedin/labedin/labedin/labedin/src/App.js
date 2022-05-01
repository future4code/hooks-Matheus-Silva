import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="./components/CardGrande/aluno.png"
          alt="aluno" 
          nome="Aluno" 
          descricao="Oi, sou Aluno. estudo na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          alt="imgButton" 
          texto="Ver mais"
        />

        <CardPequeno 
          tipo="Email"
          conteudo="emailaluno@pm.me"
        />
        <CardPequeno 
          tipo="Endereço"
          conteudo="rua do aluno"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Lugar" 
          descricao="Trabalhando num lugar!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Outro Lugar" 
          descricao="Trabalhando noutro lugar." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Nenhuma" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Nenhuma outra" 
        />        
      </div>
    </div>
  );
}

export default App;
