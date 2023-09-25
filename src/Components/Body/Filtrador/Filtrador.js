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
        
    }

    controlarCambios(event) {
        this.setState({textoFiltrado: event.target.value},
        this.props.filtrador(this.state.textoFiltrado))
    }

    render(){
        return(
                <form className="form" onSubmit={(event)=>this.controlarSubmit(event)}>
                    <div>
                        <input className="buscadoryboton"  type='text' placeholder='Filtrar' onChange={(event)=>this.controlarCambios(event)} value={this.state.textoFiltrado}/>
                        <button className="favorites favoritismo"  type="submit" value="Submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
        );
    };
}

export default Filtrador;