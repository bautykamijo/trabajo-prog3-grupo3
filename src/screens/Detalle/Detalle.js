import React from "react";
import { Component } from "react";


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
        .then((data) => console.log(data))
        .catch( error => console.log('El error fue: ' + error))

}

render() {
    console.log(this.state.pelicula);
    return(
        <main>
            <p>gonzi</p>
        </main>
    )
};
}

export default Detalle;

