import React from "react";

// A partir de agora, vamos trabalhar com manipulação de arrays no estado.
// Esse exemplo demonstra como adicionar um item a um array
// no estado, sempre que um botão for clicado.

// Exercício: faça o botão adicionar a letra "b" ao invés de "a".
// Atenção: a lista deve continuar começando da mesma forma, com dois "a"s.

class Exemplo6 extends React.Component {
  state = {
    letras: ["a", "a"]
  };

  adicionaLetra = () => {
    // MUITO IMPORTANTE: Copia array de letras.
    // Sempre que vamos mexer em arrays ou objetos que estão no estado,
    // precisamos criar uma cópia antes.
    // const novoLetras = [...this.state.letras];

    // Adiciona letra 'a' ao array
    // novoLetras.push("a");

    // Define o estado "letras" como a variavel "novoLetras".
    // Repare que, quando o estado é definido, o componente é renderizado
    // novamente, refletindo a mudança na tela.
    this.setState({ letras: [...this.state.letras, "b"] });
  };

  render() {
    // Exatamente mesma lógica dos exemplos anteriores.
    // const listaDeComponentes = this.state.letras.map((letra) => {
    //   return <p>{letra}</p>;
    // });

    return (
      <div>
        <h1>Exemplo 6</h1>
        <div>{this.state.letras.map((letra) => { return <p>{letra}</p>})}</div>
        <button onClick={this.adicionaLetra}>Adiciona letra</button>
      </div>
    );
  }
}

export default Exemplo6;
