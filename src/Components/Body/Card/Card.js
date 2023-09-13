import React, { Component} from "react";
import { Link } from "react-router-dom";

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            textoFavoritos : 'Añadir a Favoritos ',
        }};

    componentDidMount(){
        let peliculasTraidas = localStorage.getItem("pelicularda");
        if (peliculasTraidas === null) {
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        } else if (peliculasTraidas.includes(this.props.pelicula.id)) {
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    }



    render() {
        let descripcion = this.props.pelicula.overview
        return(
            <article className="cuadrado thor"> 
            <div className="aclickeo">
            <Link to={`/detalles/${this.props.pelicula.id}`} >
           <img src={"https://image.tmdb.org/t/p/w500/" + this.props.pelicula.poster_path} alt="foto" className="img1"/>
           <p className="textoFav"> {this.props.pelicula.title} {'(' + this.props.pelicula.release_date +')'}</p>
           </Link>
           <button className="favorites favoritismo" >Ver más</button>
           <button className="favorites favoritismo">{this.state.textoFavoritos} <i class="fa-solid fa-star"></i></button>
           </div>
           </article>
            
        )
    }};




export default Card;