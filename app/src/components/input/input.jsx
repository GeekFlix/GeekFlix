import React from 'react'; 
import {Input, InputGroup, ErrorLegend, ValidationIcon, Label, FormComponent} from './elements';
import { FaRegUserCircle, FaRegTimesCircle } from "react-icons/fa";

const InputComponent = ({dataState, type, label, placeholder, name, errorLegend, expresionRegular, changeState}) => {
	const onChange = (e) => {
		changeState({...dataState, field: e.target.value});
	}

	const validation = () => {
		if(expresionRegular){
			if(expresionRegular.test(dataState.field)){
				changeState({...dataState, valid: 'true'});
			} else {
				changeState({...dataState, valid: 'false'});
			}
		}

		// if(funcion){
		// 	funcion();
		// }
	}

	return (
		<div>
			<Label htmlFor={name} valid={dataState.valid}>{label}</Label>
			<InputGroup>
				<Input 
					type={type}
					placeholder={placeholder} 
					id={name}
					value={dataState.field}
					onChange={onChange}
					onKeyUp={validation}
					onBlur={validation}
					valid={dataState.valid}
				/>
				<ValidationIcon 
					icon={dataState.valid === 'true' ? FaRegUserCircle : FaRegTimesCircle}
					valid={dataState.valid}
				/>
			</InputGroup>
			<ErrorLegend valid={dataState.valid}>{errorLegend}</ErrorLegend>
		</div>
	);
}
 
export default InputComponent;




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