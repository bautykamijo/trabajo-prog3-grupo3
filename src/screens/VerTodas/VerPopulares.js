import React from "react";
import { Component } from "react";
import ContainerTodas from "../../Components/Body/ContainerTodas/ContainerTodas";
import Filtrador from "../../Components/Body/Filtrador/Filtrador";


class VerPopulares extends Component {

    constructor(props){
    super(props);
    this.state = {
        popular : [],
        pagina : 2,

    }};

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) =>
         this.setState({popular : data.results})
           )
        .catch( error => console.log('El error fue: ' + error))
                                                                }


    filtradorPeliculas = (texto) => {
        let filtradas = this.state.popular.filter((movie) =>
        movie.title.toUpperCase().includes(texto.toUpperCase()))

        this.setState({
            popular: filtradas,
        })
    }

    traerMas(){
        let numero = this.state.pagina;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=20ad67ce31acb5c646fe21c26a0d44f1&language=en-US&page=${numero}`)
            .then((response) => response.json())
            .then((data) => this.setState(
            { popular: this.state.popular.concat(data.results),
                pagina: numero + 1})
            )
            .catch((error) => console.log(error));
    }



    render(){
        
        return(
            <main>
                <br></br>
                <Filtrador filtrador={(texto)=> this.filtradorPeliculas(texto)}/>
                <h2 className="espaciadoTituloUno">Peliculas Populares <button className="favorites favoritismo" onClick={() => this.traerMas()}> Traer mas </button></h2> 
                <ContainerTodas movies={this.state.popular}/>
                <br></br><br></br>
            </main>
        )
    };




};



export default VerPopulares;