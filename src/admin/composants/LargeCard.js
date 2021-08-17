import { useEffect, useState } from 'react';
import format from 'date-fns/format'

import '../styles/LargeCard.css'
import Canvas from '../composants/Canvas'

function LargeCard({title, db}){
    const [docs, setDocs] = useState([]);

    useEffect( () => {
        db.collection("historique").orderBy('date').get().then((querySnapshot) => {
            let tmp = [];
            querySnapshot.forEach((doc) => {
                const docData = doc.data();
                tmp.push(docData)
            });
            setDocs(tmp);
        });
    }, [])


    return(
        <div className="large-card">
            <h2>{title}</h2>
            <Canvas valuesHistorique={docs.map(e => e.number)} dateHistorique={docs.map(e => format(new Date(e.date), 'dd/MM'))}/>
        </div>
    )

}

export default LargeCard