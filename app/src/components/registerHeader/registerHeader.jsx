
import React from 'react'

import { Link } from 'react-router-dom';

import { Progress } from 'reactstrap';

const RegisterHeader = () => {
    return (
        <div className="container-nav-progress">
            <ul className="nav">
                <Link to="/register">Crear cuenta</Link>  
                <Link to="/payment">Detalles de pago</Link>
                <Link to="/login">Comenzar a ver</Link>
            </ul>
            <div className="progressBar">
                <Progress value="1" max="3" />
            </div>  
        </div>
    )
}

export default RegisterHeader;
