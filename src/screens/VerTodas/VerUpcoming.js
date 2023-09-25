import React from "react";
import { Component } from "react";
import ContainerTodas from "../../Components/Body/ContainerTodas/ContainerTodas";
import Filtrador from "../../Components/Body/Filtrador/Filtrador";
import "./VerTodas.css"

class VerUpcoming extends Component {

    constructor(props){
    super(props);
    this.state = {
        upcoming : [],
        pagina : 2
        

    }};

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) =>
         this.setState({upcoming : data.results})
           )
        .catch( error => console.log('El error fue: ' + error))
                                                                }


         filtradorPeliculas = (texto) => {
        let filtradas = this.state.upcoming.filter((movie) =>
        movie.title.toUpperCase().includes(texto.toUpperCase()))

        this.setState({
            upcoming: filtradas,
        })
    }

    traerMas(){
        let numero = this.state.pagina;
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=20ad67ce31acb5c646fe21c26a0d44f1&language=en-US&page=${numero}`)
            .then((response) => response.json())
            .then((data) => this.setState(
            { upcoming: this.state.upcoming.concat(data.results),
                pagina: numero + 1})
            )
            .catch((error) => console.log(error));
    }


    render(){
        
        return(
            <main>
                <br></br>
                 <Filtrador filtrador={(texto)=> this.filtradorPeliculas(texto)}/>
                <h2 className="espaciadoTituloUno">Peliculas en Cartelera <button className="favorites favoritismo" onClick={() => this.traerMas()}> Traer mas </button></h2> 
                <ContainerTodas movies={this.state.upcoming}/>
                <br></br><br></br>
            </main>
        )
    };




};



export default VerUpcoming;