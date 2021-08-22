import "../styles/Home.css";

import {useState, useEffect} from 'react';
import { db } from '../../firebase';

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";



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

    const {signinWithGoogle, admin} = useAuth()
    const {signout} = useAuth()
     
    return( 
        <div className="main-content">
            <h2 className="homepage-title">Bienvenu.e</h2>
            <div className="home-section-compteur">
                <p>Entrer le code pour vous connecter au compteur.</p>
                <input className="input-code-compteur" type="number" maxLength="4" onChange={(e) => setTempMDP(e.target.value)} onBlur={verify()}></input>
                <Link className="link-compteur home-link"to='/Compteur'>Accès compteur</Link>
            </div>
            <div className="separator"></div>
            {admin ? <p></p>: <div><button className="home-button-connect" onClick={signinWithGoogle}>Connexion Administrateur</button>Si vous n'avez pas les droit vous serez redirigé.<p></p></div>}
            {admin ? 
                <div>
                    <div className="home-section-admin">
                        <Link className="link-admin home-link" to='/Admin'>Accès admin</Link>
                    </div>
                    <p className="connected-informations">Vous êtes connecté avec le compte <strong>{admin.email}</strong></p>
                    <button className="home-button-disconnect" onClick={signout}>Se déconnecter</button>
                </div>
                : <p></p>
            }
            <div className="separator"></div>
        </div> 

    )
}

export default Home