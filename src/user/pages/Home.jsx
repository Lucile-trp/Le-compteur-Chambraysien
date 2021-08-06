import "../styles/Home.css";

import {useState, useEffect} from 'react';
import { db } from '../../firebase';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Home({user, setUser}){

    const [tempMDP, setTempMDP] = useState();
  
    function verify(){
        db.collection("password").doc("GsJ7CqWKLXATv6S1dINp").get().then((doc) => {
            if (tempMDP == doc.data().password){
                setUser(true)
              } else {
                setUser(false);
              }
        });
    }

    useEffect(() => {
        document.title= 'LCC - Accueil'

    }, [])

    
    return( 
        <div className="main-content">
            <h2 className="homepage-title">Bienvenu.e</h2>
            <div className="home-section-compteur">
                <p>Entrer le code pour vous connecter au compteur.</p>
                <input className="input-code-compteur" type="number" onChange={(e) => setTempMDP(e.target.value)} onBlur={verify()}></input>
                <Link className="link-compteur home-link"to='/Compteur'>Accès compteur</Link>
            </div>
            <div className="separator"></div>

            <div className="home-section-admin">
                <Link className="link-admin home-link" to='/Admin'>Accès admin</Link>
            </div>
            <div className="separator"></div>
        </div> 

    )
}

export default Home