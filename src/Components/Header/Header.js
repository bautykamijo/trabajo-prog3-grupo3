import React from "react";
import './Header.css';

function Header(props) {
    return(

        <header>
    <article class="logo"><img src="./img/logoDelyeMovies.png" alt="Logo DelyeMovies" class="logodelye"/></article>


    <nav>
    <ul class="barranavheader">
            <li class="itemshome"><a href="./index.html" class="ahrefheader">HOME</a></li>
            <li class="itemshome"><a href="./favorite.html" class="ahrefheader">FAVORITOS</a></li>
            <li class="itemshome"><a href="./genres.html" class="ahrefheader">GENEROS</a></li>
         </ul>
    </nav>

   <div class="divheader">
    <form action="./search-results.html" method="get">
        <input class="buscadoryboton" type="search" name="buscador" value="" placeholder="Peliculas, series..."/>
    </form>
</div>
    </header>

    )};

    export default Header;
