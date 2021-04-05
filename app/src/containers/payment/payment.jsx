import React, { useState } from 'react'
// import * as FaIcons from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

//Importaciones para componente y elementos de formulari y validación de errores
import {regExp} from '../../tools/error.handlers'
import Input from '../../components/input/input';
import { BtnContainer, BtnForm, ErrorMessage, SuccessMessage, ValidationIcon, Form } from '../../components/input/elements';
import { FaRegTimesCircle, FaRegUserCircle } from 'react-icons/fa';

import {connect} from 'react-redux';
import { STORED } from '../../redux/types/paymentTypes';



const Payment = (props) => {
    const history = useHistory();

    //Hooks para cada campo de validación
    const [dataVisa, handleVisa] = useState({field: '', valid: null})
    const [dataExpiration, handleExpiration] = useState({month: '', year: ''});
    const [dataCvv, handleCvv] = useState({field: '', valid: null});
    const [dataCardName, handleCardName] = useState({field: '', valid: null});
    const [formValid, handleValid] = useState({field: '', valid: 'false'})

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    }

    const onSubmit = (e) => {
        e.preventDefault();
  
        if(
            dataVisa.valid === 'true' && dataCardName.valid === 'true' && dataCvv.valid === 'true' && dataExpiration !== false
        ){
          handleValid(true);
          handleVisa({field: ''});/*valid: null*/
          handleCvv({field: '', valid: null});
          handleCardName({field: '', valid: null});
          handleExpiration({month: '', year: ''})
        }else {
          handleValid(false);
        }
      }

    const sendData = async () => {

        try {
            const body = {
                visa: dataVisa.field, 
                month: dataExpiration.month, 
                year: dataExpiration.year, 
                cvv: dataCvv.field, 
                cardName: dataCardName.field,
                ownerId: props.user.result._id
            }

            const data = await axios.post('http://localhost:3000/payment/', body)
            props.dispatch({type: STORED, payload: data.data});
      
            return setTimeout(() => {
                history.push('/login')
            }, 1000);

        } catch (error) {
            console.log('Something run wrong!!!');
        };
    };

    return (
        <div className="paymentContainer">
            <div className="steps">
                <ul className="nav">
                    <div className="go toRegister" onClick={() => {history.push('/register')}}>Crear cuenta</div>
                    <div className="go toPayment">Detalles de pago</div>
                    <div className="go toLogin" onClick={() => {history.push('/login')}}>Comenzar a ver</div>
                </ul>  
            </div>
            <div className="paymentForm">
            <Form action="" onSubmit={onSubmit}>
                <Input 
                    state={dataVisa}
                    type="number" 
                    label="VISA/MasterCard Número" 
                    maxLength="50" 
                    name="visa" 
                    changeState={handleVisa} 
                    onKeyDown={handleOnKeyDown}
                    errorLegend='La tarjeta debe de tener 9 números'
                    regExp={regExp.visa}
                    placeholder="Número de tarjeta"
                />
                <Input 
                    state={dataCvv}
                    type="number" 
                    label="CVV" 
                    maxLength="50" 
                    name="cvv" 
                    changeState={handleCvv} 
                    onKeyDown={handleOnKeyDown}
                    errorLegend='El código CVV debe contener 3 números'
                    regExp={regExp.cvv}
                    placeholder="CVV"
                />
                <select name="month" defaultValue={"DEFAULT"} onChange={handleExpiration} onKeyDown={handleOnKeyDown}>
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
                <select name="year" defaultValue={"DEFAULT"} onChange={handleExpiration} onKeyDown={handleOnKeyDown}>
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
                <Input 
                    state={dataCardName}
                    type="text" 
                    label="Nombre de la Tarjeta" 
                    maxLength="50" 
                    name="cardName" 
                    changeState={handleCardName} 
                    onKeyDown={handleOnKeyDown}
                    errorLegend='Debe escribir el titular de la tarjeta'
                    regExp={regExp.cardName}
                    placeholder="Nombre del titular"
                />
                {formValid === false && <ErrorMessage>
                    <p>
                    <ValidationIcon icon={FaRegTimesCircle}></ValidationIcon>
                    <b>Error:</b>Por favor rellena el formulario 
                    </p>
                </ErrorMessage>}
                <BtnContainer>
                    <BtnForm type="submit" onClick={() => sendData()}>Enviar</BtnForm>
                    {formValid === true && <SuccessMessage>Formulario completado exitosamente</SuccessMessage>}
                </BtnContainer>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        user: state.userReducer.user
    };
};

export default connect (mapStateToProps)(Payment)

