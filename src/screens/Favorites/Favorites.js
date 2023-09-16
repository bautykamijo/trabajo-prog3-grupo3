import React from "react";
import { Component } from "react";
import CardContainer from "../../Components/Body/CardContainer/CardContainer";
import "./Favorites"

class Favorites extends Component{

    constructor(){
        super();
        this.state = {
        favoritos : [],     
        }
    };

    componentDidMount(){
        let listaFavoritos = [];
        let recuperoStorage = localStorage.getItem("pelicularda");
        

        if (recuperoStorage !== null){
            let pelisFavoritas = JSON.parse(recuperoStorage);
            listaFavoritos = pelisFavoritas;
            let peliculasLista = [];
            console.log(listaFavoritos);

            listaFavoritos.forEach((id)=>{
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20ad67ce31acb5c646fe21c26a0d44f1`)
                    .then((response) => response.json())
                    .then( listaFavoritos => {
                    peliculasLista.push(listaFavoritos)
                    this.setState({favoritos : peliculasLista })
                    })
                   
                    .catch( error => console.log('El error fue: ' + error))
                            
                        })
                    }
                }

    render(){
        
                console.log(this.state.favoritos);
            return(
                <React.Fragment>
                <h2 className="espaciadoTituloUno">Tus peliculas favoritas...</h2> 
                <br></br><br></br><br></br><br></br>
                {this.state.favoritos && this.state.favoritos.length > 0 ? <CardContainer movies={ this.state.favoritos }/> : <p className="favoriteable">No tienes ninguna pelicula agregada a favoritos</p>}
                <br></br><br></br><br></br><br></br><br></br>
                </React.Fragment>
            
        )}
        
    }

    








export default Favorites;