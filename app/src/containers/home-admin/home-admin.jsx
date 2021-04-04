import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {useHistory} from 'react-router-dom';

import { ADMINLOGOUT } from '../../redux/types/adminTypes';

const HomeAdmin = (props) => {

    let history = useHistory()

    const [users, setUsers] = useState({
        listUsers : []
    });

    const [rentals, setRentals] = useState({
        listRentals : []
    });

    const logOut =  () => {

        props.dispatch({type: ADMINLOGOUT, payload : {}});
    
        setTimeout(()=> {
            history.push('/');
        },300);
    };

    const showUsers = async () => {

        let collectionUsers = await axios.get('http://localhost:3000/user')
        
        setUsers({
            ...users,listUsers: collectionUsers.data.result
        })
    };

    const showRental = async () => {

        let collectionRentals = await axios.get('http://localhost:3000/order')

        setRentals({
            ...rentals, listRentals: collectionRentals.data.result
        });
    };
    console.log(rentals.listRentals)

    const deleteUser = async (user) => {

        const selectUser = window.confirm('You are about to delete this user, are you sure?');

        if(selectUser === true){
             await axios.delete(`http://localhost:3000/user/${user._id}`)
            showUsers()
        };
    };

    const deleteRental = async (rent) => {

        const selectUser = window.confirm('You are about to delete this rent, are you sure?');

        if(selectUser === true){
             await axios.delete(`http://localhost:3000/order/${rent._id}`)
            showRental()
        };
        console.log(deleteRental)
    };


    if(props.admin?.email) {
        return(
            <div className="containerAdmin">
                <div className="headerAdmin">
                <div>
                        <Button className="btnStyle" onClick={()=> logOut()}>Salir</Button>
                    </div>
                    <div className="nameStyle">
                        {props.admin.userName}
                    </div>
                    <div>
                        <button className="btnStyle" onClick={()=> showUsers()}>Mostrar usuarios</button>
                    </div>
                    <div>
                        <button className="btnStyle" onClick={()=> showRental()}>Mostrar alquileres</button>
                    </div>
                </div>
                <div className="listContainer">
                    <div className="usersContainer">
                        Lista de Usuarios
                        {
                            !users.listUsers
                            ?
                            <>
                                <div>
                                    "Get Out fucking nigga"
                                </div>
                            </>
                            :
                            <>
                                <div>
                                    {
                                        users.listUsers.map(user => {
                                            return(
                                                <div className="userData" key={user._id}>
                                                    <div onClick={() => deleteUser(user)}  className="showData id">ID del usuario: {user._id}</div>
                                                    <div>Nombre de usuario: {user.userName}</div>
                                                    <div>Email: {user.email}</div><br></br>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                    <div className="rentalsContainer">
                        Lista de Alquileres
                        {
                            !rentals.listRentals
                            ?
                            <>
                                <div>
                                    "No rentals yet"
                                </div>
                            </>
                            :
                            <>
                                <div>
                                    {
                                        rentals.listRentals.map(rent => {
                                            
                                            return(
                                                <div onClick={() => deleteRental(rent)} className="rentData" key={rent._id}>
                                                    <div>Usuario: {rent.userName}</div>
                                                    <div>Película: {rent.title}</div>
                                                    <div>Fecha del alquiler: {rent.dateInit}</div>
                                                    <div>Fecha de finalización: {rent.dateEnd}</div>
                                                    <div>Precio: {rent.price}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }else {
        return (
            <div>
                No eres el Admin mejor te piras...Plata o Plomo!!!
            </div>
        )
    };
    
};

const mapStateToProps = state => {
    return {
        admin : state.adminReducer.admin,
    }
};
  
export default connect(mapStateToProps)(HomeAdmin)

