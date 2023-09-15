import React, {Component} from 'react';

class Filtrador extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFiltrado: '',
        }
    }

    controlarSubmit(event) {
        event.preventDefault();
        this.props.filtrador(this.state.textoFiltrado);
    }

    controlarCambios(event) {
        this.setState({filterText: event.target.value})
    }

    render(){
        return(
                <form className="form" onSubmit={(event)=>this.controlarSubmit(event)}>
                    <div>
                        <input className="buscadoryboton"  type='text' placeholder='Filtrar' onChange={(event)=>this.controlarCambios(event)} value={this.state.filterText}/>
                        <button className="favorites favoritismo"  type="submit" value="Submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
        );
    };
}

export default Filtrador;