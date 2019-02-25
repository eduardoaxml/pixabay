import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';


class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  pagAnterior = () =>{
    let pagina = this.state.pagina;

    if(pagina === 1 ) return null;

    pagina -= 1;

    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }
  pagSiguiente = () =>{
    let pagina = this.state.pagina;

    pagina += 1;

    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

  }
  consultarApi = () =>{
    const pagina = this.state.pagina;
    const url =`https://pixabay.com/api/?key=11712275-8e5180f145c03389987890040&q=${this.state.termino}&per_page=24&page=${pagina}`;
    //console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }
  datosB = (termino) =>{
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de imagenes
          </p>
          <Buscador datosBusqueda={this.datosB}/>
        </div>
        <div className="row justify-content-center">
          <Resultado imagenes={this.state.imagenes} pagAnterior = {this.pagAnterior} pagSiguiente = {this.pagSiguiente}/>
        </div>
        
      </div>
     
    );
  }
}

export default App;
