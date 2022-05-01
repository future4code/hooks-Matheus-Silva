import React from "react";

// Esse exemplo só demonstra como não necessariamente o map precisa
// estar em uma variável. Ele pode simplesmente estar no meio do JSX.

class Exemplo4 extends React.Component {
  state = {
    pessoas: ["Paula", "João"],
    teste: ["Teste1", "Teste2"]
  };

  render() {
    return (
      <div>
        <h1>Exemplo 4</h1>
        <div>
          {this.state.teste.map((test) => {
              return <p>{test}</p>;
          })}
          {this.state.pessoas.map((pessoa) => {
            return <p>{pessoa}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Exemplo4;
