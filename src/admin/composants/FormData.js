

import { useEffect, useState } from 'react';
import ReactPDF, {PDFDownloadLink} from '@react-pdf/renderer';
import PdfExport from '../composants/PdfExport';



function FormData({totalVisitor, db}){

    const [eventName, setEventName] = useState('')

    if(eventName != ''){
        return(
            <PDFDownloadLink document={<PdfExport eventName={eventName} totalVisitor={totalVisitor} />} fileName="report_compteur.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
            </PDFDownloadLink>

        )
    } else {
        return(
            <div className="container-formdata">
                <form>
                    <label>Nom de l'évènement</label>
                    <input type="text" onBlur={(e) => setEventName(e.target.value)}></input>
    
                    <label>image</label>
                    <input type="file"></input>
                </form>
                
            </div>
        )
    }
}

export default FormData