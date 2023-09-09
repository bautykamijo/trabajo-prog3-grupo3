import React, { Component } from "react";
import Card from "../Card/Card";

class CardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            pelisPopu : [],
        }};

    render() {
        console.log(this.props.populares);
        for (let i = 0; i < this.props.populares.length; i++) {
            const element = this.props.populares[i];
            this.state.pelisPopu.push(element)     
        }
        
        
        return(
            <React.Fragment>
            <h2>Peliculas Populares</h2>
            <section className="padre populares">
            {this.state.pelisPopu.map((popu, idx) =>  (<Card key={popu.title + idx} pelicula={popu}/>))}
            </section>
            </React.Fragment>
        )
    }


    


}

export default CardContainer;