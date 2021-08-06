import { useState, useEffect } from 'react'
import '../styles/Compteur.css'
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';



function Compteur({current, user, totalVisitor}){



    let currentdate = Date.now();
    

    
    // FUNCTIONS
    function add(){
        db.collection("visitor").doc("Tyl2gJYGTnmuyJc2175F").set({
            current: current +1,
        });

        db.collection("visitor").doc("Tyl2gJYGTnmuyJc2175F").update({ total: totalVisitor + 1 });

        db.collection("historique").doc().set({ 
            date : currentdate,
            number : current +1
        });
    }

    function under(){
        db.collection("visitor").doc("Tyl2gJYGTnmuyJc2175F").update({
            current: current -1
        })
        db.collection("historique").doc().set({ 
            date : currentdate,
            number : current - 1
        });
    }

    // EFFECTS
    useEffect(()=>{
        document.title = 'LCC - Compteur';

    }, [])

    // RETURN
    if (user === true){
        return (
            <div className="section-compteur">
                <h2 className="compteur-current-number">{current}</h2>
                 <div className="compteur-button" onClick={add}>
                    <h3 className="compteur-button-text">+</h3>
                </div>
                <div className="compteur-button" onClick={under}>
                <h3 className="compteur-button-text">-</h3>
                </div>
            </div>
        )

    } else {
        return (
            <div className="section-compteur">
                <p>Mot de passe incorrect.</p>
                <Link className=""to='/'>Retour à l'accueil</Link>
            </div>
        )
    }

}

export default Compteur