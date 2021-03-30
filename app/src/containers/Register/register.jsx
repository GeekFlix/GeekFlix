<<<<<<< HEAD:app/src/containers/Register/Register.jsx
import React, { useState } from 'react'
=======

import React, {useState} from 'react'
>>>>>>> 83c1f94230abd9868695967933f255d7c941c2e3:app/src/containers/Register/register.jsx
import { useHistory } from 'react-router';
// import checkError from '../../tools/error.handlers'



import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import axios from 'axios';
import { connect } from 'react-redux';
import {REGISTER} from '../../redux/types/userTypes';



const Register = (props) => {

    const history = useHistory();

    //Hoooks
    const [dataRegister, setRegister] = useState ({
        userName: '', 
        email: '', 
        password: ''
    })

    //Handlers para el manejo del error y validación de los datos
    

    const sendData = async () => {
        
        console.log('Estamos dentrísimo !!')
        
        //Nos traemos por Axios los datos del backend
        let result = await axios.post(`localhost:3000/user/`, dataRegister);

        //Mandamos los datos de Register por Redux a store
        props.dispatch({ type: REGISTER, payload: result })

        setRegister(result.data);

        //Salimos de la vista Register hacia Payment
        return setTimeout(() => {
        history.push('/payment')
        }, 1000);
    };

   
    const [message,setMessage] = useState('');

    //Error management

    // setMessage('');

    // let errorMessage = checkError("el estado que utilices");
    
    // setMessage(errorMessage);

    // if(errorMessage){
    //     return;
    // }

    return (
        <div>
            <div className="stepCollection">
                <div className="steps">
                    <ul className="nav">
                        <div className="go toRegister">Crear cuenta</div>
                        <div className="go toPayment" onClick={() => {history.push('/payment')}}>Detalles de pago</div>
                        <div className="go toLogin" onClick={() => {history.push('/login')}}>Comenzar a ver</div>
                    </ul>  
                </div>
                <div className="registerForm">
                    <Form>
                        <FormGroup className="registerFormGroup">
                            <Label for="exampleUserName">Username </Label>
                            <br></br>
                            <Input/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email </Label>
                            <br></br>
                            <Input/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Contraseña </Label>
                            <br></br>
                            <Input/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <Button className="registerButton" onClick={() => sendData()}>Enviar</Button>
                    </Form>
                    <div className='errorMessage'>{message}</div>       
                </div>    
            </div>
        </div>
    )
}

export default connect()(Register);
