import React from 'react';

import styled, {css} from 'styled-components';
import { FaRegUserCircle, FaRegTimesCircle } from "react-icons/fa";

const colors = {
	borderColor: "#0075FF",
	errorColor: "#bb2929",
	successColor: "#1ed12d"
}

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.valid === 'false' && css`
		color: ${colors.error};
	`}
`;

const InputGroup = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colors.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valid === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valid === 'false' && css`
		border: 3px solid ${colors.error} !important;
	`}
`;

const ErrorLegend = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colors.error};
	display: none;
	${props => props.valid === 'true' && css`
		display: none;
	`}
	${props => props.valid === 'false' && css`
		display: block;
	`}
`;

const ValidationIcon = styled(FaRegTimesCircle, FaRegUserCircle)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	${props => props.valid === 'false' && css`
		opacity: 1;
		color: ${colors.error};
	`}
	${props => props.valid === 'true' && css`
		opacity: 1;
		color: ${colors.exito};
	`}
`;



const BtnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const BtnForm = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const SuccessMessage = styled.p`
	font-size: 14px;
	color: ${colors.exito};
`;

const ErrorMessage = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Form,
	Label,
	InputGroup,
	Input,
	ErrorLegend,
	ValidationIcon,
	BtnContainer,
	BtnForm,
	SuccessMessage,
	ErrorMessage
};
