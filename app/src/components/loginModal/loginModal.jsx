import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '../input/input'



const ModalLogin = (props) => {
  const {
    classNameProps
  } = props;

  const [modal, setModal] = useState(false);

  const [dataLogin,setLogin] = useState({
    email : '',
    password: ''
  })

  const handleState = (event) => {
    setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };
  console.log(dataLogin)

  const toggle = () => setModal(!modal);

  const sendLogin = async () => {
    let result = await axios.post('http://localhost3000/')
  }

  return (
    <div>
<<<<<<< HEAD
      <Button className="btnSomething" onClick={toggle}>Iniciar Sesión</Button>
      <Modal className="modal" isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={classNameProps}>
        <ModalHeader className="header modal-header" toggle={toggle}>Inicia Sesión
        </ModalHeader>
        <ModalBody className="body">
        <div className="emailInput">
            User:
            <Input type="user" maxLength="50" onChange={handleState}/>
          </div>
          <div className="emailInput">
            Email:
            <Input type="email" maxLength="50" onChange={handleState}/>
          </div>
          <div className="paswordInput">
            Password:
            <Input type="password" maxLength="100" onChange={handleState}/>
          </div>
=======

      <Button className="btnModalActive" onClick={toggle}>Iniciar sesión</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
>>>>>>> ba92459e684c09e15922687fb1647487646ee556
        </ModalBody>
        <ModalFooter className="footer.modal">
          <Button className="btnSomething" onClick={sendLogin()}>Iniciar Sesión</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;


