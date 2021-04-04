import React, { useState } from 'react'
import { useHistory } from 'react-router';

//Importaciones para componente y elementos de formulario y validación de errores
import {regExp} from '../../tools/error.handlers';
import Input from '../../components/input/input';
import { BtnContainer, BtnForm, ErrorMessage, SuccessMessage, ValidationIcon, Form } from '../../components/input/elements';
import { FaRegTimesCircle, FaRegUserCircle } from 'react-icons/fa';


import axios from 'axios';
import { connect } from 'react-redux';
import { REGISTER } from '../../redux/types/userTypes';



const Register = (props) => {

    
    const history = useHistory();
    
    //Hoooks para cada campo de validación
    const [dataEmail, handleEmail] = useState({field: '', valid: null})
    const [dataPassword, handlePassword] = useState({field: '', valid: null})
    const [dataUserName, handleUserName] = useState({field:''})
    const [formValid, handleValid] = useState({field: '', valid: 'false'})


    const handleOnKeyDown = (event) => {
        if(event.keyCode === 13) sendData()
    };


    const onSubmit = (e) => {
        e.preventDefault();
  
        if(
          dataEmail.valid === 'true' && dataPassword.valid === 'true' && dataUserName !== false
        ){
          handleValid(true);
          handleEmail({field: '', valid: null});
          handlePassword({field: '', valid: null});
          handleUserName({userName: '', valid: true})
        }else {
          handleValid(false);
        }
    };

    const sendData = async () => {
        
       try {
            const body = {
                userName: dataUserName.field, 
                email: dataEmail.field,
                password: dataPassword.field
            }

            //Nos traemos por Axios los datos del backend
            let result = await axios.post('http://localhost:3000/user/', body);
            
            //Mandamos los datos de Register por Redux a store
            props.dispatch({ type: REGISTER, payload: result.data })
            
            //Salimos de la vista Register hacia Payment
            return setTimeout(() => {
            history.push('/payment')
            }, 1000);

       } catch (error) {
            console.log('Something was wrong!!!')
       } 
    };

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
                <Form action="" onSubmit={onSubmit}>
                    <Input 
                    state={dataEmail}
                    type="email" 
                    label="Email" 
                    maxLength="50" 
                    name="email" 
                    onKeyDown={handleOnKeyDown}
                    errorLegend='El usuario debe introducir un email'
                    regExp={regExp.email}
                    placeholder="email@email.com"
                    changeState={handleEmail}
                    />
                    <Input 
                        state={dataPassword}
                        type="password" 
                        label="Password" 
                        maxLength="50" 
                        name="password" 
                        changeState={handlePassword} 
                        onKeyDown={handleOnKeyDown}
                        errorLegend='El usuario debe introducir un email'
                        regExp={regExp.password}
                        placeholder="email@email.com"
                    />
                    <Input 
                        state={dataUserName}
                        type="text" 
                        label="UserName" 
                        maxLength="50" 
                        name="userName" 
                        changeState={handleUserName} 
                        onKeyDown={handleOnKeyDown}
                        placeholder="email@email.com"
                    />
                    {formValid === false && <ErrorMessage>
                        <p>
                        <ValidationIcon icon={FaRegTimesCircle}></ValidationIcon>
                        <b>Error:</b>Por favor rellena el formulario 
                        </p>
                    </ErrorMessage>}
                    <BtnContainer>
                        <BtnForm type="submit" onClick={() => sendData()}>Enviar</BtnForm>
                        {formValid === true && <SuccessMessage>Formulario completado exitosamente</SuccessMessage>}
                    </BtnContainer>
                    </Form>
                </div>    
            </div>
        </div>
    )
}

export default connect()(Register);
