import React from "react";

// Esse exemplo demonstra como adicionar um valor vindo de um input
// ao array que está no estado.

// Exercício: Limpe o input no momento de adicionar o valor atual ao array

class Exemplo7 extends React.Component {
  // Inicializa o estado
  state = {
    // Array de pessoas, como nos exemplos anteriores
    pessoas: ["Amanda", "Paula"],
    // Temos aqui uma nova variável. Ela guarda o valor atual do
    // do input de pessoa. Ela inicia como uma string vazia.
    // Experimente trocar o valor inicial e veja o que acontece.
    valorInputPessoa: ""
  };

  adicionaPessoa = () => {
    // Pega valor que está no input. Repare que puxamos
    // esse valor do estado. Ele está lá porque toda vez que um
    // valor é digitado, atualizamos o estado
    const novaPessoa = this.state.valorInputPessoa;

    // Copia array de pessoas e adiciona uma pessoa no incio
    const novoPessoas = [novaPessoa, ...this.state.pessoas];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ pessoas: novoPessoas , valorInputPessoa: ""});
  };

  onChangeInputPessoa = (event) => {
    // Essa é a funcao que atualiza o estado toda vez que algo é
    // digitado no input de pessoa.

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event.
    this.setState({ valorInputPessoa: event.target.value });
  };

  render() {
    // Mesma lógica dos exemplos anteriores.
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return <p>{pessoa}</p>;
    });

    return (
      <div>
        <h1>Exemplo 7</h1>
        <div>
          <input
            // Valor definido pelo estado sendo passado no input
            value={this.state.valorInputPessoa}
            // Funcao de atualizacao. Ela é chamada toda vez que
            // algo é digitado no input.
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Exemplo7;
