import '../styles/Footer.css'
import { useState } from 'react';

function Footer(){

    const [easterEgg, setEasterEgg] = useState(false);
    const value = "{ ˃̵̑ᴥ˂̵̑} - 🦦"

    if (easterEgg) {
        return (
            <div className="section-footer">
                <p className="footer-text" onClick={() => setEasterEgg(false)}>© {value}</p>
            </div>
        )

    } else {
        return (
            <div className="section-footer">
                <p className="footer-text" onClick={() => setEasterEgg(true)}>© Le Comptoir Chambraysien - Made with ♥️ by Lucile</p>
            </div>
        )
    }
}

export default Footer