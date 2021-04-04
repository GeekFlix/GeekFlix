const checkError = (dataState) => {
    for(let field in dataState) {
        switch(field) {
            case 'email':
                    if(dataState[field] === ''){
                        console.log(dataState[field])
                        return 'The field email cannot be empty'
                    }
                    // eslint-disable-next-line
                    if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(dataState[field]) ){
                        return 'The email does not have the expected format';
                    } ; 

                break;

            case 'password':
                    if(dataState[field] === ''){
                        return 'The field password cannot be empty'
                    };
                    // eslint-disable-next-line
                    if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(dataState[field])){
                        return 'The password must contain 8 characters, uppercase, lowercase, numbers and special characters';
                    };

                break;

                case 'visa':
                    if(dataState[field] === ''){

                        return 'The field visa cannot be empty'
                    };
                    // eslint-disable-next-line
                    if(! /^4[0-9]{12}(?:[0-9]{3})?$/.test(dataState[field])){
                        return 'escribir solo números';
                    };

                break;    

            case 'cvv':
                    if(dataState[field] === ''){
                        return 'The fieldcvv cannot be empty'
                    };
                    // eslint-disable-next-line
                    if(! /^[0-9]+$/.test(dataState[field])) {
                        return 'The cvv must have 3 numbers'
                    };


                break;
            case 'nombre de la tarjeta':
                    if(dataState[field] === ''){
                        return 'The field name cannot be empty'
                    };
                    // eslint-disable-next-line
                    if(! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(datosCheck[field])) {
                        return 'Must write only letters'
                    };


                break;    

            default:
                break;
        };
    };
};


export default checkError;


/*
const inputs = document.querySelectorAll('#formulario input');

const regExp = {
    email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/
    cvv: /^[0-9]+$/
    cardName: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/

}


const field = {
	email: false,
    password: false,
    visa: false,
    cvv: false, 
    cardName: false
}

const checkError = (e) => {
	switch (e.target.name) {
		case "email":
			validationField(regExp.email, e.target, 'email');
		break;
		case "password":
			validationField(regExp.password, e.target, 'password');
		break;
		case "visa":
			validationField(regExp.visa, e.target, 'visa');
		break;
		case "cvv":
			validationField(regExp.cvv, e.target, 'cvv');
		break;
		case "cardName":
			validationField(regExp.correo, e.target, 'carName');
		break;
	}
}

const validationField = (regExp, input, field) => {
	if(regExp.test(input.value)){
		document.getElementById(`grupo__${field}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${field}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${field} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		fields[field] = true;
	} else {
		document.getElementById(`grupo__${field}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${field}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${field} .formulario__input-error`).classList.add('formulario__input-error-activo');
		fields[field] = false;
	}
} 

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


*/

