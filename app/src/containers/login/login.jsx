import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/types/userTypes";
import { ADMINLOGIN } from "../../redux/types/adminTypes";
import { Link, useHistory } from 'react-router-dom';


import logo from '../../assets/img/geekflix-green.png';
import popcorn from '../../assets/img/popcorn.jpg';

//Importaciones para componente y elementos de formulario y validación de errores
import { BtnContainer, BtnForm, ErrorMessage, SuccessMessage, ValidationIcon, Form } from '../../components/input/elements';
import { FaRegTimesCircle } from 'react-icons/fa';
import {fields, regExp} from '../../tools/error.handlers';
import Input from '../../components/input/input';




const Login = (props) => {

    const history = useHistory();

    //Hooks para cada campo de validación
    const [dataEmail, handleEmail] = useState({field: '', valid: null})
    const [dataPassword, handlePassword] = useState({field: '', valid: null})
    const [dataUser, handleUser] = useState({userType: 'Client'})
    const [formValid, handleValid] = useState({field: '', valid: 'false'})


    // const regExp = {
    //   email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
    //   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    // }
    

    const handleOnKeyDown = (event) => {
        if(event.keyCode === 13) sendLogin()
    };


    const onSubmit = (e) => {
      e.preventDefault();

      if(
        dataEmail.valid === 'true' && dataPassword.valid === 'true' && dataUser !== false
      ){
        handleValid(true);
        handleEmail({field: '', valid: null});
        handlePassword({field: '', valid: null});
        handleUser({userType: '', valid: true})
      }else {
        handleValid(false);
      }
    }

    const sendLogin = async () => {

        try {
            const body = {
              email: dataEmail.field, 
              password: dataPassword.field, 
              userType: dataUser.field
            }

            console.log(dataUser, 'dataUser')
            if(dataUser.userType === 'Client') {
                const result = await axios.post('http://localhost:3000/user/login', body)
                console.log(result.data, 'esto es RESULT');
                props.dispatch({type: LOGIN, payload: result.data});
                return setTimeout(() => {history.push('/home-movie')}, 100);

            }else {
    
                const resultAdmin = await axios.post('http://localhost:3000/admin/login',dataUser, dataEmail, dataPassword)
                props.dispatch({type: ADMINLOGIN, payload: resultAdmin.data});
                return setTimeout(() => {history.push('/home-admin')}, 100);
            };

        } catch (error) {
            // setMessage('Email or password not found');
            console.log(error, 'Email or password not found')
        };

    };


  return (
    
    <div className="loginBody">
      {/* <pre color="white">{JSON.stringify(dataEmail, null,2)}</pre>
      <pre color="white">{JSON.stringify(dataPassword, null,2)}</pre>
      <pre color="white">{JSON.stringify(dataUser, null,2)}</pre> */}
      <div className="imgGeek"><Link to='/'><img src={logo} alt="logo"/></Link></div>
      <div className="formContainer">
        <div className="contentLogin">
          <div className="titleLoginUp">Ponte cómodo...</div>
          <div className="imgLogin"><img src={popcorn} alt="logo" className="img"></img></div>
      </div>
      <div className="formLogin">
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
          {formValid === false && <ErrorMessage>
            <p>
              <ValidationIcon icon={FaRegTimesCircle}></ValidationIcon>
              <b>Error:</b>Por favor rellena el formulario 
            </p>
          </ErrorMessage>}
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

          <select className="select" name="userType" defaultValue={'DEFAULT'} onChange={()=>handleUser()}>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>

          {formValid === false && <ErrorMessage>
            <p>
              <ValidationIcon icon={FaRegTimesCircle}></ValidationIcon>
              <b>Error:</b>Por favor rellena el formulario 
            </p>
          </ErrorMessage>}
          <BtnContainer>
            <BtnForm type="submit" onClick={() => sendLogin()}></BtnForm>
            {formValid === true && <SuccessMessage>Formulario completado exitosamente</SuccessMessage>}
          </BtnContainer>
        </Form>
      </div>
      </div>
    </div>
  );
}

export default connect()(Login);


