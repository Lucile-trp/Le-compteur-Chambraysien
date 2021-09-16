import '../styles/FormData.css'

import { useState } from 'react';
import {PDFDownloadLink} from '@react-pdf/renderer';
import PdfExport from './PdfExport';



function FormPDF({totalVisitor, db}){

    const [eventName, setEventName] = useState('');
    const [fileUploded, setFileUploaded] = useState(null);
    const [dataFD, setDataFD] = useState(null);
    const [dataSD, setDataSD] = useState(null);

    const uploadFile = (e)=> {
        if(e.target.value){
            const file = e.target.files;
            setFileUploaded(URL.createObjectURL(file[0]))
        }
    }

    function chargingData() {
        let tmp18 = 0;
        let tmp19 = 0;
        db.collection('historique').where('value', '==', '+1').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                if (data.date >  1631916000000 && data.date < 1632002400000){ 
                    tmp18 = tmp18 + 1
                } else if (data.date > 1632002400000 && data.date < 1632088800000){
                    tmp19 = tmp19 + 1
                }
                setDataFD(tmp18)
                setDataSD(tmp19)
            });
        })
        console.log('premier j =>' + dataFD,'second jour =>' + dataSD)
    }


    if(eventName != '' && fileUploded != null && dataFD != null && dataSD != null){
        return(
            <PDFDownloadLink document={<PdfExport eventName={eventName} totalVisitor={totalVisitor} image={fileUploded} dataFD={dataFD} dataSD={dataSD} />} fileName="report_compteur.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Chargement...' : 'Télécharger'
                    }
            </PDFDownloadLink>

        )
    } else {
        return(
            <div className="container-formdata">
                <h3>Formulaire pour générer le PDF</h3>
                <form className="formulaire" encType="multipart/form-data">
                    <label>Nom de l'évènement</label>
                    <input type="text" onBlur={(e) => setEventName(e.target.value)}></input>
    
                    <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadFile}></input>
                </form>

                <button onClick={() => chargingData()}>Charger les données</button>
                
            </div>
        )
    }
}

export default FormPDF