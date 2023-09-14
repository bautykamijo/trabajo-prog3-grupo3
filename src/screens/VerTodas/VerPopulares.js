import React from "react";
import { Component } from "react";
import ContainerTodas from "../../Components/Body/ContainerTodas/ContainerTodas";
import "./VerTodas.css"

class VerPopulares extends Component {

    constructor(props){
    super(props);
    this.state = {
        popular : [],
        

    }};

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) =>
         this.setState({popular : data.results})
           )
        .catch( error => console.log('El error fue: ' + error))
                                                                }



    render(){
        
        return(
            <main>
                <h2 className="espaciadoTituloUno">Peliculas Populares</h2> 
                <ContainerTodas movies={this.state.popular}/>
                <br></br><br></br>
            </main>
        )
    };




};



export default VerPopulares;