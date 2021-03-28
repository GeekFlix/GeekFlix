import React from 'react'
import { useHistory } from 'react-router';


import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import RegisterHeader from '../../components/registerHeader/registerHeader';

const Register = () => {

    const history = useHistory();

    const next = () => {
        return setTimeout(() => {
        history.push('/payment')
        }, 1000);
    }
    

    return (
        <div>
            <div className="stepCollection">
                <RegisterHeader/>
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
                        <Button onClick={next}>Enviar</Button>
                    </Form>
                </div>
                
            </div>
        </div>
    )
}

export default Register


// Input: valid={propiedades de validación}, invalid={propiedades de validación}
