import React, { Component } from "react";
import CardContainer from "../../Components/Body/CardContainer/CardContainer";
import "./Resultados.css"

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: false
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=20ad67ce31acb5c646fe21c26a0d44f1&language=en-US&query=${this.props.match.params.query}`)
            .then(response => response.json())
            .then(data =>
                this.setState({peliculas: data.results })
                )
            .catch(e => console.log(e))
    }

    render() {
        console.log(this.state.peliculas);

        return (
            <React.Fragment>
                <h2 className="espaciadoTituloUno">Resultados relacionados con tu busqueda de: "{this.props.match.params.query}"</h2> 
                {this.state.peliculas && this.state.peliculas.length > 0 ? <CardContainer movies={ this.state.peliculas }/> : <p>No se han encontrado resultados relacionados a tu busqueda...</p>}
                <br></br><br></br><br></br>
           </React.Fragment>
        )
    }
}
export default Resultados;
