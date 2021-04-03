import { Component } from "react";

class Contador extends Component {
  // Isto
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  // É igual a isto:
  // state = {}

  state = {
    name: "Click",
    counter: 0,
    contadorAutomatico: 0,
    handleH1Click = this.handleH1Click.bind(this),
    posts: [
        {
          id: 1,
          title: "O Título 1",
          body: "O corpo 1",
        },
      ],
  }

  timeoutUpdate = null;

  handleH1Click() {
    this.setState({ name: "Contador" });
  }
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  handleTimeout = () => {
    const { contadorAutomatico } = this.state;
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ contadorAutomatico: contadorAutomatico + 1 });
    }, 1000);
  };
  async componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    const { posts } = this.state;
    clearTimeout(this.timeoutUpdate);
    posts[0].title = "Componente Desmontado";
    this.setState({ posts });
  }


  render() {
      const {name } = this.state;
    <div className="container">
      <h1> Contador Automatico: {contadorAutomatico}</h1>
      <h1 onClick={this.handleH1Click}>
        {name} {counter}
      </h1>
      <a
        onClick={this.handleAClick}
        className="App-link"
        href="https://www.google.com.br"
      >
        Adicionar no contador
      </a>
    </div>;
  }
}
