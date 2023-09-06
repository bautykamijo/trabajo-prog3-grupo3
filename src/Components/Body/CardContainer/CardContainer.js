import React, { Component } from "react";
import Card from "../Card/Card";

class CardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor : {},
        }};

    render() {
        console.log(this.props.populares);
        return(
            <React.Fragment>
            <h2>Peliculas Populares</h2>
            <section className="padre populares">
            <Card/>
            </section>
            </React.Fragment>
        )
    }





}

export default CardContainer;