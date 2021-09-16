import LittleCard from '../composants/LittleCards';
import LargeCard from './LargeCard';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import ReactPDF, {PDFDownloadLink} from '@react-pdf/renderer';
import FormData from '../composants/FormData';

import '../styles/Dashboard.css';
import {  useState } from 'react';
import { format } from 'date-fns';

function Dashboard({Nav, currentdata, db, totalVisitor}){
    //VARIABLE
    const [currentPassword, setPassword] = useState();
    const [passwordUpdate, setPasswordUpdate] = useState();
    const [tempPassword, setTempPassword] = useState();


    useEffect( () => {
        db.collection("password").doc("GsJ7CqWKLXATv6S1dINp").get().then((doc) => {
            setPassword(doc.data().password);
            setPasswordUpdate(doc.data().update_at);
        });
    }, [])
    
    // FUNCTIONS
    //reset current number
    function changeCurrentNumber(){
        let currentdate = Date.now();
        db.collection("visitor").doc("current").update({
            current_number: 0,
            update_at: format(new Date(currentdate), "dd/MM/yyyy HH:mm:ss")
          });
          alert('Le compteur a bien été réinitialisé.')
    }

    //reset password
    function changePasswordCompteur(data){
        let currentdate = Date.now();
        db.collection("password").doc("GsJ7CqWKLXATv6S1dINp").update({
            password: data,
            update_at : format(new Date(currentdate), "dd/MM/yyyy HH:mm:ss")
          });
          alert('Le code Compteur a bien été changé par : ' + data)
    }

    // init datas for PDF export 
    // const [max, setMax] = useState([]);
    // useEffect( () => {
    //     let docRef =  db.collection("historique").orderBy('number', 'desc').limit(1);

    //    docRef.get().then((doc) => {
    //        console.log(doc.data());
    //         // const docData = doc.data();
    //         // setMax(docData);
    //     });
    // }, [])


    if (Nav === 'Statistiques'){
        return (
            <div className="dashboard-section-2">
                <h2 className="dashboard-title">{Nav}</h2>
                <div className="separator"></div>
                <div className="card-section">
                    <LittleCard title='Visiteurs Actuels' content={currentdata.current_number} date={currentdata.update_at}/>
                    <LittleCard title='Visiteurs Totaux' content={totalVisitor.totalNumber} date={totalVisitor.update_at}/>
                    <LittleCard title='Code compteur' content={currentPassword} date={passwordUpdate}/>
                </div>
                <div className="card-section">
                    <LargeCard title="Courbe" db={db}/>
                </div>
            </div>
        )

    } else if (Nav === 'Paramètres') {
        return(
            <div className="dashboard-section-2">
                <h2 className="dashboard-title">{Nav}</h2>
                <div className="separator"></div>
                <div>
                <input type="number" onChange={(e) => setTempPassword(e.target.value)}></input>
                <button className="button-action" onClick={() => changePasswordCompteur(tempPassword)}>Changer le code du compteur</button>
                </div>
                <button onClick={changeCurrentNumber}>Remettre le compteur à zéro</button>


                <FormData totalVisitor={totalVisitor}/>
                <p>La supression des données de visite doit être faite manuellement dans Firebase.</p>
            </div>
        )

    } else {
        return(
        <div className="dashboard-section-2">
                <h2 className="dashboard-title">{Nav}</h2>
                <p>Rien à afficher </p>
        </div>
        )
    }
}

export default Dashboard