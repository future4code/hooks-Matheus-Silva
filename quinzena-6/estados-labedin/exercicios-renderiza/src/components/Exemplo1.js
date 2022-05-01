import React from "react";

// Esse exemplo demonstra que o React renderiza cada
// componente de um array de componentes quando ele é
// colocado na tela.

// Exercício: Adicione mais uma pessoa à lista de pessoas
// Garanta que viu essa mudança refletida na tela.

class Exemplo1 extends React.Component {
    state = {
        listaDeComponentes: [
            <p>Paula</p>, 
            <p>João</p>,
            <p>Resposta</p>
        ]
    }


  render() {
    // Array de componentes colocado na variável lista de componentes
    // const listaDeComponentes = [<p>Paula</p>, <p>João</p>];
    return (
      <div>
        <h1>Exemplo 1</h1>
        {/* Abaixo, a variável lista de componentes é colocada na tela.
            Repare que os dois componentes do array aparecem na tela.*/}
        <div>{this.state.listaDeComponentes}</div>
      </div>
    );
  }
}

export default Exemplo1;
