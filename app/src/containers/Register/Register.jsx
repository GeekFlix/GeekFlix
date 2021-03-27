import React from 'react'


import { Link } from 'react-router-dom';

import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';




const Register = () => {
    return (
        <div>
            <div className="stepCollection">
                <ul className="nav">
                    <Link to="/register">Crear cuenta</Link>  
                    <Link to="/payment">Detalles de pago</Link>
                    <Link to="/login">Comenzar a ver</Link>
                </ul>
                <div className="containerForm">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">USERNAME</Label>
                            <Input/>
                            <FormFeedback valid>Sweet! that name is available</FormFeedback>
                            <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">EMAIL</Label>
                            <Input/>
                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                            <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">PASSWORD</Label>
                            <Input/>
                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                            <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
                    </Form>
                </div>
                
            </div>
        </div>
    )
}

export default Register


// Input: valid={propiedades de validación}, invalid={propiedades de validación}
