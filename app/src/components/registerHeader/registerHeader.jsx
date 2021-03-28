
import React, {useState, useEffect} from 'react'

//import { Link } from 'react-router-dom';

import { Progress } from 'reactstrap';

import Payment from '../../containers/payment/payment';
import LoginRegister from '../../containers/login-register/loginRegister';

const RegisterHeader = (props) => {

    const [value, setValue] = useState("1");    

    console.log(value, 'esto es el valor');
   
    const selectValue = () => {
        if ('/payment') {
            setValue("2")
        }
        if('/loginregister'){
            setValue("3")
        }
    }
  
    useEffect(() => {
        
    }, []);
     

    return (
        <div className="container-nav-progress">
            <ul className="nav">
                {/* <Link to="/register">Crear cuenta</Link>  
                <Link to="/payment">Detalles de pago</Link>
                <Link to="/loginregister">Comenzar a ver</Link> */}
                <p>Crea tu cuenta</p>
                <p>Elige tu método de pago</p>
                <p>Comenzar a ver</p>
            </ul>
            <div className="progressBar">
                <Progress value="1" max="3"/>
            </div>   
        </div>
    )
}

export default RegisterHeader;
