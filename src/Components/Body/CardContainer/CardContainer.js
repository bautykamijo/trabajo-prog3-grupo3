import React, { Component } from "react";
import Card from "../Card/Card";


class CardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
           valor : {}
        }
        
    };

    render() {
     console.log(this.props)
        return(
            <React.Fragment>
            <section className="padre populares">
            {this.props.movies ? this.props.movies.slice(0,5).map((movie, idx) =>  <Card key={movie.title + idx} pelicula={movie}/>) : <h2>Cargando...</h2>}
            </section>
            </React.Fragment>
        )
    }


    


}

export default CardContainer;