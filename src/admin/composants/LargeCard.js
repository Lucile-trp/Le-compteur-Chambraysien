import { useEffect, useState } from 'react';

function LargeCard({title, db}){

    var collectionHistory = db.collection("historique");
    var options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
      };

    function getHistorique(){
        db.collection("historique").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(" => ", doc.data());
            });
        });
    }

    //RECUPERATION D4UNE DONNEE

    const [oneDate, setDate] = useState('');
    const [oneNumberV, setNumberV] = useState('');

    useEffect( () => {
        db.collection("historique").doc("avPeRfOaSYueieVFIolP").get().then((doc) => {
            const data = doc.data().date;
            const dataValue = new Intl.DateTimeFormat('default', options).format(data);
            setDate(dataValue);
            const datanumber = doc.data().number;
            setNumberV(datanumber);
        })
    },[]);


    return(
        <div>
            <h2 onClick={() => getHistorique()}>{title}</h2>
            <p> Visiteurs : {oneNumberV} / Le :{oneDate} </p>
        </div>
    )

}

export default LargeCard