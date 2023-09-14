import React from "react";
import { Component } from "react";
import CardContainer from "../../Components/Body/CardContainer/CardContainer";
import "./Home.css"
import { Link } from "react-router-dom";

class Home extends Component {

    constructor(props){
    super(props);
    this.state = {
        popular : false,
        upcoming : false

    }};

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) =>
         this.setState({popular : data.results})
           )
        .catch( error => console.log('El error fue: ' + error))

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) => this.setState({
            upcoming : data.results
        }))
        .catch( error => console.log('El error fue: ' + error))

    };


    render(){
        
        return(
            <main>
                <h2 className="espaciadoTituloUno">Peliculas Populares <Link to="/populares"><button class="favorites favoritismo">Ver todas</button></Link> </h2> 
                <CardContainer movies={this.state.popular}/>
                <h2 className="espaciadoTituloDos">Peliculas en cartelera <Link to="/cartelera"> <button class="favorites favoritismo">Ver todas</button></Link></h2>
                <CardContainer movies={this.state.upcoming}/>
                <br></br><br></br>
            </main>
        )
    };




};



export default Home;