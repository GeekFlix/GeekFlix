import React, { useState } from 'react'
import { useHistory } from 'react-router';
// import checkError from '../../tools/error.handlers'



import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';



const Register = () => {

    const history = useHistory();

    const next = () => {
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
                        <Button className="registerButton" onClick={next}>Enviar</Button>
                    </Form>
                    <div className='errorMessage'>{message}</div>       
                </div>    
            </div>
        </div>
    )
}

export default Register
