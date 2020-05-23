import React, { Component } from 'react';
import Contato from './componentes/Contato';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      clientes: []
    };
  }
  componentDidMount(){
    var myHeaders = new Headers();
    myHeaders.append("X-Parse-Application-Id", "aulaparse");
    myHeaders.append("X-Parse-Master-Key", "aulaparse");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://aws.magnani.ind.br:1337/parse/classes/Cliente", requestOptions)
      .then(response => response.json())
      .then(res => this.setState({clientes: res.results} ))
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <div className="App">
        <div>
        <Contato  clientes={this.state.clientes}  />
        </div>
      </div>
    );
  }
}
export default App;
