import React, { Component} from "react";
import { Link } from "react-router-dom";

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: "Ver mas", 
            textoFavoritos : 'Agregar a Favoritos ',
        }};


    componentDidMount(){
        let recuperoStorage = localStorage.getItem("pelicularda");
        let peliculasFavs = JSON.parse(recuperoStorage)
        if (recuperoStorage === null) {
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        } else if (peliculasFavs.includes(this.props.pelicula.id)) {
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    }

    agregarQuitarFavoritos(idPelicula){
      let favoritos = [];
      let recuperoStorage = localStorage.getItem ("pelicularda");
      

        if (recuperoStorage !== null){
        favoritos = JSON.parse(recuperoStorage)};

        if (favoritos.includes(idPelicula)){
        favoritos = favoritos.filter((id) => id === idPelicula);
        this.setState({
            textoFavoritos: "Agregar a favoritos",
        })}

        else {
        favoritos.push(idPelicula);
        this.setState({
            textoFavoritos: "Quitar de favoritos",
        })}

       let favoritosStringified = JSON.stringify(favoritos) 
       localStorage.setItem("pelicularda", favoritosStringified)
    }

    verMasInfo(){
        if(this.state.view === 'Ver mas'){
            this.setState({
                view : "Ver menos"
            })
        } else {
            this.setState({
                view : "Ver mas"
            })
        }
    }

    alertaInfo(descripcion){
        alert(descripcion)
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
           <button className="favorites favoritismo" onClick={()=>this.verMasInfo()}>{this.state.view}</button>
           <br></br>
           <button className="favorites favoritismo" onClick={() => this.agregarQuitarFavoritos(this.props.pelicula.id)}>{this.state.textoFavoritos} <i className="fa-solid fa-star"></i></button>
           {this.state.view === 'Ver mas' ? false :  <p className="textoFav fondoNegro">{descripcion}</p>}
           </div>
           </article>
            
        )
    }};




export default Card;