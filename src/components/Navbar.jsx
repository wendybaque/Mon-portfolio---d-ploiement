import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav role="navigation">
        <input type="checkbox" id="active"/>
        <label htmlFor="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
            <ul>
                <li><a href="#Intro">Introduction</a></li>
                <li><a href="#About">A propos</a></li>
                <li><a href="#Skills">Compétence</a></li>
                <li><a href="#Projects">Projets</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;