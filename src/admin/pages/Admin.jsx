import '../styles/Admin.css'

import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import Dashboard from '../composants/Dashboard.js';
import SmallNav from '../composants/SmallNav.js';




function AdminPage({current, db, setCurrent, totalVisitor}){

    const [Nav, setNav] = useState('Statistiques');

    useEffect( () =>{
        document.title= 'LCC Admin - ' + Nav ;

    },[Nav]) 


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
                    <a href="https://firebase.google.com/" className="nav-link" target="_blank">Firebase</a>
                </section>
            </div>
            <div className="small-screen-nav"> 
                <SmallNav  setNav={setNav}/>
            </div>

            <section className="main-dashboard-section">
                <Dashboard Nav={Nav} current={current} db={db} setCurrent={setCurrent} totalVisitor={totalVisitor}/>
            </section>
        </div>
    )
}
export default AdminPage