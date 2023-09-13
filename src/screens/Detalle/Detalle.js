import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Detalle extends Component {

    constructor(props){
    super(props);
    this.state = {
    pelicula : {},     
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

}

render() {
   console.log(this.state.pelicula.genres);
   let detallada =  this.state.pelicula
    return(
       <section className="padrethor">
        <article className="articulo hijothor"><img className="imagenThor" src={"https://image.tmdb.org/t/p/w500/" + detallada.poster_path} alt="foto"/></article>
            <article className="articulo hijosinopsis">
                <h3>Sinopsis</h3>
                <p className="overview">{detallada.overview}</p>
                <h4 className="estreno">{`Fecha de estreno: ${detallada.release_date}`}</h4>
                <h4 className="popularidad">{`Popularidad: ${detallada.popularity}`}</h4>
                <h4 className="duracion">{`Duración: ${detallada.runtime}m`}</h4>
                <h4> <Link className="generoGlobal" to="/generos"> Generos: </Link> 
                     {/*  {detallada.genres.map((genero)=><li>{genero.name}</li>)}*/}
                     </h4>
                <button className="favorites favoritismo"></button>
                <h4 className="provider"></h4>
                <h4 className="reviews"></h4>
                <ul className="autor"></ul>
                </article>
       </section>
    )
};
}

export default Detalle;

