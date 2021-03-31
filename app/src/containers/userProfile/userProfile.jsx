import React, {useState} from 'react'
// import {useHistory} from 'react-router-dom';
import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import axios from 'axios';
import {connect} from 'react-redux';


const UserProfile = (props) => {

    // const history = useHistory();

    //Estado de dataUser
    const [dataUser, setUser] = useState ({
        userName: '', 
        email: ''
    })

    //Estado de dataPayment
    const [dataPayment, setPayment] = useState ({
        visa: '',
        month: '',
        year: '',
        cvv: '',
        cardName: ''
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

            let idUser = props.user?._id;
            let idPayment = props.payment.result?._id;
            let token = props.user?.token;

            // if (!token) {
            //     return;
            // }

            if (dataUser.userName !== ''){
                console.log('estamos dentro de if props.user')
                let result = await axios.put(`http://localhost:3000/user/${idUser}`, dataUser, { headers: { authorization: token } });
                setUser(result.data)
                console.log(result.data, 'esto es result.dtat')
            } else {

                console.log('estamos dentro de if props.payment')
                let result = await axios.put (`http://localhost:3000/payment/${idPayment}`, dataPayment, { headers: { authorization: token } });
                setPayment(result.data)
            } 

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
                                <Input type="text" id="user" name="userName" placeholder={props.user.userName} onChange={handleStateUser}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email </Label>
                                <br></br>
                                <Input type="text" id="user" name="email" placeholder={props.user.email} onChange={handleStateUser}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="visa">VISA/Mastercard Número </Label>
                                <br></br>
                                <Input type="text" id="payment" name="visa" placeholder={props.payment.result.visa} onChange={handleStatePayment}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Fecha de Vencimiento(MM/AAAA)</Label>
                                <br></br>
                                <Input type="date" id="payment" name="month" placeholder={props.payment.result.month} onChange={handleStatePayment}/>
                                <Input type="date" id="payment" name="year" placeholder={props.payment.result.year} onChange={handleStatePayment}/>                              
                            </FormGroup>
                            <FormGroup>
                                <Label for="cvv">CVV </Label>
                                <br></br>
                                <Input type="number" id="payment" name="cvv" placeholder={props.payment.result.cvv} onChange={handleStatePayment}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cardName">Nombre de la Tarjeta </Label>
                                <br></br>
                                <Input type="text" id="payment" name="cardName" placeholder={props.payment.result.cardName} onChange={handleStatePayment}/>
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
