import '../styles/Admin.css'

import { useState } from 'react'
import { Link, useHistory} from "react-router-dom";

import MenuIcon from '../composants/MenuIcon.js';

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';



function SmallNav({setNav}){

    const [IsOpen, SetIsOpen] = useState(false);
    const history = useHistory();

    //FUCNTIONS
    ///disconnect
    function logOut() {
        firebase.auth().signOut().then(() => {
            console.log("Vous avez bien été déconnecté")
            history.push("/");
          }).catch((error) => {
            console.log(error)
          });
    }
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
            <a href="https://console.firebase.google.com/u/1/project/le-compteur-chambraysien/overview" className="nav-link" rel="noreferrer" target="_blank">Firebase</a>
        </section>
        <section className="nav-section">
            <h3 className="nav-title">_</h3>
            <button className="nav-link button-disconnect" onClick={ () => logOut()}>Se déconnecter</button>
        </section>
    </div>
    ) : (
        <div className="nav-container-small" >
        <MenuIcon isOpen={IsOpen} setIsOpen={SetIsOpen}/>
        </div>

    )
}

export default SmallNav