import React from "react";
import { Component } from "react";
import ContainerTodas from "../../Components/Body/ContainerTodas/ContainerTodas";
import "./VerTodas.css"

class VerUpcoming extends Component {

    constructor(props){
    super(props);
    this.state = {
        upcoming : [],
        

    }};

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) =>
         this.setState({upcoming : data.results})
           )
        .catch( error => console.log('El error fue: ' + error))
                                                                }



    render(){
        
        return(
            <main>
                <h2 className="espaciadoTituloUno">Peliculas en Cartelera</h2> 
                <ContainerTodas movies={this.state.upcoming}/>
                <br></br><br></br>
            </main>
        )
    };




};



export default VerUpcoming;