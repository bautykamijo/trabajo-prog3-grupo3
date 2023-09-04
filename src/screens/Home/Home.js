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
        console.log(this.state.popular);
        console.log(this.state.upcoming);

        return(
            <div> 
                <CardContainer populares={this.state.popular}/>
                <CardContainer proximamente={this.state.upcoming}/>
            </div>
        )
    };




};



export default Home;