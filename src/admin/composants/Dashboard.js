import LittleCard from '../composants/LittleCards';
import LargeCard from './LargeCard';
import '../styles/Dashboard.css'
import { useEffect, useState } from 'react';

function Dashboard({Nav, current, db, totalVisitor}){
    //VARIABLE
    const [currentPassword, setPassword] = useState();
    const [tempPassword, setTempPassword] = useState();
    
    db.collection("password").doc("GsJ7CqWKLXATv6S1dINp").onSnapshot((doc) => {
        setPassword(doc.data().password);
    });

    function changeCurrentNumber(){
        db.collection("visitor").doc("Tyl2gJYGTnmuyJc2175F").set({
            current: 0
          });
          alert('Le compteur a bien été réinitialisé.')
    }

    function changePasswordCompteur(data){
        db.collection("password").doc("GsJ7CqWKLXATv6S1dINp").set({
            password: data
          });
          alert('Le code Compteur a bien été changé par : ' + data)

    }


    if (Nav == 'Statistiques'){
        return (
            <div className="dashboard-section-2">
                <h2 className="dashboard-title">{Nav}</h2>
                <div className="separator"></div>
                <div className="card-section">
                    <LittleCard title='Visiteurs Actuels' content={current}/>
                    <LittleCard title='Visiteurs Totaux' content={totalVisitor}/>
                    <LittleCard title='Code compteur' content={currentPassword}/>
                </div>
                <div className="card-section">
                    <LargeCard title="Courbe" db={db}/>
                </div>
            </div>
        )

    } else if (Nav == 'Paramètres') {
        return(
            <div className="dashboard-section-2">
                <h2 className="dashboard-title">{Nav}</h2>
                <div className="separator"></div>
                <div>
                <input type="number" onChange={(e) => setTempPassword(e.target.value)}></input>
                <button className="button-action" onClick={() => changePasswordCompteur(tempPassword)}>Changer le code du compteur</button>
                </div>
                <button onClick={changeCurrentNumber}>Remettre le compteur à zéro</button>
                <button>Exporter les statistiques en PDF</button>
                <p>La suppression des données de visite doit être fait manuelle dans Firebase.</p>
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