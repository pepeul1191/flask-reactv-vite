import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    // Estado inicial del componente
    this.state = {
      contador: 0
    };
  }

  // Método para manejar el incremento del contador
  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  // Método del ciclo de vida que se ejecuta después de que el componente se monta
  componentDidMount() {
    console.log('Componente montado');
  }

  // Método del ciclo de vida que se ejecuta justo antes de que el componente se desmonte
  componentWillUnmount() {
    console.log('Componente a punto de desmontarse');
  }

  render() {
    return (
      <div>
        <h1>Hola, soy un componente de Home</h1>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar contador</button>
      </div>
    );
  }
}

export default HomePage;
