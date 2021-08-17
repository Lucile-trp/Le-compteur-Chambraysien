import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

import "../styles/Home.css";

import {useState, useEffect} from 'react';
import { db } from '../../firebase';

import { Link } from "react-router-dom";



function Home({user, setUser}){
    //TITRE DE L'ONGLET
    useEffect(() => { document.title= 'LCC - Accueil'}, [])

    //VERIFICATION MDP COMPTEUR 
    const [tempMDP, setTempMDP] = useState();
  
    function verify(){
        db.collection("password").doc("GsJ7CqWKLXATv6S1dINp").get().then((doc) => {
            if (tempMDP === doc.data().password){
                setUser(true)
              } else {
                setUser(false);
              }
        });
    }

    // AUTH WITH GOOGLE
    const provider = new firebase.auth.GoogleAuthProvider();

    function googleSignin() {
        firebase.auth()
        .signInWithPopup(provider).then(function(result) {
           var token = result.credential.accessToken;
           var user = result.user;
             
           console.log(token)
           console.log(user)
        })
     }

     
    return( 
        <div className="main-content">
            <h2 className="homepage-title">Bienvenu.e</h2>
            <div className="home-section-compteur">
                <p>Entrer le code pour vous connecter au compteur.</p>
                <input className="input-code-compteur" type="number" maxLength="4" onChange={(e) => setTempMDP(e.target.value)} onBlur={verify()}></input>
                <Link className="link-compteur home-link"to='/Compteur'>Accès compteur</Link>
            </div>
            <div className="separator"></div>

            <div className="home-section-admin">
                <Link className="link-admin home-link" to='/Admin'>Accès admin</Link>
            </div>
            <button onClick ={() => googleSignin()}>Google Signin</button>
            <div className="separator"></div>
        </div> 

    )
}

export default Home