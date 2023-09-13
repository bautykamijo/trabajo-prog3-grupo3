import React, { Component} from "react";
import { Link } from "react-router-dom";

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor : {},
        }};



    render() {
        
        return(
            <React.Fragment>
            <article className="cuadrado thor"> 
            <Link to={`/detalles/${this.props.pelicula.id}`} className="aclickeo">
           <img src={"https://image.tmdb.org/t/p/w500/" + this.props.pelicula.poster_path} alt="foto" className="img1"/>
           <p> {this.props.pelicula.title} {'(' + this.props.pelicula.release_date +')'}</p>
           <button className="favorites favoritismo" >Ver más</button>
           </Link>
           </article>  
    
           
          </React.Fragment>
        )
    }};




export default Card;