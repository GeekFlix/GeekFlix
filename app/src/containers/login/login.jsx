import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/types/userTypes";
import { ADMINLOGIN } from "../../redux/types/adminTypes";
import { Link, useHistory } from 'react-router-dom';





import checkError from '../../tools/error.handlers'
import logo from '../../assets/img/geekflix-green.png';
import popcorn from '../../assets/img/popcorn.jpg';
import Input from '../../components/input/input';
// import Btn from '../../components/btn/btn';


const Login = (props) => {

    const history = useHistory();
    
    const [dataLogin,setLogin] = useState({

        email : '',
        password: '',
        userType: 'Client'
    }); 

    const [message,setMessage] = useState('');

    /*
    const [email, handleEmail] = useState({field: '', valid: null})
    const [password, handlePassword] = useState({field: '', valid: null})
    const [formValid, changeValid] = useState({field: '', valid: 'false'})

      Se pasa el estado al elemento input de nuestra vista para que lo procese. Además entra en las propiedades que tiene el componente, donde figuran --> state={email} changeState={handleEmail}
        **email en el ejemplo del elemento input, state={state} en el componente

    */

    const handleOnKeyDown = (event) => {
        if(event.keyCode === 13) sendLogin()
    };


    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };

    /*
    
    */

    const sendLogin = async () => {

        try {
            
            if(dataLogin.userType === 'Client') {
                
                const result = await axios.post('http://localhost:3000/user/login',dataLogin)
                console.log(result.data, 'esto es RESULT');
                props.dispatch({type: LOGIN, payload: result.data});
                return setTimeout(() => {history.push('/home-movie')}, 100);
            }else {
    
                const resultAdmin = await axios.post('http://localhost:3000/admin/login',dataLogin)
                props.dispatch({type: ADMINLOGIN, payload: resultAdmin.data});
                return setTimeout(() => {history.push('/home-admin')}, 100);
            };

        } catch (error) {
            setMessage('Email or password not found');
        };

        //Error management

        setMessage('');

        let errorMessage = checkError(dataLogin);
        
        setMessage(errorMessage);

        if(errorMessage){
            return;
        };


    };

  return (
    <div className="loginBody">
      <div className="imgGeek"><Link to='/'><img src={logo} alt="logo"/></Link></div>
      <div className="formContainer">
        <div className="contentLogin">
          <div className="titleLoginUp">Ponte cómodo...</div>
          <div className="imgLogin"><img src={popcorn} alt="logo" className="img"></img></div>
        </div>
        <div className="inputs">
          <div>
            <p>Email</p>
            <Input type="email" className="email" maxLength="50" name="email" onChange={handleState} onKeyDown={handleOnKeyDown}/>
          </div>
          <div>
            <p>Password</p>
            <Input type="password" className="password" maxLength="50" name="password" onChange={handleState} onKeyDown={handleOnKeyDown}/>
          </div>
        <select className="select" name="userType" defaultValue={'DEFAULT'} onChange={handleState}>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
        </select>
          <div className="buttonStyle">
            <button onKeyDown={handleOnKeyDown} onClick={()=> sendLogin()} className="btnStyle">Enviar</button>
          </div>
            <Link className="" to='/Register'><p>Si aún ni eres usuario, Regístrate!!!</p></Link> 
            <div className='errorMessage'>{message}</div>       
          <div className="titleLoginDown"><p>El mejor contenido en Streaming, para ti</p></div>
        </div>  
      </div>
    </div>
  );
}

export default connect()(Login);



