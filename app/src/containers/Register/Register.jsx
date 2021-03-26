import React from 'react'


import { Link } from 'react-router-dom';

//React Bootstrap



const Register = () => {
    return (
        <div>
            <div className="stepCollection">
                        <div className="containerInput">
                            <div className="input1">
                               <input type="text" name="username" placeholder="Username"/>Nombre de Usuario :
                            </div>
                            <div className="input2">
                               <input type="email" name="email" placeholder="myemail@email.com"/>Email :
                            </div>
                            <div className="input3">
                               <input tye="password" name="password"/>Contraseña :
                            </div>
                        </div>
                <ul className="nav">
                    <li><Link to="/register">Crear cuenta</Link>
                        {/* <div className="containerInput">
                           <div className="input">
                               <input type="text" name="username" placeholder="Username">Nombre de Usuario :</input>
                            </div>
                           <div className="input">
                               <input type="email" name="email" placeholder="myemail@email.com">Email :</input>
                            </div>
                           <div className="input">
                               <input tye="password" name="password">Contraseña :</input>
                            </div>
                        </div> */}
                    </li>

                    <li><Link to="/pay">Detalles de pago</Link></li>

                    <li><Link to="/login">Comenzar a ver</Link></li>

                </ul>
                {/* <div className="stepOne">
                    Crear cuenta
                </div>
                <div className="stepTwo">
                    Detalles de pago
                </div>
                <div className="stepThree">
                    Comenzar a ver
                </div> */}
            </div>
        </div>
    )
}

export default Register



