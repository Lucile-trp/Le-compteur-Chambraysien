import '../styles/Admin.css'

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

import { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

import Dashboard from '../composants/Dashboard.js';
import SmallNav from '../composants/SmallNav.js';




function AdminPage({currentdata, db, setCurrent, totalVisitor}){
    //VARIABLES
    const [Nav, setNav] = useState('Statistiques');
    let history = useHistory();

    // PAGE TITLE
    useEffect( () =>{document.title= 'LCC Admin - ' + Nav ; },[Nav])



    //FUCNTIONS
    ///disconnect TODO

    function logOut() {
        
        firebase.auth().signOut().then(() => {
            console.log("Vous avez bien été déconnecté")
            history.push("/");
          }).catch((error) => {
            console.log(error)
          });
    }
    


    return(

        <div className="main-section">
            <div className="nav">
                <section className="nav-section">
                    <h3 className="nav-title">Administration</h3>
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/Admin" className="nav-link link-stat" onClick={()=> setNav('Statistiques')}>Statistiques</Link>
                    <Link to="/Admin" className="nav-link link-password" onClick={()=> setNav('Paramètres')}>Paramètres</Link>
                </section>
                <section className="nav-section">
                    <h3 className="nav-title">Hébergement et Base de données</h3>
                    <a href="https://firebase.google.com/" className="nav-link" rel="noreferrer" target="_blank">Firebase</a>
                </section>

                <section className="nav-section">
                    <h3 className="nav-title">_</h3>
                    <button className="nav-link button-disconnect" onClick={ () => logOut()}>Se déconnecter</button>
                </section>
            </div>
            <div className="small-screen-nav"> 
                <SmallNav  setNav={setNav}/>
            </div>

            <section className="main-dashboard-section">
                <Dashboard Nav={Nav} currentdata={currentdata} db={db} setCurrent={setCurrent} totalVisitor={totalVisitor}/>
            </section>
        </div>
    )
}
export default AdminPage