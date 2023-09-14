import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Detalle.css"

class Detalle extends Component {

    constructor(props){
    super(props);
    this.state = {
    pelicula : {}, 
    textoFavoritos : 'Añadir a Favoritos ', 
    }
    console.log(this.props);
};

componentDidMount(){

    
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=20ad67ce31acb5c646fe21c26a0d44f1`)
        .then((response) => response.json())
        .then((data) => 
        //console.log(data)
        this.setState({pelicula : data })
        )
        .catch( error => console.log('El error fue: ' + error))

        let peliculasTraidas = localStorage.getItem("pelicularda");
        if (peliculasTraidas === null) {
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        } else if (peliculasTraidas.includes(this.props.match.params.id)) {
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }

}

agregarQuitarFavoritos(){
    let arrayPeliculas = [this.props.match.params.id];
    let peliculasTraidas = localStorage.getItem ("pelicularda");
    let peliculasFinales = "";

    if (peliculasTraidas === null){
      peliculasTraidas = [];
      console.log(arrayPeliculas);
      peliculasFinales = JSON.stringify(arrayPeliculas);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    let arrayPeliculasFinales = "";

    if (peliculasTraidas.length !==0){
      let arrayPeliculasTraidas = JSON.parse(peliculasTraidas);
      arrayPeliculasFinales = arrayPeliculasTraidas.concat(arrayPeliculas);
      peliculasFinales = JSON.stringify(arrayPeliculasFinales);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });

    }
  if (peliculasTraidas.includes(this.props.match.params.id)){
    let arrayPeliculasTraidas = JSON.parse(peliculasTraidas);
    arrayPeliculasFinales = arrayPeliculasTraidas.filter(
      (item) => item !== this.props.pelicula.id
    );
    peliculasFinales = JSON.stringify(arrayPeliculasFinales);
    this.setState({
      textoFavoritos: "Agregar a favoritos",
    });
  }
  localStorage.setItem("pelicularda", peliculasFinales);
  }

render() {
   console.log(this.state.pelicula.genres);
   let detallada =  this.state.pelicula
   console.log(detallada);
    return(
      detallada ? <section className="padrethor">
        <article className="articulo hijothor"><img className="imagenThor" src={"https://image.tmdb.org/t/p/w500/" + detallada.poster_path} alt="foto"/></article>
            <article className="articulo hijosinopsis">
                <h3>Sinopsis</h3>
                <p className="overview">{detallada.overview}</p>
                <h4 className="estreno">{`Fecha de estreno: ${detallada.release_date}`}</h4>
                <h4 className="popularidad">{`Popularidad: ${detallada.popularity}`}</h4>
                <h4 className="duracion">{`Duración: ${detallada.runtime}m`}</h4>
                <h4> <Link className="generoGlobal" to="/generos"> Generos: </Link> 
                    {console.log(detallada)}
                    {detallada.genres && detallada.genres.length > 0 ? detallada.genres.map((genero, idx)=><li key={genero.name + idx} className="generillos">{genero.name}</li>) : <p>Cargando...</p>}
                     </h4>
                     <br></br>
                     <button className="favorites favoritismo" onClick={() => this.agregarQuitarFavoritos()}>{this.state.textoFavoritos} <i className="fa-solid fa-star"></i></button>                </article>
       </section> : <h2>Cargando...</h2>
    )
};
}

export default Detalle;

