import '../styles/LargeCard.css'

import { useEffect, useState } from 'react';
import format from 'date-fns/format'
import Canvas from './Canvas'




function LargeCard({title, db}){
    const [docs, setDocs] = useState([]);



    function chargingdata(){
        db.collection("historique").orderBy('date').get().then((querySnapshot) => {
            let tmp = [];
            querySnapshot.forEach((doc) => {
                const docData = doc.data();
                tmp.push(docData)
            });
            setDocs(tmp);
            console.log("recupération des données historique")
        });
    }

    return(
        <div className="large-card">
            <h2>{title}</h2>
            <Canvas valuesHistorique={docs.map(e => e.number)} dateHistorique={docs.map(e => format(new Date(e.date), 'dd/MM'))}/>
            
            <button onClick={() => chargingdata()}>Charger les données "historique"</button>
        </div>
    )

}

export default LargeCard