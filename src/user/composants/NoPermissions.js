import React from 'react';
import { Link } from 'react-router-dom';

function PErmissionDenied(){

    return (
        <div>
            <h1>101 - Permissions denied</h1>
            <Link to="/">
            Retourner à l'accueil.
            </Link>
        </div>
    )
}
export default PermissionDenied;