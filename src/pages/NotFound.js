import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return(
        <div className='not-found'>
            <h2>Erro</h2>
            <p>A página que você tentou acessar não foi encontrada!</p>
            <Link to='/'>Voltar para Home</Link>
        </div>
    )
}

export default NotFound