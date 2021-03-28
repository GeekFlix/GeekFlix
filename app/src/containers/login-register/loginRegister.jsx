
import React from 'react'

import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

import RegisterHeader from '../../components/registerHeader/registerHeader';

const LoginRegister = () => {
    return (
        <div>
            <div className="stepCollection">
                <RegisterHeader/>
                    <div className="containerForm">
                        <Form>
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
                            <Button>Enviar</Button>
                        </Form>
                    </div>      
            </div>
        </div>
    )
}

export default LoginRegister
