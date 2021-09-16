import { useEffect } from 'react'
import { Link } from "react-router-dom";
import 'firebase/firestore';
import { db } from '../../firebase';
import format from 'date-fns/format'

import '../styles/Compteur.css'


function Compteur({current, user, totalVisitor}){
    //DOCUMENT TITLE
    useEffect(()=>{
        document.title = 'LCC - Compteur';

    }, [])

    //VARIABLE
    let currentdate = Date.now();
    
    // FUNCTIONS
    function add(){
        db.collection("visitor").doc("current").update({
            current_number: current.current_number +1,
            update_at: format(new Date(currentdate), 'dd/MM/yyyy HH:mm:ss')
        });

        db.collection("visitor").doc("total").update({ 
            totalNumber: totalVisitor.totalNumber + 1, 
            update_at : format(new Date(currentdate), 'dd/MM/yyyy HH:mm:ss')
        });

        db.collection("historique").doc().set({ 
            date : currentdate,
            number : current.current_number +1,
            value : "+1"
        });
    }

    function under(){
        db.collection("visitor").doc("current").update({
            current_number: current.current_number -1
        })
        db.collection("historique").doc().set({ 
            date : currentdate,
            number : current.current_number - 1,
            value: "-1"
        });
    }

    // EFFECTS
    

    // RETURN
    if (user === true){
        return (
            <div className="section-compteur">
                <h2 className="compteur-current-number">{current.current_number}</h2>
                <p className="compteur-current-number-update-at">{current.update_at}</p>
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