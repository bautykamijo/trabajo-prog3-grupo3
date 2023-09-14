import React, { Component } from 'react';
import "./Generos.css";

class Generos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generoPeli: [],
      generoSerie: [],
    };
  }

  componentDidMount() {
    
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=20ad67ce31acb5c646fe21c26a0d44f1&language=en-US")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ generoPeli: data.genres });
      })
      .catch((error) => {
        console.error('Error al obtener los géneros de películas:', error);
      });

    
    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=20ad67ce31acb5c646fe21c26a0d44f1&language=en-US")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ generoSerie: data.genres });
      })
      .catch((error) => {
        console.error('Error al obtener los géneros de series:', error);
      });
  }

  render() {
    return (
        <section>
        <div>
        <h2>Géneros de Películas</h2>
        <article ><ul>
          {this.state.generoPeli.map((genero, idx) => (
            <li  key={genero.name + idx}><span className='aclickeo' >{genero.name}</span></li>
          ))}
        </ul>
        </article>
        </div>
        <div ></div>
        <h2 >Géneros de Series</h2>
        <article ><ul>
          {this.state.generoSerie.map((genero, idx) => (
            <li key={genero.name + idx}><span className='aclickeo'>{genero.name}</span></li>
          ))}
        </ul>
        </article>
      </section>
    );
  }
}

export default Generos;