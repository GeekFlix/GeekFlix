// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import Input from '../../components/input/input';


// const Login = (props) => {
  

//   const [modal, setModal] = useState(false);

//   const [dataLogin,setLogin] = useState({
//     email : '',
//     password: ''
//   })

//   const handleState = (event) => {
//     setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
//   };
//   console.log(dataLogin)

//   const toggle = () => {
//     setModal(!modal)
//     console.log("What happends") 
//   }

//   const sendLogin = async () => {
//     let result = await axios.post('http://localhost3000/user/login',dataLogin)
//     console.log("IEEEEEE",result)
//     // props.dispatch({type: LOGIN, payload: result.data});
//     // return setTimeout(() => {history.push('/HomeLogin')}, 100);
//   };

//   return (
//     <div className=" modalContainer">
     
//     </div>
//   );
// }

// export default Login;


