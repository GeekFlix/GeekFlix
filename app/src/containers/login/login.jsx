import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/types/userTypes";
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

import Input from '../../components/input/input';

import logo from '../../assets/img/geekflix-green.png';
import popcorn from '../../assets/img/popcorn.jpg';


const Login = (props) => {

  const history = useHistory();
  
  const [dataLogin,setLogin] = useState({
    email : '',
    password: ''
  });

  const handleOnKeyDown = (event) => {
    if(event.keyCode === 13) sendLogin()
  }

  const handleState = (event) => {
    setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };
  console.log(dataLogin)


  const sendLogin = async () => {
    let  result =await axios.post('http://localhost:3000/user/login',dataLogin)
    console.log("IEEEEEE",result)
    props.dispatch({type: LOGIN, payload: result.data});
    return setTimeout(() => {history.push('/homeLogin')}, 100);
  };

  return (
    <div className="loginBody">
      <div className="imgGeek"><img src={logo}/></div>
      {/* <div className="emptyContainer"></div> */}
      <div className="formContainer">
        <div className="contentLogin">
          <div className="titleLoginUp">Ponte cómodo...</div>
          <div className="imgLogin"><img src={popcorn} className="img"></img></div>
          
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
          <div className="buttonStyle">
            <Button onClick={()=> sendLogin()} className="btnStyle">Enviar</Button> 
          </div>
          <div className="titleLoginDown"><p>El mejor contenido en Streaming, para ti</p></div>
        </div>
        
         
      </div>
    </div>
  );
}

export default connect()(Login);


