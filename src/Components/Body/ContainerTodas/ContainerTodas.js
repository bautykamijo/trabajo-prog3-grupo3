import React, { Component } from "react";
import Card from "../Card/Card";

class ContainerTodas extends Component {

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
                  <br></br><br></br>
            <section className="padre populares">
            {this.props.movies ? this.props.movies.map((movie, idx) =>  <Card key={movie.title + idx} pelicula={movie}/>) : <h2>Cargando...</h2>}
            </section>
           
            </React.Fragment>
        )
    }


    


}

export default ContainerTodas;