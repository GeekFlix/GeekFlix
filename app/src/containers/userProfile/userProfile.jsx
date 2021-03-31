import React, {useState} from 'react'
// import {useHistory} from 'react-router-dom';
import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';

import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import axios from 'axios';
import {connect} from 'react-redux';

const UserProfile = (props) => {

    // const history = useHistory();

    //Estado de dataUser
    const [dataUser, setUser] = useState ({
        userName: '', 
        email: '', 
        password:''
    })

    console.log(props.user, 'esto es props.user.userName')

    //Handlers
    const handleState = (event) => {
        setUser({...dataUser, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };


    //Función para cambiar los datos
    const updateUser = async () => {
        try {

            let id = props.user?.id;
            let token = props.user?.token;

            if (!token) {
                return;
            }

            let result = await axios.put(`http://localhost:3001/patients/${id}`, result.data, { headers: { authorization: token } });
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
                                <Label for="password">Contraseña </Label>
                                <br></br>
                                <Input type="password" id="password" name="password" placeholder={props.user.password} onChange={handleState}/>
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
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(UserProfile);
