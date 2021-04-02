import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import {connect} from 'react-redux';
import {UPDATE} from '../../redux/types/userTypes';
import {SAVE, UPDATECARD} from '../../redux/types/paymentTypes';

import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';




const UserProfile = (props) => {
    const history = useHistory();
    //Estado de dataUser
    const [dataUser, setUser] = useState ({
<<<<<<< HEAD
        userName: props.user.userName, 
        email: props.user.email
=======
        userName: props.user.userName || props.user?.result.userName, 
        email: props.user.email || props.user?.result.userName,
        _id: props.user._id

>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09
    })

    //Estado de dataPayment
    const [dataPayment, setPayment] = useState ({
        visa: props.payment.visa,
        month: props.payment.month,
        year: props.payment.year,
        cvv: props.payment.cvv,
        cardName: props.payment.cardName
    })

<<<<<<< HEAD
    //useEffect para montar el componente
    // useEffect(() => {
    //    props.user.userName = props.user.result.userName;
    //    props.user.email = props.user.result.email;
    // }, [dataUser])

    // useEffect(() => {
    //     setUser({
    //         userName: props.user.result.userName,
    //         email: props.user.result.email
    //     });
    //  },)

    
=======
    // useEffect(() => {
    //     updateUser()
    // }, [])
>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09

    //Handlers
    const handleStateUser = (event) => {
        setUser({...dataUser, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value});
        
    };

    const handleStatePayment = (event) => {
        setPayment({...dataPayment, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
      
    }
<<<<<<< HEAD

    console.log(props, 'estas son las putas props ')
=======
    console.log(props,'PROOOPS PROFILE');
>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09
    //Función para cambiar los datos
    const updateUser = async () => {
        try {
<<<<<<< HEAD

=======
            
>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09
            let idUser = props.user._id;
            let idPayment = props.payment.result?._id;
            let token = props.user?.token;
            
            const updateData = window.confirm('Guardado con éxito');

            if(updateData === true ){
                
                
                let resultUser = await axios.put(`http://localhost:3000/user/${idUser}`, dataUser, { headers: { authorization: token } });
<<<<<<< HEAD
                setUser({...dataUser, userName: resultUser.data.userName, email: resultUser.data.email})

                props.dispatch({type: UPDATE, payload: resultUser.data});

            alert('Guardado con éxito!!!')   


            // if(props.user.result){
            //     props.user = props.user.result;
            // }
            // const prueba = props.user.result;
            // console.log(prueba, 'prueba')
            // props.user = prueba;
            // console.log(prueba, 'prueba igualada')
            // return prueba ;
=======
                console.log(resultUser);
                setUser({...dataUser, userName: resultUser.data.userName, email: resultUser.data.email })
                
                props.dispatch({type: UPDATE, payload: dataUser});
>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09

                console.log('update payment');
                let resultPayment = await axios.put (`http://localhost:3000/payment/${idPayment}`, dataPayment);
                setPayment(resultPayment.data)

                props.dispatch({type: UPDATECARD, payload: resultPayment.data});
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    const redirect = () => {
        return setTimeout(() => {
          history.push('/home-movie')
        }, 1000);

    }

    return (
        <div>
            <pre>{JSON.stringify(dataUser, null,2)}</pre>

            <div className="userContainer">
                <div className="logoGeek">
                    <img src={logo} alt=""></img>
                    <div className="userMenu">
                        <Button>Mis datos</Button>
                        <Button onClick={()=> redirect()}>Mis películas</Button>
                    </div>
                </div>
                <div className="dataUser">
                    <div className="picProfile"><img src={avatar1} alt="" className="imgAvatar"></img></div>
                    <div className="cardData">
                        <Form>
                            <FormGroup className="registerFormGroup">
                                <Label for="userName">Username </Label>
                                <br></br>
<<<<<<< HEAD
                                <Input type="text" id="user" name="userName" defaultValue={props.user.userName} onChange={handleStateUser}/>
=======
                                <Input type="text" id="user" name="userName" defaultValue={dataUser.userName} onChange={handleStateUser}/>
>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email </Label>
                                <br></br>
<<<<<<< HEAD
                                <Input type="text" id="user" name="email" defaultValue={props.user.email} onChange={handleStateUser}/>
=======
                                <Input type="text" id="user" name="email" defaultValue={dataUser.email} onChange={handleStateUser}/>
>>>>>>> 3859498d9bcdbf5519547a9c0263bd01a9544c09
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
