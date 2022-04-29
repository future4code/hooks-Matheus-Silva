import React from "react";

// Esse exemplo demonstra que é possível guardar listas de objetos,
// e mostrá-la na tela. Esse é o exemplo mais importante dessa seção,
// e é o que será mais usado daqui para frente. Garanta que entendeu tudo
// e fez o exercício antes de prosseguir.

// Exercicio: Adicionar a propriedade "telefone" para cada pessoa.
// Essa propriedade deve aparecer na tela ao lado de email, de acordo
// com o seguinte exemplo: "Paula - paula@f4.com - 99999-9999"
// Em seguida, adicione mais uma pessoa, com as 3 informações necessárias.

class Exemplo5 extends React.Component {
  state = {
    pessoas: [
      {
        nome: "Paula",
        email: "paula@f4.com",
        telefone: "99999-9999"
      },
      {
        nome: "João",
        email: "joao@f4.com",
        telefone: "99999-9999"
      },
      {
        nome: "Seth",
        email: "heyheyppl@sethhere.com",
        telefone: "99999-9999"
      }
    ]
  };

  render() {
    // Da mesma forma que nos exemplos anteriores, pegamos o array de
    // pessoas do estado e mapeamos ele para um componente
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      // Porém, cada pessoa não é mais uma string somente, mas sim um objeto
      // com duas propriedades. Por isso, no momento de colocá-la na tela
      // precisamos explicitar qual das propriedades queremos mostrar em
      // cada lugar.
      return (
        <p>
          {pessoa.nome} - {pessoa.email} - {pessoa.telefone}
        </p>
      );
    });

    return (
      <div>
        <h1>Exemplo 5</h1>
        {/* Como sempre, colocamos a variável com a lista de componentes
        gerados aqui. */}
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Exemplo5;
