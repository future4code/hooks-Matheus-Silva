import React from "react";
import "./styles.css";
import Exemplo1 from "./components/Exemplo1";
import Exemplo2 from "./components/Exemplo2";
import Exemplo3 from "./components/Exemplo3";
import Exemplo4 from "./components/Exemplo4";
import Exemplo5 from "./components/Exemplo5";
import Exemplo6 from "./components/Exemplo6";
import Exemplo7 from "./components/Exemplo7";
import Exemplo8 from "./components/Exemplo8";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercicioSelecionado: "1"
    };
  }

  render() {
    let exercicio;

    switch (this.state.exercicioSelecionado) {
      case "1":
        exercicio = <Exemplo1 />;
        break;
      case "2":
        exercicio = <Exemplo2 />;
        break;
      case "3":
        exercicio = <Exemplo3 />;
        break;
      case "4":
        exercicio = <Exemplo4 />;
        break;
      case "5":
        exercicio = <Exemplo5 />;
        break;
      case "6":
        exercicio = <Exemplo6 />;
        break;
      case "7":
        exercicio = <Exemplo7 />;
        break;
      case "8":
        exercicio = <Exemplo8 />;
        break;
      default:
        exercicio = null;
    }

    const options = ["1", "2", "3", "4", "5", "6", "7", "8"];
    return (
      <div className="App">
        <div>
          Exemplo:
          <select
            value={this.state.exercicioSelecionado}
            onChange={e =>
              this.setState({ exercicioSelecionado: e.target.value })
            }
          >
            {options.map(optionValue => (
              <option value={optionValue}>{optionValue}</option>
            ))}
          </select>
        </div>
        {exercicio}
      </div>
    );
  }
}

export default App;
