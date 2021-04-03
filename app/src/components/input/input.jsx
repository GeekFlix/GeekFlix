// import React from 'react'; 
// import {ErrorLegend, ValidationIcon, ErrorMessage, SuccessMessage, Label, FormComponent} from '../elements/elements';
// import { FaRegUserCircle, FaRegTimesCircle } from "react-icons/fa";

// const InputComponent = ({state, type, label, placeholder, name, errorLegend, expresionRegular, ValidationIcon, FaRegTimesCircle, FaRegUserCircle, changeState, FormComponent}) => {
// 	const onChange = (e) => {
// 		changeState({...state, field: e.target.value});
// 	}

// 	const validation = () => {
// 		if(expresionRegular){
// 			if(expresionRegular.test(state.field)){
// 				changeState({...state, valid: 'true'});
// 			} else {
// 				changeState({...state, valid: 'false'});
// 			}
// 		}

// 		// if(funcion){
// 		// 	funcion();
// 		// }
// 	}

// 	return (
// 		<div>
// 			<Label htmlFor={name} valid={state.valid}>{label}</Label>
// 			<InputGroup>
// 				<Input 
// 					type={type}
// 					placeholder={placeholder} 
// 					id={name}
// 					value={state.field}
// 					onChange={onChange}
// 					onKeyUp={validation}
// 					onBlur={validation}
// 					valid={state.valid}
// 				/>
// 				<ValidationIcon 
// 					icon={state.valid === 'true' ? FaRegUserCircle : FaRegTimesCircle}
// 					valid={state.valid}
// 				/>
// 			</InputGroup>
// 			<ErrorLegend valid={state.valid}>{errorLegend}</ErrorLegend>
// 		</div>
// 	);
// }
 
// export default InputComponent;




/*
onKeyUp es una función que ejecuta una función en cuanto la tecla se levanta, leyendo así los cambios

onBlur se ejecuta la función cuando das click fuera del input

El if de la validación sería para repetir la contraseña, porque no haría falta la expresión regular, por lo que en este caso la condición sería innecesaria porque no hay input de repetición de contraseña. 

expresionREgular = checkError?
checkError(field.state)

PENDIENTE:
- funciones y extracción de props con sass --> si no metemos estilo a pelo en jsx
- comprar expresiones regulares con archivo tools
- comparar app.js con los lugares donde meteremos el formulario
- create element para poder darle estilo a elements

EN LOGIN, para que compruebe campo por campo del formulario (botón de enviar)

const onSubmit = (e) => {
    e.preventDefault();

    if(email.valid === 'true' && password.valid === 'true'){
        changeValid(true)
        handleEmail({field:'', valid:null})
        handleEmail({field: '', valid:null})
    }else{
        changeValid(false)
    }
}

Esto se complementa llamando a formValid antes del elemento ErrorMessage {formValid === false && <ErrorMessage>}, de modo que si sale campos falsos salta el elemento del mensaje de error
Procedemos de modo similar con el formulario de éxito (debajo del botón)
{formValid === true && <SuccessMessage>}

*/