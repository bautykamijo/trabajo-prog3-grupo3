import React from "react";
import './Header.css';

function Header(props) {
    return(

        <header>
    <article className="logo"><img src="./img/logoDelyeMovies.png" alt="Logo DelyeMovies" className="logodelye"/></article>

    <nav>
    <ul className="barranavheader">
            <li className="itemshome"><a href="./index.html" className="ahrefheader">HOME</a></li>
            <li className="itemshome"><a href="./favorite.html" className="ahrefheader">FAVORITOS</a></li>
            <li className="itemshome"><a href="./genres.html" className="ahrefheader">GENEROS</a></li>
         </ul>
    </nav>

    <div className="divheader">
    <form action="./search-results.html" method="get">
        <input className="buscadoryboton" type="search" name="buscador" value="" placeholder="Peliculas, series..."/>
    </form>
    </div>
    </header>

    )};

    export default Header;
