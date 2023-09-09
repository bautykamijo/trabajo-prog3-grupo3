import React from "react";
import { Component } from "react";
import CardContainer from "../../Components/Body/CardContainer/CardContainer";

class Home extends Component {

    constructor(props){
    super(props);
    this.state = {
        popular : {},
        upcoming : {}

    }};

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) => this.setState({
            popular : data
        }))
        .catch( error => console.log('El error fue: ' + error))

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=20ad67ce31acb5c646fe21c26a0d44f1')
        .then((response) => response.json())
        .then((data) => this.setState({
            upcoming : data
        }))
        .catch( error => console.log('El error fue: ' + error))

    };


    render(){
       // console.log(this.state.popular.results);
       // console.log(this.state.upcoming.results);

        return(
            <main>
                <CardContainer populares={this.state.popular.results}/>
                <CardContainer proximamente={this.state.upcoming.results}/>
            </main>
        )
    };




};



export default Home;