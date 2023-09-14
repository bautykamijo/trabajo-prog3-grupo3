import React from "react";
import { Component } from "react";
import Card from "../../Components/Body/Card/Card";

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
                    .then( (listaFavoritos) => {
                    peliculasLista.push(listaFavoritos)
                    this.setState({favoritos : peliculasLista })
                    })
                   
                    .catch( error => console.log('El error fue: ' + error))
                            
                        })
                    }
                }

    render(){
        
                
            return(
            <React.Fragment>
            <h2 className="espaciadoTituloUno">Tus peliculas favoritas...</h2> 
            <br></br><br></br><br></br>
            <section className="padre populares">
            {this.state.favoritos && this.state.favoritos.length > 0 ? this.state.favoritos.slice(0,5).map((movie, idx) =>  <Card key={movie.title + idx} pelicula={movie}/>) : <h2>Cargando...</h2>}
            </section>
            <br></br><br></br><br></br><br></br><br></br>
            </React.Fragment>
            
        )}
        
    }

    








export default Favorites;