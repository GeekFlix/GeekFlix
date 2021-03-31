import React, {useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';

import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import axios from 'axios';
import {connect} from 'react-redux';
// import {UPDATE} from '../../redux/types/userTypes';

const UserProfile = (props) => {

    // const history = useHistory();

    //Estado de dataUser
    const [dataUser, setUser] = useState ({
        userName: '', 
        email: '', 
        visa: '',
        month: '',
        year: '',
        cvv: '',
        cardName: ''
    })


    //Handlers
    const handleState = (event) => {
        setUser({...dataUser, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };

    //Nos traemos los datos por Redux para meter en placeholder
    useEffect(() => {
       
    }, [])

    //Función para cambiar los datos
    const updateUser = async () => {
        try {

            let id = props.user?.id;
            let token = props.user?.token;

            if (!token) {
                return;
            }

            let result = await axios.put(`http://localhost:3000/user/${id}` || `http://localhost:3000/payment/${id}`, dataUser, { headers: { authorization: token } });
                console.log("Laurinha revisinha",result.data)
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
                                <Input type="text" id="userName" name="userName" placeholder={props.user.userName} onChange={handleState}/>
                                <FormFeedback></FormFeedback>
                                <FormText></FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email </Label>
                                <br></br>
                                <Input type="text" id="email" name="email" placeholder={props.user.email} onChange={handleState}/>
                                <FormFeedback></FormFeedback>
                                <FormText></FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label for="visa">VISA/Mastercard Número </Label>
                                <br></br>
                                <Input type="text"  name="visaInput" placeholder={props.payment.visa} onChange={handleState}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Fecha de Vencimiento(MM/AAAA)</Label>
                                <br></br>
                                <Input type="date" id="month" name="month" placeholder={props.payment.month} onChange={handleState}/>
                                <Input type="date" id="year" name="year" placeholder={props.payment.year} onChange={handleState}/>                              
                            </FormGroup>
                            <FormGroup>
                                <Label for="cvv">CVV </Label>
                                <br></br>
                                <Input type="number" id="cvv" name="cvv" placeholder={props.payment.cvv} onChange={handleState}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cardName">Nombre de la Tarjeta </Label>
                                <br></br>
                                <Input type="text" id="cardName" name="cardName" placeholder={props.payment.cardName} onChange={handleState}/>
                                <FormFeedback></FormFeedback>
                                <FormText></FormText>
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
        payment: state.userReducer.payment
    }
}

export default connect(mapStateToProps)(UserProfile);
