// import React from 'react'; 
// import {ErrorLegend, ValidationIcon, ErrorMessage, SuccessMessage} from '../elements/elements';
// import { FaRegUserCircle, FaRegTimesCircle } from "react-icons/fa";

// const Input = ({state, handleState, type, label, placeholder, name, ErrorLegend, expresionRegular, ValidationIcon, FaRegTimesCircle, FaRegUserCircle}) => {
// 	const onChange = (e) => {
// 		handleState({...state, field: e.target.value});
// 	}

// 	const validation = () => {
// 		if(expresionRegular){
// 			if(expresionRegular.test(state.field)){
// 				handleState({...state, valid: 'true'});
// 			} else {
// 				handleState({...state, valid: 'false'});
// 			}
// 		}

// 		// if(funcion){
// 		// 	funcion();
// 		// }
// 	}

// 	return (
// 		<div>
// 			<Label htmlFor={name} valid={state.valid}>{Label}</Label>
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
// 			<ErrorLegend valid={state.valid}>{ErrorLegend}</ErrorLegend>
// 		</div>
// 	);
// }
 
// export default Input;
