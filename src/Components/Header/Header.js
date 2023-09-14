import React from "react";
import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";
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
        <Buscador/>
    </div>
    </header>

    )};

    export default Header;
