import React, { Component, Link} from "react";

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor : {},
        }};

    render() {
        return(
            <article className="cuadrado thor"> 
           <Link className="aclickeo" to={`/detalles/${this.props.pelicula.id}`}   >  
            <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=2000" alt="" className="img1"/>
            {this.props.pelicula.title} (${this.props.pelicula.release_date})
            </Link>
            </article> 
        )
    }


}

export default Card;