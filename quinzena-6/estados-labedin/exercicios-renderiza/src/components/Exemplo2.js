import React from "react";

// Esse exemplo demonstra como transformar um array de dados (nesse caso, strings)
// em um array de componentes.

// Exercício: Adicione mais uma pessoa à lista de pessoas
// Garanta que viu essa mudança refletida na tela.

class Exemplo2 extends React.Component {
  render() {
    // Array de strings com nomes de pessoas sendo colocado na variavel pessoas
    const pessoas = ["Amanda", "Paula", "Resposta"];

    // Usamos a função de array map para transformar o array de strings
    // em um array de componentes. Revise a função map se não lembra
    // como ela funciona. Ela é bem importante!
    const listaDeComponentes = pessoas.map(pessoa => {
      // Aqui, CADA item do array é representado pela variavel pessoa.
      // Cada pessoa vai gerar um <p>{pessoa}</p>, que estará no novo array.
      return <p>{pessoa}</p>;
    });

    return (
      <div>
        <h1>Exemplo 2</h1>
        {/* Como no exemplo anterior, a variavel listaDeComponentes, que
        guarda o retorno da funcao map, aparece na tela */}
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Exemplo2;
