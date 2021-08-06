import '../styles/Admin.css'

import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import MenuIcon from '../composants/MenuIcon.js';

function SmallNav({setNav}){

    const [IsOpen, SetIsOpen] = useState(false);

    return IsOpen ? (

    <div className="nav-container-small" >
        <MenuIcon isOpen={IsOpen} setIsOpen={SetIsOpen}/>
        <section className="nav-section">
            <h3 className="nav-title">Administration</h3>
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/Admin" className="nav-link link-stat" onClick={()=> setNav('Statistiques')}>Statistiques</Link>
            <Link to="/Admin" className="nav-link link-password" onClick={()=> setNav('Paramètres')}>Paramètres</Link>
        </section>
        <section className="nav-section">
            <h3 className="nav-title">Hébergement et Base de données</h3>
            <a href="https://console.firebase.google.com/u/1/project/le-compteur-chambraysien/overview" className="nav-link" target="_blank">Firebase</a>
        </section>
    </div>
    ) : (
        <div className="nav-container-small" >
        <MenuIcon isOpen={IsOpen} setIsOpen={SetIsOpen}/>
        </div>

    )
}

export default SmallNav