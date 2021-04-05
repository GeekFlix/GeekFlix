import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';


import {connect} from 'react-redux';
// import {UPDATE} from '../../redux/types/userTypes';
// import {UPDATECARD} from '../../redux/types/paymentTypes';

import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';

import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import {regExp} from '../../tools/error.handlers';
import Input from '../../components/input/input';
import { BtnContainer, BtnForm, ErrorMessage, SuccessMessage, ValidationIcon, Form } from '../../components/input/elements';

const UserProfile = (props) => {

    // const URL = 'http://localhost:3000/payment/'

    const idUser = props.user._id
    
    const token = props.token;
    const config = {
        headers: { 
            'authorization': `token ${token}` 
        }
    }

    const history = useHistory();

    // const [dataUser, setUser] = useState ({
    //     userName: props.user.userName || props.user?.result.userName, 
    //     email: props.user.email || props.user?.result.userName,
    //     _id: props.user._id 

    // })

    const [card, setCard] = useState({
        saveId: []
    });

    // const [dataPayment, setPayment] = useState ({
    //     visa: '',
    //     month: '',
    //     year: '',
    //     cvv: '',
    //     cardName: '',
    // });

    //Hooks para cada campo de validación
    const [dataEmail, handleEmail] = useState({field: '', valid: null})
    const [dataUserName, handleUserName] = useState({field:''})
   
    const [dataVisa, handleVisa] = useState({field: '', valid: null})
    const [dataExpiration, handleExpiration] = useState({month: '', year: ''});
    const [dataCvv, handleCvv] = useState({field: '', valid: null});
    const [dataCardName, handleCardName] = useState({field: '', valid: null});
    const [formValid, handleValid] = useState({field: '', valid: 'false'})
    
    useEffect(() => {
        
        getPayment()
    }, [])


    // Handlers
    // const handleStateUser = (event) => {
    //     setUser({...dataUser, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value});
        
    // };

    // const stateHandler = (event) => {
    //     setPayment({...dataPayment, 
    //         [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    // };

    const getPayment = async () => {
        try {
            const dataCard = await axios.get(`http://localhost:3000/payment/user/${idUser}`, config)
            
            setCard({
                ...card, saveId: dataCard.data.result[0]._id
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) pepin()
    }

    const onSubmit = (e) => {
        e.preventDefault();
  
        if(dataEmail.valid === 'true' && dataVisa.valid === 'true' && dataCardName.valid === 'true' &&  dataCvv.valid === 'true' )
        //   dataUserName !== false //   dataExpiration !== false  
        {
          handleValid(true);
          handleEmail({field: '', valid: null});
        //   handleUserName({userName: '', valid: true}
          handleVisa({field: ''});/*valid: null*/
          handleCvv({field: '', valid: null});
          handleCardName({field: '', valid: null});
        //   handleExpiration({month: '', year: ''})
        } else {
          handleValid(false);
        }
    };


    const pepin = async () =>{
        const body = {
            visa: dataVisa.field, 
            month: dataExpiration.month, 
            year: dataExpiration.year, 
            cvv: dataCvv.field, 
            cardName: dataCardName.field,
            ownerId: props.user._id
        }

        const bodyUser = {
            userName: dataUserName.field, 
            email: dataEmail.field,
            _id: props.user._id
        }
        const idPayment = card.saveId;

        const resultPayment = await axios.put(`http://localhost:3000/payment/${idPayment}`, body,{
        })
        console.log(resultPayment);

        const resultUser = await axios.put(`http://localhost:3000/user/${idUser}`,bodyUser, config);
        console.log(resultUser.data);
        // props.dispatch({type: UPDATE, payload: resultUser.data});
        // setUser({...dataUser, userName: resultUser.data.userName, email: resultUser.data.email })

        
    }

    const redirect = () => {
        return setTimeout(() => {
          history.push('/home-movie')
        }, 1000);

    }

    return (
        <div>
            <div className="userContainer">
                <div className="logoGeek">
                    <img src={logo} alt=""></img>
                    <div className="userMenu">
                        <button className="btnMenu" >Mis datos</button>
                        <button className="btnMenu" onClick={()=> redirect()}>Mis películas</button>
                    </div>
                </div>
                <div className="dataUser">
                    <div className="picProfile">
                        <img src={avatar1} alt="" className="imgAvatar"></img>
                    </div>
                    <div className="containerData">
                        <Form action="" onSubmit={onSubmit}>
                            <Input 
                                state={dataUserName}
                                type="text" 
                                label="UserName" 
                                maxLength="50" 
                                name="userName" 
                                changeState={handleUserName} 
                                onKeyDown={handleOnKeyDown}
                                placeholder="username"
                            />
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
                                state={dataVisa}
                                type="number" 
                                label="VISA/MasterCard Número" 
                                maxLength="50" 
                                name="visa" 
                                changeState={handleVisa} 
                                onKeyDown={handleOnKeyDown}
                                errorLegend='La tarjeta debe de tener 9 números'
                                regExp={regExp.visa}
                                placeholder="Número de tarjeta"
                            />
                            <Input 
                                state={dataCvv}
                                type="number" 
                                label="CVV" 
                                maxLength="50" 
                                name="cvv" 
                                changeState={handleCvv} 
                                onKeyDown={handleOnKeyDown}
                                errorLegend='El código CVV debe contener 3 números'
                                regExp={regExp.cvv}
                                placeholder="CVV"
                            />
                            <br></br>
                            <label>Fecha de Expiración<br></br>
                            <select className="selectExp" name="month" defaultValue={"DEFAULT"} onChange={handleExpiration} onKeyDown={handleOnKeyDown}> Mes de Expiración 
                                <option value="DEFAULT" disabled>Mes</option>
                                <option value="january">01</option>
                                <option value="february">02</option>
                                <option value="march">03</option>
                                <option value="april">04</option>
                                <option value="may">05</option>
                                <option value="june">06</option>
                                <option value="july">07</option>
                                <option value="august">08</option>
                                <option value="september">09</option>
                                <option value="october">10</option>
                                <option value="november">11</option>
                                <option value="december">12</option>
                            </select>
                            <select className="selectExp" name="year" defaultValue={"DEFAULT"} onChange={handleExpiration} onKeyDown={handleOnKeyDown}> 
                                <option value="DEFAULT" disabled>Año</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                                <option value="2036">2036</option>
                                <option value="2037">2037</option>
                                <option value="2038">2038</option>
                                <option value="2039">2039</option>
                                <option value="2040">2040</option>
                            </select><br></br>
                            </label>
                            <Input 
                                state={dataCardName}
                                type="text" 
                                label="Nombre de la Tarjeta" 
                                maxLength="50" 
                                name="cardName" 
                                changeState={handleCardName} 
                                onKeyDown={handleOnKeyDown}
                                errorLegend='Debe escribir el titular de la tarjeta'
                                regExp={regExp.cardName}
                                placeholder="Nombre del titular"
                            />                  
                            {formValid === false && <ErrorMessage>
                                <p>
                                <ValidationIcon icon={FaRegTimesCircle}></ValidationIcon>
                                <b>Error:</b>Por favor rellena el formulario 
                                </p>
                            </ErrorMessage>}
                            <BtnContainer>
                                <BtnForm type="submit" onClick={() => pepin()}>Enviar</BtnForm>
                                {formValid === true && <SuccessMessage>Formulario completado exitosamente</SuccessMessage>}
                            </BtnContainer>
                        </Form>
                    </div>
                </div>    
            </div>            
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user, 
        token: state.userReducer.token, 
        payment: state.paymentReducer.payment
    }
}

export default connect(mapStateToProps)(UserProfile);
