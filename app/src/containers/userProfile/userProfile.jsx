import React, {useState, useEffect} from 'react'
import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import axios from 'axios';
import {connect} from 'react-redux';
import {UPDATE} from '../../redux/types/userTypes';
import {SAVE} from '../../redux/types/paymentTypes';


const UserProfile = (props) => {

    //Estado de dataUser
    const [dataUser, setUser] = useState ({
        userName: props.user.result.userName, 
        email: props.user.result.email
    })

    //Estado de dataPayment
    const [dataPayment, setPayment] = useState ({
        visa: props.payment.result.visa,
        month: props.payment.result.month,
        year: props.payment.result.year,
        cvv: props.payment.result.cvv,
        cardName: props.payment.result.cardName
    })

    //Handlers
    const handleStateUser = (event) => {
        setUser({...dataUser, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value});
        
    };

    const handleStatePayment = (event) => {
        setPayment({...dataPayment, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
      
    }

    //Función para cambiar los datos
    const updateUser = async () => {
        console.log('estamos dentro de update')
        try {

            let idUser = props.user.result?._id;
            let idPayment = props.payment.result?._id;
            let token = props.user?.token;

                let resultPayment = await axios.put (`http://localhost:3000/payment/${idPayment}`, dataPayment);
                setPayment(resultPayment.data)

                props.dispatch({type: SAVE, payload: resultPayment.data});

                let resultUser = await axios.put(`http://localhost:3000/user/${idUser}`, dataUser, { headers: { authorization: token } });
                setUser(resultUser.data)

                props.dispatch({type: UPDATE, payload: resultUser.data});


            alert('Guardado con éxito!!!')


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="userContainer">
                <div className="logoGeek">
                    <img src={logo} alt=""></img>
                    <div className="userMenu">
                        <Button>Mis datos</Button>
                        <Button>Mis películas</Button>
                    </div>
                </div>
                <div className="dataUser">
                    <div className="picProfile"><img src={avatar1} alt="" className="imgAvatar"></img></div>
                    <div className="cardData">
                        <Form>
                            <FormGroup className="registerFormGroup">
                                <Label for="userName">Username </Label>
                                <br></br>
                                <Input type="text" id="user" name="userName" defaultValue={props.user.result.userName} onChange={handleStateUser}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email </Label>
                                <br></br>
                                <Input type="text" id="user" name="email" defaultValue={props.user.result.email} onChange={handleStateUser}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="visa">VISA/Mastercard Número </Label>
                                <br></br>
                                <Input type="text" id="payment" name="visa" defaultValue={props.payment.result.visa} onChange={handleStatePayment}/>
                            </FormGroup>
                            <FormGroup>
                            <div className="date-field">
                                <div className="dateText">
                                    Fecha de vencimiento (MM/AAAA)
                                </div>
                                <div className="months">
                                    <select name="month" defaultValue={props.payment.result.month} onChange={handleStatePayment}>
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
                                    <select name="year" defaultValue={props.payment.result.year} onChange={handleStatePayment}>
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
                                <Input type="number" id="payment" name="cvv" defaultValue={props.payment.result.cvv} onChange={handleStatePayment}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cardName">Nombre de la Tarjeta </Label>
                                <br></br>
                                <Input type="text" id="payment" name="cardName" defaultValue={props.payment.result.cardName} onChange={handleStatePayment}/>
                            </FormGroup>
                            <Button className="updateButton" onClick={() => updateUser()}>Enviar</Button>
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
