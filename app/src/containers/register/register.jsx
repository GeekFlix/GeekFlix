import React, {useState} from 'react'
import { useHistory } from 'react-router';
import checkError from '../../tools/error.handlers'
import axios from 'axios';



import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import { connect } from 'react-redux';
import {REGISTER} from '../../redux/types/userTypes';


const Register = (props) => {
    const history = useHistory();

    const [message,setMessage] = useState();

    //Hoooks
    const [dataRegister, setRegister] = useState ({
        userName: '', 
        email: '', 
        password: ''
    })

    //Handlers para el manejo del error y validación de los datos
    const stateHandler = (event) => {
        setRegister({...dataRegister, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };
    

    const sendData = async () => {
        
        // Error management
    
        setMessage('');
    
        let errorMessage = checkError(dataRegister);
        
        setMessage(errorMessage);
    
        if(errorMessage){
            return;
        };

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
            setMessage('User, email or password incorrect');
        };

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
                            <div className='errorMessage'>{message}</div>       
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email </Label>
                            <br></br>
                            <div className='errorMessage'>{message}</div>       
                            <Input type="text" id="email" name="email" onChange={stateHandler}/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Contraseña </Label>
                            <br></br>
                            <div className='errorMessage'>{message}</div>       
                            <Input type="password" id="password" name="password" onChange={stateHandler}/>
                            <FormFeedback></FormFeedback>
                            <FormText></FormText>
                        </FormGroup>
                        <Button className="registerButton" onClick={() => sendData()}>Enviar</Button>
                    </Form>
                </div>    
            </div>
        </div>
    );
};

export default connect()(Register);
