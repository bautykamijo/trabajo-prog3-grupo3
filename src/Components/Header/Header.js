import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return(

        <header>
    <article className="logo"><img src="./img/logoDelyeMovies.png" alt="Logo DelyeMovies" className="logodelye"/></article>

    <nav>
    <ul className="barranavheader">
            <li className="itemshome"><Link to='/' className="ahrefheader">HOME</Link></li>
            <li className="itemshome"><Link to='/favorites' className="ahrefheader">FAVORITES</Link></li>
            <li className="itemshome"><Link to='/generos' className="ahrefheader">GENEROS</Link></li>
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
