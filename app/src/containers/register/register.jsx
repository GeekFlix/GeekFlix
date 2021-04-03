import React, { useState } from 'react'
import { useHistory } from 'react-router';
import checkError from '../../tools/error.handlers'

import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import axios from 'axios';
import { connect } from 'react-redux';
import { REGISTER } from '../../redux/types/userTypes';



const Register = (props) => {

    
    const history = useHistory();
    
    //Hoooks
    const [dataRegister, setRegister] = useState ({
        userName: '', 
        email: '', 
        password: ''
    })
    
    const [message,setMessage] = useState('');
    
    //Handlers para el manejo del error y validación de los datos
    const stateHandler = (event) => {
        setRegister({...dataRegister, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});
            
    };
    

    const sendData = async () => {
        
       try {
           
            //Nos traemos por Axios los datos del backend
            let result = await axios.post('http://localhost:3000/user/', dataRegister);
            
            //Mandamos los datos de Register por Redux a store
            props.dispatch({ type: REGISTER, payload: result })
            
            setRegister(result.data);
            
            console.log(result.data, 'esto es result.data')
            
            //Salimos de la vista Register hacia Payment
            return setTimeout(() => {
            history.push('/payment')
            }, 1000);
       } catch (error) {
            setMessage('Something was wrong!!!')
       } 

        //Error management
    
        setMessage('');
    
        let errorMessage = checkError("el estado que utilices");
        
        setMessage(errorMessage);
    
        if(errorMessage){
            return;
        }
    };

   


    return (
        <div>
            <pre>{JSON.stringify(dataRegister, null,2)}</pre>
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
                            <Label for="username">Username </Label>
                            <br></br>
                            <Input type="text" id="userName" name="userName" onChange={stateHandler}/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email </Label>
                            <br></br>
                            <Input type="text" id="email" name="email" onChange={stateHandler}/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Contraseña </Label>
                            <br></br>
                            <Input type="password" id="password" name="password" onChange={stateHandler}/>
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
