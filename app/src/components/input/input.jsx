
import React from 'react';
import {Input, Label, InputGroup, ErrorLegend, ValidationIcon} from './elements';
import { FaRegUserCircle, FaRegTimesCircle } from "react-icons/fa";

const InputComponent = ({state, changeState, type, label, placeholder, name, errorLegend, regExp, funcion}) => {
	
	const onChange = (e) => {
		changeState({...state, field: e.target.value});
	}


	const validation = () => {
		if(regExp){
			if(regExp.test(state.field)){
				changeState({...state, valid: 'true'});
			} else {
				changeState({...state, valid: 'false'});
			}
		}
		

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valid={state.valid}>{label}</Label>
			<InputGroup>
				<Input 
					type={type}
					placeholder={placeholder} 
					id={name}
					value={state.field}
					onChange={onChange}
					onKeyUp={validation}
					onBlur={validation}
					valid={state.valid}
					
				/>
				<ValidationIcon 
					icon={state.valid === 'true' ? FaRegUserCircle : FaRegTimesCircle}
					valid={state.valid}
				/>
			
			<ErrorLegend valid={state.valid}>{errorLegend}</ErrorLegend>
            </InputGroup>
		</div>
	);
}
 
export default InputComponent;





/*
onKeyUp es una función que ejecuta una función en cuanto la tecla se levanta, leyendo así los cambios

onBlur se ejecuta la función cuando das click fuera del input

*/