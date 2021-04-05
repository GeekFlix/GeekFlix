import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Form, FormGroup, Label, Input } from 'reactstrap';

import {connect} from 'react-redux';
import {UPDATE} from '../../redux/types/userTypes';
// import {UPDATECARD} from '../../redux/types/paymentTypes';



import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';



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

    const [dataUser, setUser] = useState ({
        userName: props.user.userName || props.user?.result.userName, 
        email: props.user.email || props.user?.result.userName,
        _id: props.user._id 

    })

    const [card, setCard] = useState({
        saveId: []
    });

    const [dataPayment, setPayment] = useState ({
        visa: '',
        month: '',
        year: '',
        cvv: '',
        cardName: '',
    });
    
    useEffect(() => {
        
        getPayment()
    }, [])


    // Handlers
    const handleStateUser = (event) => {
        setUser({...dataUser, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value});
        
    };

    const stateHandler = (event) => {
        setPayment({...dataPayment, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

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


    const pepin = async () =>{
        const body = {
            visa: dataPayment.visa,
            month: dataPayment.month,
            year: dataPayment.year,
            cvv: dataPayment.cvv,
            cardName: dataPayment.cardName,
            ownerId: props.user._id
        }

        const bodyUser = {
            userName: dataUser.userName,
            email: dataUser.email,
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
                    <div className="cardData">
                        <Form>
                            <FormGroup className="registerFormGroup">
                                <Label for="userName">Username </Label>
                                <br></br>
                                <Input 
                                    type="text" 
                                    id="user" 
                                    name="userName" 
                                    defaultValue={props.user.userName} 
                                    onChange={handleStateUser}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email </Label>
                                <br></br>
                                <Input 
                                    type="text" 
                                    id="user" 
                                    name="email" 
                                    defaultValue={props.user.email} 
                                    onChange={handleStateUser}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="visa">VISA/Mastercard Número </Label>
                                <br></br>
                                <input  
                                    type="text" 
                                    id="payment" 
                                    name="visa"
                                    maxLength="16" 
                                    onChange={stateHandler}
                                    onKeyDown={handleOnKeyDown}
                                />
                            </FormGroup>
                            <FormGroup>
                            <div className="date-field">
                                <div className="dateText">
                                    Fecha de vencimiento (MM/AAAA)
                                </div>
                                <div className="months">
                                    <select 
                                        name="month" 
                                        onChange={stateHandler}
                                        onKeyDown={handleOnKeyDown}
                                    >
                                        <option value="DEFAULT" disabled>- Select One -</option>
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
                                </div>
                                <div className="years">
                                    <select 
                                        name="year" name="year" 
                                        onChange={stateHandler}
                                        onKeyDown={handleOnKeyDown}
                                    >
                                        <option value="DEFAULT" disabled>- Select One -</option>
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
                                    </select>
                                </div>
                            </div>                            
                            </FormGroup>
                            <FormGroup>
                                <Label for="cvv">CVV </Label>
                                <br></br>
                                <input 
                                    type="text" 
                                    id="payment" 
                                    name="cvv"
                                    maxLength="3" 
                                    onChange={stateHandler}
                                    onKeyDown={handleOnKeyDown}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cardName">Nombre de la Tarjeta </Label>
                                <br></br>
                                <input 
                                    type="text" 
                                    id="payment" 
                                    name="cardName" 
                                    onChange={stateHandler}
                                    onKeyDown={handleOnKeyDown}
                                />
                            </FormGroup>
                        </Form>
                    </div>
                    <button className="updateButton" onClick={() => pepin()}>Enviar</button>
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
