import React from 'react'
import {useHistory} from 'react-router-dom';
import logo from '../../assets/img/geekflix-green.png';
import avatar1 from '../../assets/img/avatar1.png';

import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

const UserProfile = () => {

    const history = useHistory();

    return (
        <div>
            <div className="userContainer">
                <div className="logoGeek">
                    <img src={logo}></img>
                    <div className="userMenu">
                        <Button>Mis datos</Button>
                        <Button>Mis películas</Button>
                    </div>
                </div>
                <div className="dataUser">
                    <div className="picProfile"><img src={avatar1} className="imgAvatar"></img></div>
                    <div className="cardData">
                        <Form>
                            <FormGroup className="registerFormGroup">
                                <Label for="exampleUserName">Username </Label>
                                <br></br>
                                <Input/>
                                <FormFeedback></FormFeedback>
                                <FormText></FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email </Label>
                                <br></br>
                                <Input/>
                                <FormFeedback></FormFeedback>
                                <FormText></FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Contraseña </Label>
                                <br></br>
                                <Input/>
                                <FormFeedback></FormFeedback>
                                <FormText></FormText>
                            </FormGroup>
                            <Button className="registerButton">Enviar</Button>
                        </Form>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default UserProfile
