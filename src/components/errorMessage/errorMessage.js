import React from 'react';
import { Alert, Button  } from 'reactstrap';
import { Link} from 'react-router-dom';
import './errorMessage.css'

const ErrorMessage = () => {
    
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.jpeg'} alt = 'error'></img>
            <Alert color="danger">Что -то пошло не так!!!</Alert>
            <Link to = '/'><Button color="primary">Вернутся на главную страницу</Button></Link>
        </>
    )
}

export default ErrorMessage;